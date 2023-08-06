<?php
$db_ip=trim(shell_exec("/bin/cat /etc/ossim/ossim_setup.conf | grep db_ip| awk -F= '{print $2}'"));
$db_user=trim(shell_exec("/bin/cat /etc/ossim/ossim_setup.conf | grep '^user='| awk -F= '{print $2}'"));
$db_pass=trim(shell_exec("/bin/cat /etc/ossim/ossim_setup.conf | grep '^pass='| awk -F= '{print $2}'"));
$db_id=trim(shell_exec("/bin/cat /usr/share/ossim/www/forensics/net.sh | grep '^#LAST_ID='| awk -F= '{print $2}'"));
$last_id=$db_id;

if (!$con = mysql_connect($db_ip,$db_user,$db_pass)) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('alienvault', $con)) {
    echo 'Could not select database';
    exit;
}

$qry    = "SELECT i.id,ia.src_ips,ia.dst_ips,ie.src_ips as src_ipse,ie.dst_ips as dst_ipse FROM incident i LEFT JOIN incident_alarm ia ON i.id=ia.incident_id LEFT JOIN incident_event ie ON i.id=ie.incident_id WHERE i.id > $db_id";
$result = mysql_query($qry,$con);

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

$id= array();
$src=array();
$dst=array();

while ($row = mysql_fetch_array($result)) {
    if (($row['id'] && $row['src_ips'] && $row['dst_ips']) || ($row['id'] && $row['src_ipse'] && $row['dst_ipse'])){
    	$id[]=$row['id'];
	if ($row['src_ips'])
   		$src[]=$row['src_ips'];
	else
		$src[]=$row['src_ipse'];
        if ($row['dst_ips'])
    		$dst[]=$row['dst_ips'];
	else
		$dst[]=$row['dst_ipse'];
	$last_id=$row['id'];
    }
}

$id=implode(',',$id);
$src=implode(',',$src);
$dst=implode(',',$dst);
if (!empty($id))
	shell_exec("sudo /usr/share/ossim/www/forensics/net.sh Sdn $id $src $dst");
shell_exec("/bin/sed -i 's/^#LAST_ID=.*/#LAST_ID=$last_id/g' /usr/share/ossim/www/forensics/net.sh");
mysql_free_result($result);
?>

