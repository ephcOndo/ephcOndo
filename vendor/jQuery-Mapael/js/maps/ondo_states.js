
<script type="text/javascript">
$.fn.digits = function(){ 
	return this.each(function(){ 
		$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
	})
}
$(function(){
	var async = true;
	var clinic;
	var g_data;
	var period;
	var gender;
	var age;
	var ailments;
	var imm_status;
	var cdimension;
	var stat_type;
	var clinics = {"EPHC-OY-LAG-01":"Alegongo PHC","EPHC-OY-AKI-01":"Ojoo Health Center","EPHC-OY-EGB-01":"Alakia PHC","EPHC-OY-IBN-01":"Idi Ogungun PHC","EPHC-OY-IDO-01":"Apete PHC","EPHC-OY-ONA-01":"Baba Arere Maternity","EPHC-OY-IBNW-01":"Oniyanrin PHC","EPHC-OY-IBNE-01":"Alafara Aderogba PHC","EPHC-OY-IBSE-01":"Oranyan PHC","EPHC-OY-IBSW-01":"Foko PHC","EPHC-OY-AFI-01":"Ilora PHC","EPHC-OY-ATIB-01":"Aafin Health Center","EPHC-OY-OYE-01":"Oba Adeyemi PHC","EPHC-OY-OYW-01":"PHC Iseke","EPHC-OY-IRE-01":"Kisi PHC","EPHC-OY-OLU-01":"Oluyole Comprehensive Health Center","EPHC-OY-SAKE-01":"AGO-AMODU PHC","EPHC-OY-ATIS-01":"COMPREHENSIVE CENTER TEDE","EPHC-OY-SAKW-01":"ISALE TABA PHC","EPHC-OY-IBPE-01":"ANKO PHC","EPHC-OY-IBPC-01":"Maternity Center, Igbole","EPHC-OY-IBPN-01":"AYETE PHC","EPHC-OY-OGO-01":"Model PHC, Ajaawa","EPHC-OY-OGBN-01":"IBRAHIM TAIWO PHC","EPHC-OY-OGBS-01":"ADEBAYO ALATA PHC","EPHC-OY-OLOR-01":"Owode PHC, Igbeti","EPHC-OY-OORE-01":"Igboho PHC","EPHC-OY-ORI-01":"LG Maternity Center, Iluju","EPHC-OY-SUR-01":"Iresa Adu","EPHC-OY-ISE-01":"Ibode Oba PHC","EPHC-OY-KAJ-01":"Ijo PHC","EPHC-OY-IWA-01":"Lam Adesina PHC","EPHC-OY-ITE-01":"Comprehensive Center, Otu"};
    function initMap(){
		$(".content-wrap").find(".geo-locations-number").text(Object.keys(clinics).length);
        var $map = $("#map"),
            lga;
        $map.mapael({
            map:{
                name : "nga_oyo_lgas",
                defaultArea : {
                    attrs : {
                        fill : "#9c110c",
                        stroke : "#5d5d5d"
                    },
                    attrsHover : {
                        fill : "#242424",
                        animDuration : 100
                    },
                    tooltip: {
                        content: function(){
                            return "<strong>" + lga + "</strong>";
                        }
                    },
                    eventHandlers: {
                        mouseover: function(e, id){
                            lga = id;
                        },
                        click: function(e, id, v){
							//refreshStats(id);
							var sel_clinic = [];
							sel_clinic.push(id);
							$("select#lga_clinics").val(sel_clinic).trigger("change");
                        }
                    }
                },
                defaultPlot:{
                    size: 7,
                    attrs : {
                        fill : Sing.colors["brand-warning"],
                        stroke : "#fff",
                        "stroke-width" : 0,
                        "stroke-linejoin" : "round"
                    },
                    attrsHover : {
                        "stroke-width" : 1,
                        animDuration : 100
                    }
                },
                zoom : {
                    enabled : true,
                    step : 0.75
                }
            },
			areas: {
					'EPHC-OY-LAG-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">LAGELU</span><br />Patients: 2586 <br />Visits: 955'}
	},'EPHC-OY-AKI-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">AKINYELE</span><br />Patients: 3771 <br />Visits: 5994'}
	},'EPHC-OY-EGB-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">EGBEDA</span><br />Patients: 4400 <br />Visits: 710'}
	},'EPHC-OY-IBN-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IBADAN NORTH</span><br />Patients: 3175 <br />Visits: 1845'}
	},'EPHC-OY-IDO-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IDO</span><br />Patients: 1694 <br />Visits: 1440'}
	},'EPHC-OY-ONA-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">ONA-ARA</span><br />Patients: 3924 <br />Visits: 6458'}
	},'EPHC-OY-IBNW-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IBADAN NORTH WEST</span><br />Patients: 1861 <br />Visits: 608'}
	},'EPHC-OY-IBNE-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IBADAN NORTH EAST</span><br />Patients: 580 <br />Visits: 58'}
	},'EPHC-OY-IBSE-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IBADAN SOUTH-EAST</span><br />Patients: 5374 <br />Visits: 2300'}
	},'EPHC-OY-IBSW-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IBADAN SOUTH WEST</span><br />Patients: 173 <br />Visits: 150'}
	},'EPHC-OY-AFI-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">AFIJIO</span><br />Patients: 307 <br />Visits: 196'}
	},'EPHC-OY-ATIB-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">ATIBA</span><br />Patients: 2938 <br />Visits: 1536'}
	},'EPHC-OY-OYE-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">OYO EAST</span><br />Patients: 1746 <br />Visits: 1170'}
	},'EPHC-OY-OYW-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">OYO WEST</span><br />Patients: 729 <br />Visits: 703'}
	},'EPHC-OY-IRE-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IREPO</span><br />Patients: 2494 <br />Visits: 2094'}
	},'EPHC-OY-OLU-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">OLUYOLE</span><br />Patients: 6530 <br />Visits: 3424'}
	},'EPHC-OY-SAKE-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">SAKI EAST</span><br />Patients: 408 <br />Visits: 516'}
	},'EPHC-OY-ATIS-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">ATISBO</span><br />Patients: 638 <br />Visits: 1980'}
	},'EPHC-OY-SAKW-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">SAKI WEST</span><br />Patients: 2236 <br />Visits: 1930'}
	},'EPHC-OY-IBPE-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IBARAPA EAST</span><br />Patients: 703 <br />Visits: 1112'}
	},'EPHC-OY-IBPC-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IBARAPA CENTRAL</span><br />Patients: 895 <br />Visits: 993'}
	},'EPHC-OY-IBPN-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IBARAPA NORTH</span><br />Patients: 190 <br />Visits: 1145'}
	},'EPHC-OY-OGO-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">OGO-OLUWA</span><br />Patients: 516 <br />Visits: 832'}
	},'EPHC-OY-OGBN-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">OGBOMOSO NORTH</span><br />Patients: 2501 <br />Visits: 2567'}
	},'EPHC-OY-OGBS-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">OGBOMOSO SOUTH</span><br />Patients: 4929 <br />Visits: 11633'}
	},'EPHC-OY-OLOR-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">OLORUNSOGO</span><br />Patients: 473 <br />Visits: 984'}
	},'EPHC-OY-OORE-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">OORELOPE</span><br />Patients: 1544 <br />Visits: 1184'}
	},'EPHC-OY-ORI-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">ORI IRE</span><br />Patients: 2025 <br />Visits: 4751'}
	},'EPHC-OY-SUR-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">SURULERE</span><br />Patients: 831 <br />Visits: 1997'}
	},'EPHC-OY-ISE-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">ISEYIN</span><br />Patients: 2772 <br />Visits: 7097'}
	},'EPHC-OY-KAJ-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">KAJOLA</span><br />Patients: 928 <br />Visits: 614'}
	},'EPHC-OY-IWA-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">IWAJOWA</span><br />Patients: 1744 <br />Visits: 1165'}
	},'EPHC-OY-ITE-01' : {
		href : "javascript:;",
		tooltip: {content : '<span style="font-weight:bold;">ITESIWAJU</span><br />Patients: 1040 <br />Visits: 1774'}
	}	

			},
            plots:{
				'EPHC-OY-LAG-01' : {
		value: [7.44098, 3.95206],
		latitude: 7.44098,
		longitude: 3.95206,
		tooltip: {content : '<span style="font-weight:bold;">ALEGONGO PHC</span><br />Alegongo, Akobo, Ibadan'}
	},'EPHC-OY-AKI-01' : {
		value: [7.471105, 3.915528],
		latitude: 7.471105,
		longitude: 3.915528,
		tooltip: {content : '<span style="font-weight:bold;">OJOO HEALTH CENTER</span><br />Ojoo, Ibadan'}
	},'EPHC-OY-EGB-01' : {
		value: [7.40147, 3.97835],
		latitude: 7.40147,
		longitude: 3.97835,
		tooltip: {content : '<span style="font-weight:bold;">ALAKIA PHC</span><br />Isebo, Alakia, Ibadan'}
	},'EPHC-OY-IBN-01' : {
		value: [7.395278, 3.918611],
		latitude: 7.395278,
		longitude: 3.918611,
		tooltip: {content : '<span style="font-weight:bold;">IDI OGUNGUN PHC</span><br />Idi Ogungun, Gate, Ibadan'}
	},'EPHC-OY-IDO-01' : {
		value: [7.4502, 3.87046],
		latitude: 7.4502,
		longitude: 3.87046,
		tooltip: {content : '<span style="font-weight:bold;">APETE PHC</span><br />Apete, Ibadan'}
	},'EPHC-OY-ONA-01' : {
		value: [7.36798, 3.93467],
		latitude: 7.36798,
		longitude: 3.93467,
		tooltip: {content : '<span style="font-weight:bold;">BABA ARERE MATERNITY</span><br />Olorunsogo, Ibadan'}
	},'EPHC-OY-IBNW-01' : {
		value: [7.392841, 3.891356],
		latitude: 7.392841,
		longitude: 3.891356,
		tooltip: {content : '<span style="font-weight:bold;">ONIYANRIN PHC</span><br />Oniyanrin, Ibadan'}
	},'EPHC-OY-IBNE-01' : {
		value: [7.38272054, 3.90498029],
		latitude: 7.38272054,
		longitude: 3.90498029,
		tooltip: {content : '<span style="font-weight:bold;">ALAFARA ADEROGBA PHC</span><br />Oje, Ibadan'}
	},'EPHC-OY-IBSE-01' : {
		value: [7.375195, 3.8982523],
		latitude: 7.375195,
		longitude: 3.8982523,
		tooltip: {content : '<span style="font-weight:bold;">ORANYAN PHC</span><br />Oranyan, Ibadan'}
	},'EPHC-OY-IBSW-01' : {
		value: [7.3757459, 3.8862741],
		latitude: 7.3757459,
		longitude: 3.8862741,
		tooltip: {content : '<span style="font-weight:bold;">FOKO PHC</span><br />Foko, Ibadan'}
	},'EPHC-OY-AFI-01' : {
		value: [7.80086, 3.9012913],
		latitude: 7.80086,
		longitude: 3.9012913,
		tooltip: {content : '<span style="font-weight:bold;">ILORA PHC</span><br />Ilora'}
	},'EPHC-OY-ATIB-01' : {
		value: [7.85422, 3.93313],
		latitude: 7.85422,
		longitude: 3.93313,
		tooltip: {content : '<span style="font-weight:bold;">AAFIN HEALTH CENTER</span><br />Oyo'}
	},'EPHC-OY-OYE-01' : {
		value: [7.834824, 3.9337963],
		latitude: 7.834824,
		longitude: 3.9337963,
		tooltip: {content : '<span style="font-weight:bold;">OBA ADEYEMI PHC</span><br />Durban'}
	},'EPHC-OY-OYW-01' : {
		value: [7.842609, 3.9171683],
		latitude: 7.842609,
		longitude: 3.9171683,
		tooltip: {content : '<span style="font-weight:bold;">PHC ISEKE</span><br />Iseke'}
	},'EPHC-OY-IRE-01' : {
		value: [9.07988, 3.84633],
		latitude: 9.07988,
		longitude: 3.84633,
		tooltip: {content : '<span style="font-weight:bold;">KISI PHC</span><br />Kisi'}
	},'EPHC-OY-OLU-01' : {
		value: [7.342525, 3.91653],
		latitude: 7.342525,
		longitude: 3.91653,
		tooltip: {content : '<span style="font-weight:bold;">OLUYOLE COMPREHENSIVE HEALTH CENTER</span><br />Adaramagbo'}
	},'EPHC-OY-SAKE-01' : {
		value: [8.621323, 3.610307],
		latitude: 8.621323,
		longitude: 3.610307,
		tooltip: {content : '<span style="font-weight:bold;">AGO-AMODU PHC</span><br />Ago Amodu'}
	},'EPHC-OY-ATIS-01' : {
		value: [8.5507437, 3.4496928],
		latitude: 8.5507437,
		longitude: 3.4496928,
		tooltip: {content : '<span style="font-weight:bold;">COMPREHENSIVE CENTER TEDE</span><br />Tede'}
	},'EPHC-OY-SAKW-01' : {
		value: [8.668998, 3.394676],
		latitude: 8.668998,
		longitude: 3.394676,
		tooltip: {content : '<span style="font-weight:bold;">ISALE TABA PHC</span><br />Saki'}
	},'EPHC-OY-IBPE-01' : {
		value: [7.5352115, 3.4174726],
		latitude: 7.5352115,
		longitude: 3.4174726,
		tooltip: {content : '<span style="font-weight:bold;">ANKO PHC</span><br />Eruwa'}
	},'EPHC-OY-IBPC-01' : {
		value: [7.426596, 3.297717],
		latitude: 7.426596,
		longitude: 3.297717,
		tooltip: {content : '<span style="font-weight:bold;">MATERNITY CENTER, IGBOLE</span><br />Igboora'}
	},'EPHC-OY-IBPN-01' : {
		value: [7.544364, 3.221031],
		latitude: 7.544364,
		longitude: 3.221031,
		tooltip: {content : '<span style="font-weight:bold;">AYETE PHC</span><br />Ayete'}
	},'EPHC-OY-OGO-01' : {
		value: [7.927911, 4.136227],
		latitude: 7.927911,
		longitude: 4.136227,
		tooltip: {content : '<span style="font-weight:bold;">MODEL PHC, AJAAWA</span><br />Ajaawa.'}
	},'EPHC-OY-OGBN-01' : {
		value: [8.1306379, 4.2478063],
		latitude: 8.1306379,
		longitude: 4.2478063,
		tooltip: {content : '<span style="font-weight:bold;">IBRAHIM TAIWO PHC</span><br />Oja Igbo, Ogbomosho'}
	},'EPHC-OY-OGBS-01' : {
		value: [8.124899, 4.225138],
		latitude: 8.124899,
		longitude: 4.225138,
		tooltip: {content : '<span style="font-weight:bold;">ADEBAYO ALATA PHC</span><br />Awoyaya, Ogbomosho.'}
	},'EPHC-OY-OLOR-01' : {
		value: [8.743886, 4.138211],
		latitude: 8.743886,
		longitude: 4.138211,
		tooltip: {content : '<span style="font-weight:bold;">OWODE PHC, IGBETI</span><br />Igbeti'}
	},'EPHC-OY-OORE-01' : {
		value: [8.845304, 3.757538],
		latitude: 8.845304,
		longitude: 3.757538,
		tooltip: {content : '<span style="font-weight:bold;">IGBOHO PHC</span><br />Igboho'}
	},'EPHC-OY-ORI-01' : {
		value: [8.207463, 4.193493],
		latitude: 8.207463,
		longitude: 4.193493,
		tooltip: {content : '<span style="font-weight:bold;">LG MATERNITY CENTER, ILUJU</span><br />Iluju'}
	},'EPHC-OY-SUR-01' : {
		value: [8.0860815, 4.3895397],
		latitude: 8.0860815,
		longitude: 4.3895397,
		tooltip: {content : '<span style="font-weight:bold;">IRESA ADU</span><br />Iresa Adu'}
	},'EPHC-OY-ISE-01' : {
		value: [7.968361, 3.597207],
		latitude: 7.968361,
		longitude: 3.597207,
		tooltip: {content : '<span style="font-weight:bold;">IBODE OBA PHC</span><br />Ibode Oba, Aafin, Iseyin'}
	},'EPHC-OY-KAJ-01' : {
		value: [8.035369, 3.343889],
		latitude: 8.035369,
		longitude: 3.343889,
		tooltip: {content : '<span style="font-weight:bold;">IJO PHC</span><br />Okeho'}
	},'EPHC-OY-IWA-01' : {
		value: [7.979945, 3.235775],
		latitude: 7.979945,
		longitude: 3.235775,
		tooltip: {content : '<span style="font-weight:bold;">LAM ADESINA PHC</span><br />Iganna'}
	},'EPHC-OY-ITE-01' : {
		value: [8.20495, 3.412741],
		latitude: 8.20495,
		longitude: 3.412741,
		tooltip: {content : '<span style="font-weight:bold;">COMPREHENSIVE CENTER, OTU</span><br />Otu'}
	}	
                
				
			}
        });

        //ie svg height fix
        function _fixMapHeight(){
            $map.find("svg").css("height", function(){
                return $(this).attr("height") + "px";
            });
        }

        _fixMapHeight();
        SingApp.onResize(function(){
            setTimeout(function(){
                _fixMapHeight();
            }, 100)
        });
    }
	
	var refreshAllStats = function() {
		$("#refreshAllStats").click(function() {
			refreshStats();
		});
		$(document).on("click", ".refresh_clinic", function(){
			clinic = $(this).data("token");
			stat_type = $(this).data("st");
			freq = $(this).data("freq");
			
			//activate pop over
		});
		
	}
	var trackingClick = function() {
		$("a.tracking").click(function() {
			async = true;
			$("a.tracking").css({"font-weight":"normal", "color":"#000"});
			$(this).css({"font-weight":"bold"});
			period = $(this).attr("rel");			
			refreshStats(clinic, period, gender, age, cdimension, imm_status);
		});
	}
	var clinicChange = function() {
		$("button#chart_map_filter").click(function() {
			async = true;
			clinic = $("select#lga_clinics").val() || "" ;
			refreshStats(clinic, period, gender, age, cdimension, imm_status);
		});
		$("select#lga_clinics").change(function() {
			async = true;
			clinic = $(this).val() || "" ;
			refreshStats(clinic, period, gender, age, cdimension, imm_status);
		});
	}
	var chart_freq = function() {
		$(".modal").find("select#chart_freq, select#chart_gender, select#chart_age, select#chart_dimension, select#chart_immunization_status").change(function() {			
			var fre = $("select#chart_freq").val();	
			if ($("select#chart_gender").is(":visible"))
				gender = $("select#chart_gender").val();
			if ($("select#chart_age").is(":visible"))
				age = $("select#chart_age").val();
			if ($("select#chart_dimension").is(":visible"))
				cdimension = $("select#chart_dimension").val();	
			if ($("select#chart_immunization_status").is(":visible"))
				imm_status = $("select#chart_immunization_status").val();
			
			async = false;
			refreshStats(clinic, period, gender, age, cdimension, imm_status);
			refreshChart(fre);			
		});
	};
	
	
	$(document).on("change", "select#imm_clinic, select#imm_gender, select#imm_age", function(){
		var imm_c = $("select#imm_clinic").val();
		var imm_g = $("select#imm_gender").val();
		var imm_a = $("select#imm_age").val();	
		ailments = 1;
		refreshStats(imm_c, "", imm_g, imm_a);
		refreshCommonAilments(g_data);
	});
	
	function getJsonChildByKey(json, key) {
		var rel = "";
		$.each(json, function(k,v){	
			if (k==key) {					
				rel = v;
				return true;
			}
		});
		return rel;
	}
	function refreshChart(freq) 
	{	
		if (!freq)
			freq = "a";
		
		$(".modal #modal-chart").html("");
		$("#modal-chart").empty();
		var mdata = [], ykeys = [], labels = [], dimensions = {};
		
		if (stat_type=="patient") {
			//first element for type, second for data key, third for ykeys, fourth for labels
			dimensions = [["count","pat","b","Children"],["count","adu","c","Adult"],["count","eld","d","Elderly"],["total","","a","Total"]];
			if (age && age=="children")
				dimensions = [["count","pat","b","Children"]];
			else if (age && age=="adult")
				dimensions = [["count","adu","c","Adult"]];
			else if (age && age=="elderly")
				dimensions = [["count","eld","d","Elderly"]];
			$("#modalType").text("Registered Patients ");
		} else if (stat_type=="session") {					
			dimensions = [["count","ses","b","New Sessions"],["count","fol","c","Follow-up"],["total","","a","Total"]];
			$("#modalType").text("Clinical Sessions ");
		} else if (stat_type=="cpd") {					
			dimensions = [["count","cpd","b","Average Score"]];
			$("#modalType").text("Continuous Professional Development ");
		} else if (stat_type=="immunization") {						
			dimensions = [["count","imm","a","Screenings"]];
			if (imm_status) {
				$("#modalType").text("Immunization Status ");
				if (imm_status=="-")
					dimensions = [["count","imm_s_n","b","None"],["count","imm_s_i","c","Incomplete"],["count","imm_s_c","d","Completed"],["count","imm_s_who","e","Completed for 2mo - 24mo"]];
				else if (imm_status=="stat") {
					$("#modalType").text("Immunization Statistics ");
					dimensions = [["stat","imm_s","a","Statistics"]];
				} else if (imm_status=="0")
					dimensions = [["count","imm_s_n","b","None"]];
				else if (imm_status=="1")
					dimensions = [["count","imm_s_i","c","Incomplete"]];
				else if (imm_status=="2")
					dimensions = [["count","imm_s_c","d","Completed"]];
				else if (imm_status=="who")
					dimensions = [["count","imm_s_who","e","Completed for 2mo - 24mo (%)"]];
				
			} else
				$("#modalType").text("Immunization Screening ");
		} else if (stat_type=="idsr") {						
			dimensions = [["count","pat","b","Children"],["count","adu","c","Adult"],["total","","a","Total"]];
			$("#modalType").text("IDSR ");
		} else {			
			dimensions = [["count","pat","b",""],["count","adu","c",""],["total","","a",""]];
			$("#modalType").text("");
		}
			
		ailments = 0;	
		var z = 1;
				
		var head = $("#chart_table thead");
		var body = $("#chart_table tbody");				
		head.html("");
		body.html("");
		
		if (cdimension) {
			if (cdimension == "ailment") {
				ykeys.push("a");
				labels.push("Count");
				
				head.append("<tr><th width=50%>Ailment </th><th> "+labels.join("</th><th>")+" </th></tr>");
				$.each(g_data.diagnosis, function(i, d) {	
					var obj = {y: d[1]};
					obj["a"] = d[0];
					
					var row = $("<tr />");						
					row.append("<td>"+d[1]+"</td>");
					row.append("<td>"+d[0]+"</td>");
											
					body.append(row);
					mdata.push(obj);
				});			
			} else if (cdimension == "service") {
				ykeys.push("a");
				labels.push("Count");
				
				head.append("<tr><th width=50%>Service </th><th> "+labels.join("</th><th>")+" </th></tr>");
				var services = [], arr_services = [];
				$.each(g_data.clinics, function(i,c){
					var s = c.stat;
					var arr = getJsonChildByKey(s, "dia");
					var v_total = 0;
					$.each(arr[freq], function(y, o) {
						var s_obj = {name: y};
						s_obj["value"] = parseFloat(o);
						services.push(s_obj);						
					});
				});
				//add all services together
				var holder = {};
				services.forEach(function (d) {
					if(holder.hasOwnProperty(d.name)) {
					   holder[d.name] = holder[d.name] + d.value;
					} else {       
					   holder[d.name] = d.value;
					}
				});
				
				for(var prop in holder) {
					arr_services.push({name: prop, value: holder[prop]});   
				}
				
				$.each(arr_services, function(i, d) {	
					var obj = {y: d.name};
					obj["a"] = d.value;
					
					var row = $("<tr />");						
					row.append("<td>"+d.name+"</td>");
					row.append("<td>"+d.value+"</td>");
											
					body.append(row);
					mdata.push(obj);
				});			
			}
		} else {					
			$.each(g_data.clinics, function(i,c){
				var s = c.stat;
				var total = 0; //where used
				if (Object.keys(g_data.clinics).length == 1) {
					if (stat_type=="patient") {	
					
					} else if (stat_type=="session") {
						//this loop is only once no harm
						ykeys.push("a");
						labels.push("Services");
						
						head.append("<tr><th width=50%>Services </th><th> "+labels.join("</th><th>")+" </th></tr>");
						var arr = getJsonChildByKey(s, "dia");						
						
						$.each(arr[freq], function(y, o) {
							var obj = {y: y}						
							obj["a"] = o;
							
							var row = $("<tr />");
							row.append("<td>"+y+"</td>");
							row.append("<td>"+o+"</td>");
							
							body.append(row);
							mdata.push(obj);
						});
					} else if (stat_type=="immunization") {
						//this loop is only once no harm
						ykeys.push("a");
						labels.push("Count");
						head.append("<tr><th width=50%>Vaccine </th><th> "+labels.join("</th><th>")+" </th></tr>");
						var arr = getJsonChildByKey(s, "imm_d");						
						
						$.each(arr[freq], function(y, o) {
							var obj = {y: o.val};
							obj["a"] = o.c;
							
							var row = $("<tr />");						
							row.append("<td>"+o.val+"</td>");
							row.append("<td>"+o.c+"</td>");
													
							body.append(row);
							mdata.push(obj);
						});
					}				
				} else {					
					var row = $("<tr />");
					var obj = {y: c.name}
					row.append("<td><a href=\"#\" class=\"refresh_clinic\" data-token=\""+c.token+"\" data-st=\""+stat_type+"\" data-freq=\""+freq+"\">"+c.name+"</a></td>");
					$.each(dimensions, function(y, o) {	
						if (z==1)  {
							//need this values only on first loop
							ykeys.push(o[2]);
							labels.push(o[3]);
						}
						if (o[0] == "count") {					
							var arr = getJsonChildByKey(s, o[1]);
							var val = parseFloat(arr[freq]);
							total += val;
							obj[o[2]] = val;
						} else if (o[0] == "stat") {
							return false;
						} else {
							obj[o[2]] = total;
						}	
						row.append("<td> "+obj[o[2]]+" </td>");
					});	
					
						//console.log(obj);
					
					mdata.push(obj);
					body.append(row);
				}				
						
				z++;
			});	
		}
		
		if (Object.keys(mdata).length == 0)
			body.append($("<tr>").append("No relevant data."));					
		
		function _initChart(){
			if (Object.keys(g_data.clinics).length == 1) {
				//use pie
			} else {
				if (!cdimension)
					head.append("<tr><th width=40%>Clinics </th><th> "+labels.join("</th><th>")+" </th></tr>");				
			}
			var mChart = Morris.Bar({
			  element: "modal-chart",
			  data: mdata,
			  gridTextSize: 8,
			  gridTextWeight: "normal",
			  xkey: "y",
			  ykeys: ykeys,
			  width: "100%",
			  labels: labels
			});
			
		}
		
        _initChart();
        SingApp.onResize(_initChart);	
	}
	
	var showDetails = function showDetails()
	{
		//console.log(g_data);
		$(".show_details").click(function() {
			stat_type = $(this).attr("rel");
			
			$("#chart_immunization_status").val("");//this is important
			$("#chart_dimension").val("");
			$("#chart_gender").val("");
			$("#chart_age").val("");
			$("#chart_freq").val("");
			
			if (stat_type == "patient") {				
				$("#gender_handle").show();
				$("#age_handle").show();
				$("#dimension_handle").hide();
				$("#immunization_status_handle").hide();
			} else if (stat_type == "session") {				
				$("#gender_handle").hide();
				$("#age_handle").show();
				$("#dimension_handle").show();
				$("#immunization_status_handle").hide();
			} else if (stat_type == "immunization") {
				$("#dimension_handle").hide();
				$("#age_handle").hide();
				$("#gender_handle").show();
				$("#immunization_status_handle").show();
			} else {
				$("#age_handle").hide();
				$("#gender_handle").hide();
				$("#dimension_handle").hide();
				$("#immunization_status_handle").hide();
			}
			refreshChart();
			$("#modal-chart svg").css({width:"100%"});
			$("#cp-modal").modal("show");
		});
		
		$("#cp-modal").on("hidden.bs.modal", function () {			
			$("#chart_immunization_status").val("");//this is important
			$("#chart_dimension").val("");
			$("#chart_gender").val("");
			$("#chart_age").val("");
			$("#chart_freq").val("");
			refreshChart();
		});
		
	}
	
	function drawProgressBar(elem, data)
	{
		var el = $(elem);
		if (elem.indexOf("clinical") > -1) {				
			var a = parseFloat(data.sessions.a) + parseFloat(data.followup.a);
			var b = parseFloat(data.sessions.a);
			var cp = (b/a)*100;
			var d = 100 - cp;
		} else if (elem.indexOf("patient") > -1) {
			var a = parseFloat(data.children.a) + parseFloat(data.adult.a);
			var b = parseFloat(data.adult.a);
			var cp = (b/a)*100;
			var d = 100 - cp;
		}
		var prev = el.parent().parent().find("p.deemphasize");
		var t = prev.data("title");
		if (t) {				
			var text = t.split("%");
			if (!cp)
				cp = 0;
			if (!d)
				d = 0;
			if (text.length > 1)
				prev.text(cp.toFixed(2) + "%" + text[1].replace("####", d.toFixed(2)+"%"));
		}
		el.attr("aria-valuenow", cp);
		el.attr("data-width", cp+"%");
		el.css({"width": cp+"%"});
		//el.attr("title", data.followup.a+"% came for follow-up");
	}
	function refreshCommonAilments(data)
	{		
		var body = $("#common_ailments tbody");
		if (data.diagnosis) {
			body.html("");
			var c = 0;
			$.each(data.diagnosis, function(i, d) {	
				if (c==10)
					return false;
				body.append("<tr><td> "+d[1]+" </td><td> "+d[0]+" </td></tr>");
				c++;
			});
		} else
			$("#common_ailments tbody").append($("<tr>").append("You have no clinical session records."));
	}
	function onSuccess(data, textStatus, jqXHR)
	{
		//	if (gender) console.log(data);
		g_data = data;		
		//if (ailments && ailments!=0)
		//	return;
		
		if (clinic) {
			var sel_clinics = [];
			$.each(data.clinics, function(i,c) {
				sel_clinics.push(c.name);
			})
			var html = 'e&acute;PHC <span class="fw-semi-bold">Statistics</span> ('+sel_clinics.join(" | ")+')';
			//$("#statistics_id").html(html);
			$(".modal #chart_header").html("(" + sel_clinics.join(" | ") + ")");
		} else {			
			var html = 'e&acute;PHC <span class="fw-semi-bold">Statistics</span>';
			$("#statistics_id").html(html);
			$(".modal #chart_header").html(" (All Clinics)");
		}
		
		$(".content-wrap").find(".geo-locations-number-sel").text(Object.keys(data.clinics).length);
		var pa = parseFloat(data.children.a) + parseFloat(data.adult.a);
		var pm = parseFloat(data.children.m) + parseFloat(data.adult.m);
		var pd = parseFloat(data.children.d) + parseFloat(data.adult.d);
		$("#map_statistics").find("p#ptotal").text(pa);
		$("#map_statistics").find("p#pmonth").text(pm);
		$("#map_statistics").find("p#ptoday").text(pd);
		
		var sa = parseFloat(data.sessions.a) + parseFloat(data.followup.a);
		var sm = parseFloat(data.sessions.m) + parseFloat(data.followup.m);
		var sd = parseFloat(data.sessions.d) + parseFloat(data.followup.d);		
		$("#map_statistics").find("p#stotal").text(sa);
		$("#map_statistics").find("p#smonth").text(sm);
		$("#map_statistics").find("p#stoday").text(sd);
		
		var pbars = [".clinical_progressbar", ".patients_progressbar"];		
		$.each(pbars, function(i,l){	
			drawProgressBar(l, data);							  
		});		  
		
		if (period) {			
			$(".progress-stats").find("#percent1").text(parseFloat(data.children[period]) + parseFloat(data.adult[period]));
			$(".progress-stats").find("#percent2").text(parseFloat(data.sessions[period]) + parseFloat(data.followup[period]));
			$(".progress-stats").find("#percent3").text(data.efficiency[period]);
			$(".progress-stats").find("#percent4").text(data.imm[period]);
		} else {			
			$(".progress-stats").find("#percent1").text(pa);
			$(".progress-stats").find("#percent2").text(sa);
			$(".progress-stats").find("#percent3").text(data.efficiency.a);
			$(".progress-stats").find("#percent4").text(data.imm.a);
		}		
		
		var val = (data.best.p.name) ? data.best.p.name + " ("+data.best.p.value+")" : "None";
		$(".content-wrap").find("span#best_patient").text(val);
		var val = (data.best.s.name) ? data.best.s.name + " ("+data.best.s.value+")" : "None";
		$(".content-wrap").find("span#best_session").text(val);
		var val = (data.best.e.name) ? data.best.e.name + " ("+data.best.e.value+")" : "None";
		$(".content-wrap").find("span#best_efficient").text(val);
		
		refreshCommonAilments(data);
		
		var body = $("#immunization_schedules tbody");
		if (data.immunization_d) {
			body.html("");
			$.each(data.immunization_d, function(i, d) {	
				body.append("<tr><td> "+i+" </td><td> "+d+" </td></tr>");
			});
			$("#screening_total").html(data.imm[period]+" ");
		} else
			$("#immunization_schedules tbody").append($("<tr>").append("You have no immunization records."));
		
		var d = moment.unix(data.last_sync - (24*60)).format("Do MMM YYYY h:mmA");
		var lsync = "(Last Sync: " + d + ")";
		$("#last_sync").text(lsync);
		$("#show_loading").hide();
	}
	
	function onError(request, type, errorThrown)
	{
		alert("Error occurred. Could not refresh statistics.");
		console.log(request);
	}
	function refreshStats(id, p, g, a, d, im) 
	{
		if (g_data && ailments==0 && id==clinic)
			return;
		clinic = id;//set global
		$("#lga_clinics").val(clinic);
		$("#show_loading").show();
		
		$("#modal-chart").html("");
		$("#modal-chart").empty();
		var d = {clinic:clinic, freq:p, stat_type:stat_type, gender:g, age:a, dimension:d, imm_s:im, diag:ailments};
		$.ajax({
			type: "POST",
			url: "ajax.php",
			cache: false,
			data: d,
			dataType: "json",
			timeout: 125000,
			success: onSuccess,
			error: onError,
			//beforeSend: function(jqXHR, settings) {
			//},
			complete: function() {
				$.unblockUI();
			}
			,async:async
		});
	}

    function initCalendar(){

        var monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];

        var dayNames = ["S", "M", "T", "W", "T", "F", "S"];

        var now = new Date(),
            month = now.getMonth() + 1,
            year = now.getFullYear();

        var events = [
            [
                "2/"+month+"/"+year,
                "World Malaria Day",
                "#",
                Sing.colors["brand-primary"],
                "Malaria Screening for 0 - 5 years across LGAs"
            ],
            [
                "5/"+month+"/"+year,
                "Cervical Cancer Screening",
                "#",
                Sing.colors["brand-warning"],
                "Women in disadvantaged communities."
            ],
            [
                "18/"+month+"/"+year,
                "Breast Cancer Screening",
                "#",
                Sing.colors["brand-success"],
                "Free mammogram at Iluju, Ori-ire LGA"
            ],
            [
                "29/"+month+"/"+year,
                "Immunization",
                "http://www.ephcoystate.com",
                Sing.colors["brand-danger"]
            ]
        ];
        var $calendar = $("#events-calendar");
        $calendar.calendar({
            months: monthNames,
            days: dayNames,
            events: events,
            popover_options:{
                placement: "top",
                html: true
            }
        });
        $calendar.find(".icon-arrow-left").addClass("fa fa-arrow-left");
        $calendar.find(".icon-arrow-right").addClass("fa fa-arrow-right");
        function restyleCalendar(){
            $calendar.find(".event").each(function(){
                var $this = $(this),
                    $eventIndicator = $("<span></span>");
                $eventIndicator.css("background-color", $this.css("background-color")).appendTo($this.find("a"));
                $this.css("background-color", "");
            })
        }
        $calendar.find(".icon-arrow-left, .icon-arrow-right").parent().on("click", restyleCalendar);
        restyleCalendar();
    }

    function initRickshaw(){
        "use strict";

        var seriesData = [ [], [] ];
        var random = new Rickshaw.Fixtures.RandomData(30);

        for (var i = 0; i < 30; i++) {
            random.addData(seriesData);
        }

        var graph = new Rickshaw.Graph( {
            element: document.getElementById("rickshaw"),
            height: 100,
            renderer: "area",
            series: [
                {
                    color: "#F7653F",
                    data: seriesData[0],
                    name: "Uploads"
                }, {
                    color: "#F7D9C5",
                    data: seriesData[1],
                    name: "Downloads"
                }
            ]
        } );

        function onResize(){
            var $chart = $("#rickshaw");
            graph.configure({
                width: $chart.width(),
                height: 100
            });
            graph.render();

            $chart.find("svg").css({height: "100px"})
        }

        SingApp.onResize(onResize);
        onResize();


        var hoverDetail = new Rickshaw.Graph.HoverDetail( {
            graph: graph,
            xFormatter: function(x) {
                return new Date(x * 1000).toString();
            }
        } );

        setInterval( function() {
            random.removeData(seriesData);
            random.addData(seriesData);
            graph.update();

        }, 1000 );
    }

    function initAnimations(){
        $("#geo-locations-number, #percent-1, #percent-2, #percent-3").each(function(){
            $(this).animateNumber({
                number: $(this).text().replace(/ /gi, ""),
                numberStep: $.animateNumber.numberStepFactories.separator(" "),
                easing: "easeInQuad"
            }, 1000);
        });

        $(".js-progress-animate").animateProgressBar();
    }

    function pjaxPageLoad(){
        $(".widget").widgster();
        initMap();
        initCalendar();
        //initRickshaw();
        initAnimations();
    }
	$("#lga_clinics, #imm_clinic").select2({width:"250px"});
	chart_freq();
	trackingClick();
	clinicChange();
	showDetails();
	refreshAllStats(); //register the function
	$("#trackingAll").trigger("click");
	
    pjaxPageLoad();
    SingApp.onPageLoad(pjaxPageLoad);

});

function printContents(el)
{
	if ($("#" + el).length > 0)
	{
		var restorepage = $("body").html();
		var printcontent = $("#" + el).clone();
		$("body").empty().html(printcontent);
		window.print();
		$("body").html(restorepage);
		location.reload();
	}
}

$(document).on("ajaxStart", function(e) {
	$.blockUI(
		{ css: { 
			border: "none", 
			padding: "15px", 
			backgroundColor: "#000", 
			"-webkit-border-radius": "10px", 
			"-moz-border-radius": "10px", 
			opacity: .5, 
			color: "#fff" 
		} }
	);
});
$(document).ajaxStop($.unblockUI);
</script>