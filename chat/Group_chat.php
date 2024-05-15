<?php
if (isset($_POST['submit'])){
/* Attempt MySQL server connection. Assuming
you are running MySQL server with default 
setting (user 'root' with no password) */
$link = mysqli_connect("localhost", 
            "root", "", "chat_app");
  
// Check connection
if($link === false){
    die("ERROR: Could not connect. "
          . mysqli_connect_error());
}
  
// Escape user inputs for security
$un= mysqli_real_escape_string(
      $link, $_REQUEST['uname']);
$m = mysqli_real_escape_string(
      $link, $_REQUEST['msg']);
date_default_timezone_set('Asia/Kolkata');
$ts=date('y-m-d h:ia');
  
// Attempt insert query execution
$sql = "INSERT INTO chats (uname, msg, dt)
        VALUES ('$un', '$m', '$ts')";
if(mysqli_query($link, $sql)){
    ;
} else{
    echo "ERROR: Message not sent!!!";
}
 // Close connection
mysqli_close($link);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Messaging</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body onload="show_func()">
<div id="container">
    <main>
        <header>
            <img src="https://s3-us-west-2.amazonaws.com/
             s.cdpn.io/1940306/ico_star.png" alt="">
            <div>
                <h2>GROUP CHAT</h2>
            </div>
            <img src="https://s3-us-west-2.amazonaws.com/
            s.cdpn.io/1940306/ico_star.png" alt="">
        </header>
 
<script>
function show_func(){
 
 var element = document.getElementById("chathist");
    element.scrollTop = element.scrollHeight;
  
 }
 </script>
  
<form id="myform" action="Group_chat.php" method="POST" >
<div class="inner_div" id="chathist">
<?php 
$host = "localhost"; 
$user = "root"; 
$pass = ""; 
$db_name = "chat_app"; 
$con = new mysqli($host, $user, $pass, $db_name);
 
$query = "SELECT * FROM chats";
 $run = $con->query($query); 
 $i=0;
  
 while($row = $run->fetch_array()) : 
 if($i==0){
 $i=5;
 $first=$row;
 ?>
 <div id="triangle1" class="triangle1"></div>
 <div id="message1" class="message1"> 
 <span style="color:white;float:right;">
 <?php echo $row['msg']; ?></span> <br/>
 <div>
   <span style="color:black;float:left;
   font-size:10px;clear:both;">
    <?php echo $row['uname']; ?>, 
        <?php echo $row['dt']; ?>
   </span>
</div>
</div>
<br/><br/>
 <?php
 }
else
{
if($row['uname']!=$first['uname'])
{
?>
 <div id="triangle" class="triangle"></div>
 <div id="message" class="message"> 
 <span style="color:white;float:left;">
   <?php echo $row['msg']; ?>
 </span> <br/>
 <div>
  <span style="color:black;float:right;
          font-size:10px;clear:both;">
  <?php echo $row['uname']; ?>, 
        <?php echo $row['dt']; ?>
 </span>
</div>
</div>
<br/><br/>
<?php
} 
else
{
?>
 <div id="triangle1" class="triangle1"></div>
 <div id="message1" class="message1"> 
 <span style="color:white;float:right;">
  <?php echo $row['msg']; ?>
 </span> <br/>
 <div>
 <span style="color:black;float:left;
         font-size:10px;clear:both;"> 
 <?php echo $row['uname']; ?>, 
      <?php echo $row['dt']; ?>
 </span>
</div>
</div>
<br/><br/>
<?php
}
}
endwhile;
?>
</div>
    <footer>
        <table>
        <tr>
           <th>
            <input  class="input1" type="text"
                    id="uname" name="uname"
                    placeholder="From">
           </th>
           <th>
            
            <textarea id="msg" name="msg"
                rows='3' cols='50'
                placeholder="Type your message">
            </textarea></th>
           <th>
            <input class="input2" type="submit"
            id="submit" name="submit" value="send">
           </th>                
        </tr>
        </table>                
    </footer>
</form>
</main>    
</div>
 
</body>
</html>