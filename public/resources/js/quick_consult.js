//	빠른상담
function ftnMainQuickWriteCheck()
{

	var bioType = $("input[name='bioType']:checked").val()
	var bioName = $("#bioName").val();
	var bioTel1 = $("#bioTel1").val();
	var bioTel2 = $("#bioTel2").val();
	var bioTel = "010-"+bioTel1+"-"+bioTel2;
	var bioEmail = $("#bioEmail").val();
	var bioContents = $("#bioContents").val();
	
	// validation check
	if($('input:radio[name=bioType]').is(':checked')==false){
		alert("문의 유형을 선택해주세요.");
		return false;
	}

	if($("input:checkbox[id='check']").is(":checked")==false){
		alert("개인정보 수집 및 이용에 체크해주세요.");
		return false;
	}

	if(bioName==""){
		alert("병원명/개인명을 입력해주세요.");
		$("#bioName").focus();
		return false;
	}

	if(bioTel1=="" || bioTel2=="" ){
		alert("연락처를 모두 입력해주세요.");
		$("#bioTel1").focus();
		return false;
	}

	if(bioEmail==""){
		alert("이메일을 입력해주세요.");
		$("#bioEmail").focus();
		return false;
	}

	if(isEmail(bioEmail)==false){
		alert("이메일 형식을 정확히 입력해주세요.");
		$("#bioEmail").focus();
		return false;
	}

	if(bioContents==""){
		alert("내용을 입력해주세요.");
		$("#bioContents").focus();
		return false;
	}

	if(confirm("해당정보로 등록 하시겠습니까?"))
	{
		var q_title			= bioType + "가 등록되었습니다. - ";
		var q_contents	= "문의유형 : " + bioType+   '<br /><br />병원명/개인  : ' + bioName + '<br /><br />연락처 : ' + bioTel + '<br /><br />이메일 : ' + bioEmail + '<br/><br />내용 : <br />' + bioContents.replace(/(?:\r\n|\r|\n)/g, '<br/>');

		
		$("#txtTitle").val(q_title);
		$("#txtContents").val(q_contents);
		$("#txtRegisteredName").val(bioName);

//		console.log(q_title);
//		console.log(q_contents);
//		return false;

		//	입력처리
		ftnQuickMainAjax();
	}
	$("#txtTitle").val("");
	$("#txtContents").val("");
	$("#txtRegisteredName").val("");
	
	return false;
}


// 이메일 체크 정규식

function isEmail(asValue) {

	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	

}


// AjaxInsert
function ftnQuickMainAjax()
{
	var ssl_domain	= $("#txtSSLDomain").val();
	var queryString = $("#frmQuickConsult_InsertForm").serialize();
	
//	location.href=ssl_domain + '/Module/Board/Api/_API_FAST_WRITE_OK.asp?'+queryString;
	//return false;	
	
	$.ajax({
		type : 'POST',
		url : '/Module/Board/Api/_API_FAST_WRITE_OK.asp',
		data : queryString,
		dataType : 'json',
		error: function(xhr, status, error){	
			alert("error : " + error);
			return false;
		},
		success : function(data){
			// console.log(data);
			if (data.msg != "")
			{
				alert(data.msg);
				location.reload();
			}
			return false;
		},
	});
}