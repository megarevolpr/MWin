<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="en">
<context>
    <name>FaultTableInterface</name>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="14"/>
        <source>Fault description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="31"/>
        <source>Please enter search keywords</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="44"/>
        <source>Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="62"/>
        <source>DCAC Fault Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="76"/>
        <source>DCDC Module Fault Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="86"/>
        <source>Battery Protection Logic Explanation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="100"/>
        <source>Battery Cut-off Voltage Protection Logic Explanation for Grid-on and grid-off modes:

Grid-on mode:
  When the battery discharges to the cut-off voltage minus 5V (e.g., if the cut-off voltage is 500V, discharge stops at 495V), an alarm &quot;Discharge Not Allowed&quot; will be triggered, and the DCAC converter output power will drop to 0.
  The &quot;Discharge Not Allowed&quot; alarm will be cleared when the battery voltage is greater than the discharge cut-off voltage plus the discharge hysteresis voltage or when the mode is changed to charging.
  When the battery is charged to the upper limit of the charging voltage, an alarm &quot;Charging Not Allowed&quot; will be triggered. If the DCAC is in charging mode, the charging power will drop to 0. If the DCAC is in discharge mode, it will not be affected.
  The &quot;Charging Not Allowed&quot; alarm will be cleared when the battery voltage is lower than the upper limit of the charging voltage minus the charging hysteresis voltage or when it is in discharge mode.

Grid-off mode:
  When the battery discharges to the cut-off voltage minus 5V (e.g., if the cut-off voltage is 500V, discharge stops at 495V), an alarm &quot;Discharge Not Allowed&quot; will be triggered, and the DCAC converter will shut down. The &quot;Discharge Not Allowed&quot; alarm will be cleared when the battery voltage is greater than the discharge cut-off voltage plus the discharge hysteresis voltage. If there is no shutdown command, the system will resume operation.
  When the battery is charged to the upper limit of the charging voltage, an alarm &quot;Charging Not Allowed&quot; will be triggered. If the DCAC is in charging mode or in grid-off discharge mode, it will not be affected.
  The &quot;Charging Not Allowed&quot; alarm will be cleared when the battery voltage is lower than the upper limit of the charging voltage minus the charging hysteresis voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="51"/>
        <source>Alarm name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="51"/>
        <source>Alarm leve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="51"/>
        <source>Trigger condition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="52"/>
        <source>Response action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="52"/>
        <source>Whether to reset
automatically and reset time</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Menu</name>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="14"/>
        <source>Form</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="34"/>
        <location filename="../UI_Menu/Menu.cpp" line="52"/>
        <source>Host</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="60"/>
        <source>Rt.Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="86"/>
        <location filename="../UI_Menu/Menu.cpp" line="54"/>
        <source>Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="112"/>
        <location filename="../UI_Menu/Menu.cpp" line="55"/>
        <source>System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="143"/>
        <location filename="../UI_Menu/Menu.cpp" line="56"/>
        <source>Switch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="169"/>
        <location filename="../UI_Menu/Menu.cpp" line="57"/>
        <source>Stand-by</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.cpp" line="53"/>
        <source>Rt.Date</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MyWidget</name>
    <message>
        <location filename="../mywidget.ui" line="135"/>
        <source>Basic settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="168"/>
        <source>Function Setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="257"/>
        <location filename="../mywidget.cpp" line="4942"/>
        <source>Battery type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="265"/>
        <location filename="../mywidget.ui" line="281"/>
        <location filename="../mywidget.ui" line="297"/>
        <location filename="../mywidget.ui" line="313"/>
        <location filename="../mywidget.ui" line="345"/>
        <location filename="../mywidget.ui" line="361"/>
        <location filename="../mywidget.ui" line="398"/>
        <location filename="../mywidget.ui" line="414"/>
        <location filename="../mywidget.ui" line="451"/>
        <location filename="../mywidget.ui" line="504"/>
        <location filename="../mywidget.ui" line="520"/>
        <location filename="../mywidget.ui" line="557"/>
        <location filename="../mywidget.ui" line="573"/>
        <location filename="../mywidget.ui" line="626"/>
        <location filename="../mywidget.ui" line="727"/>
        <location filename="../mywidget.ui" line="922"/>
        <location filename="../mywidget.ui" line="938"/>
        <location filename="../mywidget.ui" line="986"/>
        <location filename="../mywidget.ui" line="1039"/>
        <location filename="../mywidget.ui" line="1092"/>
        <location filename="../mywidget.ui" line="1145"/>
        <location filename="../mywidget.ui" line="1161"/>
        <location filename="../mywidget.ui" line="1177"/>
        <location filename="../mywidget.ui" line="1198"/>
        <location filename="../mywidget.ui" line="1214"/>
        <location filename="../mywidget.ui" line="1251"/>
        <location filename="../mywidget.ui" line="1267"/>
        <location filename="../mywidget.ui" line="1283"/>
        <location filename="../mywidget.ui" line="1304"/>
        <location filename="../mywidget.ui" line="1320"/>
        <location filename="../mywidget.ui" line="1336"/>
        <location filename="../mywidget.ui" line="1352"/>
        <location filename="../mywidget.ui" line="1368"/>
        <location filename="../mywidget.ui" line="1384"/>
        <location filename="../mywidget.ui" line="1416"/>
        <location filename="../mywidget.ui" line="1432"/>
        <location filename="../mywidget.ui" line="1488"/>
        <location filename="../mywidget.ui" line="8613"/>
        <location filename="../mywidget.ui" line="8629"/>
        <location filename="../mywidget.ui" line="8661"/>
        <location filename="../mywidget.ui" line="8677"/>
        <location filename="../mywidget.ui" line="8693"/>
        <location filename="../mywidget.ui" line="8709"/>
        <location filename="../mywidget.ui" line="8741"/>
        <location filename="../mywidget.ui" line="9286"/>
        <location filename="../mywidget.ui" line="9466"/>
        <location filename="../mywidget.ui" line="9530"/>
        <location filename="../mywidget.ui" line="9594"/>
        <location filename="../mywidget.ui" line="9658"/>
        <location filename="../mywidget.cpp" line="1522"/>
        <source>-</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="289"/>
        <location filename="../mywidget.cpp" line="5073"/>
        <source>ProtocolVersion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="305"/>
        <source>BMS Comm. type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="329"/>
        <location filename="../mywidget.ui" line="377"/>
        <location filename="../mywidget.ui" line="430"/>
        <location filename="../mywidget.ui" line="483"/>
        <location filename="../mywidget.ui" line="536"/>
        <source>bps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="353"/>
        <location filename="../mywidget.cpp" line="4956"/>
        <source>Power control type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="321"/>
        <location filename="../mywidget.cpp" line="5022"/>
        <source>serial port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="406"/>
        <source>EMS Comm. type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="369"/>
        <location filename="../mywidget.cpp" line="5029"/>
        <source>serial port 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="438"/>
        <location filename="../mywidget.cpp" line="5091"/>
        <source>Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="459"/>
        <location filename="../mywidget.cpp" line="4969"/>
        <source>Output power limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="467"/>
        <location filename="../mywidget.ui" line="679"/>
        <location filename="../mywidget.ui" line="711"/>
        <location filename="../mywidget.ui" line="759"/>
        <location filename="../mywidget.ui" line="775"/>
        <location filename="../mywidget.ui" line="791"/>
        <location filename="../mywidget.ui" line="807"/>
        <location filename="../mywidget.ui" line="823"/>
        <location filename="../mywidget.ui" line="970"/>
        <location filename="../mywidget.ui" line="7270"/>
        <location filename="../mywidget.ui" line="7294"/>
        <location filename="../mywidget.ui" line="7318"/>
        <location filename="../mywidget.ui" line="7342"/>
        <location filename="../mywidget.ui" line="8645"/>
        <source>kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="422"/>
        <location filename="../mywidget.cpp" line="5035"/>
        <source>serial port 4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="491"/>
        <source>System upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="475"/>
        <location filename="../mywidget.cpp" line="5041"/>
        <source>serial port 5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="544"/>
        <location filename="../mywidget.cpp" line="5101"/>
        <source>Sounds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="565"/>
        <location filename="../mywidget.cpp" line="4984"/>
        <source>Charge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="581"/>
        <location filename="../mywidget.cpp" line="5053"/>
        <source>Can port 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="589"/>
        <location filename="../mywidget.ui" line="642"/>
        <source>kbps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="618"/>
        <source>Discharge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="634"/>
        <location filename="../mywidget.cpp" line="5059"/>
        <source>Can port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="671"/>
        <location filename="../mywidget.cpp" line="5001"/>
        <source>DG capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="695"/>
        <location filename="../mywidget.ui" line="1055"/>
        <location filename="../mywidget.ui" line="1108"/>
        <location filename="../mywidget.ui" line="6658"/>
        <location filename="../mywidget.ui" line="6676"/>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="719"/>
        <location filename="../mywidget.cpp" line="5007"/>
        <source>Energy priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1071"/>
        <location filename="../mywidget.ui" line="1124"/>
        <location filename="../mywidget.ui" line="6622"/>
        <location filename="../mywidget.ui" line="8773"/>
        <location filename="../mywidget.ui" line="9270"/>
        <location filename="../mywidget.ui" line="9302"/>
        <location filename="../mywidget.ui" line="9318"/>
        <location filename="../mywidget.ui" line="9384"/>
        <location filename="../mywidget.ui" line="9400"/>
        <location filename="../mywidget.ui" line="9610"/>
        <location filename="../mywidget.ui" line="9674"/>
        <location filename="../mywidget.cpp" line="1524"/>
        <source>V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="835"/>
        <source>System parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="906"/>
        <source>kW/s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="914"/>
        <location filename="../mywidget.cpp" line="5223"/>
        <source>Machine type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="930"/>
        <location filename="../mywidget.cpp" line="5302"/>
        <source>Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="954"/>
        <location filename="../mywidget.ui" line="1002"/>
        <location filename="../mywidget.ui" line="1018"/>
        <source>Hz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="962"/>
        <location filename="../mywidget.cpp" line="5229"/>
        <source>Machine capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="978"/>
        <location filename="../mywidget.cpp" line="5308"/>
        <source>Restore factory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1010"/>
        <source>Output Fre. grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1132"/>
        <location filename="../mywidget.cpp" line="5323"/>
        <source>Clear Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1047"/>
        <location filename="../mywidget.cpp" line="5168"/>
        <source>Vol protection upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1063"/>
        <source>Output vol. level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1100"/>
        <location filename="../mywidget.cpp" line="5174"/>
        <source>Vol protection lower limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1238"/>
        <location filename="../mywidget.cpp" line="5335"/>
        <source>Module max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1153"/>
        <location filename="../mywidget.cpp" line="5180"/>
        <source>HVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1169"/>
        <location filename="../mywidget.cpp" line="5253"/>
        <source>Output reactive power mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1291"/>
        <location filename="../mywidget.cpp" line="5341"/>
        <source>Module min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1206"/>
        <source>LVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1344"/>
        <location filename="../mywidget.cpp" line="5347"/>
        <source>Insulation detection enable DCDC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1259"/>
        <location filename="../mywidget.cpp" line="5192"/>
        <source>AFD enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1222"/>
        <location filename="../mywidget.cpp" line="5265"/>
        <source>Grid recovery time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="610"/>
        <location filename="../mywidget.ui" line="663"/>
        <location filename="../mywidget.ui" line="1230"/>
        <source>s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="273"/>
        <location filename="../mywidget.cpp" line="5016"/>
        <source>Serial Communication Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="528"/>
        <location filename="../mywidget.cpp" line="5047"/>
        <source>serial port 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="597"/>
        <source>BMS Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="650"/>
        <source>EMS Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="687"/>
        <location filename="../mywidget.cpp" line="5065"/>
        <source>Release Prohibited Charging Flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1026"/>
        <source>Backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1079"/>
        <source>Restore backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1312"/>
        <location filename="../mywidget.cpp" line="5199"/>
        <source>Insulation detection enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1360"/>
        <location filename="../mywidget.cpp" line="5205"/>
        <source>PrimaryFreq enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1376"/>
        <source>PsheddingFreq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1408"/>
        <location filename="../mywidget.cpp" line="5211"/>
        <source>Inertia enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="898"/>
        <location filename="../mywidget.cpp" line="5150"/>
        <source>Power change rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="41"/>
        <source>MPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="703"/>
        <location filename="../mywidget.cpp" line="5116"/>
        <source>DG ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="751"/>
        <location filename="../mywidget.cpp" line="5121"/>
        <source>DG FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="767"/>
        <location filename="../mywidget.cpp" line="5126"/>
        <source>Grid ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="783"/>
        <location filename="../mywidget.cpp" line="5131"/>
        <source>Grid FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="799"/>
        <location filename="../mywidget.cpp" line="5136"/>
        <source>Grid EDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="815"/>
        <location filename="../mywidget.cpp" line="5141"/>
        <source>Grid FDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="946"/>
        <source>ULFV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="994"/>
        <source>LLFV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1275"/>
        <location filename="../mywidget.cpp" line="5271"/>
        <source>Converter Anti-Reverse Flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1328"/>
        <location filename="../mywidget.cpp" line="5277"/>
        <source>System Anti-Reverse Flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1424"/>
        <location filename="../mywidget.cpp" line="5290"/>
        <source>QP curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1498"/>
        <source>External device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1522"/>
        <source>DI_1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1527"/>
        <source>DI_2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1532"/>
        <source>DI_3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1537"/>
        <source>DI_4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1542"/>
        <source>DI_5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1547"/>
        <source>DI_6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1552"/>
        <source>DO_1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1557"/>
        <source>DO_2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1562"/>
        <source>DO_3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1567"/>
        <source>Enable/Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1572"/>
        <source>NC/NO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1577"/>
        <source>Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1582"/>
        <source>Function description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1603"/>
        <source>Access Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1619"/>
        <source>Water logging</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1668"/>
        <source>Generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1769"/>
        <source>DCAC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1831"/>
        <location filename="../mywidget.ui" line="2328"/>
        <location filename="../mywidget.cpp" line="5461"/>
        <location filename="../mywidget.cpp" line="5687"/>
        <source>Debug variable 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1839"/>
        <source>1.5V Voltage revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1855"/>
        <location filename="../mywidget.ui" line="2416"/>
        <source>Inv on off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1868"/>
        <location filename="../mywidget.ui" line="2352"/>
        <location filename="../mywidget.cpp" line="5467"/>
        <location filename="../mywidget.cpp" line="5693"/>
        <source>Debug variable 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1876"/>
        <source> Bus Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1892"/>
        <location filename="../mywidget.cpp" line="5617"/>
        <source>Logic state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1905"/>
        <location filename="../mywidget.ui" line="2376"/>
        <location filename="../mywidget.cpp" line="5473"/>
        <location filename="../mywidget.cpp" line="5699"/>
        <location filename="../mywidget.cpp" line="5705"/>
        <source>Debug variable 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1913"/>
        <source>Grid A/AB Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1929"/>
        <source>Inv flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1942"/>
        <location filename="../mywidget.ui" line="2336"/>
        <source>Debug variable 1 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1950"/>
        <source>Grid B/BC Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1966"/>
        <location filename="../mywidget.cpp" line="5629"/>
        <source>Grid flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1979"/>
        <location filename="../mywidget.ui" line="2360"/>
        <source>Debug variable 2 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1987"/>
        <source>Grid C/CA Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2003"/>
        <location filename="../mywidget.cpp" line="5635"/>
        <source>Grid protect flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2016"/>
        <location filename="../mywidget.ui" line="2384"/>
        <source>Debug variable 3 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2024"/>
        <source>Output A Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2040"/>
        <location filename="../mywidget.ui" line="2456"/>
        <location filename="../mywidget.cpp" line="5641"/>
        <location filename="../mywidget.cpp" line="5723"/>
        <source>PV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2053"/>
        <location filename="../mywidget.ui" line="2344"/>
        <source>Debug memery var. 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2061"/>
        <source>Output B Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2077"/>
        <location filename="../mywidget.ui" line="2432"/>
        <location filename="../mywidget.cpp" line="5647"/>
        <location filename="../mywidget.cpp" line="5717"/>
        <source>DC bus flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2090"/>
        <source>Debug memery var. 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2098"/>
        <source>Output C Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2114"/>
        <location filename="../mywidget.ui" line="2408"/>
        <location filename="../mywidget.cpp" line="5653"/>
        <location filename="../mywidget.cpp" line="5711"/>
        <source>INT main flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2127"/>
        <location filename="../mywidget.ui" line="2368"/>
        <location filename="../mywidget.ui" line="2392"/>
        <source>Debug memery var. 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2135"/>
        <source>INV A Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2151"/>
        <location filename="../mywidget.ui" line="2464"/>
        <source>Parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2164"/>
        <source>Input Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2172"/>
        <source>INV B Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2188"/>
        <location filename="../mywidget.cpp" line="5665"/>
        <location filename="../mywidget.cpp" line="5783"/>
        <source>Monitor Order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2201"/>
        <source>Input. Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2209"/>
        <source>INV C Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2225"/>
        <source>BatInfor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2233"/>
        <source>INV A inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2241"/>
        <location filename="../mywidget.ui" line="2472"/>
        <source>Bat state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2249"/>
        <source>INV B inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2257"/>
        <source>INV C inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2267"/>
        <source>DCDC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2400"/>
        <source>Current ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2424"/>
        <source>Monitor order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2440"/>
        <source>DCONV logic </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2448"/>
        <source>Bat infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2753"/>
        <source>100kW - TS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3143"/>
        <location filename="../mywidget.ui" line="3317"/>
        <location filename="../mywidget.ui" line="3373"/>
        <location filename="../mywidget.ui" line="3463"/>
        <location filename="../mywidget.ui" line="3576"/>
        <location filename="../mywidget.ui" line="3823"/>
        <location filename="../mywidget.ui" line="3925"/>
        <location filename="../mywidget.ui" line="3959"/>
        <source>0V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3178"/>
        <location filename="../mywidget.ui" line="3611"/>
        <location filename="../mywidget.ui" line="3857"/>
        <location filename="../mywidget.ui" line="3891"/>
        <location filename="../mywidget.ui" line="3993"/>
        <source>0A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3200"/>
        <location filename="../mywidget.ui" line="4081"/>
        <source>0kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3351"/>
        <location filename="../mywidget.ui" line="3407"/>
        <location filename="../mywidget.ui" line="3441"/>
        <source>0A </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6095"/>
        <source>Please click on &apos;Alarm Information&apos; to enter the query interface
and view the details of the alarm information you have encountered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6124"/>
        <source>Alarm
Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8891"/>
        <source>A1: 
Generator turn on SOC(A1)
B1: 
Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8914"/>
        <source>Battery
power-on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8933"/>
        <source>Battery
power-off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9086"/>
        <source>ForceCharge On(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9094"/>
        <source>ForceCharge Off(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9740"/>
        <source>Hybrid Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10642"/>
        <source>M_01 Converter turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2890"/>
        <source>PV:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2963"/>
        <source>Battery charging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2976"/>
        <source>Battery discharging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2916"/>
        <location filename="../mywidget.ui" line="2950"/>
        <location filename="../mywidget.ui" line="2989"/>
        <location filename="../mywidget.ui" line="4157"/>
        <location filename="../mywidget.ui" line="4235"/>
        <location filename="../mywidget.ui" line="4248"/>
        <source>0kWh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4170"/>
        <source>Load:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4053"/>
        <source>Power meter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3629"/>
        <source>SOC:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9145"/>
        <source>A1: Generator turn on voltage
B1: Generator turn off voltage
A1 Setting range: [250, 900]
B1 Setting range: [250, 900]
Set rule:B1 - A1 ≥ 10V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1472"/>
        <source>CV Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1137"/>
        <source>Change Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="512"/>
        <source>BMS protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1185"/>
        <location filename="../mywidget.cpp" line="5329"/>
        <source>Rack</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1116"/>
        <location filename="../mywidget.cpp" line="5247"/>
        <source>Transformer Turns Ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1611"/>
        <source>ATS Signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1627"/>
        <source>Fire Fighting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1646"/>
        <location filename="../mywidget.ui" line="1690"/>
        <location filename="../mywidget.ui" line="1734"/>
        <source>N_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4510"/>
        <location filename="../mywidget.ui" line="5732"/>
        <location filename="../mywidget.ui" line="5966"/>
        <location filename="../mywidget.ui" line="6026"/>
        <location filename="../mywidget.ui" line="8975"/>
        <location filename="../mywidget.ui" line="9859"/>
        <location filename="../mywidget.cpp" line="3190"/>
        <location filename="../mywidget.cpp" line="3195"/>
        <location filename="../mywidget.cpp" line="4518"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4537"/>
        <location filename="../mywidget.ui" line="5759"/>
        <location filename="../mywidget.ui" line="5971"/>
        <location filename="../mywidget.ui" line="6031"/>
        <location filename="../mywidget.ui" line="9864"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4555"/>
        <location filename="../mywidget.ui" line="5777"/>
        <location filename="../mywidget.ui" line="5976"/>
        <location filename="../mywidget.ui" line="6036"/>
        <location filename="../mywidget.ui" line="9869"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4573"/>
        <location filename="../mywidget.ui" line="5795"/>
        <location filename="../mywidget.ui" line="5981"/>
        <location filename="../mywidget.ui" line="6041"/>
        <location filename="../mywidget.ui" line="9874"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4591"/>
        <location filename="../mywidget.ui" line="5813"/>
        <location filename="../mywidget.ui" line="5986"/>
        <location filename="../mywidget.ui" line="6046"/>
        <location filename="../mywidget.ui" line="9879"/>
        <source>5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4609"/>
        <location filename="../mywidget.ui" line="5831"/>
        <location filename="../mywidget.ui" line="5991"/>
        <location filename="../mywidget.ui" line="6051"/>
        <location filename="../mywidget.ui" line="9884"/>
        <source>6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4633"/>
        <location filename="../mywidget.ui" line="5855"/>
        <location filename="../mywidget.ui" line="5996"/>
        <location filename="../mywidget.ui" line="9889"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4651"/>
        <location filename="../mywidget.ui" line="5873"/>
        <location filename="../mywidget.ui" line="6001"/>
        <location filename="../mywidget.ui" line="9894"/>
        <source>8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4669"/>
        <location filename="../mywidget.ui" line="5891"/>
        <location filename="../mywidget.ui" line="6006"/>
        <source>9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4687"/>
        <location filename="../mywidget.ui" line="5909"/>
        <location filename="../mywidget.ui" line="6011"/>
        <source>10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4705"/>
        <location filename="../mywidget.ui" line="5927"/>
        <location filename="../mywidget.ui" line="6016"/>
        <source>11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4723"/>
        <location filename="../mywidget.ui" line="5945"/>
        <location filename="../mywidget.ui" line="6021"/>
        <source>12</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5000"/>
        <source>Converter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5216"/>
        <source>PV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5432"/>
        <source>Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5647"/>
        <source>Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6150"/>
        <source>Battery Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6227"/>
        <location filename="../mywidget.ui" line="6789"/>
        <location filename="../mywidget.ui" line="9216"/>
        <location filename="../mywidget.ui" line="9231"/>
        <location filename="../mywidget.ui" line="9899"/>
        <location filename="../mywidget.cpp" line="1335"/>
        <location filename="../mywidget.cpp" line="1374"/>
        <location filename="../mywidget.cpp" line="1414"/>
        <location filename="../mywidget.cpp" line="1466"/>
        <location filename="../mywidget.cpp" line="1509"/>
        <location filename="../mywidget.cpp" line="1645"/>
        <location filename="../mywidget.cpp" line="1792"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6246"/>
        <source>Bat voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6265"/>
        <location filename="../mywidget.cpp" line="2259"/>
        <source>Bat current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6284"/>
        <location filename="../mywidget.cpp" line="2263"/>
        <source>SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6303"/>
        <location filename="../mywidget.cpp" line="2267"/>
        <source>SOH</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6322"/>
        <source>Cell voltage (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6341"/>
        <source>Cell voltage (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6360"/>
        <source>Cell temp. (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6379"/>
        <source>Cell temp. (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6419"/>
        <location filename="../mywidget.ui" line="7021"/>
        <location filename="../mywidget.ui" line="9221"/>
        <location filename="../mywidget.ui" line="9236"/>
        <location filename="../mywidget.cpp" line="1295"/>
        <location filename="../mywidget.cpp" line="1335"/>
        <location filename="../mywidget.cpp" line="1374"/>
        <location filename="../mywidget.cpp" line="1414"/>
        <location filename="../mywidget.cpp" line="1466"/>
        <location filename="../mywidget.cpp" line="1509"/>
        <location filename="../mywidget.cpp" line="1792"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6446"/>
        <location filename="../mywidget.ui" line="6465"/>
        <location filename="../mywidget.ui" line="6484"/>
        <location filename="../mywidget.ui" line="6503"/>
        <location filename="../mywidget.ui" line="6522"/>
        <location filename="../mywidget.ui" line="6541"/>
        <location filename="../mywidget.ui" line="6560"/>
        <location filename="../mywidget.ui" line="6579"/>
        <location filename="../mywidget.ui" line="7046"/>
        <location filename="../mywidget.ui" line="7065"/>
        <location filename="../mywidget.ui" line="7084"/>
        <location filename="../mywidget.ui" line="7103"/>
        <location filename="../mywidget.ui" line="7122"/>
        <location filename="../mywidget.ui" line="7141"/>
        <location filename="../mywidget.ui" line="9355"/>
        <location filename="../mywidget.ui" line="9437"/>
        <location filename="../mywidget.ui" line="9510"/>
        <location filename="../mywidget.ui" line="9574"/>
        <location filename="../mywidget.ui" line="9638"/>
        <location filename="../mywidget.cpp" line="3181"/>
        <location filename="../mywidget.cpp" line="4496"/>
        <location filename="../mywidget.cpp" line="5116"/>
        <location filename="../mywidget.cpp" line="5121"/>
        <location filename="../mywidget.cpp" line="5126"/>
        <location filename="../mywidget.cpp" line="5131"/>
        <location filename="../mywidget.cpp" line="5136"/>
        <location filename="../mywidget.cpp" line="5141"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6604"/>
        <location filename="../mywidget.ui" line="7198"/>
        <location filename="../mywidget.ui" line="9226"/>
        <location filename="../mywidget.ui" line="9241"/>
        <location filename="../mywidget.cpp" line="1509"/>
        <location filename="../mywidget.cpp" line="1792"/>
        <source>Unit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6640"/>
        <location filename="../mywidget.ui" line="7222"/>
        <location filename="../mywidget.ui" line="7246"/>
        <location filename="../mywidget.ui" line="8757"/>
        <location filename="../mywidget.cpp" line="1524"/>
        <source>A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6694"/>
        <location filename="../mywidget.ui" line="6712"/>
        <source>mV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6730"/>
        <location filename="../mywidget.ui" line="6748"/>
        <source>℃</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7414"/>
        <source>prompt:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7455"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7608"/>
        <source>Alarm level:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1635"/>
        <location filename="../mywidget.ui" line="1679"/>
        <location filename="../mywidget.ui" line="1723"/>
        <location filename="../mywidget.ui" line="7677"/>
        <location filename="../mywidget.ui" line="7733"/>
        <location filename="../mywidget.cpp" line="3095"/>
        <location filename="../mywidget.cpp" line="5362"/>
        <location filename="../mywidget.cpp" line="5370"/>
        <location filename="../mywidget.cpp" line="5374"/>
        <location filename="../mywidget.cpp" line="5378"/>
        <location filename="../mywidget.cpp" line="5382"/>
        <source>Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6861"/>
        <location filename="../mywidget.cpp" line="2295"/>
        <source>Allowable charging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6885"/>
        <location filename="../mywidget.cpp" line="2299"/>
        <source>Allowable discharging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6909"/>
        <location filename="../mywidget.cpp" line="2303"/>
        <source>Allowable charging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6933"/>
        <location filename="../mywidget.cpp" line="2307"/>
        <source>Allowable discharging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7814"/>
        <source>Data report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7927"/>
        <source>yyyy-MM-dd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7959"/>
        <location filename="../mywidget.cpp" line="5812"/>
        <source>Y  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7978"/>
        <location filename="../mywidget.cpp" line="5824"/>
        <source>M  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7997"/>
        <location filename="../mywidget.cpp" line="5836"/>
        <source>D  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8023"/>
        <location filename="../mywidget.cpp" line="5818"/>
        <source>Y  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8042"/>
        <location filename="../mywidget.cpp" line="5830"/>
        <source>M  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8061"/>
        <location filename="../mywidget.cpp" line="5842"/>
        <source>D  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8077"/>
        <source>Export Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8097"/>
        <source>Note:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8117"/>
        <source>Log.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8138"/>
        <source>Out put file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8180"/>
        <source>Report.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8215"/>
        <source>Data To Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5854"/>
        <source>OperationLog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8444"/>
        <source>History Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8362"/>
        <location filename="../mywidget.ui" line="8481"/>
        <source>Operation Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8264"/>
        <source>status:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8546"/>
        <source>DC/AC Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8621"/>
        <location filename="../mywidget.cpp" line="3212"/>
        <source>Control mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8637"/>
        <source>Constant power (AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8653"/>
        <location filename="../mywidget.cpp" line="3217"/>
        <source>Machine number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8685"/>
        <source>Parallel </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8701"/>
        <location filename="../mywidget.cpp" line="3190"/>
        <source>Output power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="106"/>
        <location filename="../mywidget.ui" line="2728"/>
        <source>Change
Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1587"/>
        <source>Dry Contact EPO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1595"/>
        <source>Dry Contact Shutdown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1712"/>
        <location filename="../mywidget.ui" line="1756"/>
        <source>Reserved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4287"/>
        <source>Grid sell:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4222"/>
        <source>Grid buy:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3645"/>
        <source>0%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4385"/>
        <source>Converter Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5670"/>
        <source>Converter State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6064"/>
        <source>Converter Alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6813"/>
        <location filename="../mywidget.cpp" line="2287"/>
        <source>Charging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6837"/>
        <location filename="../mywidget.cpp" line="2291"/>
        <source>Discharging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7490"/>
        <source>Level1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7532"/>
        <source>Level2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7567"/>
        <source>Level3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7649"/>
        <source>Charging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7705"/>
        <source>Discharging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8159"/>
        <source>Record.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8305"/>
        <source>u disk disconnect!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8339"/>
        <location filename="../mywidget.cpp" line="5848"/>
        <source>History Records</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8400"/>
        <location filename="../mywidget.cpp" line="5860"/>
        <source>Electricity Statistical Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8669"/>
        <source>Working mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8733"/>
        <location filename="../mywidget.cpp" line="3195"/>
        <source>Output reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8749"/>
        <location filename="../mywidget.cpp" line="3200"/>
        <source>Constant current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8765"/>
        <location filename="../mywidget.cpp" line="3205"/>
        <source>Constant voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8801"/>
        <source>DC/DC Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8820"/>
        <source>Battery setup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8993"/>
        <source>DOD_OnGrid(%):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9001"/>
        <source>DOD_OffGrid(%):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9009"/>
        <source>Charge Volt. upper Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9017"/>
        <source>Charge Volt. upper Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9025"/>
        <source>Discharge Volt. lower Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9033"/>
        <source>Discharge Volt. lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9049"/>
        <source>Charge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9057"/>
        <source>Discharge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9065"/>
        <source>Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9073"/>
        <source>Generator turn on SOC(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9179"/>
        <location filename="../mywidget.ui" line="9184"/>
        <location filename="../mywidget.ui" line="9189"/>
        <location filename="../mywidget.ui" line="9194"/>
        <location filename="../mywidget.ui" line="9199"/>
        <location filename="../mywidget.ui" line="9204"/>
        <location filename="../mywidget.ui" line="9209"/>
        <source>New Row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9246"/>
        <location filename="../mywidget.cpp" line="3370"/>
        <source>Capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9254"/>
        <source>Ah</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9262"/>
        <source>Grid off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9278"/>
        <source>Cell number(2V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9294"/>
        <source>Grid on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9310"/>
        <location filename="../mywidget.cpp" line="3380"/>
        <source>Battery float voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9326"/>
        <source>Shutdown voltage point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9392"/>
        <location filename="../mywidget.cpp" line="3385"/>
        <source>Battery filling voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9408"/>
        <source>Mending center point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9474"/>
        <location filename="../mywidget.cpp" line="3390"/>
        <source>Charge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9482"/>
        <location filename="../mywidget.ui" line="9546"/>
        <location filename="../mywidget.ui" line="9690"/>
        <location filename="../mywidget.ui" line="9722"/>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9490"/>
        <source>Temperature filling coefficient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9538"/>
        <location filename="../mywidget.cpp" line="3395"/>
        <source>Discharge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9554"/>
        <source>Mending allowable setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9602"/>
        <location filename="../mywidget.cpp" line="3400"/>
        <source>Generator turn off voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9618"/>
        <source>Temperature alarm upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9666"/>
        <location filename="../mywidget.cpp" line="3405"/>
        <source>Generator turn on voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9682"/>
        <location filename="../mywidget.cpp" line="3445"/>
        <source>Uniform charging and flushing current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9714"/>
        <location filename="../mywidget.cpp" line="3450"/>
        <source>Float turn uniform charging current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9793"/>
        <source>Hybrid Mode Enable：</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9824"/>
        <source>SystemInformation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9832"/>
        <source>Version:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4343"/>
        <source>Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4347"/>
        <source>DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4351"/>
        <source>DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4355"/>
        <source>DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4359"/>
        <source>DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4363"/>
        <source>DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4367"/>
        <source>DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9994"/>
        <source>Network:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10056"/>
        <source>interface:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10103"/>
        <source>Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10078"/>
        <source>eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10125"/>
        <source>502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10292"/>
        <source>Apply and Reatart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10155"/>
        <location filename="../mywidget.cpp" line="5942"/>
        <source>DHCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9904"/>
        <location filename="../mywidget.cpp" line="1645"/>
        <source>System Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9909"/>
        <source>   Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9922"/>
        <source>   DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9930"/>
        <source>   DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9938"/>
        <source>   DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9951"/>
        <source>   DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9959"/>
        <source>   DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9967"/>
        <source>   DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9975"/>
        <source>   SN:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10171"/>
        <location filename="../mywidget.cpp" line="5920"/>
        <source>STATIC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10187"/>
        <source>ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10200"/>
        <source>netmask:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10213"/>
        <source>gateway:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10226"/>
        <source>Server ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10239"/>
        <source>192 . 168 . 1 . 100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10252"/>
        <source>255 . 255 . 255 . 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10265"/>
        <source>192 . 168 .  1  . 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10278"/>
        <source> 192 . 168 . 1  . 200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10351"/>
        <source>DCAC converter 
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10398"/>
        <source>DCAC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10448"/>
        <source>DCDC converter
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10495"/>
        <source>DCDC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10589"/>
        <source>Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10689"/>
        <source>Converter2 Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10762"/>
        <source>640V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10819"/>
        <source>780V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10858"/>
        <source>639V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10868"/>
        <source>150A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10928"/>
        <source>246A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10967"/>
        <source>202A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1146"/>
        <source>切换语言</source>
        <translation>Change Language</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1278"/>
        <location filename="../mywidget.cpp" line="1320"/>
        <location filename="../mywidget.cpp" line="2598"/>
        <source>Leakage current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1278"/>
        <location filename="../mywidget.cpp" line="2580"/>
        <source>IGBT temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1278"/>
        <source>Env. temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1280"/>
        <location filename="../mywidget.cpp" line="2609"/>
        <source>PV voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1280"/>
        <location filename="../mywidget.cpp" line="2618"/>
        <source>PV current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1280"/>
        <location filename="../mywidget.cpp" line="2627"/>
        <source>PV power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1281"/>
        <location filename="../mywidget.cpp" line="2636"/>
        <source>Battery voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1281"/>
        <location filename="../mywidget.cpp" line="2645"/>
        <source>Battery current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1281"/>
        <location filename="../mywidget.cpp" line="2654"/>
        <source>Battery power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1282"/>
        <location filename="../mywidget.cpp" line="2663"/>
        <source>Bus voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1282"/>
        <location filename="../mywidget.cpp" line="2672"/>
        <source>Bus current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1295"/>
        <source>Inverter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1295"/>
        <source>DC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1323"/>
        <source>PositiveInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1322"/>
        <source>Bus_H_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1322"/>
        <source>Bus_H_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1322"/>
        <source>Bus_L_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1322"/>
        <source>Bus_L_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1323"/>
        <source>NegativeInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1323"/>
        <location filename="../mywidget.cpp" line="2802"/>
        <source>IGBT Temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1445"/>
        <location filename="../mywidget.cpp" line="3054"/>
        <source>DC input breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1445"/>
        <location filename="../mywidget.cpp" line="3058"/>
        <source>DC contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1445"/>
        <source>Maintenance Bypass breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1446"/>
        <location filename="../mywidget.cpp" line="3072"/>
        <source>Output contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1446"/>
        <location filename="../mywidget.cpp" line="3076"/>
        <source>Grid breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1446"/>
        <location filename="../mywidget.cpp" line="3068"/>
        <source>Output breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1449"/>
        <location filename="../mywidget.cpp" line="3095"/>
        <source>DCAC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1449"/>
        <location filename="../mywidget.cpp" line="3099"/>
        <source>DC Soft start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1449"/>
        <location filename="../mywidget.cpp" line="1453"/>
        <source>Converter status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1449"/>
        <location filename="../mywidget.cpp" line="3107"/>
        <source>Reactive power Regulation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1450"/>
        <location filename="../mywidget.cpp" line="3111"/>
        <source>LVRT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1450"/>
        <location filename="../mywidget.cpp" line="3115"/>
        <source>DI1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1450"/>
        <location filename="../mywidget.cpp" line="3119"/>
        <source>DI2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1450"/>
        <location filename="../mywidget.cpp" line="3123"/>
        <source>DI3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1450"/>
        <location filename="../mywidget.cpp" line="3127"/>
        <source>DI4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1450"/>
        <location filename="../mywidget.cpp" line="3131"/>
        <source>DI5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1450"/>
        <location filename="../mywidget.cpp" line="3135"/>
        <source>DI6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1453"/>
        <source>Contactor status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1453"/>
        <source>Contactor status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1452"/>
        <location filename="../mywidget.cpp" line="3145"/>
        <source>Run mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1452"/>
        <location filename="../mywidget.cpp" line="3141"/>
        <source>DCDC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1452"/>
        <source>Soft start status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1452"/>
        <source>Soft start status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1518"/>
        <location filename="../mywidget.cpp" line="3238"/>
        <source>Work parttern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1518"/>
        <location filename="../mywidget.cpp" line="3243"/>
        <source>Boost or Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1605"/>
        <location filename="../mywidget.cpp" line="3459"/>
        <source>Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1605"/>
        <source>StartTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1605"/>
        <source>EndTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1605"/>
        <location filename="../mywidget.cpp" line="3462"/>
        <source>Features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3463"/>
        <source>Power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1662"/>
        <source>PV power generation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1662"/>
        <source>Battery charge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1663"/>
        <source>Battery discharge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1665"/>
        <source> </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1665"/>
        <source>Day(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1665"/>
        <source>Month(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1665"/>
        <source>Year(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1665"/>
        <source>Total(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1695"/>
        <location filename="../mywidget.cpp" line="4497"/>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1695"/>
        <location filename="../mywidget.cpp" line="4499"/>
        <source>Start Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1695"/>
        <location filename="../mywidget.cpp" line="4501"/>
        <source>End Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1695"/>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1809"/>
        <source>Advance setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2255"/>
        <source>Bat volage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1177"/>
        <location filename="../mywidget.cpp" line="2234"/>
        <location filename="../mywidget.cpp" line="2256"/>
        <location filename="../mywidget.cpp" line="2260"/>
        <location filename="../mywidget.cpp" line="2264"/>
        <location filename="../mywidget.cpp" line="2268"/>
        <location filename="../mywidget.cpp" line="2272"/>
        <location filename="../mywidget.cpp" line="2276"/>
        <location filename="../mywidget.cpp" line="2280"/>
        <location filename="../mywidget.cpp" line="2284"/>
        <location filename="../mywidget.cpp" line="2288"/>
        <location filename="../mywidget.cpp" line="2292"/>
        <location filename="../mywidget.cpp" line="2296"/>
        <location filename="../mywidget.cpp" line="2300"/>
        <location filename="../mywidget.cpp" line="2304"/>
        <location filename="../mywidget.cpp" line="2308"/>
        <location filename="../mywidget.cpp" line="2312"/>
        <location filename="../mywidget.cpp" line="2316"/>
        <location filename="../mywidget.cpp" line="2320"/>
        <location filename="../mywidget.cpp" line="2334"/>
        <location filename="../mywidget.cpp" line="2338"/>
        <location filename="../mywidget.cpp" line="2342"/>
        <location filename="../mywidget.cpp" line="2346"/>
        <location filename="../mywidget.cpp" line="2350"/>
        <location filename="../mywidget.cpp" line="2354"/>
        <location filename="../mywidget.cpp" line="2358"/>
        <location filename="../mywidget.cpp" line="2514"/>
        <location filename="../mywidget.cpp" line="5802"/>
        <location filename="../mywidget.cpp" line="5807"/>
        <location filename="../mywidget.cpp" line="5813"/>
        <location filename="../mywidget.cpp" line="5819"/>
        <location filename="../mywidget.cpp" line="5825"/>
        <location filename="../mywidget.cpp" line="5831"/>
        <location filename="../mywidget.cpp" line="5837"/>
        <location filename="../mywidget.cpp" line="5843"/>
        <location filename="../mywidget.cpp" line="5849"/>
        <location filename="../mywidget.cpp" line="5855"/>
        <location filename="../mywidget.cpp" line="5861"/>
        <location filename="../mywidget.cpp" line="5867"/>
        <location filename="../mywidget.cpp" line="5872"/>
        <location filename="../mywidget.cpp" line="5877"/>
        <location filename="../mywidget.cpp" line="5888"/>
        <location filename="../mywidget.cpp" line="5894"/>
        <location filename="../mywidget.cpp" line="5900"/>
        <location filename="../mywidget.cpp" line="5920"/>
        <location filename="../mywidget.cpp" line="5942"/>
        <location filename="../mywidget.cpp" line="5950"/>
        <location filename="../mywidget.cpp" line="5955"/>
        <location filename="../mywidget.cpp" line="5960"/>
        <location filename="../mywidget.cpp" line="5965"/>
        <location filename="../mywidget.cpp" line="5970"/>
        <location filename="../mywidget.cpp" line="5975"/>
        <location filename="../mywidget.cpp" line="6024"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1276"/>
        <source>Inv. Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1276"/>
        <source>Inv. Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1276"/>
        <source>Inv. Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1277"/>
        <source>Inv. Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1277"/>
        <source>Inv. Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1277"/>
        <source>Inv. Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1319"/>
        <source>PV Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1319"/>
        <source>PV Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1319"/>
        <source>PV Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1320"/>
        <source>PV Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1320"/>
        <source>PV Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1320"/>
        <source>PV Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1358"/>
        <location filename="../mywidget.cpp" line="2834"/>
        <source>Grid Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1358"/>
        <location filename="../mywidget.cpp" line="2843"/>
        <source>Grid Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1358"/>
        <location filename="../mywidget.cpp" line="2852"/>
        <source>Grid Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1359"/>
        <location filename="../mywidget.cpp" line="2861"/>
        <source>Grid Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1359"/>
        <location filename="../mywidget.cpp" line="2870"/>
        <source>Grid Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1359"/>
        <location filename="../mywidget.cpp" line="2879"/>
        <source>Grid Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1398"/>
        <location filename="../mywidget.cpp" line="2940"/>
        <source>Load Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1398"/>
        <location filename="../mywidget.cpp" line="2949"/>
        <source>Load Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1398"/>
        <location filename="../mywidget.cpp" line="2958"/>
        <source>Load Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1399"/>
        <location filename="../mywidget.cpp" line="2967"/>
        <source>Load Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1399"/>
        <location filename="../mywidget.cpp" line="2976"/>
        <source>Load Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1399"/>
        <location filename="../mywidget.cpp" line="2985"/>
        <source>Load Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1447"/>
        <location filename="../mywidget.cpp" line="3080"/>
        <source>Start Diesel Generator Signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1605"/>
        <location filename="../mywidget.cpp" line="3474"/>
        <source>Peak-Flat-Valley</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1605"/>
        <source>Power(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1662"/>
        <source>Load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1663"/>
        <source>Grid buy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1663"/>
        <source>Grid sell</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2234"/>
        <source>Stand-by</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2271"/>
        <source>Cell voltage(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2275"/>
        <source>Cell voltage(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2279"/>
        <source>Cell temp.(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2283"/>
        <source>Cell temp.(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2311"/>
        <source>Alarm level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2333"/>
        <source>Interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2334"/>
        <source>This is the interface number, which defaults to eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2337"/>
        <source>Port</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2338"/>
        <source>This is the port number, default 502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2341"/>
        <source>Ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2342"/>
        <source>This is the IP address. The default is 192.168.1.100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2345"/>
        <source>Netmask</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2346"/>
        <source>This is the subnet mask, 255.255.255.0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2349"/>
        <source>Gateway</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2350"/>
        <source>This is the gateway. The default is 192.168.1.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2353"/>
        <source>Serber ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2354"/>
        <source>This is the server IP address. The default is 192.168.1.200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2357"/>
        <source>Apply and Restart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2358"/>
        <source>This is the application and restart the system, click will restart the system, if there is an upgrade, will use the new program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2544"/>
        <source>Inv. voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2698"/>
        <source>Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2707"/>
        <source>Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2716"/>
        <source>Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2725"/>
        <source>Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2734"/>
        <source>Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2743"/>
        <source>Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2767"/>
        <source>Positive bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2776"/>
        <source>Negative bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2785"/>
        <source>Positive bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2794"/>
        <source>Negative bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2892"/>
        <source>Active power P on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2901"/>
        <source>Reactive power Q on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2910"/>
        <source>Apparent power S on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2919"/>
        <source>Power factor PF on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2927"/>
        <source>Frequency on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2998"/>
        <source>Active power P on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3007"/>
        <source>Reactive power Q on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3016"/>
        <source>Apparent power S on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3025"/>
        <source>Power factor PF on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3034"/>
        <source>Frequency on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3054"/>
        <location filename="../mywidget.cpp" line="3058"/>
        <location filename="../mywidget.cpp" line="3063"/>
        <location filename="../mywidget.cpp" line="3068"/>
        <location filename="../mywidget.cpp" line="3072"/>
        <location filename="../mywidget.cpp" line="3076"/>
        <location filename="../mywidget.cpp" line="3161"/>
        <source>On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3055"/>
        <source>There are two states for a DC circuit breaker: On, Off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3059"/>
        <source>The DC contactor has two states: On, Off. After the soft start of the DC side is completed, the DC contactor closes. When the DC side of the battery is disconnected and the voltage of the DC bus drops to a certain level, the DC contactor opens.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3063"/>
        <source>Maintenance Bypass Breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9812"/>
        <location filename="../mywidget.cpp" line="3080"/>
        <location filename="../mywidget.cpp" line="3084"/>
        <location filename="../mywidget.cpp" line="3088"/>
        <location filename="../mywidget.cpp" line="3107"/>
        <location filename="../mywidget.cpp" line="3115"/>
        <location filename="../mywidget.cpp" line="3119"/>
        <location filename="../mywidget.cpp" line="3123"/>
        <location filename="../mywidget.cpp" line="3127"/>
        <location filename="../mywidget.cpp" line="3131"/>
        <location filename="../mywidget.cpp" line="3135"/>
        <location filename="../mywidget.cpp" line="3141"/>
        <location filename="../mywidget.cpp" line="3222"/>
        <location filename="../mywidget.cpp" line="5347"/>
        <location filename="../mywidget.cpp" line="5366"/>
        <source>Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3099"/>
        <source>Not starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3103"/>
        <source>OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3103"/>
        <location filename="../mywidget.cpp" line="3165"/>
        <source>Converter Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3176"/>
        <source>automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3181"/>
        <source>Constant power(AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3200"/>
        <source>100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3205"/>
        <source>600</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3212"/>
        <source>Local</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3222"/>
        <source>Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3223"/>
        <source>Parallel operation: When converter operates at grid-off mode in parallel, this item needs to be enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5887"/>
        <source>Battery power-on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5888"/>
        <source>Battery power-on: This function allows the BMS to send a command to close the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5893"/>
        <source>Battery power-off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5894"/>
        <source>Battery power-off: This function allows the BMS to send a command to open the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5900"/>
        <source>Hybrid mode: When the function of running according to the schedule is enabled, this option is enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3238"/>
        <source>MPPT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3064"/>
        <source>There are two states for the maintenance bypass circuit breaker: On, Off. This circuit breaker is only used for machine maintenance. If maintenance is required, please contact the maintenance personnel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3069"/>
        <source>The output circuit breaker has two states: On, Off. It can only be manually opened and closed. If there is an overcurrent in the output circuit breaker, it will trip.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3073"/>
        <source>The output contactor has two states: On, Off. The output contactor closes after the soft start on the inv. side is completed. The output contactor opens when the converter is shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3077"/>
        <source>The power grid circuit breaker has two states: On, Off; The power grid circuit breaker can only be manually disconnected. If the power grid circuit breaker overflows, the power grid circuit breaker may trip.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3157"/>
        <source>Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3158"/>
        <source>DC module high voltage contactor has two states: On, Off; When there is voltage on the high voltage side, close the high voltage contactor; Otherwise, the high voltage contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3268"/>
        <source>300</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3269"/>
        <source>DC Constant Voltage Value: Constant voltage target, range 200V-850V.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3274"/>
        <source>60</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3275"/>
        <source>DC Constant Current Value: Constant current target, range (0A - 120A) * n (n is the number of online modules).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3305"/>
        <source>Charge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3312"/>
        <source>Disc_Vol_lower_Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3319"/>
        <source>Discharge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3326"/>
        <source>Charge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3333"/>
        <source>Discharge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3371"/>
        <source>Capacity, the capacity of the lead-acid battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3375"/>
        <source>Cell_number_2V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3381"/>
        <source>This is the floating charge voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3386"/>
        <source>This is the filling voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3466"/>
        <source>End time: The system stops automatically running when the system reaches this time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4382"/>
        <source>Today&apos;s photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4386"/>
        <source>Monthly photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4390"/>
        <source>Annual photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4394"/>
        <source>Total photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4400"/>
        <source>Daily load electricity consumption </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4401"/>
        <source>Today&apos;s electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4404"/>
        <source>Monthly load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4405"/>
        <source>Monthly electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4408"/>
        <source>Annual load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4409"/>
        <source>Annual electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4412"/>
        <source>Total load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4413"/>
        <source>Total electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4420"/>
        <source>Today&apos;s battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4424"/>
        <source>Monthly battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4428"/>
        <source>Annual battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4432"/>
        <source>Total battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4439"/>
        <source>Today&apos;s battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4443"/>
        <source>Monthly battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4447"/>
        <source>Annual battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4451"/>
        <source>Total battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4457"/>
        <source>Grid buy Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4461"/>
        <source>Grid buy Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4465"/>
        <source>Grid buy Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4469"/>
        <source>Grid buy Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4476"/>
        <source>Grid sell Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4480"/>
        <source>Grid sell Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4484"/>
        <source>Grid sell Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4488"/>
        <source>Grid sell Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4500"/>
        <source>Event start time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4502"/>
        <source>Event end time: &apos;... &apos;indicates that there is no end time,&apos;-&apos; indicates that the event is in progress.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4505"/>
        <source>event description.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4508"/>
        <source>Converter Standby.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4509"/>
        <source>The grid contactor connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4510"/>
        <source>The grid breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4511"/>
        <source>The output breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4512"/>
        <source>Buck not softened</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4513"/>
        <source>Contactor off buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4515"/>
        <source>The grid breaker disconnected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1732"/>
        <location filename="../mywidget.cpp" line="4818"/>
        <source>Record Event</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8605"/>
        <location filename="../mywidget.cpp" line="3176"/>
        <source>Grid conected mode of the converter </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3177"/>
        <source>When &quot;Auto&quot; is selected, the converter will automatically switch between grid-on and grid-off. When the grid side is normal, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter operates in grid-off mode (VF).
When &quot;Grid-on&quot; is selected, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter will shut down.
When &quot;Grid-off&quot; is selected, the converter operates in grid-off mode (VF).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3182"/>
        <source>AC Side Power: You can control the charging and discharging power of the battery from the AC side by modifying this value. When the advanced setting for power control mode is set to Constant Power mode (CP_N&amp;P), a positive value indicates discharging, and a negative value indicates charging.
For example, setting it to -5 means that the AC side will charge the battery at a power of -5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3185"/>
        <source>Batter
priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3191"/>
        <source>This item can modify the power factor, where the power factor is equal to the ratio of active power to apparent power. A positive value indicates leading reactive power, while a negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3196"/>
        <source>This parameter can change the reactive power Q, positive value indicates leading reactive power, negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3201"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant current and modify the current value. Converter will charge or discharge the battery with this current value. Positive values represent discharging, while negative values represent charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3206"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant voltage and modify the voltage value. Converter will operate at the constant voltage value and function as a constant voltage source.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3213"/>
        <source>Local: Converter control through HMI, In this mode, the EMS can only read and cannot write.
Remote: In remote mode, the EMS can perform both read and write control.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3217"/>
        <source>M_01</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3218"/>
        <source>Device number: You can set ID number, which can be set within the range of M_01 to M_12.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3239"/>
        <source>DCDC module working modes include standby, constant voltage (CV), constant current (CC), and maximum power point tracking (MPPT).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3244"/>
        <source>DCDC module operating modes: Buck, Boost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3284"/>
        <source>Grid-on DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3285"/>
        <source>Grid-on DOD, allowable depth of discharge in grid-on mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3291"/>
        <source>Grid-off DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3292"/>
        <source>Grid-off DOD, allowable depth of discharge in grid-off mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3298"/>
        <source>Charging voltage upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3299"/>
        <source>Charging voltage upper limit: When the battery total voltage reaches this value during charging, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3306"/>
        <source>Charging voltage upper limit hysteresis: When the battery is charging, if the battery total voltage reaches the charging voltage upper limit, the converter will shut down. When the battery total voltage drops below the charging voltage upper limit minus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3313"/>
        <source>Discharge voltage lower limit: When the battery total voltage reaches this value during discharge, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3320"/>
        <source>Discharge voltage lower limit hysteresis: When the battery is discharging, if the battery total voltage drops below the discharge voltage lower limit, the converter will shut down. When the battery total voltage exceeds the discharge voltage lower limit plus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3327"/>
        <source>Charging current limit: The maximum allowable current on the battery side to prevent overcurrent during charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3334"/>
        <source>Discharging current limit: The maximum allowable current on the battery side to prevent overcurrent during discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3340"/>
        <source>Generator turn off SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3341"/>
        <source>When the specified SOC is reached, the diesel generator shuts down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3347"/>
        <source>Generator turn on SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3348"/>
        <source>When the specified SOC is reached, the diesel generator starts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3376"/>
        <source>The number of battery cells connected in series in the battery stack (based on a 2V unit).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3391"/>
        <source>Charging Current Limit: The maximum allowable current on the battery side to prevent overcurrent during charging. (Upper limit: 0.25C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3396"/>
        <source>Discharge Current Limit: The maximum allowable current on the battery side to prevent overcurrent during discharge. (Upper limit: 0.5C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3401"/>
        <source>Generator Shutdown Voltage: When the specified voltage is reached, the diesel generator will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3406"/>
        <source>Generator Start Voltage: When the specified voltage is reached, the diesel generator will start up.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3410"/>
        <source>Grid-off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3411"/>
        <source>Grid-off discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3415"/>
        <source>Grid-on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3416"/>
        <source>Grid-on discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3446"/>
        <source>Uniform charging to flushing current: Upper limit of 0.025C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3451"/>
        <source>Float turn to uniform charging current: Upper limit of 0.15C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3467"/>
        <source>The function that will perform this function during business hours, there are six to choose from, They are System for self-use, battery Batter priority, Peak shaving, Output PV power,Economic model.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4819"/>
        <source>System settings operation records.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4943"/>
        <source>Battery Types: Lithium, Lead-Acid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4950"/>
        <source>Battery Communication Modes: None, RS485, CAN, Ethernet. (Note: Due to the fact that CAN and Ethernet both have only one port, the battery communication mode and EMS communication mode cannot be selected as &quot;CAN&quot; or &quot;Ethernet&quot; simultaneously.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4957"/>
        <source>Constant Voltage (CV) mode: The converter will operate in constant voltage mode on the DC side.
Constant Current (CC) mode: The converter will operate in constant current mode on the DC side.
Constant Power AC (CP_AC) mode: The power level can be set at &quot;constant power.&quot; The value represents the power level, positive for discharge and negative for charge. For example, setting it to -5 means that the AC side will charge the battery with a power of 5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Conversely, setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.
Reserved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4963"/>
        <source>EMS communication methods: RS485, CAN, Ethernet.
The setting communication methods are readable and writable in remote mode, and only readable in local mode. The unselected communication methods are only readable in both remote and local mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4970"/>
        <source>Output Power Limit: Restricts the upper limit of the set value for the power on the AC side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4985"/>
        <source>Charging SOC:                                             
 (1) At the self-use mode, when the battery SOC is lower than the charging SOC, the converter maintains the battery SOC at this value.                                             
 (2) At the battery priority mode, the ECP or FCP state is determined based on the current SOC.                                             
 (3) At the optimal mode, when the battery SOC is lower than the charging SOC, the converter enters the FCP state and starts charging the battery. When the current SOC is greater than or equal to the discharge SOC, the converter exits the FCP state and enters the ECP state.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4995"/>
        <source>Discharge SOC: When the SOC is greater than the discharge SOC, the FCP state is released.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5002"/>
        <source>Diesel Generator: Rated Power of the Diesel Generator.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5008"/>
        <source>Energy Priority: In the self-use mode,                                        when selecting battery priority over the grid, the load is powered by the battery as a priority.                                        When selecting the grid priority over the battery, the load is powered by the grid as a priority.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5017"/>
        <source>Serial Communication Address: The default value is 1, adjustable range is between 1 and 255, used for matching address during serial communication.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5023"/>
        <source>Serial Port 2 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400.                                         The default baud rate for Serial Port 2 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5030"/>
        <source>Serial Port 3 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 3 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5036"/>
        <source>Serial Port 4 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 4 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5042"/>
        <source>Serial Port 5 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 5 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5048"/>
        <source>Serial Port 6 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 6 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5054"/>
        <source>CAN1 Port: The baud rate for internal communication is 500 kbps by default and cannot be modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5060"/>
        <source>CAN2 Port: Optional baud rates for the CAN2 port include 100, 125, 250, 500, and 800 kbps, with a default baud rate of 500 kbps.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5066"/>
        <source>When the battery SOC is below the selected value, there are four options: Follow battery, 95%, 90%, 85%.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5074"/>
        <source>Protocol version: View the current protocol version. The default protocol version number is V1.0.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5080"/>
        <source>User password: Available for resetting the user password. The default user password is 123456. (Note: The user password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5086"/>
        <source>Admin password: Available for resetting the admin password. The default admin password is 888888. (Note: The admin password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5117"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5122"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5127"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5132"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5137"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5142"/>
        <source>The discharge zone limits the discharge power of the system to the power grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5151"/>
        <source>Power change rate: the rate at which power changes within a second .</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5156"/>
        <source>Upper limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5157"/>
        <source>Upper limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as 0.2, 0.5, 1, 5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5162"/>
        <source>Lower limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5163"/>
        <source>Lower limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as-0.5, -1, -2, -5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5169"/>
        <source>Upper limit of voltage protection range: The maximum range of voltage variation allowed on the AC side, which can be selected as 10, 15, 20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5175"/>
        <source>Lower limit of voltage protection range: The minimum range of voltage variation allowed on the AC side, which can be selected as -10, -15, -20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5181"/>
        <source>High voltage ride through(HVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5187"/>
        <source>Low voltage ride through(LVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5193"/>
        <source>Prevent islanding effect. When islanding effect is detected (in a photovoltaic grid-on system, when a power outage occurs in the main grid, and the PV grid-connected converter generates power that matches the local load on the low-voltage side of the grid, it can easily sustain power generation independently, resulting in an &apos;island&apos; phenomenon, which endangers the safety of maintenance personnel), the converter automatically shuts down. The options for this feature can be set as &apos;Enable&apos; or &apos;prohibited&apos;.(Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5200"/>
        <source>Insulation detection enable, the insulation resistance should be greater than 33KΩ for normal start-up and operation. If it is less than 33KΩ, it should not start, and an alarm should be triggered. By default, it is disabled, but can be set as &apos;Enable&apos; or &apos;prohibited&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5206"/>
        <source>Primary frequency control enable: When the grid frequency deviates from the rated value, the active power is controlled to increase or decrease in order to maintain the grid frequency at the rated value. It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5212"/>
        <source>Rotational inertia enable: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5224"/>
        <source>Converter Model: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5230"/>
        <source>The rated capacity of the converter shall be based on the factory value and cannot be changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5236"/>
        <source>Output Frequency Level: Default 50Hz, typically 50Hz or 60Hz.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5242"/>
        <source>Output Voltage Level: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5248"/>
        <source>Transformer Voltage Ratio: To be determined by the factory nameplate, not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5254"/>
        <source>Reactive Power Output Mode: Default non-adjustable, options include Power Factor, Reactive Power, non-adjustable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5272"/>
        <source>Converter Anti-Reverse Flow: Enable, Disable;
Enabling prevents converter current from flowing into the grid, while Disabling allows converter current to flow into the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5278"/>
        <source>System Anti-Reverse Flow: Enable, Disable;
Enabling prevents system current from flowing into the grid, while Disabling allows system current to flow into the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5285"/>
        <source>Over-frequency load shedding: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5291"/>
        <source>QP curve: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5297"/>
        <source>Constant voltage parallel operation enable: It can be selected as enabled or disabled.  (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5303"/>
        <source>Number of modules, default 1(invalid setting).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5313"/>
        <source>Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5336"/>
        <source>Maximum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5342"/>
        <source>Minimum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5348"/>
        <source>DCDC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5356"/>
        <source>When the dry contact is enabled, the device will perform the selected action when there is a change in the signal.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5357"/>
        <source>Input Dry Contact:                       
Enabled: Triggers the Action when the dry contact detects a state other than the specified NO/NC.                      
Disabled: No action is taken when the dry contact detects a state other than the specified NO/NC.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5813"/>
        <source>To view the data for the previous year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5819"/>
        <source>To view the data for the next year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5825"/>
        <source>To view the data of the previous month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5831"/>
        <source>To view the data for the next month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5837"/>
        <source>To view the data of the previous day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5843"/>
        <source>To view the data of the next day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5849"/>
        <source>Export History Records, click here to export the history records to a U disk. The exported file will be named Record.csv, and it needs to be opened with Excel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8429"/>
        <location filename="../mywidget.cpp" line="5866"/>
        <source>Eject U disk</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5867"/>
        <source>Eject U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5950"/>
        <source>The switch to turn on the DCDC converter, click to activate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5955"/>
        <source>The switch to turn off the DCDC converter, click to deactivate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5960"/>
        <source>The switch to turn on the DCAC converter, click to activate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5965"/>
        <source>The switch to turn off the DCAC converter, click to deactivate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6024"/>
        <source>Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6024"/>
        <source>Click here to modify the time displayed on the HMI.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9108"/>
        <source>Lead</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3460"/>
        <source>Start_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3461"/>
        <source>End_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3464"/>
        <source>9:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3465"/>
        <source>10:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3471"/>
        <source>System for self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8851"/>
        <location filename="../mywidget.cpp" line="4942"/>
        <source>Lithium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3469"/>
        <source>Start time: When the system reaches this time, it starts to run automatically.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3470"/>
        <source>Select: After this function is enabled, the system automatically runs the selected function mode within the specified period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4498"/>
        <source>0 represents an alarm event, and this item will turn red. 1 represents a status event.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4949"/>
        <source>BMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4962"/>
        <source>EMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4975"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4975"/>
        <source>BAT protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4994"/>
        <source>Disharge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5007"/>
        <source>Bat&gt;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5091"/>
        <source>English</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5092"/>
        <source>You can set the display language of the screen to Chinese or English. The system needs to restart before switching the language.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5096"/>
        <source>upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5101"/>
        <source>Allow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5102"/>
        <source>Set whether the display is enabled sound, which can be allowed(Allow) or prohibited(forbid).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5180"/>
        <location filename="../mywidget.cpp" line="5186"/>
        <location filename="../mywidget.cpp" line="5192"/>
        <location filename="../mywidget.cpp" line="5199"/>
        <location filename="../mywidget.cpp" line="5205"/>
        <location filename="../mywidget.cpp" line="5211"/>
        <location filename="../mywidget.cpp" line="5284"/>
        <location filename="../mywidget.cpp" line="5290"/>
        <location filename="../mywidget.cpp" line="5296"/>
        <source>prohibit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5235"/>
        <source>Output Fre grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5241"/>
        <source>Output vol level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5253"/>
        <source>Non adjustable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5271"/>
        <location filename="../mywidget.cpp" line="5277"/>
        <source>Non
countercurrent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5284"/>
        <source>Pshedding Freq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5296"/>
        <source>CV parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5308"/>
        <source>restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5309"/>
        <source>Restore the factory default Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5323"/>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5324"/>
        <source>Clear previous recorded data and operation data of the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5355"/>
        <source>Normally closed circuit (NC) or normally open circuit (NO) according to field Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5362"/>
        <source>DI_1_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5366"/>
        <source>DI_2_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5370"/>
        <source>DI_3_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5374"/>
        <source>DI_4_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5378"/>
        <source>DI_5_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5382"/>
        <source>DI_6_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5399"/>
        <source>DI_1_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5402"/>
        <source>DI_2_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5405"/>
        <source>DI_3_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5408"/>
        <source>DI_4_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5411"/>
        <source>DI_5_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5414"/>
        <source>DI_6_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5427"/>
        <location filename="../mywidget.cpp" line="5439"/>
        <location filename="../mywidget.cpp" line="5442"/>
        <source>Shut down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5427"/>
        <source>DI_1_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1657"/>
        <location filename="../mywidget.ui" line="1701"/>
        <location filename="../mywidget.ui" line="1745"/>
        <location filename="../mywidget.cpp" line="5430"/>
        <location filename="../mywidget.cpp" line="5433"/>
        <location filename="../mywidget.cpp" line="5436"/>
        <source>Prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5430"/>
        <source>DI_2_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5433"/>
        <source>DI_3_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5436"/>
        <source>DI_4_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5439"/>
        <source>DI_5_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5442"/>
        <source>DI_6_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5458"/>
        <location filename="../mywidget.cpp" line="5684"/>
        <source>It is used for internal debugging only.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5479"/>
        <location filename="../mywidget.cpp" line="5729"/>
        <source>Debug variable 1 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5485"/>
        <location filename="../mywidget.cpp" line="5735"/>
        <source>Debug variable 2 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5491"/>
        <location filename="../mywidget.cpp" line="5741"/>
        <source>Debug variable 3 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5497"/>
        <location filename="../mywidget.cpp" line="5765"/>
        <source>Debug memery var 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5503"/>
        <location filename="../mywidget.cpp" line="5771"/>
        <source>Debug memery var 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5509"/>
        <location filename="../mywidget.cpp" line="5777"/>
        <source>Debug memery var 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5515"/>
        <source>Input Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5521"/>
        <source>Input Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5527"/>
        <source>Voltage 1.5 revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5533"/>
        <source>Bus Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5539"/>
        <source>Grid A AB Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5545"/>
        <source>Grid B BC Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5551"/>
        <source>Grid C CA Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5557"/>
        <source>Output A Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5563"/>
        <source>Output B Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5569"/>
        <source>Output C Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5575"/>
        <source>INV A Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5581"/>
        <source>INV B Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5587"/>
        <source>INV C Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5593"/>
        <source>INV A inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5599"/>
        <source>INV B inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5605"/>
        <source>INV C inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5611"/>
        <location filename="../mywidget.cpp" line="5747"/>
        <source>INV On off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5623"/>
        <source>INV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5659"/>
        <location filename="../mywidget.cpp" line="5759"/>
        <source>parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5671"/>
        <location filename="../mywidget.cpp" line="5789"/>
        <source>Bat Infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5677"/>
        <location filename="../mywidget.cpp" line="5795"/>
        <source>Bat State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5753"/>
        <source>DCONV logic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5861"/>
        <source>Export the battery statistics. Click here to export the battery statistics to the U disk.
The accuracy is 0.1, which means that the obtained data multiplied by 0.1 gives the actual value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5899"/>
        <source>Hybrid mode Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5920"/>
        <source>If this parameter is selected, static IP addresses are used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5942"/>
        <source>If this parameter is selected, the automatically assigned IP address is used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5950"/>
        <location filename="../mywidget.cpp" line="5960"/>
        <source>Turn on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5970"/>
        <source>Date +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5970"/>
        <source>Clicking will move the monthly deep discharge date back one day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5975"/>
        <source>Date -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5975"/>
        <source>Clicking will move the monthly deep discharge date forward by one day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2514"/>
        <source>Alarm icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1175"/>
        <source>Upgrade prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1176"/>
        <source>1. Make sure to press the EPO button before upgrading.                              
2. Before upgrading the DCDC, switch off the ship-type switch of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1177"/>
        <source>Return</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1732"/>
        <location filename="../mywidget.cpp" line="4816"/>
        <source>Modification Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2234"/>
        <source>The converter standby switch. Click the converter to enter the standby state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2288"/>
        <source>The limit of charging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2292"/>
        <source>The limit of discharging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2312"/>
        <source>Alarm levels uploaded from BMS, level one alarm is yellow, level two alarm is orange, and level three alarm is red;
By default, the converter does not respond to level one and level two alarms, but shuts down in response to level three alarms.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2514"/>
        <source>Alarm icon: It is not displayed when there is no alarm. When there is a minor alarm, a yellow icon is displayed. When there is a fault alarm, a red icon is displayed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2526"/>
        <source>Inv. voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2527"/>
        <source>Inv. side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2536"/>
        <source>Inv. side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2545"/>
        <source>Inv. side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2553"/>
        <source>Inv. current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2554"/>
        <source>Inv. side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2562"/>
        <source>Inv. current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2563"/>
        <source>Inv. side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2571"/>
        <source>Inv. current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2572"/>
        <source>Inv. side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2581"/>
        <location filename="../mywidget.cpp" line="2803"/>
        <source>The IGBT temperature of the converter: The IGBT temperature must not exceed 102°C. Otherwise, the converter will operate at a reduced capacity. It will resume full power operation when the temperature drops to 73°C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2590"/>
        <source>The ambient temperature.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2599"/>
        <location filename="../mywidget.cpp" line="2754"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (&gt;30kVA power converter).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2610"/>
        <source>Display the voltage of each PV in turn.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2619"/>
        <source>Total current on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2628"/>
        <source>Total power on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2637"/>
        <source>converter battery side voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2646"/>
        <source>converter battery side current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2655"/>
        <source>converter battery side power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2664"/>
        <source>converter bus voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2673"/>
        <source>converter bus current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2699"/>
        <source>Voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2708"/>
        <source>Current on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2717"/>
        <source>Power on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2726"/>
        <source>Voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2735"/>
        <source>Current on the low-voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2744"/>
        <source>Power on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2753"/>
        <source>Leakage cur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2766"/>
        <source>Bus H vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2775"/>
        <source>Bus H vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2784"/>
        <source>Bus L vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2793"/>
        <source>Bus L vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2810"/>
        <source>Positive Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2811"/>
        <source>The positive insulation impedance of the DCDC module is normal when the positive insulation impedance is greater than 33kΩ. When the positive insulation impedance is lower than 33kΩ, the insulation fault or potential security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2818"/>
        <source>Negative Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2819"/>
        <source>The negative insulation impedance of the DCDC module is normal when the negative insulation impedance is greater than 33kΩ. When the negative insulation impedance is lower than 33kΩ, the insulation fault or negative security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2835"/>
        <source>Grid side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2844"/>
        <source>Grid side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2853"/>
        <source>Grid side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2862"/>
        <source>Grid side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2871"/>
        <source>Grid side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2880"/>
        <source>Grid side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2941"/>
        <source>Load side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2950"/>
        <source>Load side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2959"/>
        <source>Load side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2968"/>
        <source>Load side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2977"/>
        <source>Load side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2986"/>
        <source>Load side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3081"/>
        <source>Signal to start the diesel generator, start the diesel generator when enabled, stop the diesel generator when disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3084"/>
        <source>DO2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3085"/>
        <source>Dry contact 2 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3088"/>
        <source>DO3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3089"/>
        <source>Dry contact 3 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3096"/>
        <location filename="../mywidget.cpp" line="3142"/>
        <source>The converter has two states: enabled,disabled. The converter is enabled when the self-check is successful. Otherwise, the converter is disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3100"/>
        <source>There are three states for DC soft start: Not starting, Soft starting, and Complete. Soft start refers to the process in which the converter charges the busbar with the battery during startup, causing the busbar voltage to rise close to the battery voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3104"/>
        <source>Converter states include: OFF, AC Soft start, Grid-ON Charge, Grid-ON Discharge, Grid-OFF Discharge, Derating grid-on, Standby and Grid-OFF Charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3108"/>
        <source>There are three types of reactive power regulation: Disable,PF regulation, and  regulation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3112"/>
        <source>LVRT states : enabled , disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3116"/>
        <source>Input dry contact 1 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3120"/>
        <source>Input dry contact 2 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3124"/>
        <source>Input dry contact 3 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3128"/>
        <source>Input dry contact 4 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3132"/>
        <source>Input dry contact 5 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3136"/>
        <source>Input dry contact 6 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3146"/>
        <source>DCDC module operating modes: Boost, Buck.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3149"/>
        <location filename="../mywidget.cpp" line="3153"/>
        <source>Not
starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3150"/>
        <source>High-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3154"/>
        <source>Low-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3162"/>
        <source>DC module low voltage contactor has two states: On, Off; When there is voltage on the low voltage side, close the contactor on the low voltage side; Otherwise, the low pressure contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3166"/>
        <source>DCDC module operation modes states: OFF, Standby, Constant Voltage, Constant Current, Maximum Power Point Tracking.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3353"/>
        <source>Force Charge On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3354"/>
        <source>Forced Charging On: When the cell voltage drops below this value, the converter switches to Battery Priority Mode, and the AC side charges the battery with a power of 10kW.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3359"/>
        <source>ForceCharge Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3360"/>
        <source>Forced Charging Off: When the cell voltage exceeds this value, the converter exits Battery Priority Mode and returns to the mode before Forced Charging was enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3468"/>
        <source>Working Power: Only effective in peak shaving mode. Positive values indicate discharging, while negative values indicate charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3472"/>
        <source>Peak price</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3473"/>
        <source>In the peak shaving and valley filling mode, select &apos;Peak price&apos; periods,&apos;Flat price&apos; periods and &apos;Valley price&apos; periods based on electricity prices.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4344"/>
        <source>This is the monitor screen version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4348"/>
        <source>This is the DCAC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4352"/>
        <source>This is the DCAC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4356"/>
        <source>This is the DCAC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4360"/>
        <source>This is the DCDC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4364"/>
        <source>This is the DCDC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4368"/>
        <source>This is the DCDC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4371"/>
        <source>SN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4372"/>
        <source>This is SN, the serial number of the product.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4381"/>
        <source>PV power generation Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4385"/>
        <source>PV power generation Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4389"/>
        <source>PV power generation Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4393"/>
        <source>PV power generation Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4419"/>
        <location filename="../mywidget.cpp" line="4438"/>
        <source>Battery Charge Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4423"/>
        <location filename="../mywidget.cpp" line="4442"/>
        <source>Battery Discharge Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4427"/>
        <location filename="../mywidget.cpp" line="4446"/>
        <source>Battery Discharge Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4431"/>
        <location filename="../mywidget.cpp" line="4450"/>
        <source>Battery Discharge Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4458"/>
        <source>Today&apos;s electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4462"/>
        <source>Monthly electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4466"/>
        <source>Annual electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4470"/>
        <source>Total electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4477"/>
        <source>Today&apos;s electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4481"/>
        <source>Monthly electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4485"/>
        <source>Annual electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4489"/>
        <source>Total electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4503"/>
        <source>CAN communication failure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4504"/>
        <source>event description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4506"/>
        <source>Fire alarm (High temp. alarm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4507"/>
        <source>Power Meter Comm fualttLead-acid abnormal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4817"/>
        <source>Time when the system Settings are modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4901"/>
        <source>Power control type：CP_P-&gt;CP_N&amp;&amp;P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4905"/>
        <source>Power control type：CP_N&amp;&amp;P-&gt;CP_P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4909"/>
        <source>Grid Fre Upper limit：0.2-&gt;3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4913"/>
        <source>Grid Fre Upper limit：3-&gt;0.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4917"/>
        <source>Voltage protection Lower limit：-10-&gt;-15</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4921"/>
        <source>Voltage protection Lower limit：-15-&gt;-10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4925"/>
        <source>Operation mode：Manual-&gt;UPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4929"/>
        <source>Inv ON/Off-Grid：Off-&gt;automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4933"/>
        <source>Inv ON/Off-Grid：automatic-&gt;Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4976"/>
        <source>Battery Protocol: Parse the messages sent by BMS based on the selected battery protocol.                                             
Currently supported battery manufacturer protocols include:MEGA, LISHEN, GREATPOWER, GOLD, BMSER, LANLI, SLANPOWER, PYLON, CATL, SUOYING, XINGWANGDA, KUBO, GOLD_V2, TOGOOD, GROUP_STANDARD, WOBOYUAN, KGOOER, LD, PYLON_L, VILION, TUOPU,JDI.                                            
Select AUTO to automatically detect the battery manufacturer protocol.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5065"/>
        <source>Follow
battery</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="337"/>
        <location filename="../mywidget.cpp" line="5079"/>
        <source>User password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="385"/>
        <location filename="../mywidget.cpp" line="5085"/>
        <source>Admin password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5106"/>
        <source>20</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5106"/>
        <source>Bms Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5107"/>
        <source>BMS communication fault determination time: The BMS communication fault determination time refers to the BMS communication fault when the BMS communication is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5111"/>
        <source>120</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5111"/>
        <source>EMS Com. Fault Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5112"/>
        <source>EMS communication fault determination time: The EMS communication fault determination time refers to the time when the communication between the EMS is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5266"/>
        <source>Grid restoration time: reserved function, setting invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5313"/>
        <source>Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5314"/>
        <source>Backup setting parameters: Backup setting parameters refers to backing up the parameters set on the current device so that the backup parameter Settings can be restored when needed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5318"/>
        <source>Restore
Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5318"/>
        <source>Restore Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5319"/>
        <source>Restore backup setting parameters: Restore backup setting parameters means to restore the device to the last backup setting parameters and restart the device.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5330"/>
        <source>When you select DCDC, the DCAC interface freezes, and the maximum module ID and minimum module ID take effect. You can only modify the database to restore the DCAC interface.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5802"/>
        <source>Choose the first module to view the real-time data of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5807"/>
        <source>Choose the second module to view the real-time data of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5855"/>
        <source>Export operation log. Click here to export operation log to U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5872"/>
        <source>Choose the first module to view the real-time status of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5877"/>
        <source>Choose the second module to view the real-time status of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3157"/>
        <source>Contator Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3161"/>
        <source>Contator Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3145"/>
        <location filename="../mywidget.cpp" line="3243"/>
        <source>Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3149"/>
        <source>Soft Start Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3153"/>
        <source>Soft Start Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3165"/>
        <location filename="../mywidget.cpp" line="5955"/>
        <location filename="../mywidget.cpp" line="5965"/>
        <source>Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1361"/>
        <location filename="../mywidget.cpp" line="2891"/>
        <source>Grid active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1361"/>
        <location filename="../mywidget.cpp" line="2900"/>
        <source>Grid reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1361"/>
        <location filename="../mywidget.cpp" line="2909"/>
        <source>Grid apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1361"/>
        <location filename="../mywidget.cpp" line="2918"/>
        <source>Grid power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1362"/>
        <location filename="../mywidget.cpp" line="2926"/>
        <source>Grid frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1401"/>
        <location filename="../mywidget.cpp" line="2997"/>
        <source>Load active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1401"/>
        <location filename="../mywidget.cpp" line="3006"/>
        <source>Load reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1401"/>
        <location filename="../mywidget.cpp" line="3015"/>
        <source>Load apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1401"/>
        <location filename="../mywidget.cpp" line="3024"/>
        <source>Load power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1402"/>
        <location filename="../mywidget.cpp" line="3033"/>
        <source>Load frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1447"/>
        <source>D02</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1447"/>
        <source>D03</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1520"/>
        <location filename="../mywidget.cpp" line="3268"/>
        <source>DC CV Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1520"/>
        <location filename="../mywidget.cpp" line="3274"/>
        <source>DC CC Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2256"/>
        <source>Total voltage of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2260"/>
        <source>Total current of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2264"/>
        <source>Battery SOC uploaded by BMS refers to the current remaining battery capacity percentage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2268"/>
        <source>Battery SOH uploaded from BMS, the percentage of available capacity after full charge compared to the rated capacity.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2272"/>
        <source>The highest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2276"/>
        <source>The lowest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2280"/>
        <source>The highest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2284"/>
        <source>The lowest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2296"/>
        <source>The allowable charging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2300"/>
        <source>The allowable discharging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2304"/>
        <source>The allowable charging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2308"/>
        <source>The allowable discharging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2315"/>
        <source>Charging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2316"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to charge, Disable indicates the battery is not allowed to charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2319"/>
        <source>Discharging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2320"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to discharge, Disable indicates the battery is not allowed to discharge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2535"/>
        <source>Inv. voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2589"/>
        <source>Environment temperature</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OperMode</name>
    <message>
        <location filename="../OperMode/opermode.ui" line="98"/>
        <source>System for self-use:
When PV, battery, photovoltaic available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="146"/>
        <source>A. PV gives priority to the load power supply, if the PV power is large enough, the remaining energy is provided to the battery charge, if the PV has remaining energy, the energy is returned to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="192"/>
        <source>B, PV priority to supply the load, if the PV is not enough to power the load, the battery and PV at the same time to power the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="238"/>
        <source>C, PV priority to supply the load, if the PV and battery are not enough to supply power to the load, the grid, PV, battery at the same time to supply power to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="257"/>
        <location filename="../OperMode/opermode.ui" line="1247"/>
        <location filename="../OperMode/opermode.ui" line="2368"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="262"/>
        <location filename="../OperMode/opermode.ui" line="1252"/>
        <location filename="../OperMode/opermode.ui" line="2373"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="267"/>
        <location filename="../OperMode/opermode.ui" line="1257"/>
        <location filename="../OperMode/opermode.ui" line="2378"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="272"/>
        <location filename="../OperMode/opermode.ui" line="1262"/>
        <location filename="../OperMode/opermode.ui" line="2383"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="277"/>
        <location filename="../OperMode/opermode.ui" line="1267"/>
        <location filename="../OperMode/opermode.ui" line="2388"/>
        <source>5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="282"/>
        <location filename="../OperMode/opermode.ui" line="1272"/>
        <location filename="../OperMode/opermode.ui" line="2393"/>
        <source>6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="287"/>
        <location filename="../OperMode/opermode.ui" line="1277"/>
        <location filename="../OperMode/opermode.ui" line="2398"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="292"/>
        <location filename="../OperMode/opermode.ui" line="1282"/>
        <location filename="../OperMode/opermode.ui" line="2403"/>
        <source>8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="297"/>
        <location filename="../OperMode/opermode.ui" line="1287"/>
        <location filename="../OperMode/opermode.ui" line="2408"/>
        <source>9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="302"/>
        <location filename="../OperMode/opermode.ui" line="802"/>
        <location filename="../OperMode/opermode.ui" line="1292"/>
        <location filename="../OperMode/opermode.ui" line="1792"/>
        <location filename="../OperMode/opermode.ui" line="2413"/>
        <location filename="../OperMode/opermode.ui" line="2913"/>
        <source>10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="307"/>
        <location filename="../OperMode/opermode.ui" line="1297"/>
        <location filename="../OperMode/opermode.ui" line="2418"/>
        <source>11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="312"/>
        <location filename="../OperMode/opermode.ui" line="1302"/>
        <location filename="../OperMode/opermode.ui" line="2423"/>
        <source>12</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="317"/>
        <location filename="../OperMode/opermode.ui" line="1307"/>
        <location filename="../OperMode/opermode.ui" line="2428"/>
        <source>13</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="322"/>
        <location filename="../OperMode/opermode.ui" line="1312"/>
        <location filename="../OperMode/opermode.ui" line="2433"/>
        <source>14</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="327"/>
        <location filename="../OperMode/opermode.ui" line="1317"/>
        <location filename="../OperMode/opermode.ui" line="2438"/>
        <source>15</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="332"/>
        <location filename="../OperMode/opermode.ui" line="1322"/>
        <location filename="../OperMode/opermode.ui" line="2443"/>
        <source>16</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="337"/>
        <location filename="../OperMode/opermode.ui" line="1327"/>
        <location filename="../OperMode/opermode.ui" line="2448"/>
        <source>17</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="342"/>
        <location filename="../OperMode/opermode.ui" line="1332"/>
        <location filename="../OperMode/opermode.ui" line="2453"/>
        <source>18</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="347"/>
        <location filename="../OperMode/opermode.ui" line="1337"/>
        <location filename="../OperMode/opermode.ui" line="2458"/>
        <source>19</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="352"/>
        <location filename="../OperMode/opermode.ui" line="490"/>
        <location filename="../OperMode/opermode.ui" line="1342"/>
        <location filename="../OperMode/opermode.ui" line="1480"/>
        <location filename="../OperMode/opermode.ui" line="2463"/>
        <location filename="../OperMode/opermode.ui" line="2601"/>
        <source>20</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="357"/>
        <location filename="../OperMode/opermode.ui" line="1347"/>
        <location filename="../OperMode/opermode.ui" line="2468"/>
        <source>21</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="362"/>
        <location filename="../OperMode/opermode.ui" line="1352"/>
        <location filename="../OperMode/opermode.ui" line="2473"/>
        <source>22</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="367"/>
        <location filename="../OperMode/opermode.ui" line="1357"/>
        <location filename="../OperMode/opermode.ui" line="2478"/>
        <source>23</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="372"/>
        <location filename="../OperMode/opermode.ui" line="1362"/>
        <location filename="../OperMode/opermode.ui" line="2483"/>
        <source>24</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="377"/>
        <location filename="../OperMode/opermode.ui" line="1367"/>
        <location filename="../OperMode/opermode.ui" line="2488"/>
        <source>25</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="382"/>
        <location filename="../OperMode/opermode.ui" line="1372"/>
        <location filename="../OperMode/opermode.ui" line="2493"/>
        <source>Parameter name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="387"/>
        <location filename="../OperMode/opermode.ui" line="1377"/>
        <location filename="../OperMode/opermode.ui" line="2498"/>
        <source>Parameter description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="392"/>
        <location filename="../OperMode/opermode.ui" line="1382"/>
        <location filename="../OperMode/opermode.ui" line="2503"/>
        <source>Radius</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="397"/>
        <location filename="../OperMode/opermode.ui" line="1387"/>
        <location filename="../OperMode/opermode.ui" line="2508"/>
        <source>Default value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="402"/>
        <location filename="../OperMode/opermode.ui" line="1392"/>
        <location filename="../OperMode/opermode.ui" line="2513"/>
        <location filename="../OperMode/opermode.cpp" line="111"/>
        <source>Battery type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="410"/>
        <location filename="../OperMode/opermode.ui" line="418"/>
        <location filename="../OperMode/opermode.ui" line="1400"/>
        <location filename="../OperMode/opermode.ui" line="1408"/>
        <location filename="../OperMode/opermode.ui" line="2521"/>
        <location filename="../OperMode/opermode.ui" line="2529"/>
        <source>Lithium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="426"/>
        <location filename="../OperMode/opermode.ui" line="1416"/>
        <location filename="../OperMode/opermode.ui" line="2537"/>
        <location filename="../OperMode/opermode.cpp" line="112"/>
        <source>BMS Comm.type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="434"/>
        <location filename="../OperMode/opermode.ui" line="1424"/>
        <location filename="../OperMode/opermode.ui" line="2545"/>
        <source>CAN/485</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="442"/>
        <location filename="../OperMode/opermode.ui" line="1432"/>
        <location filename="../OperMode/opermode.ui" line="2553"/>
        <source>CAN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="450"/>
        <location filename="../OperMode/opermode.ui" line="1440"/>
        <location filename="../OperMode/opermode.ui" line="2561"/>
        <location filename="../OperMode/opermode.cpp" line="113"/>
        <source>EMS Comm.type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="458"/>
        <location filename="../OperMode/opermode.ui" line="1448"/>
        <location filename="../OperMode/opermode.ui" line="2569"/>
        <source>485/TCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="466"/>
        <location filename="../OperMode/opermode.ui" line="1456"/>
        <location filename="../OperMode/opermode.ui" line="2577"/>
        <source>485</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="474"/>
        <location filename="../OperMode/opermode.ui" line="1464"/>
        <location filename="../OperMode/opermode.ui" line="2585"/>
        <location filename="../OperMode/opermode.cpp" line="114"/>
        <source>Charge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="482"/>
        <location filename="../OperMode/opermode.ui" line="506"/>
        <location filename="../OperMode/opermode.ui" line="1472"/>
        <location filename="../OperMode/opermode.ui" line="1496"/>
        <location filename="../OperMode/opermode.ui" line="2593"/>
        <location filename="../OperMode/opermode.ui" line="2617"/>
        <source>1~100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="498"/>
        <location filename="../OperMode/opermode.ui" line="1488"/>
        <location filename="../OperMode/opermode.ui" line="2609"/>
        <location filename="../OperMode/opermode.cpp" line="115"/>
        <source>Discharge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="514"/>
        <location filename="../OperMode/opermode.ui" line="626"/>
        <location filename="../OperMode/opermode.ui" line="674"/>
        <location filename="../OperMode/opermode.ui" line="1616"/>
        <location filename="../OperMode/opermode.ui" line="1664"/>
        <location filename="../OperMode/opermode.ui" line="2737"/>
        <location filename="../OperMode/opermode.ui" line="2785"/>
        <source>-</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="522"/>
        <location filename="../OperMode/opermode.ui" line="1512"/>
        <location filename="../OperMode/opermode.ui" line="2633"/>
        <location filename="../OperMode/opermode.cpp" line="116"/>
        <source>Energy priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="530"/>
        <location filename="../OperMode/opermode.ui" line="1520"/>
        <location filename="../OperMode/opermode.ui" line="2641"/>
        <source>Bat&gt;Grid、Grid&gt;Bat</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="538"/>
        <location filename="../OperMode/opermode.ui" line="1528"/>
        <location filename="../OperMode/opermode.ui" line="2649"/>
        <source>Bat&gt;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="546"/>
        <location filename="../OperMode/opermode.ui" line="1536"/>
        <location filename="../OperMode/opermode.ui" line="2657"/>
        <location filename="../OperMode/opermode.cpp" line="117"/>
        <source>Grid connected mode of lnv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="554"/>
        <location filename="../OperMode/opermode.ui" line="1544"/>
        <location filename="../OperMode/opermode.ui" line="2665"/>
        <source>Countercurret、Non Countercurret</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="562"/>
        <location filename="../OperMode/opermode.ui" line="1552"/>
        <location filename="../OperMode/opermode.ui" line="2673"/>
        <source>Non Countercurret</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="570"/>
        <location filename="../OperMode/opermode.ui" line="1560"/>
        <location filename="../OperMode/opermode.ui" line="2681"/>
        <location filename="../OperMode/opermode.cpp" line="118"/>
        <source>Constant power(AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="578"/>
        <location filename="../OperMode/opermode.ui" line="1568"/>
        <location filename="../OperMode/opermode.ui" line="2689"/>
        <source>-Rated power~Rated power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="586"/>
        <location filename="../OperMode/opermode.ui" line="874"/>
        <location filename="../OperMode/opermode.ui" line="898"/>
        <location filename="../OperMode/opermode.ui" line="922"/>
        <location filename="../OperMode/opermode.ui" line="946"/>
        <location filename="../OperMode/opermode.ui" line="1576"/>
        <location filename="../OperMode/opermode.ui" line="2697"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="594"/>
        <location filename="../OperMode/opermode.ui" line="1584"/>
        <location filename="../OperMode/opermode.ui" line="2705"/>
        <location filename="../OperMode/opermode.cpp" line="119"/>
        <source>Charge Volt. upper Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="602"/>
        <location filename="../OperMode/opermode.ui" line="650"/>
        <location filename="../OperMode/opermode.ui" line="1592"/>
        <location filename="../OperMode/opermode.ui" line="1640"/>
        <location filename="../OperMode/opermode.ui" line="2713"/>
        <location filename="../OperMode/opermode.ui" line="2761"/>
        <source>400~850</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="610"/>
        <location filename="../OperMode/opermode.ui" line="1600"/>
        <location filename="../OperMode/opermode.ui" line="2721"/>
        <source>Battery charging cut-off voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="618"/>
        <location filename="../OperMode/opermode.ui" line="1608"/>
        <location filename="../OperMode/opermode.ui" line="2729"/>
        <location filename="../OperMode/opermode.cpp" line="120"/>
        <source>Charge Volt. upper Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="634"/>
        <location filename="../OperMode/opermode.ui" line="682"/>
        <location filename="../OperMode/opermode.ui" line="1624"/>
        <location filename="../OperMode/opermode.ui" line="1672"/>
        <location filename="../OperMode/opermode.ui" line="2745"/>
        <location filename="../OperMode/opermode.ui" line="2793"/>
        <source>10mV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="642"/>
        <location filename="../OperMode/opermode.ui" line="1632"/>
        <location filename="../OperMode/opermode.ui" line="2753"/>
        <location filename="../OperMode/opermode.cpp" line="121"/>
        <source>Discharge Volt. lower Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="658"/>
        <location filename="../OperMode/opermode.ui" line="1648"/>
        <location filename="../OperMode/opermode.ui" line="2769"/>
        <source>Battery discharge cut-off voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="666"/>
        <location filename="../OperMode/opermode.ui" line="1656"/>
        <location filename="../OperMode/opermode.ui" line="2777"/>
        <location filename="../OperMode/opermode.cpp" line="122"/>
        <source>Discharge Volt. lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="690"/>
        <location filename="../OperMode/opermode.ui" line="1680"/>
        <location filename="../OperMode/opermode.ui" line="2801"/>
        <location filename="../OperMode/opermode.cpp" line="123"/>
        <source>Charge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="698"/>
        <location filename="../OperMode/opermode.ui" line="722"/>
        <location filename="../OperMode/opermode.ui" line="1688"/>
        <location filename="../OperMode/opermode.ui" line="1712"/>
        <location filename="../OperMode/opermode.ui" line="2809"/>
        <location filename="../OperMode/opermode.ui" line="2833"/>
        <source>0 ~ 1000</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="706"/>
        <location filename="../OperMode/opermode.ui" line="730"/>
        <location filename="../OperMode/opermode.ui" line="1696"/>
        <location filename="../OperMode/opermode.ui" line="1720"/>
        <location filename="../OperMode/opermode.ui" line="2817"/>
        <location filename="../OperMode/opermode.ui" line="2841"/>
        <source>By battery limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="714"/>
        <location filename="../OperMode/opermode.ui" line="1704"/>
        <location filename="../OperMode/opermode.ui" line="2825"/>
        <location filename="../OperMode/opermode.cpp" line="124"/>
        <source>Discharge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="738"/>
        <location filename="../OperMode/opermode.ui" line="1728"/>
        <location filename="../OperMode/opermode.ui" line="2849"/>
        <source>DOD_OnGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="746"/>
        <location filename="../OperMode/opermode.ui" line="770"/>
        <location filename="../OperMode/opermode.ui" line="794"/>
        <location filename="../OperMode/opermode.ui" line="818"/>
        <location filename="../OperMode/opermode.ui" line="1736"/>
        <location filename="../OperMode/opermode.ui" line="1760"/>
        <location filename="../OperMode/opermode.ui" line="1784"/>
        <location filename="../OperMode/opermode.ui" line="1808"/>
        <location filename="../OperMode/opermode.ui" line="2857"/>
        <location filename="../OperMode/opermode.ui" line="2881"/>
        <location filename="../OperMode/opermode.ui" line="2905"/>
        <location filename="../OperMode/opermode.ui" line="2929"/>
        <source>1 ~ 100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="754"/>
        <location filename="../OperMode/opermode.ui" line="970"/>
        <location filename="../OperMode/opermode.ui" line="994"/>
        <location filename="../OperMode/opermode.ui" line="1744"/>
        <location filename="../OperMode/opermode.ui" line="1864"/>
        <location filename="../OperMode/opermode.ui" line="1888"/>
        <location filename="../OperMode/opermode.ui" line="1912"/>
        <location filename="../OperMode/opermode.ui" line="1936"/>
        <location filename="../OperMode/opermode.ui" line="1960"/>
        <location filename="../OperMode/opermode.ui" line="1984"/>
        <location filename="../OperMode/opermode.ui" line="2865"/>
        <source>100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="762"/>
        <location filename="../OperMode/opermode.ui" line="1752"/>
        <location filename="../OperMode/opermode.ui" line="2873"/>
        <source>DOD_OffGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="778"/>
        <location filename="../OperMode/opermode.ui" line="1768"/>
        <location filename="../OperMode/opermode.ui" line="2889"/>
        <source>90</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="786"/>
        <location filename="../OperMode/opermode.ui" line="1776"/>
        <location filename="../OperMode/opermode.ui" line="2897"/>
        <source>Generator turn on SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="810"/>
        <location filename="../OperMode/opermode.ui" line="1800"/>
        <location filename="../OperMode/opermode.ui" line="2921"/>
        <source>Generator turn off SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1057"/>
        <source>Battery priority: 
	When PV, battery, photovoltaic is available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="127"/>
        <source>Generator turn on SOC(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="128"/>
        <source>Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="826"/>
        <location filename="../OperMode/opermode.ui" line="1816"/>
        <location filename="../OperMode/opermode.ui" line="2937"/>
        <source>95</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="834"/>
        <location filename="../OperMode/opermode.ui" line="1824"/>
        <location filename="../OperMode/opermode.ui" line="2945"/>
        <location filename="../OperMode/opermode.cpp" line="129"/>
        <source>Maximum battery protection value(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="842"/>
        <location filename="../OperMode/opermode.ui" line="1832"/>
        <location filename="../OperMode/opermode.ui" line="2953"/>
        <source>3550 ~ 3650</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="850"/>
        <location filename="../OperMode/opermode.ui" line="1840"/>
        <location filename="../OperMode/opermode.ui" line="2961"/>
        <source>3650</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="858"/>
        <location filename="../OperMode/opermode.ui" line="1848"/>
        <location filename="../OperMode/opermode.ui" line="2969"/>
        <source>DG_ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="866"/>
        <location filename="../OperMode/opermode.ui" line="890"/>
        <location filename="../OperMode/opermode.ui" line="914"/>
        <location filename="../OperMode/opermode.ui" line="938"/>
        <location filename="../OperMode/opermode.ui" line="962"/>
        <location filename="../OperMode/opermode.ui" line="986"/>
        <location filename="../OperMode/opermode.ui" line="1856"/>
        <location filename="../OperMode/opermode.ui" line="1880"/>
        <location filename="../OperMode/opermode.ui" line="1904"/>
        <location filename="../OperMode/opermode.ui" line="1928"/>
        <location filename="../OperMode/opermode.ui" line="1952"/>
        <location filename="../OperMode/opermode.ui" line="1976"/>
        <location filename="../OperMode/opermode.ui" line="2977"/>
        <location filename="../OperMode/opermode.ui" line="3001"/>
        <location filename="../OperMode/opermode.ui" line="3025"/>
        <location filename="../OperMode/opermode.ui" line="3049"/>
        <location filename="../OperMode/opermode.ui" line="3073"/>
        <location filename="../OperMode/opermode.ui" line="3097"/>
        <source>0 ~ 100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="882"/>
        <location filename="../OperMode/opermode.ui" line="1872"/>
        <location filename="../OperMode/opermode.ui" line="2993"/>
        <source>DG_FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="906"/>
        <location filename="../OperMode/opermode.ui" line="1896"/>
        <location filename="../OperMode/opermode.ui" line="3017"/>
        <source>Grid_ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="930"/>
        <location filename="../OperMode/opermode.ui" line="1920"/>
        <location filename="../OperMode/opermode.ui" line="3041"/>
        <source>Grid_FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="954"/>
        <location filename="../OperMode/opermode.ui" line="1944"/>
        <location filename="../OperMode/opermode.ui" line="3065"/>
        <source>Grid_EDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="978"/>
        <location filename="../OperMode/opermode.ui" line="1968"/>
        <location filename="../OperMode/opermode.ui" line="3089"/>
        <source>Grid_FDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1098"/>
        <source>(1)A, PV priority to charge the battery, excess energy to the load, if there is excess energy back to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1144"/>
        <source>B, PV energy is given priority to battery charging, excess energy to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1190"/>
        <source>B, when PV is not enough to supply the battery and load, the grid provides the load with surplus energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1230"/>
        <source>(2) When the grid battery is available: A, the grid charges the battery and provides energy to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2049"/>
        <source>1, when the battery, PV, grid is available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2095"/>
        <source>A. When the PV is large enough, the PV charges the battery and supplies the load at the same time, and if there is any surplus, it is returned to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2141"/>
        <source>B. When PV is insufficient, PV charges the battery and supplies power to the load at the same time, and the grid supplements the remaining energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2187"/>
        <source>C. When PV is insufficient and the load power is less than the power set value on the AC side, the AC side supplies the load, the remaining available power on the AC side will charge the battery, and the PV will charge the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2233"/>
        <source>D, when the PV is insufficient, the load power is greater than the AC power, the AC power is available to power the load, and the PV makes up the remaining power to the load, if the PV is insufficient, the battery adds the remaining energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2257"/>
        <source>2, when the battery, the grid is available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2303"/>
        <source>A. When the load power is less than the power set value on the AC side, the AC side supplies the load, and the remaining available power on the AC side will charge the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2349"/>
        <source>B. When the load power is greater than the AC power, the available power on the AC side will supply power to the load and supplement the remaining energy with the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3166"/>
        <source>Battery area division:
ECP area of action:
    Saturated area + equalization area (SOC decays from high to low to charging SOC).
FCP action area:
    Discharge area + equalization area (SOC less than charging SOC, increasing from low to high to discharge SOC cut-off).
EDP action area:
    Saturated area + equalization area (SOC decays from high to low to charging SOC).
FDP action area:
    Discharge area + equalization area (SOC less than charging SOC, increasing from low to high to discharge SOC cut-off).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3198"/>
        <source>Chaifa startup logic (for all modes) :
    The display starts to enter the firewood control logic 4 minutes after the start of the display screen. 
    If the DCAC is not running, the diesel generator will be started if the power grid fails, and the diesel generator will be shut down when the power grid recovers. 
    If the DCAC is running, the SOC will be started/SOC will be stopped to control the diesel power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1504"/>
        <location filename="../OperMode/opermode.ui" line="2625"/>
        <source>50</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="23"/>
        <source>Working mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2985"/>
        <location filename="../OperMode/opermode.ui" line="3009"/>
        <location filename="../OperMode/opermode.ui" line="3033"/>
        <location filename="../OperMode/opermode.ui" line="3057"/>
        <location filename="../OperMode/opermode.ui" line="3081"/>
        <location filename="../OperMode/opermode.ui" line="3105"/>
        <source>Set according to customer requirements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3237"/>
        <source>Return</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3271"/>
        <source>Battery
AreaDivision</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3299"/>
        <source>System
for self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3364"/>
        <source>Optimal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3327"/>
        <source>Batter
priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="102"/>
        <source>Click to view</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="103"/>
        <location filename="../OperMode/opermode.cpp" line="141"/>
        <location filename="../OperMode/opermode.cpp" line="144"/>
        <source>Invalid in this mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="104"/>
        <source>In this mode, the charging power of the AC side is limited.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="105"/>
        <source>Protection is not triggered in this mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="106"/>
        <source>If the SOC is lower than this value, it is in the empty zone and FCP is executed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="107"/>
        <source>Disarm FCP point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="108"/>
        <source>Control battery does not discharge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="109"/>
        <source>After DOD is triggered in this mode, it is not triggered in grid-connected mode and is shut down in off-network mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="125"/>
        <source>DOD OnGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="126"/>
        <source>DOD OffGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="130"/>
        <source>DG ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="131"/>
        <source>DG FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="132"/>
        <source>Grid ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="133"/>
        <source>Grid FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="134"/>
        <source>Grid EDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="135"/>
        <source>Grid FDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="137"/>
        <source>Currently, only lithium batteries are supported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="138"/>
        <source>Set the communication mode with the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="139"/>
        <source>This section describes how to set the communication mode with the EMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="140"/>
        <source>In this mode, if the SOC is smaller than the charging SOC, the AC test provides a small power to maintain the charging SOC.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="142"/>
        <source>In this mode, you can choose whether to preferentially use electricity from the grid or battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="143"/>
        <source>In this mode, you can choose whether to reverse the flow.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="145"/>
        <source>Battery charging voltage cut-off point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="146"/>
        <source>Battery charge voltage back almost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="147"/>
        <source>Battery discharge voltage cut-off point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="148"/>
        <source>Battery discharge voltage back to almost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="149"/>
        <source>Limit the battery charging current point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="150"/>
        <source>Limit the battery discharge current point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="151"/>
        <source>In this mode, when the SOC is less than (100 - DOD), the battery does not discharge and does not draw power from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="152"/>
        <source>After DOD is triggered in this mode, no charge or shutdown is performed in grid-connected mode, and the device is shut down in off-network condition.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="153"/>
        <source>When SOC is less than or equal to Chaifa, start Chaifa.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="154"/>
        <source>When SOC is greater than or equal to Chaifa, turn off Chaifa.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="155"/>
        <source>Limit the maximum voltage of the battery charging cell.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="156"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="157"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="158"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="159"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="160"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="161"/>
        <source>The discharge zone limits the discharge power of the system to the power grid side.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Specification</name>
    <message>
        <location filename="../Specification/Specification.cpp" line="51"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UpgradeTools</name>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="14"/>
        <source>UpgradeTools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="46"/>
        <source>MPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="69"/>
        <source>MPS Upgrade app V2.0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="105"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="508"/>
        <source> Message:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="135"/>
        <source> Mounting finished 
 File checked ok 
 Monitor Upadate file not exited 
 DCAC Upadate file ready 
 DCDC Upadate file not exited 
 Start copying...

 DCAC_Update.hex 
 UPDATE_BEGIN 
 Unknown signal received 
 Unknown signal received 
 Unknown signal received 
 ERASE GOING 
 ERASE GOING 
 BLOCK_DATATRANS_END
 BLOCK_CHECKSUM_OK 
 BLOCK_CHECKSUM_OK
 BLOCK_HEAD_OK
 BLOCK_CHECKSUM_OK
 BLOCK_DATATRANS_END
 BLOCK_HEAD_OK 
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="177"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="444"/>
        <source>Module number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="277"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="667"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="69"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="95"/>
        <source>Monitor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="298"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="688"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="73"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="99"/>
        <source>Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="319"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="709"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="77"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="103"/>
        <source>Restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="342"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="82"/>
        <source>Apply and restart</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="397"/>
        <source>PCS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="420"/>
        <source>PCS Upgrade Tools V2.0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="538"/>
        <source> Mounting finished 
 File checked ok 
 Monitor.hex not exited
 DSPUpadate ok
 Start copying...
 
 DSPUpdate.hex
 UPDATE_BEGIN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="572"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="122"/>
        <source>Monitor.hex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="593"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="126"/>
        <source>DSPUpdate.hex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="618"/>
        <source>Baud rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="642"/>
        <source>500k</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="753"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="113"/>
        <source>Restart</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="61"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="66"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="70"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="74"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="78"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="83"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="92"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="96"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="100"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="104"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="109"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="114"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="123"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="127"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="233"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="59"/>
        <source>DCDC Upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="254"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="64"/>
        <source>DCAC Upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="65"/>
        <source>DCAC Upgrade: Insert the u disk and check if there is a DCAC upgrade program called &apos;DCAC_Update.hex&apos;. Click to upgrade the DCAC.                                
(Note: Press the EPO button before upgrading.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="60"/>
        <source>DCDC Upgrade: Insert a u disk and check for the presence of the DCDC upgrade program &apos;DCDC_Update.hex&apos;. Click on DCDC, and then upgrade the corresponding DCDC module according to the selected module number above.                                
(Note: Before upgrading the DCDC, ensure that the ship mode switch on the DCDC module is set to the OFF position.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="70"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="96"/>
        <source>After inserting the u disk and checking that there is a Monitor upgrade program &apos;Monitor.hex&apos;, click to upgrade the monitor program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="74"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="100"/>
        <source>Backup: Click to backup the current program files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="78"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="104"/>
        <source>Restore: Restore to the most recent backup program files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="83"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="114"/>
        <source>Click to restart.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="83"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="114"/>
        <source>Previous Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="91"/>
        <source>Baud Rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="92"/>
        <source>Baud Rate: Default is 500k and cannot be modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="732"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="107"/>
        <source>DSP Upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="108"/>
        <source>DSP Upgrade: Insert the u disk and check if there is a DSP upgrade program called &apos;DSPUpdate.hex&apos;. Click to upgrade the DSP.                                
(Note: Press the EPO button before upgrading.))</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="123"/>
        <source>This is the name of the monitoring upgrade program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="127"/>
        <source>This is the DSP upgrade program name.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
