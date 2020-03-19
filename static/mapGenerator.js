function generateMap() {
  // Map initialization
  firstMapTile = L.tileLayer(configuration.MAP.FIRST_MAP.url, {
    attribution: configuration.MAP.FIRST_MAP.attribution
  });
  orthoMap = L.tileLayer(configuration.MAP.SECOND_MAP.url, {
    attribution: configuration.MAP.SECOND_MAP.attribution
  });

  var pointsPaulSab = [
[ 1.457969848517713, 43.56103869984144], [1.4582650806192003, 43.56100179582875], [1.4588924488348611 ,43.56059585168921], [1.4591507769236625 ,43.560632755701896], [1.4598150491520092, 43.55989467544818], 	[ 1.4589293528475469, 43.559451827295945],[ 1.4576008083908538, 43.56011609952429],[ 1.4571579602386227 ,43.559525635321314],[ 1.4567151120863917 ,43.559562539334], [1.4556448957184998, 43.561444643980984], [ 1.4563460719595325, 43.562072012196644],[ 1.4549806234901532, 43.56413863690705],[ 1.4587817367968032 ,43.5663897816809],[ 1.458486504695316 ,43.56694334187119], [1.460922169532587, 43.56893615855623],[ 1.4626197541161392, 43.57133491938081],[ 1.4618816738624207, 43.57196228759647],[ 1.464206626661634 ,43.57231287571698],[ 1.4654982671056414 ,43.57308785998339],[ 1.4664208674227892, 43.5735676121483],[ 1.4681184520063417, 43.57360451616099],[ 1.4692993804122914, 43.57334618807219],[ 1.4696315165264646 ,43.572645011831156],[ 1.4697053245518363, 43.57113194731104],[ 1.469373188437663, 43.57061529113343],[ 1.4687089162093165, 43.57057838712075],[ 1.4686351081839446, 43.57113194731104], [1.4685982041712589 ,43.57223906769161],[ 1.4682660680570854 ,43.5725342997931],[ 1.4678970279302261, 43.57308785998339],[ 1.4676017958287388, 43.57327238004682],[ 1.4673803717526233 ,43.573383092084875],[ 1.4662363473593596 ,43.57327238004682],[ 1.4653875550675834 ,43.5727926278819],[ 1.4648339948772946, 43.57246049176773],[ 1.4642804346870057, 43.57223906769161],[ 1.4674172757653092, 43.568843898524506],[ 1.4673434677399373, 43.56840105037227], [1.467970835955598 ,43.56847485839765],[ 1.468561300158573, 43.567662970118555],[ 1.4696315165264646, 43.56810581827079],[ 1.4702588847421252, 43.567662970118555],[ 1.470406500792869 ,43.567515354067815],[ 1.4711445810465875 ,43.5678105861693],[ 1.4711445810465875, 43.565633249420834],[ 1.4731004937189414, 43.56530111330666],[ 1.474244518112205 ,43.56430470496414],[ 1.4749825983659235 ,43.56341900865968],[ 1.4752040224420389, 43.56279164044402], [1.47564687059427, 43.56197975216492], [ 1.474761174289808, 43.56120476789852],[ 1.475720678619642, 43.559986935479884],[ 1.477086127089021 ,43.55906433516274],[ 1.4781194394442267 ,43.557994118794845], [1.4790420397613748, 43.557366750579185],[ 1.4798908320531512, 43.55651795828741],[ 1.4805920082941837 ,43.555300125868776],[ 1.477123031101707 ,43.5547096616658],[ 1.4738016699599739 ,43.554045389437455],[ 1.4711814850592733, 43.554082293450136], [ 1.4688565322600602, 43.55437752555162],[ 1.467970835955598 ,43.55493108574191],[ 1.4702588847421252, 43.556112014147864],[ 1.4698529406025802, 43.55648105427473],[ 1.4686351081839446, 43.55589059007175],[ 1.467970835955598, 43.55659176631278],[ 1.4664208674227892 ,43.55596439809712], [1.4651292269787821 ,43.55755127064261],[ 1.4642804346870057 ,43.55873219904856],[ 1.4638006825220888, 43.55939647127691],[ 1.463210218319114, 43.56028216758137], [1.4626197541161392 ,43.56150000000001], [1.461770961824363, 43.56275473643133],[ 1.4612912096594461 ,43.563160680570874],[ 1.460811457494529, 43.56293925649476],[ 1.4604055133549838, 43.56293925649476],[ 1.4591138729109765 ,43.56212736821567], [1.4582650806192003 ,43.561647616050756],[ 1.457969848517713 ,43.56127857592389],[ 1.457969848517713, 43.56103869984144]
];

var batiments = [[[1.4597511395325213, 43.55993068260129],[1.4590130592788029, 43.55945093043638],[1.4576107067967379, 43.56007829865204],[1.457979746923597, 43.56100089896918],[1.4582011709997127, 43.560963994956495],[1.4587547311900015, 43.56066876285501],[1.4591975793422325, 43.56066876285501],[1.4597511395325213, 43.55993068260129]],
[[1.457573802784052, 43.560115202664726],[1.457130954631821, 43.559561642474435],[1.4566881064795898, 43.559635450499805],[1.455654794124384, 43.56140684310873],[1.4564297783907885, 43.56184969126096],[1.457573802784052, 43.560115202664726]],
[[1.4579428429109111, 43.56103780298187],[1.4575368987713662, 43.560115202664726],[1.4564297783907885, 43.56184969126096],[1.4576107067967379, 43.56255086750199],[1.4583487870504563, 43.56170207521021],[1.457979746923597, 43.561369939096046],[1.4579428429109111, 43.56103780298187]],
[[1.4564666824034742, 43.56188659527365],[1.4549536178833515, 43.56421154807286],[1.4558393141878136, 43.564728204250464],[1.4575368987713662, 43.56255086750199],[1.4564666824034742, 43.56188659527365]],          
[[1.4574999947586802, 43.56255086750199],[1.4603046997228102, 43.56421154807286],[1.4610427799765286, 43.56310442769228],[1.4607844518877273, 43.56299371565422],[1.460415411760868, 43.56295681164154],[1.4583856910631423, 43.56170207521021],[1.4574999947586802, 43.56255086750199]],
[[1.4558393141878136, 43.564728204250464],[1.4569095305557054, 43.565318668453436],[1.4586809231646296, 43.56328894775571],[1.4574999947586802, 43.56258777151468],[1.4558393141878136, 43.564728204250464]],
[[1.458053554948969, 43.563990123996746],[1.4597880435452073, 43.56513414839001],[1.4604892197862398, 43.56424845208554],[1.4586440191519436, 43.56328894775571],[1.458053554948969, 43.563990123996746]],
[[1.4568357225303334, 43.565318668453436],[1.4587916352026875, 43.56638888482133],[1.4597511395325213, 43.56513414839001],[1.458016650936283, 43.563990123996746],[1.4568357225303334, 43.565318668453436]],
[[1.4587178271773156, 43.56642578883402],[1.458459499088514, 43.56694244501162],[1.4598618515705792, 43.56808646940488],[1.4611165880019006, 43.566536500872076],[1.45949281144372, 43.565429380491494],[1.4587178271773156, 43.56642578883402]],
[[1.4598249475578933, 43.56812337341757],[1.461005875963843, 43.56926739781083],[1.4625927485093375, 43.56945191787426],[1.4625189404839656, 43.56782814131608],[1.4603416037354962, 43.56738529316385],[1.4598249475578933, 43.56812337341757]],
[[1.4625558444966515, 43.56945191787426],[1.4611903960272725, 43.5693412058362],[1.4626296525220235, 43.57137092653393],[1.4636998688899152, 43.570559038254835],[1.4638843889533448, 43.56956262991232],[1.4625558444966515, 43.56945191787426]],
[[1.4624820364712796, 43.567901949341454],[1.4625558444966515, 43.56941501386157],[1.4638843889533448, 43.56959953392501],[1.464253429080204, 43.56764362125265],[1.4624820364712796, 43.567901949341454]],
[[1.4610427799765286, 43.56657340488476],[1.4627772685727671, 43.5651710524027],[1.4607475478750414, 43.56354727584451],[1.4602677957101244, 43.564174644060174],[1.460452315773554, 43.56428535609823],[1.45949281144372, 43.56546628450418],[1.4610427799765286, 43.56657340488476]],
[[1.4627403645600812, 43.5651710524027],[1.461005875963843, 43.566610308897445],[1.4603416037354962, 43.56742219717653],[1.462408228445908, 43.567865045328766],[1.464216525067518, 43.56764362125265],[1.4644379491436337, 43.56679482896087],[1.4627403645600812, 43.5651710524027]],
[[1.4626296525220235, 43.57137092653393],[1.461891572268305, 43.57203519876227],[1.464253429080204, 43.572367334876446],[1.4650653173592942, 43.57137092653393],[1.4636629648772292, 43.57059594226752],[1.4626296525220235, 43.57137092653393]],
[[1.4641427170421462, 43.572367334876446],[1.4663938618159875, 43.573585167295086],[1.4681652544249117, 43.573585167295086],[1.4692354707928037, 43.57340064723166],[1.469604510919663, 43.57269947099062],[1.4696783189450346, 43.57126021449587],[1.4694199908562333, 43.57063284628021],[1.468608102577143, 43.571297118508554],[1.468608102577143, 43.57214591080033],[1.4678700223234245, 43.57314231914285],[1.4673902701585075, 43.57336374321897],[1.4662462457652439, 43.57325303118091],[1.4643272371055758, 43.57225662283839],[1.4641427170421462, 43.572367334876446]],
[[1.4650284133466085, 43.57140783054661],[1.4667998059555327, 43.56937810984889],[1.4658033976130127, 43.56904597373472],[1.4636260608645433, 43.57059594226752],[1.4650284133466085, 43.57140783054661]],
[[1.4658403016256987, 43.56904597373472],[1.4663938618159875, 43.568492413544426],[1.4655081655115254, 43.567975757366824],[1.4640689090167744, 43.568492413544426],[1.4636998688899152, 43.570559038254835],[1.4658403016256987, 43.56904597373472]],
[[1.4654712614988394, 43.56801266137951],[1.4663938618159875, 43.568492413544426],[1.4675747902219372, 43.56712696507505],[1.4664307658286735, 43.5664626928467],[1.465655781562269, 43.567311485138475],[1.4654712614988394, 43.56801266137951]],
[[1.4675378862092512, 43.567163869087736],[1.4658033976130127, 43.56904597373472],[1.4667998059555327, 43.56937810984889],[1.4674271741711933, 43.5688245496586],[1.4673533661458216, 43.568492413544426],[1.4679807343614821, 43.568492413544426],[1.468534294551771, 43.56771742927802],[1.4675378862092512, 43.567163869087736]],
[[1.4664676698413595, 43.5664626928467],[1.4655819735368973, 43.566130556732524],[1.464253429080204, 43.56768052526534],[1.4641058130294604, 43.568492413544426],[1.4654712614988394, 43.568049565392194],[1.465655781562269, 43.56742219717653],[1.4664676698413595, 43.5664626928467]],
[[1.4655081655115254, 43.566130556732524],[1.4643272371055758, 43.564802012275834],[1.4630355966615685, 43.56432226011092],[1.462371324433222, 43.564875820301204],[1.4644010451309477, 43.56683173297356],[1.464216525067518, 43.56768052526534],[1.4655081655115254, 43.566130556732524]],
[[1.461005875963843, 43.56310442769228],[1.4605999318242977, 43.5635841798572],[1.462334420420536, 43.564875820301204],[1.4629986926488827, 43.56432226011092],[1.463810580927973, 43.56284609960348],[1.4621499003571063, 43.56221873138782],[1.4617808602302471, 43.562772291578106],[1.4612642040526442, 43.56314133170497],[1.461005875963843, 43.56310442769228]],
[[1.463810580927973, 43.562883003616165],[1.4659879176764423, 43.56055805081695],[1.4636260608645433, 43.559635450499805],[1.4621129963444204, 43.56221873138782],[1.463810580927973, 43.562883003616165]],
[[1.4659510136637564, 43.56059495482964],[1.4682021584375977, 43.55823309801774],[1.4655819735368973, 43.556941457573735],[1.4635891568518573, 43.559635450499805],[1.4659510136637564, 43.56059495482964]],
[[1.4681652544249117, 43.558270002030426],[1.4698628390084643, 43.556461705408815],[1.468608102577143, 43.55594504923121],[1.4679807343614821, 43.55657241744687],[1.4664307658286735, 43.5559819532439],[1.4655819735368973, 43.556941457573735],[1.4681652544249117, 43.558270002030426]],
[[1.4675009821965652, 43.567163869087736],[1.4684973905390852, 43.56771742927802],[1.4689033346786302, 43.567901949341454],[1.4697521269704066, 43.56683173297356],[1.4706378232748687, 43.565429380491494],[1.469567606906977, 43.56509724437732],[1.4675009821965652, 43.567163869087736]],
[[1.4689402386913162, 43.567865045328766],[1.469604510919663, 43.56812337341757],[1.4703056871606954, 43.56753290921459],[1.4710806714270996, 43.567791237303396],[1.4710806714270996, 43.56561390055492],[1.4706009192621827, 43.565503188516864],[1.4689402386913162, 43.567865045328766]],
[[1.470969959389042, 43.56565080456761],[1.4730365840994537, 43.565318668453436],[1.474328224543461, 43.564137740047485],[1.4727044479852804, 43.562772291578106],[1.4714866155666448, 43.563842507946],[1.470969959389042, 43.56565080456761]],
[[1.4726675439725945, 43.562809195590795],[1.474291320530775, 43.564174644060174],[1.4749924967718075, 43.563436563806455],[1.4756198649874683, 43.56199730731171],[1.474734168683006, 43.56118541903261],[1.4726675439725945, 43.562809195590795]],
[[1.46429033309289, 43.564875820301204],[1.4667629019428468, 43.56262467552737],[1.4649177013085506, 43.56166517119753],[1.463773676915287, 43.562883003616165],[1.4630355966615685, 43.56428535609823],[1.46429033309289, 43.564875820301204]],
[[1.465618877549583, 43.56373179590794],[1.4643272371055758, 43.564875820301204],[1.4654712614988394, 43.5662043647579],[1.4657664936003267, 43.5662043647579],[1.467205750095078, 43.56465439622509],[1.465618877549583, 43.56373179590794]],
[[1.467205750095078, 43.56465439622509],[1.468534294551771, 43.563510371831825],[1.4666890939174748, 43.56266157954005],[1.4655819735368973, 43.56376869992063],[1.467205750095078, 43.56465439622509]],
[[1.469530702894291, 43.56509724437732],[1.4677224062726808, 43.564137740047485],[1.467131942069706, 43.56465439622509],[1.465692685574955, 43.56624126877058],[1.4663938618159875, 43.56649959685939],[1.4674640781838793, 43.56720077310042],[1.469530702894291, 43.56509724437732]],
[[1.4694199908562333, 43.56513414839001],[1.4705271112368108, 43.565429380491494],[1.470969959389042, 43.56565080456761],[1.4714128075412731, 43.56391631597137],[1.4726306399599085, 43.562809195590795],[1.4720770797696197, 43.56240325145125],[1.4694199908562333, 43.56513414839001]],
[[1.4684604865263993, 43.563510371831825],[1.4677593102853668, 43.56421154807286],[1.4694199908562333, 43.56513414839001],[1.4712282874778435, 43.56328894775571],[1.4698997430211502, 43.56244015546393],[1.4688664306659445, 43.56362108386988],[1.4684604865263993, 43.563510371831825]],
[[1.4698628390084643, 43.56244015546393],[1.4683866785010273, 43.5617389792229],[1.4673164621331356, 43.56295681164154],[1.4683866785010273, 43.563510371831825],[1.4688295266532585, 43.5635841798572],[1.4698628390084643, 43.56244015546393]],
[[1.4683128704756556, 43.56177588323559],[1.4660617257018143, 43.56044733877889],[1.4648807972958646, 43.56170207521021],[1.4672795581204496, 43.56291990762885],[1.4683128704756556, 43.56177588323559]],
[[1.4720401757569337, 43.56244015546393],[1.4725937359472225, 43.562809195590795],[1.474734168683006, 43.5612223230453],[1.475767481038212, 43.55989377858861],[1.473811568365858, 43.558934274258775],[1.4720032717442477, 43.56048424279158],[1.4729996800867677, 43.56140684310873],[1.4720401757569337, 43.56244015546393]],
[[1.4698628390084643, 43.56240325145125],[1.4712282874778435, 43.56328894775571],[1.4720401757569337, 43.56240325145125],[1.4730365840994537, 43.56140684310873],[1.4720032717442477, 43.56055805081695],[1.4698628390084643, 43.56240325145125]],
[[1.4682759664629697, 43.56184969126096],[1.4698259349957783, 43.56244015546393],[1.4720032717442477, 43.56055805081695],[1.4701580711099516, 43.55978306655055],[1.4682759664629697, 43.56184969126096]],
[[1.4700473590718939, 43.55981997056323],[1.4698628390084643, 43.55922950636026],[1.468128350412226, 43.55823309801774],[1.4660617257018143, 43.56048424279158],[1.4682759664629697, 43.5617389792229],[1.4700473590718939, 43.55981997056323]],
[[1.4698997430211502, 43.55926641037295],[1.4717818476681324, 43.55745811375134],[1.4697890309830923, 43.55657241744687],[1.46809144639954, 43.558270002030426],[1.4698997430211502, 43.55926641037295]],
[[1.4716711356300745, 43.55745811375134],[1.4698628390084643, 43.55934021839832],[1.4700473590718939, 43.55985687457592],[1.471966367731562, 43.56055805081695],[1.473811568365858, 43.558934274258775],[1.4716711356300745, 43.55745811375134]],
[[1.4737008563278002, 43.559008082284144],[1.475767481038212, 43.55993068260129],[1.477132929507591, 43.559008082284144],[1.4780186258120531, 43.55801167394162],[1.4791257461926308, 43.55742120973865],[1.4761365211650712, 43.55686764954836],[1.475804385050898, 43.55745811375134],[1.4744758405942047, 43.55823309801774],[1.4737008563278002, 43.559008082284144]],
[[1.4760996171523852, 43.55686764954836],[1.4790150341545731, 43.55742120973865],[1.4798269224336635, 43.55660932145956],[1.480565002687382, 43.55535458502824],[1.4766162733299881, 43.55461650477452],[1.4760996171523852, 43.55686764954836]],
[[1.4760627131396993, 43.556941457573735],[1.4766162733299881, 43.5546534087872],[1.4741068004673454, 43.55409984859692],[1.4735163362643706, 43.555686721142415],[1.4760627131396993, 43.556941457573735]],
[[1.4735163362643706, 43.555686721142415],[1.4740329924419735, 43.55406294458423],[1.4710806714270996, 43.55417365662229],[1.4722246958203633, 43.55550220107898],[1.4735163362643706, 43.555686721142415]],
[[1.4722246958203633, 43.55550220107898],[1.471043767414414, 43.55417365662229],[1.4688295266532585, 43.554395080698406],[1.4679438303487964, 43.55491173687601],[1.4701949751226375, 43.55609266528196],[1.4696783189450346, 43.55660932145956],[1.470933055376356, 43.557089073624475],[1.4722246958203633, 43.55550220107898]],
[[1.4752139208479231, 43.55782715387819],[1.475767481038212, 43.55753192177671],[1.4760258091270133, 43.556941457573735],[1.4734425282389987, 43.555686721142415],[1.4721508877949916, 43.55550220107898],[1.4716342316173885, 43.5562402813327],[1.4734425282389987, 43.55660932145956],[1.4752139208479231, 43.55782715387819]],
[[1.4716342316173885, 43.5562402813327],[1.470933055376356, 43.55712597763716],[1.4715973276047027, 43.55749501776402],[1.4737377603404862, 43.559008082284144],[1.4744758405942047, 43.55823309801774],[1.4752139208479231, 43.55790096190357],[1.4734425282389987, 43.55664622547224],[1.4716342316173885, 43.5562402813327]]];

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
    for(let i = 0; i < batiments.length; i++){
       if (inside(point, batiments[i])){
	var zone = L.polyline(batiments[i]).addTo(map);      
        map.flyTo(latLon,18);
        tab.push(zone);
	break;
       }
     }
   var popup = L.popup().setLatLng(latLon).setContent("ici c'est la zone").openOn(map);
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

  currentLayer = L.geoJson(myGeoJson, {
    onEachFeature: onEachFeaturePointLastObs,
    pointToLayer: function(feature, latlng) {
	return L.marker(latlng);
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
	return L.marker(latlng);
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
