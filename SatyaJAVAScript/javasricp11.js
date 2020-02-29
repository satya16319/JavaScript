
    
var select=document.getElementById("Select");
a=["10th","12th","B.E/B.TECH","M.TECH"];
var  IsEnabled=true;
for(var i=0;i<a.length;i++)
{
       var option = document.createElement("OPTION");
       txt = document.createTextNode(a[i]);
       option.appendChild(txt);
       if(select)
       select.insertBefore(option,select.lastChild);
       
}
var select1=document.getElementById("select1");  
arr=["0","2","3","4",">=5",">=10"];
for(var i=0;i<arr.length;i++)
 {
       var option = document.createElement("OPTION");
       txt = document.createTextNode(arr[i]);
       option.appendChild(txt);
       if(select1)
       select1.insertBefore(option,select1.lastChild);
  }
  var select2=document.getElementById("cl");
  var codelan = ["JAVA", "PHP", "C#", "JavaScript","C++","C"];
  var myDiv = document.getElementById("cl");
  for (var i = 0; i < codelan.length; i++) {
      var checkBox = document.createElement("input");
      var label = document.createElement("label");
      var br = document.createElement("br");
      checkBox.type = "checkbox";
      checkBox.value = codelan[i];
      checkBox.name=codelan[i];
      if(codelan[i]=="JAVA" || codelan[i]=="C#")
      {
          checkBox.checked= true;
      }
      checkBox.id=codelan[i];
      myDiv.appendChild(checkBox);
      myDiv.appendChild(label);
      label.appendChild(document.createTextNode(codelan[i]));
      myDiv.appendChild(br);
  }

    function formdata(){

        var ar=[];
       var h="";
       var f=document.getElementById("male");
       var g=document.getElementById("female");
       if(f.checked==true)
       h=f.value;
       else if(g.checked==true)
       h=g.value;
       else
       alert("no gender selected");
       for(var i=0;i<codelan.length;i++){
          var f1=document.getElementById(codelan[i]);
          if(f1.checked==true)
       ar.push(f1.name);
       }

        var obj={
            FirstName:document.getElementById('firstName').value,
            LastName:document.getElementById('lastName').value,
            Email:document.getElementById("email").value,
            MobileNumber:document.getElementById("contactnumber").value,
            Address:document.getElementById("address").value,
             Username:document.getElementById("username").value,
             Password:document.getElementById("pwd").value,
             Gender:h,
           Qualifications:document.getElementById("Select").value,
             Experience:document.getElementById("select1").value,
            ar:ar
        };
        console.log(obj);
    }
