<?php 

if(isset($_GET['file']) && file_exists($_GET['file'])){

  $filename = $_GET['file']; 

 $mime_type = mime_content_type ($filename);  
  
 header('Content-type: ' . $mime_type);
  header('Content-description: file transfer');
 header('Pragma: public');
 header('Expires: 0');
 header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
  header('Content-Length: ' . filesize($filename));
 header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
 header('Content-Transfer-Encoding: binary');
   header('Content-Range: ' . $filename);
 
 readfile($filename);
}else{

 echo "The file could not be found";
}

?>