/*****************************************************************************************************************************
CMS 공통 JS import - START ================== 필수
****************************************************************************************************************************/
//document.write("<script src=\"https://fxfile.drline.net/cms/public/js/cms.js\"></script>");
//document.write("<script src=\"/Module/BasicJs/cms.js\"></script>");
(window,document,'script','/Module/BasicJs/cms.js','ga');
/*****************************************************************************************************************************
CMS 공통 JS import - END ================== 필수
*****************************************************************************************************************************/
//=================================================================================================================================
// Cookie 관련 (S)
//=================================================================================================================================
// Cookie가져오기
function GlobalGetCookie(name)
{	
    var nameOfCookie = name + "=";
    var x = 0;
    while ( x <= document.cookie.length )
    {
            var y = (x+nameOfCookie.length);
            if ( document.cookie.substring( x, y ) == nameOfCookie )
			{
				if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
					endOfCookie = document.cookie.length;
				return unescape( document.cookie.substring( y, endOfCookie ) );
            }
            x = document.cookie.indexOf( " ", x ) + 1;
            if ( x == 0 )
				break;
    }
    return "";
}
// Cookie넣기
function GlobalSetCookie(name, value, expiredays)
{
	var endDate = new Date();
	endDate.setDate(endDate.getDate()+ expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + endDate.toGMTString() + ";"
}
//=================================================================================================================================
// Cookie 관련 (E)
//=================================================================================================================================
//=================================================================================================================================
// font size 확대 축소
//=================================================================================================================================
var tgs = new Array( 'div','dt','dd','dl','p','li','ui','td','th','ul','SPAN','a','span','u');
var szs = new Array( 'xx-small','x-small','small','medium','large','x-large','xx-large' );
var startSz = 2;
function Global_FontReSize(trgt,inc) {
        if (!document.getElementById) return
        var d = document, cEl = null, sz = startSz,i,j,cTags;        
        sz += inc;
        if ( sz < 0 ) sz = 0;	//최소
        if ( sz > 4 ) sz = 4; //최대
        startSz = sz;
        if ( !( cEl = d.getElementById( trgt ) ) ) cEl = d.getElementsByTagName( trgt )[ 0 ];
        cEl.style.fontSize = szs[ sz ];
        for ( i = 0 ; i < tgs.length ; i++ ) {
                cTags = cEl.getElementsByTagName( tgs[ i ] );
                for ( j = 0 ; j < cTags.length ; j++ ) cTags[ j ].style.fontSize = szs[ sz ];
        }
}
function Global_FontReSizeDefault(trgt) {
        if (!document.getElementById) return
        var d = document, cEl = null, sz = startSz,i,j,cTags;        
		sz = 2;
        startSz = 2;
        if ( !( cEl = d.getElementById( trgt ) ) ) cEl = d.getElementsByTagName( trgt )[ 0 ];
        cEl.style.fontSize = szs[ sz ];
        for ( i = 0 ; i < tgs.length ; i++ ) {
                cTags = cEl.getElementsByTagName( tgs[ i ] );
                for ( j = 0 ; j < cTags.length ; j++ ) cTags[ j ].style.fontSize = szs[ sz ];
        }
}
//=================================================================================================================================
// 시작, 즐겨찾기
//=================================================================================================================================
function Global_SetIEStart()
{
	document.body.style.behavior='url(#default#homepage)';
	document.body.setHomePage(location.href);
}
function Global_SetAddFavorite()
{
	window.external.AddFavorite(location.href, document.title);
}
//=================================================================================================================================
// 날짜 비교 (시작일, 정료일) : "yyyy-mm-dd"
//=================================================================================================================================
function GlobalDateCheck(strControlValue1,strControlValue2)
{
	var strStartDate = parseInt(strControlValue1.replace(/-/g,""));
	var strEndDate = parseInt(strControlValue2.replace(/-/g,""));

	if((strEndDate - strStartDate) < 0)
	{
		alert("종료일을 다시 선택해 주십시오.");
		return false;
	}
	else
		return true;
}
//=================================================================================================================================
// Window 창에 관련 사항 정리 Start
//=================================================================================================================================
// 창을 중앙/이벤트 발생 위치하도록 엽니다.
function Global_WindowCenterOpen(url, name, width, height, enableScroll, isCenter)
{   
    var properties = "width="+width;
    properties += ", height="+height;    
    if(isCenter)
    {
        properties += ", left="+Global_Width(width);
        properties += ", top="+Global_Height(height);
    }
    else
    {
        properties += ", left="+(window.event.clientX+10);
        properties += ", top="+(window.event.clientY+height);
    }    
    if(enableScroll)
        properties += ", scrollbars=1";
    var popWindow = window.open(url,name,properties);    
}
// 해당 창 크기의 정 중앙 좌표를 가지고 옵니다.
function Global_Width(popupWindowWidth)
{
    return (document.body.clientWidth/2) - (popupWindowWidth/2);
}
// 해당 창 크기의 정 중앙 좌표를 가지고 옵니다.
function Global_Height(popupWindowHeight)
{
    return (document.body.clientHeight/2) - (popupWindowHeight/2);
}
//팝업 크기 조절
function Global_PopupResize(p_width, p_height){
	if (p_width > 1024) p_width = 1024;
	if (p_height > 768) p_height = 768;

	self.resizeTo(p_width, p_height);
}
// Window Open
function Global_OpenWindow(JWinName,JOpenedFile,JWidth,JHeight)
{
	var x = (screen.width/2) - (JWidth/2);
	var y = (screen.height/2) - (JHeight/2);
	var NewWin = window.open('', JWinName, 'toolbar=no,resizable=no,scrollbars=yes,status=0,width='+JWidth+',height='+JHeight+',left='+x+',top='+y);
	NewWin.location = JOpenedFile;
}
// 창크기 조절
function Global_WinSize(strW, strH)
{
	window.resizeTo(strW,strH);
}
// 채널모드로 윈도우 오픈
function Global_ChannelModeWindowOpen(url)
{
    window.open(url,"","channelmode,scrollbars")
}

//=================================================================================================================================
// Window 창에 관련 사항 정리 End
//=================================================================================================================================
//=================================================================================================================================
//이미지 관련 (Start)
//=================================================================================================================================
var Global_ImagePreViewPopup;
function Global_ImgPreView(url,strW,strH)
{
	var popWdith=strW; //너비
  	var popHeight=strH; //높이

  	if(strW > 801)
  	{
		popHeight/=popWdith/800; //높이 재설정
		popWdith=800; //너비 재설정
  	}
	if(Global_ImagePreViewPopup != null)
		Global_ImagePreViewPopup.close();
  	Global_ImagePreViewPopup = window.open('','GobalImagePreView','width='+(parseInt(popWdith)+20)+',height='+(parseInt(popHeight)+2)+',scrollbars=1'); //새창을 이미지의 크기만큼 열고
  	Global_ImagePreViewPopup.document.write("<html><head><title>::이미지 상세보기::</title></head><body topmargin=0 leftmargin=0 style='background-repeat:no-repeat;' onclick='self.close()' bgproperties='fixed' oncontextmenu='return false'><img src = '" + url + "' width='"+parseInt(popWdith)+"' border='0' style='cursor:pointer' alt='이미지를 클릭하면 창이 닫힘니다.'></body></html>"); //새창에 배경으로 그림을 뿌림
	Global_ImagePreViewPopup.document.clear();
}

function Global_ImgPreView2(url,strW,strH)
{
	var popWdith=strW; //너비
  	var popHeight=strH; //높이
//	var url = fieldname.src;

  	if(strW > 801)
  	{
		popHeight/=popWdith/800; //높이 재설정
		popWdith=800; //너비 재설정
  	}
	if(Global_ImagePreViewPopup != null)
		Global_ImagePreViewPopup.close();
  	Global_ImagePreViewPopup = window.open('','GobalImagePreView','width='+(parseInt(popWdith)+20)+',height='+(parseInt(popHeight)+2)+',scrollbars=1'); //새창을 이미지의 크기만큼 열고
  	Global_ImagePreViewPopup.document.write("<html><head><title>::이미지 상세보기::</title></head><body topmargin=0 leftmargin=0 style='background-repeat:no-repeat;' onclick='self.close()' bgproperties='fixed' oncontextmenu='return false'><img src = '" + url + "' width='"+parseInt(popWdith)+"' border='0' alt='이미지' style='cursor:pointer' id='popupimage'></body></html>"); //새창에 배경으로 그림을 뿌림
	Global_ImagePreViewPopup.document.clear();
}
//=================================================================================================================================
//이미지 관련 (End)
//=================================================================================================================================
//=================================================================================================================================
// 숫자 체크 하기 (입력값 Back) Start Event : OnKeyUp
//=================================================================================================================================
function Global_StripInt(data)
{
    var flag = 1;
    var valid = "0123456789";
    var output = '';
        
    if (data.charAt(0) == '-')
    {
        flag = 0;
        data = data.substring(1);
    }
    
    for (var i=0; i<data.length; i++)
    {
        if (valid.indexOf(data.charAt(i)) != -1)
        {
            output += data.charAt(i)
        }
    }
    
    if (flag == 1)
        return output;
    else if (flag == 0)
        return ('-' + output);
}

function Global_AddInt(what)
{
    var flag = 1;
    var data = what;
    var len = data.length;
    
    if (data.charAt(0) == '-')
    {
        flag = 0;
        data = data.substring(1);
    }
    if (data.charAt(0) == '0' && data.charAt(1) == '-')
    {
        flag = 0;
        data = data.substring(2);
    }
    
    var number = Global_StripInt(data);
    number = '' + number;
    if (flag == 0)
        return ('-' + number);
    else
        return (number);
}

function Global_Replace(str, original, replacement) 
{ 
    var result; 
    result = ""; 
    while(str.indexOf(original) != -1) 
    { 
        if (str.indexOf(original) > 0) 
            result = result + str.substring(0, str.indexOf(original)) + replacement; 
        else 
            result = result + replacement; 
            str = str.substring(str.indexOf(original) + original.length, str.length); 
    } 
    return result + str; 
} 

function Global_CheckInt(what)
{	
    var data = what.value;
    
    data = Global_Replace(data,"+","")
    data = Global_Replace(data,"-","")
    
    if ((event.keyCode == 107) || (event.keyCode == 187))
    {
        if ((data == "+") || (data == "0+") || (Math.floor(Global_Replace((Global_Replace(data,"+","")),",","")) == 0))
            dataval = "";
        else
            dataval = data
    }
    else if (event.keyCode == 96)
    {
    	var dataval = data;
    }
    else
    {
        if (Math.floor(data) == 0)
            dataval = "";
        else
            var dataval = data;
    }
    
    what.value = Global_AddInt(dataval);
}
//=================================================================================================================================
// 숫자 체크 하기 (입력값 Back) End
//=================================================================================================================================
//=================================================================================================================================
// 파라메터 받기 QueryString
//=================================================================================================================================
function Global_RequestQueryString(valuename)
{
    var rtnval = "";
    var nowAddress = unescape(location.href);
    var parameters = (nowAddress.slice(nowAddress.indexOf("?")+1,nowAddress.length)).split("&");

    for(var i = 0 ; i < parameters.length ; i++){
        var varName = parameters[i].split("=")[0];
        if(varName.toUpperCase() == valuename.toUpperCase())
        {
            rtnval = parameters[i].split("=")[1];
            break;
        }
    }
    return rtnval;
}
//=================================================================================================================================
// 이메일체크 & 주민등록 체크 & 아이디 & 패스워드체크 (Start) : jquery 사용
//=================================================================================================================================    
// 이메일체크
function Global_EmailCheck(FieldName1,FieldName2)
{
	var EmailValue = $("input[name=" + FieldName1+ "]").val() + '@' + $("input[name=" + FieldName2 +"]").val();
	var mailCheck = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!mailCheck.test(EmailValue))
	{
		alert("올바른 이메일 형식이 아닙니다.");
		$("input[name=" + FieldName1 + "]").attr({"value":""});
		$("input[name=" + FieldName2 + "]").attr({"value":""});
		$("input[name=" + FieldName1 + "]").focus();
		return false;
	}
	else
		return true;
}  
// 이메일체크
function Global_EmailCheck2(FieldName)
{
	var EmailValue = $("input[name=" + FieldName+ "]").val();

	var mailCheck = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!mailCheck.test(EmailValue))
	{
		alert("올바른 이메일 형식이 아닙니다.");
		$("input[name=" + FieldName + "]").attr({"value":""});
		$("input[name=" + FieldName + "]").focus();
		return false;
	}
	else
		return true;
}
// 주민번호 체크
function Global_JuminCheck(FieldName1,FieldName2)
{
	var Number = $("input[name=" + FieldName1 + "]").val() + $("input[name=" + FieldName2 + "]").val();
	var Sum=0;
	var Chk=0;
	for	(i=0;i<12;i++)
	{
		if(i<8)
			Sum+=parseInt(Number.charAt(i))*(i+2);
		if(i>7)
			Sum+=parseInt(Number.charAt(i))*(i-6);
	}
	Chk = (Sum%11) + parseInt(Number.charAt(12));
	if(!(Chk == 1 || Chk == 11))
	{
		alert("올바른 주민등록번호가 아닙니다.");
		$("input[name=" + FieldName1 + "]").attr({"value":""});
		$("input[name=" + FieldName2 + "]").attr({"value":""});
		$("input[name=" + FieldName1 + "]").focus();
		return false;
	}
	else
		return true;
}
//------------------------------------
// 아이디체크 (이름,메시지)
//------------------------------------
function Global_CheckIDPatten(fieldName,msg)
{
	var reg_exp = /^[a-zA-Z]{1}[a-zA-Z0-9_-]{3,20}$/;
	var checkValue = $.trim($("input[name=" + fieldName + "]").val());
	var match = reg_exp.test(checkValue);

	if(checkValue == "")
	{
		alert(msg);
		$("input[name=" + fieldName + "]").attr({"value":""})
		$("input[name=" + fieldName + "]").focus();
		return false;
	}
	if(checkValue.length < 3 || checkValue.length > 21)
	{
		alert(_msg_check_id_length);
		$("input[name=" + fieldName + "]").attr({"value":""})
		$("input[name=" + fieldName + "]").focus();
		return false;
	}
	if(!match)
	{
		alert(_msg_check_id_regist_type);
		$("input[name=" + fieldName + "]").attr({"value":""})
		$("input[name=" + fieldName + "]").focus();
		return false;
	}
	return true;
}   
// 전체 체크 체크
function Global_ValuePattenCheck(fieldName,msg,checkEnd,minlen,maxlen)
{
	var reg_exp1 = /^[a-zA-Z0-9_-]{1,20}$/;
	var reg_exp2 = /[a-zA-Z]/i;
	var reg_exp3 = /\d/;
	var reg_exp4 = /^[a-zA-Z]/;
	var reg_exp5 = /[a-zA-Z0-9_-]{1,20}$/;

	if (fieldName == null)	{ alert('오류가 발생했습니다');return false ;}
	if (msg == null)	{ msg = "" ;}
	if (minlen == null)	{ minlen = 5 ;}
	if (maxlen == null)	{ maxlen = 20 ;}

	var checkValue = $.trim($("input[name=" + fieldName + "]").val());
	var match1 = reg_exp1.test(checkValue);
	var match2 = reg_exp2.test(checkValue);
	var match3 = reg_exp3.test(checkValue);
	var match4 = reg_exp4.test(checkValue);
	var match5 = reg_exp5.test(checkValue);
	
	checkValue2 = checkValue.replace(/\s/g,'');

	if (checkValue != checkValue2)
	{
		alert("공백을 사용할 수 없습니다.\r\n공백을 제거해주시기 바랍니다.");
		return false;
	}

	if(checkValue == "")
	{
		alert(msg + "를 입력 하세요.");
		$("input[name=" + fieldName + "]").attr({"value":""})
		$("input[name=" + fieldName + "]").focus();
		return false;
	}
	if(checkValue.length < minlen || checkValue.length > maxlen)
	{
		alert(msg + "는 " + minlen + "자 이상 " + maxlen + "자 이하로 입력 하세요.");
		$("input[name=" + fieldName + "]").attr({"value":""})
		$("input[name=" + fieldName + "]").focus();
		return false;
	}
	if(checkEnd)
	{
		if(match1)
		{
			if(match4 && match2 && match3)
			{
				return true;
			}
			else
			{
				alert(msg + "는 첫글자는 영문으로 시작하며 영문과 숫자 조합만 가능합니다.");
				$("input[name=" + fieldName + "]").attr({"value":""})
				$("input[name=" + fieldName + "]").focus();
				return false;
			}
		}
		else
		{
			if(match4 && match2 && match3)
			{
				return true;
			}
			else
			{
				alert(msg + "는 첫글자는 영문으로 시작하며 영문과 숫자 조합만 가능합니다.");
				$("input[name=" + fieldName + "]").attr({"value":""})
				$("input[name=" + fieldName + "]").focus();
				return false;
			}
		}
	}
	else
	{
		if(match5)
			return true;
		else
		{
			alert(msg + "는 영문, 숫자 만 가능합니다.");
			$("input[name=" + fieldName + "]").attr({"value":""})
			$("input[name=" + fieldName + "]").focus();
			return false;
		}
	}
	return true;
}   
//=================================================================================================================================
// 이메일체크 & 주민등록 체크 & 패스워드체크 (End)
//=================================================================================================================================
/*=================================================================================================================================
// Name 값을 해당 Show, Hide 처리
div $().ready(function(){
	Global_TabShowHide("img","contentImage","divContent");
});
//===============================================================================================================================*/
function Global_TabShowHide(aTagName,aLinkName,aTabName,aIndexNumber)
{
	if(aIndexNumber == null){aIndexNumber = 0};
	try
	{
		$("div[name=" + aTabName + "]:eq(" + aIndexNumber + ")").show();
		if(aTagName == "img")
			$(aTagName + "[name=" + aLinkName + "]:eq(" + aIndexNumber + ")").attr({"src":$(aTagName + "[name=" + aLinkName + "]:eq(" + aIndexNumber + ")").attr("src").replace("_off.gif","_on.gif")});

		$($(aTagName + "[name=" + aLinkName + "]"),this).each(function(index){

			$(this).click(function(){
				$("div[name=" + aTabName + "]").each(function(){
						$(this).hide();
				});
				$("div[name=" + aTabName + "]:eq(" + index + ")").show();
				if(aTagName == "img")
				{
					$(aTagName + "[name=" + aLinkName + "]").each(function(i){
						if(index == i)
							$(this).attr({"src":$(this).attr("src").replace("_off.gif","_on.gif")});
						else
							$(this).attr({"src":$(this).attr("src").replace("_on.gif","_off.gif")});
					});
				}
			});
		});
	}
	catch(exception)
	{
		alert(exception.description);
		return false;
	}
	
}

//=================================================================================================================================
// 내용부분을 프린트 한다.
//=================================================================================================================================
function GlobalContentPrint()
{
	window.open('/Module/Global/GlobalContentPrint.asp','ContentPrint','toolbar=no,resizable=no,scrollbars=yes,status=0,width=800,height=600,left=100,top=50');
}

function Global_WindowSelfClose()
{
	if(confirm("창을 닫으시겠습니까?"))
		self.close();
	else
		return false;
}

//=================================================================================================================================
// 이노에디터 특수문자 처리
//=================================================================================================================================
function Global_HTMLDecode(str)
{
	str = str.replace(/&lt;/gi,"<");
	str = str.replace(/&amp;/gi,"&");
	return str;
}


//=================================================================================================================================
// 공통 개인정보취급방침, 이용약관 팝업 띄우기
//=================================================================================================================================
function GlobalMemberPrivate(str)
{
	if(str == "1")
		window.open('/Skin/Private/MemberPrivate.html','MemberPrivate','toolbar=no,resizable=no,scrollbars=yes,status=0,width=600,height=600,left=100,top=50');
	else
		window.open('/Skin/Private/MemberGuide.html','MemberGuide','toolbar=no,resizable=no,scrollbars=yes,status=0,width=600,height=600,left=100,top=50');
}




function getcookie( name ){
	var nameofcookie = name + "=";
	var x = 0;

	while ( x <= document.cookie.length ){
		var y = (x+nameofcookie.length);
		if ( document.cookie.substring( x, y ) == nameofcookie ){
			if ( (endofcookie=document.cookie.indexOf( ";", y )) == -1 )
				endofcookie = document.cookie.length;

			return unescape( document.cookie.substring( y, endofcookie ) );
		}

	x = document.cookie.indexOf( " ", x ) + 1;

	if ( x == 0 )
		break;
	}

	return "";
}


function setCookie( name, value, expiredays )
{
	var endDate = new Date();
	endDate.setDate( endDate.getDate()+ expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + endDate.toGMTString() + ";"
}

function PopupStart(Srno, PrevWidth){
	if(getcookie("Popup_" + Srno) != "Y"){
		window.open("/Popup/Popup.asp?Srno=" + Srno, "Popup" + Srno, "scrollbars=yes, width=100px, height=100px, top=10px, left=" + PrevWidth + "px");
	}
}

function RemoveNull(Value){
	if(Value == undefined){
		Value = "";
	}

	return Value;
}

//=================================================================================================================================
// 주소검색창 오픈 
//=================================================================================================================================
function Global_SearchZipCode()
{
	var scrX = (window.screen.width - 800)/2;
	var scrY = (window.screen.height - 800)/2 ;

	var sFeatures = "resizable:no;titlebar:no;status:no;help:no;width:500px;height:350px;scroll:yes;";   
	var urls  = "/Module/Global/SearchZipCode.asp";

	var sReturn = window.open(urls, "ZipCode", 'toolbar=no,resizable=no,scrollbars=yes,status=0,width=480,height=450,left='+scrX+',top='+scrY);
}

//=================================================================================================================================
// Notice PopUp 관련 (S)
//=================================================================================================================================
function GlobalNoticePopup(JOpenName,strModuleID,strMainSrno,JWidth,JHeight,NLeft,NTop) {
	if (GlobalGetCookie(JOpenName ) != 'Y' ) {
		window.open('/Module/Board/PopupView.asp?ModuleID='+strModuleID+'&Srno='+strMainSrno,JOpenName,'toolbar=no,resizable=no,scrollbars=yes,status=0,width='+JWidth+',height='+JHeight+',left='+NLeft+',top='+NTop);
	}
}
//=================================================================================================================================
// Notice PopUp 관련 (E)
//=================================================================================================================================
// 첨부파일 다운 로드
function Global_AttachFileDown(strModuleName,strModuleId,strFileName)
{
	if(strFileName != "")
	{
		location.href = "/FileUpload/DownLoad.asp?ModuleName=" + strModuleName + "&ModuleID=" + strModuleId + "&FileName=" + encodeURI(strFileName);
		return false;
	}
}
// 첨부파일 다운 로드
function Global_AttachFileDown2(url, strModuleName,strModuleId,strFileName)
{
	if(strFileName != "")
	{
		location.href = url + "?ModuleName=" + strModuleName + "&ModuleID=" + strModuleId + "&FileName=" + encodeURI(strFileName);
		return false;
	}
}

var RemainTime
function GLOBAL_ShowCountDown(ExpireTime, ObjName,GotoUrl, GotoUrlMsg)
{
/////////////////////////////////////////////////////////////
// 카운트다운(남은시간) 스크립트입니다.
// ExpireTime에 [목표시간-현재시간]을 초로 입력하셔야 합니다.
//
// 호출 함수 상단에 변수 선언 필수:	var RemainTime
//
/////////////////////////////////////////////////////////////
	var day, hour, min, sec, mod
	var CountText
//	RemainTime = ExpireTime - 1;
//	GlobalSetCookie("AuthTime", "" , 1);
	CountText = ""
	//
	if (GotoUrl == null || GotoUrl == "")
	{
		GotoUrl = "/index.asp"
	}

	var TempTime = GlobalGetCookie("AuthTime");
//		return false;
	if (TempTime != "Y")
	{
		if (TempTime != "")
		{
			RemainTime = TempTime - 1;
		}
		else
		{		
			RemainTime = ExpireTime - 1;
		}
	}
	else
	{
		CountText = "종료";
		GlobalSetCookie("AuthTime", "" , 1);
	}

//	alert(TempTime);
//	alert(RemainTime);

	// 남은시간이 1초보다 클때만 보이게 하자.
	if (RemainTime >= 0)
	{
		// 남은일수
		day = Math.floor(ExpireTime / (3600 * 24));
		mod = ExpireTime % (24 * 3600);
		// 남은시간
		hour = Math.floor(mod / 3600);
		mod = mod % 3600;
		// 남은분
		min = Math.floor(mod / 60);
		// 남은초
		sec = mod % 60;
		
		// 보여줄 글자를 셋팅
		CountText = (day > 0) ? day + "일 " : "";
		CountText = (hour > 0) ? CountText + hour + "시간 " : (CountText.length > 0) ? CountText + hour + "시간 " : CountText;
		CountText = (min > 0) ? CountText + min + "분 " : (CountText.length > 0) ? CountText + min + "분 " : CountText;
		CountText = CountText + sec + "초"
	}

	// 목표시간에 도달하게 되면...
	if (( sec <= 0 && CountText == "0초" ) || ( CountText == "" ))
	{
		CountText = "종료";
	}
	else
	{
		GlobalSetCookie("AuthTime", RemainTime, "1")
	}
	// 화면에 값 뿌려주기...
//	$("#" + ObjName).attr({"value":CountText});
	document.getElementById(ObjName).innerHTML = CountText;
	
	// 1초마다 남은시간을 보여주자.
	if (CountText != "종료"){
		setTimeout("GLOBAL_ShowCountDown(RemainTime,'" + ObjName + "','" + GotoUrl + "','" + GotoUrlMsg + "')", 1000);
//		GlobalSetCookie("AuthTime", "Y" , 1);
//		GlobalSetCookie("AuthTime", CountText, "1")
	}
	else
	{
		// 이동한다.
		if (GotoUrlMsg != "" || GotoUrlMsg != null)
		{
			alert(GotoUrlMsg);
		}
//		location.replace(GotoUrl);
	}
}

function ftnGlobalGotoUrl(url,isnew)
{
	if (url != "")
	{
		if (isnew)
		{
		    window.open(url,"","")
		}
		else
		{
			location.href = url;
		}
	}
}

//=================================================================================================================================
// 이미지 활성화
//=================================================================================================================================
/*
	$(document).ready(function(){
	 $(".changeimg").mouseover(function (){
	  var file = $(this).attr('src').split('/');
	  var filename = file[file.length-1];
	  var path = '';
	  for(i=0 ; i < file.length-1 ; i++){
	   path = ( i == 0 )?path + file[i]:path + '/' + file[i];
	  }
	  $(this).attr('src',path+'/'+filename.replace('.gif','_on.gif'));

	 }).mouseout(function(){
	  var file = $(this).attr('src').split('/');
	  var filename = file[file.length-1];
	  var path = '';
	  for(i=0 ; i < file.length-1 ; i++){
	   path = ( i == 0 )?path + file[i]:path + '/' + file[i];
	  }
	  $(this).attr('src',path+'/'+filename.replace('_on.gif','.gif'));
	 });
	});
*/

//=================================================================================================================================
// 글로벌 메뉴 전체 보기/숨기기
//=================================================================================================================================
function ftnGlobalMemberDisplay()
{
	$("#SubMenu").toggle();
}

function ftnGlobalGalleryImageLoad(strSrc)
{
	imgFile = new Image();

	imgFile.src = strSrc.src;

	var x1 = imgFile.width;

	var y1 = imgFile.height;

	var x2 = 140;

	var y2 = 140;

	if (x1 >= y1){

		y2 = parseInt((y1 * x2) / x1);

	}else{

		x2 = parseInt((x1 * y2) / y1);

	}
	strSrc.width=x2;
	strSrc.height=y2;

//	alert(strSrc.width);
//	alert(strSrc.height);
}
	
function Global_Image_Window(img, w, h)
{
	var g4_is_gecko  = navigator.userAgent.toLowerCase().indexOf("gecko") != -1;
	var g4_charset   = "utf-8";

	if (!w || !h)
	{
        var w = img.tmp_width; 
        var h = img.tmp_height; 
	}

	var winl = (screen.width-w)/2; 
	var wint = (screen.height-h)/3; 

	if (w >= screen.width) { 
		winl = 0; 
		h = (parseInt)(w * (h / w)); 
	} 

	if (h >= screen.height) { 
		wint = 0; 
		w = (parseInt)(h * (w / h)); 
	} 

	var js_url = "<script language='JavaScript1.2'> \n"; 
		js_url += "<!-- \n"; 
		js_url += "var ie=document.all; \n"; 
		js_url += "var nn6=document.getElementById&&!document.all; \n"; 
		js_url += "var isdrag=false; \n"; 
		js_url += "var x,y; \n"; 
		js_url += "var dobj; \n"; 
		js_url += "function movemouse(e) \n"; 
		js_url += "{ \n"; 
		js_url += "  if (isdrag) \n"; 
		js_url += "  { \n"; 
		js_url += "    dobj.style.left = nn6 ? tx + e.clientX - x : tx + event.clientX - x; \n"; 
		js_url += "    dobj.style.top  = nn6 ? ty + e.clientY - y : ty + event.clientY - y; \n"; 
		js_url += "    return false; \n"; 
		js_url += "  } \n"; 
		js_url += "} \n"; 
		js_url += "function selectmouse(e) \n"; 
		js_url += "{ \n"; 
		js_url += "  var fobj      = nn6 ? e.target : event.srcElement; \n"; 
		js_url += "  var topelement = nn6 ? 'HTML' : 'BODY'; \n"; 
		js_url += "  while (fobj.tagName != topelement && fobj.className != 'dragme') \n"; 
		js_url += "  { \n"; 
		js_url += "    fobj = nn6 ? fobj.parentNode : fobj.parentElement; \n"; 
		js_url += "  } \n"; 
		js_url += "  if (fobj.className=='dragme') \n"; 
		js_url += "  { \n"; 
		js_url += "    isdrag = true; \n"; 
		js_url += "    dobj = fobj; \n"; 
		js_url += "    tx = parseInt(dobj.style.left+0); \n"; 
		js_url += "    ty = parseInt(dobj.style.top+0); \n"; 
		js_url += "    x = nn6 ? e.clientX : event.clientX; \n"; 
		js_url += "    y = nn6 ? e.clientY : event.clientY; \n"; 
		js_url += "    document.onmousemove=movemouse; \n"; 
		js_url += "    return false; \n"; 
		js_url += "  } \n"; 
		js_url += "} \n"; 
		js_url += "document.onmousedown=selectmouse; \n"; 
		js_url += "document.onmouseup=new Function('isdrag=false'); \n"; 
		js_url += "//--> \n"; 
		js_url += "</"+"script> \n"; 

	var settings;

	if (g4_is_gecko) {
		settings  ='width='+(w+10)+','; 
		settings +='height='+(h+10)+','; 
	} else {
		settings  ='width='+w+','; 
		settings +='height='+h+','; 
	}
	settings +='top='+wint+','; 
	settings +='left='+winl+','; 
	settings +='scrollbars=no,'; 
	settings +='resizable=yes,'; 
	settings +='status=no'; 


	win=window.open("","image_window",settings); 
	win.document.open(); 
	win.document.write ("<html><head> \n<meta http-equiv='imagetoolbar' CONTENT='no'> \n<meta http-equiv='content-type' content='text/html; charset="+g4_charset+"'>\n"); 
	var size = "이미지 사이즈 : "+w+" x "+h;
	win.document.write ("<title>"+size+"</title> \n"); 
	if(w >= screen.width || h >= screen.height) { 
		win.document.write (js_url); 
		var click = "ondblclick='window.close();' style='cursor:move' title=' "+size+" \n\n 이미지 사이즈가 화면보다 큽니다. \n 왼쪽 버튼을 클릭한 후 마우스를 움직여서 보세요. \n\n 더블 클릭하면 닫혀요. '"; 
	} 
	else 
		var click = "onclick='window.close();' style='cursor:pointer' title=' "+size+" \n\n 클릭하면 닫혀요. '"; 
	win.document.write ("<style>.dragme{position:relative;}</style> \n"); 
	win.document.write ("</head> \n\n"); 
	win.document.write ("<body leftmargin=0 topmargin=0 bgcolor=#dddddd style='cursor:arrow;'> \n"); 
	win.document.write ("<table width=100% height=100% cellpadding=0 cellspacing=0><tr><td align=center valign=middle><img src='"+img.src+"' width='"+w+"' height='"+h+"' border=0 class='dragme' "+click+"></td></tr></table>");
	win.document.write ("</body></html>"); 
	win.document.close(); 

	if(parseInt(navigator.appVersion) >= 4){win.window.focus();} 

}

// 창닫기
function closePopup()
{
	if (confirm("창을 닫으시 겠습니까?"))
	{
		self.close();
	}
	else
		return false;
}
function closePopup2()
{
	self.close();
}

function ftnTabDisabledNotGoto(FieldName,eq)
{
	$("ul[name=" + FieldName + "]").each(function(index){
		$(this).hide();
		if(index == eq)
		{
			$(this).show();
		}
	});
}

//	값 초기화
function ftnValueDelete(Object)
{
	Object.value="";
	return false;
}

/*
//	textarea 내용 글자수 체크 (textarea명, 길이, 길이 출력명)
function ftnGlobalTextAreaLengthCheck(objName,ContentLength,objNameLength)
{
	var SMSContentValue = ReturnFieldValue(objName, "textarea");

	var SMSContentValueLen = SMSContentValue.length;
	var TEMP_MyCount = 0;
	var TEMP_ViewLen = 0;

	for (k=0;k<SMSContentValueLen;k++)
	{
		TEMP_CHECK_CARTAT = SMSContentValue.charAt(k);

		if (escape(TEMP_CHECK_CARTAT).length > 4)
		{
			TEMP_MyCount += 2;
		}
		else
		{
			TEMP_MyCount++;
		}
	}
	if (TEMP_MyCount > ContentLength)
	{
		$("textarea[name=" + objName + "]").attr({"value":SMSContentValue.cut(ContentLength)});
		$("input[name" + objName + "]").attr({"value":SMSContentValue.cut(ContentLength)});
		$("input[nametxtMcount]").attr({"value":SMSContentValue.cut(ContentLength).bytes()});
		alert("메시지 길이가 최대 허용길이 " + ContentLength + "를 초과하였습니다.");
	}
	else
	{
		$("input[name=txtMcount]").attr({"value":TEMP_MyCount});
	}

	return TEMP_MyCount;
}

//	LMS/MMS 등록시 글자수 확인 리턴
function ftnSendContentSMSCheckLenReturn(objName)
{
	var SMSContentValue = ReturnFieldValue(objName, "textarea");

	var SMSContentValueLen = SMSContentValue.length;
	var TEMP_MyCount = 0;
	var TEMP_ViewLen = 0;

	for (k=0;k<SMSContentValueLen;k++)
	{
		TEMP_CHECK_CARTAT = SMSContentValue.charAt(k);

		if (escape(TEMP_CHECK_CARTAT).length > 4)
		{
			TEMP_MyCount += 2;
		}
		else
		{
			TEMP_MyCount++;
		}
	}

	return TEMP_MyCount;
}
*/

function ftnFileDownShow()
{
	$("div[name=drlFileList]").show();
}
function ftnFileDownHide()
{
	$("div[name=drlFileList]").hide();
}

//	첨부파일개수 선택 시 자동 첨부파일 Y 체크
function ftnGlobalModuleFileCheck()
{
	var etcFileCnt = ReturnFieldValue("txtFileEtcCnt", "select");
	var etcImgCnt = ReturnFieldValue("txtFileImageCnt", "select");
	var etcMoveCnt = ReturnFieldValue("txtFileMovieCnt", "select");

	if (etcFileCnt == 0 || etcImgCnt == 0 || etcMoveCnt == 0 )
	{
		$('input[name=txtIsFile]').filter("input[value=N]").attr("checked", "checked");
	}
	if (etcFileCnt > 0 || etcImgCnt > 0 || etcMoveCnt > 0 )
	{
		$('input[name=txtIsFile]').filter("input[value=Y]").attr("checked", "checked");
	}
}


function ftnNumbercheck(strValue)
{
	var pattern = /[0-9]/g;
	return pattern.test(strValue);
}

function pattenCheck(checkString, pattenName){
	var patt_k = /([가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i; // 한글 정규식
	var patt_e = /[A-z]/i; // 영문자 정규식
	var patt_w = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi; // 특수문자 정규식
	var patt_n = /[\d]/i; // 숫자 정규식
	var patt_4num1 = /(\w)\1\1\1/; // 같은 영문자&숫자 연속 4번 정규식
	var patt_4num2 = /([\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])\1\1\1/; // 같은 특수문자 연속 4번 정규식
	var patt_4num3 = /([가-힣ㄱ-ㅎㅏ-ㅣ\x20])\1\1\1/; // 같은 한글 연속 4번 정규식
	var patt_cont = /(0123)|(1234)|(2345)|(3456)|(4567)|(5678)|(6789)|(7890)/; // 연속된 숫자 정규식
	var patt_default = /[^A-z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi; // 영문,숫자,특수문자 이외의 문자열
	
	pattenName = eval(pattenName);
	return pattenName.test(checkString);
	return false;
}

//	금액 \ 로 변환
function ftnGlobal_Comma(n) {
	var reg = /(^[+-]?\d+)(\d{3})/;
	n += '';
	while (reg.test(n))
	 n = n.replace(reg, '$1' + ',' + '$2');

	return n;
}

//	첨부파일 다운로드
function ftnGlobalAttachFileDown(strFileUrl, strModuleName,strModuleId,FileName)
{
	var linkurl;
	if(FileName != "")
	{
		linkurl = strFileUrl + "?ModuleName=" + strModuleName + "&ModuleID=" + strModuleId + "&FileName=" + FileName;
		location.href = linkurl;
		return false;
	}
}


// 2020-08-28 simin
// footer 레이어 팝업 관련 스크립트
$(function () {
	// footer 약관 레이어 팝업 오픈 이벤트
	$('.loaded-contents-popup').on('shown.bs.modal', function (e) {
		if(e.currentTarget.getAttribute('data-loaded') != "true") {
			var url = e.currentTarget.getAttribute('data-url');
			 $.ajax({
			 	type : "post",
			 	url : url,
			 	error: function(data){
					$(e.currentTarget).find('.modal-body').html('자료 준비중입니다.');
			 	},
			 	success: function(data){
					$(e.currentTarget).find('.modal-body').html(data);
					e.currentTarget.setAttribute('data-loaded', true);
			 	}
			 });
		}
	});
});