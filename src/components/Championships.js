"use client";
import React, { useState } from "react";
import Section from "./Section";
import styles from "./Championships.module.css";
import Button from "./Button";
import Image from "next/image";

const EVENTS = [
  {
    "id": 1,
    "title": "1ST RING FIGHT FEDERATION CUP",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/1st-ring-fight-federation-cup/499269184-3635374166594850-3910036325853610109-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/502642024-3635368743262059-2891359085596629064-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/508744496-3635369193262014-7998566201077614627-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/509421429-3635369179928682-2494597257882526003-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/509898393-3635373706594896-3983606692923507981-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/509962332-3635368859928714-1993312806386864341-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/510845793-3635369119928688-5621309819312438708-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/511527233-3635368879928712-3362269786937139590-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/511840895-3635374203261513-3533431610675399092-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/511999839-3635339333265000-6632950851831418201-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/512482431-3635368933262040-4074602565689292382-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/513100467-3635368863262047-5182335355234888930-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/513136203-3635370186595248-5069000312801504044-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/513154168-3635370296595237-7665227465387921431-n.jpg",
      "/assets/championship history/1st-ring-fight-federation-cup/513491414-3635373769928223-8008562076493166935-n.jpg"
    ]
  },
  {
    "id": 2,
    "title": "1st National Photos",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/1st-national-photos/506044967-3614656671999933-2146402596805385901-n.jpg",
      "/assets/championship history/1st-national-photos/506132417-3614656745333259-4802368857926416144-n.jpg",
      "/assets/championship history/1st-national-photos/506144071-3614656695333264-682717583935500547-n.jpg",
      "/assets/championship history/1st-national-photos/506215313-3614656375333296-7310489260169167779-n.jpg",
      "/assets/championship history/1st-national-photos/506218507-3614656661999934-59076781901115197-n.jpg",
      "/assets/championship history/1st-national-photos/506273546-3614656748666592-8825026995612567190-n.jpg",
      "/assets/championship history/1st-national-photos/506284904-3614656685333265-9029443355625031879-n.jpg",
      "/assets/championship history/1st-national-photos/506341582-3614656688666598-8680687394686520238-n.jpg",
      "/assets/championship history/1st-national-photos/506394023-3614656705333263-1446133628246800032-n.jpg",
      "/assets/championship history/1st-national-photos/506397627-3614656711999929-7708627350479608017-n.jpg",
      "/assets/championship history/1st-national-photos/506398206-3614493542016246-4327564022810814346-n.jpg",
      "/assets/championship history/1st-national-photos/506445890-3614493908682876-4856144438552321088-n.jpg",
      "/assets/championship history/1st-national-photos/506470014-3614657558666511-7330632033309662946-n.jpg",
      "/assets/championship history/1st-national-photos/506484200-3614495035349430-8502328028152504339-n.jpg"
    ]
  },
  {
    "id": 3,
    "title": "2nd National Photos",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/2nd-national-photos/480216609-3477263012405967-8767217758785973325-n.jpg",
      "/assets/championship history/2nd-national-photos/480523212-3477262812405987-2199338925843826060-n.jpg",
      "/assets/championship history/2nd-national-photos/480532419-3477263089072626-746990006073798162-n.jpg",
      "/assets/championship history/2nd-national-photos/480573182-3477262999072635-5678598948544161544-n.jpg",
      "/assets/championship history/2nd-national-photos/480596991-3477262985739303-6167734729901341440-n.jpg",
      "/assets/championship history/2nd-national-photos/480652774-3477263049072630-4025132645338097076-n.jpg",
      "/assets/championship history/2nd-national-photos/480687296-3477262982405970-9056301087502819540-n.jpg",
      "/assets/championship history/2nd-national-photos/75446824-1770477219751230-7814582236455370752-n.jpg"
    ]
  },
  {
    "id": 4,
    "title": "3rd National Photos",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/3rd-national-photos/img-20150926-120736.jpg",
      "/assets/championship history/3rd-national-photos/img-20150926-121521.jpg",
      "/assets/championship history/3rd-national-photos/img-20150926-121606.jpg",
      "/assets/championship history/3rd-national-photos/img-20150926-121658.jpg",
      "/assets/championship history/3rd-national-photos/img-20150926-143431.jpg",
      "/assets/championship history/3rd-national-photos/img-20150926-143513.jpg",
      "/assets/championship history/3rd-national-photos/img-20150926-143534.jpg",
      "/assets/championship history/3rd-national-photos/img-20150926-143600-1.jpg",
      "/assets/championship history/3rd-national-photos/img-20150926-143600.jpg",
      "/assets/championship history/3rd-national-photos/img-20150926-144318.jpg"
    ]
  },
  {
    "id": 5,
    "title": "4th National Photos",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/4th-national-photos/480738453-3477246992407569-7641959246681115868-n.jpg",
      "/assets/championship history/4th-national-photos/508701677-3629682077164059-5948245238144654997-n.jpg",
      "/assets/championship history/4th-national-photos/509293312-3629386027193664-3031157627615562703-n.jpg",
      "/assets/championship history/4th-national-photos/509347430-3629682193830714-3553398582001547365-n.jpg",
      "/assets/championship history/4th-national-photos/509347446-3629682190497381-6087804565099407191-n.jpg",
      "/assets/championship history/4th-national-photos/509364689-3629386283860305-8325212350403577780-n.jpg",
      "/assets/championship history/4th-national-photos/509415852-3629682163830717-5286491837728416325-n.jpg",
      "/assets/championship history/4th-national-photos/509423104-3629681853830748-3171282600919268221-n.jpg",
      "/assets/championship history/4th-national-photos/509424385-3629682207164046-3619460185795571652-n.jpg",
      "/assets/championship history/4th-national-photos/509426491-3629681713830762-8814285812126420555-n.jpg",
      "/assets/championship history/4th-national-photos/509629990-3629681983830735-1412553875900853604-n.jpg",
      "/assets/championship history/4th-national-photos/509824215-3629682073830726-7566748121811670629-n.jpg",
      "/assets/championship history/4th-national-photos/509983546-3629682110497389-3540595265312733460-n.jpg",
      "/assets/championship history/4th-national-photos/510251018-3629681813830752-3480938540861070737-n.jpg",
      "/assets/championship history/4th-national-photos/510480878-3629681987164068-7426442550681304450-n.jpg",
      "/assets/championship history/4th-national-photos/510482079-3629682017164065-5252034050271886364-n.jpg",
      "/assets/championship history/4th-national-photos/510483400-3629682157164051-7401611782965638609-n.jpg",
      "/assets/championship history/4th-national-photos/510483458-3629681733830760-4114650225507082886-n.jpg",
      "/assets/championship history/4th-national-photos/510484829-3629681893830744-3991934565015589129-n.jpg",
      "/assets/championship history/4th-national-photos/510624010-3629682107164056-5648181584349702338-n.jpg",
      "/assets/championship history/4th-national-photos/510970493-3629681800497420-6300838554608296770-n.jpg",
      "/assets/championship history/4th-national-photos/511101111-3629681843830749-4706686116419804395-n.jpg",
      "/assets/championship history/4th-national-photos/511116665-3629682210497379-1882662713817326960-n.jpg",
      "/assets/championship history/4th-national-photos/511152003-3629681997164067-219378027040750311-n.jpg",
      "/assets/championship history/4th-national-photos/511177462-3629682060497394-5331862417298488902-n.jpg",
      "/assets/championship history/4th-national-photos/511178863-3629682097164057-5343252351302476711-n.jpg",
      "/assets/championship history/4th-national-photos/511179299-3629681923830741-6659444627459777469-n.jpg",
      "/assets/championship history/4th-national-photos/511182355-3629681763830757-7935746736352505411-n.jpg",
      "/assets/championship history/4th-national-photos/511194496-3629681940497406-4833954947824969499-n.jpg",
      "/assets/championship history/4th-national-photos/511260219-3629681870497413-2606143060334247633-n.jpg",
      "/assets/championship history/4th-national-photos/511267855-3629681953830738-5882851599035194178-n.jpg",
      "/assets/championship history/4th-national-photos/511272179-3629681930497407-7168331857352655546-n.jpg"
    ]
  },
  {
    "id": 6,
    "title": "5th National Photos",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/5th-national-photos/84089025-1867551110043840-876081738206412800-n.jpg",
      "/assets/championship history/5th-national-photos/84273958-1867551500043801-8667227648092536832-n.jpg",
      "/assets/championship history/5th-national-photos/84344699-1867550630043888-3162742882310291456-n.jpg",
      "/assets/championship history/5th-national-photos/84445199-1867550313377253-4929816423590526976-n.jpg",
      "/assets/championship history/5th-national-photos/84545175-1867550720043879-1569205755163181056-n.jpg",
      "/assets/championship history/5th-national-photos/84704475-1863375043794780-8107170183346388992-n.jpg",
      "/assets/championship history/5th-national-photos/84846829-1865012750297676-4771272846934540288-n.jpg",
      "/assets/championship history/5th-national-photos/85079481-1867550030043948-5946492760885297152-n.jpg",
      "/assets/championship history/5th-national-photos/85152673-1867551560043795-2483397494101245952-n.jpg",
      "/assets/championship history/5th-national-photos/85166001-1867550163377268-5359368218966228992-n.jpg",
      "/assets/championship history/5th-national-photos/85180971-1867548966710721-3080217619748356096-n.jpg",
      "/assets/championship history/5th-national-photos/85180971-1867551673377117-7280125589996961792-n.jpg",
      "/assets/championship history/5th-national-photos/85232251-1867551433377141-5514268288965672960-n.jpg",
      "/assets/championship history/5th-national-photos/85243567-1867550680043883-4935834901132869632-n.jpg",
      "/assets/championship history/5th-national-photos/86170874-1867551376710480-7864938365768957952-n.jpg",
      "/assets/championship history/5th-national-photos/86171740-1867550920043859-8448158756646158336-n.jpg",
      "/assets/championship history/5th-national-photos/86173917-1867550510043900-585899836289581056-n.jpg",
      "/assets/championship history/5th-national-photos/86176204-1867548856710732-8287336884523237376-n.jpg",
      "/assets/championship history/5th-national-photos/86180373-1867550263377258-5360956291713859584-n.jpg",
      "/assets/championship history/5th-national-photos/86183505-1867550090043942-8062488264176566272-n.jpg",
      "/assets/championship history/5th-national-photos/86185398-1867549353377349-6851837270920527872-n.jpg",
      "/assets/championship history/5th-national-photos/86191097-1867549073377377-5167798233589612544-n.jpg",
      "/assets/championship history/5th-national-photos/86192662-1867550553377229-4593451369699999744-n.jpg",
      "/assets/championship history/5th-national-photos/86260671-1867550953377189-1714356172091293696-n.jpg",
      "/assets/championship history/5th-national-photos/86260682-1867551616710456-385918324967473152-n.jpg",
      "/assets/championship history/5th-national-photos/86261969-1867549236710694-7026575180679872512-n.jpg",
      "/assets/championship history/5th-national-photos/86267044-1867551253377159-4985613099647107072-n.jpg",
      "/assets/championship history/5th-national-photos/86336782-1867550780043873-2833385651678740480-n.jpg",
      "/assets/championship history/5th-national-photos/86340504-1867550373377247-6107891550195286016-n.jpg",
      "/assets/championship history/5th-national-photos/86353067-1867551036710514-7801313553469669376-n.jpg",
      "/assets/championship history/5th-national-photos/86441346-1867550826710535-8110251229675782144-n.jpg"
    ]
  },
  {
    "id": 7,
    "title": "6th National Photos Tamilnadu",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/6th-national-photos-tamilnadu/486635504-3522408067891461-5432441249946536976-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/486686883-3522408137891454-1324939392811640867-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/486751559-3522409614557973-1234338844855427039-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/486819527-3522409754557959-252241400812084362-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/486961458-3522408057891462-5116884921892102813-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/486967903-3522408107891457-8091999970797885248-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487089400-3522416681223933-374037291832281675-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487182713-3522416687890599-4091044960791527808-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487184358-3522409577891310-2478520112756483858-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487184970-3522409204558014-6675669325651136989-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487224974-3522409737891294-3810677852975016760-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487239505-3522409674557967-1880530188687410073-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487240673-3522416594557275-8889865602860365572-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487241391-3522416541223947-2604010832675654020-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487241624-3522416524557282-9041618764175697104-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487278099-3522416537890614-3855845589729808248-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487302152-3522416521223949-7048353082736145703-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487310834-3522416691223932-6878282414548791672-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487313412-3522416491223952-2354606574935697844-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487314966-3522416611223940-1033602643858111244-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487324589-3521845087947759-9173640832831820245-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487434318-3522408087891459-3658030923117951983-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487437040-3522408064558128-3116854276014102006-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487531006-3522416577890610-7542962954693585867-n-1.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487531006-3522416577890610-7542962954693585867-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487750997-3522409584557976-4460855034975610809-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487763479-3522407761224825-4180070556893122373-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/487779777-3522409647891303-4549217906458689270-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/491292406-3555492161249718-1390307463767960471-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/491928386-3555492231249711-5910447024457014598-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/491959663-3555492224583045-1904906654260931829-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/491960773-3555492447916356-8273375423320553720-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/492328612-3555492197916381-1050479527683507005-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/492451803-3555492444583023-9178946028945122056-n.jpg",
      "/assets/championship history/6th-national-photos-tamilnadu/493610226-3555492191249715-8008926339579003101-n.jpg"
    ]
  },
  {
    "id": 8,
    "title": "7th National Photos",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/7th-national-photos/494034261-3560263314105936-8471160312578831026-n.jpg",
      "/assets/championship history/7th-national-photos/494044249-3561217030677231-6949992766515841553-n.jpg",
      "/assets/championship history/7th-national-photos/494055354-3561217254010542-6098584587683586385-n.jpg",
      "/assets/championship history/7th-national-photos/494067639-3560264814105786-8876677864845997158-n.jpg",
      "/assets/championship history/7th-national-photos/494071350-3560264917439109-1933346899839363170-n.jpg",
      "/assets/championship history/7th-national-photos/494097923-3560298680769066-279951811884077719-n.jpg",
      "/assets/championship history/7th-national-photos/494105940-3560303120768622-1544509275199712056-n.jpg",
      "/assets/championship history/7th-national-photos/494110869-3561216994010568-3891816467963403950-n.jpg",
      "/assets/championship history/7th-national-photos/494133569-3560298670769067-9197018431176464056-n.jpg",
      "/assets/championship history/7th-national-photos/494136286-3560303074101960-5515772414434206889-n.jpg",
      "/assets/championship history/7th-national-photos/494136570-3560264947439106-6591491980230796058-n.jpg",
      "/assets/championship history/7th-national-photos/494151531-3560264874105780-1733121049598406988-n.jpg",
      "/assets/championship history/7th-national-photos/494166462-3560381774094090-6574563538787541497-n.jpg",
      "/assets/championship history/7th-national-photos/494178942-3560264960772438-6192562044449431514-n.jpg",
      "/assets/championship history/7th-national-photos/494193242-3560303160768618-3181515211279135435-n.jpg",
      "/assets/championship history/7th-national-photos/494195151-3560303067435294-3558218412048202743-n.jpg",
      "/assets/championship history/7th-national-photos/494196584-3561217210677213-6952767248061806271-n.jpg",
      "/assets/championship history/7th-national-photos/494202294-3560303037435297-7786175515613809972-n.jpg",
      "/assets/championship history/7th-national-photos/494206822-3560302874101980-1004955914005144020-n.jpg",
      "/assets/championship history/7th-national-photos/494216241-3560303110768623-5630768287640820886-n.jpg",
      "/assets/championship history/7th-national-photos/494260272-3560298737435727-4687341890902143837-n.jpg",
      "/assets/championship history/7th-national-photos/494266208-3560303290768605-693747595550954042-n.jpg",
      "/assets/championship history/7th-national-photos/494271014-3560263407439260-6382011626162802342-n.jpg",
      "/assets/championship history/7th-national-photos/494286792-3560303027435298-6517986085824882920-n.jpg",
      "/assets/championship history/7th-national-photos/494366418-3561217007343900-7822759181292315911-n.jpg",
      "/assets/championship history/7th-national-photos/494411455-3560264854105782-9110128414463620163-n.jpg",
      "/assets/championship history/7th-national-photos/494424320-3560303034101964-98186764673444579-n.jpg",
      "/assets/championship history/7th-national-photos/494452088-3560303084101959-4405372314515942688-n.jpg",
      "/assets/championship history/7th-national-photos/494460053-3560303170768617-8728292563226271254-n.jpg",
      "/assets/championship history/7th-national-photos/494469805-3560264847439116-8534060574384038974-n.jpg",
      "/assets/championship history/7th-national-photos/494521134-3560263327439268-7168019314286917766-n.jpg",
      "/assets/championship history/7th-national-photos/494529155-3561217217343879-4323120917773521846-n.jpg",
      "/assets/championship history/7th-national-photos/494550755-3560298817435719-3513158630789053309-n.jpg",
      "/assets/championship history/7th-national-photos/494597370-3560303020768632-6970224650190534320-n.jpg",
      "/assets/championship history/7th-national-photos/494617553-3560303294101938-9156774975074259182-n.jpg",
      "/assets/championship history/7th-national-photos/494644726-3560302910768643-7455040513097840840-n.jpg",
      "/assets/championship history/7th-national-photos/494664401-3560302954101972-5817256708781769895-n.jpg",
      "/assets/championship history/7th-national-photos/494690610-3561217207343880-7053041578211922581-n.jpg",
      "/assets/championship history/7th-national-photos/494744630-3560302990768635-2631047309698831998-n.jpg",
      "/assets/championship history/7th-national-photos/494879175-3560382767427324-6207971969748731253-n.jpg"
    ]
  },
  {
    "id": 9,
    "title": "8th National photos",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/8th-national-photos/511919940-3639372336195033-2499351103002045772-n.jpg",
      "/assets/championship history/8th-national-photos/512221177-3639372659528334-7365969511831725436-n.jpg",
      "/assets/championship history/8th-national-photos/512649403-3639372632861670-3319673413568727014-n.jpg",
      "/assets/championship history/8th-national-photos/512651171-3639372379528362-1978607256637831834-n.jpg",
      "/assets/championship history/8th-national-photos/512684282-3639916086140658-5912127582634155490-n.jpg",
      "/assets/championship history/8th-national-photos/512696740-3639372382861695-4783672594816424107-n.jpg",
      "/assets/championship history/8th-national-photos/512947134-3639372496195017-5537938836934683062-n.jpg",
      "/assets/championship history/8th-national-photos/513111552-3639372289528371-4609229111081899876-n.jpg",
      "/assets/championship history/8th-national-photos/513213403-3639372332861700-2722644974048437003-n.jpg",
      "/assets/championship history/8th-national-photos/513224837-3639372682861665-90872933238950422-n.jpg",
      "/assets/championship history/8th-national-photos/513228367-3639372652861668-2785661336044326278-n.jpg",
      "/assets/championship history/8th-national-photos/513229588-3639372362861697-7766803372403230582-n.jpg",
      "/assets/championship history/8th-national-photos/513310437-3639372656195001-9186848946962916061-n.jpg",
      "/assets/championship history/8th-national-photos/513323214-3639372552861678-7725601890874470517-n.jpg",
      "/assets/championship history/8th-national-photos/513391850-3639372286195038-673007092242269891-n.jpg",
      "/assets/championship history/8th-national-photos/513845065-3639372536195013-3155619537022322638-n.jpg",
      "/assets/championship history/8th-national-photos/513878884-3639372372861696-1006958225512212672-n.jpg",
      "/assets/championship history/8th-national-photos/513903249-3639372686194998-7239481013236816843-n.jpg",
      "/assets/championship history/8th-national-photos/513907576-3639372239528376-5222070333145053541-n.jpg",
      "/assets/championship history/8th-national-photos/513938964-3639904502808483-5706296250835086348-n.jpg",
      "/assets/championship history/8th-national-photos/514028100-3639372266195040-8174961641760430573-n.jpg",
      "/assets/championship history/8th-national-photos/514034091-3639959506136316-2671256767104101576-n.jpg",
      "/assets/championship history/8th-national-photos/514045238-3639372369528363-2516808130477351117-n.jpg"
    ]
  },
  {
    "id": 10,
    "title": "9th National Photos",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/9th-national-photos/odisha-photos",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.30-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.32-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.42-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.43-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.43-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.45-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.45-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.46-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.47-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.48-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.48-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.49-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.49-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.50-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.51-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.51-pm-2.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.51-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.52-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.52-pm-2.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.52-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.53-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.53-pm-2.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.53-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.54-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.54-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.56-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.56-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.57-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.58-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.58-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.59-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.59-pm-2.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.04.59-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.00-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.00-pm-2.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.00-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.01-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.01-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.02-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.03-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.03-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.04-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-15-at-10.05.05-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-16-at-6.40.06-am-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-16-at-6.40.06-am.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-16-at-6.41.08-am-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-16-at-6.41.08-am.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-17-at-5.56.08-pm-1.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-17-at-5.56.08-pm.jpeg",
      "/assets/championship history/9th-national-photos/whatsapp-image-2025-12-17-at-5.56.09-pm.jpeg"
    ]
  },
  {
    "id": 11,
    "title": "SGF TELANGANA STATE PHOTO",
    "location": "Location",
    "year": "Year",
    "images": [
      "/assets/championship history/sgf-telangana-state-photo/501423500-3598204920311775-2092999801578143565-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/501535851-3598204926978441-8754984151742442613-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/501573519-3598204993645101-3133484129378009688-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502448682-3598204900311777-7382939851725083045-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502468159-3598204953645105-4426346478603603219-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502470778-3598204903645110-3141092356600050394-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502526167-3598204986978435-6880270106182154994-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502526866-3598204910311776-4205451641877905861-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502543921-3598204956978438-4676666157608260188-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502568362-3598204923645108-2063178648189837648-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502584529-3598204906978443-5886155529044914751-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502585377-3598205023645098-917523241314962638-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502617748-3598204916978442-3391891785862395248-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502922688-3598204973645103-865327229770411145-n.jpg",
      "/assets/championship history/sgf-telangana-state-photo/502949386-3598204913645109-8696259484011171748-n.jpg"
    ]
  }
];

export default function Championships() {
  const [activeEventIndex, setActiveEventIndex] = useState(null); // Which event's modal is open
  const [activeImageIndex, setActiveImageIndex] = useState(null); // Which image is focused in the lightbox

  // 1. Open event photo grid modal
  const openGallery = (eventIndex) => {
    setActiveEventIndex(eventIndex);
  };

  const closeGallery = () => {
    setActiveEventIndex(null);
    setActiveImageIndex(null); // also close slider if open
  };

  // 2. Open specific photo slider from grid
  const openLightbox = (imageIndex) => {
    setActiveImageIndex(imageIndex);
  };

  const closeLightbox = (e) => {
    e.stopPropagation();
    setActiveImageIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === 0 ? EVENTS[activeEventIndex].images.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === EVENTS[activeEventIndex].images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Section id="championships" background="default">
      <div className={styles.header}>
        <h2>Championship History</h2>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.swipeHint}>Swipe to explore events</div>

      <div className={styles.grid}>
        {EVENTS.map((event, index) => (
          <div key={event.id} className={`${styles.card} glass`}>
            <div className={styles.medalIcon}>🏆</div>
            <h3>{event.title}</h3>
            {event.location !== "Location" && (
              <p className={styles.meta}>{event.location} • {event.year}</p>
            )}
            <Button
              variant="secondary"
              className={styles.btn}
              onClick={() => openGallery(index)}
            >
              View Results
            </Button>
          </div>
        ))}
      </div>

      {/* Gallery Modal displaying all images in a grid */}
      {activeEventIndex !== null && activeImageIndex === null && (
        <div className={styles.galleryModal} onClick={closeGallery}>
          <div className={styles.galleryModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.galleryModalHeader}>
              <h3>{EVENTS[activeEventIndex].title}</h3>
              <button className={styles.closeGalleryBtn} onClick={closeGallery}>&times;</button>
            </div>
            <div className={styles.masonryGrid}>
              {EVENTS[activeEventIndex].images.map((imgSrc, imgIndex) => (
                <div
                  key={imgIndex}
                  className={styles.masonryItem}
                  onClick={() => openLightbox(imgIndex)}
                >
                  <Image
                    src={imgSrc}
                    alt={`${EVENTS[activeEventIndex].title} Photo ${imgIndex + 1}`}
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                  <div className={styles.overlay}>
                    <span>View Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full-screen Lightbox Slider */}
      {activeEventIndex !== null && activeImageIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent}>
            <button className={styles.closeBtn} onClick={closeLightbox}>×</button>
            <button className={styles.prevBtn} onClick={prevImage}>&#10094;</button>
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={EVENTS[activeEventIndex].images[activeImageIndex]}
                alt={`${EVENTS[activeEventIndex].title} ${activeImageIndex + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            </div>
            <button className={styles.nextBtn} onClick={nextImage}>&#10095;</button>
            <div className={styles.imageCounter}>
              {activeImageIndex + 1} / {EVENTS[activeEventIndex].images.length}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
