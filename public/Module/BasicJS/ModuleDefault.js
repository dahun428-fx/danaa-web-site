//=====================================================================================
//이미지 관련 (S)
//=====================================================================================
var GlobalImagePreViewPopup;
function ImgPreView(url,strW,strH)
{
	var popWdith=strW; //너비
  	var popHeight=strH; //높이

  	if(strW > 801)
  	{
		popHeight/=popWdith/800; //높이 재설정
		popWdith=800; //너비 재설정
  	}

//  	test = window.open('','ImagePreView','width='+(parseInt(popWdith)+20)+',height='+(parseInt(popHeight)+2)+',scrollbars=1'); //새창을 이미지의 크기만큼 열고
	if(GlobalImagePreViewPopup != null)
		GlobalImagePreViewPopup.close();
/*
	GlobalImagePreViewPopup = window.open('','ImagePreView','width='+(parseInt(popWdith)+20)+',height='+(parseInt(popHeight)+2)+',scrollbars=1'); //새창을 이미지의 크기만큼 열고
*/
  	GlobalImagePreViewPopup = window.open('','ImagePreView','width='+(parseInt(strW)+20)+',height='+(parseInt(strH)+2)+',scrollbars=1'); //새창을 이미지의 크기만큼 열고
  	GlobalImagePreViewPopup.document.write("<html><head><title>::이미지 상세보기::</title></head><body topmargin=0 leftmargin=0 style='background-repeat:no-repeat;' onclick='self.close()' bgproperties='fixed' oncontextmenu='return false'><img src = '" + url + "' width='"+parseInt(strW)+"' hright='"+parseInt(strH)+"' border='0' alt='이미지' style='cursor:pointer'></body></html>"); //새창에 배경으로 그림을 뿌림
	GlobalImagePreViewPopup.document.clear();
}

// LEFT
function Left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}

// RIGHT
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

// trim
function Trim(str){
	return String(str).replace(/^\s+|\s+$/g,'');
}

// 숫자체크
function Global_numbercheck(obj)
{
    obj.value = obj.value.replace(/^\s+|\s+$/g,'');
    var strValue = obj.value;
    if(isNaN(strValue))
	{
		alert(_ms_check_number);
        obj.value = "0";
        obj.focus();
		return false;
	}
    else
	{
		return true;
	}
}

// 콤마
function addComma(obj,fLen)
{

	if(event.keyCode == 37 || event.keyCode == 39 )
	{
		return;
	}

	var fLen = fLen || 2;

	var strValue = obj.value.replace(/,|\s+/g,'');
	var strBeforeValue = (strValue.indexOf('.') != -1)? strValue.substring(0,strValue.indexOf('.')) :strValue ;
	var strAfterValue = (strValue.indexOf('.') != -1)? strValue.substr(strValue.indexOf('.'),fLen+1) : '' ;


	if(isNaN(strValue))
	{
		alert(strValue.concat(' : 숫자가 아닙니다.'));
		return false;
	}

	var intLast = strBeforeValue.length-1;

	var arrValue = new Array;
	var strComma = '';

	for(var i=intLast,j=0; i >= 0; i--,j++)
	{

		if( j !=0 && j%3 == 0)
		{
			strComma = ',';
		}
		else
		{
			strComma = '';
		}

		arrValue[arrValue.length] = strBeforeValue.charAt(i) + strComma ;
	}

	obj.value= arrValue.reverse().join('') + strAfterValue;
}

/*==================================================================================================
윈도우
==================================================================================================*/
// Window Open
function OpenWindow(JWinName,JOpenedFile,JWidth,JHeight)
{
	var x = (screen.width/2) - (JWidth/2);
	var y = (screen.height/2) - (JHeight/2);
	var NewWin = window.open('', JWinName, 'toolbar=no,resizable=no,scrollbars=yes,status=0,width='+JWidth+',height='+JHeight+',left='+x+',top='+y);
	NewWin.location = JOpenedFile;
}

// 창크기 조절
function WinSize(strW, strH)
{
	window.resizeTo(strW,strH);
}

// 채널모드로 윈도우 오픈
function ChannelModeWindowOpen(url)
{
    window.open(url,"","channelmode,scrollbars")
}

/*==================================================================================================
폼체크
==================================================================================================*/
// NULL체크
function CheckValue(controlid,message)
{
	var thisValue = document.all[controlid];
	var temp = "";
	string = '' + thisValue.value;
	splitstring = string.split(" ");
	for(i = 0; i < splitstring.length; i++)
	temp += splitstring[i];

	if(temp=="")
	{
		alert(message);
		thisValue.value="";
		thisValue.focus();
		return false;
	}
	else
	{
		return true;
	}
}

// NULL 체크 -> Nofocus
function CheckValue2(controlid,message)
{
	var thisValue = document.all[controlid];
	var temp = "";
	string = '' + thisValue.value;
	splitstring = string.split(" ");
	for(i = 0; i < splitstring.length; i++)
	temp += splitstring[i];

	if(temp=="")
	{
		alert(message);
		thisValue.value="";
		return false;
	}
	else
	{
		return true;
	}
}

// 삭제 처리
function DelYN (locationURL)
{
	if (confirm('정말로 삭제하시겠습니까?')) {

		document.location = locationURL;
	}
}

// Array 여부
function IsArray(controlid)
{
    var thisValue = document.all[controlid];

    if(!eval(thisValue.length))
    {
        return false;
    }
    else
    {
        return true;
    }
}

// 아이디체크
function CheckID( controlName )
{
	searchko = document.all[controlName].value;

	for (i = 0 ; i < searchko.length ; i++)
	{
		sko = searchko.charAt(i);

		if ((sko < '0' || sko > '9')&&(sko < 'a' || sko > 'z')&&(sko < 'A' || sko > 'Z'))
		{
			alert('회원 ID는 영문과 숫자만 가능합니다.');
			document.all[controlName].value = "";
			document.all[controlName].focus();
			return false;
		}
	}

	return true;
}

// 숫자체크
function MumberCheck(controlid,max)
{
	var thisValue = document.all[controlid];
	var age_value = thisValue.value;
	for (i = 0; i < age_value.length; i++)
	{
		if (!(age_value.charAt(i) >= '0' && age_value.charAt(i) <= '9')){
			alert("숫자만 가능합니다.");
			thisValue.value="";
			thisValue.focus();
			return false;
		}
	}

    if(parseFloat(age_value) > parseFloat(max)){
        alert("입력하신 번호가 너무 많습니다.");
        thisValue.value="";
        thisValue.focus();
        return false;
    }
}

// 라디오 버튼 선택여부 체크
function RadioCheck(controlid,message) {
	var thisValue = document.all[controlid];
	
	for(var i=0; i<thisValue.length; i++) {
		if(thisValue[i].checked) {
			return 	true;				
		}
	}
	alert(message);
	return false;
}

// 라디오 버튼 선택여부 체크
function radio_chk(form_name, field_name){
    var ilength = eval("document." + form_name + "." + field_name + ".length");
    var i = 0;
    var ichecked ;
    var ichk_cnt = 0;
    
    for(i = 0; i < ilength; i++){
        ichecked = eval("document." + form_name + "." + field_name + "[i].checked");
        
        if (ichecked == true)
            ichk_cnt = ichk_cnt + 1;
    }
    
    if(ichk_cnt < 1){
        eval("document." + form_name + "." + field_name + "[0].focus();");

        return false;
    }else
        return true;
}
/*==================================================================================================
기타
==================================================================================================*/
//메뉴 효과(blendtrans)
function bt(id,after)
{
eval(id+'.filters.blendtrans.stop();');
eval(id+'.filters.blendtrans.apply();');
eval(id+'.src="'+after+'";');
eval(id+'.filters.blendtrans.play();');
}

// 해당 텍스트 값에서 확장자를 추출합니다.
function Global_GetFileExtension( controlObject )
{
	var contolValue = controlObject.value;

	var index = contolValue.lastIndexOf(".")

	if ( ( Global_TrimSpaces(contolValue) != "" ) && ( contolValue.length != 0 ) )
	{
		return contolValue.substring(index+1).toLowerCase();
	}
	else
	{
		return '';
	}
}
// 공간 값 체크
function Global_TrimSpaces( text )
{
	var temp = "";

	text = '' + text.toUpperCase();

	splitstring = text.split(" ");

	for(i = 0; i < splitstring.length; i++)

	temp += splitstring[i];

	return temp;
}

//경고창
function AlertMsg(objectName, AlertMent){
    if(!$get(objectName).value){
        alert(AlertMent);
        $get(objectName).focus();
        return false;
    }

    return true;
}
//=====================================================================================
// Notice PopUp 관련 (E)
//=====================================================================================
function Global_goURL(strVar) {
	if (strVar != 0 )  
	{
		location.href= strVar; 
	}
}
//=====================================================================================
// Made in Korea Start (JQuery)
//=====================================================================================
	function GlobalFieldCheck(FieldName, FieldType)
	{
		if(FieldType == "input" || FieldType == "textarea" || FieldType == "select")
		{
            return $.trim($(FieldType + "[name=" + FieldName+ "]").val());
        }
		else if(FieldType == "radio" || FieldType == "checkbox")
		{
            return $.trim($(":input:" + FieldType + "[name=" + FieldName + "]:checked").val());
        }
	}

    function ReturnFieldValue(FieldName, FieldType){   // 필드에 입력된 값을 반환한다.
        if(FieldName == null)
		{
            alert("필드 정보를 입력하세요.");
        }
		else if(FieldType == "input" || FieldType == "textarea" || FieldType == "select")
		{
            return $.trim($(FieldType + "[name=" + FieldName+ "]").val());
        }
		else if(FieldType == "radio" || FieldType == "checkbox")
		{
            return $.trim($(":input:" + FieldType + "[name=" + FieldName + "]:checked").val());
        }
    }
    function FieldCheckAlert(FieldName, AlertMent, FieldType, FocusYN){ // 필드에 값이 입력됬는지 체크
        var ReturnValue = false;

        if(FieldName == null){
            alert("필드 정보를 입력하세요.");
        }else if(!ReturnFieldValue(FieldName, FieldType)){
            alert(AlertMent);

            if(FocusYN == "Y"){
                if(FieldType == "input" || FieldType == "textarea" || FieldType == "select"){
                    $(FieldType + "[name=" + FieldName + "]").focus();
                }else if(FieldType == "radio" || FieldType == "checkbox"){
                    $(":input:" + FieldType + "[name=" + FieldName + "]").focus();
                }
            }

            ReturnValue = false;
        }else{
            ReturnValue = true;
        }

        return ReturnValue;
    }

    function ButtonValueReturn(FieldName){ // Radio,Checkbox의 선택된 값을 반환한다
        var ReturnValue;

        $("input[name=" + FieldName + "]").each(function(){
            if(this.checked == true){
                ReturnValue = this.value;
            }
        });

        return ReturnValue
    }

    function chkPatten(field, patten){ // 입력된 값들의 형식 체크
        var idCheck = /^[a-zA-Z]{1}[a-zA-Z0-9_-]{0,10}$/;
        var pwCheck = /^[a-zA-Z0-9_-]{5,10}$/;
        var mailCheck = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var telCheck = /^[0-9]{8,11}$/;
		var NumCheck =/^[0-9]+$/;


        
        patten = eval(patten);

        if(!patten.test(ReturnFieldValue(field, "input"))){
            return false;
        } else {
            return true;
        }
    }
    function chkPattenMsg(field, patten, msg){ // 입력된 값들의 형식 체크
        var idCheck = /^[a-zA-Z]{1}[a-zA-Z0-9_-]{3,11}$/;
        var pwCheck = /^[a-zA-Z0-9_\-~!@#$%^&*()=+\\|]{6,16}$/;
        var mailCheck = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var telCheck = /^[0-9]{8,11}$/;
		var NumCheck =/^[0-9]+$/;

        patten = eval(patten);
        if(!patten.test(ReturnFieldValue(field, "input"))){
            alert(msg)
			 $("input[name=" + field + "]").attr({value:""})
			 $("input[name=" + field + "]").focus();
            return false;
        } else {
            return true;
        }
    }
    function fnGlobalPasswordPattenCheck(field){ // 입력된 값들의 형식 체크
//		var regExpPw = /(?=.*\d{1,16})(?=.*[~`!@#$%\^&*()-+=]{1,16})(?=.*[a-zA-Z]{2,16}).{8,16}$/;
		var regExpPw = /(?=.*\d{1,16})(?=.*[~`!@#$%\^&*()-+=]{1,16})(?=.*[a-zA-Z]{2,16}).{6,16}$/;
		var patt_4num1 = /(\w)\1\1/; // 같은 영문자&숫자 연속 3번 정규식
		var patt_4num3 = /([가-힣ㄱ-ㅎㅏ-ㅣ\x20])\1\1/; // 같은 한글 연속 3번 정규식
		var patt_cont = /(012)|(123)|(234)|(345)|(456)|(567)|(678)|(789)|(890)/; // 연속된 숫자 정규식

		var check_pwd = ReturnFieldValue(field, "input");

		if (patt_4num1.test(check_pwd) || patt_4num3.test(check_pwd) || patt_cont.test(check_pwd))
		{
			alert("비밀번호는 연속된 숫자(문자)를 사용할 수 없습니다.");
			return false;
		} 


        patten = eval(regExpPw);
        if(!patten.test(ReturnFieldValue(field, "input"))){
            alert("영문 대ㆍ소문자, 숫자, 특수문자의 조합 6-16자로 설정해주세요.");
			 $("input[name=" + field + "]").attr({value:""})
			 $("input[name=" + field + "]").focus();
            return false;
        } else {
            return true;
        }
    }    
    function EmailCheck(FieldName){
        var EmailValue = $("input[name=" + FieldName + "1]").val() + '@' + $("input[name=" + FieldName + "2]").val();
        var mailCheck = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(!mailCheck.test(EmailValue)){
            alert("올바른 이메일 형식이 아닙니다.");
            return false;
        } else {
            return true;
        }
    }
	
    function EmailCheck2(FieldName){
        var EmailValue = $("input[name=" + FieldName + "]").val();
        var mailCheck = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(!mailCheck.test(EmailValue)){
            alert("올바른 이메일 형식이 아닙니다.");
			 $("input[name=" + FieldName + "]").attr({value:""})
			 $("input[name=" + FieldName + "]").focus();
            return false;
        } else {
            return true;
        }
    }

    function EmailCheck3(EmailValue){
        var mailCheck = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(!mailCheck.test(EmailValue)){
            alert("올바른 이메일 형식이 아닙니다.");
            return false;
        } else {
            return true;
        }
    }

    function NumberCheck(CheckObject){ // 입력 필드에 숫자 이외의 값은 삭제
        CheckObject.value = CheckObject.value.replace( /\D/g, '' );

        //$(".NumberCheck").bind("keyup", function(event){ NumberCheck(this); });
    }

    function ShowHidden(Type, Name, ChangeState, Option){
        /*
            대상의 Display 상태를 변경한다.
            Type : Class, Id
            Name : class 나 id 명
            ChangeState : show, hide
            Option : slow
        */        
            
        if(ChangeState != "show" && ChangeState != "hide"){
            alert(Name + " " + Type + "의 변경할 Display 속성을 입력하세요.");
            return;
        }

        var Oj;

        if(Type == "Class"){
            Type = ".";
        }else if(Type == "Id"){
            Type = "#";
        }
        
        Oj = "$(\"" + Type + Name + "\")";
        eval(Oj + "." + ChangeState + "(\"" + Option+ "\")");
    }

    function ZipcodeSearch(FieldName){
        window.open("/Module/Global/ZipcodeSearch.asp?FieldName=" + FieldName, "ZipcodeSearch", "scrollbars=yes, width=100, height=100");
    }

    function ZipcodeSearch2(FieldName){
        window.open("/Module/Global/ZipcodeSearchByDRM.asp?FieldName=" + FieldName, "ZipcodeSearch", "scrollbars=yes, width=100, height=100");
    }

    // 회원가입 - 우편번호검색란 확인
    function CheckZipCode()
    {
        if(!FieldCheckAlert("Dong", "검색할 지역을 입력하세요.", "input", "Y")){ return false; }
    }
    function ZipcodeAddressSend(Addr,ZipCodeFieldName,Address1FieldName)
    {
        var AddressArr = Addr.split("||");

        var FieldName = ReturnFieldValue("FieldName", "input");

        opener.$("input[name=" + ZipCodeFieldName + "]").attr({"value" : AddressArr[0]});
        opener.$("input[name=" + Address1FieldName + "]").attr({"value" : AddressArr[1]});

        self.close();

    }
    function ZipcodeSearchCheck(){
        var SearchText = ReturnFieldValue("SearchText", "input");

        if(!FieldCheckAlert("SearchText", "검색할 지역을 입력하세요.", "input", "Y")){ return false; }

        $.ajax({
            type : "post",
            url : "/Etc/Ajax_ZipcodeSearch.asp",
            data : "SearchText=" + SearchText,
            error: function(html){
                alert("실행중 에러 발생");
            },
            success: function(html){
                if(html == "Not Found"){
                    $(".ResultFail").show();
                    $("input[name=SearchText]").attr({"value" : ""});
                }else{
                    $(".ResultSuccess").show();
                    $("#ZipcodeList").html(html);
                }
            }
        });

        return false;
    }

    function AddressSend(SeqNum){
        ZipCode = $("#Zipcode" + SeqNum).text().split("-");
        
        ReturnValue = Array();

        ReturnValue[0] = ZipCode[0];
        ReturnValue[1] = ZipCode[1];
        ReturnValue[2] = $("#Address" + SeqNum).text();

        var FieldName = ReturnFieldValue("FieldName", "input");

        for(var i = 1; i <= 3; i++){
            opener.$("input[name=" + FieldName + i + "]").attr({"value" : ReturnValue[i - 1]});
        }

        opener.$("input[name=" + FieldName + "4]").focus();
        self.close();
    }
    
    function JuminOverlapCheckPopup(Gubun){
        $("input[name=JuminOverlapCheckState]").attr({"value" : "" });
        
        if(!JuminCheck("Jumin")){ return; }

        window.open("/Etc/JuminOverlapCheckPopup.asp?Gubun=" + Gubun, "JuminOverlapCheckPopup", "scrollbars=yes, width=100, height=100");
    }

    function JuminOverlapCheck(Gubun){
        $("#ResultFail").hide();
        $("#ResultSuccess").hide();

        if(!FieldCheckAlert("Jumin1", "주민등록번호를 입력하세요.", "input", "Y")){ return false; }
        if(!FieldCheckAlert("Jumin2", "주민등록번호를 입력하세요.", "input", "Y")){ return false; }
        if(!JuminCheck("Jumin")){ return false; }

        var Jumin1 = ReturnFieldValue("Jumin1", "input");
        var Jumin2 = ReturnFieldValue("Jumin2", "input");
        
        $.ajax({
            type : "post",
            url : "/Etc/Ajax_JuminOverlapCheck.asp",
            data : "Gubun=" + Gubun + "&Jumin1=" + Jumin1 + "&Jumin2=" + Jumin2,
            error: function(html){
                alert("실행중 에러 발생");
            },
            success: function(html){
                if(html == "Not Found"){
                    $("#ResultSuccess").show();
                    
                    if(Gubun == "Donator"){
                        DonateApplicantInfomaintLoad();
                    }
                }else{
                    $("#ResultFail").show();
                }
            }
        });

        return false;
    }

    function JuminOverlapCheck2(Gubun){
        var OverlapCheck = "Y";

        if(!FieldCheckAlert("Jumin1", "주민등록번호를 입력하세요.", "input", "Y")){ return false; }
        if(!FieldCheckAlert("Jumin2", "주민등록번호를 입력하세요.", "input", "Y")){ return false; }
        if(!JuminCheck("Jumin")){ return false; }

        var Jumin1 = ReturnFieldValue("Jumin1", "input");
        var Jumin2 = ReturnFieldValue("Jumin2", "input");
        var OldJumin1 = ReturnFieldValue("OldJumin1", "input");
        var OldJumin2 = ReturnFieldValue("OldJumin2", "input");
        
        if((OldJumin1 != "" && OldJumin2 != "") && (OldJumin1 == Jumin1 && OldJumin2 == Jumin2)){
            OverlapCheck = "N";
        }

        if(OverlapCheck == "Y"){
            $.ajax({
                type : "post",
                url : "/Etc/Ajax_JuminOverlapCheck.asp",
                data : "Gubun=" + Gubun + "&Jumin1=" + Jumin1 + "&Jumin2=" + Jumin2,
                error: function(html){
                    alert("실행중 에러 발생");
                },
                success: function(html){
                    if(html == "Not Found"){
                        $("input[name=JuminOverlapCheckState]").attr({value: "Y"});
                        JuminSend3(Gubun);
                    }else{
                        $("input[name=JuminOverlapCheckState]").attr({value: "N"});
                        alert("이미 등록이 되어 있는 주민번호입니다.");
                    }
                }
            });
        }
    }

    function JuminSend(Gubun){
        var Jumin1 = ReturnFieldValue("Jumin1", "input");
        var Jumin2 = ReturnFieldValue("Jumin2", "input");
        
        opener.$("input[name=Jumin1]").attr({"value" : Jumin1 });
        opener.$("input[name=Jumin2]").attr({"value" : Jumin2 });
        opener.$("input[name=JuminOverlapCheckState]").attr({"value" : "Y" });

        if(Gubun == "DonateApplicant"){
            opener.RepresentativeDisplay();
        }else if(Gubun == "Donator"){
            var BirthCheck = Jumin2.substr(0, 1);

            if(BirthCheck == 1 || BirthCheck == 2){
                Jumin1 = 19 + Jumin1;
            }else{
                Jumin1 = 20+ Jumin1;
            }

             opener.$("select[name=BirthYear]").attr({value: Jumin1.substr(0, 4)});
             opener.$("select[name=BirthMonth]").attr({value: Jumin1.substr(4, 2)});
             opener.$("select[name=BirthDay]").attr({value: Jumin1.substr(6, 2)});
        }

        self.close();
    }

    function JuminSend2(){
        var Jumin1 = ReturnFieldValue("Jumin1", "input");
        var Jumin2 = ReturnFieldValue("Jumin2", "input");
        
        opener.$("input[name=Jumin1]").attr({"value" : Jumin1 });
        opener.$("input[name=Jumin2]").attr({"value" : Jumin2 });
        opener.$("input[name=JuminOverlapCheckState]").attr({"value" : "Y" });

        DonateApplicantInfoSendning()

        var BirthCheck = Jumin2.substr(0, 1);

        if(BirthCheck == 1 || BirthCheck == 2){
            Jumin1 = 19 + Jumin1;
        }else{
            Jumin1 = 20+ Jumin1;
        }

         opener.$("select[name=BirthYear]").attr({value: Jumin1.substr(0, 4)});
         opener.$("select[name=BirthMonth]").attr({value: Jumin1.substr(4, 2)});
         opener.$("select[name=BirthDay]").attr({value: Jumin1.substr(6, 2)});

        self.close();
    }

    function JuminSend3(Gubun){
        var Jumin1 = ReturnFieldValue("Jumin1", "input");
        var Jumin2 = ReturnFieldValue("Jumin2", "input");
        
        $("input[name=Jumin1]").attr({"value" : Jumin1 });
        $("input[name=Jumin2]").attr({"value" : Jumin2 });
        $("input[name=JuminOverlapCheckState]").attr({"value" : "Y" });

        if(Gubun == "DonateApplicant"){
            RepresentativeDisplay();
        }else if(Gubun == "Donator"){
            var BirthCheck = Jumin2.substr(0, 1);

            if(BirthCheck == 1 || BirthCheck == 2){
                Jumin1 = 19 + Jumin1;
            }else{
                Jumin1 = 20+ Jumin1;
            }

             $("select[name=BirthYear]").attr({value: Jumin1.substr(0, 4)});
             $("select[name=BirthMonth]").attr({value: Jumin1.substr(4, 2)});
             $("select[name=BirthDay]").attr({value: Jumin1.substr(6, 2)});
        }
    }

    function DonateApplicantInfoSendning(){
        var Name = ReturnFieldValue("Name", "input");
            
        if(Name != ""){
            var OldJumin1 = opener.ReturnFieldValue("OldJumin1", "input");
            var OldJumin2 = opener.ReturnFieldValue("OldJumin2", "input");
            var DonateApplicantInfoSendingYN = "N";

            if(OldJumin1 == "" && OldJumin2 == ""){
                DonateApplicantInfoSendingYN = "Y";
            }else if((OldJumin1 != "" && OldJumin2 != "") && (OldJumin1 != Jumin1 && OldJumin2 != Jumin2)){
                DonateApplicantInfoSendingYN = "Y";
            }
        }

        if(DonateApplicantInfoSendingYN == "Y"){
            opener.$("input[name=Name]").attr({value: ReturnFieldValue("Name", "input")});
            opener.$("select[name=Tel1]").attr({value: ReturnFieldValue("Tel1", "input")});
            opener.$("input[name=Tel2]").attr({value: ReturnFieldValue("Tel2", "input")});
            opener.$("input[name=Tel3]").attr({value: ReturnFieldValue("Tel3", "input")});
            opener.$("select[name=Hp1]").attr({value: ReturnFieldValue("Hp1", "input")});
            opener.$("input[name=Hp2]").attr({value: ReturnFieldValue("Hp2", "input")});
            opener.$("input[name=Hp3]").attr({value: ReturnFieldValue("Hp3", "input")});
            opener.$("input[name=Zipcode1]").attr({value: ReturnFieldValue("Zipcode1", "input")});
            opener.$("input[name=Zipcode2]").attr({value: ReturnFieldValue("Zipcode2", "input")});
            opener.$("input[name=Zipcode3]").attr({value: ReturnFieldValue("Address", "input")});
            opener.$("input[name=Zipcode4]").attr({value: ReturnFieldValue("DetailAddress", "input")});
        }
    }

    function AllCheck(FormName, FieldName){ // Checkbox 전체 선택, 선택 상태값은 AllCheck 필드에 저장
        var AllCheckState, CheckState, CheckStateValue;

        AllCheckState = ReturnFieldValue("txtAllCheck", "input");

        if(AllCheckState == ""){
            CheckState = true;
            CheckStateValue = "Y";
        }else{
            CheckState = false;
            CheckStateValue = "";
        }
		$(":form:" + FormName + ":input[name=txtAllCheck]").attr({ value : CheckStateValue});

        $(":form:" + FormName + ":input[name=" + FieldName + "]").each(
            function(){
                this.checked = CheckState;
            }
        );
    }

	function setComma(str){
		str = "" + str + "";
		var retValue = "";
		
		for(i = 0; i < str.length; i++)
			if(i > 0 && (i % 3) == 0)
				retValue = str.charAt(str.length - i -1) + "," + retValue;
			else
				retValue = str.charAt(str.length - i -1) + retValue;
		
		return retValue;
	}

    function CheckValueReset(FieldName){
        $("input[name=" + FieldName + "]").attr({checked : false });
    }

    function JuminCheck(FieldName){
        var Number = $("input[name=" + FieldName + "1]").val() + $("input[name=" + FieldName + "2]").val();
		var Sum=0;
		var Chk=0;
	
		for	(i=0;i<12;i++)	{
			if(i<8)
				Sum+=parseInt(Number.charAt(i))*(i+2);

			if(i>7)
				Sum+=parseInt(Number.charAt(i))*(i-6);
		}
		
		Chk = (Sum%11) + parseInt(Number.charAt(12));

        if(!(Chk == 1 || Chk == 11))	{
            alert("올바른 주민등록번호가 아닙니다.");
			$("input[name=" + FieldName + "1]").attr({"value":""});
			$("input[name=" + FieldName + "2]").attr({"value":""});
			$("input[name=" + FieldName + "1]").focus();
			return false;
		}else{
            return true;
        }
    }

    function JuminCheck2(Number){
		var Sum=0;
		var Chk=0;
	
		for	(i=0;i<12;i++)	{
			if(i<8)
				Sum+=parseInt(Number.charAt(i))*(i+2);

			if(i>7)
				Sum+=parseInt(Number.charAt(i))*(i-6);
		}
		
		Chk = (Sum%11) + parseInt(Number.charAt(12));

        if(!(Chk == 1 || Chk == 11))	{
            alert("올바른 주민등록번호가 아닙니다.");
			return false;
		}else{
            return true;
        }
    }

	function ForeignerNumberCheck(FieldName){
		var ForeignNumber = $("input[name=" + FieldName + "1]").val() + $("input[name=" + FieldName + "2]").val();
		var ch = ForeignNumber.substring( 11, 12 );

		if ( ch != 7 && ch != 8 && ch != 9 ){
			alert("올바른 외국인 번호가 아닙니다.");
			return false;
		}else{
			return true;
		}
	}

    function EmailInputFieldDisplay(Value){
        $("input[Name=Email2]").attr({value: Value});
        
        if($("select[name=EmailDomain]").val() == ""){
            $("input[Name=Email2]").css({width: 120});
            $("#EmailTD").css({width:130});
        }else{
            $("input[Name=Email2]").css({width: 0});
            $("#EmailTD").css({width:0});
        }
    }
	
	function EmailDomainDisplay(FieldName){
		var DomainValue = ReturnFieldValue(FieldName + "EmailDomain", "select");
		
		$("input[name=" + FieldName + "Email2]").attr({ value : DomainValue });

		if(DomainValue == ""){
			$("input[name=" + FieldName + "Email2]").attr({ "readonly" : false })
		}else{
			$("input[name=" + FieldName + "Email2]").attr({ "readonly" : true })
		}
	}

// type = file 인 컨트롤만 사용한다.
function ftnControlDisabledCheck(strValue,FieldName)
{
//	var CheckControlName = $("input:[name=" + FieldName + "]")
//	CheckControlName.select();
//	document.selection.clear();

	if(!strValue)
	{
		$("input[name="+FieldName+"]").attr({"disabled" : true });
//		$("input[name="+FieldName+"]").attr({"disabled" : "0" });
//		$("input:[name="+FieldName+"]").css({background : "#DCDCDC" });
	}
	else
	{
		$("input[name="+FieldName+"]").attr({"disabled" : false });
//		$("input[name="+FieldName+"]").attr({"disabled" : "" });
//		$("input:[name="+FieldName+"]").css({background : "#FFFFFF" });
	}
}

// didabled 시키기
function ftnFieldDisplayDisabled(FieldName,InFieldName)
{
	var _tempFieldName = ReturnFieldValue(FieldName, "select");
		$("input:[name="+InFieldName+"]").attr({"value" : _tempFieldName });
	if(_tempFieldName != "")
	{
		$("input:[name="+InFieldName+"]").attr({"disabled" : "0" });
	}
	else
	{
		$("input:[name="+InFieldName+"]").attr({"disabled" : "" });
	}
}

// disabled + 색상변화
function ftnFieldDisplayDisabled2(FieldName,InFieldName)
{
	var _tempFieldName = ReturnFieldValue(FieldName, "select");
		$("input:[name="+InFieldName+"]").attr({"value" : _tempFieldName });
	if(_tempFieldName != "")
	{
		$("input:[name="+InFieldName+"]").attr({"readonly" : "0" });
		$("input:[name="+InFieldName+"]").css({background : "#DCDCDC" });
	}
	else
	{
		$("input:[name="+InFieldName+"]").attr({"readonly" : "" });
		$("input:[name="+InFieldName+"]").css({background : "#FFFFFF" });
	}
}

function ftnFieldDisplayDisabled3(FieldName,InFieldName)
{
	var _tempFieldName = $(":input:select[name=" + FieldName+ "] > option[value=" + ReturnFieldValue(FieldName, "select") + "]").text();

		$("input:[name="+InFieldName+"]").attr({"value" : _tempFieldName });

	if(ReturnFieldValue(FieldName, "select") != "0904019")
	{
		$("input:[name="+InFieldName+"]").attr({"readonly" : true });
		$("input:[name="+InFieldName+"]").css({background : "#DCDCDC" });
	}
	else
	{
		$("input:[name="+InFieldName+"]").attr({"value" : "" });
		$("input:[name="+InFieldName+"]").attr({"readonly" : false });
		$("input:[name="+InFieldName+"]").css({background : "#FFFFFF" });
	}
}

// 컨트롤 존재 체크
function Global_ElementByIdCheck(controlType,controlName)
{
	if(controlType == "radio" || controlType == "checkbox")
	{
		FieldType = $(":input:" + controlType + "[name=" + controlName + "]").length;
	}
	else
	{
		FieldType = $(controlType + "[name=" + controlName+ "]").length;
	}

	if ( FieldType > 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}


// 입력불가 파일명 정리
function Global_FileTypeCheck(strType)
{
	var strTypeCheck = strType.replace(".","");
	if(strType.toLowerCase() != 'exe' && strType.toLowerCase() != 'asp' && strType.toLowerCase() != 'php' && strType.toLowerCase() != 'jsp' && strType.toLowerCase() != 'aspx' && strType.toLowerCase() != 'bat' && strType.toLowerCase() != 'cmd' && strType.toLowerCase() != 'msi' && strType.toLowerCase() != 'com' && strType.toLowerCase() != 'js' && strType.toLowerCase() != 'html')
		return true;
	else
		return false;
}

// 입력파일 체크
function Global_FileControlValueCheck(ControlName,strFileType)
{
	var CheckControlName = $("input[name=" + ControlName + "]")

	if(CheckControlName.val() != "")
	{
		val = CheckControlName.val().split("\\");
		f_name = val[val.length-1]; //마지막 화일명
		s_name = f_name.substring(f_name.lastIndexOf('.') + 1, f_name.len);
		if(Global_FileTypeCheck(s_name))
		{
			if(strFileType.toLowerCase() == "image")
			{
				if(s_name.toLowerCase() != 'jpg' && s_name.toLowerCase() != 'gif' && s_name.toLowerCase() != 'jpge' && s_name.toLowerCase() != 'png')
				{
					CheckControlName.select();
//					document.selection.clear();
					alert("확장자가 jpg, gif, jpge 이미지파일만 업로드 하실수 있습니다.");
					return false;
				}
				else
				{
					return true;
				}
			}
			else if(strFileType.toLowerCase() == "movie")
			{
				if(s_name.toLowerCase() != 'avi' && s_name.toLowerCase() != 'wmv' && s_name.toLowerCase() != 'mpge' && s_name.toLowerCase() != 'asf' && s_name.toLowerCase() != 'swf')
				{
					CheckControlName.select();
//					document.selection.clear();
					alert("확장자가 avi, wmv, mpge, asf, swf 동영상파일만 업로드 하실수 있습니다.");
					return false;
				}
				else
				{
					return true;
				}
			}
			else if(strFileType.toLowerCase() == "pdf")
			{
				if(s_name.toLowerCase() != 'pdf')
				{
					CheckControlName.select();
//					document.selection.clear();
					alert("확장자가 pdf 인 파일만 업로드 하실수 있습니다.");
					return false;
				}
				else
				{
					return true;
				}
			}
			else
			{
				return true;
			}
		}
		else
		{
			CheckControlName.select();
//			document.selection.clear();
			alert("업로드가 불가능한 파일입니다.\r\n다른 파일을 선택해 주세요.");
			return false;
		}
	}
}

function ftnCheckBoardAllSelect(FormName,FieldName)
{	
	var CheckFieldValue = $(":form:" + FormName + ":input[name=txtAllSelect]").val();
	$(":input:checkbox[name=" + FieldName + "]").each(function(){
		if(this.checked)
		{
			CheckFieldValue = CheckFieldValue + $(this).val() + ",";
		}
	});

    if (CheckFieldValue == "" ) {
        alert('선택한 게시물이 없습니다.');
		return false;
    }
	if(confirm("삭제하시겠습니까?\r\n관련 정보 모두가 삭제 되며 삭제 후에는 복원할 수 없습니다.."))
	{
		$(":form:" + FormName + ":input[name=txtAllSelect]").attr({"value":CheckFieldValue})
		$("form[name="+FormName+"]").submit();
	}
	else
		return false;
}
//=====================================================================================
// Made in Korea Finish (JQuery)
//=====================================================================================

function ftnhideObject() {  
	var windows = window.frames.length;  
	var selects = document.getElementsByTagName("OBJECT");  
	for (i=0;i < selects.length ;i++ )  
	{  
		selects[i].style.visibility = "hidden";  
	}  

	if (windows > 0) {  
		for(i=0; i < windows; i++) {  
			try {  
				var selects = window.frames[i].document.getElementsByTagName("OBJECT");  
				for (j=0;j<selects.length ;j++ )  
				{  
					selects[j].style.visibility = "hidden";  
				}  
			} catch (e) {}  
		}  
	}  
}  

function ftnshowObject() {  
	var windows = window.frames.length;  
	var selects = document.getElementsByTagName("OBJECT");  
	for (i=0;i < selects.length ;i++ )  
	{  
		selects[i].style.visibility = "visible";  
	}  

	if (windows > 0) {  
		for(i=0; i < windows; i++) {  
			try {  
				var selects = window.frames[i].document.getElementsByTagName("OBJECT");  
				for (j=0;j<selects.length ;j++ )  
				{  
					selects[j].style.visibility = "visible";          
				}  
			} catch (e) {}  
		}  
	}  
}  


function ftnBoardFileDownload(Module, ModuleID, FileName)
{
	if(FileName != "")
	{
		var url			= "/FileUpload/download.asp";	
		var parm		= "?Module="+Module+"&ModuleID="+ModuleID+"&FileName="+FileName;
		document.location = url+parm;	
	}
}

// 이미지, 동영상, 첨부파일 1개 이상 선택 체크
function ftnBoardAttachFileValueCheck(strFileType,strMsg)
{
	var returnCount = 0;
	var returnFileCount = 0;

	if($(":input:file:[name^="+strFileType+"]").length > 0)
	{
		$(":input:file:[name^="+strFileType+"]").each(function()
		{
			if($(this).val() != "")
				returnCount += 1;
			if($(this).attr("disabled"))
				returnFileCount += 1;
		});
		if(returnCount > 0)
			return true;
		else
		{
			if(returnFileCount == 0)
			{
				alert("한개 이상의 " + strMsg + " 파일을 선택하셔야 합니다.");
				return false;
			}
			else
				return true;
		}
	}
	else
		return true;
}

//=================================================================================================================================
//하이닥 출처 표기 - 문한국
//=================================================================================================================================
function HidocLicensePrint(){
    HidocLicenseImage = "<table><tr><td height=50></td></tr></table>";
    HidocLicenseImage += "<a href=\"http://www.hidoc.co.kr\" target=\"_blank\"><img src=\"/Images/Hidoc/HidocLicense.bmp\" border=\"0\" alt=\"저작권자 ⓒ하이닥(www.hidoc.co.kr) 무단전재 및 재배포 금지\"></a>";
    document.getElementById("HidocLicenseDiv").innerHTML = HidocLicenseImage;
}


function ftnCenterDisplayShow(objName,IsShow)
{
	$("#" + objName).toggle();
}

function ftnSubContentTabHtmlLosd(objName,loadUrl)
{
	$("#" + objName).load(loadUrl);
}



// 약관, 개인정보 팝업
function ftnGlobalPrivatePopup(Gubun)
{
	var scrX = (window.screen.width - 800)/2;
	var scrY = (window.screen.height - 800)/2 ;
	var sReturn = ""

	if (Gubun == "1")
	{
		sReturn = window.open("/Skin/accessterms.html", "accessterms", 'toolbar=no,resizable=no,scrollbars=yes,status=0,width=800,height=7000,left='+scrX+',top='+scrY);
	}
	else
	{
		sReturn = window.open("/Skin/privacy.html", "privacy", 'toolbar=no,resizable=no,scrollbars=yes,status=0,width=800,height=7000,left='+scrX+',top='+scrY);
	}
}

// 모든 체크박스 YN 유무 처리
$(function() {
	


	 // 게시판 설정관리 공지기능
	 $('#txtNoticeYN').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	 // 게시판 설정관리 공개여부
	 $('#txtOpenYN').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	 // 게시판 첨부파일 공개여부
	 $('#txtFileYN').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	 // 게시판 첨부파일 분류
	 $('#txtCategoryYN').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});
	

	

	 // 공지글체크여부
	 $('#txtIsNotice').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});
	
	// 공개여부 체크여부
	$('#txtIsOpen').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 분류사용 체크여부
	$('#txtCategoryYN').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});


	// 첨부파일 삭제체크여부
	$('#txtAddFile1Delete').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});
	
	// 썸네일 삭제체크여부
	$('#txtThumbnailDelete').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 빠른상담 개인정보동의 체크여부
	$('#PrivateCheck').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 사용자숨김 체크여부
	$('#txtNameHideYN').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 사용자숨김 체크여부
	$('#txtMyWritingYN').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 다국어설정 체크여부
	$('#txtIsMultiLang').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 기본공개여부설정 체크여부
	$('#txtOpenDefaultYN').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 답변사용여부설정 체크여부
	/*
	$('#txtReplyYN').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});
	*/

	// 의료진모듈 여부설정 체크여부
	$('#txtIsDoctorModuleYn').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});


	// 상담모듈 여부설정 체크여부
	$('#txtIsConsult').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});
	

	// 예약모듈 여부설정 체크여부
	$('#txtIsReserve').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 의료진설정 이메일사용 체크여부
	$('input[name=txtIsEmail]').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 비급여관리 공지사용 체크여부
	$('input[name=txtIsNoticeOpenYN]').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 팝업사용 체크여부
	$('input[name=PopupYN]').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 롤링팝업사용 체크여부
	$('input[name=txtRollingPopupYN]').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	
	// 롤링팝업사용 체크여부
	$('input[name=txtIsNamePrivate]').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

		// 구분사용 체크여부
	$('input[name=txtIsCategory]').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

			// 진료과사용 체크여부
	$('input[name=txtIsDepth]').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});


			// 상담의사용 체크여부
	$('input[name=txtIsDoctor]').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});

	// 상담불가능 체크여부
	$('input[name=txtIsUse]').change(function() {
		if ($(this).is(":checked") == true){
			$(this).val("Y");
		}else{
			$(this).val("N");
		}
	});
	

	
});