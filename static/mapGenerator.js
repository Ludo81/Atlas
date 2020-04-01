function generateMap() {
  // Map initialization
  firstMapTile = L.tileLayer(configuration.MAP.FIRST_MAP.url, {
    attribution: configuration.MAP.FIRST_MAP.attribution
  });
  orthoMap = L.tileLayer(configuration.MAP.SECOND_MAP.url, {
    attribution: configuration.MAP.SECOND_MAP.attribution
  });

var pointsPaulSab = [[1.4597511395325302, 43.55993068260128],[1.4590130592787978, 43.559450930436356],[1.4575455358807152, 43.56007986903555],[1.4571309546318196, 43.559561642474435],[1.4566881064795956, 43.55963545049981],[1.4556547941243805, 43.561406843108735],[1.4563502921992693, 43.56180427058008],[1.456318383193158, 43.56184969126095],[1.4564423071167907, 43.56192404998245],[1.454953617883359, 43.56421154807284],[1.4558393141878072, 43.564728204250464],[1.456858131042623, 43.565290310101396],[1.4568357225303368, 43.56531866845343],[1.4587599954388741, 43.56637157249772],[1.458717827177315, 43.56642578883402],[1.4584594990885176, 43.566942445011605],[1.4598548045731812, 43.56808072053858],[1.4598249475579006, 43.56812337341757],[1.4610058759638318, 43.56926739781083],[1.461046371670154, 43.569272106613866],[1.4626408594920974, 43.57136252130637],[1.4626296525220124, 43.57137092653393],[1.4618915722683057, 43.57203519876227],[1.4641637383151944, 43.57235472211261],[1.4641427170421368, 43.57236733487643],[1.4663938618159937, 43.57358516729507],[1.468165254424916, 43.57358516729507],[1.4692354707927908, 43.573400647231644],[1.4696045109196696, 43.57269947099063],[1.4696783189450404, 43.57126021449587],[1.4694199908562429, 43.5706328462802],[1.4686081025771398, 43.571297118508554],[1.4686081025771398, 43.572145910800316],[1.4678700223234329, 43.57314231914284],[1.467390270158498, 43.57336374321896],[1.4662462457652525, 43.5732530311809],[1.4643387626831084, 43.57226260727286],[1.465065317359296, 43.57137092653393],[1.4650621487126367, 43.57136917543973],[1.4667998059555327, 43.56937810984889],[1.4674271741711835, 43.568824549658586],[1.467353366145813, 43.56849241354442],[1.467980734361489, 43.56849241354442],[1.4685252494506287, 43.56773009241963],[1.4688476937946267, 43.567876658030535],[1.468828843493668, 43.567902177061306],[1.4696045109196696, 43.56812337341757],[1.4703056871606914, 43.56753290921458],[1.471080671427109, 43.567791237303396],[1.4712245643902833, 43.56560988590668],[1.4730365840994575, 43.56531866845343],[1.474289235246315, 43.56417338740486],[1.4742913205307848, 43.56417464406018],[1.4743141849734471, 43.56415057622578],[1.4743282245434701, 43.56413774004748],[1.4743271987844335, 43.56413687747739],[1.4749924967718062, 43.56343656380645],[1.475619864987457, 43.5619973073117],[1.4747509250995836, 43.56120077908114],[1.4757461756288381, 43.559921171257805],[1.4757674810382242, 43.55993068260128],[1.477132929507582, 43.55900808228413],[1.4780186258120553, 43.5580116739416],[1.4791257461926413, 43.55742120973863],[1.4790363856645081, 43.55739985822869],[1.4798269224336629, 43.55660932145956],[1.4805650026873698, 43.555354585028226],[1.476616273329987, 43.5546165047745],[1.4766090548991835, 43.554648267651],[1.474141144377308, 43.55410737575097],[1.4741437044800434, 43.554099848596906],[1.4741104559390552, 43.554100649766575],[1.474106800467358, 43.554099848596906],[1.47410645667446, 43.5541007461344],[1.4713170208917676, 43.554167961454446],[1.4712665578097037, 43.55409939315721],[1.468829526653252, 43.55439508069839],[1.4679438303488037, 43.55491173687601],[1.4701949751226353, 43.55609266528196],[1.4698666298116718, 43.55642101059293],[1.4686081025771398, 43.5559450492312],[1.467980734361489, 43.55657241744687],[1.4664307658286793, 43.55598195324388],[1.465581973536891, 43.55694145757373],[1.4635891568518566, 43.55963545049981],[1.4636188539778545, 43.55964775494047],[1.4621129963444175, 43.562218731387816],[1.4621422650441274, 43.56223018435727],[1.4617808602302496, 43.56277229157809],[1.4612642040526547, 43.56314133170496],[1.4610395709319535, 43.56310924125916],[1.4610427799765173, 43.56310442769228],[1.4607844518877198, 43.56299371565423],[1.4604154117608663, 43.56295681164155],[1.4584557280159476, 43.561745370781026],[1.4584973139806396, 43.561702075210206],[1.457979746923608, 43.561369939096046],[1.4579487107926898, 43.561090613917806],[1.4582011709997202, 43.56096399495648],[1.4587547311900004, 43.56066876285499],[1.4591975793422245, 43.56066876285499],[1.4597511395325302, 43.55993068260128]];

var batiments = [[[1.4597511395325213, 43.55993068260129],[1.4590130592788029, 43.55945093043638],[1.4574630907459942, 43.560115202664726],[1.4579054834585043, 43.561112294166826],[1.4582011709997127, 43.560963994956495],[1.4587547311900015, 43.56066876285501],[1.4591975793422325, 43.56066876285501],[1.4597511395325213, 43.55993068260129]],[[1.457573802784052, 43.560115202664726],[1.457130954631821, 43.559561642474435],[1.4566881064795898, 43.559635450499805],[1.455654794124384, 43.56140684310873],[1.4564297783907885, 43.56184969126096],[1.457573802784052, 43.560115202664726]],[[1.4579428429109111, 43.56103780298187],[1.4575368987713662, 43.560115202664726],[1.4563183831931492, 43.56184969126096],[1.4576107067967379, 43.562625130967085],[1.4584973139806419, 43.56170207521021],[1.457979746923597, 43.561369939096046],[1.4579428429109111, 43.56103780298187]],[[1.4564666824034742, 43.56188659527365],[1.4549536178833515, 43.56421154807286],[1.4558393141878136, 43.564728204250464],[1.4575368987713662, 43.56255086750199],[1.4564666824034742, 43.56188659527365]],[[1.4574999947586802, 43.56255086750199],[1.4603046997228102, 43.56421154807286],[1.4610427799765286, 43.56310442769228],[1.4607844518877273, 43.56299371565422],[1.460415411760868, 43.56295681164154],[1.4583856910631423, 43.56170207521021],[1.4574999947586802, 43.56255086750199]],[[1.4558393141878136, 43.564728204250464],[1.4569095305557054, 43.565318668453436],[1.4587551866297221, 43.56310328909298],[1.457574258223773, 43.562476376317036],[1.4558393141878136, 43.564728204250464]],[[1.4579792914838763, 43.563990123996746],[1.4597880435452073, 43.56513414839001],[1.4604892197862398, 43.56424845208554],[1.4586440191519436, 43.56310328909298],[1.4579792914838763, 43.563990123996746]],[[1.4568357225303334, 43.565318668453436],[1.4587916352026875, 43.56638888482133],[1.459825402997614, 43.56513414839001],[1.4580909144013758, 43.56373020186893],[1.4568357225303334, 43.565318668453436]],[[1.4587178271773156, 43.56642578883402],[1.458459499088514, 43.56694244501162],[1.4598618515705792, 43.56808646940488],[1.4611908514669933, 43.566536500872076],[1.45949281144372, 43.565429380491494],[1.4587178271773156, 43.56642578883402]],[[1.4598249475578933, 43.56812337341757],[1.461005875963843, 43.56926739781083],[1.4625927485093375, 43.56945191787426],[1.4625189404839656, 43.56782814131608],[1.4603416037354962, 43.56738529316385],[1.4598249475578933, 43.56812337341757]],[[1.4624815810315588, 43.56934052267662],[1.4610427799765289, 43.56926739781083],[1.4627039159871165, 43.571445189999025],[1.4637370006224613, 43.57067043345248],[1.4639586524184378, 43.56956262991232],[1.4624815810315588, 43.56934052267662]],[[1.4624820364712796, 43.56771629067872],[1.4625558444966515, 43.56941501386157],[1.4638843889533448, 43.56959953392501],[1.4642905608127503, 43.5676064895201],[1.4624820364712796, 43.56771629067872]],[[1.4611170434416214, 43.566610536617304],[1.4629257955029529, 43.565208184135244],[1.4607475478750414, 43.56354727584451],[1.4602677957101244, 43.564174644060174],[1.460452315773554, 43.56428535609823],[1.45949281144372, 43.56546628450418],[1.4611170434416214, 43.566610536617304]],[[1.4627403645600812, 43.5651710524027],[1.461005875963843, 43.566610308897445],[1.4603416037354962, 43.56742219717653],[1.462408228445908, 43.567865045328766],[1.46440218373025, 43.56779214818283],[1.4644379491436337, 43.56679482896087],[1.4627403645600812, 43.5651710524027]],[[1.4626296525220235, 43.57137092653393],[1.461891572268305, 43.57203519876227],[1.464253429080204, 43.572367334876446],[1.4650653173592942, 43.57137092653393],[1.4636629648772292, 43.57059594226752],[1.4626296525220235, 43.57137092653393]],[[1.4641427170421462, 43.572367334876446],[1.4663938618159875, 43.573585167295086],[1.4681652544249117, 43.573585167295086],[1.4692354707928037, 43.57340064723166],[1.469604510919663, 43.57269947099062],[1.4696783189450346, 43.57126021449587],[1.4694199908562333, 43.57063284628021],[1.468608102577143, 43.571297118508554],[1.468608102577143, 43.57214591080033],[1.4678700223234245, 43.57314231914285],[1.4673902701585075, 43.57336374321897],[1.4662462457652439, 43.57325303118091],[1.4643272371055758, 43.57225662283839],[1.4641427170421462, 43.572367334876446]],[[1.4650284133466085, 43.57140783054661],[1.4667998059555327, 43.56937810984889],[1.4658033976130127, 43.56904597373472],[1.4636260608645433, 43.57059594226752],[1.4650284133466085, 43.57140783054661]],[[1.4658403016256987, 43.56904597373472],[1.4663938618159875, 43.568492413544426],[1.4655081655115254, 43.567975757366824],[1.4639575138191352, 43.568492413544426],[1.4636998688899152, 43.570559038254835],[1.4658403016256987, 43.56904597373472]],[[1.4654712614988394, 43.56801266137951],[1.4663938618159875, 43.568492413544426],[1.4675747902219372, 43.56712696507505],[1.4664307658286735, 43.5664626928467],[1.465655781562269, 43.567311485138475],[1.4654712614988394, 43.56801266137951]],[[1.4675378862092512, 43.567163869087736],[1.4658033976130127, 43.56904597373472],[1.4667998059555327, 43.56937810984889],[1.4674271741711933, 43.5688245496586],[1.4673533661458216, 43.568492413544426],[1.4679807343614821, 43.568492413544426],[1.468534294551771, 43.56771742927802],[1.4675378862092512, 43.567163869087736]],[[1.4664676698413595, 43.5664626928467],[1.465470578339258, 43.56605629326743],[1.4641791656151113, 43.567569130067696],[1.4639572860992744, 43.56860380874207],[1.4654712614988394, 43.568049565392194],[1.465655781562269, 43.56742219717653],[1.4664676698413595, 43.5664626928467]],[[1.4655450695242114, 43.5662043647579],[1.4643272371055758, 43.564802012275834],[1.4630355966615685, 43.564247996645825],[1.4623341927006757, 43.564875820301204],[1.4644010451309477, 43.56683173297356],[1.464216525067518, 43.56768052526534],[1.4655450695242114, 43.5662043647579]],[[1.461005875963843, 43.56310442769228],[1.4605999318242977, 43.5635841798572],[1.462334420420536, 43.564875820301204],[1.4631100878465217, 43.56432226011092],[1.463810580927973, 43.56284609960348],[1.4621499003571063, 43.56221873138782],[1.4617808602302471, 43.562772291578106],[1.4612642040526442, 43.56314133170497],[1.461005875963843, 43.56310442769228]],[[1.463810580927973, 43.562883003616165],[1.4659879176764423, 43.56055805081695],[1.4636260608645433, 43.559635450499805],[1.4621129963444204, 43.56221873138782],[1.463810580927973, 43.562883003616165]],[[1.4661738040590349, 43.560706350027274],[1.4682021584375977, 43.55823309801774],[1.4655819735368973, 43.556941457573735],[1.4635891568518573, 43.559635450499805],[1.4661738040590349, 43.560706350027274]],[[1.4681652544249117, 43.558270002030426],[1.4699742342061035, 43.556461705408815],[1.468608102577143, 43.55594504923121],[1.4679807343614821, 43.55657241744687],[1.4664307658286735, 43.5559819532439],[1.4655819735368973, 43.556941457573735],[1.4681652544249117, 43.558270002030426]],[[1.4674267187314725, 43.567163869087736],[1.4684973905390852, 43.56771742927802],[1.4689033346786302, 43.567901949341454],[1.4697521269704066, 43.56683173297356],[1.470749218472508, 43.565429380491494],[1.4694190799767914, 43.56509724437732],[1.4674267187314725, 43.567163869087736]],[[1.468828843493677, 43.56790217706131],[1.469604510919663, 43.56812337341757],[1.4703056871606954, 43.56753290921459],[1.4710806714270996, 43.567791237303396],[1.4712291983572854, 43.56553963708983],[1.4706009192621827, 43.565503188516864],[1.468828843493677, 43.56790217706131]],[[1.470969959389042, 43.56565080456761],[1.4730365840994537, 43.565318668453436],[1.474328224543461, 43.564137740047485],[1.4727044479852804, 43.562772291578106],[1.471412807541273, 43.563842507946],[1.470969959389042, 43.56565080456761]],[[1.472333586099537, 43.56299485425353],[1.474291320530775, 43.564174644060174],[1.4749924967718075, 43.563436563806455],[1.4756198649874683, 43.56199730731171],[1.474734168683006, 43.56118541903261],[1.472333586099537, 43.56299485425353]],[[1.464364596557983, 43.56498721549884],[1.4667629019428468, 43.56262467552737],[1.4649177013085506, 43.56166517119753],[1.463773676915287, 43.562883003616165],[1.462887069731383, 43.56428535609823],[1.464364596557983, 43.56498721549884]],[[1.4655450695242112, 43.5635841798572],[1.4643272371055758, 43.564875820301204],[1.4654712614988394, 43.5662043647579],[1.4657664936003267, 43.5662043647579],[1.467205750095078, 43.56465439622509],[1.4655450695242112, 43.5635841798572]],[[1.4673171452927172, 43.564877186620365],[1.468534294551771, 43.563510371831825],[1.4666890939174748, 43.56266157954005],[1.4655081655115254, 43.56376869992063],[1.4673171452927172, 43.564877186620365]],[[1.469530702894291, 43.56509724437732],[1.4677224062726808, 43.564137740047485],[1.467131942069706, 43.56465439622509],[1.465692685574955, 43.56624126877058],[1.4663938618159875, 43.56649959685939],[1.4674640781838793, 43.56720077310042],[1.469530702894291, 43.56509724437732]],[[1.4694199908562333, 43.56513414839001],[1.4705271112368108, 43.565429380491494],[1.470969959389042, 43.56565080456761],[1.4715242027389122, 43.563953447703916],[1.472742035157548, 43.562809195590795],[1.4719656845719804, 43.562291856253616],[1.4694199908562333, 43.56513414839001]],[[1.4684604865263993, 43.563510371831825],[1.4677593102853668, 43.56421154807286],[1.4694199908562333, 43.56513414839001],[1.4712282874778435, 43.56328894775571],[1.4698997430211502, 43.56244015546393],[1.4688664306659445, 43.563657987882564],[1.4684604865263993, 43.563510371831825]],[[1.4700113659386498, 43.56244015546393],[1.4682381515708416, 43.5617389792229],[1.4672057500950777, 43.56291990762886],[1.4683866785010273, 43.563510371831825],[1.4689402386913162, 43.56376869992063],[1.4700113659386498, 43.56244015546393]],[[1.4683128704756556, 43.56177588323559],[1.4660617257018143, 43.56044733877889],[1.4647322703656789, 43.56170207521021],[1.4672424263879031, 43.56310556629158],[1.4683128704756556, 43.56177588323559]],[[1.4718916488267482, 43.56247728719647],[1.4725937359472225, 43.562809195590795],[1.474734168683006, 43.5612223230453],[1.475767481038212, 43.55989377858861],[1.473811568365858, 43.558934274258775],[1.471855655693504, 43.56055805081695],[1.4729996800867677, 43.56140684310873],[1.4718916488267482, 43.56247728719647]],[[1.4697885755433715, 43.5624403831838],[1.471191155745297, 43.563363211220796],[1.4720401757569337, 43.56240325145125],[1.4730365840994537, 43.56140684310873],[1.4720032717442477, 43.56055805081695],[1.4697885755433715, 43.5624403831838]],[[1.4682759664629697, 43.56184969126096],[1.4698259349957783, 43.56244015546393],[1.4720032717442477, 43.56055805081695],[1.469973551046522, 43.55985687457592],[1.4682759664629697, 43.56184969126096]],[[1.4700844908044404, 43.55989423402833],[1.4698628390084643, 43.55922950636026],[1.468128350412226, 43.55823309801774],[1.4660617257018143, 43.56048424279158],[1.468350002208202, 43.56188727843323],[1.4700844908044404, 43.55989423402833]],[[1.4698997430211502, 43.55926641037295],[1.4717818476681324, 43.55745811375134],[1.4697890309830923, 43.55657241744687],[1.46809144639954, 43.558270002030426],[1.4698997430211502, 43.55926641037295]],[[1.4716711356300745, 43.55745811375134],[1.469751443810825, 43.55934021839832],[1.4700102273393476, 43.55993113804101],[1.4719292359990155, 43.5605951825495],[1.473811568365858, 43.558934274258775],[1.4716711356300745, 43.55745811375134]],[[1.4737008563278002, 43.559008082284144],[1.475767481038212, 43.55993068260129],[1.477132929507591, 43.559008082284144],[1.4780186258120531, 43.55801167394162],[1.4791257461926308, 43.55742120973865],[1.4758775099166883, 43.55664508687295],[1.475692989853259, 43.55745811375134],[1.4744758405942047, 43.55823309801774],[1.4737008563278002, 43.559008082284144]],[[1.476062485419839, 43.557053308211096],[1.4790150341545731, 43.55742120973865],[1.4798269224336635, 43.55660932145956],[1.480565002687382, 43.55535458502824],[1.4766162733299881, 43.55461650477452],[1.476062485419839, 43.557053308211096]],[[1.4760627131396995, 43.55723851143411],[1.4768019319927204, 43.55469054051975],[1.4741068004673454, 43.55409984859692],[1.4734420727992779, 43.5558352480726],[1.4760627131396995, 43.55723851143411]],[[1.473553467996917, 43.5558352480726],[1.4741437044800314, 43.55409984859692],[1.4710806714270996, 43.55417365662229],[1.472224695820363, 43.555576464544075],[1.473553467996917, 43.5558352480726]],[[1.472298959285456, 43.55550220107898],[1.4712665578096924, 43.554099393157195],[1.4688295266532585, 43.554395080698406],[1.4679438303487964, 43.55491173687601],[1.4701949751226375, 43.55609266528196],[1.4696783189450346, 43.55660932145956],[1.470933055376356, 43.557089073624475],[1.472298959285456, 43.55550220107898]],[[1.4751770168352372, 43.557974769928926],[1.475767481038212, 43.55753192177671],[1.4760258091270133, 43.556941457573735],[1.4734425282389987, 43.555686721142415],[1.4721508877949916, 43.55550220107898],[1.4716342316173885, 43.5562402813327],[1.4734425282389987, 43.55660932145956],[1.4751770168352372, 43.557974769928926]],[[1.4715599681522957, 43.55620314960016],[1.4707845284461702, 43.55712597763716],[1.4715973276047027, 43.55749501776402],[1.4737377603404862, 43.559008082284144],[1.4744758405942047, 43.55823309801774],[1.4752139208479231, 43.55790096190357],[1.4734425282389987, 43.556609093739695],[1.4715599681522957, 43.55620314960016]]];

  baseMap = {};
  baseMap[configuration.MAP.FIRST_MAP.tileName] = firstMapTile;

  var centre = L.latLng(43.564501, 1.466603);
  var bounds = centre.toBounds(2600);				

  var map = L.map("map", {
    crs: L.CRS.EPSG3857,
    center: configuration.MAP.LAT_LONG,
    minZoom: 14.8,
    geosearch: true,
    zoom: configuration.MAP.ZOOM,
    layers: [firstMapTile],
    fullscreenControl: true
  });

  map.setMaxBounds(bounds);
  map.on('click',afficherZone);

$.get(
          configuration.URL_APPLICATION + "/api/coorUniv",
          function(results) {
             console.log(results[0].geom);
          }
        );

  for(let i = 0; i < pointsPaulSab.length; i++){
    pointsPaulSab[i] = pointsPaulSab[i].reverse();
  }

  var territoire = L.polyline(pointsPaulSab,{
color : 'red',
lineJoin : 'round',
dashArray:'20,15'
}).addTo(map);


  for(let i = 0; i < batiments.length; i++){
    for (let j = 0; j< batiments[i].length; j++){
       batiments[i][j] = batiments[i][j].reverse(); 
    }
  }

var tab = [];

function inside(point, vs) {
    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};

  function afficherZone(e){
    if (tab.length == 1){
	map.removeLayer(tab[0]);
	tab = tab.splice(0,0);
    }
    var x = e.latlng.lat;
    var y = e.latlng.lng;
    var latLon = L.latLng(x, y);
    var point=[x,y];
    var liste_batiments = "<b>Batiments dans cette zone : </b></br>";
    for(let i = 0; i < batiments.length; i++){
       if (inside(point, batiments[i])){
	var zone = L.polyline(batiments[i]).addTo(map);      
        map.flyTo(latLon,18);
        tab.push(zone);
        $.get(
          configuration.URL_APPLICATION + "/api/searchZone/"+i.toString(),
          function(results) {
             for(let j = 0; j < results.length; j++){
                if(results[j].name !== null) liste_batiments += results[j].name + "</br>";
             }
             var id = configuration.URL_APPLICATION+ "/zone/"+i.toString();
             var url_zone = "<a href="+id+"><b>Fiche Zone</b></a>";
             var popup = L.popup().setLatLng(latLon).setContent(liste_batiments + url_zone).openOn(map);
          }
        );
	break;
       }
     }
  }

  // Style of territory on map
  territoryStyle = {
    fill: false,
    color: configuration.MAP.BORDERS_COLOR,
    weight: configuration.MAP.BORDERS_WEIGHT
  };

  // Add limits of the territory to the map
  $(document).ready(function() {
    $.getJSON(url_limit_territory, function(json) {
      L.geoJson(json, {
        style: territoryStyle
      }).addTo(map);
    });
  });

  // 'Google-like' baseLayer controler

  var LayerControl = L.Control.extend({
    options: {
      position: "bottomleft"
    },

    onAdd: function(map) {
      currentTileMap = "topo";
      var container = L.DomUtil.create(
        "div",
        "leaflet-bar leaflet-control leaflet-control-custom"
      );

      container.style.backgroundColor = "white";
      container.style.backgroundImage =
        "url(" +
        configuration.URL_APPLICATION +
        "/static/images/logo_earth_map.PNG)";
      container.style.width = "50px";
      container.style.height = "50px";
      container.style.border = "solid white 1px";
      container.style.cursor = "pointer";
      $(container).attr("data-placement", "right");
      $(container).attr("data-toggle", "tooltip");
      $(container).attr("data-original-title", "Photos aérienne");

      container.onclick = function() {
        if (currentTileMap == "topo") {
          container.style.backgroundImage =
            "url(" +
            configuration.URL_APPLICATION +
            "/static/images/logo_topo_map.PNG)";
          $(container).attr("data-original-title", "Plan");
          map.removeLayer(firstMapTile);
          orthoMap.addTo(map);
          currentTileMap = "earth";
        } else {
          container.style.backgroundImage =
            "url(" +
            configuration.URL_APPLICATION +
            "/static/images/logo_earth_map.PNG)";
          $(container).attr("data-original-title", "Photos aérienne");
          map.removeLayer(orthoMap);
          firstMapTile.addTo(map);
          currentTileMap = "topo";
        }
      };
      return container;
    }
  });

  map.addControl(new LayerControl());

  // add tooltip on fullScreen button

  fullScreenButton = $(".leaflet-control-fullscreen");
  fullScreenButton.attr("data-placement", "right");
  fullScreenButton.attr("data-toggle", "tooltip");
  fullScreenButton.attr("data-original-title", "Plein écran");
  $(".leaflet-control-fullscreen-button").removeAttr("title");

  return map;
}

//****** Fonction fiche espècce ***********

// Popup Point
function onEachFeaturePoint(feature, layer) {
  popupContent =
    "<b>Date: </b>" +
    feature.properties.dateobs +
    "</br><b>Altitude: </b>" +
    feature.properties.altitude_retenue +
    "</br><b>Observateurs: </b>" +
    feature.properties.observateurs;

  // verifie si le champs effectif est rempli
  if (feature.properties.effectif_total != undefined) {
    layer.bindPopup(
      popupContent +
        "</br><b>Effectif: </b>" +
        feature.properties.effectif_total
    );
  } else {
    layer.bindPopup(popupContent);
  }
}

// popup Maille
function onEachFeatureMaille(feature, layer) {
  popupContent =
    "<b>Nombre d'observation(s): </b>" +
    feature.properties.nb_observations +
    "</br> <b> Dernière observation: </b>" +
    feature.properties.last_observation +
    " ";
  layer.bindPopup(popupContent);
}

// Style maille
function getColor(d) {
  return d > 100
    ? "#800026"
    : d > 50
    ? "#BD0026"
    : d > 20
    ? "#E31A1C"
    : d > 10
    ? "#FC4E2A"
    : d > 5
    ? "#FD8D3C"
    : d > 2
    ? "#FEB24C"
    : d > 1
    ? "#FED976"
    : "#FFEDA0";
}

function styleMaille(feature) {
  return {
    fillColor: getColor(feature.properties.nb_observations),
    weight: 2,
    color: "black",
    fillOpacity: 0.8
  };
}

function generateLegendMaille() {
  legend.onAdd = function(map) {
    var div = L.DomUtil.create("div", "info legend"),
      grades = [0, 1, 2, 5, 10, 20, 50, 100],
      labels = ["<strong> Nombre <br> d'observations </strong> <br>"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      labels.push(
        '<i style="background:' +
          getColor(grades[i] + 1) +
          '"></i> ' +
          grades[i] +
          (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+")
      );
    }
    div.innerHTML = labels.join("<br>");

    return div;
  };

  legend.addTo(map);
}

// Geojson Maille
function generateGeojsonMaille(observations, yearMin, yearMax) {
  var i = 0;
  myGeoJson = { type: "FeatureCollection", features: [] };
  tabProperties = [];
  while (i < observations.length) {
    if (observations[i].annee >= yearMin && observations[i].annee <= yearMax) {
      geometry = observations[i].geojson_maille;
      idMaille = observations[i].id_maille;
      properties = {
        id_maille: idMaille,
        nb_observations: 1,
        last_observation: observations[i].annee,
        tabDateobs: [new Date(observations[i].dateobs)]
      };
      var j = i + 1;
      while (j < observations.length && observations[j].id_maille <= idMaille) {
        if (
          observations[j].annee >= yearMin &&
          observations[j].annee <= yearMax
        ) {
          properties.nb_observations += observations[j].nb_observations;
          properties.tabDateobs.push(new Date(observations[i].dateobs));
        }
        if (observations[j].annee >= properties.last_observation) {
          properties.last_observation = observations[j].annee;
        }
        j = j + 1;
      }
      myGeoJson.features.push({
        type: "Feature",
        properties: properties,
        geometry: geometry
      });
      // on avance jusqu' à j
      i = j;
    } else {
      i = i + 1;
    }
  }

  return myGeoJson;
}

// Display Maille layer

function displayMailleLayerFicheEspece(observationsMaille) {
  myGeoJson = observationsMaille;
  currentLayer = L.geoJson(myGeoJson, {
    onEachFeature: onEachFeatureMaille,
    style: styleMaille
  });
  currentLayer.addTo(map);

  // ajout de la légende
  generateLegendMaille();
}

function generateGeojsonMailleCommune(observations) {
  var i = 0;
  myGeoJson = { type: "FeatureCollection", features: [] };
  tabProperties = [];
  while (i < observations.length) {
    geometry = observations[i].geojson_maille;
    idMaille = observations[i].id_maille;
    properties = {
      id_maille: idMaille,
      nb_observations: 1,
      last_observation: observations[i].annee
    };
    var j = i + 1;
    while (j < observations.length && observations[j].id_maille <= idMaille) {
      properties.nb_observations += observations[j].nb_observations;

      if (observations[j].annee >= properties.last_observation) {
        properties.last_observation = observations[j].annee;
      }
      j = j + 1;
    }
    myGeoJson.features.push({
      type: "Feature",
      properties: properties,
      geometry: geometry
    });
    // on avance jusqu' à j
    i = j;
  }

  return myGeoJson;
}

function displayMailleLayerCommune(observations) {
  myGeoJson = generateGeojsonMailleCommune(observations);
  currentLayer = L.geoJson(myGeoJson, {
    onEachFeature: onEachFeatureMaille,
    style: styleMaille
  });
  currentLayer.addTo(map);

  // ajout de la légende
  generateLegendMaille();
}

// GeoJson Point
function generateGeojsonPointFicheEspece(
  geojsonPoint,
  yearMin,
  yearMax,
  sliderTouch
) {
  var filteredGeoJsonPoint = Object.assign({}, geojsonPoint);
  // si on a touché le slider on filtre sinon on retourne directement le geojson
  if (yearMin && yearMax && sliderTouch) {
    filteredGeoJsonPoint.features = geojsonPoint.features.filter(function(obs) {
      return obs.properties.year >= yearMin && obs.properties.year <= yearMax;
    });
    return filteredGeoJsonPoint;
  } else {
    return filteredGeoJsonPoint;
  }
}

// Display marker Layer (cluster or not)
function displayMarkerLayerFicheEspece(
  observationsPoint,
  yearMin,
  yearMax,
  sliderTouch
) {
  // on vérifie si le slider a été touché
  // sinon on met null a yearmin et yearmax pour ne pas filtrer par année a la génération du GeoJson

  // yearMin = years[0] == taxonYearMin ? null : years[0];
  // yearMax = years[1] == YEARMAX ? null : years[1];
  myGeoJson = generateGeojsonPointFicheEspece(
    observationsPoint,
    yearMin,
    yearMax,
    sliderTouch
  );

  if (typeof pointDisplayOptionsFicheEspece == "undefined") {
    pointDisplayOptionsFicheEspece = function(feature) {
      return {};
    };
  }
  currentLayer = L.geoJson(myGeoJson, {
    onEachFeature: onEachFeaturePoint,
	//CHANGEMENT//
    pointToLayer: function(feature, latlng) {
	return L.marker(latlng);
      //return L.circleMarker(latlng, pointDisplayOptionsFicheEspece(feature));
    }
  });
  if (myGeoJson.features.length > configuration.LIMIT_CLUSTER_POINT) {
    newLayer = currentLayer;
    currentLayer = L.markerClusterGroup();
    currentLayer.addLayer(newLayer);
    map.addLayer(currentLayer);
  } else {
    currentLayer.addTo(map);
  }

  if (typeof divLegendeFicheEspece !== "undefined") {
    legend.onAdd = function(map) {
      var div = L.DomUtil.create("div", "info legend");
      div.innerHTML = divLegendeFicheEspece;
      return div;
    };
    legend.addTo(map);
  }
}

// ***************Fonction lastObservations: mapHome et mapCommune*****************

/* *** Point ****/

function onEachFeaturePointLastObs(feature, layer) {
  popupContent =
    "<b>Espèce: </b>" +
    feature.properties.taxon +
    "</br><b>Date: </b>" +
    feature.properties.dateobs +
    "</br><b>Altitude: </b>" +
    feature.properties.altitude_retenue;

  layer.bindPopup(
    popupContent +
      "</br> <a href='" +
      configuration.URL_APPLICATION +
      "/espece/" +
      feature.properties.cd_ref +
      "'> Fiche espèce </a>"
  );
}

function onEachFeaturePointCommune(feature, layer) {
  popupContent =
    "<b>Espèce: </b>" +
    feature.properties.taxon +
    "</br><b>Date: </b>" +
    feature.properties.dateobs +
    "</br><b>Altitude: </b>" +
    feature.properties.altitude_retenue +
    "</br><b> Observateurs(s): </b>" +
    feature.properties.observateurs;

  layer.bindPopup(
    popupContent +
      "</br> <a href='" +
      configuration.URL_APPLICATION +
      "/espece/" +
      feature.properties.cd_ref +
      "'> Fiche espèce </a>"
  );
}

function generateGeojsonPointLastObs(observationsPoint) {
  myGeoJson = { type: "FeatureCollection", features: [] };

  observationsPoint.forEach(function(obs) {
    properties = obs;
    properties["dateobsCompare"] = new Date(obs.dateobs);
    properties["dateobs"] = obs.dateobs;
    properties["nb_observations"] = 1;
    myGeoJson.features.push({
      type: "Feature",
      properties: properties,
      geometry: obs.geojson_point
    });
    myGeoJson.features.push({
      type: "Feature",
      properties: properties,
      geometry: obs.geojson_point
    });
  });
  return myGeoJson;
}

function displayMarkerLayerPointLastObs(observationsPoint) {
  myGeoJson = generateGeojsonPointLastObs(observationsPoint);
  if (typeof pointDisplayOptionsFicheCommuneHome == "undefined") {
    pointDisplayOptionsFicheCommuneHome = function(feature) {
      return {};
    };
  }
  observationsPoint
  currentLayer = L.geoJson(myGeoJson, {
    onEachFeature: onEachFeaturePointLastObs,
    pointToLayer: function(feature, latlng) {
   	var icon = L.icon({
   		iconSize: [27,27],
   		iconAnchor: [13,27],
   		popupAnchor: [1,-24],
   		iconUrl: '/atlas/static/images/picto_Mammiferes.png'
   	});
	return L.marker(latlng,{icon: icon});
      //return L.circleMarker(
      //  latlng,
      //  pointDisplayOptionsFicheCommuneHome(feature)
      //);
    }
  });

  map.addLayer(currentLayer);
  if (typeof divLegendeFicheCommuneHome !== "undefined") {
    legend.onAdd = function(map) {
      var div = L.DomUtil.create("div", "info legend");
      div.innerHTML = divLegendeFicheCommuneHome;
      return div;
    };
    legend.addTo(map);
  }
}

function displayMarkerLayerPointCommune(observationsPoint) {
  myGeoJson = generateGeojsonPointLastObs(observationsPoint);
  if (typeof pointDisplayOptionsFicheCommuneHome == "undefined") {
    pointDisplayOptionsFicheCommuneHome = function(feature) {
      return {};
    };
  }

  currentLayer = L.geoJson(myGeoJson, {
    onEachFeature: onEachFeaturePointCommune,
    pointToLayer: function(feature, latlng) {
	//CHANGEMENT//
	var icon = L.icon({
   		iconSize: [27,27],
   		iconAnchor: [13,27],
   		popupAnchor: [1,-24],
   		iconUrl: '/atlas/static/images/picto_Mammiferes.png'
   	});
	return L.marker(latlng,{icon: icon});
      //return L.circleMarker(
      //  latlng,
      //  pointDisplayOptionsFicheCommuneHome(feature)
      //);
    }
  });

  newLayer = currentLayer;
  currentLayer = L.markerClusterGroup();
  currentLayer.addLayer(newLayer);
  map.addLayer(currentLayer);
}

//  ** MAILLE ***

function compare(a, b) {
  if (a.id_maille < b.id_maille) return -1;
  if (a.id_maille > b.id_maille) return 1;
  return 0;
}

function printEspece(tabEspece, tabCdRef) {
  stringEspece = "";
  i = 0;
  while (i < tabEspece.length) {
    stringEspece +=
      "<li> <a href='../espece/" + tabCdRef[i] + "'>" + tabEspece[i] + "</li>";

    i = i + 1;
  }
  return stringEspece;
}

function onEachFeatureMailleLastObs(feature, layer) {
  popupContent =
    "<b>Espèces observées dans la maille: </b> <ul> " +
    printEspece(feature.properties.list_taxon, feature.properties.list_cdref) +
    "</ul>";

  layer.bindPopup(popupContent);
}

function styleMailleLastObs() {
  return {
    opacity: 1,
    weight: 2,
    color: "red",
    fillOpacity: 0
  };
}

function generateGeoJsonMailleLastObs(observations) {
  var i = 0;
  myGeoJson = { type: "FeatureCollection", features: [] };
  while (i < observations.length) {
    geometry = observations[i].geojson_maille;
    idMaille = observations[i].id_maille;
    properties = {
      id_maille: idMaille,
      list_taxon: [observations[i].taxon],
      list_cdref: [observations[i].cd_ref],
      list_id_observation: [observations[i].id_observation]
    };
    var j = i + 1;
    while (j < observations.length && observations[j].id_maille == idMaille) {
      properties.list_taxon.push(observations[j].taxon);
      properties.list_cdref.push(observations[j].cd_ref);
      properties.list_id_observation.push(observations[j].id_observation);
      j = j + 1;
    }
    myGeoJson.features.push({
      type: "Feature",
      properties: properties,
      geometry: geometry
    });
    // on avance jusqu' à j
    i = j;
  }

  return myGeoJson;
}

function find_id_observation_in_array(tab_id, id_observation) {
  i = 0;
  while (i < tab_id.length && tab_id[i] != id_observation) {
    i = i + 1;
  }
  return i != tab_id.length;
}

function displayMailleLayerLastObs(observations) {
  observations.sort(compare);
  var geojsonMaille = generateGeoJsonMailleLastObs(observations);
  currentLayer = L.geoJson(geojsonMaille, {
    onEachFeature: onEachFeatureMailleLastObs,
    style: styleMailleLastObs
  });
  currentLayer.addTo(map);
}

// Legend

var legend;
var legendActiv = false;
var div;

function generateLegende(htmlLegend) {
  // Legende

  var legendControl = L.Control.extend({
    options: {
      position: "topleft"
      //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
    },

    onAdd: function(map) {
      var container = L.DomUtil.create(
        "div",
        "leaflet-bar leaflet-control leaflet-control-custom"
      );

      container.style.backgroundColor = "white";
      container.style.width = "25px";
      container.style.height = "25px";
      container.style.border = "solid white 1px";
      container.style.cursor = "pointer";
      $(container).html(
        "<img src='" +
          configuration.URL_APPLICATION +
          "/static/images/info.png' alt='Légende'>"
      );
      $(container).attr("data-placement", "right");
      $(container).attr("data-toggle", "tooltip");
      $(container).attr("data-original-title", "Légende");

      container.onclick = function() {
        if (legendActiv == false) {
          legend = L.control({ position: "topleft" });

          legend.onAdd = function(map) {
            (div = L.DomUtil.create("div", "info legend")),
              $(div).addClass("generalLegend");

            div.innerHTML = htmlLegend;

            return div;
          };
          legend.addTo(map);
          legendActiv = true;
        } else {
          legend.remove(map);
          legendActiv = false;
        }
      };
      return container;
    }
  });

  map.addControl(new legendControl());
}

var mySlider;
function generateSliderOnMap() {
  var SliderControl = L.Control.extend({
    options: {
      position: "bottomleft"
      //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
    },

    onAdd: function(map) {
      var sliderContainer = L.DomUtil.create(
        "div",
        "leaflet-bar leaflet-control leaflet-slider-control"
      );

      sliderContainer.style.backgroundColor = "white";
      sliderContainer.style.width = "300px";
      sliderContainer.style.height = "50px";
      sliderContainer.style.border = "solid white 1px";
      sliderContainer.style.cursor = "pointer";
      $(sliderContainer).css("margin-bottom", "-300px");
      $(sliderContainer).css("margin-left", "200px");
      $(sliderContainer).css("text-align", "center");
      $(sliderContainer).append(
        "<p> <span id='yearMin'> </span> <input id='sliderControl' type='text'/> <span id='yearMax'>  </span>  </p>" +
          "<p id='nbObs'> Nombre d'observation(s): " +
          nb_obs +
          " </p>"
      );
      L.DomEvent.disableClickPropagation(sliderContainer);
      return sliderContainer;
    }
  });

  map.addControl(new SliderControl());

  mySlider = new Slider("#sliderControl", {
    value: [taxonYearMin, YEARMAX],
    min: taxonYearMin,
    max: YEARMAX,
    step: configuration.MAP.STEP
  });

  $("#yearMax").html("&nbsp;&nbsp;&nbsp;&nbsp;" + YEARMAX);
  $("#yearMin").html(taxonYearMin + "&nbsp;&nbsp;&nbsp;&nbsp");
}
