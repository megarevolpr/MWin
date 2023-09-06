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
    <name>Menu</name>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="26"/>
        <source>Form</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="52"/>
        <location filename="../UI_Menu/Menu.cpp" line="52"/>
        <source>Host</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="84"/>
        <location filename="../UI_Menu/Menu.cpp" line="53"/>
        <source>Rt.Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="116"/>
        <location filename="../UI_Menu/Menu.cpp" line="54"/>
        <source>Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="148"/>
        <location filename="../UI_Menu/Menu.cpp" line="55"/>
        <source>System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="185"/>
        <location filename="../UI_Menu/Menu.cpp" line="56"/>
        <source>Switch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="217"/>
        <location filename="../UI_Menu/Menu.cpp" line="57"/>
        <source>Stand-by</source>
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
        <location filename="../mywidget.cpp" line="5067"/>
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
        <location filename="../mywidget.ui" line="8386"/>
        <location filename="../mywidget.ui" line="8402"/>
        <location filename="../mywidget.ui" line="8434"/>
        <location filename="../mywidget.ui" line="8450"/>
        <location filename="../mywidget.ui" line="8466"/>
        <location filename="../mywidget.ui" line="8482"/>
        <location filename="../mywidget.ui" line="8514"/>
        <location filename="../mywidget.ui" line="9123"/>
        <location filename="../mywidget.ui" line="9303"/>
        <location filename="../mywidget.ui" line="9367"/>
        <location filename="../mywidget.ui" line="9431"/>
        <location filename="../mywidget.ui" line="9495"/>
        <location filename="../mywidget.cpp" line="1565"/>
        <source>-</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="297"/>
        <location filename="../mywidget.cpp" line="5194"/>
        <source>ProtocolVersion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="313"/>
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
        <location filename="../mywidget.cpp" line="5081"/>
        <source>Power control type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="329"/>
        <location filename="../mywidget.cpp" line="5147"/>
        <source>serial port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="414"/>
        <source>EMS Comm. type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="377"/>
        <location filename="../mywidget.cpp" line="5154"/>
        <source>serial port 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="446"/>
        <location filename="../mywidget.cpp" line="5212"/>
        <source>Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="467"/>
        <location filename="../mywidget.cpp" line="5094"/>
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
        <location filename="../mywidget.ui" line="7014"/>
        <location filename="../mywidget.ui" line="7032"/>
        <location filename="../mywidget.ui" line="7050"/>
        <location filename="../mywidget.ui" line="7068"/>
        <location filename="../mywidget.ui" line="8418"/>
        <source>kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="430"/>
        <location filename="../mywidget.cpp" line="5160"/>
        <source>serial port 4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="499"/>
        <source>System upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="483"/>
        <location filename="../mywidget.cpp" line="5166"/>
        <source>serial port 5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="552"/>
        <location filename="../mywidget.cpp" line="5222"/>
        <source>Sounds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="573"/>
        <location filename="../mywidget.cpp" line="5109"/>
        <source>Charge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="589"/>
        <location filename="../mywidget.cpp" line="5178"/>
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
        <location filename="../mywidget.cpp" line="5184"/>
        <source>Can port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="679"/>
        <location filename="../mywidget.cpp" line="5126"/>
        <source>DG capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1056"/>
        <location filename="../mywidget.ui" line="1109"/>
        <location filename="../mywidget.ui" line="6486"/>
        <location filename="../mywidget.ui" line="6504"/>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="727"/>
        <location filename="../mywidget.cpp" line="5132"/>
        <source>Energy priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1072"/>
        <location filename="../mywidget.ui" line="1125"/>
        <location filename="../mywidget.ui" line="6450"/>
        <location filename="../mywidget.ui" line="8546"/>
        <location filename="../mywidget.ui" line="9107"/>
        <location filename="../mywidget.ui" line="9139"/>
        <location filename="../mywidget.ui" line="9155"/>
        <location filename="../mywidget.ui" line="9221"/>
        <location filename="../mywidget.ui" line="9237"/>
        <location filename="../mywidget.ui" line="9447"/>
        <location filename="../mywidget.ui" line="9511"/>
        <location filename="../mywidget.cpp" line="1567"/>
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
        <location filename="../mywidget.cpp" line="5344"/>
        <source>Machine type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="931"/>
        <location filename="../mywidget.cpp" line="5418"/>
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
        <location filename="../mywidget.cpp" line="5350"/>
        <source>Machine capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="979"/>
        <location filename="../mywidget.cpp" line="5424"/>
        <source>Restore factory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1011"/>
        <source>Output Fre. grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1133"/>
        <location filename="../mywidget.cpp" line="5439"/>
        <source>Clear Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1048"/>
        <location filename="../mywidget.cpp" line="5289"/>
        <source>Vol protection upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1064"/>
        <source>Output vol. level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1101"/>
        <location filename="../mywidget.cpp" line="5295"/>
        <source>Vol protection lower limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1239"/>
        <location filename="../mywidget.cpp" line="5452"/>
        <source>Module max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1154"/>
        <location filename="../mywidget.cpp" line="5301"/>
        <source>HVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1170"/>
        <location filename="../mywidget.cpp" line="5374"/>
        <source>Output reactive power mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1292"/>
        <location filename="../mywidget.cpp" line="5458"/>
        <source>Module min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1207"/>
        <source>LVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1345"/>
        <location filename="../mywidget.cpp" line="5464"/>
        <source>Insulation detection enable DCDC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1260"/>
        <location filename="../mywidget.cpp" line="5313"/>
        <source>AFD enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1223"/>
        <location filename="../mywidget.cpp" line="5386"/>
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
        <location filename="../mywidget.cpp" line="5141"/>
        <source>Serial Communication Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="536"/>
        <location filename="../mywidget.cpp" line="5172"/>
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
        <location filename="../mywidget.ui" line="8918"/>
        <location filename="../mywidget.cpp" line="3428"/>
        <source>Release Prohibited Charging Flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1027"/>
        <source>Backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1080"/>
        <source>Restore backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1313"/>
        <location filename="../mywidget.cpp" line="5320"/>
        <source>Insulation detection enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1361"/>
        <location filename="../mywidget.cpp" line="5326"/>
        <source>PrimaryFreq enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1329"/>
        <source>PsheddingFreq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1409"/>
        <location filename="../mywidget.cpp" line="5332"/>
        <source>Inertia enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="899"/>
        <location filename="../mywidget.cpp" line="5271"/>
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
        <location filename="../mywidget.cpp" line="5237"/>
        <source>DG ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="759"/>
        <location filename="../mywidget.cpp" line="5242"/>
        <source>DG FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="775"/>
        <location filename="../mywidget.cpp" line="5247"/>
        <source>Grid ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="791"/>
        <location filename="../mywidget.cpp" line="5252"/>
        <source>Grid FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="807"/>
        <location filename="../mywidget.cpp" line="5257"/>
        <source>Grid EDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="823"/>
        <location filename="../mywidget.cpp" line="5262"/>
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
        <location filename="../mywidget.cpp" line="5392"/>
        <source>Converter Anti-Reverse Flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1377"/>
        <location filename="../mywidget.cpp" line="5406"/>
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
        <source>Enable/Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1529"/>
        <source>NC/NO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1534"/>
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
        <location filename="../mywidget.cpp" line="5578"/>
        <location filename="../mywidget.cpp" line="5804"/>
        <source>Debug variable 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1792"/>
        <source>1.5V Voltage revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1808"/>
        <location filename="../mywidget.ui" line="2371"/>
        <source>Inv on off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1821"/>
        <location filename="../mywidget.ui" line="2307"/>
        <location filename="../mywidget.cpp" line="5584"/>
        <location filename="../mywidget.cpp" line="5810"/>
        <source>Debug variable 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1829"/>
        <source> Bus Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1845"/>
        <location filename="../mywidget.cpp" line="5734"/>
        <source>Logic state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1858"/>
        <location filename="../mywidget.ui" line="2331"/>
        <location filename="../mywidget.cpp" line="5590"/>
        <location filename="../mywidget.cpp" line="5816"/>
        <location filename="../mywidget.cpp" line="5822"/>
        <source>Debug variable 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1866"/>
        <source>Grid A/AB Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1882"/>
        <source>Inv flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1895"/>
        <location filename="../mywidget.ui" line="2291"/>
        <source>Debug variable 1 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1903"/>
        <source>Grid B/BC Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1919"/>
        <location filename="../mywidget.cpp" line="5746"/>
        <source>Grid flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1932"/>
        <location filename="../mywidget.ui" line="2315"/>
        <source>Debug variable 2 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1940"/>
        <source>Grid C/CA Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1956"/>
        <location filename="../mywidget.cpp" line="5752"/>
        <source>Grid protect flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1969"/>
        <location filename="../mywidget.ui" line="2339"/>
        <source>Debug variable 3 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1977"/>
        <source>Output A Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1993"/>
        <location filename="../mywidget.ui" line="2411"/>
        <location filename="../mywidget.cpp" line="5758"/>
        <location filename="../mywidget.cpp" line="5840"/>
        <source>PV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2006"/>
        <location filename="../mywidget.ui" line="2299"/>
        <source>Debug memery var. 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2014"/>
        <source>Output B Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2030"/>
        <location filename="../mywidget.ui" line="2387"/>
        <location filename="../mywidget.cpp" line="5764"/>
        <location filename="../mywidget.cpp" line="5834"/>
        <source>DC bus flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2043"/>
        <source>Debug memery var. 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2051"/>
        <source>Output C Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2067"/>
        <location filename="../mywidget.ui" line="2363"/>
        <location filename="../mywidget.cpp" line="5770"/>
        <location filename="../mywidget.cpp" line="5828"/>
        <source>INT main flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2080"/>
        <location filename="../mywidget.ui" line="2323"/>
        <location filename="../mywidget.ui" line="2347"/>
        <source>Debug memery var. 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2088"/>
        <source>INV A Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2104"/>
        <location filename="../mywidget.ui" line="2419"/>
        <source>Parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2117"/>
        <source>Input Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2125"/>
        <source>INV B Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2141"/>
        <location filename="../mywidget.cpp" line="5782"/>
        <location filename="../mywidget.cpp" line="5900"/>
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
        <source>INV C Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2178"/>
        <source>BatInfor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2186"/>
        <source>INV A inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2194"/>
        <location filename="../mywidget.ui" line="2427"/>
        <source>Bat state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2202"/>
        <source>INV B inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2210"/>
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
        <source>Current ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2379"/>
        <source>Monitor order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2395"/>
        <source>DCONV logic </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2403"/>
        <source>Bat infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2645"/>
        <source>100kW - TS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3120"/>
        <location filename="../mywidget.ui" line="3335"/>
        <location filename="../mywidget.ui" line="3379"/>
        <location filename="../mywidget.ui" line="3451"/>
        <location filename="../mywidget.ui" line="3558"/>
        <location filename="../mywidget.ui" line="3790"/>
        <location filename="../mywidget.ui" line="3874"/>
        <location filename="../mywidget.ui" line="3902"/>
        <source>0V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3149"/>
        <location filename="../mywidget.ui" line="3587"/>
        <location filename="../mywidget.ui" line="3818"/>
        <location filename="../mywidget.ui" line="3846"/>
        <location filename="../mywidget.ui" line="3930"/>
        <source>0A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3165"/>
        <location filename="../mywidget.ui" line="4006"/>
        <source>0kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3363"/>
        <location filename="../mywidget.ui" line="3407"/>
        <location filename="../mywidget.ui" line="3435"/>
        <source>0A </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5887"/>
        <source>Please click on &apos;Alarm Information&apos; to enter the query interface
and view the details of the alarm information you have encountered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5945"/>
        <source>Alarm
Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8664"/>
        <source>A1: 
Generator turn on SOC(A1)
B1: 
Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8687"/>
        <source>Battery
power-on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8706"/>
        <source>Battery
power-off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8798"/>
        <source>DOD Protection Release SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8806"/>
        <source>Cell voltage max(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8822"/>
        <source>Cell voltage max delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8838"/>
        <source>Cell voltage min(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8862"/>
        <source>Cell voltage min delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8878"/>
        <source>ForceCharge On(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8894"/>
        <source>ForceCharge Off(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8910"/>
        <source>DCAC cell protect(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9577"/>
        <source>Hybrid Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10606"/>
        <source>M_01 Converter turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2857"/>
        <source>PV:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2930"/>
        <source>Battery charging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2943"/>
        <source>Battery discharging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2883"/>
        <location filename="../mywidget.ui" line="2917"/>
        <location filename="../mywidget.ui" line="2956"/>
        <location filename="../mywidget.ui" line="4088"/>
        <location filename="../mywidget.ui" line="4166"/>
        <location filename="../mywidget.ui" line="4179"/>
        <source>0kWh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4101"/>
        <source>Load:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3984"/>
        <source>Power meter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3599"/>
        <source>SOC:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8982"/>
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
        <location filename="../mywidget.cpp" line="1148"/>
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
        <location filename="../mywidget.cpp" line="5445"/>
        <source>Rack</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1117"/>
        <location filename="../mywidget.cpp" line="5368"/>
        <source>Transformer Turns Ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1568"/>
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
        <location filename="../mywidget.ui" line="4441"/>
        <location filename="../mywidget.ui" line="5523"/>
        <location filename="../mywidget.ui" line="5757"/>
        <location filename="../mywidget.ui" line="5817"/>
        <location filename="../mywidget.ui" line="8748"/>
        <location filename="../mywidget.ui" line="9701"/>
        <location filename="../mywidget.cpp" line="3274"/>
        <location filename="../mywidget.cpp" line="3279"/>
        <location filename="../mywidget.cpp" line="4643"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4468"/>
        <location filename="../mywidget.ui" line="5550"/>
        <location filename="../mywidget.ui" line="5762"/>
        <location filename="../mywidget.ui" line="5822"/>
        <location filename="../mywidget.ui" line="9706"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4486"/>
        <location filename="../mywidget.ui" line="5568"/>
        <location filename="../mywidget.ui" line="5767"/>
        <location filename="../mywidget.ui" line="5827"/>
        <location filename="../mywidget.ui" line="9711"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4504"/>
        <location filename="../mywidget.ui" line="5586"/>
        <location filename="../mywidget.ui" line="5772"/>
        <location filename="../mywidget.ui" line="5832"/>
        <location filename="../mywidget.ui" line="9716"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4522"/>
        <location filename="../mywidget.ui" line="5604"/>
        <location filename="../mywidget.ui" line="5777"/>
        <location filename="../mywidget.ui" line="5837"/>
        <location filename="../mywidget.ui" line="9721"/>
        <source>5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4540"/>
        <location filename="../mywidget.ui" line="5622"/>
        <location filename="../mywidget.ui" line="5782"/>
        <location filename="../mywidget.ui" line="5842"/>
        <location filename="../mywidget.ui" line="9726"/>
        <source>6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4564"/>
        <location filename="../mywidget.ui" line="5646"/>
        <location filename="../mywidget.ui" line="5787"/>
        <location filename="../mywidget.ui" line="9731"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4582"/>
        <location filename="../mywidget.ui" line="5664"/>
        <location filename="../mywidget.ui" line="5792"/>
        <location filename="../mywidget.ui" line="9736"/>
        <source>8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4600"/>
        <location filename="../mywidget.ui" line="5682"/>
        <location filename="../mywidget.ui" line="5797"/>
        <source>9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4618"/>
        <location filename="../mywidget.ui" line="5700"/>
        <location filename="../mywidget.ui" line="5802"/>
        <source>10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4636"/>
        <location filename="../mywidget.ui" line="5718"/>
        <location filename="../mywidget.ui" line="5807"/>
        <source>11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4654"/>
        <location filename="../mywidget.ui" line="5736"/>
        <location filename="../mywidget.ui" line="5812"/>
        <source>12</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4769"/>
        <source>Converter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4992"/>
        <source>PV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5215"/>
        <source>Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5438"/>
        <source>Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5990"/>
        <source>Battery Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6067"/>
        <location filename="../mywidget.ui" line="6617"/>
        <location filename="../mywidget.ui" line="9053"/>
        <location filename="../mywidget.ui" line="9068"/>
        <location filename="../mywidget.ui" line="9741"/>
        <location filename="../mywidget.cpp" line="1351"/>
        <location filename="../mywidget.cpp" line="1394"/>
        <location filename="../mywidget.cpp" line="1440"/>
        <location filename="../mywidget.cpp" line="1498"/>
        <location filename="../mywidget.cpp" line="1548"/>
        <location filename="../mywidget.cpp" line="1700"/>
        <location filename="../mywidget.cpp" line="1854"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6086"/>
        <source>Bat voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6105"/>
        <location filename="../mywidget.cpp" line="2324"/>
        <source>Bat current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6124"/>
        <location filename="../mywidget.cpp" line="2328"/>
        <source>SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6143"/>
        <location filename="../mywidget.cpp" line="2332"/>
        <source>SOH</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6162"/>
        <source>Cell voltage (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6181"/>
        <source>Cell voltage (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6200"/>
        <source>Cell temp. (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6219"/>
        <source>Cell temp. (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6247"/>
        <location filename="../mywidget.ui" line="6789"/>
        <location filename="../mywidget.ui" line="9058"/>
        <location filename="../mywidget.ui" line="9073"/>
        <location filename="../mywidget.cpp" line="1304"/>
        <location filename="../mywidget.cpp" line="1351"/>
        <location filename="../mywidget.cpp" line="1394"/>
        <location filename="../mywidget.cpp" line="1440"/>
        <location filename="../mywidget.cpp" line="1498"/>
        <location filename="../mywidget.cpp" line="1548"/>
        <location filename="../mywidget.cpp" line="1854"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6274"/>
        <location filename="../mywidget.ui" line="6293"/>
        <location filename="../mywidget.ui" line="6312"/>
        <location filename="../mywidget.ui" line="6331"/>
        <location filename="../mywidget.ui" line="6350"/>
        <location filename="../mywidget.ui" line="6369"/>
        <location filename="../mywidget.ui" line="6388"/>
        <location filename="../mywidget.ui" line="6407"/>
        <location filename="../mywidget.ui" line="6814"/>
        <location filename="../mywidget.ui" line="6833"/>
        <location filename="../mywidget.ui" line="6852"/>
        <location filename="../mywidget.ui" line="6871"/>
        <location filename="../mywidget.ui" line="6890"/>
        <location filename="../mywidget.ui" line="6909"/>
        <location filename="../mywidget.ui" line="9192"/>
        <location filename="../mywidget.ui" line="9274"/>
        <location filename="../mywidget.ui" line="9347"/>
        <location filename="../mywidget.ui" line="9411"/>
        <location filename="../mywidget.ui" line="9475"/>
        <location filename="../mywidget.cpp" line="3265"/>
        <location filename="../mywidget.cpp" line="4621"/>
        <location filename="../mywidget.cpp" line="5237"/>
        <location filename="../mywidget.cpp" line="5242"/>
        <location filename="../mywidget.cpp" line="5247"/>
        <location filename="../mywidget.cpp" line="5252"/>
        <location filename="../mywidget.cpp" line="5257"/>
        <location filename="../mywidget.cpp" line="5262"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6432"/>
        <location filename="../mywidget.ui" line="6960"/>
        <location filename="../mywidget.ui" line="9063"/>
        <location filename="../mywidget.ui" line="9078"/>
        <location filename="../mywidget.cpp" line="1548"/>
        <location filename="../mywidget.cpp" line="1854"/>
        <source>Unit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6468"/>
        <location filename="../mywidget.ui" line="6978"/>
        <location filename="../mywidget.ui" line="6996"/>
        <location filename="../mywidget.ui" line="8530"/>
        <location filename="../mywidget.cpp" line="1567"/>
        <source>A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6522"/>
        <location filename="../mywidget.ui" line="6540"/>
        <source>mV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6558"/>
        <location filename="../mywidget.ui" line="6576"/>
        <source>℃</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7128"/>
        <source>prompt:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7169"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7325"/>
        <source>Alarm level:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1592"/>
        <location filename="../mywidget.ui" line="1636"/>
        <location filename="../mywidget.ui" line="1680"/>
        <location filename="../mywidget.ui" line="7394"/>
        <location filename="../mywidget.ui" line="7438"/>
        <location filename="../mywidget.cpp" line="3179"/>
        <location filename="../mywidget.cpp" line="3195"/>
        <location filename="../mywidget.cpp" line="5479"/>
        <location filename="../mywidget.cpp" line="5487"/>
        <location filename="../mywidget.cpp" line="5491"/>
        <location filename="../mywidget.cpp" line="5495"/>
        <location filename="../mywidget.cpp" line="5499"/>
        <source>Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6671"/>
        <location filename="../mywidget.cpp" line="2360"/>
        <source>Allowable charging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6689"/>
        <location filename="../mywidget.cpp" line="2364"/>
        <source>Allowable discharging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6707"/>
        <location filename="../mywidget.cpp" line="2368"/>
        <source>Allowable charging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6725"/>
        <location filename="../mywidget.cpp" line="2372"/>
        <source>Allowable discharging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7519"/>
        <source>Data report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7632"/>
        <source>yyyy-MM-dd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7664"/>
        <location filename="../mywidget.cpp" line="5929"/>
        <source>Y  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7683"/>
        <location filename="../mywidget.cpp" line="5941"/>
        <source>M  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7702"/>
        <location filename="../mywidget.cpp" line="5953"/>
        <source>D  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7728"/>
        <location filename="../mywidget.cpp" line="5935"/>
        <source>Y  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7747"/>
        <location filename="../mywidget.cpp" line="5947"/>
        <source>M  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7766"/>
        <location filename="../mywidget.cpp" line="5959"/>
        <source>D  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7782"/>
        <source>Export Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7831"/>
        <source>Note:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7851"/>
        <source>Log.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7872"/>
        <source>Out put file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7914"/>
        <source>Report.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7955"/>
        <source>Data To Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5971"/>
        <source>OperationLog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8217"/>
        <source>History Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8107"/>
        <location filename="../mywidget.ui" line="8254"/>
        <source>Operation Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8003"/>
        <source>status:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8319"/>
        <source>DC/AC Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8394"/>
        <location filename="../mywidget.cpp" line="3296"/>
        <source>Control mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8410"/>
        <source>Constant power (AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8426"/>
        <location filename="../mywidget.cpp" line="3301"/>
        <source>Machine number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8458"/>
        <source>Parallel </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8474"/>
        <location filename="../mywidget.cpp" line="3274"/>
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
        <location filename="../mywidget.ui" line="4218"/>
        <source>Grid sell:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4153"/>
        <source>Grid buy:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3609"/>
        <source>0%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4316"/>
        <source>Converter Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5461"/>
        <location filename="../mywidget.cpp" line="6097"/>
        <source>Converter State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5855"/>
        <source>Converter Alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6635"/>
        <location filename="../mywidget.cpp" line="2352"/>
        <source>Charging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6653"/>
        <location filename="../mywidget.cpp" line="2356"/>
        <source>Discharging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7204"/>
        <source>Level1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7246"/>
        <source>Level2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7281"/>
        <source>Level3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7366"/>
        <source>Charging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7410"/>
        <source>Discharging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7893"/>
        <source>Record.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8044"/>
        <source>u disk disconnect!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8078"/>
        <location filename="../mywidget.cpp" line="5965"/>
        <source>History Records</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8142"/>
        <location filename="../mywidget.cpp" line="5977"/>
        <source>Electricity Statistical Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8442"/>
        <source>Working mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8506"/>
        <location filename="../mywidget.cpp" line="3279"/>
        <source>Output reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8522"/>
        <location filename="../mywidget.cpp" line="3284"/>
        <source>Constant current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8538"/>
        <location filename="../mywidget.cpp" line="3289"/>
        <source>Constant voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8574"/>
        <source>DC/DC Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8593"/>
        <source>Battery setup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8766"/>
        <source>DOD_OnGrid(%):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8782"/>
        <source>DOD_OffGrid(%):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8814"/>
        <source>Charge Volt. upper Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8830"/>
        <source>Charge Volt. upper Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8846"/>
        <source>Discharge Volt. lower Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8870"/>
        <source>Discharge Volt. lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8886"/>
        <source>Charge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8902"/>
        <source>Discharge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8774"/>
        <source>Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8790"/>
        <source>Generator turn on SOC(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9016"/>
        <location filename="../mywidget.ui" line="9021"/>
        <location filename="../mywidget.ui" line="9026"/>
        <location filename="../mywidget.ui" line="9031"/>
        <location filename="../mywidget.ui" line="9036"/>
        <location filename="../mywidget.ui" line="9041"/>
        <location filename="../mywidget.ui" line="9046"/>
        <source>New Row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9083"/>
        <location filename="../mywidget.cpp" line="3495"/>
        <source>Capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9091"/>
        <source>Ah</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9099"/>
        <source>Grid off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9115"/>
        <source>Cell number(2V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9131"/>
        <source>Grid on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9147"/>
        <location filename="../mywidget.cpp" line="3505"/>
        <source>Battery float voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9163"/>
        <source>Shutdown voltage point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9229"/>
        <location filename="../mywidget.cpp" line="3510"/>
        <source>Battery filling voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9245"/>
        <source>Mending center point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9311"/>
        <location filename="../mywidget.cpp" line="3515"/>
        <source>Charge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9319"/>
        <location filename="../mywidget.ui" line="9383"/>
        <location filename="../mywidget.ui" line="9527"/>
        <location filename="../mywidget.ui" line="9559"/>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9327"/>
        <source>Temperature filling coefficient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9375"/>
        <location filename="../mywidget.cpp" line="3520"/>
        <source>Discharge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9391"/>
        <source>Mending allowable setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9439"/>
        <location filename="../mywidget.cpp" line="3525"/>
        <source>Generator turn off voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9455"/>
        <source>Temperature alarm upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9503"/>
        <location filename="../mywidget.cpp" line="3530"/>
        <source>Generator turn on voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9519"/>
        <location filename="../mywidget.cpp" line="3570"/>
        <source>Uniform charging and flushing current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9551"/>
        <location filename="../mywidget.cpp" line="3575"/>
        <source>Float turn uniform charging current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9630"/>
        <source>Hybrid Mode Enable：</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9661"/>
        <source>SystemInformation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9674"/>
        <source>Version:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4468"/>
        <source>Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4472"/>
        <source>DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4476"/>
        <source>DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4480"/>
        <source>DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4484"/>
        <source>DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4488"/>
        <source>DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4492"/>
        <source>DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9836"/>
        <source>Network:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9895"/>
        <source>interface:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9936"/>
        <source>Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9917"/>
        <source>eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9958"/>
        <source>502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10151"/>
        <source>Apply and Reatart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9992"/>
        <location filename="../mywidget.cpp" line="6059"/>
        <source>DHCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8931"/>
        <source>DCAC cell delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9746"/>
        <location filename="../mywidget.cpp" line="1700"/>
        <source>System Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9751"/>
        <source>   Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9764"/>
        <source>   DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9772"/>
        <source>   DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9780"/>
        <source>   DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9793"/>
        <source>   DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9801"/>
        <source>   DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9809"/>
        <source>   DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9817"/>
        <source>   SN:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10008"/>
        <location filename="../mywidget.cpp" line="6037"/>
        <source>STATIC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10028"/>
        <source>ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10058"/>
        <source>netmask:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10088"/>
        <source>gateway:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10118"/>
        <source>Server ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10041"/>
        <source>192 . 168 . 1 . 100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10071"/>
        <source>255 . 255 . 255 . 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10101"/>
        <source>192 . 168 .  1  . 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10131"/>
        <source> 192 . 168 . 1  . 200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10433"/>
        <source>DCAC converter 
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10376"/>
        <source>DCAC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10292"/>
        <source>DCDC converter
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10235"/>
        <source>DCDC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10563"/>
        <source>Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10649"/>
        <source>Converter2 Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10719"/>
        <source>640V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10776"/>
        <source>780V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10815"/>
        <source>639V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10825"/>
        <source>150A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10885"/>
        <source>246A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10924"/>
        <source>202A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1157"/>
        <source>切换语言</source>
        <translation>Change Language</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1287"/>
        <location filename="../mywidget.cpp" line="1335"/>
        <location filename="../mywidget.cpp" line="2682"/>
        <source>Leakage current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1287"/>
        <location filename="../mywidget.cpp" line="2664"/>
        <source>IGBT temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1287"/>
        <source>Env. temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1289"/>
        <location filename="../mywidget.cpp" line="2693"/>
        <source>PV voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1289"/>
        <location filename="../mywidget.cpp" line="2702"/>
        <source>PV current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1289"/>
        <location filename="../mywidget.cpp" line="2711"/>
        <source>PV power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1290"/>
        <location filename="../mywidget.cpp" line="2720"/>
        <source>Battery voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1290"/>
        <location filename="../mywidget.cpp" line="2729"/>
        <source>Battery current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1290"/>
        <location filename="../mywidget.cpp" line="2738"/>
        <source>Battery power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1291"/>
        <location filename="../mywidget.cpp" line="2747"/>
        <source>Bus voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1291"/>
        <location filename="../mywidget.cpp" line="2756"/>
        <source>Bus current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1304"/>
        <source>Inverter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1304"/>
        <source>DC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1338"/>
        <source>PositiveInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <source>Bus_H_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <source>Bus_H_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <source>Bus_L_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <source>Bus_L_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1338"/>
        <source>NegativeInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1338"/>
        <location filename="../mywidget.cpp" line="2886"/>
        <source>IGBT Temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1476"/>
        <location filename="../mywidget.cpp" line="3138"/>
        <source>DC input breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1476"/>
        <location filename="../mywidget.cpp" line="3142"/>
        <source>DC contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1476"/>
        <source>Maintenance Bypass breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1477"/>
        <location filename="../mywidget.cpp" line="3156"/>
        <source>Output contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1477"/>
        <location filename="../mywidget.cpp" line="3160"/>
        <source>Grid breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1477"/>
        <location filename="../mywidget.cpp" line="3152"/>
        <source>Output breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1480"/>
        <location filename="../mywidget.cpp" line="3179"/>
        <source>DCAC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1480"/>
        <location filename="../mywidget.cpp" line="3183"/>
        <source>DC Soft start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1480"/>
        <location filename="../mywidget.cpp" line="1484"/>
        <source>Converter status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1480"/>
        <location filename="../mywidget.cpp" line="3191"/>
        <source>Reactive power Regulation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3195"/>
        <source>LVRT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3199"/>
        <source>DI1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3203"/>
        <source>DI2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3207"/>
        <source>DI3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3211"/>
        <source>DI4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3215"/>
        <source>DI5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3219"/>
        <source>DI6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1484"/>
        <source>Contactor status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1484"/>
        <source>Contactor status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1483"/>
        <location filename="../mywidget.cpp" line="3229"/>
        <source>Run mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1483"/>
        <location filename="../mywidget.cpp" line="3225"/>
        <source>DCDC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1483"/>
        <source>Soft start status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1483"/>
        <source>Soft start status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1561"/>
        <location filename="../mywidget.cpp" line="3322"/>
        <source>Work parttern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1561"/>
        <location filename="../mywidget.cpp" line="3327"/>
        <source>Boost or Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <location filename="../mywidget.cpp" line="3584"/>
        <source>Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <source>StartTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <source>EndTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <location filename="../mywidget.cpp" line="3587"/>
        <source>Features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3588"/>
        <source>Power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1710"/>
        <source>PV power generation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1710"/>
        <source>Battery charge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1711"/>
        <source>Battery discharge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source> </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source>Day(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source>Month(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source>Year(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source>Total(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1745"/>
        <location filename="../mywidget.cpp" line="4622"/>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1745"/>
        <location filename="../mywidget.cpp" line="4624"/>
        <source>Start Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1745"/>
        <location filename="../mywidget.cpp" line="4626"/>
        <source>End Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1745"/>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1871"/>
        <source>Advance setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2320"/>
        <source>Bat volage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2299"/>
        <location filename="../mywidget.cpp" line="2321"/>
        <location filename="../mywidget.cpp" line="2325"/>
        <location filename="../mywidget.cpp" line="2329"/>
        <location filename="../mywidget.cpp" line="2333"/>
        <location filename="../mywidget.cpp" line="2337"/>
        <location filename="../mywidget.cpp" line="2341"/>
        <location filename="../mywidget.cpp" line="2345"/>
        <location filename="../mywidget.cpp" line="2349"/>
        <location filename="../mywidget.cpp" line="2353"/>
        <location filename="../mywidget.cpp" line="2357"/>
        <location filename="../mywidget.cpp" line="2361"/>
        <location filename="../mywidget.cpp" line="2365"/>
        <location filename="../mywidget.cpp" line="2369"/>
        <location filename="../mywidget.cpp" line="2373"/>
        <location filename="../mywidget.cpp" line="2377"/>
        <location filename="../mywidget.cpp" line="2381"/>
        <location filename="../mywidget.cpp" line="2385"/>
        <location filename="../mywidget.cpp" line="2399"/>
        <location filename="../mywidget.cpp" line="2403"/>
        <location filename="../mywidget.cpp" line="2407"/>
        <location filename="../mywidget.cpp" line="2411"/>
        <location filename="../mywidget.cpp" line="2415"/>
        <location filename="../mywidget.cpp" line="2419"/>
        <location filename="../mywidget.cpp" line="2423"/>
        <location filename="../mywidget.cpp" line="2598"/>
        <location filename="../mywidget.cpp" line="5919"/>
        <location filename="../mywidget.cpp" line="5924"/>
        <location filename="../mywidget.cpp" line="5930"/>
        <location filename="../mywidget.cpp" line="5936"/>
        <location filename="../mywidget.cpp" line="5942"/>
        <location filename="../mywidget.cpp" line="5948"/>
        <location filename="../mywidget.cpp" line="5954"/>
        <location filename="../mywidget.cpp" line="5960"/>
        <location filename="../mywidget.cpp" line="5966"/>
        <location filename="../mywidget.cpp" line="5972"/>
        <location filename="../mywidget.cpp" line="5978"/>
        <location filename="../mywidget.cpp" line="5984"/>
        <location filename="../mywidget.cpp" line="5989"/>
        <location filename="../mywidget.cpp" line="5994"/>
        <location filename="../mywidget.cpp" line="6005"/>
        <location filename="../mywidget.cpp" line="6011"/>
        <location filename="../mywidget.cpp" line="6017"/>
        <location filename="../mywidget.cpp" line="6037"/>
        <location filename="../mywidget.cpp" line="6059"/>
        <location filename="../mywidget.cpp" line="6067"/>
        <location filename="../mywidget.cpp" line="6072"/>
        <location filename="../mywidget.cpp" line="6077"/>
        <location filename="../mywidget.cpp" line="6082"/>
        <location filename="../mywidget.cpp" line="6087"/>
        <location filename="../mywidget.cpp" line="6092"/>
        <location filename="../mywidget.cpp" line="6097"/>
        <location filename="../mywidget.cpp" line="6102"/>
        <location filename="../mywidget.cpp" line="6150"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1285"/>
        <source>Inv. Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1285"/>
        <source>Inv. Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1285"/>
        <source>Inv. Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1286"/>
        <source>Inv. Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1286"/>
        <source>Inv. Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1286"/>
        <source>Inv. Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1334"/>
        <source>PV Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1334"/>
        <source>PV Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1334"/>
        <source>PV Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>PV Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>PV Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>PV Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1378"/>
        <location filename="../mywidget.cpp" line="2918"/>
        <source>Grid Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1378"/>
        <location filename="../mywidget.cpp" line="2927"/>
        <source>Grid Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1378"/>
        <location filename="../mywidget.cpp" line="2936"/>
        <source>Grid Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1379"/>
        <location filename="../mywidget.cpp" line="2945"/>
        <source>Grid Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1379"/>
        <location filename="../mywidget.cpp" line="2954"/>
        <source>Grid Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1379"/>
        <location filename="../mywidget.cpp" line="2963"/>
        <source>Grid Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1423"/>
        <location filename="../mywidget.cpp" line="3024"/>
        <source>Load Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1423"/>
        <location filename="../mywidget.cpp" line="3033"/>
        <source>Load Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1423"/>
        <location filename="../mywidget.cpp" line="3042"/>
        <source>Load Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1424"/>
        <location filename="../mywidget.cpp" line="3051"/>
        <source>Load Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1424"/>
        <location filename="../mywidget.cpp" line="3060"/>
        <source>Load Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1424"/>
        <location filename="../mywidget.cpp" line="3069"/>
        <source>Load Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1478"/>
        <location filename="../mywidget.cpp" line="3164"/>
        <source>Start Diesel Generator Signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <location filename="../mywidget.cpp" line="3599"/>
        <source>Peak-Flat-Valley</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <source>Power(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1710"/>
        <source>Load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1711"/>
        <source>Grid buy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1711"/>
        <source>Grid sell</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2299"/>
        <source>Stand-by</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2336"/>
        <source>Cell voltage(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2340"/>
        <source>Cell voltage(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2344"/>
        <source>Cell temp.(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2348"/>
        <source>Cell temp.(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2376"/>
        <source>Alarm level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2398"/>
        <source>Interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2399"/>
        <source>This is the interface number, which defaults to eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2402"/>
        <source>Port</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2403"/>
        <source>This is the port number, default 502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2406"/>
        <source>Ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2407"/>
        <source>This is the IP address. The default is 192.168.1.100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2410"/>
        <source>Netmask</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2411"/>
        <source>This is the subnet mask, 255.255.255.0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2414"/>
        <source>Gateway</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2415"/>
        <source>This is the gateway. The default is 192.168.1.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2418"/>
        <source>Serber ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2419"/>
        <source>This is the server IP address. The default is 192.168.1.200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2422"/>
        <source>Apply and Restart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2423"/>
        <source>This is the application and restart the system, click will restart the system, if there is an upgrade, will use the new program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2628"/>
        <source>Inv. voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2782"/>
        <source>Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2791"/>
        <source>Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2800"/>
        <source>Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2809"/>
        <source>Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2818"/>
        <source>Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2827"/>
        <source>Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2851"/>
        <source>Positive bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2860"/>
        <source>Negative bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2869"/>
        <source>Positive bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2878"/>
        <source>Negative bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2976"/>
        <source>Active power P on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2985"/>
        <source>Reactive power Q on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2994"/>
        <source>Apparent power S on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3003"/>
        <source>Power factor PF on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3011"/>
        <source>Frequency on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3082"/>
        <source>Active power P on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3091"/>
        <source>Reactive power Q on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3100"/>
        <source>Apparent power S on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3109"/>
        <source>Power factor PF on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3118"/>
        <source>Frequency on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3138"/>
        <location filename="../mywidget.cpp" line="3142"/>
        <location filename="../mywidget.cpp" line="3147"/>
        <location filename="../mywidget.cpp" line="3152"/>
        <location filename="../mywidget.cpp" line="3156"/>
        <location filename="../mywidget.cpp" line="3160"/>
        <location filename="../mywidget.cpp" line="3245"/>
        <source>On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3139"/>
        <source>There are two states for a DC circuit breaker: On, Off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3143"/>
        <source>The DC contactor has two states: On, Off. After the soft start of the DC side is completed, the DC contactor closes. When the DC side of the battery is disconnected and the voltage of the DC bus drops to a certain level, the DC contactor opens.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3147"/>
        <source>Maintenance Bypass Breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9649"/>
        <location filename="../mywidget.cpp" line="3164"/>
        <location filename="../mywidget.cpp" line="3168"/>
        <location filename="../mywidget.cpp" line="3172"/>
        <location filename="../mywidget.cpp" line="3191"/>
        <location filename="../mywidget.cpp" line="3199"/>
        <location filename="../mywidget.cpp" line="3203"/>
        <location filename="../mywidget.cpp" line="3207"/>
        <location filename="../mywidget.cpp" line="3211"/>
        <location filename="../mywidget.cpp" line="3215"/>
        <location filename="../mywidget.cpp" line="3219"/>
        <location filename="../mywidget.cpp" line="3225"/>
        <location filename="../mywidget.cpp" line="3306"/>
        <location filename="../mywidget.cpp" line="5392"/>
        <location filename="../mywidget.cpp" line="5464"/>
        <location filename="../mywidget.cpp" line="5483"/>
        <source>Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3183"/>
        <source>Not starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3187"/>
        <source>OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3187"/>
        <location filename="../mywidget.cpp" line="3249"/>
        <source>Converter Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3196"/>
        <source>LVRT states : Enable , Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3260"/>
        <source>automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3265"/>
        <source>Constant power(AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3284"/>
        <source>100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3289"/>
        <source>600</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3296"/>
        <source>Local</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3306"/>
        <source>Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3307"/>
        <source>Parallel operation: When converter operates at grid-off mode in parallel, this item needs to be enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6004"/>
        <source>Battery power-on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6005"/>
        <source>Battery power-on: This function allows the BMS to send a command to close the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6010"/>
        <source>Battery power-off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6011"/>
        <source>Battery power-off: This function allows the BMS to send a command to open the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6017"/>
        <source>Hybrid mode: When the function of running according to the schedule is enabled, this option is enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3322"/>
        <source>MPPT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3148"/>
        <source>There are two states for the maintenance bypass circuit breaker: On, Off. This circuit breaker is only used for machine maintenance. If maintenance is required, please contact the maintenance personnel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3157"/>
        <source>The output contactor has two states: On, Off. The output contactor closes after the soft start on the inv. side is completed. The output contactor opens when the converter is shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3241"/>
        <source>Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3242"/>
        <source>DC module high voltage contactor has two states: On, Off; When there is voltage on the high voltage side, close the high voltage contactor; Otherwise, the high voltage contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3250"/>
        <source>DCDC module operation modes states: OFF, Standby, Constant Voltage, Constant Current, MPPT.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3352"/>
        <source>300</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3353"/>
        <source>DC Constant Voltage Value: Constant voltage target, range 200V-850V.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3358"/>
        <source>60</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3359"/>
        <source>DC Constant Current Value: Constant current target, range (0A - 120A) * n (n is the number of online modules).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3381"/>
        <source>DOD Protection Release SOC: When the DOD protection is activated, the current SOC reaches the set SOC value, and the DOD protection is released, allowing the battery to continue discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3393"/>
        <source>Charge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3400"/>
        <source>Disc_Vol_lower_Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3407"/>
        <source>Discharge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3414"/>
        <source>Charge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3421"/>
        <source>Discharge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3449"/>
        <source>Charging is prohibited when the highest single cell voltage reaches this value to prevent overcharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3454"/>
        <source>After triggering the protection for the highest single cell voltage, charging is resumed when the current highest single cell voltage falls below this value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3459"/>
        <source>Discharging is prohibited when the lowest single cell voltage reaches this value to prevent over-discharging..</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3464"/>
        <source>After triggering the protection for the lowest single cell voltage, discharging is resumed when the current lowest single cell voltage exceeds this value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3481"/>
        <location filename="../mywidget.cpp" line="3485"/>
        <source>Reserved function, settings are invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3496"/>
        <source>Capacity, the capacity of the lead-acid battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3500"/>
        <source>Cell_number_2V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3506"/>
        <source>This is the floating charge voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3511"/>
        <source>This is the filling voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3591"/>
        <source>End time: The system stops automatically running when the system reaches this time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4507"/>
        <source>Today&apos;s photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4511"/>
        <source>Monthly photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4515"/>
        <source>Annual photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4519"/>
        <source>Total photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4525"/>
        <source>Daily load electricity consumption </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4526"/>
        <source>Today&apos;s electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4529"/>
        <source>Monthly load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4530"/>
        <source>Monthly electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4533"/>
        <source>Annual load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4534"/>
        <source>Annual electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4537"/>
        <source>Total load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4538"/>
        <source>Total electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4545"/>
        <source>Today&apos;s battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4549"/>
        <source>Monthly battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4553"/>
        <source>Annual battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4557"/>
        <source>Total battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4564"/>
        <source>Today&apos;s battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4568"/>
        <source>Monthly battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4572"/>
        <source>Annual battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4576"/>
        <source>Total battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4582"/>
        <source>Grid buy Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4586"/>
        <source>Grid buy Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4590"/>
        <source>Grid buy Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4594"/>
        <source>Grid buy Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4601"/>
        <source>Grid sell Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4605"/>
        <source>Grid sell Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4609"/>
        <source>Grid sell Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4613"/>
        <source>Grid sell Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4625"/>
        <source>Event start time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4627"/>
        <source>Event end time: &apos;... &apos;indicates that there is no end time,&apos;-&apos; indicates that the event is in progress.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4630"/>
        <source>event description.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4633"/>
        <source>Converter Standby.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4634"/>
        <source>The grid contactor connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4635"/>
        <source>The grid breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4636"/>
        <source>The output breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4637"/>
        <source>Buck not softened</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4638"/>
        <source>Contactor off buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4640"/>
        <source>The grid breaker disconnected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1789"/>
        <location filename="../mywidget.cpp" line="4943"/>
        <source>Record Event</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8378"/>
        <location filename="../mywidget.cpp" line="3260"/>
        <source>Grid conected mode of the converter </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3261"/>
        <source>When &quot;Auto&quot; is selected, the converter will automatically switch between grid-on and grid-off. When the grid side is normal, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter operates in grid-off mode (VF).
When &quot;Grid-on&quot; is selected, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter will shut down.
When &quot;Grid-off&quot; is selected, the converter operates in grid-off mode (VF).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3269"/>
        <source>Batter
priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3275"/>
        <source>This item can modify the power factor, where the power factor is equal to the ratio of active power to apparent power. A positive value indicates leading reactive power, while a negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3280"/>
        <source>This parameter can change the reactive power Q, positive value indicates leading reactive power, negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3285"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant current and modify the current value. Converter will charge or discharge the battery with this current value. Positive values represent discharging, while negative values represent charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3290"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant voltage and modify the voltage value. Converter will operate at the constant voltage value and function as a constant voltage source.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3297"/>
        <source>Local: Converter control through HMI, In this mode, the EMS can only read and cannot write.
Remote: In remote mode, the EMS can perform both read and write control.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3301"/>
        <source>M_01</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3302"/>
        <source>Device number: You can set ID number, which can be set within the range of M_01 to M_12.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3323"/>
        <source>DCDC module working modes include standby, constant voltage (CV), constant current (CC), and maximum power point tracking (MPPT).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3328"/>
        <source>DCDC module operating modes: Buck, Boost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3369"/>
        <source>Grid-on DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3370"/>
        <source>Grid-on DOD, allowable depth of discharge in grid-on mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3375"/>
        <source>Grid-off DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3376"/>
        <source>Grid-off DOD, allowable depth of discharge in grid-off mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3386"/>
        <source>Charging voltage upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3387"/>
        <source>Charging voltage upper limit: When the battery total voltage reaches this value during charging, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3394"/>
        <source>Charging voltage upper limit hysteresis: When the battery is charging, if the battery total voltage reaches the charging voltage upper limit, the converter will shut down. When the battery total voltage drops below the charging voltage upper limit minus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3401"/>
        <source>Discharge voltage lower limit: When the battery total voltage reaches this value during discharge, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3408"/>
        <source>Discharge voltage lower limit hysteresis: When the battery is discharging, if the battery total voltage drops below the discharge voltage lower limit, the converter will shut down. When the battery total voltage exceeds the discharge voltage lower limit plus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3415"/>
        <source>Charging current limit: The maximum allowable current on the battery side to prevent overcurrent during charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3422"/>
        <source>Discharging current limit: The maximum allowable current on the battery side to prevent overcurrent during discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3437"/>
        <source>Generator turn off SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3438"/>
        <source>When the specified SOC is reached, the diesel generator shuts down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3443"/>
        <source>Generator turn on SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3444"/>
        <source>When the specified SOC is reached, the diesel generator starts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3501"/>
        <source>The number of battery cells connected in series in the battery stack (based on a 2V unit).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3516"/>
        <source>Charging Current Limit: The maximum allowable current on the battery side to prevent overcurrent during charging. (Upper limit: 0.25C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3521"/>
        <source>Discharge Current Limit: The maximum allowable current on the battery side to prevent overcurrent during discharge. (Upper limit: 0.5C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3526"/>
        <source>Generator Shutdown Voltage: When the specified voltage is reached, the diesel generator will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3531"/>
        <source>Generator Start Voltage: When the specified voltage is reached, the diesel generator will start up.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3535"/>
        <source>Grid-off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3536"/>
        <source>Grid-off discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3540"/>
        <source>Grid-on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3541"/>
        <source>Grid-on discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3571"/>
        <source>Uniform charging to flushing current: Upper limit of 0.025C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3576"/>
        <source>Float turn to uniform charging current: Upper limit of 0.15C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3592"/>
        <source>The function that will perform this function during business hours, there are six to choose from, They are System for self-use, battery Batter priority, Peak shaving, Output PV power,Economic model.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4944"/>
        <source>System settings operation records.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5068"/>
        <source>Battery Types: Lithium, Lead-Acid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5075"/>
        <source>Battery Communication Modes: None, RS485, CAN, Ethernet. (Note: Due to the fact that CAN and Ethernet both have only one port, the battery communication mode and EMS communication mode cannot be selected as &quot;CAN&quot; or &quot;Ethernet&quot; simultaneously.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5082"/>
        <source>Constant Voltage (CV) mode: The converter will operate in constant voltage mode on the DC side.
Constant Current (CC) mode: The converter will operate in constant current mode on the DC side.
Constant Power AC (CP_AC) mode: The power level can be set at &quot;constant power.&quot; The value represents the power level, positive for discharge and negative for charge. For example, setting it to -5 means that the AC side will charge the battery with a power of 5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Conversely, setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.
Reserved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5088"/>
        <source>EMS communication methods: RS485, CAN, Ethernet.
The setting communication methods are readable and writable in remote mode, and only readable in local mode. The unselected communication methods are only readable in both remote and local mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5095"/>
        <source>Output Power Limit: Restricts the upper limit of the set value for the power on the AC side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5110"/>
        <source>Charging SOC:                                             
 (1) At the self-use mode, when the battery SOC is lower than the charging SOC, the converter maintains the battery SOC at this value.                                             
 (2) At the battery priority mode, the ECP or FCP state is determined based on the current SOC.                                             
 (3) At the optimal mode, when the battery SOC is lower than the charging SOC, the converter enters the FCP state and starts charging the battery. When the current SOC is greater than or equal to the discharge SOC, the converter exits the FCP state and enters the ECP state.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5120"/>
        <source>Discharge SOC: When the SOC is greater than the discharge SOC, the FCP state is released.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5127"/>
        <source>Diesel Generator: Rated Power of the Diesel Generator.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5133"/>
        <source>Energy Priority: In the self-use mode,                                        when selecting battery priority over the grid, the load is powered by the battery as a priority.                                        When selecting the grid priority over the battery, the load is powered by the grid as a priority.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5142"/>
        <source>Serial Communication Address: The default value is 1, adjustable range is between 1 and 255, used for matching address during serial communication.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5148"/>
        <source>Serial Port 2 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400.                                         The default baud rate for Serial Port 2 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5155"/>
        <source>Serial Port 3 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 3 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5161"/>
        <source>Serial Port 4 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 4 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5167"/>
        <source>Serial Port 5 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 5 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5173"/>
        <source>Serial Port 6 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 6 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5179"/>
        <source>CAN1 Port: The baud rate for internal communication is 500 kbps by default and cannot be modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5185"/>
        <source>CAN2 Port: Optional baud rates for the CAN2 port include 100, 125, 250, 500, and 800 kbps, with a default baud rate of 500 kbps.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3429"/>
        <source>When the battery SOC is below the selected value, there are four options: Follow battery, 95%, 90%, 85%.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5195"/>
        <source>Protocol version: View the current protocol version. The default protocol version number is V1.0.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5201"/>
        <source>User password: Available for resetting the user password. The default user password is 123456. (Note: The user password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5207"/>
        <source>Admin password: Available for resetting the admin password. The default admin password is 888888. (Note: The admin password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5238"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5243"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5248"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5253"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5258"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5263"/>
        <source>The discharge zone limits the discharge power of the system to the power grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5272"/>
        <source>Power change rate: the rate at which power changes within a second .</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5277"/>
        <source>Upper limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5278"/>
        <source>Upper limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as 0.2, 0.5, 1, 5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5283"/>
        <source>Lower limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5284"/>
        <source>Lower limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as-0.5, -1, -2, -5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5290"/>
        <source>Upper limit of voltage protection range: The maximum range of voltage variation allowed on the AC side, which can be selected as 10, 15, 20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5296"/>
        <source>Lower limit of voltage protection range: The minimum range of voltage variation allowed on the AC side, which can be selected as -10, -15, -20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5302"/>
        <source>High voltage ride through(HVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5308"/>
        <source>Low voltage ride through(LVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5314"/>
        <source>Prevent islanding effect. When islanding effect is detected (in a photovoltaic grid-on system, when a power outage occurs in the main grid, and the PV grid-connected converter generates power that matches the local load on the low-voltage side of the grid, it can easily sustain power generation independently, resulting in an &apos;island&apos; phenomenon, which endangers the safety of maintenance personnel), the converter automatically shuts down. The options for this feature can be set as &apos;Enable&apos; or &apos;prohibited&apos;.(Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5321"/>
        <source>Insulation detection enable, the insulation resistance should be greater than 33KΩ for normal start-up and operation. If it is less than 33KΩ, it should not start, and an alarm should be triggered. By default, it is disabled, but can be set as &apos;Enable&apos; or &apos;prohibited&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5327"/>
        <source>Primary frequency control enable: When the grid frequency deviates from the rated value, the active power is controlled to increase or decrease in order to maintain the grid frequency at the rated value. It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5333"/>
        <source>Rotational inertia enable: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5345"/>
        <source>Converter Model: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5351"/>
        <source>The rated capacity of the converter shall be based on the factory value and cannot be changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5357"/>
        <source>Output Frequency Level: Default 50Hz, typically 50Hz or 60Hz.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5363"/>
        <source>Output Voltage Level: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5369"/>
        <source>Transformer Voltage Ratio: To be determined by the factory nameplate, not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5375"/>
        <source>Reactive Power Output Mode: Default non-adjustable, options include Power Factor, Reactive Power, non-adjustable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5393"/>
        <source>Converter Anti-Reverse Flow: Enable, Disable;
Enabling prevents converter current from flowing into the grid, while Disabling allows converter current to flow into the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5401"/>
        <source>Over-frequency load shedding: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5407"/>
        <source>QP curve: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5413"/>
        <source>Constant voltage parallel operation enable: It can be selected as enabled or disabled.  (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5419"/>
        <source>Number of modules, default 1(invalid setting).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5429"/>
        <source>Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5453"/>
        <source>Maximum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5459"/>
        <source>Minimum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5465"/>
        <source>DCDC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5473"/>
        <source>When the dry contact is enabled, the device will perform the selected action when there is a change in the signal.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5474"/>
        <source>Input Dry Contact:                       
Enabled: Triggers the Action when the dry contact detects a state other than the specified NO/NC.                      
Disabled: No action is taken when the dry contact detects a state other than the specified NO/NC.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5930"/>
        <source>To view the data for the previous year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5936"/>
        <source>To view the data for the next year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5942"/>
        <source>To view the data of the previous month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5948"/>
        <source>To view the data for the next month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5954"/>
        <source>To view the data of the previous day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5960"/>
        <source>To view the data of the next day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5966"/>
        <source>Export History Records, click here to export the history records to a U disk. The exported file will be named Record.csv, and it needs to be opened with Excel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8171"/>
        <location filename="../mywidget.cpp" line="5983"/>
        <source>Eject U disk</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5984"/>
        <source>Eject U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6067"/>
        <source>The switch to turn on the DCDC converter, click to activate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6072"/>
        <source>The switch to turn off the DCDC converter, click to deactivate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6077"/>
        <source>The switch to turn on the DCAC converter, click to activate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6082"/>
        <source>The switch to turn off the DCAC converter, click to deactivate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6097"/>
        <source>Display the current status of the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6102"/>
        <source>DCDC Module State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6150"/>
        <source>Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6150"/>
        <source>Click here to modify the time displayed on the HMI.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8945"/>
        <source>Lead</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3585"/>
        <source>Start_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3586"/>
        <source>End_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3589"/>
        <source>9:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3590"/>
        <source>10:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3596"/>
        <source>System for self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8624"/>
        <location filename="../mywidget.cpp" line="5067"/>
        <source>Lithium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3594"/>
        <source>Start time: When the system reaches this time, it starts to run automatically.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3595"/>
        <source>Select: After this function is enabled, the system automatically runs the selected function mode within the specified period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4623"/>
        <source>0 represents an alarm event, and this item will turn red. 1 represents a status event.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5074"/>
        <source>BMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5087"/>
        <source>EMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5100"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5100"/>
        <source>BAT protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5119"/>
        <source>Disharge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5132"/>
        <source>Bat&gt;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5212"/>
        <source>English</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5213"/>
        <source>You can set the display language of the screen to Chinese or English. The system needs to restart before switching the language.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5217"/>
        <source>upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5222"/>
        <source>Allow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5223"/>
        <source>Set whether the display is enabled sound, which can be allowed(Allow) or prohibited(forbid).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5301"/>
        <location filename="../mywidget.cpp" line="5307"/>
        <location filename="../mywidget.cpp" line="5313"/>
        <location filename="../mywidget.cpp" line="5320"/>
        <location filename="../mywidget.cpp" line="5326"/>
        <location filename="../mywidget.cpp" line="5332"/>
        <location filename="../mywidget.cpp" line="5400"/>
        <location filename="../mywidget.cpp" line="5406"/>
        <location filename="../mywidget.cpp" line="5412"/>
        <source>prohibit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5356"/>
        <source>Output Fre grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5362"/>
        <source>Output vol level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5374"/>
        <source>Non adjustable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5400"/>
        <source>Pshedding Freq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5412"/>
        <source>CV parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5424"/>
        <source>restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5425"/>
        <source>Restore the factory default Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5439"/>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5440"/>
        <source>Clear previous recorded data and operation data of the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5446"/>
        <source>When you select DCDC, the DCAC interface freezes, and the maximum module ID and minimum module ID take effect.You can only modify the database to restore the DCAC interface.(Note:As per factory settings, generally not modifiable.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5472"/>
        <source>Normally closed circuit (NC) or normally open circuit (NO) according to field Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5479"/>
        <source>DI_1_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5483"/>
        <source>DI_2_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5487"/>
        <source>DI_3_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5491"/>
        <source>DI_4_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5495"/>
        <source>DI_5_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5499"/>
        <source>DI_6_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5516"/>
        <source>DI_1_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5519"/>
        <source>DI_2_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5522"/>
        <source>DI_3_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5525"/>
        <source>DI_4_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5528"/>
        <source>DI_5_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5531"/>
        <source>DI_6_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5544"/>
        <location filename="../mywidget.cpp" line="5556"/>
        <location filename="../mywidget.cpp" line="5559"/>
        <source>Shut down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5544"/>
        <source>DI_1_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1614"/>
        <location filename="../mywidget.ui" line="1658"/>
        <location filename="../mywidget.ui" line="1702"/>
        <location filename="../mywidget.cpp" line="5547"/>
        <location filename="../mywidget.cpp" line="5550"/>
        <location filename="../mywidget.cpp" line="5553"/>
        <source>Prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5547"/>
        <source>DI_2_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5550"/>
        <source>DI_3_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5553"/>
        <source>DI_4_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5556"/>
        <source>DI_5_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5559"/>
        <source>DI_6_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5575"/>
        <location filename="../mywidget.cpp" line="5801"/>
        <source>It is used for internal debugging only.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5596"/>
        <location filename="../mywidget.cpp" line="5846"/>
        <source>Debug variable 1 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5602"/>
        <location filename="../mywidget.cpp" line="5852"/>
        <source>Debug variable 2 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5608"/>
        <location filename="../mywidget.cpp" line="5858"/>
        <source>Debug variable 3 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5614"/>
        <location filename="../mywidget.cpp" line="5882"/>
        <source>Debug memery var 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5620"/>
        <location filename="../mywidget.cpp" line="5888"/>
        <source>Debug memery var 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5626"/>
        <location filename="../mywidget.cpp" line="5894"/>
        <source>Debug memery var 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5632"/>
        <source>Input Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5638"/>
        <source>Input Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5644"/>
        <source>Voltage 1.5 revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5650"/>
        <source>Bus Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5656"/>
        <source>Grid A AB Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5662"/>
        <source>Grid B BC Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5668"/>
        <source>Grid C CA Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5674"/>
        <source>Output A Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5680"/>
        <source>Output B Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5686"/>
        <source>Output C Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5692"/>
        <source>INV A Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5698"/>
        <source>INV B Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5704"/>
        <source>INV C Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5710"/>
        <source>INV A inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5716"/>
        <source>INV B inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5722"/>
        <source>INV C inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5728"/>
        <location filename="../mywidget.cpp" line="5864"/>
        <source>INV On off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5740"/>
        <source>INV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5776"/>
        <location filename="../mywidget.cpp" line="5876"/>
        <source>parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5788"/>
        <location filename="../mywidget.cpp" line="5906"/>
        <source>Bat Infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5794"/>
        <location filename="../mywidget.cpp" line="5912"/>
        <source>Bat State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5870"/>
        <source>DCONV logic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5978"/>
        <source>Export the battery statistics. Click here to export the battery statistics to the U disk.
The accuracy is 0.1, which means that the obtained data multiplied by 0.1 gives the actual value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6016"/>
        <source>Hybrid mode Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6037"/>
        <source>If this parameter is selected, static IP addresses are used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6059"/>
        <source>If this parameter is selected, the automatically assigned IP address is used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6067"/>
        <location filename="../mywidget.cpp" line="6077"/>
        <source>Turn on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6087"/>
        <source>Date +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6087"/>
        <source>Clicking will move the monthly deep discharge date back one day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6092"/>
        <source>Date -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6092"/>
        <source>Clicking will move the monthly deep discharge date forward by one day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2598"/>
        <source>Alarm icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1186"/>
        <source>Upgrade prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1187"/>
        <source>1. Make sure to press the EPO button before upgrading.                              
2. Before upgrading the DCDC, switch off the ship-type switch of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1789"/>
        <location filename="../mywidget.cpp" line="4941"/>
        <source>Modification Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2299"/>
        <source>The converter standby switch. Click the converter to enter the standby state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2353"/>
        <source>The limit of charging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2357"/>
        <source>The limit of discharging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2377"/>
        <source>Alarm levels uploaded from BMS, level one alarm is yellow, level two alarm is orange, and level three alarm is red;
By default, the converter does not respond to level one and level two alarms, but shuts down in response to level three alarms.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2598"/>
        <source>Alarm icon: It is not displayed when there is no alarm. When there is a minor alarm, a yellow icon is displayed. When there is a fault alarm, a red icon is displayed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2610"/>
        <source>Inv. voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2611"/>
        <source>Inv. side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2620"/>
        <source>Inv. side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2629"/>
        <source>Inv. side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2637"/>
        <source>Inv. current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2638"/>
        <source>Inv. side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2646"/>
        <source>Inv. current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2647"/>
        <source>Inv. side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2655"/>
        <source>Inv. current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2656"/>
        <source>Inv. side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2665"/>
        <location filename="../mywidget.cpp" line="2887"/>
        <source>The IGBT temperature of the converter: The IGBT temperature must not exceed 102°C. Otherwise, the converter will operate at a reduced capacity. It will resume full power operation when the temperature drops to 73°C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2674"/>
        <source>The ambient temperature.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2838"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (&gt;30kVA power converter).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2694"/>
        <source>Display the voltage of each PV in turn.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1188"/>
        <source>NEXT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1188"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2683"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (＞30kVA power converter).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2703"/>
        <source>Total current on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2712"/>
        <source>Total power on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2721"/>
        <source>converter battery side voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2730"/>
        <source>converter battery side current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2739"/>
        <source>converter battery side power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2748"/>
        <source>converter bus voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2757"/>
        <source>converter bus current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2783"/>
        <source>Voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2792"/>
        <source>Current on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2801"/>
        <source>Power on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2810"/>
        <source>Voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2819"/>
        <source>Current on the low-voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2828"/>
        <source>Power on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2837"/>
        <source>Leakage cur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2850"/>
        <source>Bus H vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2859"/>
        <source>Bus H vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2868"/>
        <source>Bus L vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2877"/>
        <source>Bus L vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2894"/>
        <source>Positive Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2895"/>
        <source>The positive insulation impedance of the DCDC module is normal when the positive insulation impedance is greater than 33kΩ. When the positive insulation impedance is lower than 33kΩ, the insulation fault or potential security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2902"/>
        <source>Negative Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2903"/>
        <source>The negative insulation impedance of the DCDC module is normal when the negative insulation impedance is greater than 33kΩ. When the negative insulation impedance is lower than 33kΩ, the insulation fault or negative security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2919"/>
        <source>Grid side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2928"/>
        <source>Grid side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2937"/>
        <source>Grid side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2946"/>
        <source>Grid side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2955"/>
        <source>Grid side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2964"/>
        <source>Grid side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3025"/>
        <source>Load side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3034"/>
        <source>Load side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3043"/>
        <source>Load side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3052"/>
        <source>Load side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3061"/>
        <source>Load side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3070"/>
        <source>Load side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3153"/>
        <source>The output circuit breaker has two states: On, Off.The Output breaker can only be manually disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3161"/>
        <source>The power grid circuit breaker has two states: On, Off;The power grid circuit breaker can only be manually disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3165"/>
        <source>Signal to start the diesel generator, start the diesel generator when enabled, stop the diesel generator when disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3168"/>
        <source>DO2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3169"/>
        <source>Dry contact 2 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3172"/>
        <source>DO3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3173"/>
        <source>Dry contact 3 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3180"/>
        <location filename="../mywidget.cpp" line="3226"/>
        <source>The converter has two states: enabled,disabled. The converter is enabled when the self-check is successful. Otherwise, the converter is disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3184"/>
        <source>There are three states for DC soft start: Not starting, Soft starting, and Complete. Soft start refers to the process in which the converter charges the busbar with the battery during startup, causing the busbar voltage to rise close to the battery voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3188"/>
        <source>Converter states include: OFF, AC Soft start, Grid-ON Charge, Grid-ON Discharge, Grid-OFF Discharge, Derating grid-on, Standby and Grid-OFF Charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3192"/>
        <source>There are three types of reactive power regulation: Disable,PF regulation, and  regulation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3200"/>
        <source>Input dry contact 1 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3204"/>
        <source>Input dry contact 2 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3208"/>
        <source>Input dry contact 3 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3212"/>
        <source>Input dry contact 4 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3216"/>
        <source>Input dry contact 5 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3220"/>
        <source>Input dry contact 6 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3230"/>
        <source>DCDC module operating modes: Boost, Buck.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3233"/>
        <location filename="../mywidget.cpp" line="3237"/>
        <source>Not
starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3234"/>
        <source>High-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3238"/>
        <source>Low-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3246"/>
        <source>DC module low voltage contactor has two states: On, Off; When there is voltage on the low voltage side, close the contactor on the low voltage side; Otherwise, the low pressure contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3266"/>
        <source>AC Side Power: You can control the charging and discharging power of the battery from the AC side by modifying this value. When the advanced setting for power control mode is set to Constant Power mode (CP_AC), a positive value indicates discharging, and a negative value indicates charging.
For example, setting it to -5 means that the AC side will charge the battery at a power of -5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3380"/>
        <source>DOD Protection Release SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3448"/>
        <source>Cell Voltage max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3453"/>
        <source>Cell Voltage max delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3458"/>
        <source>Cell Voltage min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3463"/>
        <source>Cell Voltage min delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3469"/>
        <source>Force Charge On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3470"/>
        <source>Forced Charging On: When the cell voltage drops below this value, the converter switches to Battery Priority Mode, and the AC side charges the battery with a power of 10kW.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3475"/>
        <source>ForceCharge Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3476"/>
        <source>Forced Charging Off: When the cell voltage exceeds this value, the converter exits Battery Priority Mode and returns to the mode before Forced Charging was enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3480"/>
        <source>DCAC cell protect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3484"/>
        <source>DCAC cell delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3593"/>
        <source>Working Power: Only effective in peak shaving mode. Positive values indicate discharging, while negative values indicate charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3597"/>
        <source>Peak price</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3598"/>
        <source>In the peak shaving and valley filling mode, select &apos;Peak price&apos; periods,&apos;Flat price&apos; periods and &apos;Valley price&apos; periods based on electricity prices.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4469"/>
        <source>This is the monitor screen version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4473"/>
        <source>This is the DCAC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4477"/>
        <source>This is the DCAC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4481"/>
        <source>This is the DCAC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4485"/>
        <source>This is the DCDC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4489"/>
        <source>This is the DCDC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4493"/>
        <source>This is the DCDC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4496"/>
        <source>SN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4497"/>
        <source>This is SN, the serial number of the product.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4506"/>
        <source>PV power generation Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4510"/>
        <source>PV power generation Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4514"/>
        <source>PV power generation Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4518"/>
        <source>PV power generation Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4544"/>
        <location filename="../mywidget.cpp" line="4563"/>
        <source>Battery Charge Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4548"/>
        <location filename="../mywidget.cpp" line="4567"/>
        <source>Battery Discharge Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4552"/>
        <location filename="../mywidget.cpp" line="4571"/>
        <source>Battery Discharge Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4556"/>
        <location filename="../mywidget.cpp" line="4575"/>
        <source>Battery Discharge Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4583"/>
        <source>Today&apos;s electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4587"/>
        <source>Monthly electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4591"/>
        <source>Annual electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4595"/>
        <source>Total electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4602"/>
        <source>Today&apos;s electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4606"/>
        <source>Monthly electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4610"/>
        <source>Annual electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4614"/>
        <source>Total electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4628"/>
        <source>CAN communication failure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4629"/>
        <source>event description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4631"/>
        <source>Fire alarm (High temp. alarm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4632"/>
        <source>Power Meter Comm fualttLead-acid abnormal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4942"/>
        <source>Time when the system Settings are modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5026"/>
        <source>Power control type：CP_P-&gt;CP_N&amp;&amp;P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5030"/>
        <source>Power control type：CP_N&amp;&amp;P-&gt;CP_P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5034"/>
        <source>Grid Fre Upper limit：0.2-&gt;3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5038"/>
        <source>Grid Fre Upper limit：3-&gt;0.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5042"/>
        <source>Voltage protection Lower limit：-10-&gt;-15</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5046"/>
        <source>Voltage protection Lower limit：-15-&gt;-10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5050"/>
        <source>Operation mode：Manual-&gt;UPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5054"/>
        <source>Inv ON/Off-Grid：Off-&gt;automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5058"/>
        <source>Inv ON/Off-Grid：automatic-&gt;Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5101"/>
        <source>Battery Protocol: Parse the messages sent by BMS based on the selected battery protocol.                                             
Currently supported battery manufacturer protocols include:MEGA, LISHEN, GREATPOWER, GOLD, BMSER, LANLI, SLANPOWER, PYLON, CATL, SUOYING, XINGWANGDA, KUBO, GOLD_V2, TOGOOD, GROUP_STANDARD, WOBOYUAN, KGOOER, LD, PYLON_L, VILION, TUOPU,JDI.                                            
Select AUTO to automatically detect the battery manufacturer protocol.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6102"/>
        <source>Rotate to display the status of each online DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3428"/>
        <source>Follow
battery</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="345"/>
        <location filename="../mywidget.cpp" line="5200"/>
        <source>User password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="393"/>
        <location filename="../mywidget.cpp" line="5206"/>
        <source>Admin password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5227"/>
        <source>20</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5227"/>
        <source>Bms Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5228"/>
        <source>BMS communication fault determination time: The BMS communication fault determination time refers to the BMS communication fault when the BMS communication is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5232"/>
        <source>120</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5232"/>
        <source>EMS Com. Fault Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5233"/>
        <source>EMS communication fault determination time: The EMS communication fault determination time refers to the time when the communication between the EMS is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5387"/>
        <source>Grid restoration time: reserved function, setting invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5429"/>
        <source>Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5430"/>
        <source>Backup setting parameters: Backup setting parameters refers to backing up the parameters set on the current device so that the backup parameter Settings can be restored when needed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5434"/>
        <source>Restore
Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5434"/>
        <source>Restore Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5435"/>
        <source>Restore backup setting parameters: Restore backup setting parameters means to restore the device to the last backup setting parameters and restart the device.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5919"/>
        <source>Choose the first module to view the real-time data of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5924"/>
        <source>Choose the second module to view the real-time data of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5972"/>
        <source>Export operation log. Click here to export operation log to U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5989"/>
        <source>Choose the first module to view the real-time status of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5994"/>
        <source>Choose the second module to view the real-time status of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3241"/>
        <source>Contator Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3245"/>
        <source>Contator Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3229"/>
        <location filename="../mywidget.cpp" line="3327"/>
        <source>Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3233"/>
        <source>Soft Start Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3237"/>
        <source>Soft Start Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3249"/>
        <location filename="../mywidget.cpp" line="6072"/>
        <location filename="../mywidget.cpp" line="6082"/>
        <source>Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1381"/>
        <location filename="../mywidget.cpp" line="2975"/>
        <source>Grid active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1381"/>
        <location filename="../mywidget.cpp" line="2984"/>
        <source>Grid reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1381"/>
        <location filename="../mywidget.cpp" line="2993"/>
        <source>Grid apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1381"/>
        <location filename="../mywidget.cpp" line="3002"/>
        <source>Grid power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1382"/>
        <location filename="../mywidget.cpp" line="3010"/>
        <source>Grid frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3081"/>
        <source>Load active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3090"/>
        <source>Load reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3099"/>
        <source>Load apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3108"/>
        <source>Load power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1427"/>
        <location filename="../mywidget.cpp" line="3117"/>
        <source>Load frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1478"/>
        <source>D02</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1478"/>
        <source>D03</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1563"/>
        <location filename="../mywidget.cpp" line="3352"/>
        <source>DC CV Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1563"/>
        <location filename="../mywidget.cpp" line="3358"/>
        <source>DC CC Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2321"/>
        <source>Total voltage of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2325"/>
        <source>Total current of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2329"/>
        <source>Battery SOC uploaded by BMS refers to the current remaining battery capacity percentage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2333"/>
        <source>Battery SOH uploaded from BMS, the percentage of available capacity after full charge compared to the rated capacity.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2337"/>
        <source>The highest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2341"/>
        <source>The lowest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2345"/>
        <source>The highest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2349"/>
        <source>The lowest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2361"/>
        <source>The allowable charging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2365"/>
        <source>The allowable discharging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2369"/>
        <source>The allowable charging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2373"/>
        <source>The allowable discharging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2380"/>
        <source>Charging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2381"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to charge, Disable indicates the battery is not allowed to charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2384"/>
        <source>Discharging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2385"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to discharge, Disable indicates the battery is not allowed to discharge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2619"/>
        <source>Inv. voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2673"/>
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
        <location filename="../UpgradeTools/upgradetools.cpp" line="91"/>
        <source>Monitor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="298"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="688"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="73"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="95"/>
        <source>Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="319"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="709"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="77"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="99"/>
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
        <location filename="../UpgradeTools/upgradetools.cpp" line="118"/>
        <source>Monitor.hex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="593"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="122"/>
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
        <location filename="../UpgradeTools/upgradetools.cpp" line="109"/>
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
        <location filename="../UpgradeTools/upgradetools.cpp" line="88"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="92"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="96"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="100"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="105"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="110"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="119"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="123"/>
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
        <location filename="../UpgradeTools/upgradetools.cpp" line="92"/>
        <source>After inserting the u disk and checking that there is a Monitor upgrade program &apos;Monitor.hex&apos;, click to upgrade the monitor program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="74"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="96"/>
        <source>Backup: Click to backup the current program files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="78"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="100"/>
        <source>Restore: Restore to the most recent backup program files.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="83"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="110"/>
        <source>Click to restart.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="110"/>
        <source>Previous Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="87"/>
        <source>Baud Rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="88"/>
        <source>Baud Rate: Default is 500k and cannot be modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="732"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="103"/>
        <source>DSP Upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="104"/>
        <source>DSP Upgrade: Insert the u disk and check if there is a DSP upgrade program called &apos;DSPUpdate.hex&apos;. Click to upgrade the DSP.                                
(Note: Press the EPO button before upgrading.))</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="119"/>
        <source>This is the name of the monitoring upgrade program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="123"/>
        <source>This is the DSP upgrade program name.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
