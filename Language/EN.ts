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
        <location filename="../mywidget.ui" line="143"/>
        <source>Basic settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="176"/>
        <source>Function Setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="259"/>
        <location filename="../mywidget.ui" line="11562"/>
        <location filename="../mywidget.cpp" line="3013"/>
        <source>Battery type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="267"/>
        <location filename="../mywidget.ui" line="283"/>
        <location filename="../mywidget.ui" line="299"/>
        <location filename="../mywidget.ui" line="315"/>
        <location filename="../mywidget.ui" line="347"/>
        <location filename="../mywidget.ui" line="363"/>
        <location filename="../mywidget.ui" line="400"/>
        <location filename="../mywidget.ui" line="416"/>
        <location filename="../mywidget.ui" line="453"/>
        <location filename="../mywidget.ui" line="506"/>
        <location filename="../mywidget.ui" line="522"/>
        <location filename="../mywidget.ui" line="559"/>
        <location filename="../mywidget.ui" line="575"/>
        <location filename="../mywidget.ui" line="628"/>
        <location filename="../mywidget.ui" line="729"/>
        <location filename="../mywidget.ui" line="917"/>
        <location filename="../mywidget.ui" line="933"/>
        <location filename="../mywidget.ui" line="981"/>
        <location filename="../mywidget.ui" line="1034"/>
        <location filename="../mywidget.ui" line="1087"/>
        <location filename="../mywidget.ui" line="1140"/>
        <location filename="../mywidget.ui" line="1156"/>
        <location filename="../mywidget.ui" line="1172"/>
        <location filename="../mywidget.ui" line="1193"/>
        <location filename="../mywidget.ui" line="1209"/>
        <location filename="../mywidget.ui" line="1246"/>
        <location filename="../mywidget.ui" line="1262"/>
        <location filename="../mywidget.ui" line="1278"/>
        <location filename="../mywidget.ui" line="1299"/>
        <location filename="../mywidget.ui" line="1315"/>
        <location filename="../mywidget.ui" line="1331"/>
        <location filename="../mywidget.ui" line="1347"/>
        <location filename="../mywidget.ui" line="1363"/>
        <location filename="../mywidget.ui" line="1379"/>
        <location filename="../mywidget.ui" line="1411"/>
        <location filename="../mywidget.ui" line="1427"/>
        <location filename="../mywidget.ui" line="8406"/>
        <location filename="../mywidget.ui" line="8422"/>
        <location filename="../mywidget.ui" line="8454"/>
        <location filename="../mywidget.ui" line="8470"/>
        <location filename="../mywidget.ui" line="8486"/>
        <location filename="../mywidget.ui" line="8502"/>
        <location filename="../mywidget.ui" line="8534"/>
        <location filename="../mywidget.ui" line="9143"/>
        <location filename="../mywidget.ui" line="9323"/>
        <location filename="../mywidget.ui" line="9387"/>
        <location filename="../mywidget.ui" line="9451"/>
        <location filename="../mywidget.ui" line="9515"/>
        <source>-</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="291"/>
        <location filename="../mywidget.cpp" line="3487"/>
        <source>ProtocolVersion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="307"/>
        <location filename="../mywidget.ui" line="11602"/>
        <source>BMS Comm. type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="331"/>
        <location filename="../mywidget.ui" line="379"/>
        <location filename="../mywidget.ui" line="432"/>
        <location filename="../mywidget.ui" line="485"/>
        <location filename="../mywidget.ui" line="538"/>
        <source>bps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="355"/>
        <location filename="../mywidget.ui" line="12966"/>
        <location filename="../mywidget.cpp" line="3329"/>
        <source>Power control type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="323"/>
        <location filename="../mywidget.cpp" line="3392"/>
        <source>serial port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="408"/>
        <location filename="../mywidget.ui" line="11682"/>
        <source>EMS Comm. type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="371"/>
        <location filename="../mywidget.cpp" line="3397"/>
        <source>serial port 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="440"/>
        <location filename="../mywidget.ui" line="13101"/>
        <location filename="../mywidget.cpp" line="3454"/>
        <source>Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="461"/>
        <location filename="../mywidget.cpp" line="3369"/>
        <source>Output power limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="469"/>
        <location filename="../mywidget.ui" line="681"/>
        <location filename="../mywidget.ui" line="713"/>
        <location filename="../mywidget.ui" line="761"/>
        <location filename="../mywidget.ui" line="777"/>
        <location filename="../mywidget.ui" line="793"/>
        <location filename="../mywidget.ui" line="809"/>
        <location filename="../mywidget.ui" line="825"/>
        <location filename="../mywidget.ui" line="965"/>
        <location filename="../mywidget.ui" line="7034"/>
        <location filename="../mywidget.ui" line="7052"/>
        <location filename="../mywidget.ui" line="7070"/>
        <location filename="../mywidget.ui" line="7088"/>
        <location filename="../mywidget.ui" line="8438"/>
        <source>kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="424"/>
        <location filename="../mywidget.cpp" line="3402"/>
        <source>serial port 4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="493"/>
        <location filename="../mywidget.ui" line="13212"/>
        <source>System upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="477"/>
        <location filename="../mywidget.cpp" line="3407"/>
        <source>serial port 5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="546"/>
        <location filename="../mywidget.ui" line="13138"/>
        <location filename="../mywidget.cpp" line="3459"/>
        <source>Sounds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="567"/>
        <location filename="../mywidget.cpp" line="2968"/>
        <source>Charge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="583"/>
        <location filename="../mywidget.cpp" line="3417"/>
        <source>Can port 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="591"/>
        <location filename="../mywidget.ui" line="644"/>
        <source>kbps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="620"/>
        <source>Discharge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="636"/>
        <location filename="../mywidget.cpp" line="3421"/>
        <source>Can port 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="673"/>
        <location filename="../mywidget.cpp" line="2963"/>
        <source>DG capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1050"/>
        <location filename="../mywidget.ui" line="1103"/>
        <location filename="../mywidget.ui" line="6506"/>
        <location filename="../mywidget.ui" line="6524"/>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="721"/>
        <location filename="../mywidget.ui" line="13270"/>
        <location filename="../mywidget.cpp" line="3426"/>
        <source>Energy priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1066"/>
        <location filename="../mywidget.ui" line="1119"/>
        <location filename="../mywidget.ui" line="6470"/>
        <location filename="../mywidget.ui" line="8566"/>
        <location filename="../mywidget.ui" line="9127"/>
        <location filename="../mywidget.ui" line="9159"/>
        <location filename="../mywidget.ui" line="9175"/>
        <location filename="../mywidget.ui" line="9241"/>
        <location filename="../mywidget.ui" line="9257"/>
        <location filename="../mywidget.ui" line="9467"/>
        <location filename="../mywidget.ui" line="9531"/>
        <source>V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="837"/>
        <source>System parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="901"/>
        <source>kW/s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="909"/>
        <location filename="../mywidget.ui" line="13751"/>
        <location filename="../mywidget.cpp" line="3579"/>
        <source>Machine type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="925"/>
        <location filename="../mywidget.cpp" line="3626"/>
        <source>Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="949"/>
        <location filename="../mywidget.ui" line="997"/>
        <location filename="../mywidget.ui" line="1013"/>
        <source>Hz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="957"/>
        <location filename="../mywidget.ui" line="13788"/>
        <location filename="../mywidget.cpp" line="3584"/>
        <source>Machine capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="973"/>
        <location filename="../mywidget.ui" line="13397"/>
        <location filename="../mywidget.cpp" line="3492"/>
        <source>Restore factory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1005"/>
        <location filename="../mywidget.ui" line="13899"/>
        <source>Output Fre. grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1127"/>
        <location filename="../mywidget.ui" line="13175"/>
        <location filename="../mywidget.cpp" line="3464"/>
        <source>Clear Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1042"/>
        <location filename="../mywidget.cpp" line="3539"/>
        <source>Vol protection upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1058"/>
        <location filename="../mywidget.ui" line="13862"/>
        <source>Output vol. level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1095"/>
        <location filename="../mywidget.cpp" line="3544"/>
        <source>Vol protection lower limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1233"/>
        <location filename="../mywidget.cpp" line="3638"/>
        <source>Module max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1148"/>
        <location filename="../mywidget.ui" line="13928"/>
        <location filename="../mywidget.cpp" line="3549"/>
        <source>HVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1164"/>
        <location filename="../mywidget.cpp" line="3340"/>
        <source>Output reactive power mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1286"/>
        <location filename="../mywidget.cpp" line="3643"/>
        <source>Module min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1201"/>
        <location filename="../mywidget.ui" line="13965"/>
        <source>LVRT enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1339"/>
        <location filename="../mywidget.cpp" line="3657"/>
        <source>Insulation detection enable DCDC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1254"/>
        <location filename="../mywidget.ui" line="14002"/>
        <location filename="../mywidget.cpp" line="3558"/>
        <source>AFD enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1217"/>
        <location filename="../mywidget.cpp" line="3648"/>
        <source>Grid recovery time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="612"/>
        <location filename="../mywidget.ui" line="665"/>
        <location filename="../mywidget.ui" line="1225"/>
        <source>s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="275"/>
        <location filename="../mywidget.ui" line="12974"/>
        <location filename="../mywidget.cpp" line="3388"/>
        <source>Serial Communication Address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="530"/>
        <location filename="../mywidget.cpp" line="3412"/>
        <source>serial port 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="599"/>
        <source>BMS Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="652"/>
        <source>EMS Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8938"/>
        <location filename="../mywidget.cpp" line="3499"/>
        <source>Release Prohibited Charging Flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1021"/>
        <location filename="../mywidget.ui" line="13249"/>
        <source>Backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1074"/>
        <location filename="../mywidget.ui" line="13278"/>
        <source>Restore backup setup parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1307"/>
        <source>Insulation detection enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1355"/>
        <location filename="../mywidget.ui" line="14039"/>
        <location filename="../mywidget.cpp" line="3569"/>
        <source>PrimaryFreq enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1323"/>
        <location filename="../mywidget.ui" line="13973"/>
        <source>PsheddingFreq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1403"/>
        <location filename="../mywidget.ui" line="14010"/>
        <location filename="../mywidget.cpp" line="3615"/>
        <source>Inertia enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="893"/>
        <location filename="../mywidget.cpp" line="3525"/>
        <source>Power change rate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="35"/>
        <source>MPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="705"/>
        <location filename="../mywidget.cpp" line="2986"/>
        <source>DG ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="753"/>
        <location filename="../mywidget.cpp" line="2990"/>
        <source>DG FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="769"/>
        <location filename="../mywidget.cpp" line="2994"/>
        <source>Grid ECP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="785"/>
        <location filename="../mywidget.cpp" line="2998"/>
        <source>Grid FCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="801"/>
        <location filename="../mywidget.cpp" line="3002"/>
        <source>Grid EDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="817"/>
        <location filename="../mywidget.cpp" line="3006"/>
        <source>Grid FDP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="941"/>
        <source>ULFV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="989"/>
        <source>LLFV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1270"/>
        <location filename="../mywidget.ui" line="13936"/>
        <location filename="../mywidget.cpp" line="3604"/>
        <source>Converter Anti-Reverse Flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1371"/>
        <location filename="../mywidget.ui" line="14047"/>
        <location filename="../mywidget.cpp" line="3620"/>
        <source>QP curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1455"/>
        <source>External device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1473"/>
        <source>DI_1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1478"/>
        <source>DI_2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1483"/>
        <source>DI_3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1488"/>
        <source>DI_4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1493"/>
        <source>DI_5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1498"/>
        <source>DI_6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1503"/>
        <source>DO_1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1508"/>
        <source>DO_2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1513"/>
        <source>DO_3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1518"/>
        <location filename="../mywidget.ui" line="14150"/>
        <source>Enable/Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1523"/>
        <location filename="../mywidget.ui" line="14155"/>
        <source>NC/NO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1528"/>
        <location filename="../mywidget.ui" line="14160"/>
        <source>Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1533"/>
        <source>Function description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1554"/>
        <location filename="../mywidget.ui" line="14186"/>
        <source>Access Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1570"/>
        <source>Water logging</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1619"/>
        <location filename="../mywidget.ui" line="14251"/>
        <source>Generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1722"/>
        <source>DCAC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1778"/>
        <location filename="../mywidget.ui" line="2277"/>
        <location filename="../mywidget.ui" line="14418"/>
        <location filename="../mywidget.ui" line="14777"/>
        <location filename="../mywidget.cpp" line="3743"/>
        <location filename="../mywidget.cpp" line="3900"/>
        <source>Debug variable 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1786"/>
        <location filename="../mywidget.ui" line="14618"/>
        <source>1.5V Voltage revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1802"/>
        <location filename="../mywidget.ui" line="2365"/>
        <location filename="../mywidget.ui" line="14690"/>
        <location filename="../mywidget.ui" line="14875"/>
        <source>Inv on off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1815"/>
        <location filename="../mywidget.ui" line="2301"/>
        <location filename="../mywidget.ui" line="14450"/>
        <location filename="../mywidget.ui" line="14801"/>
        <location filename="../mywidget.cpp" line="3747"/>
        <location filename="../mywidget.cpp" line="3904"/>
        <source>Debug variable 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1823"/>
        <location filename="../mywidget.ui" line="14650"/>
        <source> Bus Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1839"/>
        <location filename="../mywidget.ui" line="14674"/>
        <location filename="../mywidget.cpp" line="3816"/>
        <source>Logic state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1852"/>
        <location filename="../mywidget.ui" line="2325"/>
        <location filename="../mywidget.ui" line="14482"/>
        <location filename="../mywidget.ui" line="14825"/>
        <location filename="../mywidget.cpp" line="3751"/>
        <location filename="../mywidget.cpp" line="3908"/>
        <location filename="../mywidget.cpp" line="3912"/>
        <source>Debug variable 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1860"/>
        <location filename="../mywidget.ui" line="14426"/>
        <source>Grid A/AB Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1876"/>
        <location filename="../mywidget.ui" line="14698"/>
        <source>Inv flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1889"/>
        <location filename="../mywidget.ui" line="2285"/>
        <location filename="../mywidget.ui" line="14785"/>
        <source>Debug variable 1 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1897"/>
        <location filename="../mywidget.ui" line="14458"/>
        <source>Grid B/BC Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1913"/>
        <location filename="../mywidget.ui" line="14706"/>
        <location filename="../mywidget.cpp" line="3861"/>
        <source>Grid flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1926"/>
        <location filename="../mywidget.ui" line="2309"/>
        <location filename="../mywidget.ui" line="14809"/>
        <source>Debug variable 2 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1934"/>
        <location filename="../mywidget.ui" line="14490"/>
        <source>Grid C/CA Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1950"/>
        <location filename="../mywidget.ui" line="14682"/>
        <location filename="../mywidget.cpp" line="3857"/>
        <source>Grid protect flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1963"/>
        <location filename="../mywidget.ui" line="2333"/>
        <location filename="../mywidget.ui" line="14833"/>
        <source>Debug variable 3 address</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1971"/>
        <location filename="../mywidget.ui" line="14522"/>
        <source>Output A Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1987"/>
        <location filename="../mywidget.ui" line="2405"/>
        <location filename="../mywidget.ui" line="14594"/>
        <location filename="../mywidget.ui" line="14915"/>
        <location filename="../mywidget.cpp" line="3845"/>
        <location filename="../mywidget.cpp" line="3924"/>
        <source>PV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2000"/>
        <location filename="../mywidget.ui" line="2293"/>
        <location filename="../mywidget.ui" line="14514"/>
        <location filename="../mywidget.ui" line="14793"/>
        <source>Debug memery var. 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2008"/>
        <location filename="../mywidget.ui" line="14554"/>
        <source>Output B Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2024"/>
        <location filename="../mywidget.ui" line="2381"/>
        <location filename="../mywidget.ui" line="14626"/>
        <location filename="../mywidget.ui" line="14891"/>
        <location filename="../mywidget.cpp" line="3849"/>
        <location filename="../mywidget.cpp" line="3920"/>
        <source>DC bus flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2037"/>
        <location filename="../mywidget.ui" line="14546"/>
        <location filename="../mywidget.ui" line="14817"/>
        <source>Debug memery var. 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2045"/>
        <location filename="../mywidget.ui" line="14586"/>
        <source>Output C Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2061"/>
        <location filename="../mywidget.ui" line="2357"/>
        <location filename="../mywidget.ui" line="14658"/>
        <location filename="../mywidget.ui" line="14867"/>
        <location filename="../mywidget.cpp" line="3853"/>
        <location filename="../mywidget.cpp" line="3916"/>
        <source>INT main flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2074"/>
        <location filename="../mywidget.ui" line="2317"/>
        <location filename="../mywidget.ui" line="2341"/>
        <location filename="../mywidget.ui" line="14578"/>
        <location filename="../mywidget.ui" line="14841"/>
        <source>Debug memery var. 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2082"/>
        <location filename="../mywidget.ui" line="14498"/>
        <source>INV A Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2098"/>
        <location filename="../mywidget.ui" line="2413"/>
        <location filename="../mywidget.ui" line="14634"/>
        <location filename="../mywidget.ui" line="14923"/>
        <source>Parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2111"/>
        <location filename="../mywidget.ui" line="14434"/>
        <source>Input Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2119"/>
        <location filename="../mywidget.ui" line="14530"/>
        <source>INV B Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2135"/>
        <location filename="../mywidget.ui" line="14602"/>
        <location filename="../mywidget.cpp" line="3886"/>
        <location filename="../mywidget.cpp" line="3966"/>
        <source>Monitor Order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2148"/>
        <source>Input. Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2156"/>
        <location filename="../mywidget.ui" line="14562"/>
        <source>INV C Vol. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2172"/>
        <location filename="../mywidget.ui" line="14570"/>
        <source>BatInfor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2180"/>
        <location filename="../mywidget.ui" line="14442"/>
        <source>INV A inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2188"/>
        <location filename="../mywidget.ui" line="2421"/>
        <location filename="../mywidget.ui" line="14538"/>
        <location filename="../mywidget.ui" line="14931"/>
        <source>Bat state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2196"/>
        <location filename="../mywidget.ui" line="14474"/>
        <source>INV B inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2204"/>
        <location filename="../mywidget.ui" line="14506"/>
        <source>INV C inductance Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2216"/>
        <source>DCDC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2349"/>
        <location filename="../mywidget.ui" line="14849"/>
        <source>Current ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2373"/>
        <location filename="../mywidget.ui" line="14883"/>
        <source>Monitor order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2389"/>
        <location filename="../mywidget.ui" line="14899"/>
        <source>DCONV logic </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2397"/>
        <location filename="../mywidget.ui" line="14907"/>
        <source>Bat infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2645"/>
        <source>100kW - TS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3138"/>
        <location filename="../mywidget.ui" line="3353"/>
        <location filename="../mywidget.ui" line="3397"/>
        <location filename="../mywidget.ui" line="3469"/>
        <location filename="../mywidget.ui" line="3576"/>
        <location filename="../mywidget.ui" line="3808"/>
        <location filename="../mywidget.ui" line="3892"/>
        <location filename="../mywidget.ui" line="3920"/>
        <source>0V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3167"/>
        <location filename="../mywidget.ui" line="3605"/>
        <location filename="../mywidget.ui" line="3836"/>
        <location filename="../mywidget.ui" line="3864"/>
        <location filename="../mywidget.ui" line="3948"/>
        <source>0A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3183"/>
        <location filename="../mywidget.ui" line="4024"/>
        <source>0kW</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3381"/>
        <location filename="../mywidget.ui" line="3425"/>
        <location filename="../mywidget.ui" line="3453"/>
        <source>0A </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5902"/>
        <source>Please click on &apos;Alarm Information&apos; to enter the query interface
and view the details of the alarm information you have encountered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8684"/>
        <location filename="../mywidget.ui" line="12151"/>
        <source>A1: 
Generator turn on SOC(A1)
B1: 
Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8707"/>
        <source>Battery
power-on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8726"/>
        <source>Battery
power-off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8818"/>
        <location filename="../mywidget.ui" line="12338"/>
        <source>DOD Protection Release SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8826"/>
        <source>Cell voltage max(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8842"/>
        <source>Cell voltage max delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8858"/>
        <source>Cell voltage min(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8882"/>
        <source>Cell voltage min delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8898"/>
        <source>ForceCharge On(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8914"/>
        <source>ForceCharge Off(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8930"/>
        <source>DCAC cell protect(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9597"/>
        <source>Hybrid Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10708"/>
        <source>Model Introduction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10803"/>
        <location filename="../mywidget.ui" line="17085"/>
        <source>Self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10866"/>
        <source>Battery
Priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10930"/>
        <source>Optimal
model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11001"/>
        <source>Mixed
mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11065"/>
        <location filename="../mywidget.ui" line="17249"/>
        <location filename="../mywidget.cpp" line="1320"/>
        <source>Manual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11130"/>
        <source>Advanced
Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11245"/>
        <location filename="../mywidget.cpp" line="1321"/>
        <source>DC/AC Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11318"/>
        <location filename="../mywidget.cpp" line="1320"/>
        <source>Self-issuance and self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11371"/>
        <source>1/4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11415"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11456"/>
        <source>Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11546"/>
        <source>DG ECP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11578"/>
        <source>Constant power (AC)(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11586"/>
        <source>DG FCP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11618"/>
        <location filename="../mywidget.cpp" line="2948"/>
        <source>Grid expansion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11658"/>
        <source>Grad capacity(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11698"/>
        <source>DG charging power limit(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11869"/>
        <source>Constant Curent(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11885"/>
        <location filename="../mywidget.cpp" line="3110"/>
        <source>IV curve scanning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11909"/>
        <source>Constant Voltage(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11925"/>
        <source>IV curve scanning low voltage(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11965"/>
        <source>IV curve scanning high voltage(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13114"/>
        <source>Constant voltage(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15767"/>
        <source>Battery Area Partitioning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15988"/>
        <source>Battery zoning:   
    Areas where ECP works:
    (Saturated area)+(Equilibrium area)
    When SOC decays from high to low to &quot;Charge SOC&quot;.

    Areas where FCP works:
    (SOC empty area)+(Equilibrium area)
    SOC is less than the &quot;Charge SOC&quot;, increasing from low to high,
    to the &quot;Discharge SOC&quot; cutoff.

    Areas where EDP works:
    (Saturated area)+(Equilibrium area)
    When SOC decays from high to low to &quot;Charge SOC&quot;.

    Areas where FDP works:
    (SOC empty area)+(Equilibrium area)
    SOC is less than the &quot;Charge SOC&quot;, increasing from low to high,
    to the &quot;Discharge SOC&quot; cutoff.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16693"/>
        <source>When the PV is unavailable and the power of the load is less than the power value of the AC setting,the energy on the AC side will be provided to the load and remaining energy will charge the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16729"/>
        <source>When the PV is unavailable and the load power is greater than the power value set the AC side energizes the load while battery energizes the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16805"/>
        <source>Enable the time period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16826"/>
        <source>Selection of peak,flat and valley sections of the grid under peak shaving and valley filling functions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16847"/>
        <source>The system starts to run automatically when it reaches this time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16868"/>
        <source>The system stops running automatically when it reaches this time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16889"/>
        <source>Functions performed in the current time period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16910"/>
        <source>Peak and trough shaving operating power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18444"/>
        <source>Turn On/Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11626"/>
        <source>Grid ECP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11642"/>
        <source>BMS manufacturers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13151"/>
        <source>Constant current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11666"/>
        <source>Grid FCP(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11706"/>
        <source>Grid EDP(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13040"/>
        <source>Output reactive power(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11730"/>
        <source>Grid FDP(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11746"/>
        <source>Charge SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11770"/>
        <source>Discharge SOC(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12189"/>
        <source>Power On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12207"/>
        <source>Power Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12264"/>
        <source>On-Grid DOD(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12272"/>
        <source>Discharge Voltage lower Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12288"/>
        <source>Force charge start(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12301"/>
        <source>Off-Grid DOD(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12309"/>
        <source>Discharge Voltage lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12325"/>
        <source>Force charge stop(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12362"/>
        <source>DCAC cell protection voltage(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12375"/>
        <source>Charge Voltage upper Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12399"/>
        <source>DCAC cell protection voltage delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12412"/>
        <source>Charge Voltage upper Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12602"/>
        <location filename="../mywidget.cpp" line="3252"/>
        <source>Generator turn on voltage(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12648"/>
        <location filename="../mywidget.cpp" line="3257"/>
        <source>Generator turn off voltage(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12694"/>
        <source>DCAC Reference Voltage(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12823"/>
        <source>Shutdown voltage point(Delete)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13003"/>
        <source>Output reactiver power mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13780"/>
        <source>Grid frequency upper limit(Hz)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13011"/>
        <source>serial port 2(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13817"/>
        <source>Grid frequency lower limit(Hz)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13048"/>
        <source>serial port 3(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13854"/>
        <source>Vol protection upper limit(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13085"/>
        <source>serial port 4(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13891"/>
        <source>Vol protection lower limit(%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13122"/>
        <source>serial port 5(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13188"/>
        <source>Output power limit(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13196"/>
        <source>Can port 1(kbps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11722"/>
        <source>DG capacity(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13233"/>
        <source>Can port 2(kbps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13743"/>
        <source>Rate of change of power(kW/s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="12990"/>
        <source>Battery capacity alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13360"/>
        <source>Protocol Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13027"/>
        <source>BMS Comm.fault time(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13064"/>
        <source>EMS Comm.fault time(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13825"/>
        <source>Transformer ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13384"/>
        <source>User Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13421"/>
        <source>Maintenance password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13767"/>
        <source>Number of modules</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13841"/>
        <source>Maximum Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13915"/>
        <source>Grid recovery scheduling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13878"/>
        <source>Minimum Module Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11538"/>
        <source>Grid connected mode of converter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11949"/>
        <location filename="../mywidget.cpp" line="3103"/>
        <source>Outer Ring Centralized Control</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13952"/>
        <source>Grid recovery time(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13989"/>
        <location filename="../mywidget.cpp" line="3653"/>
        <source>Insulation detection enable DCAC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14105"/>
        <source>DI 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14110"/>
        <source>DI 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14115"/>
        <source>DI 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14120"/>
        <source>DI 4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14125"/>
        <source>DI 5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14130"/>
        <source>DI 6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14135"/>
        <source>DO 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14140"/>
        <source>DO 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14145"/>
        <source>DO 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14165"/>
        <source>Function(default)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14202"/>
        <source>Flooding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14295"/>
        <location filename="../mywidget.ui" line="14339"/>
        <source>Reserve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14466"/>
        <source>Input Cur. revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15030"/>
        <location filename="../mywidget.cpp" line="4435"/>
        <location filename="../mywidget.cpp" line="4451"/>
        <source>Battery Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15080"/>
        <location filename="../mywidget.cpp" line="1526"/>
        <location filename="../mywidget.cpp" line="4298"/>
        <source>1/2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15886"/>
        <source>Back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16123"/>
        <source>The PV prioritizes power to the load, and if the PV is powerful enough, the remaining energy is provided to charge the batteries, and if the PV still has energy left, it sends the excess energy to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16159"/>
        <source>The PV gives priority to powering the load, and if the PV does not have enough energy to power the load, the battery and the PV together power the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16195"/>
        <source>The PV gives priority to powering the load, and if the PV and batter ries do not have enough energy to power the load, then the grid, PV and batteries together power the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16295"/>
        <source>The PV prioritizes charging the batteries, and the excess energy is given to the load, and if there is still excess energy it is delivered to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16331"/>
        <source>When the PV does not have enough energy to supply the battery and the load, the grid provides fertility to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16367"/>
        <source>When the PV has no energy, the grid provides energy to the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16467"/>
        <source>When there is enough PV energy, the PV will power the load while charging the battery, and if there is any left, it will be delivered to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16503"/>
        <source>When the PV is low on energy, the PV charges the battery while supplying power to the load, at which point the grid supplements the load with insufficient energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16539"/>
        <source>When the PV energy is insufficient, the PV will charge the battery;if the power of the load is less than the power value set on the AC side, the AC side will provide energy to the load and the remaining energy will charge the battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16657"/>
        <source>When the energy of the PV is insufficient and the power of the load is greater than the set AC-side power, the available power on the AC-side will be supplied to the load in full, and the PV will replenish the remaining insufficient energy; if the energy replenished by the PV is insufficient, the battery will replenish the remaining energy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16931"/>
        <source>&quot;Mixed Mode&quot; allows the system to automatically run different functional logic at different times. At the same time, it can run the function of &quot;peak shaving and valley filling&quot; according to the local peak and valley tariffs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="16976"/>
        <source>The &quot;Manual Mode&quot; has no operational logic and allows for the manual control of battery charging and discharging. This mode is applicable in the following scenarios:
1、Battery charge and discharge testing.
2、Energy Management System (EMS) scheduling of the MPS.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17044"/>
        <location filename="../mywidget.cpp" line="1320"/>
        <source>Battery Area</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17126"/>
        <location filename="../mywidget.cpp" line="1320"/>
        <source>Battery Priority</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17167"/>
        <source>Optimal Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17208"/>
        <source>Mixed Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17408"/>
        <source>M_01 Converter turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17892"/>
        <location filename="../mywidget.cpp" line="1379"/>
        <source>Not Logged in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18028"/>
        <source>Host</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18131"/>
        <source>Rt.Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18237"/>
        <source>Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18342"/>
        <source>System
(Login to view)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18683"/>
        <source>Account</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18714"/>
        <source>User</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18719"/>
        <source>Maintain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18744"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18769"/>
        <source>······</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18802"/>
        <source>Tip:Please check if account and password are
correct.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18849"/>
        <source>Login</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18876"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2875"/>
        <source>PV:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2948"/>
        <source>Battery charging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2961"/>
        <source>Battery discharging:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2901"/>
        <location filename="../mywidget.ui" line="2935"/>
        <location filename="../mywidget.ui" line="2974"/>
        <location filename="../mywidget.ui" line="4106"/>
        <location filename="../mywidget.ui" line="4184"/>
        <location filename="../mywidget.ui" line="4197"/>
        <source>0kWh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4119"/>
        <source>Load:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4002"/>
        <source>Power meter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3617"/>
        <source>SOC:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9002"/>
        <location filename="../mywidget.ui" line="12535"/>
        <source>A1: Generator turn on voltage
B1: Generator turn off voltage
A1 Setting range: [250, 900]
B1 Setting range: [250, 900]
Set rule:B1 - A1 ≥ 10V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1419"/>
        <location filename="../mywidget.ui" line="14026"/>
        <source>CV Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="831"/>
        <source>Change Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="514"/>
        <source>BMS protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1180"/>
        <location filename="../mywidget.ui" line="13804"/>
        <location filename="../mywidget.cpp" line="3631"/>
        <source>Rack</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1111"/>
        <location filename="../mywidget.cpp" line="3589"/>
        <source>Transformer Turns Ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1562"/>
        <location filename="../mywidget.ui" line="14194"/>
        <source>ATS Signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1578"/>
        <source>Fire Fighting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1597"/>
        <location filename="../mywidget.ui" line="1641"/>
        <location filename="../mywidget.ui" line="1685"/>
        <location filename="../mywidget.ui" line="14229"/>
        <location filename="../mywidget.ui" line="14273"/>
        <location filename="../mywidget.ui" line="14317"/>
        <location filename="../mywidget.cpp" line="3697"/>
        <location filename="../mywidget.cpp" line="3700"/>
        <location filename="../mywidget.cpp" line="3703"/>
        <location filename="../mywidget.cpp" line="3706"/>
        <location filename="../mywidget.cpp" line="3709"/>
        <location filename="../mywidget.cpp" line="3712"/>
        <source>N_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4459"/>
        <location filename="../mywidget.ui" line="5541"/>
        <location filename="../mywidget.ui" line="5775"/>
        <location filename="../mywidget.ui" line="5835"/>
        <location filename="../mywidget.ui" line="8768"/>
        <location filename="../mywidget.ui" line="9721"/>
        <location filename="../mywidget.ui" line="15168"/>
        <location filename="../mywidget.cpp" line="2500"/>
        <location filename="../mywidget.cpp" line="3345"/>
        <location filename="../mywidget.cpp" line="3350"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4486"/>
        <location filename="../mywidget.ui" line="5568"/>
        <location filename="../mywidget.ui" line="5780"/>
        <location filename="../mywidget.ui" line="5840"/>
        <location filename="../mywidget.ui" line="9726"/>
        <location filename="../mywidget.ui" line="15173"/>
        <source>2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4504"/>
        <location filename="../mywidget.ui" line="5586"/>
        <location filename="../mywidget.ui" line="5785"/>
        <location filename="../mywidget.ui" line="5845"/>
        <location filename="../mywidget.ui" line="9731"/>
        <location filename="../mywidget.ui" line="15178"/>
        <source>3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4522"/>
        <location filename="../mywidget.ui" line="5604"/>
        <location filename="../mywidget.ui" line="5790"/>
        <location filename="../mywidget.ui" line="5850"/>
        <location filename="../mywidget.ui" line="9736"/>
        <location filename="../mywidget.ui" line="15183"/>
        <source>4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4540"/>
        <location filename="../mywidget.ui" line="5622"/>
        <location filename="../mywidget.ui" line="5795"/>
        <location filename="../mywidget.ui" line="5855"/>
        <location filename="../mywidget.ui" line="9741"/>
        <location filename="../mywidget.ui" line="15188"/>
        <source>5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4558"/>
        <location filename="../mywidget.ui" line="5640"/>
        <location filename="../mywidget.ui" line="5800"/>
        <location filename="../mywidget.ui" line="5860"/>
        <location filename="../mywidget.ui" line="9746"/>
        <location filename="../mywidget.ui" line="15193"/>
        <source>6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4582"/>
        <location filename="../mywidget.ui" line="5664"/>
        <location filename="../mywidget.ui" line="5805"/>
        <location filename="../mywidget.ui" line="9751"/>
        <location filename="../mywidget.ui" line="15198"/>
        <source>7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4600"/>
        <location filename="../mywidget.ui" line="5682"/>
        <location filename="../mywidget.ui" line="5810"/>
        <location filename="../mywidget.ui" line="9756"/>
        <location filename="../mywidget.ui" line="15203"/>
        <source>8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4618"/>
        <location filename="../mywidget.ui" line="5700"/>
        <location filename="../mywidget.ui" line="5815"/>
        <source>9</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4636"/>
        <location filename="../mywidget.ui" line="5718"/>
        <location filename="../mywidget.ui" line="5820"/>
        <location filename="../mywidget.cpp" line="2958"/>
        <source>10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4654"/>
        <location filename="../mywidget.ui" line="5736"/>
        <location filename="../mywidget.ui" line="5825"/>
        <source>11</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4672"/>
        <location filename="../mywidget.ui" line="5754"/>
        <location filename="../mywidget.ui" line="5830"/>
        <source>12</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4787"/>
        <source>Converter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5010"/>
        <source>PV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5233"/>
        <source>Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5456"/>
        <source>Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5960"/>
        <source>Alarm Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6004"/>
        <source>Battery Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6084"/>
        <location filename="../mywidget.ui" line="6637"/>
        <location filename="../mywidget.ui" line="9073"/>
        <location filename="../mywidget.ui" line="9088"/>
        <location filename="../mywidget.ui" line="9761"/>
        <location filename="../mywidget.ui" line="15208"/>
        <location filename="../mywidget.cpp" line="1022"/>
        <location filename="../mywidget.cpp" line="1065"/>
        <location filename="../mywidget.cpp" line="1111"/>
        <location filename="../mywidget.cpp" line="1169"/>
        <location filename="../mywidget.cpp" line="1329"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6103"/>
        <source>Bat voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6122"/>
        <location filename="../mywidget.cpp" line="1671"/>
        <source>Bat current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6141"/>
        <location filename="../mywidget.cpp" line="1675"/>
        <source>SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6160"/>
        <location filename="../mywidget.cpp" line="1679"/>
        <source>SOH</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6179"/>
        <source>Cell voltage (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6198"/>
        <source>Cell voltage (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6217"/>
        <source>Cell temp. (max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6236"/>
        <source>Cell temp. (min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6264"/>
        <location filename="../mywidget.ui" line="6809"/>
        <location filename="../mywidget.ui" line="9078"/>
        <location filename="../mywidget.ui" line="9093"/>
        <location filename="../mywidget.cpp" line="975"/>
        <location filename="../mywidget.cpp" line="1022"/>
        <location filename="../mywidget.cpp" line="1065"/>
        <location filename="../mywidget.cpp" line="1111"/>
        <location filename="../mywidget.cpp" line="1169"/>
        <location filename="../mywidget.cpp" line="1329"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6294"/>
        <location filename="../mywidget.ui" line="6313"/>
        <location filename="../mywidget.ui" line="6332"/>
        <location filename="../mywidget.ui" line="6351"/>
        <location filename="../mywidget.ui" line="6370"/>
        <location filename="../mywidget.ui" line="6389"/>
        <location filename="../mywidget.ui" line="6408"/>
        <location filename="../mywidget.ui" line="6427"/>
        <location filename="../mywidget.ui" line="6834"/>
        <location filename="../mywidget.ui" line="6853"/>
        <location filename="../mywidget.ui" line="6872"/>
        <location filename="../mywidget.ui" line="6891"/>
        <location filename="../mywidget.ui" line="6910"/>
        <location filename="../mywidget.ui" line="6929"/>
        <location filename="../mywidget.ui" line="9212"/>
        <location filename="../mywidget.ui" line="9294"/>
        <location filename="../mywidget.ui" line="9367"/>
        <location filename="../mywidget.ui" line="9431"/>
        <location filename="../mywidget.ui" line="9495"/>
        <location filename="../mywidget.ui" line="12629"/>
        <location filename="../mywidget.ui" line="12675"/>
        <location filename="../mywidget.ui" line="12721"/>
        <location filename="../mywidget.ui" line="12767"/>
        <location filename="../mywidget.ui" line="12834"/>
        <location filename="../mywidget.cpp" line="2480"/>
        <location filename="../mywidget.cpp" line="2939"/>
        <location filename="../mywidget.cpp" line="2994"/>
        <location filename="../mywidget.cpp" line="2998"/>
        <location filename="../mywidget.cpp" line="3116"/>
        <location filename="../mywidget.cpp" line="3123"/>
        <source>0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6452"/>
        <location filename="../mywidget.ui" line="6980"/>
        <location filename="../mywidget.ui" line="9083"/>
        <location filename="../mywidget.ui" line="9098"/>
        <source>Unit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6488"/>
        <location filename="../mywidget.ui" line="6998"/>
        <location filename="../mywidget.ui" line="7016"/>
        <location filename="../mywidget.ui" line="8550"/>
        <source>A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6542"/>
        <location filename="../mywidget.ui" line="6560"/>
        <source>mV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6578"/>
        <location filename="../mywidget.ui" line="6596"/>
        <source>℃</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7148"/>
        <source>prompt:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7189"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7345"/>
        <source>Alarm level:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1586"/>
        <location filename="../mywidget.ui" line="1630"/>
        <location filename="../mywidget.ui" line="1674"/>
        <location filename="../mywidget.ui" line="7414"/>
        <location filename="../mywidget.ui" line="7458"/>
        <location filename="../mywidget.ui" line="14218"/>
        <location filename="../mywidget.ui" line="14262"/>
        <location filename="../mywidget.ui" line="14306"/>
        <location filename="../mywidget.cpp" line="2254"/>
        <location filename="../mywidget.cpp" line="2270"/>
        <location filename="../mywidget.cpp" line="3677"/>
        <location filename="../mywidget.cpp" line="3680"/>
        <location filename="../mywidget.cpp" line="3683"/>
        <location filename="../mywidget.cpp" line="3686"/>
        <location filename="../mywidget.cpp" line="3689"/>
        <location filename="../mywidget.cpp" line="3692"/>
        <source>Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6691"/>
        <location filename="../mywidget.cpp" line="1707"/>
        <source>Allowable charging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6709"/>
        <location filename="../mywidget.cpp" line="1711"/>
        <source>Allowable discharging power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6727"/>
        <location filename="../mywidget.cpp" line="1715"/>
        <source>Allowable charging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6745"/>
        <location filename="../mywidget.cpp" line="1719"/>
        <source>Allowable discharging energy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7539"/>
        <source>Data report</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7652"/>
        <source>yyyy-MM-dd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7684"/>
        <location filename="../mywidget.cpp" line="3990"/>
        <source>Y  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7703"/>
        <location filename="../mywidget.cpp" line="4002"/>
        <source>M  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7722"/>
        <location filename="../mywidget.cpp" line="4014"/>
        <source>D  -</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7748"/>
        <location filename="../mywidget.cpp" line="3996"/>
        <source>Y  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7767"/>
        <location filename="../mywidget.cpp" line="4008"/>
        <source>M  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7786"/>
        <location filename="../mywidget.cpp" line="4020"/>
        <source>D  +</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7802"/>
        <source>Export Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7851"/>
        <source>Note:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7871"/>
        <source>Log.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7892"/>
        <source>Out put file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7934"/>
        <source>Report.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7975"/>
        <source>Data To Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4032"/>
        <source>OperationLog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8237"/>
        <source>History Record</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8127"/>
        <location filename="../mywidget.ui" line="8274"/>
        <source>Operation Log</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8023"/>
        <source>status:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8339"/>
        <source>DC/AC Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8414"/>
        <location filename="../mywidget.ui" line="11714"/>
        <location filename="../mywidget.cpp" line="3038"/>
        <source>Control mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8430"/>
        <source>Constant power (AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8446"/>
        <location filename="../mywidget.ui" line="13225"/>
        <location filename="../mywidget.cpp" line="3374"/>
        <source>Machine number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8478"/>
        <source>Parallel </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8494"/>
        <location filename="../mywidget.ui" line="13077"/>
        <location filename="../mywidget.cpp" line="3350"/>
        <source>Output power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="114"/>
        <location filename="../mywidget.ui" line="2598"/>
        <source>Change
Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1538"/>
        <source>Dry Contact EPO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1546"/>
        <source>Dry Contact Shutdown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1663"/>
        <location filename="../mywidget.ui" line="1707"/>
        <source>Reserved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4236"/>
        <source>Grid sell:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4171"/>
        <source>Grid buy:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3627"/>
        <source>0%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4334"/>
        <source>Converter Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5479"/>
        <location filename="../mywidget.cpp" line="4149"/>
        <source>Converter State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5873"/>
        <source>Converter Alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6655"/>
        <location filename="../mywidget.cpp" line="1699"/>
        <source>Charging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6673"/>
        <location filename="../mywidget.cpp" line="1703"/>
        <source>Discharging current limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7224"/>
        <source>Level1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7266"/>
        <source>Level2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7301"/>
        <source>Level3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7386"/>
        <source>Charging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7430"/>
        <source>Discharging 
enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7913"/>
        <source>Record.csv</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8064"/>
        <source>u disk disconnect!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8098"/>
        <location filename="../mywidget.cpp" line="4026"/>
        <source>History Records</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8162"/>
        <location filename="../mywidget.cpp" line="4038"/>
        <source>Electricity Statistical Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8462"/>
        <source>Working mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8526"/>
        <location filename="../mywidget.cpp" line="3345"/>
        <source>Output reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8542"/>
        <location filename="../mywidget.cpp" line="3362"/>
        <source>Constant current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8558"/>
        <location filename="../mywidget.cpp" line="3355"/>
        <source>Constant voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8594"/>
        <source>DC/DC Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8613"/>
        <source>Battery setup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8786"/>
        <source>DOD_OnGrid(%):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8802"/>
        <source>DOD_OffGrid(%):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8834"/>
        <source>Charge Volt. upper Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8850"/>
        <source>Charge Volt. upper Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8866"/>
        <source>Discharge Volt. lower Limit(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8890"/>
        <source>Discharge Volt. lower Limit delta(V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8906"/>
        <location filename="../mywidget.ui" line="12346"/>
        <source>Charge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8922"/>
        <location filename="../mywidget.ui" line="12383"/>
        <source>Discharge Current Limit(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8794"/>
        <location filename="../mywidget.ui" line="12457"/>
        <source>Generator turn off SOC(B1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8810"/>
        <location filename="../mywidget.ui" line="12420"/>
        <source>Generator turn on SOC(A1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9036"/>
        <location filename="../mywidget.ui" line="9041"/>
        <location filename="../mywidget.ui" line="9046"/>
        <location filename="../mywidget.ui" line="9051"/>
        <location filename="../mywidget.ui" line="9056"/>
        <location filename="../mywidget.ui" line="9061"/>
        <location filename="../mywidget.ui" line="9066"/>
        <source>New Row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9103"/>
        <location filename="../mywidget.ui" line="12594"/>
        <location filename="../mywidget.cpp" line="3220"/>
        <source>Capacity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9111"/>
        <source>Ah</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9119"/>
        <location filename="../mywidget.ui" line="12786"/>
        <source>Grid off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9135"/>
        <location filename="../mywidget.ui" line="12640"/>
        <source>Cell number(2V)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9151"/>
        <location filename="../mywidget.ui" line="12740"/>
        <source>Grid on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9167"/>
        <location filename="../mywidget.ui" line="12686"/>
        <location filename="../mywidget.cpp" line="3230"/>
        <source>Battery float voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9183"/>
        <source>Shutdown voltage point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9249"/>
        <location filename="../mywidget.ui" line="12732"/>
        <location filename="../mywidget.cpp" line="3235"/>
        <source>Battery filling voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9265"/>
        <location filename="../mywidget.ui" line="12618"/>
        <source>Mending center point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9331"/>
        <location filename="../mywidget.ui" line="12778"/>
        <location filename="../mywidget.cpp" line="3240"/>
        <source>Charge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9339"/>
        <location filename="../mywidget.ui" line="9403"/>
        <location filename="../mywidget.ui" line="9547"/>
        <location filename="../mywidget.ui" line="9579"/>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9347"/>
        <location filename="../mywidget.ui" line="12664"/>
        <source>Temperature filling coefficient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9395"/>
        <location filename="../mywidget.ui" line="12815"/>
        <location filename="../mywidget.cpp" line="3245"/>
        <source>Discharge limiting value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9411"/>
        <location filename="../mywidget.ui" line="12710"/>
        <source>Mending allowable setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9459"/>
        <source>Generator turn off voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9475"/>
        <location filename="../mywidget.ui" line="12756"/>
        <source>Temperature alarm upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9523"/>
        <source>Generator turn on voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9539"/>
        <location filename="../mywidget.ui" line="12802"/>
        <location filename="../mywidget.cpp" line="3278"/>
        <source>Uniform charging and flushing current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9571"/>
        <location filename="../mywidget.ui" line="12845"/>
        <location filename="../mywidget.cpp" line="3283"/>
        <source>Float turn uniform charging current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9650"/>
        <source>Hybrid Mode Enable：</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9681"/>
        <source>SystemInformation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9694"/>
        <location filename="../mywidget.ui" line="15135"/>
        <source>Version:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2340"/>
        <source>Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2344"/>
        <source>DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2348"/>
        <source>DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2352"/>
        <source>DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2356"/>
        <source>DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2360"/>
        <source>DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2364"/>
        <source>DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9856"/>
        <location filename="../mywidget.ui" line="15303"/>
        <source>Network:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9915"/>
        <location filename="../mywidget.ui" line="15362"/>
        <source>interface:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9956"/>
        <location filename="../mywidget.ui" line="15403"/>
        <source>Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9937"/>
        <location filename="../mywidget.ui" line="15384"/>
        <source>eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9978"/>
        <location filename="../mywidget.ui" line="15425"/>
        <source>502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10171"/>
        <location filename="../mywidget.ui" line="15618"/>
        <source>Apply and Reatart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10012"/>
        <location filename="../mywidget.ui" line="15459"/>
        <location filename="../mywidget.cpp" line="4120"/>
        <source>DHCP</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8951"/>
        <source>DCAC cell delta(mV)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9766"/>
        <location filename="../mywidget.ui" line="15213"/>
        <location filename="../mywidget.ui" line="18526"/>
        <source>System Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9771"/>
        <location filename="../mywidget.ui" line="15218"/>
        <source>   Monitoring software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9784"/>
        <location filename="../mywidget.ui" line="15231"/>
        <source>   DCAC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9792"/>
        <location filename="../mywidget.ui" line="15239"/>
        <source>   DCAC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9800"/>
        <location filename="../mywidget.ui" line="15247"/>
        <source>   DCAC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9813"/>
        <location filename="../mywidget.ui" line="15260"/>
        <source>   DCDC Protocol version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9821"/>
        <location filename="../mywidget.ui" line="15268"/>
        <source>   DCDC Converter software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9829"/>
        <location filename="../mywidget.ui" line="15276"/>
        <source>   DCDC CPLD software version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9837"/>
        <location filename="../mywidget.ui" line="15284"/>
        <source>   SN:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10028"/>
        <location filename="../mywidget.ui" line="15475"/>
        <location filename="../mywidget.cpp" line="4098"/>
        <source>STATIC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10048"/>
        <location filename="../mywidget.ui" line="15495"/>
        <source>ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10078"/>
        <location filename="../mywidget.ui" line="15525"/>
        <source>netmask:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10108"/>
        <location filename="../mywidget.ui" line="15555"/>
        <source>gateway:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10138"/>
        <location filename="../mywidget.ui" line="15585"/>
        <source>Server ip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10061"/>
        <location filename="../mywidget.ui" line="15508"/>
        <source>192 . 168 . 1 . 100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10091"/>
        <location filename="../mywidget.ui" line="15538"/>
        <source>255 . 255 . 255 . 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10121"/>
        <location filename="../mywidget.ui" line="15568"/>
        <source>192 . 168 .  1  . 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10151"/>
        <location filename="../mywidget.ui" line="15598"/>
        <source> 192 . 168 . 1  . 200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10532"/>
        <source>DCAC converter 
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10459"/>
        <source>DCAC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10359"/>
        <source>DCDC converter
 OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10286"/>
        <source>DCDC converter
 ON</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13159"/>
        <source>serial port 6(bps)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13368"/>
        <source>Release Charging Prohibition Indicator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13405"/>
        <source>Release Discharging Prohibition Indicator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14170"/>
        <source>EPO</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14178"/>
        <source>Shut Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14210"/>
        <source>Fire fighting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17365"/>
        <source>Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17451"/>
        <source>Converter2 Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17521"/>
        <source>640V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17578"/>
        <source>780V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17617"/>
        <source>639V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17627"/>
        <source>150A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17687"/>
        <source>246A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="17726"/>
        <source>202A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="841"/>
        <source>切换语言</source>
        <translation>Change Language</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="958"/>
        <location filename="../mywidget.cpp" line="1006"/>
        <location filename="../mywidget.cpp" line="1984"/>
        <source>Leakage current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="958"/>
        <location filename="../mywidget.cpp" line="1975"/>
        <source>IGBT temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="958"/>
        <source>Env. temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="960"/>
        <location filename="../mywidget.cpp" line="1989"/>
        <source>PV voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="960"/>
        <location filename="../mywidget.cpp" line="1993"/>
        <source>PV current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="960"/>
        <location filename="../mywidget.cpp" line="1997"/>
        <source>PV power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="961"/>
        <location filename="../mywidget.cpp" line="2001"/>
        <source>Battery voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="961"/>
        <location filename="../mywidget.cpp" line="2005"/>
        <source>Battery current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="961"/>
        <location filename="../mywidget.cpp" line="2009"/>
        <source>Battery power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="962"/>
        <location filename="../mywidget.cpp" line="2013"/>
        <source>Bus voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="962"/>
        <location filename="../mywidget.cpp" line="2017"/>
        <source>Bus current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="975"/>
        <source>Inverter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="975"/>
        <source>DC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1009"/>
        <source>PositiveInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1008"/>
        <source>Bus_H_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1008"/>
        <source>Bus_H_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1008"/>
        <source>Bus_L_Vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1008"/>
        <source>Bus_L_Vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1009"/>
        <source>NegativeInuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1009"/>
        <location filename="../mywidget.cpp" line="2085"/>
        <source>IGBT Temperature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1147"/>
        <location filename="../mywidget.cpp" line="2212"/>
        <source>DC input breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1147"/>
        <location filename="../mywidget.cpp" line="2216"/>
        <source>DC contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1147"/>
        <source>Maintenance Bypass breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1148"/>
        <location filename="../mywidget.cpp" line="2228"/>
        <source>Output contactor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1148"/>
        <location filename="../mywidget.cpp" line="2232"/>
        <source>Grid breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1148"/>
        <location filename="../mywidget.cpp" line="2224"/>
        <source>Output breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1151"/>
        <location filename="../mywidget.cpp" line="2254"/>
        <source>DCAC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1151"/>
        <location filename="../mywidget.cpp" line="2258"/>
        <source>DC Soft start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1151"/>
        <location filename="../mywidget.cpp" line="1155"/>
        <source>Converter status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1151"/>
        <location filename="../mywidget.cpp" line="2266"/>
        <source>Reactive power Regulation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1152"/>
        <location filename="../mywidget.cpp" line="2270"/>
        <source>LVRT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1152"/>
        <location filename="../mywidget.cpp" line="2274"/>
        <source>DI1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1152"/>
        <location filename="../mywidget.cpp" line="2278"/>
        <source>DI2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1152"/>
        <location filename="../mywidget.cpp" line="2282"/>
        <source>DI3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1152"/>
        <location filename="../mywidget.cpp" line="2286"/>
        <source>DI4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1152"/>
        <location filename="../mywidget.cpp" line="2290"/>
        <source>DI5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1152"/>
        <location filename="../mywidget.cpp" line="2294"/>
        <source>DI6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1155"/>
        <source>Contactor status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1155"/>
        <source>Contactor status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1154"/>
        <location filename="../mywidget.cpp" line="2303"/>
        <source>Run mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1154"/>
        <location filename="../mywidget.cpp" line="2299"/>
        <source>DCDC Converter available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1154"/>
        <source>Soft start status boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1154"/>
        <source>Soft start status buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11861"/>
        <location filename="../mywidget.cpp" line="3081"/>
        <source>Work parttern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="11901"/>
        <location filename="../mywidget.cpp" line="3086"/>
        <source>Boost or Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <location filename="../mywidget.cpp" line="3289"/>
        <source>Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>StartTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>EndTime</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <location filename="../mywidget.cpp" line="3292"/>
        <source>Features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3293"/>
        <source>Power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1223"/>
        <source>PV power generation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1223"/>
        <source>Battery charge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1224"/>
        <source>Battery discharge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1226"/>
        <source> </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1226"/>
        <source>Day(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1226"/>
        <source>Month(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1226"/>
        <source>Year(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1226"/>
        <source>Total(kWh)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1252"/>
        <location filename="../mywidget.cpp" line="2481"/>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1252"/>
        <location filename="../mywidget.cpp" line="2483"/>
        <source>Start Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1252"/>
        <location filename="../mywidget.cpp" line="2485"/>
        <source>End Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1252"/>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1667"/>
        <source>Bat volage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="874"/>
        <location filename="../mywidget.cpp" line="1668"/>
        <location filename="../mywidget.cpp" line="1672"/>
        <location filename="../mywidget.cpp" line="1676"/>
        <location filename="../mywidget.cpp" line="1680"/>
        <location filename="../mywidget.cpp" line="1684"/>
        <location filename="../mywidget.cpp" line="1688"/>
        <location filename="../mywidget.cpp" line="1692"/>
        <location filename="../mywidget.cpp" line="1696"/>
        <location filename="../mywidget.cpp" line="1700"/>
        <location filename="../mywidget.cpp" line="1704"/>
        <location filename="../mywidget.cpp" line="1708"/>
        <location filename="../mywidget.cpp" line="1712"/>
        <location filename="../mywidget.cpp" line="1716"/>
        <location filename="../mywidget.cpp" line="1720"/>
        <location filename="../mywidget.cpp" line="1724"/>
        <location filename="../mywidget.cpp" line="1728"/>
        <location filename="../mywidget.cpp" line="1732"/>
        <location filename="../mywidget.cpp" line="1746"/>
        <location filename="../mywidget.cpp" line="1750"/>
        <location filename="../mywidget.cpp" line="1754"/>
        <location filename="../mywidget.cpp" line="1758"/>
        <location filename="../mywidget.cpp" line="1762"/>
        <location filename="../mywidget.cpp" line="1766"/>
        <location filename="../mywidget.cpp" line="1770"/>
        <location filename="../mywidget.cpp" line="1942"/>
        <location filename="../mywidget.cpp" line="3980"/>
        <location filename="../mywidget.cpp" line="3985"/>
        <location filename="../mywidget.cpp" line="3991"/>
        <location filename="../mywidget.cpp" line="3997"/>
        <location filename="../mywidget.cpp" line="4003"/>
        <location filename="../mywidget.cpp" line="4009"/>
        <location filename="../mywidget.cpp" line="4015"/>
        <location filename="../mywidget.cpp" line="4021"/>
        <location filename="../mywidget.cpp" line="4027"/>
        <location filename="../mywidget.cpp" line="4033"/>
        <location filename="../mywidget.cpp" line="4039"/>
        <location filename="../mywidget.cpp" line="4045"/>
        <location filename="../mywidget.cpp" line="4050"/>
        <location filename="../mywidget.cpp" line="4055"/>
        <location filename="../mywidget.cpp" line="4066"/>
        <location filename="../mywidget.cpp" line="4072"/>
        <location filename="../mywidget.cpp" line="4078"/>
        <location filename="../mywidget.cpp" line="4098"/>
        <location filename="../mywidget.cpp" line="4120"/>
        <location filename="../mywidget.cpp" line="4128"/>
        <location filename="../mywidget.cpp" line="4133"/>
        <location filename="../mywidget.cpp" line="4138"/>
        <location filename="../mywidget.cpp" line="4143"/>
        <location filename="../mywidget.cpp" line="4149"/>
        <location filename="../mywidget.cpp" line="4154"/>
        <location filename="../mywidget.cpp" line="4374"/>
        <location filename="../mywidget.cpp" line="4471"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="956"/>
        <source>Inv. Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="956"/>
        <source>Inv. Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="956"/>
        <source>Inv. Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="957"/>
        <source>Inv. Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="957"/>
        <source>Inv. Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="957"/>
        <source>Inv. Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1005"/>
        <source>PV Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1005"/>
        <source>PV Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1005"/>
        <source>PV Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1006"/>
        <source>PV Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1006"/>
        <source>PV Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1006"/>
        <source>PV Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1049"/>
        <location filename="../mywidget.cpp" line="2101"/>
        <source>Grid Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1049"/>
        <location filename="../mywidget.cpp" line="2105"/>
        <source>Grid Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1049"/>
        <location filename="../mywidget.cpp" line="2109"/>
        <source>Grid Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1050"/>
        <location filename="../mywidget.cpp" line="2113"/>
        <source>Grid Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1050"/>
        <location filename="../mywidget.cpp" line="2117"/>
        <source>Grid Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1050"/>
        <location filename="../mywidget.cpp" line="2121"/>
        <source>Grid Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1094"/>
        <location filename="../mywidget.cpp" line="2151"/>
        <source>Load Voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1094"/>
        <location filename="../mywidget.cpp" line="2155"/>
        <source>Load Voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1094"/>
        <location filename="../mywidget.cpp" line="2159"/>
        <source>Load Voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1095"/>
        <location filename="../mywidget.cpp" line="2163"/>
        <source>Load Current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1095"/>
        <location filename="../mywidget.cpp" line="2167"/>
        <source>Load Current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1095"/>
        <location filename="../mywidget.cpp" line="2171"/>
        <source>Load Current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <location filename="../mywidget.cpp" line="3304"/>
        <source>Peak-Flat-Valley</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>Power(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1223"/>
        <source>Load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1224"/>
        <source>Grid buy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1224"/>
        <source>Grid sell</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1683"/>
        <source>Cell voltage(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1687"/>
        <source>Cell voltage(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1691"/>
        <source>Cell temp.(max)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1695"/>
        <source>Cell temp.(min)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1723"/>
        <source>Alarm level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1745"/>
        <source>Interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1746"/>
        <source>This is the interface number, which defaults to eth0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1749"/>
        <source>Port</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1750"/>
        <source>This is the port number, default 502</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1753"/>
        <source>Ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1754"/>
        <source>This is the IP address. The default is 192.168.1.100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1757"/>
        <source>Netmask</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1758"/>
        <source>This is the subnet mask, 255.255.255.0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1761"/>
        <source>Gateway</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1762"/>
        <source>This is the gateway. The default is 192.168.1.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1765"/>
        <source>Serber ip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1766"/>
        <source>This is the server IP address. The default is 192.168.1.200</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1769"/>
        <source>Apply and Restart system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1770"/>
        <source>This is the application and restart the system, click will restart the system, if there is an upgrade, will use the new program.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1959"/>
        <source>Inv. voltage(CA)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2037"/>
        <source>Voltage H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2041"/>
        <source>Current H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2045"/>
        <source>Power H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2049"/>
        <source>Voltage L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2053"/>
        <source>Current L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2057"/>
        <source>Power L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2070"/>
        <source>Positive bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2074"/>
        <source>Negative bus voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2078"/>
        <source>Positive bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2082"/>
        <source>Negative bus voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2128"/>
        <source>Active power P on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2132"/>
        <source>Reactive power Q on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2136"/>
        <source>Apparent power S on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2140"/>
        <source>Power factor PF on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2144"/>
        <source>Frequency on the grid side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2177"/>
        <source>Active power P on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2181"/>
        <source>Reactive power Q on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2185"/>
        <source>Apparent power S on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2189"/>
        <source>Power factor PF on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2193"/>
        <source>Frequency on the load side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2212"/>
        <location filename="../mywidget.cpp" line="2216"/>
        <location filename="../mywidget.cpp" line="2220"/>
        <location filename="../mywidget.cpp" line="2224"/>
        <location filename="../mywidget.cpp" line="2228"/>
        <location filename="../mywidget.cpp" line="2232"/>
        <location filename="../mywidget.cpp" line="2319"/>
        <source>On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2213"/>
        <source>There are two states for a DC circuit breaker: On, Off.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2217"/>
        <source>The DC contactor has two states: On, Off. After the soft start of the DC side is completed, the DC contactor closes. When the DC side of the battery is disconnected and the voltage of the DC bus drops to a certain level, the DC contactor opens.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2220"/>
        <source>Maintenance Bypass Breaker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2949"/>
        <source>Grid Expansion: Enable, Disable. Enabling activates the Grid Expansion mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2959"/>
        <source>DG Charging power limit: Diesel generators allow for the maximum charging power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3039"/>
        <source>Local: Converter control through HMI, In this mode, the EMS can only read and cannot write.
    Remote: In remote mode, the EMS can perform both read and write control.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3104"/>
        <source>Outer Ring Centralized Control: Enable, Disable.the photovoltaic energy storage system achieves efficient operation and optimal performance through centralized control and optimization of external environmental factors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3111"/>
        <source>IV Curve Scanning: Enable, Disable.
IV curve scanning is a method used to test and evaluate the performance of photovoltaic cells or modules by obtaining the output current at different voltages.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3116"/>
        <source>IV curve scanning low voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3117"/>
        <source>IV curve scanning high voltage: By applying a higher voltage to the output end of a photovoltaic module, its performance is measured to identify potential issues, such as component or array faults.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3123"/>
        <source>IV curve scanning high voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3124"/>
        <source>IV curve scanning low voltage: Obtaining comprehensive performance data of photovoltaic modules at various voltages to provide key indicators for evaluating component performance, such as energy conversion efficiency and stability.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3435"/>
        <source>Battery Capacity Alarm: Enable,Disable.It is effective in Grid Expansion mode and is used to prevent over-discharge of the battery.
    When the battery SOC is lower than the &quot;Charge SOC&quot; or &quot;On-Grid DOD&quot;, the system will enter low protection mode for battery capacity. If, at this time, the load still exceeds the set grid capacity value and battery discharge is required, the system will shut down after the battery has been discharging continuously for 3 minutes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4467"/>
        <source>    When not logged in, it is not possible to access the system page or view and modify basic settings and advanced settings parameters.
    When logged in as a &quot;User&quot; account, it is possible to switch work modes and modify basic settings parameters related to the work mode. Advanced settings parameters can be viewed but cannot be modified.
    When logged in as a &quot;Maintain&quot; or &quot;Admin&quot; account, it is possible to set both basic settings parameters and advanced settings parameters.
    The default user password is 123456. If there is a need to modify advanced settings parameters, please contact the maintenance personnel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9669"/>
        <location filename="../mywidget.cpp" line="2236"/>
        <location filename="../mywidget.cpp" line="2240"/>
        <location filename="../mywidget.cpp" line="2244"/>
        <location filename="../mywidget.cpp" line="2248"/>
        <location filename="../mywidget.cpp" line="2266"/>
        <location filename="../mywidget.cpp" line="2274"/>
        <location filename="../mywidget.cpp" line="2278"/>
        <location filename="../mywidget.cpp" line="2282"/>
        <location filename="../mywidget.cpp" line="2286"/>
        <location filename="../mywidget.cpp" line="2290"/>
        <location filename="../mywidget.cpp" line="2294"/>
        <location filename="../mywidget.cpp" line="2299"/>
        <location filename="../mywidget.cpp" line="2331"/>
        <location filename="../mywidget.cpp" line="2948"/>
        <location filename="../mywidget.cpp" line="3103"/>
        <location filename="../mywidget.cpp" line="3110"/>
        <location filename="../mywidget.cpp" line="3381"/>
        <location filename="../mywidget.cpp" line="3434"/>
        <location filename="../mywidget.cpp" line="3604"/>
        <location filename="../mywidget.cpp" line="3653"/>
        <location filename="../mywidget.cpp" line="3657"/>
        <source>Disable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2258"/>
        <source>Not starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2262"/>
        <location filename="../mywidget.cpp" line="2327"/>
        <source>OFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2262"/>
        <location filename="../mywidget.cpp" line="2323"/>
        <source>Converter Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2271"/>
        <source>LVRT states : Enable , Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2931"/>
        <source>automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2939"/>
        <source>Constant power(AC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3002"/>
        <location filename="../mywidget.cpp" line="3006"/>
        <location filename="../mywidget.cpp" line="3362"/>
        <source>100</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3355"/>
        <source>600</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3038"/>
        <source>Local</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="13262"/>
        <location filename="../mywidget.cpp" line="3381"/>
        <source>Parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3382"/>
        <source>Parallel operation: When converter operates at grid-off mode in parallel, this item needs to be enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4065"/>
        <source>Battery power-on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4066"/>
        <source>Battery power-on: This function allows the BMS to send a command to close the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4071"/>
        <source>Battery power-off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4072"/>
        <source>Battery power-off: This function allows the BMS to send a command to open the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4078"/>
        <source>Hybrid mode: When the function of running according to the schedule is enabled, this option is enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3081"/>
        <source>MPPT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2221"/>
        <source>There are two states for the maintenance bypass circuit breaker: On, Off. This circuit breaker is only used for machine maintenance. If maintenance is required, please contact the maintenance personnel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2229"/>
        <source>The output contactor has two states: On, Off. The output contactor closes after the soft start on the inv. side is completed. The output contactor opens when the converter is shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2315"/>
        <source>Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2316"/>
        <source>DC module high voltage contactor has two states: On, Off; When there is voltage on the high voltage side, close the high voltage contactor; Otherwise, the high voltage contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2324"/>
        <source>DCDC module operation modes states: OFF, Standby, Constant Voltage, Constant Current, MPPT.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3098"/>
        <source>300</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3099"/>
        <source>DC Constant Voltage Value: Constant voltage target, range 200V-850V.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3093"/>
        <source>60</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3094"/>
        <source>DC Constant Current Value: Constant current target, range (0A - 120A) * n (n is the number of online modules).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3148"/>
        <source>DOD Protection Release SOC: When the DOD protection is activated, the current SOC reaches the set SOC value, and the DOD protection is released, allowing the battery to continue discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3158"/>
        <source>Charge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3165"/>
        <source>Disc_Vol_lower_Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3170"/>
        <source>Discharge Volt upper Limit delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3175"/>
        <source>Charge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3180"/>
        <source>Discharge Current Limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3207"/>
        <location filename="../mywidget.cpp" line="3211"/>
        <source>Reserved function, settings are invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3221"/>
        <source>Capacity, the capacity of the lead-acid battery.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3225"/>
        <source>Cell_number_2V</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3231"/>
        <source>This is the floating charge voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3236"/>
        <source>This is the filling voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3296"/>
        <source>End time: The system stops automatically running when the system reaches this time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2378"/>
        <source>Today&apos;s photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2382"/>
        <source>Monthly photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2386"/>
        <source>Annual photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2390"/>
        <source>Total photovoltaic power generation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2394"/>
        <source>Daily load electricity consumption </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2395"/>
        <source>Today&apos;s electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2398"/>
        <source>Monthly load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2399"/>
        <source>Monthly electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2402"/>
        <source>Annual load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2403"/>
        <source>Annual electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2406"/>
        <source>Total load electricity consumption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2407"/>
        <source>Total electricity consumption of the load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2412"/>
        <source>Today&apos;s battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2416"/>
        <source>Monthly battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2420"/>
        <source>Annual battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2424"/>
        <source>Total battery charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2429"/>
        <source>Today&apos;s battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2433"/>
        <source>Monthly battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2437"/>
        <source>Annual battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2441"/>
        <source>Total battery discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2445"/>
        <source>Grid buy Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2449"/>
        <source>Grid buy Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2453"/>
        <source>Grid buy Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2457"/>
        <source>Grid buy Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2462"/>
        <source>Grid sell Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2466"/>
        <source>Grid sell Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2470"/>
        <source>Grid sell Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2474"/>
        <source>Grid sell Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2484"/>
        <source>Event start time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2486"/>
        <source>Event end time: &apos;... &apos;indicates that there is no end time,&apos;-&apos; indicates that the event is in progress.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2489"/>
        <source>event description.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2492"/>
        <source>Converter Standby.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2493"/>
        <source>The grid contactor connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2494"/>
        <source>The grid breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2495"/>
        <source>The output breaker connected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2496"/>
        <source>Buck not softened</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2497"/>
        <source>Contactor off buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2498"/>
        <source>The grid breaker disconnected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1293"/>
        <location filename="../mywidget.cpp" line="2791"/>
        <source>Record Event</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8398"/>
        <location filename="../mywidget.cpp" line="2931"/>
        <source>Grid conected mode of the converter </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2932"/>
        <source>When &quot;Auto&quot; is selected, the converter will automatically switch between grid-on and grid-off. When the grid side is normal, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter operates in grid-off mode (VF).
When &quot;Grid-on&quot; is selected, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter will shut down.
When &quot;Grid-off&quot; is selected, the converter operates in grid-off mode (VF).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3351"/>
        <source>This item can modify the power factor, where the power factor is equal to the ratio of active power to apparent power. A positive value indicates leading reactive power, while a negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3346"/>
        <source>This parameter can change the reactive power Q, positive value indicates leading reactive power, negative value indicates lagging reactive power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3374"/>
        <source>M_01</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3375"/>
        <source>Device number: You can set ID number, which can be set within the range of M_01 to M_12.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3082"/>
        <source>DCDC module working modes include standby, constant voltage (CV), constant current (CC), and maximum power point tracking (MPPT).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2953"/>
        <source>30</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2953"/>
        <source>Grid capacity(kW)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2954"/>
        <source>Grid Capacity: The maximum power capacity connected to the grid in grid expansion mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2958"/>
        <source>DG Charging power limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2969"/>
        <source>Charging SOC:
 (1) At the self-use mode, when the battery SOC is lower than the charging SOC, the converter maintains the battery SOC at this value.
 (2) At the battery priority mode, the ECP or FCP state is determined based on the current SOC.
 (3) At the optimal mode, when the battery SOC is lower than the charging SOC, the converter enters the FCP state and starts charging the battery. When the current SOC is greater than or equal to the discharge SOC, the converter exits the FCP state and enters the ECP state.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3087"/>
        <source>DCDC module operating modes: Buck, Boost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3138"/>
        <source>Grid-on DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3139"/>
        <source>Grid-on DOD, allowable depth of discharge in grid-on mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3143"/>
        <source>Grid-off DOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3144"/>
        <source>Grid-off DOD, allowable depth of discharge in grid-off mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3153"/>
        <source>Charging voltage upper limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3154"/>
        <source>Charging voltage upper limit: When the battery total voltage reaches this value during charging, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3159"/>
        <source>Charging voltage upper limit hysteresis: When the battery is charging, if the battery total voltage reaches the charging voltage upper limit, the converter will shut down. When the battery total voltage drops below the charging voltage upper limit minus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3166"/>
        <source>Discharge voltage lower limit: When the battery total voltage reaches this value during discharge, the converter will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3171"/>
        <source>Discharge voltage lower limit hysteresis: When the battery is discharging, if the battery total voltage drops below the discharge voltage lower limit, the converter will shut down. When the battery total voltage exceeds the discharge voltage lower limit plus the hysteresis value, the converter will automatically turn on.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3176"/>
        <source>Charging current limit: The maximum allowable current on the battery side to prevent overcurrent during charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3181"/>
        <source>Discharging current limit: The maximum allowable current on the battery side to prevent overcurrent during discharging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3185"/>
        <source>Generator turn off SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3186"/>
        <source>When the specified SOC is reached, the diesel generator shuts down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3190"/>
        <source>Generator turn on SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3191"/>
        <source>When the specified SOC is reached, the diesel generator starts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3226"/>
        <source>The number of battery cells connected in series in the battery stack (based on a 2V unit).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3241"/>
        <source>Charging Current Limit: The maximum allowable current on the battery side to prevent overcurrent during charging. (Upper limit: 0.25C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3246"/>
        <source>Discharge Current Limit: The maximum allowable current on the battery side to prevent overcurrent during discharge. (Upper limit: 0.5C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3258"/>
        <source>Generator Shutdown Voltage: When the specified voltage is reached, the diesel generator will shut down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3253"/>
        <source>Generator Start Voltage: When the specified voltage is reached, the diesel generator will start up.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3267"/>
        <source>Grid-off EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3268"/>
        <source>Grid-off discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3272"/>
        <source>Grid-on EOD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3273"/>
        <source>Grid-on discharge cut-off voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3279"/>
        <source>Uniform charging to flushing current: Upper limit of 0.025C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3284"/>
        <source>Float turn to uniform charging current: Upper limit of 0.15C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3297"/>
        <source>The function that will perform this function during business hours, there are six to choose from, They are System for self-use, battery Batter priority, Peak shaving, Output PV power,Economic model.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2792"/>
        <source>System settings operation records.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3014"/>
        <source>Battery Types: Lithium, Lead-Acid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3019"/>
        <source>Battery Communication Modes: None, RS485, CAN, Ethernet. (Note: Due to the fact that CAN and Ethernet both have only one port, the battery communication mode and EMS communication mode cannot be selected as &quot;CAN&quot; or &quot;Ethernet&quot; simultaneously.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3330"/>
        <source>Constant Voltage (CV) mode: The converter will operate in constant voltage mode on the DC side.
Constant Current (CC) mode: The converter will operate in constant current mode on the DC side.
Constant Power AC (CP_AC) mode: The power level can be set at &quot;constant power.&quot; The value represents the power level, positive for discharge and negative for charge. For example, setting it to -5 means that the AC side will charge the battery with a power of 5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Conversely, setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.
Reserved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3033"/>
        <source>EMS communication methods: RS485, CAN, Ethernet.
The setting communication methods are readable and writable in remote mode, and only readable in local mode. The unselected communication methods are only readable in both remote and local mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3370"/>
        <source>Output Power Limit: Restricts the upper limit of the set value for the power on the AC side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2978"/>
        <source>Discharge SOC: When the SOC is greater than the discharge SOC, the FCP state is released.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2964"/>
        <source>Diesel Generator: Rated Power of the Diesel Generator.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3389"/>
        <source>Serial Communication Address: The default value is 1, adjustable range is between 1 and 255, used for matching address during serial communication.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3398"/>
        <source>Serial Port 3 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 3 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3403"/>
        <source>Serial Port 4 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 4 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3408"/>
        <source>Serial Port 5 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 5 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3413"/>
        <source>Serial Port 6 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 6 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3418"/>
        <source>CAN1 Port: The baud rate for internal communication is 500 kbps by default and cannot be modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3422"/>
        <source>CAN2 Port: Optional baud rates for the CAN2 port include 100, 125, 250, 500, and 800 kbps, with a default baud rate of 500 kbps.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3500"/>
        <source>When the battery SOC is below the selected value, there are four options: Follow battery, 95%, 90%, 85%.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3488"/>
        <source>Protocol version: View the current protocol version. The default protocol version number is V1.0.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3511"/>
        <source>User password: Available for resetting the user password. The default user password is 123456. (Note: The user password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2987"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2991"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2995"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2999"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3003"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3007"/>
        <source>The discharge zone limits the discharge power of the system to the power grid side.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3526"/>
        <source>Power change rate: the rate at which power changes within a second .</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3529"/>
        <source>Upper limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3530"/>
        <source>Upper limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as 0.2, 0.5, 1, 5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3534"/>
        <source>Lower limit of power grid frequency variation range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3535"/>
        <source>Lower limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as-0.5, -1, -2, -5.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3540"/>
        <source>Upper limit of voltage protection range: The maximum range of voltage variation allowed on the AC side, which can be selected as 10, 15, 20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3545"/>
        <source>Lower limit of voltage protection range: The minimum range of voltage variation allowed on the AC side, which can be selected as -10, -15, -20.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3550"/>
        <source>High voltage ride through(HVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3555"/>
        <source>Low voltage ride through(LVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3559"/>
        <source>Prevent islanding effect. When islanding effect is detected (in a photovoltaic grid-on system, when a power outage occurs in the main grid, and the PV grid-connected converter generates power that matches the local load on the low-voltage side of the grid, it can easily sustain power generation independently, resulting in an &apos;island&apos; phenomenon, which endangers the safety of maintenance personnel), the converter automatically shuts down. The options for this feature can be set as &apos;Enable&apos; or &apos;prohibited&apos;.(Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3570"/>
        <source>Primary frequency control enable: When the grid frequency deviates from the rated value, the active power is controlled to increase or decrease in order to maintain the grid frequency at the rated value. It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3616"/>
        <source>Rotational inertia enable: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3580"/>
        <source>Converter Model: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3585"/>
        <source>The rated capacity of the converter shall be based on the factory value and cannot be changed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3600"/>
        <source>Output Frequency Level: Default 50Hz, typically 50Hz or 60Hz.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3595"/>
        <source>Output Voltage Level: As per factory settings, generally not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3590"/>
        <source>Transformer Voltage Ratio: To be determined by the factory nameplate, not modifiable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3341"/>
        <source>Reactive Power Output Mode: Default non-adjustable, options include Power Factor, Reactive Power, non-adjustable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3605"/>
        <source>Converter Anti-Reverse Flow: Enable, Disable;
Enabling prevents converter current from flowing into the grid, while Disabling allows converter current to flow into the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3611"/>
        <source>Over-frequency load shedding: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3621"/>
        <source>QP curve: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3663"/>
        <source>Constant voltage parallel operation enable: It can be selected as enabled or disabled.  (Note: This option is generally used in large grid-on power stations.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3627"/>
        <source>Number of modules, default 1(invalid setting).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3473"/>
        <source>Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3639"/>
        <source>Maximum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3644"/>
        <source>Minimum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3658"/>
        <source>DCDC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3669"/>
        <source>When the dry contact is enabled, the device will perform the selected action when there is a change in the signal.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3991"/>
        <source>To view the data for the previous year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3997"/>
        <source>To view the data for the next year.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4003"/>
        <source>To view the data of the previous month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4009"/>
        <source>To view the data for the next month.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4015"/>
        <source>To view the data of the previous day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4021"/>
        <source>To view the data of the next day.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4027"/>
        <source>Export History Records, click here to export the history records to a U disk. The exported file will be named Record.csv, and it needs to be opened with Excel.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8191"/>
        <location filename="../mywidget.cpp" line="4044"/>
        <source>Eject U disk</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4045"/>
        <source>Eject U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4128"/>
        <source>The switch to turn on the DCDC converter, click to activate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4133"/>
        <source>The switch to turn off the DCDC converter, click to deactivate the DCDC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4138"/>
        <source>The switch to turn on the DCAC converter, click to activate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4143"/>
        <source>The switch to turn off the DCAC converter, click to deactivate the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4149"/>
        <source>Display the current status of the DCAC converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4154"/>
        <source>DCDC Module State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4374"/>
        <source>Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4374"/>
        <source>Click here to modify the time displayed on the HMI.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8965"/>
        <source>Lead</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3290"/>
        <source>Start_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3291"/>
        <source>End_Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3295"/>
        <source>10:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3301"/>
        <source>System for self-use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8644"/>
        <location filename="../mywidget.cpp" line="3013"/>
        <source>Lithium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3299"/>
        <source>Start time: When the system reaches this time, it starts to run automatically.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3300"/>
        <source>Select: After this function is enabled, the system automatically runs the selected function mode within the specified period.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2482"/>
        <source>0 represents an alarm event, and this item will turn red. 1 represents a status event.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3018"/>
        <source>BMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3032"/>
        <source>EMS Comm type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3024"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3024"/>
        <source>BAT protocol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2977"/>
        <source>Disharge SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3426"/>
        <source>Bat&gt;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3454"/>
        <source>English</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3455"/>
        <source>You can set the display language of the screen to Chinese or English. The system needs to restart before switching the language.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3468"/>
        <source>upgrade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3459"/>
        <source>Allow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3460"/>
        <source>Set whether the display is enabled sound, which can be allowed(Allow) or prohibited(forbid).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3549"/>
        <location filename="../mywidget.cpp" line="3554"/>
        <location filename="../mywidget.cpp" line="3558"/>
        <location filename="../mywidget.cpp" line="3569"/>
        <location filename="../mywidget.cpp" line="3610"/>
        <location filename="../mywidget.cpp" line="3615"/>
        <location filename="../mywidget.cpp" line="3620"/>
        <location filename="../mywidget.cpp" line="3662"/>
        <source>prohibit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3599"/>
        <source>Output Fre grade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3594"/>
        <source>Output vol level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3340"/>
        <source>Non adjustable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3610"/>
        <source>Pshedding Freq</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3662"/>
        <source>CV parallel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3492"/>
        <source>restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3493"/>
        <source>Restore the factory default Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3464"/>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3262"/>
        <source>DCAC Reference Voltage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3294"/>
        <source>08:00</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3363"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant current and modify the current value.Converter will charge or discharge the battery with this current value.Positive values represent discharging, while negative values represent charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3356"/>
        <source>Enter the advanced settings interface and select the control power mode.Choose constant voltage and modify the voltage value.Converter will operate at the constant voltage value and function as a constant voltage source.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3393"/>
        <source>Serial Port 2 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400.                                            The default baud rate for Serial Port 2 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3427"/>
        <source>Energy Priority: In the self-use mode,when selecting battery priority over the grid, the load is powered by the battery as a priority.When selecting the grid priority over the battery, the load is powered by the grid as a priority.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3434"/>
        <source>Battery Capacity Alarm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3465"/>
        <source>Clear previous recorded data and operation data of the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3504"/>
        <source>Release Prohibited Discharging Flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3505"/>
        <source>When the battery SOC is higher than the selected value, there are four options: Follow battery, 5%, 10%, 15%.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3516"/>
        <source>Admin password: Available for resetting the admin password.(Note: The admin password must be six digits.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3632"/>
        <source>When you select DCDC, the DCAC interface freezes, and the maximum module ID and minimum module ID take effect.You can only modify the database to restore the DCAC interface.(Note:As per factory settings, generally not modifiable.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3654"/>
        <source>DCAC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3668"/>
        <source>Normally closed circuit (NC) or normally open circuit (NO) according to field Settings.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3670"/>
        <source>Input Dry Contact: nEnabled: Triggers the Action when the dry contact detects a state other than the specified NO/NC.
Disabled: No action is taken when the dry contact detects a state other than the specified NO/NC.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3677"/>
        <source>DI_1_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3680"/>
        <source>DI_2_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3683"/>
        <source>DI_3_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3686"/>
        <source>DI_4_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3689"/>
        <source>DI_5_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3692"/>
        <source>DI_6_Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3697"/>
        <source>DI_1_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3700"/>
        <source>DI_2_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3703"/>
        <source>DI_3_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3706"/>
        <source>DI_4_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3709"/>
        <source>DI_5_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3712"/>
        <source>DI_6_NC_O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3718"/>
        <location filename="../mywidget.cpp" line="3730"/>
        <location filename="../mywidget.cpp" line="3733"/>
        <source>Shut down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3718"/>
        <source>DI_1_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1608"/>
        <location filename="../mywidget.ui" line="1652"/>
        <location filename="../mywidget.ui" line="1696"/>
        <location filename="../mywidget.ui" line="14240"/>
        <location filename="../mywidget.ui" line="14284"/>
        <location filename="../mywidget.ui" line="14328"/>
        <location filename="../mywidget.cpp" line="3721"/>
        <location filename="../mywidget.cpp" line="3724"/>
        <location filename="../mywidget.cpp" line="3727"/>
        <source>Prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3721"/>
        <source>DI_2_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3724"/>
        <source>DI_3_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3727"/>
        <source>DI_4_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3730"/>
        <source>DI_5_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3733"/>
        <source>DI_6_Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3738"/>
        <location filename="../mywidget.cpp" line="3896"/>
        <source>It is used for internal debugging only.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14610"/>
        <location filename="../mywidget.cpp" line="3767"/>
        <location filename="../mywidget.cpp" line="3929"/>
        <source>Debug variable 1 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14642"/>
        <location filename="../mywidget.cpp" line="3771"/>
        <location filename="../mywidget.cpp" line="3933"/>
        <source>Debug variable 2 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="14666"/>
        <location filename="../mywidget.cpp" line="3775"/>
        <location filename="../mywidget.cpp" line="3937"/>
        <source>Debug variable 3 addr</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3755"/>
        <location filename="../mywidget.cpp" line="3954"/>
        <source>Debug memery var 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3759"/>
        <location filename="../mywidget.cpp" line="3958"/>
        <source>Debug memery var 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3763"/>
        <location filename="../mywidget.cpp" line="3962"/>
        <source>Debug memery var 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3825"/>
        <source>Input Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3829"/>
        <source>Input Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3808"/>
        <source>Voltage 1.5 revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3812"/>
        <source>Bus Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3784"/>
        <source>Grid A AB Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3788"/>
        <source>Grid B BC Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3792"/>
        <source>Grid C CA Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3796"/>
        <source>Output A Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3800"/>
        <source>Output B Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3804"/>
        <source>Output C Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3833"/>
        <source>INV A Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3837"/>
        <source>INV B Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3841"/>
        <source>INV C Vol revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3866"/>
        <source>INV A inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3870"/>
        <source>INV B inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3874"/>
        <source>INV C inductance Cur revise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3779"/>
        <location filename="../mywidget.cpp" line="3941"/>
        <source>INV On off flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3820"/>
        <source>INV flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3890"/>
        <location filename="../mywidget.cpp" line="3949"/>
        <source>parallel signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3882"/>
        <location filename="../mywidget.cpp" line="3970"/>
        <source>Bat Infor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3878"/>
        <location filename="../mywidget.cpp" line="3974"/>
        <source>Bat State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4039"/>
        <source>Export the battery statistics. Click here to export the battery statistics to the U disk.
The accuracy is 0.1, which means that the obtained data multiplied by 0.1 gives the actual value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4077"/>
        <source>Hybrid mode Enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4098"/>
        <source>If this parameter is selected, static IP addresses are used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4120"/>
        <source>If this parameter is selected, the automatically assigned IP address is used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4128"/>
        <location filename="../mywidget.cpp" line="4138"/>
        <source>Turn on</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1942"/>
        <source>Alarm icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="872"/>
        <source>Upgrade prompt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="873"/>
        <source>1. Make sure to press the EPO button before upgrading.                              
2. Before upgrading the DCDC, switch off the ship-type switch of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="874"/>
        <source>Return</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1293"/>
        <location filename="../mywidget.cpp" line="2789"/>
        <source>Modification Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1700"/>
        <source>The limit of charging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1704"/>
        <source>The limit of discharging current uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1724"/>
        <source>Alarm levels uploaded from BMS, level one alarm is yellow, level two alarm is orange, and level three alarm is red;
By default, the converter does not respond to level one and level two alarms, but shuts down in response to level three alarms.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1942"/>
        <source>Alarm icon: It is not displayed when there is no alarm. When there is a minor alarm, a yellow icon is displayed. When there is a fault alarm, a red icon is displayed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1951"/>
        <source>Inv. voltage(AB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1952"/>
        <source>Inv. side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1956"/>
        <source>Inv. side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1960"/>
        <source>Inv. side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1963"/>
        <source>Inv. current(A)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1964"/>
        <source>Inv. side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1967"/>
        <source>Inv. current(B)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1968"/>
        <source>Inv. side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1971"/>
        <source>Inv. current(C)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1972"/>
        <source>Inv. side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1976"/>
        <location filename="../mywidget.cpp" line="2086"/>
        <source>The IGBT temperature of the converter: The IGBT temperature must not exceed 102°C. Otherwise, the converter will operate at a reduced capacity. It will resume full power operation when the temperature drops to 73°C.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1981"/>
        <source>The ambient temperature.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2062"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (&gt;30kVA power converter).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1990"/>
        <source>Display the voltage of each PV in turn.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1320"/>
        <source>Optimal model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1320"/>
        <source>Mixed mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1367"/>
        <source>USER</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1371"/>
        <source>MAINTAIN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="15823"/>
        <location filename="../mywidget.cpp" line="1389"/>
        <location filename="../mywidget.cpp" line="1504"/>
        <location filename="../mywidget.cpp" line="1510"/>
        <location filename="../mywidget.cpp" line="1536"/>
        <location filename="../mywidget.cpp" line="1544"/>
        <source>1/1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1985"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (＞30kVA power converter).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1994"/>
        <source>Total current on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1998"/>
        <source>Total power on the PV side of the converter.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2002"/>
        <source>converter battery side voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2006"/>
        <source>converter battery side current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2010"/>
        <source>converter battery side power.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2014"/>
        <source>converter bus voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2018"/>
        <source>converter bus current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2038"/>
        <source>Voltage on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2042"/>
        <source>Current on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2046"/>
        <source>Power on the high voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2050"/>
        <source>Voltage on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2054"/>
        <source>Current on the low-voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2058"/>
        <source>Power on the low voltage side of the DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2061"/>
        <source>Leakage cur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2069"/>
        <source>Bus H vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2073"/>
        <source>Bus H vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2077"/>
        <source>Bus L vol(+)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2081"/>
        <source>Bus L vol(-)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2089"/>
        <source>Positive Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2090"/>
        <source>The positive insulation impedance of the DCDC module is normal when the positive insulation impedance is greater than 33kΩ. When the positive insulation impedance is lower than 33kΩ, the insulation fault or potential security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2093"/>
        <source>Negative Inuslation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2094"/>
        <source>The negative insulation impedance of the DCDC module is normal when the negative insulation impedance is greater than 33kΩ. When the negative insulation impedance is lower than 33kΩ, the insulation fault or negative security risks exist.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2102"/>
        <source>Grid side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2106"/>
        <source>Grid side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2110"/>
        <source>Grid side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2114"/>
        <source>Grid side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2118"/>
        <source>Grid side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2122"/>
        <source>Grid side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2152"/>
        <source>Load side AB line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2156"/>
        <source>Load side BC line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2160"/>
        <source>Load side CA line voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2164"/>
        <source>Load side A phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2168"/>
        <source>Load side B phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2172"/>
        <source>Load side C phase current.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2225"/>
        <source>The output circuit breaker has two states: On, Off.The Output breaker can only be manually disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2233"/>
        <source>The power grid circuit breaker has two states: On, Off;The power grid circuit breaker can only be manually disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2241"/>
        <source>Signal to start the diesel generator, start the diesel generator when enabled, stop the diesel generator when disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1149"/>
        <location filename="../mywidget.cpp" line="2244"/>
        <source>DO2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2245"/>
        <source>Dry contact 2 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1149"/>
        <location filename="../mywidget.cpp" line="2248"/>
        <source>DO3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2249"/>
        <source>Dry contact 3 is output.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2255"/>
        <location filename="../mywidget.cpp" line="2300"/>
        <source>The converter has two states: enabled,disabled. The converter is enabled when the self-check is successful. Otherwise, the converter is disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2259"/>
        <source>There are three states for DC soft start: Not starting, Soft starting, and Complete. Soft start refers to the process in which the converter charges the busbar with the battery during startup, causing the busbar voltage to rise close to the battery voltage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2263"/>
        <source>Converter states include: OFF, AC Soft start, Grid-ON Charge, Grid-ON Discharge, Grid-OFF Discharge, Derating grid-on, Standby and Grid-OFF Charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2267"/>
        <source>There are three types of reactive power regulation: Disable,PF regulation, and  regulation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2275"/>
        <source>Input dry contact 1 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2279"/>
        <source>Input dry contact 2 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2283"/>
        <source>Input dry contact 3 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2287"/>
        <source>Input dry contact 4 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2291"/>
        <source>Input dry contact 5 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2295"/>
        <source>Input dry contact 6 status: Enabled, Disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2304"/>
        <source>DCDC module operating modes: Boost, Buck.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2307"/>
        <location filename="../mywidget.cpp" line="2311"/>
        <source>Not
starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2308"/>
        <source>High-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2312"/>
        <source>Low-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2320"/>
        <source>DC module low voltage contactor has two states: On, Off; When there is voltage on the low voltage side, close the contactor on the low voltage side; Otherwise, the low pressure contactor is disconnected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2940"/>
        <source>AC Side Power: You can control the charging and discharging power of the battery from the AC side by modifying this value. When the advanced setting for power control mode is set to Constant Power mode (CP_AC), a positive value indicates discharging, and a negative value indicates charging.
For example, setting it to -5 means that the AC side will charge the battery at a power of -5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3147"/>
        <source>DOD Protection Release SOC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3197"/>
        <source>Force Charge On</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3198"/>
        <source>Forced Charging On: When the cell voltage drops below this value, the converter switches to Battery Priority Mode, and the AC side charges the battery with a power of 10kW.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3202"/>
        <source>ForceCharge Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3203"/>
        <source>Forced Charging Off: When the cell voltage exceeds this value, the converter exits Battery Priority Mode and returns to the mode before Forced Charging was enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3206"/>
        <source>DCAC cell protect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3210"/>
        <source>DCAC cell delta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3298"/>
        <source>Working Power: Only effective in peak shaving mode. Positive values indicate discharging, while negative values indicate charging.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3302"/>
        <source>Peak price</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3303"/>
        <source>In the peak shaving and valley filling mode, select &apos;Peak price&apos; periods,&apos;Flat price&apos; periods and &apos;Valley price&apos; periods based on electricity prices.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2341"/>
        <source>This is the monitor screen version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1321"/>
        <source>DC/DC Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1321"/>
        <source>Lithium Battery Setting Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1321"/>
        <source>Lead-acid Battery Setting Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1321"/>
        <source>Time Period Setting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1321"/>
        <source>Function Sentting 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1321"/>
        <source>Function Sentting 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1322"/>
        <source>System Senttings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1322"/>
        <source>Device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1322"/>
        <source>DC/AC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1322"/>
        <source>DC/DC Debug</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1149"/>
        <location filename="../mywidget.cpp" line="2240"/>
        <source>Start generator signal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1155"/>
        <location filename="../mywidget.cpp" line="2327"/>
        <source>ModeLock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1155"/>
        <location filename="../mywidget.cpp" line="2331"/>
        <source>DCDC insulation detection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="18724"/>
        <location filename="../mywidget.cpp" line="1375"/>
        <source>Admin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1148"/>
        <location filename="../mywidget.cpp" line="2236"/>
        <source>DCAC insulation detection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2345"/>
        <source>This is the DCAC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2349"/>
        <source>This is the DCAC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2353"/>
        <source>This is the DCAC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2357"/>
        <source>This is the DCDC protocol version number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2361"/>
        <source>This is the DCDC converter software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2365"/>
        <source>This is the DCDC CPLD software version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2368"/>
        <source>SN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2369"/>
        <source>This is SN, the serial number of the product.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2377"/>
        <source>PV power generation Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2381"/>
        <source>PV power generation Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2385"/>
        <source>PV power generation Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2389"/>
        <source>PV power generation Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2411"/>
        <location filename="../mywidget.cpp" line="2428"/>
        <source>Battery Charge Day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2415"/>
        <location filename="../mywidget.cpp" line="2432"/>
        <source>Battery Discharge Month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2419"/>
        <location filename="../mywidget.cpp" line="2436"/>
        <source>Battery Discharge Year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2423"/>
        <location filename="../mywidget.cpp" line="2440"/>
        <source>Battery Discharge Total</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2446"/>
        <source>Today&apos;s electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2450"/>
        <source>Monthly electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2454"/>
        <source>Annual electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2458"/>
        <source>Total electricity buy from the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2463"/>
        <source>Today&apos;s electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2467"/>
        <source>Monthly electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2471"/>
        <source>Annual electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2475"/>
        <source>Total electricity sell to the grid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2487"/>
        <source>CAN communication failure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2488"/>
        <source>event description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2490"/>
        <source>Fire alarm (High temp. alarm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2491"/>
        <source>Power Meter Comm fualttLead-acid abnormal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2790"/>
        <source>Time when the system Settings are modified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2874"/>
        <source>Power control type：CP_P-&gt;CP_N&amp;&amp;P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2878"/>
        <source>Power control type：CP_N&amp;&amp;P-&gt;CP_P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2882"/>
        <source>Grid Fre Upper limit：0.2-&gt;3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2886"/>
        <source>Grid Fre Upper limit：3-&gt;0.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2890"/>
        <source>Voltage protection Lower limit：-10-&gt;-15</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2894"/>
        <source>Voltage protection Lower limit：-15-&gt;-10</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2898"/>
        <source>Operation mode：Manual-&gt;UPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2902"/>
        <source>Inv ON/Off-Grid：Off-&gt;automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2906"/>
        <source>Inv ON/Off-Grid：automatic-&gt;Off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3025"/>
        <source>Battery Protocol: Parse the messages sent by BMS based on the selected battery protocol.
Currently supported battery manufacturer protocols include:MEGA, LISHEN, GREATPOWER, GOLD, BMSER, LANLI, SLANPOWER, PYLON, CATL, SUOYING, XINGWANGDA, KUBO, GOLD_V2, TOGOOD, PGS, WOBOYUAN, KGOOER, LD, PYLON_L, VILION, TUOPU,JDI,BGS,HUASU,ALPHA.
Select AUTO to automatically detect the battery manufacturer protocol.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4154"/>
        <source>Rotate to display the status of each online DCDC module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2237"/>
        <location filename="../mywidget.cpp" line="2328"/>
        <location filename="../mywidget.cpp" line="2332"/>
        <location filename="../mywidget.cpp" line="3263"/>
        <source>.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1420"/>
        <location filename="../mywidget.cpp" line="4427"/>
        <source>Advanced Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4293"/>
        <source>2/2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4441"/>
        <location filename="../mywidget.cpp" line="4457"/>
        <source>MPS Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3499"/>
        <location filename="../mywidget.cpp" line="3504"/>
        <source>Follow
battery</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="339"/>
        <location filename="../mywidget.cpp" line="3510"/>
        <source>User password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="387"/>
        <location filename="../mywidget.cpp" line="3515"/>
        <source>Admin password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2986"/>
        <location filename="../mywidget.cpp" line="2990"/>
        <location filename="../mywidget.cpp" line="3440"/>
        <source>20</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3440"/>
        <source>Bms Com. Fault Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3441"/>
        <source>BMS communication fault determination time: The BMS communication fault determination time refers to the BMS communication fault when the BMS communication is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3447"/>
        <source>120</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3447"/>
        <source>EMS Com. Fault Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3448"/>
        <source>EMS communication fault determination time: The EMS communication fault determination time refers to the time when the communication between the EMS is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3649"/>
        <source>Grid restoration time: reserved function, setting invalid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3473"/>
        <source>Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3474"/>
        <source>Backup setting parameters: Backup setting parameters refers to backing up the parameters set on the current device so that the backup parameter Settings can be restored when needed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3478"/>
        <source>Restore
Backup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3478"/>
        <source>Restore Backup Set Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3479"/>
        <source>Restore backup setting parameters: Restore backup setting parameters means to restore the device to the last backup setting parameters and restart the device.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3945"/>
        <source>INV On off flag2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3980"/>
        <source>Choose the first module to view the real-time data of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3985"/>
        <source>Choose the second module to view the real-time data of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4033"/>
        <source>Export operation log. Click here to export operation log to U disk.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4050"/>
        <source>Choose the first module to view the real-time status of the first module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4055"/>
        <source>Choose the second module to view the real-time status of the second module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2315"/>
        <source>Contator Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2319"/>
        <source>Contator Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2303"/>
        <location filename="../mywidget.cpp" line="3086"/>
        <source>Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2307"/>
        <source>Soft Start Status Boost</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2311"/>
        <source>Soft Start Status Buck</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2323"/>
        <location filename="../mywidget.cpp" line="4133"/>
        <location filename="../mywidget.cpp" line="4143"/>
        <source>Turn off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1052"/>
        <location filename="../mywidget.cpp" line="2127"/>
        <source>Grid active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1052"/>
        <location filename="../mywidget.cpp" line="2131"/>
        <source>Grid reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1052"/>
        <location filename="../mywidget.cpp" line="2135"/>
        <source>Grid apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1052"/>
        <location filename="../mywidget.cpp" line="2139"/>
        <source>Grid power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1053"/>
        <location filename="../mywidget.cpp" line="2143"/>
        <source>Grid frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1097"/>
        <location filename="../mywidget.cpp" line="2176"/>
        <source>Load active power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1097"/>
        <location filename="../mywidget.cpp" line="2180"/>
        <source>Load reactive power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1097"/>
        <location filename="../mywidget.cpp" line="2184"/>
        <source>Load apparent power</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1097"/>
        <location filename="../mywidget.cpp" line="2188"/>
        <source>Load power factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1098"/>
        <location filename="../mywidget.cpp" line="2192"/>
        <source>Load frequency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3098"/>
        <source>DC CV Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3093"/>
        <source>DC CC Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1668"/>
        <source>Total voltage of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1672"/>
        <source>Total current of the battery uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1676"/>
        <source>Battery SOC uploaded by BMS refers to the current remaining battery capacity percentage.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1680"/>
        <source>Battery SOH uploaded from BMS, the percentage of available capacity after full charge compared to the rated capacity.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1684"/>
        <source>The highest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1688"/>
        <source>The lowest voltage of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1692"/>
        <source>The highest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1696"/>
        <source>The lowest temperature of single cell uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1708"/>
        <source>The allowable charging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1712"/>
        <source>The allowable discharging power uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1716"/>
        <source>The allowable charging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1720"/>
        <source>The allowable discharging capacity uploaded by BMS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1727"/>
        <source>Charging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1728"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to charge, Disable indicates the battery is not allowed to charge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1731"/>
        <source>Discharging enable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1732"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to discharge, Disable indicates the battery is not allowed to discharge.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1955"/>
        <source>Inv. voltage(BC)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1980"/>
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
    <name>SpecificationData</name>
    <message>
        <location filename="../SpecificationData/specificationdata.cpp" line="32"/>
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
