var ajax = {
      get: function (url, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            callback(data);
          }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      }
    }


    function getData() {
      ajax.get("http://192.168.1.5/home/company", function (data) {
        var txt = "";
        for (var i in data) {
          txt += '<option value="' + i + '">' + data[i] + '</option>';
        }
        document.getElementById("company").innerHTML = txt;
      })
    }

    getData();

    var searchBtn = document.getElementsByClassName("search")[0];
    searchBtn.onclick = function () {
      var e = document.getElementById("company");
      var company = e.options[e.selectedIndex].value;
      var no = document.getElementsByClassName("NO")[0].value;
      ajax.get("http://192.168.1.5/home/kuaidi?company=" + company + "&code=" + no,function(data){
        data = JSON.parse(data);
        if (data.Traces.length > 0) {
            var html = "";
            for (var i = 0; i < data.Traces.length; i++) {
              html += "<div>" + data.Traces[i].AcceptStation + "</div>"
            }
            document.getElementById("info").innerHTML = html;
          } else {
            document.getElementById("info").innerHTML = "<div>无物流信息</div>"
          }
      })
    }