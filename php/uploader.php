<?php

require 'www/private/class/image.class.php';

function uploader($folder, $file) {
  
  $filename = $file['name'];
  $taille = filesize($file['tmp_name']);
  $tailleMaxi = 8000000;
  
  $exts = array('.png', '.gif', '.jpg', '.jpeg');
  $ext = strrchr($file['name'], '.');
  
  // Mauvaise extension -> 14568
  // Fichier trop gros -> 14569
  // Upload réussis -> 15670
  // Upload échoué -> 15671
  
  if(!in_array($ext, $exts)) { $return['code'] = '14568'; }
  if($taille > $tailleMaxi) { $return['code'] = '14569'; }
  
  if(!isset($return['code'])) {
    $filename = strtr($filename,
                      'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ',
                      'AAAAAACEEEEIIIIOOOOOUUUUYaaaaaaceeeeiiiioooooouuuuyy');
    $filename = preg_replace('/([^.a-z0-9]+)/i', '-', $filename);
    $filename = date('YmdHis').'-'.sha1($filename).$ext;
    $return['filename'] = $filename;
    
    if(move_uploaded_file($file['tmp_name'], $folder . $filename)) { $return['code'] = '15670'; }
    else { $return['code'] = '15671'; }
  }
  
  return $return;
}

function resizeAvatar($filename, $adress, $manager) {
  
  $manager->make($adress.$filename)
    ->fit(350, 350)
    ->interlace(true)
    ->save($adress . pathinfo($filename, PATHINFO_FILENAME) . '.png');
  $manager->make($adress.$filename)
    ->fit(115, 115)
    ->interlace(true)
    ->save($adress . pathinfo($filename, PATHINFO_FILENAME) . '-thumbs' . '.png');
}

function resizeBookCover($filename, $adress, $manager) {
  
  $manager->make($adress.$filename)
    ->fit(247, 350)
    ->interlace(true)
    ->save($adress . pathinfo($filename, PATHINFO_FILENAME) . '.png');
  $manager->make($adress.$filename)
    ->fit(81, 115)
    ->interlace(true)
    ->save($adress . pathinfo($filename, PATHINFO_FILENAME) . '-thumbs' . '.png');
}

?>
