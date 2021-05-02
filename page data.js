function doctor(name,speciality,regions,fees,rate,locations,uptime){
this.name=name;
this.speciality=speciality;
this.regions=regions;
this.fees=fees;
this.rate=rate;
this.locations=locations;
this.uptime=uptime;
}
var mydoctors=[
//General surgery doctors
new doctor("DR. Youssef Roman","General surgery","Giza","150","4.5","faisal 20th street","sat, sun, mon from 5 to 8 pm"),
new doctor("Clinic Gerahat clinic","General surgery","Giza","300","4.5","El-Mohandessin : Sudan","wed, thu,fri from 6 to 8 pm"),
new doctor("DR. Hany el nady","General surgery","Cairo" ,"300" , "4.6", "infront of gate 6 El Rehab" ,"wed, thu,fri from 5 to 9 pm"),
new doctor("DR. Mohamed Sera","General surgery","Helwan","150" , "4.4","Mohamed sayed ahmed","all the week except sun from 12 to 10 pm"),
new doctor("DR. Eslam hussen","General surgery","Helwan","100" ,"4.6" ,"wasla hadayek Helwan" , "thu, sat, mon from 7 to 11 pm"),
new doctor("DR. Mohamed Abou Fateera","General surgery","Qalubia","200","5","Alexandria Square, El Gomhoreya Buildings", "thu,sun,tue from 5 to 6.15 pm"),
new doctor("DR. Refaat Girgis","General surgery","Qalubia","200","4.4","156 Shoubra St.,Saint Traiez Metro Station","every except sun,fri from 7 to 10 pm"),
new doctor("DR. Mohamed Tamer Mostafa","General surgery","Cairo","150","4.7","El-Maadi : 100 street el horreya square","thu, sun ,tue from 7 to 9 pm"),
//Ophthalmology doctors(eyes)
new doctor("DR.Islam Hosny Abou Elmaaty","Ophthalmology","Cairo","200","4.7", "Nasr City : mostafa el nahhas st.","everyday from 12 to 3 pm"),
new doctor("DR. Ayman M ELghonemy","Ophthalmology","Cairo" ,"300","4.7" ,"El-Maadi : 153", "thu, sun, tue from 3:30 to 4:30"),
new doctor("Center ALMOUNEER","Ophthalmology","Qalubia","165","4.3","Shoubra : 83 shoubra st.","everyday except fri from 9 am to 2 pm"),
new doctor("Center Dima Eye Center ","Ophthalmology","Qalubia","100","4.5"," El-Marg : Elmahta Elgharby Street","everyday except fri 8:30 to 11 pm"),
new doctor("DR. Mahmoud Ramzy Hegazy","Ophthalmology","Giza","200","4.8", "El-Mohandessin : Abdel Hamid Lotfy st.","fri from 5 to 7:30 pm"),
new doctor("DR. Mohamed Hussein","Ophthalmology","Giza","75","4.7","Faisal : king faisal","sat, mon, thu from 5 to 10 pm"),
new doctor("DR. Esraa Mohamed","Ophthalmology","Helwan","120","4.9","Hadayek Helwan square","everyday except fri, sun from 6 to 10 pm"),
new doctor("DR. Adnan Dalain","Ophthalmology","Helwan","5","3.5","hadayek Helwan","sun from 12 to 8 pm"),
//phoniatrics doctors
new doctor("Center Cure ","phoniatrics","Helwan","250" ,"4","El-Maaadi:elnasr street","everyday except fri 8:30 to 11 pm"),
new doctor("Center Eltakatob El Shamel ","phoniatrics","Qalubia","100","4","Elalag: elkaarga street","all the week except sun from 12 to 10 pm"),
new doctor("DR. Ahmed Tarek Rizk","phoniatrics","Helwan","150","4.5","portsaid st.","hu,sun,tue from 5 to 6.15pm"),
new doctor("DR. Nihal Hisham Abdel Hamid","phoniatrics","Cairo","350","4","Mostafa elnahas st.","sun from 12 to 8 pm"),
new doctor("DR. Eman El Ruby","phoniatrics","Giza","200","5","Panaroma mall lvl. 5","sat, sun, mon from 5 to 8 pm"),
new doctor("Doctor Nehal Adel Lotfy","phoniatrics","Giza","100","4.5","Elnahas street cross kafr essam","thu, sun ,tue from 7 to 9 pm"),
new doctor("DR. Nesrine hamouda","phoniatrics","Cairo","300","4.5","Elsheikh zayd:public hospital","sat, tue ,fri from 5 to 7:30 pm"),
new doctor("DR. lamiaa elassal ","phoniatrics","Cairo","5","300","263 Elmaadi st.","thu, sat, mon from 7 to 11 pm"),
//physiotherapy and sport injuries
new doctor("DR. Mohamed Hamdy El Gharabawy","physiotherapy and sport injuries","Helwan","150","4.2","Hadayek El-Ahram,Fourth Gate Mina","fri from 5 to 7:30 pm"),
new doctor("DR. Abdalrhman gamal","physiotherapy and sport injuries","Giza","150","4.9","6th of October : central axis","everyday except fri, sun from 6 to 10 pm"),
new doctor("DR. Paula Mamdouh","physiotherapy and sport injuries","Cairo","200","4.5","Heliopolis,AbdelHayy Fathy,Al Hegaz Sq","thu, sun ,tue from 7 to 9 pm"),
new doctor("DR. Bahrawy Rehabilitation","physiotherapy and sport injuries","Cairo","300","3.7","El-Sheikh Zayed, Twin Towers","thu, sun ,tue from 9 am to 1 pm"),
new doctor("DR. El sayed","physiotherapy and sport injuries","Qalubia","200","4.8","90 shamaly st.","thu, sun ,tue from 4 to 9 pm"),
new doctor("DR. Amira Mahmoud Alghzaly","physiotherapy and sport injuries","Giza","100","4.1","Faisal:King faisal","sun, tue, wed from 12 to 8 pm"),
new doctor("DR. Ahmed Amin","physiotherapy and sport injuries","Giza","100","4.4","6th of October city,Eight District","thu, sat, mon from 7 to 11 pm"),
new doctor("DR ahmed maged","physiotherapy and sport injuries","Qalubia","150","4.2","10 Mohamed Awad st. behind mffco helwan furniture","sat, mon, thu from 5 to 10 pm"),
//dietitian doctors
new doctor("DR. Mohamed Abu El Ghet","Dietitian","Cairo","250","4.5","El maadi: 213 st","sat, mon, thu from 5 to 10 pm"),
new doctor("DR. Mona Tharwat ","Dietitian","Cairo","100","4.5", "El zaiton, seliem el awel st.","everyday except fri 8:30 to 11 pm"),
new doctor("DR. Hesham Ahmed Wasef","Dietitian","Giza","200","4", "El maniel, next to Blue Blue","all the week except tue from 12 to 10 pm"),
new doctor("DR. Marian Rezeqi","Dietitian","Qalubia","300","5","164 abo el feda st.","sat, mon, thu from 5 to 8 pm"),
new doctor("DR. Mohamed Ahmed","Dietitian","Helwan","350","4","29 el Asmant st.","sun ,tue,thu from 7 to 9 pm"),
new doctor("DR. Eslam Magdy","Dietitian","Giza","150","3","Embaba:el bohi st","sun from 6 to 9 pm"),
new doctor("DR. Kamel Ali","Dietitian","Qalubia","50","5","Qalyub: al kanater al khaireya","all the week except sun, fri from 9 to 12 am"),
new doctor("DR. Reham Magdy","Dietitian","Qalubia","100","4.9", "1 gamel st, banha","sat, tue ,fri from 4 to 8:30 pm"),
//diabetes doctors
new doctor("DR. Mohamed Mahmoud","Diabetes","Cairo","250","4.5","Nasr city:mostafa el nahas st","thu, sun ,tue from 7 to 9 pm"),
new doctor("DR. Sherein Yousef ","Diabetes","Qalubia","200","4.5","4 shobra st.","sat, mon, thu from 5 to 10 pm"),
new doctor("DR. Radwa Emad","Diabetes","Giza","300","4.8","El mohandessin:mohi el den","sat, mon, thu from 5 to 11 pm"),
new doctor("DR. Mohamed Fathy Sherief","Diabetes","Qalubia","75","5","Shibin al qanater:el mahata square","sat, tue from  9 am to 2 pm"),
new doctor("DR. Sameh Afifi","Diabetes","Helwan","150","4.5","19 farid st, el Doha st.","thu, fri, sat from 8 to 10 pm"),
new doctor("DR. Mohamed Sedki","Diabetes","Giza","300","4.1","6th of October city: al mehwar al markazy","sun,tue,thu from 2 to 6 pm"),
new doctor("DR. Nabil Makram","Diabetes","Cairo","200","3.5","Faisal: 321 king faisal st","sun from 12 to 8 pm"),
new doctor("DR. Rasha Ahmed Ibrahim","Diabetes","Qalubia","175","3.3","410 ahmed kamel st., el Khusos","sat, mon, thu from 6 to 9 pm"),
//pediatrics-and-newborn doctors
new doctor("DR. Amira Ata","pediatrics-and-newborn","Cairo","250","4.5","243 el kalefa el mamon st","sun, mon, wed from 8 to 12 am"),
new doctor("DR. Marko Badeer","pediatrics-and-newborn","Giza","175","3.7","79 The settlement st.","mon, thu from 12 to 4 pm"),
new doctor("DR. Mohamed Nabeh","pediatrics-and-newborn","Giza","300","4.7","90 The settlement st.","everyday from 7 to 10 pm"),
new doctor("DR. Mohamed Ali Khalaf","pediatrics-and-newborn","Helwan","200","4.5","Hadaiek Helwan","sun, tue from 2 to 6 pm"),
new doctor("DR. Younes Mohamed Shaaban","pediatrics-and-newborn","Cairo","350","3.3","district 19, Sheikh zayed city","sun, mon, tue from 8 to 10 pm"),
new doctor("DR. Ayat Emad","pediatrics-and-newborn","Qalubia","10","4.9","ifront of Shobra el khema metro station","everyday from 12 to 8 pm"),
new doctor("DR. Ahmed El Adel","pediatrics-and-newborn","Helwan","260","4.1","18 naser st.","mon, wed from 12 to 3 pm"),
new doctor("DR. Mamdoh Hasanen","pediatrics-and-newborn","Qalubia","100","4.3","Qalyoub: al kanater al khaireya","sat, wed, fri from 9 to 12 am"),
//bones doctors
new doctor("DR. Mahmoud Sleids","Bones","Qalubia","150","4.2","Shobra masara","everyday except friday from 1 to 7 pm"),
new doctor("DR. Beshoy Nabil","Bones","Qalubia","120","4.5","Shobra: shobra st","thu, sun,tue from 5 to 6.15 pm"),
new doctor("DR. Wael El Hadedy","Bones","Giza","150","4.0","Al haram : al orouba st","sat, mon, thu from 5 to 10 pm"),
new doctor("DR. Tamer Ahmed Eraki","Bones","Cairo","100","4.5","El-Maadi : 43 street el horreya square","sun,tue,thu from 2 to 6 pm"),
new doctor("DR. Rokaia Azab","Bones","Giza","250","4.9","El dokki: el tahrir st","thu, sun ,tue from 7 to 9 pm"),
new doctor("DR. Mario Makhael","Bones","Helwan","200","4.5","19 al wehda st.","sat, tue ,fri from 6 to 8:30 pm"),
new doctor("DR. Naser Seliem","Bones","Helwan","200","5","6th October city","sun from 12 to 8 pm"),
new doctor("DR. Haithm Zowaied","Bones","Cairo","250","3.5","83 el nozha st.","sat, sun, mon from 5 to 8 pm"),
];	
	var copied=1;
function searching(){
	card_hide.style.display = "block";
	var search_type =document.getElementById("search_type").value;
	var entered_name=document.getElementById("search_bar").value;
	var compared_name;
	var searching_name = entered_name.toUpperCase();
	var matched;
	var test = "copy" + copied;
	for(var i =0-copied;i<copied+64;i++){
		var x= "copy" + i;
	if(x!="copy0"){
	var y =document.getElementById(x);
	if(y != null){
	y.remove();}
	}
	}
	for(var i=0;i<mydoctors.length;i++){
		
		
		if(search_type=="name"){
			compared_name = mydoctors[i].name.toUpperCase();
			if (compared_name.match(searching_name)) {
    var the_card = document.getElementById('copy0');
    var adding = the_card.cloneNode(true);
       adding.id = "copy" + copied;
	       the_card.parentNode.appendChild(adding);		

	document.getElementsByTagName("p")[0].innerHTML = mydoctors[i].name;
	    document.getElementsByTagName("p")[1].innerHTML = "Speciality: " + mydoctors[i].speciality;
    document.getElementsByTagName("p")[2].innerHTML = "Region: " + mydoctors[i].regions;
    document.getElementsByTagName("p")[3].innerHTML = "Fees: " + mydoctors[i].fees + "   - Rate: " + mydoctors[i].rate;
	document.getElementsByTagName("p")[4].innerHTML = "Address: " + mydoctors[i].locations;
	document.getElementsByTagName("p")[5].innerHTML = "Dates: " + mydoctors[i].uptime;
	++copied;
	
	
}
}
		

		
	else if(search_type=="region"){
		compared_name = mydoctors[i].regions.toUpperCase();
			if (compared_name.match(searching_name)) {
    var the_card = document.getElementById('copy0');
    var adding = the_card.cloneNode(true);
       adding.id = "copy" + copied;
	copied++;
	document.getElementsByTagName("p")[0].innerHTML = mydoctors[i].name;
	    document.getElementsByTagName("p")[1].innerHTML = "Speciality: " + mydoctors[i].speciality;
    document.getElementsByTagName("p")[2].innerHTML = "Region: " + mydoctors[i].regions;
    document.getElementsByTagName("p")[3].innerHTML = "Fees: " + mydoctors[i].fees + "   - Rate: " + mydoctors[i].rate;
	document.getElementsByTagName("p")[4].innerHTML = "Address: " + mydoctors[i].locations;
	document.getElementsByTagName("p")[5].innerHTML = "Dates: " + mydoctors[i].uptime;
    the_card.parentNode.appendChild(adding);
}
		}
		
		else if(search_type=="speciality"){
		compared_name = mydoctors[i].speciality.toUpperCase();
			if (compared_name.match(searching_name)) {
				var the_card = document.getElementById('copy0');
    var adding = the_card.cloneNode(true);
       adding.id = "copy" + copied;
	copied++;
	document.getElementsByTagName("p")[0].innerHTML = mydoctors[i].name;
	    document.getElementsByTagName("p")[1].innerHTML = "Speciality: " + mydoctors[i].speciality;
    document.getElementsByTagName("p")[2].innerHTML = "Region: " + mydoctors[i].regions;
    document.getElementsByTagName("p")[3].innerHTML = "Fees: " + mydoctors[i].fees + "   - Rate: " + mydoctors[i].rate;
	document.getElementsByTagName("p")[4].innerHTML = "Address: " + mydoctors[i].locations;
	document.getElementsByTagName("p")[5].innerHTML = "Dates: " + mydoctors[i].uptime;
    the_card.parentNode.appendChild(adding);
		}
		
	}
}
var obj = document.getElementById(test);
obj.remove();
}



