
function t_options_bar()
{
document.write("<table border=0 cellspacing=2 width=100%><tr>");
document.write("<td width=100%>&nbsp;</td>");
document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td></tr><tr><td></td></tr></table>");
}


var noticeMode = "";

function render_content()
	{
	var title = "";
	var auto = false;
	var logoSource = "icon.php?p=unknown";
	
	t_options_bar(0);

	document.write("<center>");
	document.write("<form action=\""+link+"\" name=surveyinfo method=post>"
		+ "<input type=hidden name=surveyinfo_id value="+surveyinfo_id+">"
		+ "<input type=hidden name=caller value=\""+escape(editCaller)+"\">");

	document.write("<table border=0 width=400 cellpadding=4 cellspacing=1 bgcolor=gray>");
	
	document.write("<tr class=fixed><td class=optionheader colspan=3><nobr>");
	
	if (surveyinfo_id == 0)	document.write("����� ������� ����");
	else 			document.write("����� ����� ��������� ���: "+surveyinfo_id);

	document.write("</td></tr>");

	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"����� ���������: </td><td class=list colspan=3>"
		+ "<input class=insidetitle type=text style=\"width:600\" name=surveyinfo_title value=\""
		+ surveyinfo_title + "\"></td></tr>");

	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"���� ���������: </td><td class=list colspan=3>"
		+ "<input class=insidetitle type=text style=\"width:600\" name=surveyinfo_question value=\""
		+ surveyinfo_question + "\"></td></tr>");
		
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"����� ������ �������: </td><td class=list colspan=3>"
		+ "����� �������: <input class=insidetitle dir=ltr type=text style=\"width:80\" name=surveyinfo_start value=\""
		+ surveyinfo_start + "\">"
		+ "&nbsp;<input type=button value=? onClick=\"pickDate('surveyinfo_start')\">"
		
		+ "&nbsp;&nbsp;&nbsp;����� �������: <input dir=ltr class=insidetitle "
		+ "type=text style=\"width:80\" name=surveyinfo_end value=\""
		+ surveyinfo_end + "\">"
		+ "&nbsp;<input type=button value=? onClick=\"pickDate('surveyinfo_end')\">"
		+ " <font color=red size=-1>������: ������ ������"
		
		+ "</td></tr>");
		
	document.write("<tr class=fixed><td class=optionheader><nobr>�������: </td><td class=list colspan=3>");
	forumsSelectorSurvey();
	document.write("</td></tr>");
		
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"��� ������: </td><td class=list colspan=3>"
		+ "<input class=insidetitle type=text style=\"width:40\" name=surveyinfo_mindays value=\""
		+ surveyinfo_mindays+ "\">&nbsp;&nbsp;&nbsp;<font size=-1 color=red>"
		+ "��� ������ ���� ��� �� ���� ����� �� ����� ��� ������ �� ������� ��� ����� �� �������</td></tr>");
		
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"��� ���������: </td><td class=list colspan=3>"
		+ "<input class=insidetitle type=text style=\"width:40\" name=surveyinfo_minposts value=\""
		+ surveyinfo_minposts+ "\">&nbsp;&nbsp;&nbsp;<font size=-1 color=red>"
		+ "��� ������� ����� �������� ��� ����� �� �������</td></tr>");
		
	document.write("<tr class=fixed><td class=optionheader><nobr>����� ���������: </td>");
	statusSelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td class=optionheader><nobr>���� ���������: </td>");
	secretSelector();
	document.write("</tr>");
	
	document.write("<tr class=fixed><td class=list_center colspan=5>"
		+ "<input type=button value='"+req_enter_changes+"' onclick='submitForm()'>"
		+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=reset value='"+req_cancel_changes+"'\">"
		+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=button value='"+req_return+"' onclick=\"document.location='"+editCaller+"'\">"
		+ "</td></tr>");
		
	document.write("<tr class=fixed><td class=optionheader colspan=3><nobr>������ �������</td></tr>");

	var x = 0;
	var count = 1;
	
	while (surveyoptions[x] >= 0)
	{
	document.write("<tr class=fixed><td class=optionheader><nobr><font color=yellow>"
		+"������ " + count + ":<br><font color=black size=-1>������� �����: " + surveyoptions[x+1]		
		+ "</td><td class=list colspan=3>"
		+ "<input type=hidden name=surveyinfo_answer"+count+" value="+surveyoptions[x]+">"		
		+ "<input class=insidetitle type=text style=\"width:600\" name=surveyinfo_answer"+count+"text value=\""
		+ surveyoptions[x+2] + "\"><br>"

		+ "<input class=insidetitle type=text style=\"width:450\" name=surveyinfo_answer"+count+"additional value=\""
		+ surveyoptions[x+3] + "\"> <font color=green size=-1>(�� ����� �� ����� ����)</td></tr>");
		
	count++;
	x += 4;
	}
	
	if (count > 1)
		{
		document.write("<tr class=fixed><td colspan=3><font color=red size=-1>"
		+ "&nbsp;&nbsp;*&nbsp;&nbsp;������ ��� �������� ����� ���� �� ������ �����. "
		+ "<br>&nbsp;&nbsp;*&nbsp;&nbsp;�� ���� ��� ���� �� ����� ����� ��� ������ ������."
		+ "</td></tr>");
		document.write("<tr class=fixed><td class=optionheader colspan=3><nobr>����� ������ ����� �����</td></tr>");
		}

	
	while (count <= 30)
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"������ " + count + ": </td><td class=list colspan=3>"
		+ "<input type=hidden name=surveyinfo_answer"+count+" value=0>"		
		+ "<input class=insidetitle type=text style=\"width:600\" name=surveyinfo_answer"+count+"text value=\""
		+ "\"><br>"

		+ "<input class=insidetitle type=text style=\"width:450\" name=surveyinfo_answer"+count+"additional value=\""
		+ "\"> <font color=green size=-1>(�� ����� �� ����� ����)</td></tr>");
		
	count++;
	}

	document.write("</table>");
}

function forumsSelectorSurvey()
{
document.write("<select class=insidetitle style=\"width:300\" name=surveyinfo_forum size=1>");

if (memberLevel > 2)
{
if (surveyinfo_forum == 0) document.write("<option selected value=0>-- ���� ��� --");
else document.write("<option value=0>-- ���� ��� --");
}

for (y = 0; y < forums.length-3; y+= 3)
	{
	if (forums[y] > 0)
		{
		if (memberLevel == 2)
		{
			for (yy = 0; yy < moderatedForums.length; yy++)
			{
			if (forums[y] == moderatedForums[yy])
				{
				if (forums[y] == surveyinfo_forum)
					document.write("<option selected value='" + forums[y] + "'>" + forums[y+2]);
				else
					document.write("<option value='" + forums[y] + "'>" + forums[y+2]);
				}
			}
		}
		else
		{
			if (forums[y] == surveyinfo_forum)
				document.write("<option selected value='" + forums[y] + "'>" + forums[y+2]);
			else
				document.write("<option value='" + forums[y] + "'>" + forums[y+2]);
		}
		}
	}

document.write("</select>");
}

function statusSelector()
{
var checked = "";
if (surveyinfo_active == 1)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=surveyinfo_active VALUE=1"+checked+">");
document.write("�����</td>");

checked = "";
if (surveyinfo_active == 0)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=surveyinfo_active VALUE=0"+checked+">");
document.write("�����</td>");
}

function secretSelector()
{
var checked = "";
if (surveyinfo_secret == 0)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=surveyinfo_secret VALUE=0"+checked+">");
document.write("�����</td>");

checked = "";
if (surveyinfo_secret == 1)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=surveyinfo_secret VALUE=1"+checked+">");
document.write("���</td>");
}


function submitForm()
{

if (surveyinfo.surveyinfo_title.value.length < 10)
	{
	confirm("��� ����� ����� ��������� ��� ���� ���� �� 10 ����");
	return;
	}

if (surveyinfo.surveyinfo_question.value.length < 10)
	{
	confirm("��� ����� ���� ��������� ��� ���� ���� �� 10 ����");
	return;
	}


var regex = /^[0-9]/;

if (!regex.test(surveyinfo.surveyinfo_mindays.value))
	{
	confirm("��� ������ ��� �� ���� �������� ���");
	return;
	}

if (!regex.test(surveyinfo.surveyinfo_minposts.value))
	{
	confirm("��� ��������� ��� �� ���� �������� ���");
	return;
	}

surveyinfo.submit();
}

var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = y2k(today.getYear());
var whichOne = '';

function y2k(number)    { return (number < 1000) ? number + 1900 : number; }
function padout(number) { return (number < 10) ? '0' + number : number; }

function restart() 
{

    eval("document.all."+whichOne).value = '' + year + '/' + padout(month - 0 + 1) + '/' + padout(day);
    mywindow.close(); 
    }


function pickDate(id) 
{
    whichOne = id;

    cur = eval("document.all."+whichOne).value;

    if (cur.length == 10)
	{
	year = cur.slice(0,4);cur = cur.slice(5);month = cur.slice(0,2);month = month-1;cur = cur.slice(3);day = cur.slice(0,2);day = day-1+1;
	}
    else 
    	{
    	day = today.getDate(), month = today.getMonth(), year = y2k(today.getYear());
    	}

    mywindow=open('cal.html','myname','resizable=no,width=350,height=270,screenX=200,screenY=200,top=200,left=200');
    mywindow.location.href = 'cal.html';

    if (mywindow.opener == null) mywindow.opener = self; 
}
