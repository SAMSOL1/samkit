/*
var foruminfo_private = 0;
var foruminfo_moderation = 2;
var foruminfo_moderationignore = 75;
var foruminfo_subscription = 0;
var foruminfo_archive = 30;
*/


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

	t_options_bar(0);

	document.write("<center>");
	document.write("<table border=0 width=600 cellpadding=4 cellspacing=1 bgcolor=gray>");

	document.write("<tr class=fixed><td colspan=4 class=optionheader><nobr>"
		+"������ ��������� �����: <font color=yellow>" +  foruminfo_title
		+ "</td></tr>");
	

	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"��� �������: </td><td width=95% class=list colspan=3><table cellspacing=0 cellpadding=0><tr><td>" 
		
		+ "<img src='"+getForumIcon(foruminfo_id)+"'>&nbsp;&nbsp;&nbsp;</td><td>"
		
		+ "<a href=index.php?f=" + foruminfo_id + "><font style=\"font-size:20px;vertical-align:middle;\">" 
		+ foruminfo_title + "</a></td></tr></table>"
		+ "</td></tr>");
		
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"����� ������ �� �������: </td><td class=list colspan=3>");
		
	if (foruminfo_siteID == 1)	document.write("<font color=red>"+main_site_title+": </font>");
	if (foruminfo_siteID == 2)	document.write("<font color=red>������� ������: </font>");
	
	document.write(foruminfo_cat_title
		+ "</td></tr>");

	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"��� �������: </td><td class=list colspan=3><font size=-1 color=black>" 
		+ foruminfo_desc
		+ "</td></tr>");

	if (foruminfo_supervisor > 0)
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"����� �������: </td><td class=list colspan=3>" 
		+ "<a href=index.php?member=" + foruminfo_supervisor + ">" + foruminfo_supervisor_name + "</a>"
		+ "</td></tr>");
		
	if (foruminfo_vsup > 0)
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"���� ����� �������: </td><td class=list colspan=3>" 
		+ "<a href=index.php?member=" + foruminfo_vsup + ">" + foruminfo_vsup_name + "</a>"
		+ "</td></tr>");
		
		
	if (foruminfo_mods.length > 0)
	{
    var splitArray = foruminfo_mods.split("|");

 	foruminfo_mods = "<table class=mods cellspacing=0 cellpadding=0><tr>";

	y = 0;
	x = 0;
	while (x < splitArray.length)
		{
		if (y == 5)
			{
			foruminfo_mods += "</tr></table><table class=mods cellspacing=0 cellpadding=0><tr>";
			y = 0;
			}

		foruminfo_mods += "<td><nobr>&nbsp;";
		if (x)	foruminfo_mods += " + ";
		foruminfo_mods += splitArray[x] + "</td>";
		x++;
		y++;
		}
	foruminfo_mods += "</tr></table>";
	
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"����� �������: </td><td class=list colspan=3>" 
		+ foruminfo_mods
		+ "</td></tr>");
	}

	if ((foruminfo_status == 0) || (foruminfo_archived > 0))
		{
		document.write("<tr class=fixed><td class=optionheader><nobr>"
			+ "<font size=-1>"
			+"����� �������: </td><td class=list colspan=3>");

		if (foruminfo_archived > 0)		document.write("�� �������");
		else if (foruminfo_status == 0)	document.write("�����");

		document.write("</td></tr>");
	}
	
	if (foruminfo_gender > 0)
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"����� �������: </td><td class=list colspan=3>");
		
	if (foruminfo_gender == 1)	document.write("<font color=red>��� ������� ���� ������� ������ ���</font>");
	if (foruminfo_gender == 2)	document.write("<font color=red>��� ������� ���� ������� ������ ���</font>");
	
	document.write("</td></tr>");
	}


	if ((foruminfo_status > 0) && (foruminfo_archived == 0))
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"��� ������� ����� �� �������: </td><td class=list width=95%>"
		+ foruminfo_user_topics_count
		+ "</td><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+ "���� ������ ��� ��� �� 24 ����:"
		+ "</td><td class=list><nobr>&nbsp;<font color=red>"
		+ foruminfo_maxtopics 
		+ "&nbsp;</td></tr>");
		
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"��� ����� ����� �� �������: </td><td class=list>"
		+ foruminfo_user_replies_count
		+ "</td><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+ "���� ������ ��� ��� �� 24 ����:"
		+ "</td><td class=list><nobr>&nbsp;<font color=red>"
		+ foruminfo_maxreplies 
		+ "&nbsp;</td></tr>");
	}
		
	if (foruminfo_archived == 0)
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"�������� �������: </td><td class=list colspan=3>"
		+ "�������� : <font color=red>"  + foruminfo_topics_count + "</font>&nbsp;&nbsp;&nbsp;&nbsp;"
		+ "������ : <font color=red>"  + foruminfo_replies_count + "</font>&nbsp;&nbsp;&nbsp;&nbsp;");
	
	if (foruminfo_archive_count > 0)
		document.write("�������� �� ������� : <font color=red>"  + foruminfo_archive_count + "</font>");
		
	document.write("</td></tr>");
	
	if ((foruminfo_recent_topics_count > 0) || (foruminfo_recent_replies_count > 0))
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"��������� �� ��� 24 ����: </td><td class=list colspan=3>"
		+ "�������� : <font color=red>"  + foruminfo_recent_topics_count + "</font>&nbsp;&nbsp;&nbsp;&nbsp;"
		+ "������ : <font color=red>"  + foruminfo_recent_replies_count + "</font>"
		+ "</td></tr>");
	
	if ((foruminfo_week_topics_count > 0) || (foruminfo_week_replies_count > 0))
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"��������� �� ��� 7 ����: </td><td class=list colspan=3>"
		+ "�������� : <font color=red>"  + foruminfo_week_topics_count + "</font>&nbsp;&nbsp;&nbsp;&nbsp;"
		+ "������ : <font color=red>"  + foruminfo_week_replies_count + "</font>"
		+ "</td></tr>");
		}
	else
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
		+"��������: </td><td class=list colspan=3>"
		+ "�������� �� ������� : <font color=red>"  + foruminfo_archive_count + "</font>"
		+ "</td></tr>");
		
		
	if (membersInForum.length > 0)
	{
		document.write("<tr class=fixed><td class=optionheader><nobr>"
		+ "<font size=-1>"
			+"������� �� ������� �����: </td><td class=list colspan=3>");
	
	
	var y = 0;
	var count = 0;
	var curchat = 0;
	var plus = "";
	var sty = "forumusers";
	
	document.write("<table class=mods><tr>");

	while (y < (membersInForum.length-1))
		{
		if (count > 0)	plus = ("<td><font color=red>&nbsp;+&nbsp;</td>");
		else			plus = "<table class=mods cellspacing=0 cellpadding=0 border=0><tr>";

		
		document.write(plus+"<td><nobr>");
		
		if (membersInForum[y] > 0)
			document.write("<a href='index.php?member="+membersInForum[y]+"'>"
			 +membersInForum[y+1] + "</a></td>");
		else
			document.write(membersInForum[y+1] + "</td>");
		 
		count++;
		if (count == 5)
			{
			document.write("</tr></table>");
			count = 0;
			}
		y+=2;
		}

	if (count > 0)	document.write("</tr></table>");
	document.write("</tr></tr></table>");	
			
		document.write("</td></tr>");

	}

	document.write("</table>");
}


