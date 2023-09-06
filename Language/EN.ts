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
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="103"/>
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
    <name>MyWidget</name>
    <message>
        <location filename="../mywidget.ui" line="149"/>
        <source>Basic settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="182"/>
        <source>Function Setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="265"/>
        <location filename="../mywidget.ui" line="11485"/>
        <location filename="../mywidget.cpp" line="5346"/>
        <source>Battery type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="273"/>
        <location filename="../mywidget.ui" line="289"/>
        <location filename="../mywidget.ui" line="305"/>
        <location filename="../mywidget.ui" line="321"/>
        <location filename="../mywidget.ui" line="353"/>
        <location filename="../mywidget.ui" line="369"/>
        <location filename="../mywidget.ui" line="406"/>
        <location filename="../mywidget.ui" line="422"/>
        <location filename="../mywidget.ui" line="459"/>
        <location filename="../mywidget.ui" line="512"/>
        <location filename="../mywidget.ui" line="528"/>
        <location filename="../mywidget.ui" line="565"/>
        <location filename="../mywidget.ui" line="581"/>
        <location filename="../mywidget.ui" line="634"/>
        <location filename="../mywidget.ui" line="735"/>
        <location filename="../mywidget.ui" line="923"/>
        <location filename="../mywidget.ui" line="939"/>
        <location filename="../mywidget.ui" line="987"/>
        <location filename="../mywidget.ui" line="1040"/>
        <location filename="../mywidget.ui" line="1093"/>
        <location filename="../mywidget.ui" line="1146"/>
        <location filename="../mywidget.ui" line="1162"/>
        <location filename="../mywidget.ui" line="1178"/>
        <location filename="../mywidget.ui" line="1199"/>
        <location filename="../mywidget.ui" line="1215"/>
        <location filename="../mywidget.ui" line="1252"/>
        <location filename="../mywidget.ui" line="1268"/>
        <location filename="../mywidget.ui" line="1284"/>
        <location filename="../mywidget.ui" line="1305"/>
        <location filename="../mywidget.ui" line="1321"/>
        <location filename="../mywidget.ui" line="1337"/>
        <location filename="../mywidget.ui" line="1353"/>
        <location filename="../mywidget.ui" line="1369"/>
        <location filename="../mywidget.ui" line="1385"/>
        <location filename="../mywidget.ui" line="1417"/>
        <location filename="../mywidget.ui" line="1433"/>
        <location filename="../mywidget.ui" line="8403"/>
        <location filename="../mywidget.ui" line="8419"/>
        <location filename="../mywidget.ui" line="8451"/>
        <location filename="../mywidget.ui" line="8467"/>
        <location filename="../mywidget.ui" line="8483"/>
        <location filename="../mywidget.ui" line="8499"/>
        <location filename="../mywidget.ui" line="8531"/>
        <location filename="../mywidget.ui" line="9140"/>
        <location filename="../mywidget.ui" line="9320"/>
        <location filename="../mywidget.ui" line="9384"/>
        <location filename="../mywidget.ui" line="9448"/>
        <location filename="../mywidget.ui" line="9512"/>
        <location filename="../mywidget.cpp" line="1613"/>
        <source>-</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="297"/>
        <location filename="../mywidget.cpp" line="5473"/>
        <source>ProtocolVersion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="313"/>
        <location filename="../mywidget.ui" line="11525"/>
        <source>BMS Comm. type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="337"/>
        <location filename="../mywidget.ui" line="385"/>
        <location filename="../mywidget.ui" line="438"/>
        <location filename="../mywidget.ui" line="491"/>
        <location filename="../mywidget.ui" line="544"/>
        <source>bps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="361"/>
        <location filename="../mywidget.ui" line="12837"/>
        <location filename="../mywidget.cpp" line="5360"/>
        <source>Power control type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="329"/>
        <location filename="../mywidget.cpp" line="5426"/>
        <source>serial port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="414"/>
        <location filename="../mywidget.ui" line="11605"/>
        <source>EMS Comm. type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="377"/>
        <location filename="../mywidget.cpp" line="5433"/>
        <source>serial port 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="446"/>
        <location filename="../mywidget.ui" line="13416"/>
        <location filename="../mywidget.cpp" line="5491"/>
        <source>Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="467"/>
        <location filename="../mywidget.cpp" line="5373"/>
        <source>Output power limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="475"/>
        <location filename="../mywidget.ui" line="687"/>
        <location filename="../mywidget.ui" line="719"/>
        <location filename="../mywidget.ui" line="767"/>
        <location filename="../mywidget.ui" line="783"/>
        <location filename="../mywidget.ui" line="799"/>
        <location filename="../mywidget.ui" line="815"/>
        <location filename="../mywidget.ui" line="831"/>
        <location filename="../mywidget.ui" line="971"/>
        <location filename="../mywidget.ui" line="7031"/>
        <location filename="../mywidget.ui" line="7049"/>
        <location filename="../mywidget.ui" line="7067"/>
        <location filename="../mywidget.ui" line="7085"/>
        <location filename="../mywidget.ui" line="8435"/>
        <source>kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="430"/>
        <location filename="../mywidget.cpp" line="5439"/>
        <source>serial port 4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="499"/>
        <location filename="../mywidget.ui" line="13461"/>
        <source>System upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="483"/>
        <location filename="../mywidget.cpp" line="5445"/>
        <source>serial port 5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="552"/>
        <location filename="../mywidget.ui" line="13453"/>
        <location filename="../mywidget.cpp" line="5501"/>
        <source>Sounds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="573"/>
        <location filename="../mywidget.cpp" line="5388"/>
        <source>Charge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="589"/>
        <location filename="../mywidget.cpp" line="5457"/>
        <source>Can port 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="597"/>
        <location filename="../mywidget.ui" line="650"/>
        <source>kbps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="626"/>
        <source>Discharge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="642"/>
        <location filename="../mywidget.cpp" line="5463"/>
        <source>Can port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="679"/>
        <location filename="../mywidget.cpp" line="5405"/>
        <source>DG capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1056"/>
        <location filename="../mywidget.ui" line="1109"/>
        <location filename="../mywidget.ui" line="6503"/>
        <location filename="../mywidget.ui" line="6521"/>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="727"/>
        <location filename="../mywidget.ui" line="13614"/>
        <location filename="../mywidget.cpp" line="5411"/>
        <source>Energy priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1072"/>
        <location filename="../mywidget.ui" line="1125"/>
        <location filename="../mywidget.ui" line="6467"/>
        <location filename="../mywidget.ui" line="8563"/>
        <location filename="../mywidget.ui" line="9124"/>
        <location filename="../mywidget.ui" line="9156"/>
        <location filename="../mywidget.ui" line="9172"/>
        <location filename="../mywidget.ui" line="9238"/>
        <location filename="../mywidget.ui" line="9254"/>
        <location filename="../mywidget.ui" line="9464"/>
        <location filename="../mywidget.ui" line="9528"/>
        <location filename="../mywidget.cpp" line="1615"/>
        <source>V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="843"/>
        <source>System parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="907"/>
        <source>kW/s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="915"/>
        <location filename="../mywidget.ui" line="12861"/>
        <location filename="../mywidget.cpp" line="5623"/>
        <source>Machine type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="931"/>
        <location filename="../mywidget.cpp" line="5697"/>
        <source>Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="955"/>
        <location filename="../mywidget.ui" line="1003"/>
        <location filename="../mywidget.ui" line="1019"/>
        <source>Hz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="963"/>
        <location filename="../mywidget.ui" line="12898"/>
        <location filename="../mywidget.cpp" line="5629"/>
        <source>Machine capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="979"/>
        <location filename="../mywidget.ui" line="13350"/>
        <location filename="../mywidget.cpp" line="5703"/>
        <source>Restore factory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1011"/>
        <location filename="../mywidget.ui" line="12935"/>
        <source>Output Fre. grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1133"/>
        <location filename="../mywidget.ui" line="13313"/>
        <location filename="../mywidget.cpp" line="5718"/>
        <source>Clear Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1048"/>
        <location filename="../mywidget.cpp" line="5568"/>
        <source>Vol protection upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1064"/>
        <location filename="../mywidget.ui" line="12972"/>
        <source>Output vol. level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1101"/>
        <location filename="../mywidget.cpp" line="5574"/>
        <source>Vol protection lower limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1239"/>
        <location filename="../mywidget.cpp" line="5731"/>
        <source>Module max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1154"/>
        <location filename="../mywidget.ui" line="13659"/>
        <location filename="../mywidget.cpp" line="5580"/>
        <source>HVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1170"/>
        <location filename="../mywidget.cpp" line="5653"/>
        <source>Output reactive power mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1292"/>
        <location filename="../mywidget.cpp" line="5737"/>
        <source>Module min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1207"/>
        <location filename="../mywidget.ui" line="13622"/>
        <source>LVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1345"/>
        <location filename="../mywidget.ui" line="13873"/>
        <location filename="../mywidget.cpp" line="5743"/>
        <source>Insulation detection enable DCDC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1260"/>
        <location filename="../mywidget.ui" line="13696"/>
        <location filename="../mywidget.cpp" line="5592"/>
        <source>AFD enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1223"/>
        <location filename="../mywidget.cpp" line="5665"/>
        <source>Grid recovery time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="618"/>
        <location filename="../mywidget.ui" line="671"/>
        <location filename="../mywidget.ui" line="1231"/>
        <source>s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="281"/>
        <location filename="../mywidget.cpp" line="5420"/>
        <source>Serial Communication Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="536"/>
        <location filename="../mywidget.cpp" line="5451"/>
        <source>serial port 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="605"/>
        <source>BMS Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="658"/>
        <source>EMS Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8935"/>
        <location filename="../mywidget.cpp" line="3707"/>
        <source>Release Prohibited Charging Flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1027"/>
        <location filename="../mywidget.ui" line="13387"/>
        <source>Backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1080"/>
        <location filename="../mywidget.ui" line="13424"/>
        <source>Restore backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1313"/>
        <location filename="../mywidget.cpp" line="5599"/>
        <source>Insulation detection enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1361"/>
        <location filename="../mywidget.ui" line="13733"/>
        <location filename="../mywidget.cpp" line="5605"/>
        <source>PrimaryFreq enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1329"/>
        <location filename="../mywidget.ui" line="13807"/>
        <source>PsheddingFreq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1409"/>
        <location filename="../mywidget.ui" line="13770"/>
        <location filename="../mywidget.cpp" line="5611"/>
        <source>Inertia enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="899"/>
        <location filename="../mywidget.cpp" line="5550"/>
        <source>Power change rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="41"/>
        <source>MPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="711"/>
        <location filename="../mywidget.cpp" line="5516"/>
        <source>DG ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="759"/>
        <location filename="../mywidget.cpp" line="5521"/>
        <source>DG FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="775"/>
        <location filename="../mywidget.cpp" line="5526"/>
        <source>Grid ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="791"/>
        <location filename="../mywidget.cpp" line="5531"/>
        <source>Grid FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="807"/>
        <location filename="../mywidget.cpp" line="5536"/>
        <source>Grid EDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="823"/>
        <location filename="../mywidget.cpp" line="5541"/>
        <source>Grid FDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="947"/>
        <source>ULFV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="995"/>
        <source>LLFV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1276"/>
        <location filename="../mywidget.cpp" line="5671"/>
        <source>Converter Anti-Reverse Flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1377"/>
        <location filename="../mywidget.ui" line="13836"/>
        <location filename="../mywidget.cpp" line="5685"/>
        <source>QP curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1461"/>
        <source>External device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1479"/>
        <source>DI_1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1484"/>
        <source>DI_2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1489"/>
        <source>DI_3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1494"/>
        <source>DI_4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1499"/>
        <source>DI_5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1504"/>
        <source>DI_6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1509"/>
        <source>DO_1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1514"/>
        <source>DO_2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1519"/>
        <source>DO_3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1524"/>
        <location filename="../mywidget.ui" line="14021"/>
        <source>Enable/Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1529"/>
        <location filename="../mywidget.ui" line="14026"/>
        <source>NC/NO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1534"/>
        <location filename="../mywidget.ui" line="14031"/>
        <source>Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1539"/>
        <source>Function description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1560"/>
        <location filename="../mywidget.ui" line="14057"/>
        <source>Access Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1576"/>
        <source>Water logging</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1625"/>
        <location filename="../mywidget.ui" line="14089"/>
        <source>Generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1728"/>
        <source>DCAC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1784"/>
        <location filename="../mywidget.ui" line="2283"/>
        <location filename="../mywidget.ui" line="14181"/>
        <location filename="../mywidget.ui" line="14540"/>
        <location filename="../mywidget.cpp" line="5857"/>
        <location filename="../mywidget.cpp" line="6083"/>
        <source>Debug variable 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1792"/>
        <location filename="../mywidget.ui" line="14381"/>
        <source>1.5V Voltage revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1808"/>
        <location filename="../mywidget.ui" line="2371"/>
        <location filename="../mywidget.ui" line="14453"/>
        <location filename="../mywidget.ui" line="14638"/>
        <source>Inv on off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1821"/>
        <location filename="../mywidget.ui" line="2307"/>
        <location filename="../mywidget.ui" line="14213"/>
        <location filename="../mywidget.ui" line="14564"/>
        <location filename="../mywidget.cpp" line="5863"/>
        <location filename="../mywidget.cpp" line="6089"/>
        <source>Debug variable 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1829"/>
        <location filename="../mywidget.ui" line="14413"/>
        <source> Bus Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1845"/>
        <location filename="../mywidget.ui" line="14437"/>
        <location filename="../mywidget.cpp" line="6013"/>
        <source>Logic state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1858"/>
        <location filename="../mywidget.ui" line="2331"/>
        <location filename="../mywidget.ui" line="14245"/>
        <location filename="../mywidget.ui" line="14588"/>
        <location filename="../mywidget.cpp" line="5869"/>
        <location filename="../mywidget.cpp" line="6095"/>
        <location filename="../mywidget.cpp" line="6101"/>
        <source>Debug variable 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1866"/>
        <location filename="../mywidget.ui" line="14189"/>
        <source>Grid A/AB Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1882"/>
        <location filename="../mywidget.ui" line="14461"/>
        <source>Inv flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1895"/>
        <location filename="../mywidget.ui" line="2291"/>
        <location filename="../mywidget.ui" line="14548"/>
        <source>Debug variable 1 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1903"/>
        <location filename="../mywidget.ui" line="14221"/>
        <source>Grid B/BC Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1919"/>
        <location filename="../mywidget.ui" line="14469"/>
        <location filename="../mywidget.cpp" line="6025"/>
        <source>Grid flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1932"/>
        <location filename="../mywidget.ui" line="2315"/>
        <location filename="../mywidget.ui" line="14572"/>
        <source>Debug variable 2 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1940"/>
        <location filename="../mywidget.ui" line="14253"/>
        <source>Grid C/CA Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1956"/>
        <location filename="../mywidget.ui" line="14445"/>
        <location filename="../mywidget.cpp" line="6031"/>
        <source>Grid protect flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1969"/>
        <location filename="../mywidget.ui" line="2339"/>
        <location filename="../mywidget.ui" line="14596"/>
        <source>Debug variable 3 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1977"/>
        <location filename="../mywidget.ui" line="14285"/>
        <source>Output A Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1993"/>
        <location filename="../mywidget.ui" line="2411"/>
        <location filename="../mywidget.ui" line="14357"/>
        <location filename="../mywidget.ui" line="14678"/>
        <location filename="../mywidget.cpp" line="6037"/>
        <location filename="../mywidget.cpp" line="6119"/>
        <source>PV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2006"/>
        <location filename="../mywidget.ui" line="2299"/>
        <location filename="../mywidget.ui" line="14277"/>
        <location filename="../mywidget.ui" line="14556"/>
        <source>Debug memery var. 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2014"/>
        <location filename="../mywidget.ui" line="14317"/>
        <source>Output B Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2030"/>
        <location filename="../mywidget.ui" line="2387"/>
        <location filename="../mywidget.ui" line="14389"/>
        <location filename="../mywidget.ui" line="14654"/>
        <location filename="../mywidget.cpp" line="6043"/>
        <location filename="../mywidget.cpp" line="6113"/>
        <source>DC bus flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2043"/>
        <location filename="../mywidget.ui" line="14309"/>
        <location filename="../mywidget.ui" line="14580"/>
        <source>Debug memery var. 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2051"/>
        <location filename="../mywidget.ui" line="14349"/>
        <source>Output C Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2067"/>
        <location filename="../mywidget.ui" line="2363"/>
        <location filename="../mywidget.ui" line="14421"/>
        <location filename="../mywidget.ui" line="14630"/>
        <location filename="../mywidget.cpp" line="6049"/>
        <location filename="../mywidget.cpp" line="6107"/>
        <source>INT main flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2080"/>
        <location filename="../mywidget.ui" line="2323"/>
        <location filename="../mywidget.ui" line="2347"/>
        <location filename="../mywidget.ui" line="14341"/>
        <location filename="../mywidget.ui" line="14604"/>
        <source>Debug memery var. 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2088"/>
        <location filename="../mywidget.ui" line="14261"/>
        <source>INV A Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2104"/>
        <location filename="../mywidget.ui" line="2419"/>
        <location filename="../mywidget.ui" line="14397"/>
        <location filename="../mywidget.ui" line="14686"/>
        <source>Parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2117"/>
        <location filename="../mywidget.ui" line="14197"/>
        <source>Input Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2125"/>
        <location filename="../mywidget.ui" line="14293"/>
        <source>INV B Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2141"/>
        <location filename="../mywidget.ui" line="14365"/>
        <location filename="../mywidget.cpp" line="6061"/>
        <location filename="../mywidget.cpp" line="6179"/>
        <source>Monitor Order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2154"/>
        <source>Input. Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2162"/>
        <location filename="../mywidget.ui" line="14325"/>
        <source>INV C Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2178"/>
        <location filename="../mywidget.ui" line="14333"/>
        <source>BatInfor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2186"/>
        <location filename="../mywidget.ui" line="14205"/>
        <source>INV A inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2194"/>
        <location filename="../mywidget.ui" line="2427"/>
        <location filename="../mywidget.ui" line="14301"/>
        <location filename="../mywidget.ui" line="14694"/>
        <source>Bat state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2202"/>
        <location filename="../mywidget.ui" line="14237"/>
        <source>INV B inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2210"/>
        <location filename="../mywidget.ui" line="14269"/>
        <source>INV C inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2222"/>
        <source>DCDC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2355"/>
        <location filename="../mywidget.ui" line="14612"/>
        <source>Current ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2379"/>
        <location filename="../mywidget.ui" line="14646"/>
        <source>Monitor order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2395"/>
        <location filename="../mywidget.ui" line="14662"/>
        <source>DCONV logic </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2403"/>
        <location filename="../mywidget.ui" line="14670"/>
        <source>Bat infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2645"/>
        <source>100kW - TS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3135"/>
        <location filename="../mywidget.ui" line="3350"/>
        <location filename="../mywidget.ui" line="3394"/>
        <location filename="../mywidget.ui" line="3466"/>
        <location filename="../mywidget.ui" line="3573"/>
        <location filename="../mywidget.ui" line="3805"/>
        <location filename="../mywidget.ui" line="3889"/>
        <location filename="../mywidget.ui" line="3917"/>
        <source>0V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3164"/>
        <location filename="../mywidget.ui" line="3602"/>
        <location filename="../mywidget.ui" line="3833"/>
        <location filename="../mywidget.ui" line="3861"/>
        <location filename="../mywidget.ui" line="3945"/>
        <source>0A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3180"/>
        <location filename="../mywidget.ui" line="4021"/>
        <source>0kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3378"/>
        <location filename="../mywidget.ui" line="3422"/>
        <location filename="../mywidget.ui" line="3450"/>
        <source>0A </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5899"/>
        <source>Please click on &apos;Alarm Information&apos; to enter the query interface
and view the details of the alarm information you have encountered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8681"/>
        <location filename="../mywidget.ui" line="12074"/>
        <source>A1: 
Generator turn on SOC(A1)
B1: 
Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8704"/>
        <source>Battery
power-on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8723"/>
        <source>Battery
power-off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8815"/>
        <source>DOD Protection Release SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8823"/>
        <source>Cell voltage max(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8839"/>
        <source>Cell voltage max delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8855"/>
        <source>Cell voltage min(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8879"/>
        <source>Cell voltage min delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8895"/>
        <source>ForceCharge On(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8911"/>
        <source>ForceCharge Off(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8927"/>
        <source>DCAC cell protect(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9594"/>
        <source>Hybrid Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10641"/>
        <source>Model Introduction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10736"/>
        <location filename="../mywidget.ui" line="16943"/>
        <source>Self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10799"/>
        <source>Battery
Priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10863"/>
        <source>Optimal
model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10934"/>
        <source>Mixed
mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10998"/>
        <location filename="../mywidget.ui" line="17107"/>
        <location filename="../mywidget.cpp" line="73"/>
        <source>Manual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11063"/>
        <source>Advanced
Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11161"/>
        <source>DC/AC Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11230"/>
        <location filename="../mywidget.ui" line="15524"/>
        <location filename="../mywidget.cpp" line="73"/>
        <source>Self-issuance and self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11283"/>
        <source>1/4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11326"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11366"/>
        <source>Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11461"/>
        <source>Grid connected mode of PCS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11469"/>
        <source>DG ECP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11501"/>
        <source>Constant power (AC)(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11509"/>
        <source>DG FCP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11541"/>
        <source>Constant voltage(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11549"/>
        <source>Grid ECP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11565"/>
        <source>BMS manufacturers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11581"/>
        <source>Constant current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11589"/>
        <source>Grid FCP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11629"/>
        <source>Grid EDP(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11645"/>
        <source>Output reactive power(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11653"/>
        <source>Grid FDP(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11661"/>
        <source>Mixed model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11669"/>
        <source>Charge SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11685"/>
        <source>Constant power (generators)(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11693"/>
        <source>Discharge SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11864"/>
        <source>Battery position</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11904"/>
        <source>Current value(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11944"/>
        <source>Voltage level(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11968"/>
        <source>Out Loop Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12107"/>
        <source>Power On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12120"/>
        <source>Power Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12177"/>
        <source>On-Grid DOD(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12185"/>
        <source>Discharge Voltage lower Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12201"/>
        <source>Force charge start(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12214"/>
        <source>Off-Grid DOD(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12222"/>
        <source>Discharge Voltage lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12238"/>
        <source>Force charge stop(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12251"/>
        <source>DOD protection release(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12275"/>
        <source>DCAC cell protection voltage(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12288"/>
        <source>Charge Voltage upper Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12312"/>
        <source>DCAC cell protection voltage delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12325"/>
        <source>Charge Voltage upper Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12515"/>
        <source>Generator turn on voltage(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12552"/>
        <source>Generator turn off voltage(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12589"/>
        <source>DCAC Reference Voltage(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12700"/>
        <source>Shutdown voltage point(Delete)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12845"/>
        <source>Host Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12874"/>
        <source>Output reactiver power mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12882"/>
        <source>serial port 1(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12911"/>
        <source>Grid frequency upper limit(Hz)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12919"/>
        <source>serial port 2(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12948"/>
        <source>Grid frequency lower limit(Hz)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12956"/>
        <source>serial port 3(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12985"/>
        <source>Vol protection upper limit(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12993"/>
        <source>serial port 4(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13022"/>
        <source>Vol protection lower limit(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13030"/>
        <source>serial port 5(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13059"/>
        <source>Output power limit(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13067"/>
        <source>Can port 1(kbps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13096"/>
        <source>DG capacity(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13104"/>
        <source>Can port 2(kbps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13231"/>
        <source>Rate of change of power(kW/s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13239"/>
        <source>Battery capacity alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13268"/>
        <source>Grid connected mode of Inv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13276"/>
        <source>Protocol Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13305"/>
        <source>BMS Comm.fault time(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13342"/>
        <source>EMS Comm.fault time(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13379"/>
        <source>Transformer ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13490"/>
        <source>User Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13498"/>
        <source>Grid Expansion Enabling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13527"/>
        <source>Maintenance password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13638"/>
        <source>Number of modules</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13651"/>
        <source>Relese Charge mark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13688"/>
        <source>Relese Discharge mark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13712"/>
        <source>Maximum Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13725"/>
        <source>Grid recovery scheduling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13749"/>
        <source>Minimum Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13762"/>
        <source>Grid recovery time(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13799"/>
        <source>CV_Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13910"/>
        <source>Insulation detection enable DCAC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13976"/>
        <source>DI 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13981"/>
        <source>DI 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13986"/>
        <source>DI 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13991"/>
        <source>DI 4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13996"/>
        <source>DI 5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14001"/>
        <source>DI 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14006"/>
        <source>DO 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14011"/>
        <source>DO 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14016"/>
        <source>DO 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14036"/>
        <source>Function(default)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14041"/>
        <source>Shut Down NO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14049"/>
        <source>Flooding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14073"/>
        <source>Smoke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14081"/>
        <source>Temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14097"/>
        <location filename="../mywidget.ui" line="14105"/>
        <source>Reserve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14229"/>
        <source>Input Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14793"/>
        <location filename="../mywidget.cpp" line="6698"/>
        <location filename="../mywidget.cpp" line="6714"/>
        <source>Battery Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14843"/>
        <location filename="../mywidget.cpp" line="2422"/>
        <source>1/2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15580"/>
        <location filename="../mywidget.cpp" line="2447"/>
        <location filename="../mywidget.cpp" line="6512"/>
        <source>1/3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15643"/>
        <source>Back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15742"/>
        <source>Battery zoning:   
    Areas where ECP works:
    (Saturated area)+(Equilibrium area)
    When SOC decays from high to low to charging SOC.

    Areas where FCP works:
    (SOC empty area)+(Equilibrium area)
    SOC is less than the charging SOC, increasing from low to high,
    to the discharge SOC cutoff.

    Areas where EDP works:
    (Saturated area)+(Equilibrium area)
    When SOC decays from high to low to charging SOC.

    Areas where FDP works:
    (SOC empty area)+(Equilibrium area)
    SOC is less than the charging SOC, increasing from low to high,
    to the discharge SOC cutoff.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15795"/>
        <source>Saturated area</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15825"/>
        <source>Equilibrium area</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15855"/>
        <source>SOC empty area</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15987"/>
        <source>The PV prioritizes power to the load, and if the PV is powerful enough, the remaining energy is provided to charge the batteries, and if the PV still has energy left, it sends the excess energy to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16023"/>
        <source>The PV gives priority to powering the load, and if the PV does not have enough energy to power the load, the battery and the PV together power the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16059"/>
        <source>The PV gives priority to powering the load, and if the PV and batter ries do not have enough energy to power the load, then the grid, PV and batteries together power the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16159"/>
        <source>The PV prioritizes charging the batteries, and the excess energy is given to the load, and if there is still excess energy it is delivered to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16195"/>
        <source>When the PV does not have enough energy to supply the battery and the load, the grid provides fertility to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16231"/>
        <source>When the PV has no energy, the grid provides energy to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16331"/>
        <source>When there is enough PV energy, the PV will power the load while charging the battery, and if there is any left, it will be delivered to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16367"/>
        <source>When the PV is low on energy, the PV charges the battery while supplying power to the load, at which point the grid supplements the load with insufficient energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16403"/>
        <source>When the PV energy is insufficient, the PV will charge the battery;if the power of the load is less than the power value set on the AC side, the AC side will provide energy to the load and the remaining energy will charge the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16521"/>
        <location filename="../mywidget.ui" line="16557"/>
        <location filename="../mywidget.ui" line="16593"/>
        <source>When the energy of the PV is insufficient and the power of the load is greater than the set AC-side power, the available power on the AC-side will be supplied to the load in full, and the PV will replenish the remaining insufficient energy; if the energy replenished by the PV is insufficient, the battery will replenish the remaining energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16663"/>
        <source>Enable the selected time period</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16684"/>
        <source>Selection of peak,flat and valley sections of the grid under peak shaving and valley filling functions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16705"/>
        <source>The system starts to run automatically when it reaches this time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16726"/>
        <source>The system stops running automatically when it reaches this time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16747"/>
        <source>Functions performed in the current time period</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16768"/>
        <source>Peak and trough shaving operating power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16789"/>
        <source>&quot;Mixed Mode&quot; allows the system to automatically run different functional logic at different times. At the same time, it can run the function of &quot;peak shaving and valley filling&quot; according to the local peak and valley tariffs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16834"/>
        <source>The &quot;Manual Mode&quot; has no operational logic and allows for the manual control of battery charging and discharging. This mode is applicable in the following scenarios:
1、Battery charge and discharge testing.
2、Energy Management System (EMS) scheduling of the MPS.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16902"/>
        <location filename="../mywidget.cpp" line="73"/>
        <source>Battery Area</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16984"/>
        <location filename="../mywidget.cpp" line="73"/>
        <source>Battery Priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17025"/>
        <source>Optimal Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17066"/>
        <source>Mixed Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17260"/>
        <source>M_01 Converter turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17739"/>
        <location filename="../mywidget.cpp" line="1933"/>
        <source>Not Logged in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17870"/>
        <source>Host</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17968"/>
        <source>Rt.Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18069"/>
        <source>Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18169"/>
        <source>System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18265"/>
        <source>Switch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18342"/>
        <source>Standby</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18576"/>
        <source>Account</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18607"/>
        <source>User</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18612"/>
        <source>Maintain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18617"/>
        <source>Root</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18637"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18689"/>
        <source>Tip:Please check if account and password are
correct.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18736"/>
        <location filename="../mywidget.cpp" line="6641"/>
        <source>Login</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18763"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2872"/>
        <source>PV:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2945"/>
        <source>Battery charging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2958"/>
        <source>Battery discharging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2898"/>
        <location filename="../mywidget.ui" line="2932"/>
        <location filename="../mywidget.ui" line="2971"/>
        <location filename="../mywidget.ui" line="4103"/>
        <location filename="../mywidget.ui" line="4181"/>
        <location filename="../mywidget.ui" line="4194"/>
        <source>0kWh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4116"/>
        <source>Load:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3999"/>
        <source>Power meter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3614"/>
        <source>SOC:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8999"/>
        <location filename="../mywidget.ui" line="12448"/>
        <source>A1: Generator turn on voltage
B1: Generator turn off voltage
A1 Setting range: [250, 900]
B1 Setting range: [250, 900]
Set rule:B1 - A1 ≥ 10V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1425"/>
        <source>CV Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1190"/>
        <source>Change Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="520"/>
        <source>BMS protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1186"/>
        <location filename="../mywidget.ui" line="13675"/>
        <location filename="../mywidget.cpp" line="5724"/>
        <source>Rack</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1117"/>
        <location filename="../mywidget.cpp" line="5647"/>
        <source>Transformer Turns Ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1568"/>
        <location filename="../mywidget.ui" line="14065"/>
        <source>ATS Signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1584"/>
        <source>Fire Fighting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1603"/>
        <location filename="../mywidget.ui" line="1647"/>
        <location filename="../mywidget.ui" line="1691"/>
        <source>N_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4456"/>
        <location filename="../mywidget.ui" line="5538"/>
        <location filename="../mywidget.ui" line="5772"/>
        <location filename="../mywidget.ui" line="5832"/>
        <location filename="../mywidget.ui" line="8765"/>
        <location filename="../mywidget.ui" line="9718"/>
        <location filename="../mywidget.ui" line="14925"/>
        <location filename="../mywidget.cpp" line="3553"/>
        <location filename="../mywidget.cpp" line="3558"/>
        <location filename="../mywidget.cpp" line="4922"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4483"/>
        <location filename="../mywidget.ui" line="5565"/>
        <location filename="../mywidget.ui" line="5777"/>
        <location filename="../mywidget.ui" line="5837"/>
        <location filename="../mywidget.ui" line="9723"/>
        <location filename="../mywidget.ui" line="14930"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4501"/>
        <location filename="../mywidget.ui" line="5583"/>
        <location filename="../mywidget.ui" line="5782"/>
        <location filename="../mywidget.ui" line="5842"/>
        <location filename="../mywidget.ui" line="9728"/>
        <location filename="../mywidget.ui" line="14935"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4519"/>
        <location filename="../mywidget.ui" line="5601"/>
        <location filename="../mywidget.ui" line="5787"/>
        <location filename="../mywidget.ui" line="5847"/>
        <location filename="../mywidget.ui" line="9733"/>
        <location filename="../mywidget.ui" line="14940"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4537"/>
        <location filename="../mywidget.ui" line="5619"/>
        <location filename="../mywidget.ui" line="5792"/>
        <location filename="../mywidget.ui" line="5852"/>
        <location filename="../mywidget.ui" line="9738"/>
        <location filename="../mywidget.ui" line="14945"/>
        <source>5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4555"/>
        <location filename="../mywidget.ui" line="5637"/>
        <location filename="../mywidget.ui" line="5797"/>
        <location filename="../mywidget.ui" line="5857"/>
        <location filename="../mywidget.ui" line="9743"/>
        <location filename="../mywidget.ui" line="14950"/>
        <source>6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4579"/>
        <location filename="../mywidget.ui" line="5661"/>
        <location filename="../mywidget.ui" line="5802"/>
        <location filename="../mywidget.ui" line="9748"/>
        <location filename="../mywidget.ui" line="14955"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4597"/>
        <location filename="../mywidget.ui" line="5679"/>
        <location filename="../mywidget.ui" line="5807"/>
        <location filename="../mywidget.ui" line="9753"/>
        <location filename="../mywidget.ui" line="14960"/>
        <source>8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4615"/>
        <location filename="../mywidget.ui" line="5697"/>
        <location filename="../mywidget.ui" line="5812"/>
        <source>9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4633"/>
        <location filename="../mywidget.ui" line="5715"/>
        <location filename="../mywidget.ui" line="5817"/>
        <source>10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4651"/>
        <location filename="../mywidget.ui" line="5733"/>
        <location filename="../mywidget.ui" line="5822"/>
        <source>11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4669"/>
        <location filename="../mywidget.ui" line="5751"/>
        <location filename="../mywidget.ui" line="5827"/>
        <source>12</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4784"/>
        <source>Converter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5007"/>
        <source>PV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5230"/>
        <source>Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5453"/>
        <source>Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5957"/>
        <source>Alarm Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6001"/>
        <source>Battery Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6081"/>
        <location filename="../mywidget.ui" line="6634"/>
        <location filename="../mywidget.ui" line="9070"/>
        <location filename="../mywidget.ui" line="9085"/>
        <location filename="../mywidget.ui" line="9758"/>
        <location filename="../mywidget.ui" line="14965"/>
        <location filename="../mywidget.cpp" line="1399"/>
        <location filename="../mywidget.cpp" line="1442"/>
        <location filename="../mywidget.cpp" line="1488"/>
        <location filename="../mywidget.cpp" line="1546"/>
        <location filename="../mywidget.cpp" line="1596"/>
        <location filename="../mywidget.cpp" line="1748"/>
        <location filename="../mywidget.cpp" line="1864"/>
        <location filename="../mywidget.cpp" line="2002"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6100"/>
        <source>Bat voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6119"/>
        <location filename="../mywidget.cpp" line="2603"/>
        <source>Bat current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6138"/>
        <location filename="../mywidget.cpp" line="2607"/>
        <source>SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6157"/>
        <location filename="../mywidget.cpp" line="2611"/>
        <source>SOH</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6176"/>
        <source>Cell voltage (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6195"/>
        <source>Cell voltage (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6214"/>
        <source>Cell temp. (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6233"/>
        <source>Cell temp. (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6261"/>
        <location filename="../mywidget.ui" line="6806"/>
        <location filename="../mywidget.ui" line="9075"/>
        <location filename="../mywidget.ui" line="9090"/>
        <location filename="../mywidget.cpp" line="1352"/>
        <location filename="../mywidget.cpp" line="1399"/>
        <location filename="../mywidget.cpp" line="1442"/>
        <location filename="../mywidget.cpp" line="1488"/>
        <location filename="../mywidget.cpp" line="1546"/>
        <location filename="../mywidget.cpp" line="1596"/>
        <location filename="../mywidget.cpp" line="1864"/>
        <location filename="../mywidget.cpp" line="2002"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6291"/>
        <location filename="../mywidget.ui" line="6310"/>
        <location filename="../mywidget.ui" line="6329"/>
        <location filename="../mywidget.ui" line="6348"/>
        <location filename="../mywidget.ui" line="6367"/>
        <location filename="../mywidget.ui" line="6386"/>
        <location filename="../mywidget.ui" line="6405"/>
        <location filename="../mywidget.ui" line="6424"/>
        <location filename="../mywidget.ui" line="6831"/>
        <location filename="../mywidget.ui" line="6850"/>
        <location filename="../mywidget.ui" line="6869"/>
        <location filename="../mywidget.ui" line="6888"/>
        <location filename="../mywidget.ui" line="6907"/>
        <location filename="../mywidget.ui" line="6926"/>
        <location filename="../mywidget.ui" line="9209"/>
        <location filename="../mywidget.ui" line="9291"/>
        <location filename="../mywidget.ui" line="9364"/>
        <location filename="../mywidget.ui" line="9428"/>
        <location filename="../mywidget.ui" line="9492"/>
        <location filename="../mywidget.cpp" line="3544"/>
        <location filename="../mywidget.cpp" line="4900"/>
        <location filename="../mywidget.cpp" line="5516"/>
        <location filename="../mywidget.cpp" line="5521"/>
        <location filename="../mywidget.cpp" line="5526"/>
        <location filename="../mywidget.cpp" line="5531"/>
        <location filename="../mywidget.cpp" line="5536"/>
        <location filename="../mywidget.cpp" line="5541"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6449"/>
        <location filename="../mywidget.ui" line="6977"/>
        <location filename="../mywidget.ui" line="9080"/>
        <location filename="../mywidget.ui" line="9095"/>
        <location filename="../mywidget.cpp" line="1596"/>
        <location filename="../mywidget.cpp" line="2002"/>
        <source>Unit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6485"/>
        <location filename="../mywidget.ui" line="6995"/>
        <location filename="../mywidget.ui" line="7013"/>
        <location filename="../mywidget.ui" line="8547"/>
        <location filename="../mywidget.cpp" line="1615"/>
        <source>A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6539"/>
        <location filename="../mywidget.ui" line="6557"/>
        <source>mV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6575"/>
        <location filename="../mywidget.ui" line="6593"/>
        <source>℃</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7145"/>
        <source>prompt:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7186"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7342"/>
        <source>Alarm level:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1592"/>
        <location filename="../mywidget.ui" line="1636"/>
        <location filename="../mywidget.ui" line="1680"/>
        <location filename="../mywidget.ui" line="7411"/>
        <location filename="../mywidget.ui" line="7455"/>
        <location filename="../mywidget.cpp" line="3458"/>
        <location filename="../mywidget.cpp" line="3474"/>
        <location filename="../mywidget.cpp" line="5758"/>
        <location filename="../mywidget.cpp" line="5766"/>
        <location filename="../mywidget.cpp" line="5770"/>
        <location filename="../mywidget.cpp" line="5774"/>
        <location filename="../mywidget.cpp" line="5778"/>
        <source>Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6688"/>
        <location filename="../mywidget.cpp" line="2639"/>
        <source>Allowable charging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6706"/>
        <location filename="../mywidget.cpp" line="2643"/>
        <source>Allowable discharging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6724"/>
        <location filename="../mywidget.cpp" line="2647"/>
        <source>Allowable charging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6742"/>
        <location filename="../mywidget.cpp" line="2651"/>
        <source>Allowable discharging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7536"/>
        <source>Data report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7649"/>
        <source>yyyy-MM-dd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7681"/>
        <location filename="../mywidget.cpp" line="6208"/>
        <source>Y  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7700"/>
        <location filename="../mywidget.cpp" line="6220"/>
        <source>M  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7719"/>
        <location filename="../mywidget.cpp" line="6232"/>
        <source>D  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7745"/>
        <location filename="../mywidget.cpp" line="6214"/>
        <source>Y  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7764"/>
        <location filename="../mywidget.cpp" line="6226"/>
        <source>M  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7783"/>
        <location filename="../mywidget.cpp" line="6238"/>
        <source>D  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7799"/>
        <source>Export Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7848"/>
        <source>Note:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7868"/>
        <source>Log.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7889"/>
        <source>Out put file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7931"/>
        <source>Report.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7972"/>
        <source>Data To Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6250"/>
        <source>OperationLog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8234"/>
        <source>History Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8124"/>
        <location filename="../mywidget.ui" line="8271"/>
        <source>Operation Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8020"/>
        <source>status:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8336"/>
        <source>DC/AC Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8411"/>
        <location filename="../mywidget.ui" line="11637"/>
        <location filename="../mywidget.cpp" line="3575"/>
        <source>Control mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8427"/>
        <source>Constant power (AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8443"/>
        <location filename="../mywidget.ui" line="11677"/>
        <location filename="../mywidget.cpp" line="3580"/>
        <source>Machine number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8475"/>
        <location filename="../mywidget.ui" line="11701"/>
        <source>Parallel </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8491"/>
        <location filename="../mywidget.ui" line="11621"/>
        <location filename="../mywidget.cpp" line="3553"/>
        <source>Output power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="120"/>
        <location filename="../mywidget.ui" line="2598"/>
        <source>Change
Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1544"/>
        <source>Dry Contact EPO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1552"/>
        <source>Dry Contact Shutdown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1669"/>
        <location filename="../mywidget.ui" line="1713"/>
        <source>Reserved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4233"/>
        <source>Grid sell:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4168"/>
        <source>Grid buy:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3624"/>
        <source>0%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4331"/>
        <source>Converter Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5476"/>
        <location filename="../mywidget.cpp" line="6367"/>
        <source>Converter State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5870"/>
        <source>Converter Alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6652"/>
        <location filename="../mywidget.cpp" line="2631"/>
        <source>Charging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6670"/>
        <location filename="../mywidget.cpp" line="2635"/>
        <source>Discharging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7221"/>
        <source>Level1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7263"/>
        <source>Level2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7298"/>
        <source>Level3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7383"/>
        <source>Charging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7427"/>
        <source>Discharging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7910"/>
        <source>Record.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8061"/>
        <source>u disk disconnect!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8095"/>
        <location filename="../mywidget.cpp" line="6244"/>
        <source>History Records</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8159"/>
        <location filename="../mywidget.cpp" line="6256"/>
        <source>Electricity Statistical Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8459"/>
        <source>Working mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8523"/>
        <location filename="../mywidget.cpp" line="3558"/>
        <source>Output reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8539"/>
        <location filename="../mywidget.cpp" line="3563"/>
        <source>Constant current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8555"/>
        <location filename="../mywidget.cpp" line="3568"/>
        <source>Constant voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8591"/>
        <source>DC/DC Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8610"/>
        <source>Battery setup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8783"/>
        <source>DOD_OnGrid(%):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8799"/>
        <source>DOD_OffGrid(%):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8831"/>
        <source>Charge Volt. upper Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8847"/>
        <source>Charge Volt. upper Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8863"/>
        <source>Discharge Volt. lower Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8887"/>
        <source>Discharge Volt. lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8903"/>
        <location filename="../mywidget.ui" line="12259"/>
        <source>Charge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8919"/>
        <location filename="../mywidget.ui" line="12296"/>
        <source>Discharge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8791"/>
        <location filename="../mywidget.ui" line="12370"/>
        <source>Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8807"/>
        <location filename="../mywidget.ui" line="12333"/>
        <source>Generator turn on SOC(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9033"/>
        <location filename="../mywidget.ui" line="9038"/>
        <location filename="../mywidget.ui" line="9043"/>
        <location filename="../mywidget.ui" line="9048"/>
        <location filename="../mywidget.ui" line="9053"/>
        <location filename="../mywidget.ui" line="9058"/>
        <location filename="../mywidget.ui" line="9063"/>
        <source>New Row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9100"/>
        <location filename="../mywidget.ui" line="12507"/>
        <location filename="../mywidget.cpp" line="3774"/>
        <source>Capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9108"/>
        <source>Ah</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9116"/>
        <location filename="../mywidget.ui" line="12663"/>
        <source>Grid off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9132"/>
        <location filename="../mywidget.ui" line="12544"/>
        <source>Cell number(2V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9148"/>
        <location filename="../mywidget.ui" line="12626"/>
        <source>Grid on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9164"/>
        <location filename="../mywidget.ui" line="12581"/>
        <location filename="../mywidget.cpp" line="3784"/>
        <source>Battery float voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9180"/>
        <source>Shutdown voltage point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9246"/>
        <location filename="../mywidget.ui" line="12618"/>
        <location filename="../mywidget.cpp" line="3789"/>
        <source>Battery filling voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9262"/>
        <location filename="../mywidget.ui" line="12531"/>
        <source>Mending center point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9328"/>
        <location filename="../mywidget.ui" line="12655"/>
        <location filename="../mywidget.cpp" line="3794"/>
        <source>Charge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9336"/>
        <location filename="../mywidget.ui" line="9400"/>
        <location filename="../mywidget.ui" line="9544"/>
        <location filename="../mywidget.ui" line="9576"/>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9344"/>
        <location filename="../mywidget.ui" line="12568"/>
        <source>Temperature filling coefficient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9392"/>
        <location filename="../mywidget.ui" line="12692"/>
        <location filename="../mywidget.cpp" line="3799"/>
        <source>Discharge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9408"/>
        <location filename="../mywidget.ui" line="12605"/>
        <source>Mending allowable setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9456"/>
        <location filename="../mywidget.cpp" line="3804"/>
        <source>Generator turn off voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9472"/>
        <location filename="../mywidget.ui" line="12642"/>
        <source>Temperature alarm upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9520"/>
        <location filename="../mywidget.cpp" line="3809"/>
        <source>Generator turn on voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9536"/>
        <location filename="../mywidget.ui" line="12679"/>
        <location filename="../mywidget.cpp" line="3849"/>
        <source>Uniform charging and flushing current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9568"/>
        <location filename="../mywidget.ui" line="12716"/>
        <location filename="../mywidget.cpp" line="3854"/>
        <source>Float turn uniform charging current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9647"/>
        <source>Hybrid Mode Enable：</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9678"/>
        <source>SystemInformation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9691"/>
        <location filename="../mywidget.ui" line="14898"/>
        <source>Version:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4747"/>
        <source>Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4751"/>
        <source>DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4755"/>
        <source>DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4759"/>
        <source>DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4763"/>
        <source>DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4767"/>
        <source>DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4771"/>
        <source>DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9853"/>
        <location filename="../mywidget.ui" line="15060"/>
        <source>Network:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9912"/>
        <location filename="../mywidget.ui" line="15119"/>
        <source>interface:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9953"/>
        <location filename="../mywidget.ui" line="15160"/>
        <source>Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9934"/>
        <location filename="../mywidget.ui" line="15141"/>
        <source>eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9975"/>
        <location filename="../mywidget.ui" line="15182"/>
        <source>502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10168"/>
        <location filename="../mywidget.ui" line="15375"/>
        <source>Apply and Reatart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10009"/>
        <location filename="../mywidget.ui" line="15216"/>
        <location filename="../mywidget.cpp" line="6338"/>
        <source>DHCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8948"/>
        <source>DCAC cell delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9763"/>
        <location filename="../mywidget.ui" line="14970"/>
        <location filename="../mywidget.ui" line="18419"/>
        <location filename="../mywidget.cpp" line="1748"/>
        <source>System Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9768"/>
        <location filename="../mywidget.ui" line="14975"/>
        <source>   Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9781"/>
        <location filename="../mywidget.ui" line="14988"/>
        <source>   DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9789"/>
        <location filename="../mywidget.ui" line="14996"/>
        <source>   DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9797"/>
        <location filename="../mywidget.ui" line="15004"/>
        <source>   DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9810"/>
        <location filename="../mywidget.ui" line="15017"/>
        <source>   DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9818"/>
        <location filename="../mywidget.ui" line="15025"/>
        <source>   DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9826"/>
        <location filename="../mywidget.ui" line="15033"/>
        <source>   DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9834"/>
        <location filename="../mywidget.ui" line="15041"/>
        <source>   SN:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10025"/>
        <location filename="../mywidget.ui" line="15232"/>
        <location filename="../mywidget.cpp" line="6316"/>
        <source>STATIC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10045"/>
        <location filename="../mywidget.ui" line="15252"/>
        <source>ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10075"/>
        <location filename="../mywidget.ui" line="15282"/>
        <source>netmask:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10105"/>
        <location filename="../mywidget.ui" line="15312"/>
        <source>gateway:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10135"/>
        <location filename="../mywidget.ui" line="15342"/>
        <source>Server ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10058"/>
        <location filename="../mywidget.ui" line="15265"/>
        <source>192 . 168 . 1 . 100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10088"/>
        <location filename="../mywidget.ui" line="15295"/>
        <source>255 . 255 . 255 . 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10118"/>
        <location filename="../mywidget.ui" line="15325"/>
        <source>192 . 168 .  1  . 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10148"/>
        <location filename="../mywidget.ui" line="15355"/>
        <source> 192 . 168 . 1  . 200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10465"/>
        <source>DCAC converter 
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10408"/>
        <source>DCAC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10324"/>
        <source>DCDC converter
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10267"/>
        <source>DCDC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17217"/>
        <source>Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17303"/>
        <source>Converter2 Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17373"/>
        <source>640V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17430"/>
        <source>780V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17469"/>
        <source>639V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17479"/>
        <source>150A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17539"/>
        <source>246A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17578"/>
        <source>202A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1199"/>
        <source>切换语言</source>
        <translation>Change Language</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <location filename="../mywidget.cpp" line="1383"/>
        <location filename="../mywidget.cpp" line="2961"/>
        <source>Leakage current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <location filename="../mywidget.cpp" line="2943"/>
        <source>IGBT temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>Env. temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <location filename="../mywidget.cpp" line="2972"/>
        <source>PV voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <location filename="../mywidget.cpp" line="2981"/>
        <source>PV current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <location filename="../mywidget.cpp" line="2990"/>
        <source>PV power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1338"/>
        <location filename="../mywidget.cpp" line="2999"/>
        <source>Battery voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1338"/>
        <location filename="../mywidget.cpp" line="3008"/>
        <source>Battery current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1338"/>
        <location filename="../mywidget.cpp" line="3017"/>
        <source>Battery power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1339"/>
        <location filename="../mywidget.cpp" line="3026"/>
        <source>Bus voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1339"/>
        <location filename="../mywidget.cpp" line="3035"/>
        <source>Bus current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1352"/>
        <source>Inverter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1352"/>
        <source>DC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1386"/>
        <source>PositiveInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1385"/>
        <source>Bus_H_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1385"/>
        <source>Bus_H_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1385"/>
        <source>Bus_L_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1385"/>
        <source>Bus_L_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1386"/>
        <source>NegativeInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1386"/>
        <location filename="../mywidget.cpp" line="3165"/>
        <source>IGBT Temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1524"/>
        <location filename="../mywidget.cpp" line="3417"/>
        <source>DC input breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1524"/>
        <location filename="../mywidget.cpp" line="3421"/>
        <source>DC contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1524"/>
        <source>Maintenance Bypass breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1525"/>
        <location filename="../mywidget.cpp" line="3435"/>
        <source>Output contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1525"/>
        <location filename="../mywidget.cpp" line="3439"/>
        <source>Grid breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1525"/>
        <location filename="../mywidget.cpp" line="3431"/>
        <source>Output breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1528"/>
        <location filename="../mywidget.cpp" line="3458"/>
        <source>DCAC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1528"/>
        <location filename="../mywidget.cpp" line="3462"/>
        <source>DC Soft start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1528"/>
        <location filename="../mywidget.cpp" line="1532"/>
        <source>Converter status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1528"/>
        <location filename="../mywidget.cpp" line="3470"/>
        <source>Reactive power Regulation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1529"/>
        <location filename="../mywidget.cpp" line="3474"/>
        <source>LVRT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1529"/>
        <location filename="../mywidget.cpp" line="3478"/>
        <source>DI1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1529"/>
        <location filename="../mywidget.cpp" line="3482"/>
        <source>DI2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1529"/>
        <location filename="../mywidget.cpp" line="3486"/>
        <source>DI3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1529"/>
        <location filename="../mywidget.cpp" line="3490"/>
        <source>DI4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1529"/>
        <location filename="../mywidget.cpp" line="3494"/>
        <source>DI5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1529"/>
        <location filename="../mywidget.cpp" line="3498"/>
        <source>DI6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1532"/>
        <source>Contactor status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1532"/>
        <source>Contactor status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1531"/>
        <location filename="../mywidget.cpp" line="3508"/>
        <source>Run mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1531"/>
        <location filename="../mywidget.cpp" line="3504"/>
        <source>DCDC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1531"/>
        <source>Soft start status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1531"/>
        <source>Soft start status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11784"/>
        <location filename="../mywidget.cpp" line="1609"/>
        <location filename="../mywidget.cpp" line="3601"/>
        <source>Work parttern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11824"/>
        <location filename="../mywidget.cpp" line="1609"/>
        <location filename="../mywidget.cpp" line="3606"/>
        <source>Boost or Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1701"/>
        <location filename="../mywidget.cpp" line="1870"/>
        <location filename="../mywidget.cpp" line="3863"/>
        <source>Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1701"/>
        <location filename="../mywidget.cpp" line="1870"/>
        <source>StartTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1701"/>
        <location filename="../mywidget.cpp" line="1870"/>
        <source>EndTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1701"/>
        <location filename="../mywidget.cpp" line="1870"/>
        <location filename="../mywidget.cpp" line="3866"/>
        <source>Features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3867"/>
        <source>Power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1758"/>
        <source>PV power generation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1758"/>
        <source>Battery charge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1759"/>
        <source>Battery discharge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1761"/>
        <source> </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1761"/>
        <source>Day(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1761"/>
        <source>Month(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1761"/>
        <source>Year(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1761"/>
        <source>Total(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1793"/>
        <location filename="../mywidget.cpp" line="4901"/>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1793"/>
        <location filename="../mywidget.cpp" line="4903"/>
        <source>Start Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1793"/>
        <location filename="../mywidget.cpp" line="4905"/>
        <source>End Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1793"/>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2019"/>
        <source>Advance setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2599"/>
        <source>Bat volage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1230"/>
        <location filename="../mywidget.cpp" line="2565"/>
        <location filename="../mywidget.cpp" line="2600"/>
        <location filename="../mywidget.cpp" line="2604"/>
        <location filename="../mywidget.cpp" line="2608"/>
        <location filename="../mywidget.cpp" line="2612"/>
        <location filename="../mywidget.cpp" line="2616"/>
        <location filename="../mywidget.cpp" line="2620"/>
        <location filename="../mywidget.cpp" line="2624"/>
        <location filename="../mywidget.cpp" line="2628"/>
        <location filename="../mywidget.cpp" line="2632"/>
        <location filename="../mywidget.cpp" line="2636"/>
        <location filename="../mywidget.cpp" line="2640"/>
        <location filename="../mywidget.cpp" line="2644"/>
        <location filename="../mywidget.cpp" line="2648"/>
        <location filename="../mywidget.cpp" line="2652"/>
        <location filename="../mywidget.cpp" line="2656"/>
        <location filename="../mywidget.cpp" line="2660"/>
        <location filename="../mywidget.cpp" line="2664"/>
        <location filename="../mywidget.cpp" line="2678"/>
        <location filename="../mywidget.cpp" line="2682"/>
        <location filename="../mywidget.cpp" line="2686"/>
        <location filename="../mywidget.cpp" line="2690"/>
        <location filename="../mywidget.cpp" line="2694"/>
        <location filename="../mywidget.cpp" line="2698"/>
        <location filename="../mywidget.cpp" line="2702"/>
        <location filename="../mywidget.cpp" line="2877"/>
        <location filename="../mywidget.cpp" line="6198"/>
        <location filename="../mywidget.cpp" line="6203"/>
        <location filename="../mywidget.cpp" line="6209"/>
        <location filename="../mywidget.cpp" line="6215"/>
        <location filename="../mywidget.cpp" line="6221"/>
        <location filename="../mywidget.cpp" line="6227"/>
        <location filename="../mywidget.cpp" line="6233"/>
        <location filename="../mywidget.cpp" line="6239"/>
        <location filename="../mywidget.cpp" line="6245"/>
        <location filename="../mywidget.cpp" line="6251"/>
        <location filename="../mywidget.cpp" line="6257"/>
        <location filename="../mywidget.cpp" line="6263"/>
        <location filename="../mywidget.cpp" line="6268"/>
        <location filename="../mywidget.cpp" line="6273"/>
        <location filename="../mywidget.cpp" line="6284"/>
        <location filename="../mywidget.cpp" line="6290"/>
        <location filename="../mywidget.cpp" line="6296"/>
        <location filename="../mywidget.cpp" line="6316"/>
        <location filename="../mywidget.cpp" line="6338"/>
        <location filename="../mywidget.cpp" line="6346"/>
        <location filename="../mywidget.cpp" line="6351"/>
        <location filename="../mywidget.cpp" line="6356"/>
        <location filename="../mywidget.cpp" line="6361"/>
        <location filename="../mywidget.cpp" line="6367"/>
        <location filename="../mywidget.cpp" line="6372"/>
        <location filename="../mywidget.cpp" line="6636"/>
        <location filename="../mywidget.cpp" line="6641"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1333"/>
        <source>Inv. Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1333"/>
        <source>Inv. Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1333"/>
        <source>Inv. Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1334"/>
        <source>Inv. Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1334"/>
        <source>Inv. Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1334"/>
        <source>Inv. Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1382"/>
        <source>PV Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1382"/>
        <source>PV Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1382"/>
        <source>PV Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1383"/>
        <source>PV Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1383"/>
        <source>PV Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1383"/>
        <source>PV Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3197"/>
        <source>Grid Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3206"/>
        <source>Grid Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3215"/>
        <source>Grid Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1427"/>
        <location filename="../mywidget.cpp" line="3224"/>
        <source>Grid Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1427"/>
        <location filename="../mywidget.cpp" line="3233"/>
        <source>Grid Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1427"/>
        <location filename="../mywidget.cpp" line="3242"/>
        <source>Grid Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1471"/>
        <location filename="../mywidget.cpp" line="3303"/>
        <source>Load Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1471"/>
        <location filename="../mywidget.cpp" line="3312"/>
        <source>Load Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1471"/>
        <location filename="../mywidget.cpp" line="3321"/>
        <source>Load Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1472"/>
        <location filename="../mywidget.cpp" line="3330"/>
        <source>Load Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1472"/>
        <location filename="../mywidget.cpp" line="3339"/>
        <source>Load Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1472"/>
        <location filename="../mywidget.cpp" line="3348"/>
        <source>Load Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1526"/>
        <location filename="../mywidget.cpp" line="3443"/>
        <source>Start Diesel Generator Signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1701"/>
        <location filename="../mywidget.cpp" line="1870"/>
        <location filename="../mywidget.cpp" line="3878"/>
        <source>Peak-Flat-Valley</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1701"/>
        <location filename="../mywidget.cpp" line="1870"/>
        <source>Power(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1758"/>
        <source>Load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1759"/>
        <source>Grid buy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1759"/>
        <source>Grid sell</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2565"/>
        <source>Stand-by</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2615"/>
        <source>Cell voltage(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2619"/>
        <source>Cell voltage(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2623"/>
        <source>Cell temp.(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2627"/>
        <source>Cell temp.(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2655"/>
        <source>Alarm level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2677"/>
        <source>Interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2678"/>
        <source>This is the interface number, which defaults to eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2681"/>
        <source>Port</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2682"/>
        <source>This is the port number, default 502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2685"/>
        <source>Ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2686"/>
        <source>This is the IP address. The default is 192.168.1.100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2689"/>
        <source>Netmask</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2690"/>
        <source>This is the subnet mask, 255.255.255.0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2693"/>
        <source>Gateway</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2694"/>
        <source>This is the gateway. The default is 192.168.1.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2697"/>
        <source>Serber ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2698"/>
        <source>This is the server IP address. The default is 192.168.1.200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2701"/>
        <source>Apply and Restart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2702"/>
        <source>This is the application and restart the system, click will restart the system, if there is an upgrade, will use the new program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2907"/>
        <source>Inv. voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3061"/>
        <source>Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3070"/>
        <source>Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3079"/>
        <source>Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3088"/>
        <source>Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3097"/>
        <source>Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3106"/>
        <source>Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3130"/>
        <source>Positive bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3139"/>
        <source>Negative bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3148"/>
        <source>Positive bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3157"/>
        <source>Negative bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3255"/>
        <source>Active power P on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3264"/>
        <source>Reactive power Q on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3273"/>
        <source>Apparent power S on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3282"/>
        <source>Power factor PF on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3290"/>
        <source>Frequency on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3361"/>
        <source>Active power P on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3370"/>
        <source>Reactive power Q on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3379"/>
        <source>Apparent power S on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3388"/>
        <source>Power factor PF on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3397"/>
        <source>Frequency on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3417"/>
        <location filename="../mywidget.cpp" line="3421"/>
        <location filename="../mywidget.cpp" line="3426"/>
        <location filename="../mywidget.cpp" line="3431"/>
        <location filename="../mywidget.cpp" line="3435"/>
        <location filename="../mywidget.cpp" line="3439"/>
        <location filename="../mywidget.cpp" line="3524"/>
        <source>On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3418"/>
        <source>There are two states for a DC circuit breaker: On, Off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3422"/>
        <source>The DC contactor has two states: On, Off. After the soft start of the DC side is completed, the DC contactor closes. When the DC side of the battery is disconnected and the voltage of the DC bus drops to a certain level, the DC contactor opens.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3426"/>
        <source>Maintenance Bypass Breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9666"/>
        <location filename="../mywidget.cpp" line="3443"/>
        <location filename="../mywidget.cpp" line="3447"/>
        <location filename="../mywidget.cpp" line="3451"/>
        <location filename="../mywidget.cpp" line="3470"/>
        <location filename="../mywidget.cpp" line="3478"/>
        <location filename="../mywidget.cpp" line="3482"/>
        <location filename="../mywidget.cpp" line="3486"/>
        <location filename="../mywidget.cpp" line="3490"/>
        <location filename="../mywidget.cpp" line="3494"/>
        <location filename="../mywidget.cpp" line="3498"/>
        <location filename="../mywidget.cpp" line="3504"/>
        <location filename="../mywidget.cpp" line="3585"/>
        <location filename="../mywidget.cpp" line="5671"/>
        <location filename="../mywidget.cpp" line="5743"/>
        <location filename="../mywidget.cpp" line="5762"/>
        <source>Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3462"/>
        <source>Not starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3466"/>
        <source>OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3466"/>
        <location filename="../mywidget.cpp" line="3528"/>
        <source>Converter Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3475"/>
        <source>LVRT states : Enable , Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3539"/>
        <source>automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3544"/>
        <source>Constant power(AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3563"/>
        <source>100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3568"/>
        <source>600</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3575"/>
        <source>Local</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3585"/>
        <source>Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3586"/>
        <source>Parallel operation: When converter operates at grid-off mode in parallel, this item needs to be enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6283"/>
        <source>Battery power-on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6284"/>
        <source>Battery power-on: This function allows the BMS to send a command to close the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6289"/>
        <source>Battery power-off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6290"/>
        <source>Battery power-off: This function allows the BMS to send a command to open the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6296"/>
        <source>Hybrid mode: When the function of running according to the schedule is enabled, this option is enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3601"/>
        <source>MPPT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3427"/>
        <source>There are two states for the maintenance bypass circuit breaker: On, Off. This circuit breaker is only used for machine maintenance. If maintenance is required, please contact the maintenance personnel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3436"/>
        <source>The output contactor has two states: On, Off. The output contactor closes after the soft start on the inv. side is completed. The output contactor opens when the converter is shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3520"/>
        <source>Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3521"/>
        <source>DC module high voltage contactor has two states: On, Off; When there is voltage on the high voltage side, close the high voltage contactor; Otherwise, the high voltage contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3529"/>
        <source>DCDC module operation modes states: OFF, Standby, Constant Voltage, Constant Current, MPPT.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3631"/>
        <source>300</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3632"/>
        <source>DC Constant Voltage Value: Constant voltage target, range 200V-850V.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3637"/>
        <source>60</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3638"/>
        <source>DC Constant Current Value: Constant current target, range (0A - 120A) * n (n is the number of online modules).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3660"/>
        <source>DOD Protection Release SOC: When the DOD protection is activated, the current SOC reaches the set SOC value, and the DOD protection is released, allowing the battery to continue discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3672"/>
        <source>Charge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3679"/>
        <source>Disc_Vol_lower_Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3686"/>
        <source>Discharge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3693"/>
        <source>Charge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3700"/>
        <source>Discharge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3728"/>
        <source>Charging is prohibited when the highest single cell voltage reaches this value to prevent overcharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3733"/>
        <source>After triggering the protection for the highest single cell voltage, charging is resumed when the current highest single cell voltage falls below this value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3738"/>
        <source>Discharging is prohibited when the lowest single cell voltage reaches this value to prevent over-discharging..</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3743"/>
        <source>After triggering the protection for the lowest single cell voltage, discharging is resumed when the current lowest single cell voltage exceeds this value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3760"/>
        <location filename="../mywidget.cpp" line="3764"/>
        <source>Reserved function, settings are invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3775"/>
        <source>Capacity, the capacity of the lead-acid battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3779"/>
        <source>Cell_number_2V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3785"/>
        <source>This is the floating charge voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3790"/>
        <source>This is the filling voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3870"/>
        <source>End time: The system stops automatically running when the system reaches this time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4786"/>
        <source>Today&apos;s photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4790"/>
        <source>Monthly photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4794"/>
        <source>Annual photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4798"/>
        <source>Total photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4804"/>
        <source>Daily load electricity consumption </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4805"/>
        <source>Today&apos;s electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4808"/>
        <source>Monthly load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4809"/>
        <source>Monthly electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4812"/>
        <source>Annual load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4813"/>
        <source>Annual electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4816"/>
        <source>Total load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4817"/>
        <source>Total electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4824"/>
        <source>Today&apos;s battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4828"/>
        <source>Monthly battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4832"/>
        <source>Annual battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4836"/>
        <source>Total battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4843"/>
        <source>Today&apos;s battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4847"/>
        <source>Monthly battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4851"/>
        <source>Annual battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4855"/>
        <source>Total battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4861"/>
        <source>Grid buy Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4865"/>
        <source>Grid buy Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4869"/>
        <source>Grid buy Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4873"/>
        <source>Grid buy Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4880"/>
        <source>Grid sell Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4884"/>
        <source>Grid sell Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4888"/>
        <source>Grid sell Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4892"/>
        <source>Grid sell Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4904"/>
        <source>Event start time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4906"/>
        <source>Event end time: &apos;... &apos;indicates that there is no end time,&apos;-&apos; indicates that the event is in progress.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4909"/>
        <source>event description.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4912"/>
        <source>Converter Standby.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4913"/>
        <source>The grid contactor connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4914"/>
        <source>The grid breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4915"/>
        <source>The output breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4916"/>
        <source>Buck not softened</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4917"/>
        <source>Contactor off buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4919"/>
        <source>The grid breaker disconnected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1835"/>
        <location filename="../mywidget.cpp" line="5222"/>
        <source>Record Event</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8395"/>
        <location filename="../mywidget.cpp" line="3539"/>
        <source>Grid conected mode of the converter </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3540"/>
        <source>When &quot;Auto&quot; is selected, the converter will automatically switch between grid-on and grid-off. When the grid side is normal, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter operates in grid-off mode (VF).
When &quot;Grid-on&quot; is selected, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter will shut down.
When &quot;Grid-off&quot; is selected, the converter operates in grid-off mode (VF).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3548"/>
        <source>Batter
priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3554"/>
        <source>This item can modify the power factor, where the power factor is equal to the ratio of active power to apparent power. A positive value indicates leading reactive power, while a negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3559"/>
        <source>This parameter can change the reactive power Q, positive value indicates leading reactive power, negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3564"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant current and modify the current value. Converter will charge or discharge the battery with this current value. Positive values represent discharging, while negative values represent charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3569"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant voltage and modify the voltage value. Converter will operate at the constant voltage value and function as a constant voltage source.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3576"/>
        <source>Local: Converter control through HMI, In this mode, the EMS can only read and cannot write.
Remote: In remote mode, the EMS can perform both read and write control.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3580"/>
        <source>M_01</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3581"/>
        <source>Device number: You can set ID number, which can be set within the range of M_01 to M_12.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3602"/>
        <source>DCDC module working modes include standby, constant voltage (CV), constant current (CC), and maximum power point tracking (MPPT).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3607"/>
        <source>DCDC module operating modes: Buck, Boost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3648"/>
        <source>Grid-on DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3649"/>
        <source>Grid-on DOD, allowable depth of discharge in grid-on mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3654"/>
        <source>Grid-off DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3655"/>
        <source>Grid-off DOD, allowable depth of discharge in grid-off mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3665"/>
        <source>Charging voltage upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3666"/>
        <source>Charging voltage upper limit: When the battery total voltage reaches this value during charging, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3673"/>
        <source>Charging voltage upper limit hysteresis: When the battery is charging, if the battery total voltage reaches the charging voltage upper limit, the converter will shut down. When the battery total voltage drops below the charging voltage upper limit minus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3680"/>
        <source>Discharge voltage lower limit: When the battery total voltage reaches this value during discharge, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3687"/>
        <source>Discharge voltage lower limit hysteresis: When the battery is discharging, if the battery total voltage drops below the discharge voltage lower limit, the converter will shut down. When the battery total voltage exceeds the discharge voltage lower limit plus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3694"/>
        <source>Charging current limit: The maximum allowable current on the battery side to prevent overcurrent during charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3701"/>
        <source>Discharging current limit: The maximum allowable current on the battery side to prevent overcurrent during discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3716"/>
        <source>Generator turn off SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3717"/>
        <source>When the specified SOC is reached, the diesel generator shuts down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3722"/>
        <source>Generator turn on SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3723"/>
        <source>When the specified SOC is reached, the diesel generator starts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3780"/>
        <source>The number of battery cells connected in series in the battery stack (based on a 2V unit).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3795"/>
        <source>Charging Current Limit: The maximum allowable current on the battery side to prevent overcurrent during charging. (Upper limit: 0.25C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3800"/>
        <source>Discharge Current Limit: The maximum allowable current on the battery side to prevent overcurrent during discharge. (Upper limit: 0.5C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3805"/>
        <source>Generator Shutdown Voltage: When the specified voltage is reached, the diesel generator will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3810"/>
        <source>Generator Start Voltage: When the specified voltage is reached, the diesel generator will start up.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3814"/>
        <source>Grid-off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3815"/>
        <source>Grid-off discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3819"/>
        <source>Grid-on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3820"/>
        <source>Grid-on discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3850"/>
        <source>Uniform charging to flushing current: Upper limit of 0.025C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3855"/>
        <source>Float turn to uniform charging current: Upper limit of 0.15C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3871"/>
        <source>The function that will perform this function during business hours, there are six to choose from, They are System for self-use, battery Batter priority, Peak shaving, Output PV power,Economic model.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5223"/>
        <source>System settings operation records.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5347"/>
        <source>Battery Types: Lithium, Lead-Acid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5354"/>
        <source>Battery Communication Modes: None, RS485, CAN, Ethernet. (Note: Due to the fact that CAN and Ethernet both have only one port, the battery communication mode and EMS communication mode cannot be selected as &quot;CAN&quot; or &quot;Ethernet&quot; simultaneously.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5361"/>
        <source>Constant Voltage (CV) mode: The converter will operate in constant voltage mode on the DC side.
Constant Current (CC) mode: The converter will operate in constant current mode on the DC side.
Constant Power AC (CP_AC) mode: The power level can be set at &quot;constant power.&quot; The value represents the power level, positive for discharge and negative for charge. For example, setting it to -5 means that the AC side will charge the battery with a power of 5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Conversely, setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.
Reserved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5367"/>
        <source>EMS communication methods: RS485, CAN, Ethernet.
The setting communication methods are readable and writable in remote mode, and only readable in local mode. The unselected communication methods are only readable in both remote and local mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5374"/>
        <source>Output Power Limit: Restricts the upper limit of the set value for the power on the AC side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5389"/>
        <source>Charging SOC:                                             
 (1) At the self-use mode, when the battery SOC is lower than the charging SOC, the converter maintains the battery SOC at this value.                                             
 (2) At the battery priority mode, the ECP or FCP state is determined based on the current SOC.                                             
 (3) At the optimal mode, when the battery SOC is lower than the charging SOC, the converter enters the FCP state and starts charging the battery. When the current SOC is greater than or equal to the discharge SOC, the converter exits the FCP state and enters the ECP state.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5399"/>
        <source>Discharge SOC: When the SOC is greater than the discharge SOC, the FCP state is released.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5406"/>
        <source>Diesel Generator: Rated Power of the Diesel Generator.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5412"/>
        <source>Energy Priority: In the self-use mode,                                        when selecting battery priority over the grid, the load is powered by the battery as a priority.                                        When selecting the grid priority over the battery, the load is powered by the grid as a priority.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5421"/>
        <source>Serial Communication Address: The default value is 1, adjustable range is between 1 and 255, used for matching address during serial communication.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5427"/>
        <source>Serial Port 2 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400.                                         The default baud rate for Serial Port 2 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5434"/>
        <source>Serial Port 3 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 3 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5440"/>
        <source>Serial Port 4 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 4 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5446"/>
        <source>Serial Port 5 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 5 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5452"/>
        <source>Serial Port 6 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 6 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5458"/>
        <source>CAN1 Port: The baud rate for internal communication is 500 kbps by default and cannot be modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5464"/>
        <source>CAN2 Port: Optional baud rates for the CAN2 port include 100, 125, 250, 500, and 800 kbps, with a default baud rate of 500 kbps.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3708"/>
        <source>When the battery SOC is below the selected value, there are four options: Follow battery, 95%, 90%, 85%.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5474"/>
        <source>Protocol version: View the current protocol version. The default protocol version number is V1.0.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5480"/>
        <source>User password: Available for resetting the user password. The default user password is 123456. (Note: The user password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5486"/>
        <source>Admin password: Available for resetting the admin password. The default admin password is 888888. (Note: The admin password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5517"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5522"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5527"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5532"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5537"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5542"/>
        <source>The discharge zone limits the discharge power of the system to the power grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5551"/>
        <source>Power change rate: the rate at which power changes within a second .</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5556"/>
        <source>Upper limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5557"/>
        <source>Upper limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as 0.2, 0.5, 1, 5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5562"/>
        <source>Lower limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5563"/>
        <source>Lower limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as-0.5, -1, -2, -5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5569"/>
        <source>Upper limit of voltage protection range: The maximum range of voltage variation allowed on the AC side, which can be selected as 10, 15, 20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5575"/>
        <source>Lower limit of voltage protection range: The minimum range of voltage variation allowed on the AC side, which can be selected as -10, -15, -20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5581"/>
        <source>High voltage ride through(HVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5587"/>
        <source>Low voltage ride through(LVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5593"/>
        <source>Prevent islanding effect. When islanding effect is detected (in a photovoltaic grid-on system, when a power outage occurs in the main grid, and the PV grid-connected converter generates power that matches the local load on the low-voltage side of the grid, it can easily sustain power generation independently, resulting in an &apos;island&apos; phenomenon, which endangers the safety of maintenance personnel), the converter automatically shuts down. The options for this feature can be set as &apos;Enable&apos; or &apos;prohibited&apos;.(Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5600"/>
        <source>Insulation detection enable, the insulation resistance should be greater than 33KΩ for normal start-up and operation. If it is less than 33KΩ, it should not start, and an alarm should be triggered. By default, it is disabled, but can be set as &apos;Enable&apos; or &apos;prohibited&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5606"/>
        <source>Primary frequency control enable: When the grid frequency deviates from the rated value, the active power is controlled to increase or decrease in order to maintain the grid frequency at the rated value. It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5612"/>
        <source>Rotational inertia enable: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5624"/>
        <source>Converter Model: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5630"/>
        <source>The rated capacity of the converter shall be based on the factory value and cannot be changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5636"/>
        <source>Output Frequency Level: Default 50Hz, typically 50Hz or 60Hz.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5642"/>
        <source>Output Voltage Level: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5648"/>
        <source>Transformer Voltage Ratio: To be determined by the factory nameplate, not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5654"/>
        <source>Reactive Power Output Mode: Default non-adjustable, options include Power Factor, Reactive Power, non-adjustable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5672"/>
        <source>Converter Anti-Reverse Flow: Enable, Disable;
Enabling prevents converter current from flowing into the grid, while Disabling allows converter current to flow into the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5680"/>
        <source>Over-frequency load shedding: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5686"/>
        <source>QP curve: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5692"/>
        <source>Constant voltage parallel operation enable: It can be selected as enabled or disabled.  (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5698"/>
        <source>Number of modules, default 1(invalid setting).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5708"/>
        <source>Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5732"/>
        <source>Maximum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5738"/>
        <source>Minimum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5744"/>
        <source>DCDC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5752"/>
        <source>When the dry contact is enabled, the device will perform the selected action when there is a change in the signal.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5753"/>
        <source>Input Dry Contact:                       
Enabled: Triggers the Action when the dry contact detects a state other than the specified NO/NC.                      
Disabled: No action is taken when the dry contact detects a state other than the specified NO/NC.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6209"/>
        <source>To view the data for the previous year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6215"/>
        <source>To view the data for the next year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6221"/>
        <source>To view the data of the previous month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6227"/>
        <source>To view the data for the next month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6233"/>
        <source>To view the data of the previous day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6239"/>
        <source>To view the data of the next day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6245"/>
        <source>Export History Records, click here to export the history records to a U disk. The exported file will be named Record.csv, and it needs to be opened with Excel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8188"/>
        <location filename="../mywidget.cpp" line="6262"/>
        <source>Eject U disk</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6263"/>
        <source>Eject U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6346"/>
        <source>The switch to turn on the DCDC converter, click to activate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6351"/>
        <source>The switch to turn off the DCDC converter, click to deactivate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6356"/>
        <source>The switch to turn on the DCAC converter, click to activate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6361"/>
        <source>The switch to turn off the DCAC converter, click to deactivate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6367"/>
        <source>Display the current status of the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6372"/>
        <source>DCDC Module State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6508"/>
        <source>3/3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6517"/>
        <source>2/3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6636"/>
        <source>Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6636"/>
        <source>Click here to modify the time displayed on the HMI.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8962"/>
        <source>Lead</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3864"/>
        <source>Start_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3865"/>
        <source>End_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3868"/>
        <source>9:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3869"/>
        <source>10:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3875"/>
        <source>System for self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8641"/>
        <location filename="../mywidget.cpp" line="5346"/>
        <source>Lithium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3873"/>
        <source>Start time: When the system reaches this time, it starts to run automatically.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3874"/>
        <source>Select: After this function is enabled, the system automatically runs the selected function mode within the specified period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4902"/>
        <source>0 represents an alarm event, and this item will turn red. 1 represents a status event.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5353"/>
        <source>BMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5366"/>
        <source>EMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5379"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5379"/>
        <source>BAT protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5398"/>
        <source>Disharge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5411"/>
        <source>Bat&gt;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5491"/>
        <source>English</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5492"/>
        <source>You can set the display language of the screen to Chinese or English. The system needs to restart before switching the language.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5496"/>
        <source>upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5501"/>
        <source>Allow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5502"/>
        <source>Set whether the display is enabled sound, which can be allowed(Allow) or prohibited(forbid).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5580"/>
        <location filename="../mywidget.cpp" line="5586"/>
        <location filename="../mywidget.cpp" line="5592"/>
        <location filename="../mywidget.cpp" line="5599"/>
        <location filename="../mywidget.cpp" line="5605"/>
        <location filename="../mywidget.cpp" line="5611"/>
        <location filename="../mywidget.cpp" line="5679"/>
        <location filename="../mywidget.cpp" line="5685"/>
        <location filename="../mywidget.cpp" line="5691"/>
        <source>prohibit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5635"/>
        <source>Output Fre grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5641"/>
        <source>Output vol level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5653"/>
        <source>Non adjustable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5679"/>
        <source>Pshedding Freq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5691"/>
        <source>CV parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5703"/>
        <source>restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5704"/>
        <source>Restore the factory default Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5718"/>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5719"/>
        <source>Clear previous recorded data and operation data of the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5725"/>
        <source>When you select DCDC, the DCAC interface freezes, and the maximum module ID and minimum module ID take effect.You can only modify the database to restore the DCAC interface.(Note:As per factory settings, generally not modifiable.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5751"/>
        <source>Normally closed circuit (NC) or normally open circuit (NO) according to field Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5758"/>
        <source>DI_1_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5762"/>
        <source>DI_2_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5766"/>
        <source>DI_3_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5770"/>
        <source>DI_4_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5774"/>
        <source>DI_5_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5778"/>
        <source>DI_6_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5795"/>
        <source>DI_1_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5798"/>
        <source>DI_2_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5801"/>
        <source>DI_3_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5804"/>
        <source>DI_4_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5807"/>
        <source>DI_5_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5810"/>
        <source>DI_6_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5823"/>
        <location filename="../mywidget.cpp" line="5835"/>
        <location filename="../mywidget.cpp" line="5838"/>
        <source>Shut down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5823"/>
        <source>DI_1_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1614"/>
        <location filename="../mywidget.ui" line="1658"/>
        <location filename="../mywidget.ui" line="1702"/>
        <location filename="../mywidget.cpp" line="5826"/>
        <location filename="../mywidget.cpp" line="5829"/>
        <location filename="../mywidget.cpp" line="5832"/>
        <source>Prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5826"/>
        <source>DI_2_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5829"/>
        <source>DI_3_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5832"/>
        <source>DI_4_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5835"/>
        <source>DI_5_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5838"/>
        <source>DI_6_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5854"/>
        <location filename="../mywidget.cpp" line="6080"/>
        <source>It is used for internal debugging only.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14373"/>
        <location filename="../mywidget.cpp" line="5875"/>
        <location filename="../mywidget.cpp" line="6125"/>
        <source>Debug variable 1 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14405"/>
        <location filename="../mywidget.cpp" line="5881"/>
        <location filename="../mywidget.cpp" line="6131"/>
        <source>Debug variable 2 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14429"/>
        <location filename="../mywidget.cpp" line="5887"/>
        <location filename="../mywidget.cpp" line="6137"/>
        <source>Debug variable 3 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5893"/>
        <location filename="../mywidget.cpp" line="6161"/>
        <source>Debug memery var 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5899"/>
        <location filename="../mywidget.cpp" line="6167"/>
        <source>Debug memery var 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5905"/>
        <location filename="../mywidget.cpp" line="6173"/>
        <source>Debug memery var 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5911"/>
        <source>Input Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5917"/>
        <source>Input Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5923"/>
        <source>Voltage 1.5 revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5929"/>
        <source>Bus Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5935"/>
        <source>Grid A AB Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5941"/>
        <source>Grid B BC Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5947"/>
        <source>Grid C CA Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5953"/>
        <source>Output A Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5959"/>
        <source>Output B Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5965"/>
        <source>Output C Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5971"/>
        <source>INV A Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5977"/>
        <source>INV B Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5983"/>
        <source>INV C Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5989"/>
        <source>INV A inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5995"/>
        <source>INV B inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6001"/>
        <source>INV C inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6007"/>
        <location filename="../mywidget.cpp" line="6143"/>
        <source>INV On off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6019"/>
        <source>INV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6055"/>
        <location filename="../mywidget.cpp" line="6155"/>
        <source>parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6067"/>
        <location filename="../mywidget.cpp" line="6185"/>
        <source>Bat Infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6073"/>
        <location filename="../mywidget.cpp" line="6191"/>
        <source>Bat State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6149"/>
        <source>DCONV logic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6257"/>
        <source>Export the battery statistics. Click here to export the battery statistics to the U disk.
The accuracy is 0.1, which means that the obtained data multiplied by 0.1 gives the actual value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6295"/>
        <source>Hybrid mode Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6316"/>
        <source>If this parameter is selected, static IP addresses are used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6338"/>
        <source>If this parameter is selected, the automatically assigned IP address is used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6346"/>
        <location filename="../mywidget.cpp" line="6356"/>
        <source>Turn on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2877"/>
        <source>Alarm icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1228"/>
        <source>Upgrade prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1229"/>
        <source>1. Make sure to press the EPO button before upgrading.                              
2. Before upgrading the DCDC, switch off the ship-type switch of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1230"/>
        <source>Return</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1835"/>
        <location filename="../mywidget.cpp" line="5220"/>
        <source>Modification Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2565"/>
        <source>The converter standby switch. Click the converter to enter the standby state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2632"/>
        <source>The limit of charging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2636"/>
        <source>The limit of discharging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2656"/>
        <source>Alarm levels uploaded from BMS, level one alarm is yellow, level two alarm is orange, and level three alarm is red;
By default, the converter does not respond to level one and level two alarms, but shuts down in response to level three alarms.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2877"/>
        <source>Alarm icon: It is not displayed when there is no alarm. When there is a minor alarm, a yellow icon is displayed. When there is a fault alarm, a red icon is displayed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2889"/>
        <source>Inv. voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2890"/>
        <source>Inv. side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2899"/>
        <source>Inv. side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2908"/>
        <source>Inv. side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2916"/>
        <source>Inv. current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2917"/>
        <source>Inv. side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2925"/>
        <source>Inv. current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2926"/>
        <source>Inv. side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2934"/>
        <source>Inv. current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2935"/>
        <source>Inv. side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2944"/>
        <location filename="../mywidget.cpp" line="3166"/>
        <source>The IGBT temperature of the converter: The IGBT temperature must not exceed 102°C. Otherwise, the converter will operate at a reduced capacity. It will resume full power operation when the temperature drops to 73°C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2953"/>
        <source>The ambient temperature.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3117"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (&gt;30kVA power converter).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2973"/>
        <source>Display the voltage of each PV in turn.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="73"/>
        <source>Optimal model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="73"/>
        <source>Mixed mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1908"/>
        <source>USER</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1916"/>
        <source>MAINTAIN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1924"/>
        <source>ROOT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2431"/>
        <location filename="../mywidget.cpp" line="2458"/>
        <location filename="../mywidget.cpp" line="2469"/>
        <location filename="../mywidget.cpp" line="6498"/>
        <source>1/1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2962"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (＞30kVA power converter).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2982"/>
        <source>Total current on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2991"/>
        <source>Total power on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3000"/>
        <source>converter battery side voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3009"/>
        <source>converter battery side current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3018"/>
        <source>converter battery side power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3027"/>
        <source>converter bus voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3036"/>
        <source>converter bus current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3062"/>
        <source>Voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3071"/>
        <source>Current on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3080"/>
        <source>Power on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3089"/>
        <source>Voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3098"/>
        <source>Current on the low-voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3107"/>
        <source>Power on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3116"/>
        <source>Leakage cur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3129"/>
        <source>Bus H vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3138"/>
        <source>Bus H vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3147"/>
        <source>Bus L vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3156"/>
        <source>Bus L vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3173"/>
        <source>Positive Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3174"/>
        <source>The positive insulation impedance of the DCDC module is normal when the positive insulation impedance is greater than 33kΩ. When the positive insulation impedance is lower than 33kΩ, the insulation fault or potential security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3181"/>
        <source>Negative Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3182"/>
        <source>The negative insulation impedance of the DCDC module is normal when the negative insulation impedance is greater than 33kΩ. When the negative insulation impedance is lower than 33kΩ, the insulation fault or negative security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3198"/>
        <source>Grid side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3207"/>
        <source>Grid side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3216"/>
        <source>Grid side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3225"/>
        <source>Grid side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3234"/>
        <source>Grid side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3243"/>
        <source>Grid side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3304"/>
        <source>Load side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3313"/>
        <source>Load side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3322"/>
        <source>Load side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3331"/>
        <source>Load side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3340"/>
        <source>Load side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3349"/>
        <source>Load side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3432"/>
        <source>The output circuit breaker has two states: On, Off.The Output breaker can only be manually disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3440"/>
        <source>The power grid circuit breaker has two states: On, Off;The power grid circuit breaker can only be manually disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3444"/>
        <source>Signal to start the diesel generator, start the diesel generator when enabled, stop the diesel generator when disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3447"/>
        <source>DO2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3448"/>
        <source>Dry contact 2 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3451"/>
        <source>DO3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3452"/>
        <source>Dry contact 3 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3459"/>
        <location filename="../mywidget.cpp" line="3505"/>
        <source>The converter has two states: enabled,disabled. The converter is enabled when the self-check is successful. Otherwise, the converter is disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3463"/>
        <source>There are three states for DC soft start: Not starting, Soft starting, and Complete. Soft start refers to the process in which the converter charges the busbar with the battery during startup, causing the busbar voltage to rise close to the battery voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3467"/>
        <source>Converter states include: OFF, AC Soft start, Grid-ON Charge, Grid-ON Discharge, Grid-OFF Discharge, Derating grid-on, Standby and Grid-OFF Charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3471"/>
        <source>There are three types of reactive power regulation: Disable,PF regulation, and  regulation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3479"/>
        <source>Input dry contact 1 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3483"/>
        <source>Input dry contact 2 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3487"/>
        <source>Input dry contact 3 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3491"/>
        <source>Input dry contact 4 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3495"/>
        <source>Input dry contact 5 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3499"/>
        <source>Input dry contact 6 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3509"/>
        <source>DCDC module operating modes: Boost, Buck.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3512"/>
        <location filename="../mywidget.cpp" line="3516"/>
        <source>Not
starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3513"/>
        <source>High-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3517"/>
        <source>Low-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3525"/>
        <source>DC module low voltage contactor has two states: On, Off; When there is voltage on the low voltage side, close the contactor on the low voltage side; Otherwise, the low pressure contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3545"/>
        <source>AC Side Power: You can control the charging and discharging power of the battery from the AC side by modifying this value. When the advanced setting for power control mode is set to Constant Power mode (CP_AC), a positive value indicates discharging, and a negative value indicates charging.
For example, setting it to -5 means that the AC side will charge the battery at a power of -5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3659"/>
        <source>DOD Protection Release SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3727"/>
        <source>Cell Voltage max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3732"/>
        <source>Cell Voltage max delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3737"/>
        <source>Cell Voltage min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3742"/>
        <source>Cell Voltage min delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3748"/>
        <source>Force Charge On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3749"/>
        <source>Forced Charging On: When the cell voltage drops below this value, the converter switches to Battery Priority Mode, and the AC side charges the battery with a power of 10kW.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3754"/>
        <source>ForceCharge Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3755"/>
        <source>Forced Charging Off: When the cell voltage exceeds this value, the converter exits Battery Priority Mode and returns to the mode before Forced Charging was enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3759"/>
        <source>DCAC cell protect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3763"/>
        <source>DCAC cell delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3872"/>
        <source>Working Power: Only effective in peak shaving mode. Positive values indicate discharging, while negative values indicate charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3876"/>
        <source>Peak price</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3877"/>
        <source>In the peak shaving and valley filling mode, select &apos;Peak price&apos; periods,&apos;Flat price&apos; periods and &apos;Valley price&apos; periods based on electricity prices.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4748"/>
        <source>This is the monitor screen version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4752"/>
        <source>This is the DCAC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4756"/>
        <source>This is the DCAC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4760"/>
        <source>This is the DCAC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4764"/>
        <source>This is the DCDC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4768"/>
        <source>This is the DCDC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4772"/>
        <source>This is the DCDC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4775"/>
        <source>SN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4776"/>
        <source>This is SN, the serial number of the product.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4785"/>
        <source>PV power generation Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4789"/>
        <source>PV power generation Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4793"/>
        <source>PV power generation Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4797"/>
        <source>PV power generation Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4823"/>
        <location filename="../mywidget.cpp" line="4842"/>
        <source>Battery Charge Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4827"/>
        <location filename="../mywidget.cpp" line="4846"/>
        <source>Battery Discharge Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4831"/>
        <location filename="../mywidget.cpp" line="4850"/>
        <source>Battery Discharge Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4835"/>
        <location filename="../mywidget.cpp" line="4854"/>
        <source>Battery Discharge Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4862"/>
        <source>Today&apos;s electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4866"/>
        <source>Monthly electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4870"/>
        <source>Annual electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4874"/>
        <source>Total electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4881"/>
        <source>Today&apos;s electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4885"/>
        <source>Monthly electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4889"/>
        <source>Annual electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4893"/>
        <source>Total electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4907"/>
        <source>CAN communication failure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4908"/>
        <source>event description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4910"/>
        <source>Fire alarm (High temp. alarm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4911"/>
        <source>Power Meter Comm fualttLead-acid abnormal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5221"/>
        <source>Time when the system Settings are modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5305"/>
        <source>Power control type：CP_P-&gt;CP_N&amp;&amp;P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5309"/>
        <source>Power control type：CP_N&amp;&amp;P-&gt;CP_P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5313"/>
        <source>Grid Fre Upper limit：0.2-&gt;3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5317"/>
        <source>Grid Fre Upper limit：3-&gt;0.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5321"/>
        <source>Voltage protection Lower limit：-10-&gt;-15</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5325"/>
        <source>Voltage protection Lower limit：-15-&gt;-10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5329"/>
        <source>Operation mode：Manual-&gt;UPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5333"/>
        <source>Inv ON/Off-Grid：Off-&gt;automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5337"/>
        <source>Inv ON/Off-Grid：automatic-&gt;Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5380"/>
        <source>Battery Protocol: Parse the messages sent by BMS based on the selected battery protocol.                                             
Currently supported battery manufacturer protocols include:MEGA, LISHEN, GREATPOWER, GOLD, BMSER, LANLI, SLANPOWER, PYLON, CATL, SUOYING, XINGWANGDA, KUBO, GOLD_V2, TOGOOD, GROUP_STANDARD, WOBOYUAN, KGOOER, LD, PYLON_L, VILION, TUOPU,JDI.                                            
Select AUTO to automatically detect the battery manufacturer protocol.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6372"/>
        <source>Rotate to display the status of each online DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6641"/>
        <source>.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6690"/>
        <source>Advanced Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6704"/>
        <location filename="../mywidget.cpp" line="6720"/>
        <source>MPS Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3707"/>
        <source>Follow
battery</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="345"/>
        <location filename="../mywidget.cpp" line="5479"/>
        <source>User password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="393"/>
        <location filename="../mywidget.cpp" line="5485"/>
        <source>Admin password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5506"/>
        <source>20</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5506"/>
        <source>Bms Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5507"/>
        <source>BMS communication fault determination time: The BMS communication fault determination time refers to the BMS communication fault when the BMS communication is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5511"/>
        <source>120</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5511"/>
        <source>EMS Com. Fault Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5512"/>
        <source>EMS communication fault determination time: The EMS communication fault determination time refers to the time when the communication between the EMS is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5666"/>
        <source>Grid restoration time: reserved function, setting invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5708"/>
        <source>Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5709"/>
        <source>Backup setting parameters: Backup setting parameters refers to backing up the parameters set on the current device so that the backup parameter Settings can be restored when needed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5713"/>
        <source>Restore
Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5713"/>
        <source>Restore Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5714"/>
        <source>Restore backup setting parameters: Restore backup setting parameters means to restore the device to the last backup setting parameters and restart the device.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6198"/>
        <source>Choose the first module to view the real-time data of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6203"/>
        <source>Choose the second module to view the real-time data of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6251"/>
        <source>Export operation log. Click here to export operation log to U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6268"/>
        <source>Choose the first module to view the real-time status of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6273"/>
        <source>Choose the second module to view the real-time status of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3520"/>
        <source>Contator Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3524"/>
        <source>Contator Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3508"/>
        <location filename="../mywidget.cpp" line="3606"/>
        <source>Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3512"/>
        <source>Soft Start Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3516"/>
        <source>Soft Start Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3528"/>
        <location filename="../mywidget.cpp" line="6351"/>
        <location filename="../mywidget.cpp" line="6361"/>
        <source>Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1429"/>
        <location filename="../mywidget.cpp" line="3254"/>
        <source>Grid active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1429"/>
        <location filename="../mywidget.cpp" line="3263"/>
        <source>Grid reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1429"/>
        <location filename="../mywidget.cpp" line="3272"/>
        <source>Grid apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1429"/>
        <location filename="../mywidget.cpp" line="3281"/>
        <source>Grid power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1430"/>
        <location filename="../mywidget.cpp" line="3289"/>
        <source>Grid frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1474"/>
        <location filename="../mywidget.cpp" line="3360"/>
        <source>Load active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1474"/>
        <location filename="../mywidget.cpp" line="3369"/>
        <source>Load reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1474"/>
        <location filename="../mywidget.cpp" line="3378"/>
        <source>Load apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1474"/>
        <location filename="../mywidget.cpp" line="3387"/>
        <source>Load power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1475"/>
        <location filename="../mywidget.cpp" line="3396"/>
        <source>Load frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1526"/>
        <source>D02</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1526"/>
        <source>D03</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1611"/>
        <location filename="../mywidget.cpp" line="3631"/>
        <source>DC CV Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1611"/>
        <location filename="../mywidget.cpp" line="3637"/>
        <source>DC CC Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2600"/>
        <source>Total voltage of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2604"/>
        <source>Total current of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2608"/>
        <source>Battery SOC uploaded by BMS refers to the current remaining battery capacity percentage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2612"/>
        <source>Battery SOH uploaded from BMS, the percentage of available capacity after full charge compared to the rated capacity.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2616"/>
        <source>The highest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2620"/>
        <source>The lowest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2624"/>
        <source>The highest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2628"/>
        <source>The lowest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2640"/>
        <source>The allowable charging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2644"/>
        <source>The allowable discharging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2648"/>
        <source>The allowable charging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2652"/>
        <source>The allowable discharging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2659"/>
        <source>Charging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2660"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to charge, Disable indicates the battery is not allowed to charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2663"/>
        <source>Discharging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2664"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to discharge, Disable indicates the battery is not allowed to discharge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2898"/>
        <source>Inv. voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2952"/>
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
        <location filename="../OperMode/opermode.cpp" line="110"/>
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
        <location filename="../OperMode/opermode.cpp" line="111"/>
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
        <location filename="../OperMode/opermode.cpp" line="112"/>
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
        <location filename="../OperMode/opermode.cpp" line="113"/>
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
        <location filename="../OperMode/opermode.cpp" line="114"/>
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
        <location filename="../OperMode/opermode.cpp" line="115"/>
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
        <location filename="../OperMode/opermode.cpp" line="116"/>
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
        <location filename="../OperMode/opermode.cpp" line="117"/>
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
        <location filename="../OperMode/opermode.cpp" line="118"/>
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
        <location filename="../OperMode/opermode.cpp" line="119"/>
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
        <location filename="../OperMode/opermode.cpp" line="120"/>
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
        <location filename="../OperMode/opermode.cpp" line="121"/>
        <source>Discharge Volt. lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="690"/>
        <location filename="../OperMode/opermode.ui" line="1680"/>
        <location filename="../OperMode/opermode.ui" line="2801"/>
        <location filename="../OperMode/opermode.cpp" line="122"/>
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
        <location filename="../OperMode/opermode.cpp" line="123"/>
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
        <location filename="../OperMode/opermode.cpp" line="126"/>
        <source>Generator turn on SOC(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="127"/>
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
        <location filename="../OperMode/opermode.cpp" line="128"/>
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
        <location filename="../OperMode/opermode.ui" line="3169"/>
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
        <location filename="../OperMode/opermode.ui" line="3204"/>
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
        <location filename="../OperMode/opermode.ui" line="3255"/>
        <source>Return</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3301"/>
        <source>Battery
AreaDivision</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3342"/>
        <source>System
for self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3433"/>
        <source>Optimal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3383"/>
        <source>Batter
priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="101"/>
        <source>Click to view</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="102"/>
        <location filename="../OperMode/opermode.cpp" line="140"/>
        <location filename="../OperMode/opermode.cpp" line="143"/>
        <source>Invalid in this mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="103"/>
        <source>In this mode, the charging power of the AC side is limited.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="104"/>
        <source>Protection is not triggered in this mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="105"/>
        <source>If the SOC is lower than this value, it is in the empty zone and FCP is executed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="106"/>
        <source>Disarm FCP point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="107"/>
        <source>Control battery does not discharge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="108"/>
        <source>After DOD is triggered in this mode, it is not triggered in grid-connected mode and is shut down in off-network mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="124"/>
        <source>DOD OnGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="125"/>
        <source>DOD OffGrid(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="129"/>
        <source>DG ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="130"/>
        <source>DG FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="131"/>
        <source>Grid ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="132"/>
        <source>Grid FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="133"/>
        <source>Grid EDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="134"/>
        <source>Grid FDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="136"/>
        <source>Currently, only lithium batteries are supported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="137"/>
        <source>Set the communication mode with the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="138"/>
        <source>This section describes how to set the communication mode with the EMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="139"/>
        <source>In this mode, if the SOC is smaller than the charging SOC, the AC test provides a small power to maintain the charging SOC.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="141"/>
        <source>In this mode, you can choose whether to preferentially use electricity from the grid or battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="142"/>
        <source>In this mode, you can choose whether to reverse the flow.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="144"/>
        <source>Battery charging voltage cut-off point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="145"/>
        <source>Battery charge voltage back almost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="146"/>
        <source>Battery discharge voltage cut-off point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="147"/>
        <source>Battery discharge voltage back to almost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="148"/>
        <source>Limit the battery charging current point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="149"/>
        <source>Limit the battery discharge current point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="150"/>
        <source>In this mode, when the SOC is less than (100 - DOD), the battery does not discharge and does not draw power from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="151"/>
        <source>After DOD is triggered in this mode, no charge or shutdown is performed in grid-connected mode, and the device is shut down in off-network condition.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="152"/>
        <source>When SOC is less than or equal to Chaifa, start Chaifa.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="153"/>
        <source>When SOC is greater than or equal to Chaifa, turn off Chaifa.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="154"/>
        <source>Limit the maximum voltage of the battery charging cell.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="155"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="156"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="157"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="158"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="159"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="160"/>
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
