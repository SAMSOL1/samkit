function options_bar()
{
icon = "<img src='"+fileURL+"icon.php?m=profile' height=15 width=15 border=0 hspace=0>";

if (memberLevel > 2)
	icon = "<a href=\""+link+"&editmember="+user_id+"&src="+escape(top.location.href)+"\"><img src="+Icones+"icons/kpencil border=0 hspace=0></a>";
else if (memberLevel == 2)
{
    if (supervisor)
    	icon = "<a href=\""+link+"&editmember="+user_id+"&src="+escape(top.location.href)+"\"><img src="+Icones+"icons/kpencil border=0 hspace=0></a>";
}

document.write("<table dir="+dir+"><tr><td></td></tr></table><table class=optionsbar dir="+dir+" border=0 cellspacing=2 width=100%>\r\n\
<tr><td valign=middle>&nbsp;");

document.write(icon + "</td><td class=optionsbar_title width=100% valign=middle>&nbsp;"
+ member_info_title + ": " + user_name);

if (memberLevel > 0)
	{
/*	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&mail=mem&mem="
	+ user_id + "\">��������<br>�� �����</a>");*/

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&posts="
	+ user_id + "\">�������<br>�����</a>");

if (memberPosts >= 2)
	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&topics="
	+ user_id + "\">������<br>�����</a>");

 /*   if ((user_id != memberID) && (user_level <= memberLevel))
    document.write("</td><td class=optionsbar_menus><nobr><a href=\"" + link + "&requestfriend="
	    + user_id + "\">���� �� �����<br>�� ���� ����� ��</a>");


	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&list=-1&add="
	+ user_id + "\">��� �����<br>������� ������</a>");

	if (user_id != memberID)
		document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&list=-2&add="
		+ user_id + "\">���� �����<br>�� �������</a>");*/
	}

/*if (memberLevel > 1) {
	document.write("</td><td>&nbsp;");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&svc=plaques&member="
	+ user_id + "\">"+member_info_nominate+"</a>");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&svc=titles&member="
	+ user_id + "\">��� ���<br>�����</a>");

document.write("</td><td>&nbsp;");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&svc=awarded&app=all&scope=all&days=0&mem="
	+ user_id + "\">������<br>����� �����</a>");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&svc=titles&mem="
	+ user_id + "\">�����<br>�����</a>");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&svc=mon&who="
+ user_id + "\">�����<br>�������</a>");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&notifylist="
	+ user_id + "\">�����<br>�����</a>");
	}*/

/*if (memberLevel >= 2){
	if ((supervisor) || (memberLevel == 3))
		{
		if (memberLevel == 2)
		{
		document.write("</td><td>&nbsp;");

		if (memberLevelSup > 0)
    		document.write("</td><td class=optionsbar_menus><nobr><a href=\"" + link + "&svc=recents&mid="
  	+ user_id + "\">�����<br>������</a>");

		document.write("</td><td class=optionsbar_menus><nobr><a href=\"" + link + "&svc=medits&mid="
+ user_id + "\">���<br>���������</a>");

		document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&svc=mhis&mid="
		+ user_id + "\">���<br>������</a>");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&svc=track&mid="
		+ user_id + "\">���<br>�������</a>");

		if (user_notes >= 0)
		{
		document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&svc=notes&oo=0&ii="
		+ user_id + "\">�������");

		if (user_notes > 0) document.write(":<br><font color=red>" + user_notes);

		document.write("</a>");
		}

		}

		document.write("</td><td>&nbsp;");

		document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&requestmon="
		+ user_id + "\">��� ��<br>�����</a>");
		}
	}*/


if (memberLevel > 2)
	{
	document.write("</td><td>&nbsp;");

/*	   document.write("</td><td class=optionsbar_menus><nobr><a href=\"" + link + "&svc=recents&mid="
	    	+ user_id + "\">�����<br>������</a>");*/

	document.write("</td><td class=optionsbar_menus><nobr><a href=\"" + link + "&editsignature="
	+ user_id + "\">�����<br>�������</a>");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&mojo=medits&mid="
	+ user_id + "\">�������<br>��������</a>");

/*	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&mojo=namechange&mid="
	+ user_id + "\">�����<br>�����</a>");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&mail=mon&mem="
	+ user_id + "\">�������</a>");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&list=-1&mem="
	+ user_id + "\">�������</a>");

	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&mojo=mips&mid="
	+ user_id + "\">����</a>");

	document.write("<br><a href=\""+link+"&mojo=macs&mid="
	+ user_id + "\">����</a>");*/

	if (user_status == 1)
		{
	/*	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&requestpass=true&userid="
		+ user_id + "\">���� ������<br>������</a>");*/

		document.write("</td><td class=optionsbar_menus><nobr><a href='javascript:lockMember(" + user_id
			+ ")'>���<br>�������</a>");
		}
	else if (user_posts > 0)
		{
		document.write("</td><td class=optionsbar_menus><nobr><a href='javascript:unlockMember(" + user_id
			+ ")'>���<br>�������</a>");
		}

/*	if (user_notes >= 0)
	{
	document.write("</td><td class=optionsbar_menus><nobr><a href=\""+link+"&svc=notes&oo=0&ii="
		+ user_id + "\">�������");

	if (user_notes > 0) document.write(":<br><font color=red>" + user_notes);
	document.write("</a>");
	}*/

	}

document.write("</td><td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td></tr></table><table dir="+dir+"><tr><td></td></tr></table>");
}

function member_details()
	{
	if (user_photo_url.length == 0)
		user_photo_url = fileURL+"icon.php?m=photo_none";

	if (user_title.charAt(0) == "@")	user_title = "";

	if (user_title.length == 0)
		{
		if (user_level == 2)	user_title = title_mod;
		if (user_level == 3)	user_title = title_admin;
		}

document.write("<table dir="+dir+" border=0 width=90% cellspacing=1 cellpadding=0 align=center>\n\r\
<tr><td width=35% valign=top>\n\r\
<table dir="+dir+" border=0 width=100% cellspacing=2 cellpadding=3>");

writeHeader(member_info_photo);

writeDetail2("<a href=\""+user_photo_url+"\"><img onError=\"this.src='"+Icones+"icons/kphoto_none';\" src=\""+user_photo_url+"\" alt=\""
	+ user_name + "\" width=120 border=0 hspace=2 vspace=2></a><br>"
	+ member_info_click_to_expand);

writeHeader(member_info_contacts);

if (memberLevel > 0)
writeDetail(mail_title,"<a href=\""+link+"&sendmsg="+user_id+"&src="+escape(top.location.href)+"\">"+member_info_click_to_mail+"</a>");

if (memberLevel > 2)
{
writeDetail(mail_title,
	"<form method=get>"
	+ "<input type=hidden name=sendmsg value="+user_id+">"
	+ "<input type=text name=genmsg value=''>"
	+ "</form>");
}

if (memberLevel > 1)
{
if (user_email == "@")
	user_email = "<a href=\""+link+"&sendmail="+user_id+"&src="+escape(top.location.href)+"\">"+member_info_click_to_email+"</a>";
else if ((user_email.length > 0) && (memberLevel > 1))
	user_email = "<a href=\""+link+"&sendmail="+user_id+"&src="+escape(top.location.href)+"\">"+user_email+"</a>";
else
	user_email = member_info_not_available;

writeDetail(member_email,user_email);
}


writeHeader(member_info_stats);
if ((memberLevel > 1) && (user_status == 0))	writeDetail("�������","<font color=red>����� ������</font>");
if (user_points > 0)	writeDetail(member_points,user_points);
writeDetail(member_posts,user_posts);
writeDetail(member_info_reg_date,formatDate(user_regdate));
writeDetail(member_info_last_visit,formatDate(user_lastheredate));
writeDetail(main_table_lastpost,formatDate(user_lastpostdate));
if (user_online > 0)	writeDetail("�������",
	"<table><tr><td class=optionsbar_menus2 valign=middle><img src="+fileURL+"icon.php?i=online alt='���� ����'>&nbsp;"
		+ "<br><font size=-2>���� ����</font></td></tr></table>");

if (memberLevel > 1)
{
if ((memberLevel > 2) || (supervisor))
	{
	if (title_sp1 != "")
    	{
    	writeDetail(title_sp1,user_sp1);
	    writeDetail(title_sp2,user_sp2);
	    writeDetail(title_sp3,user_sp3);
	    writeDetail(title_sp4,user_sp4);
    	}
    }
}

if (nameChanges[0] != "")
{
	writeHeader("������� ������� �����");

	var z = 0;

	while (nameChanges[z] != "")
		{
		writeDetail(formatDateOnly(nameChanges[z+1]),nameChanges[z]);
		z += 2;
		}
}

// writeHeader(member_info_last_posts);
// writeDetail2("<a href=\"index.php?posts="+user_id+"\">"+member_info_last_posts_click+"</a>");

document.write("</table></td><td valign=top width=3%>&nbsp;</td>\n\r\
<td valign=top>\n\r\
<table dir="+dir+" border=0 width=100% cellspacing=2 cellpadding=3 valign=top>");


if (user_city.length > 0)		user_city += "<br>";
if (user_state.length > 0)		user_city += user_state + "<br>";
if (user_country.length > 0)	user_city += user_country + "<br>";

if ((user_title.length > 0) || (user_city.length > 0) || (user_age.length > 0)
	|| (user_marstatus.length > 0) || (user_gender > 0) || (user_occupation.length > 0))
	{
	writeHeader(member_info_details);
	if (memberLevel > 1)	writeDetail("��� �������",user_id);
	if (memberLevel > 1)	writeDetail("���������",+m_view);
	writeDetail(member_title,user_title);
	writeDetail(member_info_address,user_city);
	writeDetail(member_age,user_age);
	writeDetail(member_marstatus,user_marstatus);

	if (user_gender == 1)		writeDetail(member_sex,member_male);
	else if (user_gender == 2)	writeDetail(member_sex,member_female);

	writeDetail(member_occupation,user_occupation);
	}

if (plaques_list.length > 3)
	{
	writeHeader(member_info_plaques);

//	if (plaques_list.length > 3)
//		{
//
//		}
//	else
	{
	var pl = "<table><tr>";
	var x = 0;
	var z = 0;

	while ((x < plaques_list.length-3))
		{
		var points = plaques_list[x++];
		var ftitle = plaques_list[x++];
		var desc = plaques_list[x++];
		var logo = plaques_list[x++];
		var date = plaques_list[x++];

		if (z == 3) { z = 0; pl += "</tr><tr>" }
		else		if (z > 0)	pl += "<td>&nbsp;</td>";

		if (ftitle.length > 0) ftitle += "<br>";

		pl += "<td align=center>"
			+ "<img src='"+fileURL+"icon.php?p=" + logo + "'><br><font size=-2 color=red>" + ftitle
			+ "</font><font size=-2 color=black>" + desc
			+ "<br><font size=-2 color=orange>" + formatDateOnly(date) + "</font>"
			+ "</td>";


		z++;
		}

	if (plaques_more > 0)
		{

			pl += "</tr><tr><td colspan=5 align=center><font color=red size=-1><br>"
				+ "<a class=menu href=\""+link+"&member="+user_id+"&allplaques=true\">"
				+ " -- ���� ����� ���� ���� ����� -- ���� ��� ��������� ������� -- "
				+ "</a></td>";

		}


	pl += "</tr></table>";

	writeDetail2(pl);
	}
}

if (user_bio.length > 0)
	{
	writeHeader(member_info_other_info);
	writeDetail(member_info_bio,user_bio);
	}

/*
if (user_link1 == "http://")	user_link1 = "";
if (user_link2 == "http://")	user_link2 = "";
if (user_homepage == "http://")	user_homepage = "";

if (user_link1.length > 0)		user_link1 = "<a href='"+user_link1+"' target=_new>"+user_link1+"</a><br>";
if (user_link2.length > 0)		user_link1 += "<a href='"+user_link2+"' target=_new>"+user_link2+"</a>";
if (user_homepage.length > 0)	user_homepage = "<a href='"+user_homepage+"' target=_new>"+user_homepage+"</a><br>";

if ((user_link1.length > 0) || (user_link2.length > 0) || (user_homepage.length > 0))
	{
	writeHeader(member_info_links_title);
	writeDetailLink(member_info_links_title,user_link1);
	writeDetailLink(member_info_homepage,user_homepage);
	}
*/


document.write("</table></td></tr>");
document.write("</table>");
document.write("<table dir="+dir+" border=0 width=90% cellspacing=1 cellpadding=0 align=center>\n\r");

if ((user_signature.length > 0))
	{
	document.write("<tr><td>&nbsp;</td></tr>");

	document.write("<tr><td align=center class=userdetails_header colspan=3><b><font size=3>"
		+ member_signature + "</td></tr>");

	writeDetail3("<table STYLE=\"table-layout:fixed;\"><tr><td><div>" + user_signature + "</div></td></tr></table>");
	}
document.write("</table>");

}

function writeDetail(title,val)
	{
	if (val != "")
	document.write("<tr><td class=userdetails_title align=left nowrap valign=top><b><font size=3>" + title
		+ ":</td><td class=userdetails_data width=100%><font size=3>" + val + "</td></tr>");
	}

function writeDetailLink(title,val)
	{
	if (val != "")
	document.write("<tr><td class=userdetails_title align=left nowrap valign=top><b><font size=3>" + title
		+ ":</td><td class=userdetails_data width=100% dir=ltr align=right><font size=3>" + val + "</td></tr>");
	}

function writeDetail2(val)
	{
	if (val != "")
	document.write("<tr><td class=userdetails_data align=center nowrap valign=top colspan=2><b><font size=3>"
		+ val + "</td></tr>");
	}

function writeDetail3(val)
	{
	if (val != "")
	document.write("<tr><td class=userdetails_data align=center nowrap valign=top colspan=3><b><font size=3>"
		+ val + "</td></tr>");
	}

function writeHeader(title)
	{
	document.write("<tr><td align=center class=userdetails_header colspan=2><b><font size=3>"
		+ title + "</td></tr>");
	}

function lockMember(id)
	{
	if (confirm("������ ����� ��� �����"))
		{
		if (confirm("������ ����� ��� �����"))
			{
			if (confirm("������ ����� ��� �����"))
				{
				if (confirm("������ ����� ��� �����"))
					{
					submitModerationCommand("ml," + id);
					}
				}
			}
		}
	}

function unlockMember(id)
	{
	if (confirm("������ ����� ��� �����"))
		{
			submitModerationCommand("mo," + id);
		}
	}

function render_content()
	{
	if (memberLevel == 0)
		{
		document.write("<br><table width=100% border=1><tr class=normal><td class=list_center colspan=10><br><br>");
		document.write("<font size=+2>��� ������ ������� ����� ��� ������� ��������.</font><br><br>");
		document.write("������� ����� ������ ��� ��� �������� �� ���������.<br><br>");
		document.write("������� ���� �����:<br><a href='index.php?policy=true'><img border=0 src="+fileURL+"icon.php?hd=profile.png></a><br><br>");
		document.write("</td></tr></table>");
		}
	else if (user_name == "")
		{
		document.write("<br><table width=100% border=1><tr class=normal><td class=list_center colspan=10><br><br>");
		document.write("<font size=+2>����� ������� ��� �����.</font><br><br>");

		document.write("�� ���� ���� ��� ����� ���� ����:<br><br>");
		document.write("<table><tr><td>* ��� ����� ������� ��� ����. </td></tr>");
		document.write("<tr><td>* ����� �� ��� ����� ������ ����. </td></tr>");
		document.write("<tr><td>* ����� �� �� ������ �� ���������. </td></tr>");
		document.write("</td></tr></table><br></td></tr></table>");
		}
	else
		{
		options_bar();
		member_details();
		}

	if (memberLevel > 2) writeModerationForm();
	}
