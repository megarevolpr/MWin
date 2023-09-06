<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>FaultTableInterface</name>
    <message>
        <source>MainWindow</source>
        <translation type="vanished">MainWindow</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="14"/>
        <source>Fault description</source>
        <translation>故障说明</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="31"/>
        <source>Please enter search keywords</source>
        <translation>请输入搜索关键词</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="44"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="62"/>
        <source>DCAC Fault Description</source>
        <translation>DCAC故障说明</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="76"/>
        <source>DCDC Module Fault Description</source>
        <translation>DCDC模块故障说明</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.ui" line="86"/>
        <source>Battery Protection Logic Explanation</source>
        <translation>电池保护逻辑说明</translation>
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
        <translation>电池充放电截止电压在并网及离网时的详细保护逻辑说明：
并网：
    电池放电放到放电截止电压-5V，（例如：截止电压是500V，那么495V就会截止放电）会报“放电不允许”告警，DCAC逆变输出功率降为0。
    当电池电压大于放电截止电压+放电回差电压或改为充电时，“放电不允许”告警消除。
    电池充电到充电电压上限时，会报“充电不允许”告警，DCAC若处于充电状态，充电功率降为0，DCAC若处于放电状态，则不受影响。
    当电池电压低于充电电压上限-充电回差电压或处于放电时，“充电不允许”告警消除。
离网：
    电池放电放到截止电压-5V（例如：截止电压是500V，那么495V就会截止放电）会报“放电不允许”告警，DCAC逆变停机。当电池电压大于放电截止电压+放电回差电压时，“放电不允许”告警消除，无关机命令下，恢复启动运行。
    电池充电到充电电压上限时，会报“充电不允许”告警，DCAC若处于充电状态，DCAC处于离网放电状态，则不受影响。
    当电池电压低于充电电压上限-充电回差电压，“充电不允许”告警消除。</translation>
    </message>
    <message>
        <source>Battery Cut-off Voltage Protection Logic Explanation for Grid-on and grid-off modes:

Grid-on mode:
  When the battery discharges to the cut-off voltage minus 5V (e.g., if the cut-off voltage is 500V, discharge stops at 495V), an alarm &quot;Discharge Not Allowed&quot; will be triggered, and the DCAC converter output power will drop to 0.
  The &quot;Discharge Not Allowed&quot; alarm will be cleared when the battery voltage is greater than the discharge cut-off voltage plus the discharge hysteresis voltage or when the mode is changed to charging.
  When the battery is charged to the upper limit of the charging voltage, an alarm &quot;Charging Not Allowed&quot; will be triggered. If the DCAC is in charging mode, the charging power will drop to 0. If the DCAC is in discharge mode, it will not be affected.
  The &quot;Charging Not Allowed&quot; alarm will be cleared when the battery voltage is lower than the upper limit of the charging voltage minus the charging hysteresis voltage or when it is in discharge mode.

Grid-off mode:
  When the battery discharges to the cut-off voltage minus 5V (e.g., if the cut-off voltage is 500V, discharge stops at 495V), an alarm &quot;Discharge Not Allowed&quot; will be triggered, and the DCAC converter will shut down. The &quot;Discharge Not Allowed&quot; alarm will be cleared when the battery voltage is greater than the discharge cut-off voltage plus the discharge hysteresis voltage. If there is no shutdown command, the system will resume operation.
  When the battery is charged to the upper limit of the charging voltage, an alarm &quot;Charging Not Allowed&quot; will be triggered. If the DCAC is in charging mode or in grid-off discharge mode, it will not be affected.
  The &quot;Charging Not All</source>
        <translation type="obsolete">电池充放电截止电压在并网及离网时的详细保护逻辑说明：
并网：
    电池放电放到放电截止电压-5V，（例如：截止电压是500V，那么495V就会截止放电）会报“放电不允许”告警，DCAC逆变输出功率降为0。
    当电池电压大于放电截止电压+放电回差电压或改为充电时，“放电不允许”告警消除。
    电池充电到充电电压上限时，会报“充电不允许”告警，DCAC若处于充电状态，充电功率降为0，DCAC若处于放电状态，则不受影响。
    当电池电压低于充电电压上限-充电回差电压或处于放电时，“充电不允许”告警消除。
离网：
    电池放电放到截止电压-5V（例如：截止电压是500V，那么495V就会截止放电）会报“放电不允许”告警，DCAC逆变停机。当电池电压大于放电截止电压+放电回差电压时，“放电不允许”告警消除，无关机命令下，恢复启动运行。
    电池充电到充电电压上限时，会报“充电不允许”告警，DCAC若处于充电状态，DCAC处于离网放电状态，则不受影响。
    当电池电压低于充电电压上限-充电回差电压，“充电不允许”告警消除。</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="51"/>
        <source>Alarm name</source>
        <translation>告警名称</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="51"/>
        <source>Alarm leve</source>
        <translation>告警等级</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="51"/>
        <source>Trigger condition</source>
        <translation>触发条件</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="52"/>
        <source>Response action</source>
        <translation>响应动作</translation>
    </message>
    <message>
        <location filename="../FaultTableInterface/faulttableinterface.cpp" line="52"/>
        <source>Whether to reset
automatically and reset time</source>
        <translation>是否自动复位及复位时间</translation>
    </message>
</context>
<context>
    <name>Menu</name>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="26"/>
        <source>Form</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="52"/>
        <location filename="../UI_Menu/Menu.cpp" line="52"/>
        <source>Host</source>
        <translation>主页</translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="84"/>
        <location filename="../UI_Menu/Menu.cpp" line="53"/>
        <source>Rt.Data</source>
        <translation>实时数据</translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="116"/>
        <location filename="../UI_Menu/Menu.cpp" line="54"/>
        <source>Record</source>
        <translation>记录</translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="148"/>
        <location filename="../UI_Menu/Menu.cpp" line="55"/>
        <source>System</source>
        <translation>系统</translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="185"/>
        <location filename="../UI_Menu/Menu.cpp" line="56"/>
        <source>Switch</source>
        <translation>开关</translation>
    </message>
    <message>
        <location filename="../UI_Menu/Menu.ui" line="217"/>
        <location filename="../UI_Menu/Menu.cpp" line="57"/>
        <source>Stand-by</source>
        <translation>待机</translation>
    </message>
    <message>
        <source>Rt.Date</source>
        <translation type="vanished">数据</translation>
    </message>
</context>
<context>
    <name>MyWidget</name>
    <message>
        <source>MyWidget</source>
        <translation type="vanished">MPSWin</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="149"/>
        <source>Basic settings</source>
        <translation>基础设置</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="182"/>
        <source>Function Setting</source>
        <translation>功能设置</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="265"/>
        <location filename="../mywidget.cpp" line="5067"/>
        <source>Battery type</source>
        <translation>电池类型</translation>
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
        <translation>-</translation>
    </message>
    <message>
        <source>Host Address</source>
        <translation type="vanished">主机地址</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="297"/>
        <location filename="../mywidget.cpp" line="5194"/>
        <source>ProtocolVersion</source>
        <translation>协议版本</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="313"/>
        <source>BMS Comm. type</source>
        <translation>电池通讯方式</translation>
    </message>
    <message>
        <source>serial port 1</source>
        <translation type="vanished">串口1</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="337"/>
        <location filename="../mywidget.ui" line="385"/>
        <location filename="../mywidget.ui" line="438"/>
        <location filename="../mywidget.ui" line="491"/>
        <location filename="../mywidget.ui" line="544"/>
        <source>bps</source>
        <translation>bps</translation>
    </message>
    <message>
        <source>UserPassPort</source>
        <translation type="vanished">用户密码</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="361"/>
        <location filename="../mywidget.cpp" line="5081"/>
        <source>Power control type</source>
        <translation>功率控制类型</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="329"/>
        <location filename="../mywidget.cpp" line="5147"/>
        <source>serial port 2</source>
        <translation>串口2</translation>
    </message>
    <message>
        <source>RootPassport</source>
        <translation type="vanished">超级权限</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="414"/>
        <source>EMS Comm. type</source>
        <translation>EMS通讯方式</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="377"/>
        <location filename="../mywidget.cpp" line="5154"/>
        <source>serial port 3</source>
        <translation>串口3</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="446"/>
        <location filename="../mywidget.cpp" line="5212"/>
        <source>Language</source>
        <translation>语言</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="467"/>
        <location filename="../mywidget.cpp" line="5094"/>
        <source>Output power limit</source>
        <translation>输出功率上限</translation>
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
        <translation>kW</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="430"/>
        <location filename="../mywidget.cpp" line="5160"/>
        <source>serial port 4</source>
        <translation>串口4</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="499"/>
        <source>System upgrade</source>
        <translation>系统升级</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="483"/>
        <location filename="../mywidget.cpp" line="5166"/>
        <source>serial port 5</source>
        <translation>串口5</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="552"/>
        <location filename="../mywidget.cpp" line="5222"/>
        <source>Sounds</source>
        <translation>声音</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="573"/>
        <location filename="../mywidget.cpp" line="5109"/>
        <source>Charge SOC</source>
        <translation>充电SOC</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="589"/>
        <location filename="../mywidget.cpp" line="5178"/>
        <source>Can port 1</source>
        <translation>CAN 1</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="597"/>
        <location filename="../mywidget.ui" line="650"/>
        <source>kbps</source>
        <translation>kbps</translation>
    </message>
    <message>
        <source>DryContact</source>
        <translation type="vanished">干接点</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="626"/>
        <source>Discharge SOC</source>
        <translation>放电SOC</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="642"/>
        <location filename="../mywidget.cpp" line="5184"/>
        <source>Can port 2</source>
        <translation>CAN 2</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="679"/>
        <location filename="../mywidget.cpp" line="5126"/>
        <source>DG capacity</source>
        <translation>柴发容量</translation>
    </message>
    <message>
        <source>Relese Charge mark</source>
        <translation type="vanished">释放充电标志</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1056"/>
        <location filename="../mywidget.ui" line="1109"/>
        <location filename="../mywidget.ui" line="6486"/>
        <location filename="../mywidget.ui" line="6504"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="727"/>
        <location filename="../mywidget.cpp" line="5132"/>
        <source>Energy priority</source>
        <translation>能量优先级</translation>
    </message>
    <message>
        <source>ForceCharge start</source>
        <translation type="vanished">强充开启</translation>
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
        <translation>V</translation>
    </message>
    <message>
        <source>ForceCharge top</source>
        <translation type="vanished">强充结束</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="843"/>
        <source>System parameter</source>
        <translation>系统参数</translation>
    </message>
    <message>
        <source>Change rate of power</source>
        <translation type="vanished">功率变化率</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="907"/>
        <source>kW/s</source>
        <translation>kW/s</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="915"/>
        <location filename="../mywidget.cpp" line="5344"/>
        <source>Machine type</source>
        <translation>机器型号</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="931"/>
        <location filename="../mywidget.cpp" line="5418"/>
        <source>Module Number</source>
        <translation>模块数量</translation>
    </message>
    <message>
        <source>Grid frequency upper limit</source>
        <translation type="vanished">电网频率变化范围上限</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="955"/>
        <location filename="../mywidget.ui" line="1003"/>
        <location filename="../mywidget.ui" line="1019"/>
        <source>Hz</source>
        <translation>Hz</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="963"/>
        <location filename="../mywidget.cpp" line="5350"/>
        <source>Machine capacity</source>
        <translation>机器容量</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="979"/>
        <location filename="../mywidget.cpp" line="5424"/>
        <source>Restore factory</source>
        <translation>恢复出厂</translation>
    </message>
    <message>
        <source>Grid frequency lower limit</source>
        <translation type="vanished">电网频率变化范围下限</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1011"/>
        <source>Output Fre. grade</source>
        <translation>输出频率等级</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1133"/>
        <location filename="../mywidget.cpp" line="5439"/>
        <source>Clear Data</source>
        <translation>清除数据</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1048"/>
        <location filename="../mywidget.cpp" line="5289"/>
        <source>Vol protection upper limit</source>
        <translation>电压保护范围上限</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1064"/>
        <source>Output vol. level</source>
        <translation>输出电压等级</translation>
    </message>
    <message>
        <source>Machine Type</source>
        <translation type="vanished">机架</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1101"/>
        <location filename="../mywidget.cpp" line="5295"/>
        <source>Vol protection lower limit</source>
        <translation>电压保护范围下限</translation>
    </message>
    <message>
        <source>Converter side vol. level</source>
        <translation type="vanished">逆变电压等级</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1239"/>
        <location filename="../mywidget.cpp" line="5452"/>
        <source>Module max</source>
        <translation>最大模块数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1154"/>
        <location filename="../mywidget.cpp" line="5301"/>
        <source>HVRT enable</source>
        <translation>高压穿越使能</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1170"/>
        <location filename="../mywidget.cpp" line="5374"/>
        <source>Output reactive power mode</source>
        <translation>输出无功方式</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1292"/>
        <location filename="../mywidget.cpp" line="5458"/>
        <source>Module min</source>
        <translation>最小模块数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1207"/>
        <source>LVRT enable</source>
        <translation>低压穿越使能</translation>
    </message>
    <message>
        <source>Grid recovery scheduling</source>
        <translation type="vanished">电网恢复调度开机</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1345"/>
        <location filename="../mywidget.cpp" line="5464"/>
        <source>Insulation detection enable DCDC</source>
        <translation>DCDC绝缘监测使能</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1260"/>
        <location filename="../mywidget.cpp" line="5313"/>
        <source>AFD enable</source>
        <translation>孤岛使能</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1223"/>
        <location filename="../mywidget.cpp" line="5386"/>
        <source>Grid recovery time</source>
        <translation>电网恢复并网时间</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="618"/>
        <location filename="../mywidget.ui" line="671"/>
        <location filename="../mywidget.ui" line="1231"/>
        <source>s</source>
        <translation>s</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1313"/>
        <location filename="../mywidget.cpp" line="5320"/>
        <source>Insulation detection enable</source>
        <translation>绝缘监测使能</translation>
    </message>
    <message>
        <source>Grid connected mode of Inv</source>
        <translation type="vanished">逆变器并网方式</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1361"/>
        <location filename="../mywidget.cpp" line="5326"/>
        <source>PrimaryFreq enable</source>
        <translation>一次调频使能</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1329"/>
        <source>PsheddingFreq</source>
        <translation>过频降载</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1409"/>
        <location filename="../mywidget.cpp" line="5332"/>
        <source>Inertia enable</source>
        <translation>转动惯量使能</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1377"/>
        <location filename="../mywidget.cpp" line="5406"/>
        <source>QP curve</source>
        <translation>QP曲线</translation>
    </message>
    <message>
        <source>Load priority</source>
        <translation type="vanished">负载优先</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1461"/>
        <source>External device</source>
        <translation>外设</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1479"/>
        <source>DI_1</source>
        <translation>DI_1</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1484"/>
        <source>DI_2</source>
        <translation>DI_2</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1489"/>
        <source>DI_3</source>
        <translation>DI_3</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1494"/>
        <source>DI_4</source>
        <translation>DI_4</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1499"/>
        <source>DI_5</source>
        <translation>DI_5</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1504"/>
        <source>DI_6</source>
        <translation>DI_6</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1509"/>
        <source>DO_1</source>
        <translation>DO_1</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1514"/>
        <source>DO_2</source>
        <translation>DO_2</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1519"/>
        <source>DO_3</source>
        <translation>DO_3</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1524"/>
        <source>Enable/Disable</source>
        <translation>使能/禁止</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1529"/>
        <source>NC/NO</source>
        <translation>NC/NO</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1534"/>
        <source>Action</source>
        <translation>动作</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1539"/>
        <source>Function description</source>
        <translation>功能描述</translation>
    </message>
    <message>
        <source>Shut Down NO</source>
        <translation type="vanished">NO关机</translation>
    </message>
    <message>
        <source>Shut Down NC</source>
        <translation type="vanished">NC关机</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1560"/>
        <source>Access Control</source>
        <translation>门禁</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1576"/>
        <source>Water logging</source>
        <translation>水浸</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1603"/>
        <location filename="../mywidget.ui" line="1647"/>
        <location filename="../mywidget.ui" line="1691"/>
        <source>N_O</source>
        <translation>N_O</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1625"/>
        <source>Generator</source>
        <translation>发电机</translation>
    </message>
    <message>
        <source>Reserve</source>
        <translation type="vanished">保留</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1728"/>
        <source>DCAC Debug</source>
        <translation>DCAC调试</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1784"/>
        <location filename="../mywidget.ui" line="2283"/>
        <location filename="../mywidget.cpp" line="5578"/>
        <location filename="../mywidget.cpp" line="5804"/>
        <source>Debug variable 1</source>
        <translation>调试变量1</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1792"/>
        <source>1.5V Voltage revise</source>
        <translation>1.5V电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1808"/>
        <location filename="../mywidget.ui" line="2371"/>
        <source>Inv on off flag</source>
        <translation>开关机状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1821"/>
        <location filename="../mywidget.ui" line="2307"/>
        <location filename="../mywidget.cpp" line="5584"/>
        <location filename="../mywidget.cpp" line="5810"/>
        <source>Debug variable 2</source>
        <translation>调试变量2</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1829"/>
        <source> Bus Vol. revise</source>
        <translation> 母线电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1845"/>
        <location filename="../mywidget.cpp" line="5734"/>
        <source>Logic state</source>
        <translation>逻辑状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1858"/>
        <location filename="../mywidget.ui" line="2331"/>
        <location filename="../mywidget.cpp" line="5590"/>
        <location filename="../mywidget.cpp" line="5816"/>
        <location filename="../mywidget.cpp" line="5822"/>
        <source>Debug variable 3</source>
        <translation>调试变量3</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1866"/>
        <source>Grid A/AB Vol. revise</source>
        <translation>电网A相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1882"/>
        <source>Inv flag</source>
        <translation>逆变状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1895"/>
        <location filename="../mywidget.ui" line="2291"/>
        <source>Debug variable 1 address</source>
        <translation>调试地址变量1</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1903"/>
        <source>Grid B/BC Vol. revise</source>
        <translation>电网B相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1919"/>
        <location filename="../mywidget.cpp" line="5746"/>
        <source>Grid flag</source>
        <translation>电网状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1932"/>
        <location filename="../mywidget.ui" line="2315"/>
        <source>Debug variable 2 address</source>
        <translation>调试地址变量2</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1940"/>
        <source>Grid C/CA Vol. revise</source>
        <translation>电网C相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1956"/>
        <location filename="../mywidget.cpp" line="5752"/>
        <source>Grid protect flag</source>
        <translation>电网保护状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1969"/>
        <location filename="../mywidget.ui" line="2339"/>
        <source>Debug variable 3 address</source>
        <translation>调试地址变量3</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1977"/>
        <source>Output A Cur. revise</source>
        <translation>输出A相电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1993"/>
        <location filename="../mywidget.ui" line="2411"/>
        <location filename="../mywidget.cpp" line="5758"/>
        <location filename="../mywidget.cpp" line="5840"/>
        <source>PV flag</source>
        <translation>电池电压状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2006"/>
        <location filename="../mywidget.ui" line="2299"/>
        <source>Debug memery var. 1</source>
        <translation>调试内存变量1</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2014"/>
        <source>Output B Cur. revise</source>
        <translation>输出B相电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2030"/>
        <location filename="../mywidget.ui" line="2387"/>
        <location filename="../mywidget.cpp" line="5764"/>
        <location filename="../mywidget.cpp" line="5834"/>
        <source>DC bus flag</source>
        <translation>母线状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2043"/>
        <source>Debug memery var. 2</source>
        <translation>调试内存变量2</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2051"/>
        <source>Output C Cur. revise</source>
        <translation>输出C相电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2067"/>
        <location filename="../mywidget.ui" line="2363"/>
        <location filename="../mywidget.cpp" line="5770"/>
        <location filename="../mywidget.cpp" line="5828"/>
        <source>INT main flag</source>
        <translation>中断状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2080"/>
        <location filename="../mywidget.ui" line="2323"/>
        <location filename="../mywidget.ui" line="2347"/>
        <source>Debug memery var. 3</source>
        <translation>调试内存变量3</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2088"/>
        <source>INV A Vol. revise</source>
        <translation>逆变A相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2104"/>
        <location filename="../mywidget.ui" line="2419"/>
        <source>Parallel signal</source>
        <translation>并机状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2117"/>
        <source>Input Vol. revise</source>
        <translation>输入电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2125"/>
        <source>INV B Vol. revise</source>
        <translation>逆变B相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2141"/>
        <location filename="../mywidget.cpp" line="5782"/>
        <location filename="../mywidget.cpp" line="5900"/>
        <source>Monitor Order</source>
        <translation>监控命令字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2154"/>
        <source>Input. Cur. revise</source>
        <translation>输入电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2162"/>
        <source>INV C Vol. revise</source>
        <translation>逆变C相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2178"/>
        <source>BatInfor</source>
        <translation>电池信息字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2186"/>
        <source>INV A inductance Cur. revise</source>
        <translation>逆变A相电感电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2194"/>
        <location filename="../mywidget.ui" line="2427"/>
        <source>Bat state</source>
        <translation>电池状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2202"/>
        <source>INV B inductance Cur. revise</source>
        <translation>逆变B相电感电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2210"/>
        <source>INV C inductance Cur. revise</source>
        <translation>逆变C相电感电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2222"/>
        <source>DCDC Debug</source>
        <translation>DCDC 调试</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2355"/>
        <source>Current ID</source>
        <translation>当前模块号</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2379"/>
        <source>Monitor order</source>
        <translation>监控命令字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2395"/>
        <source>DCONV logic </source>
        <translation>开关机状态字2 </translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2403"/>
        <source>Bat infor</source>
        <translation>电池信息字</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2645"/>
        <source>100kW - TS</source>
        <translation>100kW - TS</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5887"/>
        <source>Please click on &apos;Alarm Information&apos; to enter the query interface
and view the details of the alarm information you have encountered.</source>
        <translation>请点击&apos;告警信息&apos;，进入查询界面，查看您所遇到的告警信息的详情。</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5945"/>
        <source>Alarm
Information</source>
        <translation>告警信息</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8664"/>
        <source>A1: 
Generator turn on SOC(A1)
B1: 
Generator turn off SOC(B1)</source>
        <translation>A1:
发电机开启SOC（A1）
B1:
发电机关闭SOC（B1）</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8687"/>
        <source>Battery
power-on</source>
        <translation>电池上电</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8706"/>
        <source>Battery
power-off</source>
        <translation>电池下电</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8798"/>
        <source>DOD Protection Release SOC(%)</source>
        <translation>DOD保护解除SOC</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8806"/>
        <source>Cell voltage max(mV)</source>
        <translation>最高单体电压(mV)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8822"/>
        <source>Cell voltage max delta(mV)</source>
        <translation>最高单体电压回差(mV)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8838"/>
        <source>Cell voltage min(mV)</source>
        <translation>单体最低电压(mV)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8862"/>
        <source>Cell voltage min delta(mV)</source>
        <translation>最低单体电压回差(mV)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8878"/>
        <source>ForceCharge On(V)</source>
        <translation>强充开启（V）</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8894"/>
        <source>ForceCharge Off(V)</source>
        <translation>强充结束（V）</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8910"/>
        <source>DCAC cell protect(mV)</source>
        <translation>DCAC单体保护电压(mV)</translation>
    </message>
    <message>
        <source>DCAC cel delta(mV)</source>
        <translation type="vanished">DCAC单体保护电压回差(mV)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9577"/>
        <source>Hybrid Mode</source>
        <translation>混合模式</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9630"/>
        <source>Hybrid Mode Enable：</source>
        <translation>混合模式使能：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10649"/>
        <source>Converter2 Turn off</source>
        <translation>变流器2关闭</translation>
    </message>
    <message>
        <source>       Monitoring software version</source>
        <translation type="vanished">       监控版本</translation>
    </message>
    <message>
        <source>       DCAC Protocol version</source>
        <translation type="vanished">       DCAC协议版本</translation>
    </message>
    <message>
        <source>       DCAC Converter software version</source>
        <translation type="vanished">       DCAC变流器版本</translation>
    </message>
    <message>
        <source>       DCAC CPLD software version</source>
        <translation type="vanished">       DCAC CPLD软件版本</translation>
    </message>
    <message>
        <source>       DCDC Protocol version</source>
        <translation type="vanished">       DCDC 协议版本</translation>
    </message>
    <message>
        <source>       DCDC Converter software version</source>
        <translation type="vanished">       DCDC 变流器软件版本</translation>
    </message>
    <message>
        <source>       DCDC CPLD software version</source>
        <translation type="vanished">       DCDC CPLD软件版本</translation>
    </message>
    <message>
        <source>       SN:</source>
        <translation type="vanished">       SN:</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10606"/>
        <source>M_01 Converter turn off</source>
        <translation>M_01 变流器关闭</translation>
    </message>
    <message>
        <source>100kW</source>
        <translation type="vanished">100kW</translation>
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
        <translation>0V</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3149"/>
        <location filename="../mywidget.ui" line="3587"/>
        <location filename="../mywidget.ui" line="3818"/>
        <location filename="../mywidget.ui" line="3846"/>
        <location filename="../mywidget.ui" line="3930"/>
        <source>0A</source>
        <translation>0A</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3165"/>
        <location filename="../mywidget.ui" line="4006"/>
        <source>0kW</source>
        <translation>0kW</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3363"/>
        <location filename="../mywidget.ui" line="3407"/>
        <location filename="../mywidget.ui" line="3435"/>
        <source>0A </source>
        <translation>0A </translation>
    </message>
    <message>
        <source>Current mode:CP</source>
        <translation type="vanished">当前模式：CP</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2857"/>
        <source>PV:</source>
        <translation>光伏：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2930"/>
        <source>Battery charging:</source>
        <translation>电池充电量：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2943"/>
        <source>Battery discharging:</source>
        <translation>电池放电量：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="2883"/>
        <location filename="../mywidget.ui" line="2917"/>
        <location filename="../mywidget.ui" line="2956"/>
        <location filename="../mywidget.ui" line="4088"/>
        <location filename="../mywidget.ui" line="4166"/>
        <location filename="../mywidget.ui" line="4179"/>
        <source>0kWh</source>
        <translation>0kWh</translation>
    </message>
    <message>
        <source>Grid charging:</source>
        <translation type="vanished">电网充电量：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4101"/>
        <source>Load:</source>
        <translation>负载：</translation>
    </message>
    <message>
        <source>Grid discharging:</source>
        <translation type="vanished">电网放电量：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3984"/>
        <source>Power meter</source>
        <translation>电表功率</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3599"/>
        <source>SOC:</source>
        <translation>剩余电量：</translation>
    </message>
    <message>
        <source>Please enter search keywords</source>
        <translation type="vanished">请输入搜索关键词</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6671"/>
        <location filename="../mywidget.cpp" line="2360"/>
        <source>Allowable charging power</source>
        <translation>可充电功率</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6689"/>
        <location filename="../mywidget.cpp" line="2364"/>
        <source>Allowable discharging power</source>
        <translation>可放电功率</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6707"/>
        <location filename="../mywidget.cpp" line="2368"/>
        <source>Allowable charging energy</source>
        <translation>可充电量</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6725"/>
        <location filename="../mywidget.cpp" line="2372"/>
        <source>Allowable discharging energy</source>
        <translation>可放电量</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8003"/>
        <source>status:</source>
        <translation>状态：</translation>
    </message>
    <message>
        <source>A1: 
Generator turn on voltage(A1)
B1: 
Generator turn off voltage(B1)</source>
        <translation type="vanished">A1:
柴发开启电压（A1）
B1:
柴发关闭电压（B1）</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8982"/>
        <source>A1: Generator turn on voltage
B1: Generator turn off voltage
A1 Setting range: [250, 900]
B1 Setting range: [250, 900]
Set rule:B1 - A1 ≥ 10V</source>
        <translation>A1:发电机开启电压
B1:发电机关闭电压
A1 设定范围： [250,900]
B1 设定范围： [250,900]
设定规则：B1 - A1 ≥ 10V</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1425"/>
        <source>CV Parallel</source>
        <translation>恒压并机</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1148"/>
        <source>Change Language</source>
        <translation>切换语言</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="520"/>
        <source>BMS protocol</source>
        <translation>电池协议</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1186"/>
        <location filename="../mywidget.cpp" line="5445"/>
        <source>Rack</source>
        <translation>机架</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1117"/>
        <location filename="../mywidget.cpp" line="5368"/>
        <source>Transformer Turns Ratio</source>
        <translation>变压器变比</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="605"/>
        <source>BMS Com. Fault Time</source>
        <translation>BMS通信故障判定时间</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="658"/>
        <source>EMS Com. Fault Time</source>
        <translation>EMS通信故障判定时间</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1027"/>
        <source>Backup setup parameters</source>
        <translation>备份设置参数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1080"/>
        <source>Restore backup setup parameters</source>
        <translation>恢复备份设置参数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1568"/>
        <source>ATS Signal</source>
        <translation>柴发信号</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1584"/>
        <source>Fire Fighting</source>
        <translation>消防</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="120"/>
        <location filename="../mywidget.ui" line="2598"/>
        <source>Change
Language</source>
        <translation>切换语言</translation>
    </message>
    <message>
        <source>100kW-TS</source>
        <translation type="vanished">100kW-TS</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4218"/>
        <source>Grid sell:</source>
        <translation>电网卖电量：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4153"/>
        <source>Grid buy:</source>
        <translation>电网购电量：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="3609"/>
        <source>0%</source>
        <translation>0%</translation>
    </message>
    <message>
        <source>MPS Data</source>
        <translation type="vanished">MPS数据</translation>
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
        <translation>1</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4468"/>
        <location filename="../mywidget.ui" line="5550"/>
        <location filename="../mywidget.ui" line="5762"/>
        <location filename="../mywidget.ui" line="5822"/>
        <location filename="../mywidget.ui" line="9706"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4486"/>
        <location filename="../mywidget.ui" line="5568"/>
        <location filename="../mywidget.ui" line="5767"/>
        <location filename="../mywidget.ui" line="5827"/>
        <location filename="../mywidget.ui" line="9711"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4504"/>
        <location filename="../mywidget.ui" line="5586"/>
        <location filename="../mywidget.ui" line="5772"/>
        <location filename="../mywidget.ui" line="5832"/>
        <location filename="../mywidget.ui" line="9716"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4522"/>
        <location filename="../mywidget.ui" line="5604"/>
        <location filename="../mywidget.ui" line="5777"/>
        <location filename="../mywidget.ui" line="5837"/>
        <location filename="../mywidget.ui" line="9721"/>
        <source>5</source>
        <translation>5</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4540"/>
        <location filename="../mywidget.ui" line="5622"/>
        <location filename="../mywidget.ui" line="5782"/>
        <location filename="../mywidget.ui" line="5842"/>
        <location filename="../mywidget.ui" line="9726"/>
        <source>6</source>
        <translation>6</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4564"/>
        <location filename="../mywidget.ui" line="5646"/>
        <location filename="../mywidget.ui" line="5787"/>
        <location filename="../mywidget.ui" line="9731"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4582"/>
        <location filename="../mywidget.ui" line="5664"/>
        <location filename="../mywidget.ui" line="5792"/>
        <location filename="../mywidget.ui" line="9736"/>
        <source>8</source>
        <translation>8</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4600"/>
        <location filename="../mywidget.ui" line="5682"/>
        <location filename="../mywidget.ui" line="5797"/>
        <source>9</source>
        <translation>9</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4618"/>
        <location filename="../mywidget.ui" line="5700"/>
        <location filename="../mywidget.ui" line="5802"/>
        <source>10</source>
        <translation>10</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4636"/>
        <location filename="../mywidget.ui" line="5718"/>
        <location filename="../mywidget.ui" line="5807"/>
        <source>11</source>
        <translation>11</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4654"/>
        <location filename="../mywidget.ui" line="5736"/>
        <location filename="../mywidget.ui" line="5812"/>
        <source>12</source>
        <translation>12</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4769"/>
        <source>Converter</source>
        <translation>变流器</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4992"/>
        <source>PV</source>
        <translation>PV</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5215"/>
        <source>Grid</source>
        <translation>电网</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5438"/>
        <source>Load</source>
        <translation>负载</translation>
    </message>
    <message>
        <source>MPS State</source>
        <translation type="vanished">MPS 状态</translation>
    </message>
    <message>
        <source>MPS Alarm</source>
        <translation type="vanished">MPS 告警</translation>
    </message>
    <message>
        <source>Search</source>
        <translation type="vanished">搜索</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5990"/>
        <source>Battery Data</source>
        <translation>电池数据</translation>
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
        <translation>名称</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6086"/>
        <source>Bat voltage</source>
        <translation>电池电压</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6105"/>
        <location filename="../mywidget.cpp" line="2324"/>
        <source>Bat current</source>
        <translation>电池电流</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6124"/>
        <location filename="../mywidget.cpp" line="2328"/>
        <source>SOC</source>
        <translation>SOC</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6143"/>
        <location filename="../mywidget.cpp" line="2332"/>
        <source>SOH</source>
        <translation>SOH</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6162"/>
        <source>Cell voltage (max)</source>
        <translation>单体最高电压</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6181"/>
        <source>Cell voltage (min)</source>
        <translation>单体最低电压</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6200"/>
        <source>Cell temp. (max)</source>
        <translation>单体最高温度</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6219"/>
        <source>Cell temp. (min)</source>
        <translation>单体最低温度</translation>
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
        <translation>值</translation>
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
        <translation>0</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6432"/>
        <location filename="../mywidget.ui" line="6960"/>
        <location filename="../mywidget.ui" line="9063"/>
        <location filename="../mywidget.ui" line="9078"/>
        <location filename="../mywidget.cpp" line="1548"/>
        <location filename="../mywidget.cpp" line="1854"/>
        <source>Unit</source>
        <translation>单位</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6468"/>
        <location filename="../mywidget.ui" line="6978"/>
        <location filename="../mywidget.ui" line="6996"/>
        <location filename="../mywidget.ui" line="8530"/>
        <location filename="../mywidget.cpp" line="1567"/>
        <source>A</source>
        <translation>A</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6522"/>
        <location filename="../mywidget.ui" line="6540"/>
        <source>mV</source>
        <translation>mV</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6558"/>
        <location filename="../mywidget.ui" line="6576"/>
        <source>℃</source>
        <translation>℃</translation>
    </message>
    <message>
        <source>Charging current limite</source>
        <translation type="vanished">充电电流上限</translation>
    </message>
    <message>
        <source>Discharging current limite</source>
        <translation type="vanished">放电电流上限</translation>
    </message>
    <message>
        <source>Charge power</source>
        <translation type="vanished">充电功率</translation>
    </message>
    <message>
        <source>Discharge power</source>
        <translation type="vanished">放电功率</translation>
    </message>
    <message>
        <source>Charge energy</source>
        <translation type="vanished">可充电电量</translation>
    </message>
    <message>
        <source>Discharge energy</source>
        <translation type="vanished">可放电电量</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7128"/>
        <source>prompt:</source>
        <translation>提示：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7169"/>
        <source>Normal</source>
        <translation>正常</translation>
    </message>
    <message>
        <source>Warnning1</source>
        <translation type="vanished">告警1</translation>
    </message>
    <message>
        <source>Warnning2</source>
        <translation type="vanished">告警2</translation>
    </message>
    <message>
        <source>Warnning3</source>
        <translation type="vanished">告警3</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7325"/>
        <source>Alarm level:</source>
        <translation>告警等级：</translation>
    </message>
    <message>
        <source>Charge 
enable</source>
        <translation type="vanished">充电使能</translation>
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
        <translation>使能</translation>
    </message>
    <message>
        <source>Discharge 
enable</source>
        <translation type="vanished">放电使能</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7519"/>
        <source>Data report</source>
        <translation>数据报表</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7632"/>
        <source>yyyy-MM-dd</source>
        <translation>yyyy-MM-dd</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7664"/>
        <location filename="../mywidget.cpp" line="5929"/>
        <source>Y  -</source>
        <translation>年 -</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7683"/>
        <location filename="../mywidget.cpp" line="5941"/>
        <source>M  -</source>
        <translation>月 -</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7702"/>
        <location filename="../mywidget.cpp" line="5953"/>
        <source>D  -</source>
        <translation>日  -</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7728"/>
        <location filename="../mywidget.cpp" line="5935"/>
        <source>Y  +</source>
        <translation>年 +</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7747"/>
        <location filename="../mywidget.cpp" line="5947"/>
        <source>M  +</source>
        <translation>月 +</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7766"/>
        <location filename="../mywidget.cpp" line="5959"/>
        <source>D  +</source>
        <translation>日  +</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7782"/>
        <source>Export Data</source>
        <translation>导出数据</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7831"/>
        <source>Note:</source>
        <translation>提示：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7851"/>
        <source>Log.csv</source>
        <translation>Log.csv</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7872"/>
        <source>Out put file:</source>
        <translation>输出文件：</translation>
    </message>
    <message>
        <source>HistoryRecord.csv</source>
        <translation type="vanished">HistoryRecord.csv</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7914"/>
        <source>Report.csv</source>
        <translation>Report.csv</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7955"/>
        <source>Data To Export</source>
        <translation>导出数据</translation>
    </message>
    <message>
        <source>static:</source>
        <translation type="vanished">状态：</translation>
    </message>
    <message>
        <source>udisk disconnect!</source>
        <translation type="vanished">U盘未插入！</translation>
    </message>
    <message>
        <source>HistoricalFailure</source>
        <translation type="vanished">历史记录</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5971"/>
        <source>OperationLog</source>
        <translation>操作日志</translation>
    </message>
    <message>
        <source>Coulombmeter report</source>
        <translation type="vanished">电量统计表</translation>
    </message>
    <message>
        <source>Eject Udisk</source>
        <translation type="vanished">退出U盘</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8217"/>
        <source>History Record</source>
        <translation>历史记录</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8107"/>
        <location filename="../mywidget.ui" line="8254"/>
        <source>Operation Log</source>
        <translation>操作日志</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8319"/>
        <source>DC/AC Parameter</source>
        <translation>DC/AC参数</translation>
    </message>
    <message>
        <source>Grid connected mode of PCS</source>
        <translation type="vanished">PCS并网方式</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8394"/>
        <location filename="../mywidget.cpp" line="3296"/>
        <source>Control mode</source>
        <translation>控制模式</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8410"/>
        <source>Constant power (AC)</source>
        <translation>恒功率(AC)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8426"/>
        <location filename="../mywidget.cpp" line="3301"/>
        <source>Machine number</source>
        <translation>设备号</translation>
    </message>
    <message>
        <source>Charging and discharging</source>
        <translation type="vanished">充放电</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8458"/>
        <source>Parallel </source>
        <translation>并机 </translation>
    </message>
    <message>
        <source>Operational mode</source>
        <translation type="vanished">操作模式</translation>
    </message>
    <message>
        <source>Run time enable</source>
        <translation type="vanished">运行时段使能</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8474"/>
        <location filename="../mywidget.cpp" line="3274"/>
        <source>Output power factor</source>
        <translation>输出功率因素</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="4316"/>
        <source>Converter Data</source>
        <translation>变流器数据</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5461"/>
        <location filename="../mywidget.cpp" line="6097"/>
        <source>Converter State</source>
        <translation>变流器状态</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="5855"/>
        <source>Converter Alarm</source>
        <translation>变流器告警</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6635"/>
        <location filename="../mywidget.cpp" line="2352"/>
        <source>Charging current limit</source>
        <translation>充电电流限制</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="6653"/>
        <location filename="../mywidget.cpp" line="2356"/>
        <source>Discharging current limit</source>
        <translation>放电电流限制</translation>
    </message>
    <message>
        <source>Allow charging power</source>
        <translation type="vanished">可充电功率</translation>
    </message>
    <message>
        <source>Allow discharging power</source>
        <translation type="vanished">可放电功率</translation>
    </message>
    <message>
        <source>Allow charging energy</source>
        <translation type="vanished">可充电量</translation>
    </message>
    <message>
        <source>Allow discharging energy</source>
        <translation type="vanished">可放电量</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7204"/>
        <source>Level1</source>
        <translation>一级告警</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7246"/>
        <source>Level2</source>
        <translation>二级告警</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7281"/>
        <source>Level3</source>
        <translation>三级告警</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7366"/>
        <source>Charging 
enable</source>
        <translation>充电使能</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7410"/>
        <source>Discharging 
enable</source>
        <translation>放电使能</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="7893"/>
        <source>Record.csv</source>
        <translation>Record.csv</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8044"/>
        <source>u disk disconnect!</source>
        <translation>U盘未插入！</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8078"/>
        <location filename="../mywidget.cpp" line="5965"/>
        <source>History Records</source>
        <translation>导出历史记录</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8142"/>
        <location filename="../mywidget.cpp" line="5977"/>
        <source>Electricity Statistical Table</source>
        <translation>电量统计表</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8442"/>
        <source>Working mode</source>
        <translation>工作模式</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8506"/>
        <location filename="../mywidget.cpp" line="3279"/>
        <source>Output reactive power</source>
        <translation>输出无功功率</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8522"/>
        <location filename="../mywidget.cpp" line="3284"/>
        <source>Constant current</source>
        <translation>恒流</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8538"/>
        <location filename="../mywidget.cpp" line="3289"/>
        <source>Constant voltage</source>
        <translation>恒压</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8574"/>
        <source>DC/DC Parameter</source>
        <translation>DC/DC参数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8593"/>
        <source>Battery setup</source>
        <translation>电池设置</translation>
    </message>
    <message>
        <source>A1: 
Discharge Volt. Limit(EOD)
B1: 
Floating charge</source>
        <translation type="vanished">A1:
放电电压限制 (EOD)
B1:
浮充电压</translation>
    </message>
    <message>
        <source>Power on</source>
        <translation type="vanished">上电</translation>
    </message>
    <message>
        <source>Power off</source>
        <translation type="vanished">下电</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8766"/>
        <source>DOD_OnGrid(%):</source>
        <translation>并网DOD(%)：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8782"/>
        <source>DOD_OffGrid(%):</source>
        <translation>离网DOD(%)：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8814"/>
        <source>Charge Volt. upper Limit(V)</source>
        <translation>充电电压上限(V)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8830"/>
        <source>Charge Volt. upper Limit delta(V)</source>
        <translation>充电电压上限回差(V)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8846"/>
        <source>Discharge Volt. lower Limit(V)</source>
        <translation>放电电压下限(V)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8870"/>
        <source>Discharge Volt. lower Limit delta(V)</source>
        <translation>放电电压下限回差(V)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8886"/>
        <source>Charge Current Limit(A)</source>
        <translation>充电电流限制(A)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8902"/>
        <source>Discharge Current Limit(A)</source>
        <translation>放电电流限制(A)</translation>
    </message>
    <message>
        <source>Floating charge(V)</source>
        <translation type="vanished">浮充电压(V)</translation>
    </message>
    <message>
        <source>Equalized charge(V)</source>
        <translation type="vanished">均充电压(V)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8774"/>
        <source>Generator turn off SOC(B1)</source>
        <translation>发电机关闭SOC(B1)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8790"/>
        <source>Generator turn on SOC(A1)</source>
        <translation>发电机开启SOC(A1)</translation>
    </message>
    <message>
        <source>SwitchingBatteryTypes</source>
        <translation type="vanished">切换电池类型</translation>
    </message>
    <message>
        <source>A1: 
Generator turn on SOC
B1: 
Generator turn off SOC
A1 Setting range: [10%, 50%]
B1 Setting range: [50%, 100%]
Set rule:
B1 - A1 ≥ 30 %
</source>
        <translation type="vanished">A1: 
发电机关闭 SOC值
B1: 
柴发关闭 SOC
A1 设定范围: [10%, 50%]
B1 设定范围: [50%, 100%]
设置规则:
B1 - A1 ≥ 30 %
</translation>
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
        <translation></translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9083"/>
        <location filename="../mywidget.cpp" line="3495"/>
        <source>Capacity</source>
        <translation>容量</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9091"/>
        <source>Ah</source>
        <translation>Ah</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9099"/>
        <source>Grid off EOD</source>
        <translation>离网EOD</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9115"/>
        <source>Cell number(2V)</source>
        <translation>电池节数(2V)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9131"/>
        <source>Grid on EOD</source>
        <translation>并网EOD</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9147"/>
        <location filename="../mywidget.cpp" line="3505"/>
        <source>Battery float voltage</source>
        <translation>电池浮充电压</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9163"/>
        <source>Shutdown voltage point</source>
        <translation>关机电压点</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9229"/>
        <location filename="../mywidget.cpp" line="3510"/>
        <source>Battery filling voltage</source>
        <translation>电池均充电压</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9245"/>
        <source>Mending center point</source>
        <translation>温补中心点</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9311"/>
        <location filename="../mywidget.cpp" line="3515"/>
        <source>Charge limiting value</source>
        <translation>充电限流值</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9319"/>
        <location filename="../mywidget.ui" line="9383"/>
        <location filename="../mywidget.ui" line="9527"/>
        <location filename="../mywidget.ui" line="9559"/>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9327"/>
        <source>Temperature filling coefficient</source>
        <translation>温补系数</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9375"/>
        <location filename="../mywidget.cpp" line="3520"/>
        <source>Discharge limiting value</source>
        <translation>放电限流值</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9391"/>
        <source>Mending allowable setting</source>
        <translation>温补允许设置</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9439"/>
        <location filename="../mywidget.cpp" line="3525"/>
        <source>Generator turn off voltage</source>
        <translation>发电机关闭电压</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9455"/>
        <source>Temperature alarm upper limit</source>
        <translation>温度告警上限</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9503"/>
        <location filename="../mywidget.cpp" line="3530"/>
        <source>Generator turn on voltage</source>
        <translation>发电机开启电压</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9519"/>
        <location filename="../mywidget.cpp" line="3570"/>
        <source>Uniform charging and flushing current</source>
        <translation>均充转浮充电流</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9551"/>
        <location filename="../mywidget.cpp" line="3575"/>
        <source>Float turn uniform charging current</source>
        <translation>浮充转均充电流</translation>
    </message>
    <message>
        <source>Automatic operation</source>
        <translation type="vanished">自动运行</translation>
    </message>
    <message>
        <source>Monthly battery deep discharge date:</source>
        <translation type="vanished">每月深度放电日期：</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5227"/>
        <source>20</source>
        <translation>20</translation>
    </message>
    <message>
        <source>+</source>
        <translation type="vanished">+</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9661"/>
        <source>SystemInformation</source>
        <translation>系统信息</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9674"/>
        <source>Version:</source>
        <translation>版本号：</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="vanished">系统信息</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4468"/>
        <source>Monitoring software version</source>
        <translation>监控版本</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4472"/>
        <source>DCAC Protocol version</source>
        <translation>DCAC协议版本</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4476"/>
        <source>DCAC Converter software version</source>
        <translation>DCAC变流器版本</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4480"/>
        <source>DCAC CPLD software version</source>
        <translation>DCAC CPLD软件版本</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4484"/>
        <source>DCDC Protocol version</source>
        <translation>DCDC 协议版本</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4488"/>
        <source>DCDC Converter software version</source>
        <translation>DCDC 变流器软件版本</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4492"/>
        <source>DCDC CPLD software version</source>
        <translation>DCDC CPLD软件版本</translation>
    </message>
    <message>
        <source>SN:</source>
        <translation type="vanished">SN：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9836"/>
        <source>Network:</source>
        <translation>网络：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9895"/>
        <source>interface:</source>
        <translation>接口号：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9936"/>
        <source>Port:</source>
        <translation>端口：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9917"/>
        <source>eth0</source>
        <translation>eth0</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8931"/>
        <source>DCAC cell delta(mV)</source>
        <translation>DCAC单体保护电压回差(mV)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9751"/>
        <source>   Monitoring software version</source>
        <translation>      监控版本</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9764"/>
        <source>   DCAC Protocol version</source>
        <translation>      DCAC协议版本</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9772"/>
        <source>   DCAC Converter software version</source>
        <translation>      DCAC变流器版本</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9780"/>
        <source>   DCAC CPLD software version</source>
        <translation>      DCAC CPLD软件版本</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9793"/>
        <source>   DCDC Protocol version</source>
        <translation>      DCDC 协议版本</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9801"/>
        <source>   DCDC Converter software version</source>
        <translation>      DCDC 变流器软件版本</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9809"/>
        <source>   DCDC CPLD software version</source>
        <translation>      DCDC CPLD软件版本</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9817"/>
        <source>   SN:</source>
        <translation>      SN:</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9958"/>
        <source>502</source>
        <translation>502</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10151"/>
        <source>Apply and Reatart system</source>
        <translation>应用并重启系统</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9992"/>
        <location filename="../mywidget.cpp" line="6059"/>
        <source>DHCP</source>
        <translation>自动获取</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="41"/>
        <source>MPS</source>
        <translation>MPS</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="281"/>
        <location filename="../mywidget.cpp" line="5141"/>
        <source>Serial Communication Address</source>
        <translation>串口通信地址</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="536"/>
        <location filename="../mywidget.cpp" line="5172"/>
        <source>serial port 6</source>
        <translation>串口6</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8918"/>
        <location filename="../mywidget.cpp" line="3428"/>
        <source>Release Prohibited Charging Flag</source>
        <translation>释放禁充标志</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="711"/>
        <location filename="../mywidget.cpp" line="5237"/>
        <source>DG ECP</source>
        <translation>DG ECP</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="759"/>
        <location filename="../mywidget.cpp" line="5242"/>
        <source>DG FCP</source>
        <translation>DG FCP</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="775"/>
        <location filename="../mywidget.cpp" line="5247"/>
        <source>Grid ECP</source>
        <translation>Grid ECP</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="791"/>
        <location filename="../mywidget.cpp" line="5252"/>
        <source>Grid FCP</source>
        <translation>Grid FCP</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="807"/>
        <location filename="../mywidget.cpp" line="5257"/>
        <source>Grid EDP</source>
        <translation>Grid EDP</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="823"/>
        <location filename="../mywidget.cpp" line="5262"/>
        <source>Grid FDP</source>
        <translation>Grid FDP</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="899"/>
        <location filename="../mywidget.cpp" line="5271"/>
        <source>Power change rate</source>
        <translation>功率变化率</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="947"/>
        <source>ULFV</source>
        <translation>电网频率变化范围上限</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="995"/>
        <source>LLFV</source>
        <translation>电网频率变化范围下限</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1276"/>
        <location filename="../mywidget.cpp" line="5392"/>
        <source>Converter Anti-Reverse Flow</source>
        <translation>变流器防逆流</translation>
    </message>
    <message>
        <source>System Anti-Reverse Flow</source>
        <translation type="vanished">系统防逆流</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1544"/>
        <source>Dry Contact EPO</source>
        <translation>干接点EPO</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1552"/>
        <source>Dry Contact Shutdown</source>
        <translation>干接点关机</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="9746"/>
        <location filename="../mywidget.cpp" line="1700"/>
        <source>System Information</source>
        <translation>系统信息</translation>
    </message>
    <message>
        <source>    Monitoring software version</source>
        <translation type="obsolete">      监控版本</translation>
    </message>
    <message>
        <source>    DCAC Protocol version</source>
        <translation type="obsolete">      DCAC协议版本</translation>
    </message>
    <message>
        <source>    DCAC Converter software version</source>
        <translation type="obsolete">      DCAC变流器版本</translation>
    </message>
    <message>
        <source>    DCAC CPLD software version</source>
        <translation type="obsolete">      DCAC CPLD软件版本</translation>
    </message>
    <message>
        <source>    DCDC Protocol version</source>
        <translation type="obsolete">      DCDC 协议版本</translation>
    </message>
    <message>
        <source>    DCDC Converter software version</source>
        <translation type="obsolete">      DCDC 变流器软件版本</translation>
    </message>
    <message>
        <source>    DCDC CPLD software version</source>
        <translation type="obsolete">      DCDC CPLD软件版本</translation>
    </message>
    <message>
        <source>    SN:</source>
        <translation type="obsolete">      SN:</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10008"/>
        <location filename="../mywidget.cpp" line="6037"/>
        <source>STATIC</source>
        <translation>静态</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10028"/>
        <source>ip:</source>
        <translation>地址：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10058"/>
        <source>netmask:</source>
        <translation>子网掩码：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10088"/>
        <source>gateway:</source>
        <translation>网关：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10118"/>
        <source>Server ip:</source>
        <translation>服务器IP：</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10041"/>
        <source>192 . 168 . 1 . 100</source>
        <translation>192 . 168 . 1 . 100</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10071"/>
        <source>255 . 255 . 255 . 0</source>
        <translation>255 . 255 . 255 . 0</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10101"/>
        <source>192 . 168 .  1  . 1</source>
        <translation>192 . 168 .  1  . 1</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10131"/>
        <source> 192 . 168 . 1  . 200</source>
        <translation> 192 . 168 . 1  . 200</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10433"/>
        <source>DCAC converter 
 OFF</source>
        <translation>DCAC 变换器 关闭</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10376"/>
        <source>DCAC converter
 ON</source>
        <translation>DCAC 变换器 开启</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10292"/>
        <source>DCDC converter
 OFF</source>
        <translation>DCDC 变换器 关闭</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10235"/>
        <source>DCDC converter
 ON</source>
        <translation>DCDC 变换器 开启</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10563"/>
        <source>Menu</source>
        <translation>菜单</translation>
    </message>
    <message>
        <source>Master_00 Converter turn off</source>
        <translation type="vanished">主机_00 变流器关闭</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10719"/>
        <source>640V</source>
        <translation>640V</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10776"/>
        <source>780V</source>
        <translation>780V</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10815"/>
        <source>639V</source>
        <translation>639V</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10825"/>
        <source>150A</source>
        <translation>150A</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10885"/>
        <source>246A</source>
        <translation>246A</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="10924"/>
        <source>202A</source>
        <translation>202A</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1157"/>
        <source>切换语言</source>
        <translation>Change Language</translation>
    </message>
    <message>
        <source>Voltage(AB)</source>
        <translation type="vanished">电压 (AB)</translation>
    </message>
    <message>
        <source>Voltage(BC)</source>
        <translation type="vanished">电压 (BC)</translation>
    </message>
    <message>
        <source>Voltage(CA)</source>
        <translation type="vanished">电压 (CA)</translation>
    </message>
    <message>
        <source>Current(A)</source>
        <translation type="vanished">电流 (A)</translation>
    </message>
    <message>
        <source>Current(B)</source>
        <translation type="vanished">电流 (B)</translation>
    </message>
    <message>
        <source>Current(C)</source>
        <translation type="vanished">电流 (C)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1287"/>
        <location filename="../mywidget.cpp" line="1335"/>
        <location filename="../mywidget.cpp" line="2682"/>
        <source>Leakage current</source>
        <translation>漏电流</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1287"/>
        <location filename="../mywidget.cpp" line="2664"/>
        <source>IGBT temperature</source>
        <translation>IGBT温度</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1287"/>
        <source>Env. temperature</source>
        <translation>环境温度</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1289"/>
        <location filename="../mywidget.cpp" line="2693"/>
        <source>PV voltage</source>
        <translation>PV电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1289"/>
        <location filename="../mywidget.cpp" line="2702"/>
        <source>PV current</source>
        <translation>PV电流</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1289"/>
        <location filename="../mywidget.cpp" line="2711"/>
        <source>PV power</source>
        <translation>PV功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1290"/>
        <location filename="../mywidget.cpp" line="2720"/>
        <source>Battery voltage</source>
        <translation>电池电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1290"/>
        <location filename="../mywidget.cpp" line="2729"/>
        <source>Battery current</source>
        <translation>电池电流</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1290"/>
        <location filename="../mywidget.cpp" line="2738"/>
        <source>Battery power</source>
        <translation>电池功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1291"/>
        <location filename="../mywidget.cpp" line="2747"/>
        <source>Bus voltage</source>
        <translation>母线电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1291"/>
        <location filename="../mywidget.cpp" line="2756"/>
        <source>Bus current</source>
        <translation>母线电流</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1304"/>
        <source>Inverter</source>
        <translation>逆变</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1304"/>
        <source>DC</source>
        <translation>直流</translation>
    </message>
    <message>
        <source>Voltage_H</source>
        <translation type="vanished">高压侧电压</translation>
    </message>
    <message>
        <source>Current_H</source>
        <translation type="vanished">高压侧电流</translation>
    </message>
    <message>
        <source>Power_H</source>
        <translation type="vanished">高压侧功率</translation>
    </message>
    <message>
        <source>Current_L</source>
        <translation type="vanished">低压侧电流</translation>
    </message>
    <message>
        <source>Power_L</source>
        <translation type="vanished">低压侧功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1338"/>
        <source>PositiveInuslation</source>
        <translation>正绝缘阻抗</translation>
    </message>
    <message>
        <source>Voltage_L</source>
        <translation type="vanished">低压侧电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <source>Bus_H_Vol(+)</source>
        <translation>高压侧正母线电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <source>Bus_H_Vol(-)</source>
        <translation>高压侧负母线电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <source>Bus_L_Vol(+)</source>
        <translation>低压侧正母线电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1337"/>
        <source>Bus_L_Vol(-)</source>
        <translation>低压侧负母线电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1338"/>
        <source>NegativeInuslation</source>
        <translation>负绝缘阻抗</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1338"/>
        <location filename="../mywidget.cpp" line="2886"/>
        <source>IGBT Temperature</source>
        <translation>IGBT温度</translation>
    </message>
    <message>
        <source>Active power</source>
        <translation type="vanished">有功功率</translation>
    </message>
    <message>
        <source>Reactive power</source>
        <translation type="vanished">无功功率</translation>
    </message>
    <message>
        <source>Apparent power</source>
        <translation type="vanished">视在功率</translation>
    </message>
    <message>
        <source>Power factor</source>
        <translation type="vanished">功率因素</translation>
    </message>
    <message>
        <source>Frequency</source>
        <translation type="vanished">频率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1476"/>
        <location filename="../mywidget.cpp" line="3138"/>
        <source>DC input breaker</source>
        <translation>直流输入断路器</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1476"/>
        <location filename="../mywidget.cpp" line="3142"/>
        <source>DC contactor</source>
        <translation>直流接触器</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1476"/>
        <source>Maintenance Bypass breaker</source>
        <translation>维修旁路断路器</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1477"/>
        <location filename="../mywidget.cpp" line="3156"/>
        <source>Output contactor</source>
        <translation>输出接触器</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1477"/>
        <location filename="../mywidget.cpp" line="3160"/>
        <source>Grid breaker</source>
        <translation>电网断路器</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1477"/>
        <location filename="../mywidget.cpp" line="3152"/>
        <source>Output breaker</source>
        <translation>输出断路器</translation>
    </message>
    <message>
        <source>DO1</source>
        <translation type="vanished">DO1</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3168"/>
        <source>DO2</source>
        <translation>DO2</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3172"/>
        <source>DO3</source>
        <translation>DO3</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1480"/>
        <location filename="../mywidget.cpp" line="3179"/>
        <source>DCAC Converter available</source>
        <translation>DCAC变流器使能</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1186"/>
        <source>Upgrade prompt</source>
        <translation>升级提示</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1187"/>
        <source>1. Make sure to press the EPO button before upgrading.                              
2. Before upgrading the DCDC, switch off the ship-type switch of the DCDC module.</source>
        <translation>1.升级前确保已按下EPO
2.升级DCDC前先把DCDC模块的船型开关拨到OFF位置。</translation>
    </message>
    <message>
        <source>Return</source>
        <translation type="vanished">返回</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1478"/>
        <source>D02</source>
        <translation>DO2</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1478"/>
        <source>D03</source>
        <translation>DO3</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1480"/>
        <location filename="../mywidget.cpp" line="3183"/>
        <source>DC Soft start</source>
        <translation>直流软启动</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1480"/>
        <location filename="../mywidget.cpp" line="1484"/>
        <source>Converter status</source>
        <translation>变流器状态</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1480"/>
        <location filename="../mywidget.cpp" line="3191"/>
        <source>Reactive power Regulation</source>
        <translation>无功调节方式</translation>
    </message>
    <message>
        <source>Sleep mode</source>
        <translation type="vanished">休眠模式</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3195"/>
        <source>LVRT</source>
        <translation>LVRT</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3199"/>
        <source>DI1</source>
        <translation>DI1</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3203"/>
        <source>DI2</source>
        <translation>DI2</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3207"/>
        <source>DI3</source>
        <translation>DI3</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3211"/>
        <source>DI4</source>
        <translation>DI4</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3215"/>
        <source>DI5</source>
        <translation>DI5</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1481"/>
        <location filename="../mywidget.cpp" line="3219"/>
        <source>DI6</source>
        <translation>DI6</translation>
    </message>
    <message>
        <source>Breaker1 status boost</source>
        <translation type="vanished">高压侧断路器1</translation>
    </message>
    <message>
        <source>Breaker2 status boost</source>
        <translation type="vanished">高压侧断路器2</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1484"/>
        <source>Contactor status boost</source>
        <translation>高压侧接触器</translation>
    </message>
    <message>
        <source>Breaker1 status buck</source>
        <translation type="vanished">低压侧断路器1</translation>
    </message>
    <message>
        <source>Breaker2 status buck</source>
        <translation type="vanished">低压侧断路器2</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1484"/>
        <source>Contactor status buck</source>
        <translation>低压侧接触器</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1483"/>
        <location filename="../mywidget.cpp" line="3229"/>
        <source>Run mode</source>
        <translation>运行模式</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1483"/>
        <location filename="../mywidget.cpp" line="3225"/>
        <source>DCDC Converter available</source>
        <translation>DCDC变流器使能</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1483"/>
        <source>Soft start status boost</source>
        <translation>高压侧软启动</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1483"/>
        <source>Soft start status buck</source>
        <translation>低压侧软启动</translation>
    </message>
    <message>
        <source>ModeLock</source>
        <translation type="vanished">模块锁</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1561"/>
        <location filename="../mywidget.cpp" line="3322"/>
        <source>Work parttern</source>
        <translation>工作模式</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1561"/>
        <location filename="../mywidget.cpp" line="3327"/>
        <source>Boost or Buck</source>
        <translation>升/降压</translation>
    </message>
    <message>
        <source>Bat Charging or discharging Model</source>
        <translation type="vanished">电池充放电模式</translation>
    </message>
    <message>
        <source>DCDC Capacity</source>
        <translation type="vanished">DCDC容量</translation>
    </message>
    <message>
        <source>Battery position</source>
        <translation type="vanished">电池位置</translation>
    </message>
    <message>
        <source>Voltage level</source>
        <translation type="vanished">电压等级</translation>
    </message>
    <message>
        <source>Current value</source>
        <translation type="vanished">电流值</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <location filename="../mywidget.cpp" line="3584"/>
        <source>Check</source>
        <translation>选择</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <source>StartTime</source>
        <translation>开始时间</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <source>EndTime</source>
        <translation>结束时间</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <location filename="../mywidget.cpp" line="3587"/>
        <source>Features</source>
        <translation>功能</translation>
    </message>
    <message>
        <source>Power(kw)</source>
        <translation type="vanished">功率(kw)</translation>
    </message>
    <message>
        <source>Peak-Valley</source>
        <translation type="vanished">峰-谷</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2299"/>
        <source>The converter standby switch. Click the converter to enter the standby state</source>
        <translation>变流器待机开关，点击后变流器进入待机状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3588"/>
        <source>Power</source>
        <translation>功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1710"/>
        <source>PV power generation</source>
        <translation>PV发电量</translation>
    </message>
    <message>
        <source>Load discharge</source>
        <translation type="vanished">负载用电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1710"/>
        <source>Battery charge</source>
        <translation>电池充电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1710"/>
        <source>Load electricity consumption</source>
        <translation>负载用电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1711"/>
        <source>Battery discharge</source>
        <translation>电池放电量</translation>
    </message>
    <message>
        <source>Grid charge</source>
        <translation type="vanished">电网充电量</translation>
    </message>
    <message>
        <source>Grid discharge</source>
        <translation type="vanished">电网放电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1711"/>
        <source>Grid buy</source>
        <translation>电网购电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1711"/>
        <source>Grid sell</source>
        <translation>电网卖电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source> </source>
        <translation> </translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source>Day(kWh)</source>
        <translation>日电量(kWh)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source>Month(kWh)</source>
        <translation>月电量(kWh)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source>Year(kWh)</source>
        <translation>年电量(kWh)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1713"/>
        <source>Total(kWh)</source>
        <translation>总电量(kWh)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1745"/>
        <location filename="../mywidget.cpp" line="4622"/>
        <source>Level</source>
        <translation>等级</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1745"/>
        <location filename="../mywidget.cpp" line="4624"/>
        <source>Start Time</source>
        <translation>开始时间</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1745"/>
        <location filename="../mywidget.cpp" line="4626"/>
        <source>End Time</source>
        <translation>结束时间</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1745"/>
        <source>Description</source>
        <translation>描述</translation>
    </message>
    <message>
        <source>ModificationTime</source>
        <translation type="vanished">修改时间</translation>
    </message>
    <message>
        <source>RecordEvent</source>
        <translation type="vanished">事件记录</translation>
    </message>
    <message>
        <source>Alarm name</source>
        <translation type="vanished">告警名称</translation>
    </message>
    <message>
        <source>Alarm leve</source>
        <translation type="vanished">告警等级</translation>
    </message>
    <message>
        <source>Trigger condition</source>
        <translation type="vanished">触发条件</translation>
    </message>
    <message>
        <source>Response action</source>
        <translation type="vanished">响应动作</translation>
    </message>
    <message>
        <source>Whether to reset
automatically and reset time</source>
        <translation type="vanished">是否自动复位及复位时间</translation>
    </message>
    <message>
        <source>Inverter overcurrent</source>
        <translation type="vanished">逆变器过流</translation>
    </message>
    <message>
        <source>General failure</source>
        <translation type="vanished">一般故障</translation>
    </message>
    <message>
        <source>Inductive current instantaneous value &gt;3lp or inductive current RMS value &gt;1.36ln</source>
        <translation type="vanished">电感电流瞬时值&gt;3Ip 或电感电流有效值&gt;1.36In</translation>
    </message>
    <message>
        <source>PCS shut down and disconnect the output contactor</source>
        <translation type="vanished">PCS 停机，输出接触器断开</translation>
    </message>
    <message>
        <source>Recoverable, automatic recovery 5 minutes after the fault is eliminated</source>
        <translation type="vanished">可恢复，故障消除5min后自动恢复</translation>
    </message>
    <message>
        <source>Converter fault</source>
        <translation type="vanished">变流器故障</translation>
    </message>
    <message>
        <source>During soft startup of converter, inverter voltage RMS more then 1.2Vgrid or inverter voltage RMS less than 0.3Vgrid after 30s</source>
        <translation type="vanished">变流器开机软启过程中，30s后逆变电压有效值&gt;1.2Vgrid或逆变电压有效值&lt;0.3Vgrid</translation>
    </message>
    <message>
        <source>PCS shut down and Stop the soft startup</source>
        <translation type="vanished">PCS 停机，停止开机软启</translation>
    </message>
    <message>
        <source>Battery low voltage</source>
        <translation type="vanished">电池电压低</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="vanished">告警</translation>
    </message>
    <message>
        <source>The DC input/output voltage is lower than the battery EOD voltage or less than 1.414 times the grid line voltage</source>
        <translation type="vanished">直流出入电压低于电池EOD电压或者小于1.414倍电网线电压</translation>
    </message>
    <message>
        <source>PCS shut down and the AC contactor is disconnected</source>
        <translation type="vanished">PCS 停机，交流接触器断开</translation>
    </message>
    <message>
        <source>Low battery power</source>
        <translation type="vanished">电池功率低</translation>
    </message>
    <message>
        <source>The battery voltage is lower than the EOD voltage value (applicable to BMS free battery systems to prevent voltage rebound)</source>
        <translation type="vanished">电池电压低于电池EOD电压值（适用无BMS电池系统，防止电压回升）</translation>
    </message>
    <message>
        <source>When the PCS is in discharge state, the machine stops (the charging process is not affected) and the AC contactor is disconnected</source>
        <translation type="vanished">处于放电状态时PCS停机（充电过程不受影响），交流接触器断开</translation>
    </message>
    <message>
        <source>Recoverable, The alarm is cleared when the charging time of PCS is longer than 5 minutes</source>
        <translation type="vanished">可恢复， PCS充电时间大于5min后，告警消除</translation>
    </message>
    <message>
        <source>DC bus overvoltage</source>
        <translation type="vanished">直流母线过压</translation>
    </message>
    <message>
        <source>Serious failure</source>
        <translation type="vanished">严重故障</translation>
    </message>
    <message>
        <source>DC input voltage more then 850V</source>
        <translation type="vanished">直流输入电压&gt;850V</translation>
    </message>
    <message>
        <source>PCS shut down, the AC contactor is disconnected, and the DC circuit breaker is tripped</source>
        <translation type="vanished">PCS 停机，交流接触器断开，直流断路器脱扣</translation>
    </message>
    <message>
        <source>Unrecoverable</source>
        <translation type="vanished">不可恢复</translation>
    </message>
    <message>
        <source>DC bus short circuit</source>
        <translation type="vanished">直流母线短路</translation>
    </message>
    <message>
        <source>The DC bus voltage is less than 200V, the DC current is more than 50A, and the judgment time is 200us</source>
        <translation type="vanished">直流母线电压低于200V，直流电流大于50A，判断时间为200us</translation>
    </message>
    <message>
        <source>The output contactor is open</source>
        <translation type="vanished">输出接触器开路</translation>
    </message>
    <message>
        <source>When PCS is running, the auxiliary contact signal of AC contactor is in the disconnected state</source>
        <translation type="vanished">PCS运行状态下，交流接触器的辅助触点信号为断开状态</translation>
    </message>
    <message>
        <source>Output contactor short circuit</source>
        <translation type="vanished">输出接触器短路</translation>
    </message>
    <message>
        <source>When PCS is shut down, the auxiliary contact signal of AC contactor is closed</source>
        <translation type="vanished">PCS停机状态下，交流接触器的辅助触点信号为闭合状态</translation>
    </message>
    <message>
        <source>The converter is overheated</source>
        <translation type="vanished">变流器过温</translation>
    </message>
    <message>
        <source>IGBT temperature exceeds 105℃ or reactor temperature exceeds 160℃</source>
        <translation type="vanished">IGBT温度超过105℃或电抗器温度超过160℃</translation>
    </message>
    <message>
        <source>IGBT overtemperature: derating operation (grid-connected); IGBT overtemperature: PCS shut down (off-grid), AC contactor is disconnected; Reactor overtemperature: PCS shut down and AC contactor is disconnected</source>
        <translation type="vanished">IGBT过温：降额运行（并网）；IGBT过温：PCS停机（离网），交流接触器断开；电抗器过温：PCS 停机，交流接触器断开</translation>
    </message>
    <message>
        <source>Output over load</source>
        <translation type="vanished">输出过载</translation>
    </message>
    <message>
        <source>Off-grid load power &gt;110%Pn</source>
        <translation type="vanished">离网负载功率&gt;110%Pn</translation>
    </message>
    <message>
        <source>The positive and negative terminals of the battery are connected inversely fault</source>
        <translation type="vanished">电池接反故障</translation>
    </message>
    <message>
        <source>The DC input is reversed</source>
        <translation type="vanished">直流输入正负极性接反</translation>
    </message>
    <message>
        <source>The DC contactor is faulty</source>
        <translation type="vanished">DC接触器故障</translation>
    </message>
    <message>
        <source>When the driving signal is a closed signal, the pressure difference between the battery and the bus is greater than 50V;When the driving signal is off, the auxiliary contact signal is closed</source>
        <translation type="vanished">驱动信号为闭合信号条件下，电池和母线之间的压测&gt;50V；驱动信号为断开条件下，辅助触点信号为闭合状态</translation>
    </message>
    <message>
        <source>EMS communicate
fault</source>
        <translation type="vanished">EMS通信故障</translation>
    </message>
    <message>
        <source>The communication between PCS and EMS is lost, and the judgment time is 3 minutes</source>
        <translation type="vanished">PCS与EMS通信丢失，判断时间3min</translation>
    </message>
    <message>
        <source>Recoverable, the fault recovers automatically 30 seconds after it is rectified</source>
        <translation type="vanished">可恢复，故障消除后30s自动恢复</translation>
    </message>
    <message>
        <source>BMS communicate
fault</source>
        <translation type="vanished">BMS通信故障</translation>
    </message>
    <message>
        <source>Communication loss between PCS and BMS, judgment time 50s</source>
        <translation type="vanished">PCS与BMS通信丢失，判断时间50s</translation>
    </message>
    <message>
        <source>Converter phase loss fault</source>
        <translation type="vanished">变流器缺相故障</translation>
    </message>
    <message>
        <source>When the grid-connected power is greater than 50%, one or more lines of the three-phase circuit have no output power, and the judgment time is 10s</source>
        <translation type="vanished">并网功率大于50%条件下，三相电路出现一项或多项线路无输出功率，判断时间为10s</translation>
    </message>
    <message>
        <source>Grid overvoltage</source>
        <translation type="vanished">电网过压</translation>
    </message>
    <message>
        <source>If the power grid voltage exceeds the maximum allowable voltage (90% to 70% can be set), the judgment time is 1s</source>
        <translation type="vanished">电网电压超过最大允许电压（110%~130%可设定）,判断时间1s</translation>
    </message>
    <message>
        <source>Grid undervoltage</source>
        <translation type="vanished">电网欠压</translation>
    </message>
    <message>
        <source>Grid reverse sequence</source>
        <translation type="vanished">电网反序</translation>
    </message>
    <message>
        <source>The three-phase phase sequence is reversed (the positive sequence mode value of the grid voltage is less than the negative sequence mode value), and the judgment time is 1s</source>
        <translation type="vanished">三相相序接反（电网电压正序模值小于负序模值），判断时间为1s</translation>
    </message>
    <message>
        <source>Grid frequency anomaly</source>
        <translation type="vanished">电网频率异常</translation>
    </message>
    <message>
        <source>Grid frequency frequency beyond the allowable range of PCS (±2Hz can be set)</source>
        <translation type="vanished">电网频率超出PCS允许范围内（±2Hz可设定）</translation>
    </message>
    <message>
        <source>Converter shutter island protection</source>
        <translation type="vanished">变流器孤岛保护</translation>
    </message>
    <message>
        <source>Initiative shutter island protection mode, the power grid loses power, and the load matches the grid-connected power and phase Angle of the inverter</source>
        <translation type="vanished">主动孤岛保护模式下电网失电，且负载和逆变器并网功率和相角相匹配</translation>
    </message>
    <message>
        <source>Drive line fault</source>
        <translation type="vanished">驱动线故障</translation>
    </message>
    <message>
        <source>The driver cable port is loose</source>
        <translation type="vanished">驱动线端口松动</translation>
    </message>
    <message>
        <source>Lightning protection fault</source>
        <translation type="vanished">防雷故障</translation>
    </message>
    <message>
        <source>Surge arrester breakdown or leakage</source>
        <translation type="vanished">防雷器击穿或漏电</translation>
    </message>
    <message>
        <source>The AC auxiliary power supply is faulty</source>
        <translation type="vanished">交流辅助电源故障</translation>
    </message>
    <message>
        <source>The AC auxiliary power output is abnormal. Procedure</source>
        <translation type="vanished">交流辅助电源输出出现异常</translation>
    </message>
    <message>
        <source>The DC auxiliary power supply is faulty</source>
        <translation type="vanished">直流辅助电源故障</translation>
    </message>
    <message>
        <source>The DC auxiliary power output is abnormal. Procedure</source>
        <translation type="vanished">直流辅助电源输出出现异常</translation>
    </message>
    <message>
        <source>Fan failure</source>
        <translation type="vanished">风扇故障</translation>
    </message>
    <message>
        <source>The fan cannot be started</source>
        <translation type="vanished">风扇无法启动运行</translation>
    </message>
    <message>
        <source>PCS derating operation</source>
        <translation type="vanished">PCS 降额运行</translation>
    </message>
    <message>
        <source>Emergency shutdown</source>
        <translation type="vanished">紧急关机</translation>
    </message>
    <message>
        <source>Press the EPO button on the converter control panel</source>
        <translation type="vanished">在变流器控制面板上按下EPO按钮</translation>
    </message>
    <message>
        <source>CT or Hall open circuit fault</source>
        <translation type="vanished">CT或霍尔开路故障</translation>
    </message>
    <message>
        <source>When PCS grid-connected power is greater than 50%, CT detection current is less than 70% of the given quantity</source>
        <translation type="vanished">PCS并网功率大于50%运行时，CT检测电流小于给定量的70%</translation>
    </message>
    <message>
        <source>Insulation impedance anomaly</source>
        <translation type="vanished">绝缘阻抗异常</translation>
    </message>
    <message>
        <source>For 1000V systems, the positive or negative ground impedance is less than 33KΩ</source>
        <translation type="vanished">对于1000V系统，正对地或负对地阻抗小于33K欧姆</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2299"/>
        <source>Stand-by</source>
        <translation>待机</translation>
    </message>
    <message>
        <source>This is the converter standby switch. Click the converter to enter the standby state</source>
        <translation type="vanished">这是变流器待机开关，点击后变流器进入待机状态</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2321"/>
        <source>Total voltage of the battery uploaded by BMS.</source>
        <translation>BMS上传的电池组总电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2325"/>
        <source>Total current of the battery uploaded by BMS.</source>
        <translation>BMS上传的电池组总电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2329"/>
        <source>Battery SOC uploaded by BMS refers to the current remaining battery capacity percentage.</source>
        <translation>BMS上传的电池组SOC，即当前电池剩余电量百分比。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2333"/>
        <source>Battery SOH uploaded from BMS, the percentage of available capacity after full charge compared to the rated capacity.</source>
        <translation>BMS上传的电池组SOH，电池组充满后可用容量与出厂容量的百分比。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2337"/>
        <source>The highest voltage of single cell uploaded by BMS.</source>
        <translation>BMS上传的单体最高电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2341"/>
        <source>The lowest voltage of single cell uploaded by BMS.</source>
        <translation>BMS上传的单体最低电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2345"/>
        <source>The highest temperature of single cell uploaded by BMS.</source>
        <translation>BMS上传的单体最高温度。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2349"/>
        <source>The lowest temperature of single cell uploaded by BMS.</source>
        <translation>BMS上传的单体最低温度。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2353"/>
        <source>The limit of charging current uploaded by BMS.</source>
        <translation>BMS上传的充电电流限制。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2357"/>
        <source>The limit of discharging current uploaded by BMS.</source>
        <translation>BMS上传的放电电流限制。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2377"/>
        <source>Alarm levels uploaded from BMS, level one alarm is yellow, level two alarm is orange, and level three alarm is red;
By default, the converter does not respond to level one and level two alarms, but shuts down in response to level three alarms.</source>
        <translation>BMS上传的告警等级，一级告警为黄色、二级告警为橙色、三级告警为红色；
默认一级告警、二级告警变流器不做响应，三级告警变流器关机。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2683"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (＞30kVA power converter).</source>
        <translation>漏电流：漏电流应不大于300mA (≤30kVA 变流器)，或10mA/kVA(＞30kVA变流器)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2976"/>
        <source>Active power P on the grid side of the converter.</source>
        <translation>变流器电网侧有功功率P。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2985"/>
        <source>Reactive power Q on the grid side of the converter.</source>
        <translation>变流器电网侧无功功率Q。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2994"/>
        <source>Apparent power S on the grid side of the converter.</source>
        <translation>变流器电网侧视在功率S。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3003"/>
        <source>Power factor PF on the grid side of the converter.</source>
        <translation>变流器电网侧功率因素PF。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3011"/>
        <source>Frequency on the grid side of the converter.</source>
        <translation>变流器电网频率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3082"/>
        <source>Active power P on the load side of the converter.</source>
        <translation>变流器负载侧有功功率P。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3091"/>
        <source>Reactive power Q on the load side of the converter.</source>
        <translation>变流器负载侧无功功率Q。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3100"/>
        <source>Apparent power S on the load side of the converter.</source>
        <translation>变流器负载侧视在功率S。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3109"/>
        <source>Power factor PF on the load side of the converter.</source>
        <translation>变流器负载侧功率因素PF。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3118"/>
        <source>Frequency on the load side of the converter.</source>
        <translation>变流器负载频率。</translation>
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
        <translation>闭合</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3139"/>
        <source>There are two states for a DC circuit breaker: On, Off.</source>
        <translation>直流断路器有两种状态:闭合、断开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3143"/>
        <source>The DC contactor has two states: On, Off. After the soft start of the DC side is completed, the DC contactor closes. When the DC side of the battery is disconnected and the voltage of the DC bus drops to a certain level, the DC contactor opens.</source>
        <translation>直流接触器有两种状态:闭合，断开;当直流侧软启完成后，直流接触器闭合;当电池直流侧断开，直流母线电压下降到一定电压，直流接触器断开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3148"/>
        <source>There are two states for the maintenance bypass circuit breaker: On, Off. This circuit breaker is only used for machine maintenance. If maintenance is required, please contact the maintenance personnel.</source>
        <translation>维修旁路断路器有两种状态:闭合、断开;此断路器仅用于机器维护，如需维护，请联系维护人员。</translation>
    </message>
    <message>
        <source>The output circuit breaker has two states: On, Off. It can only be manually opened and closed. If there is an overcurrent in the output circuit breaker, it will trip.</source>
        <translation type="vanished">输出断路器有两种状态:闭合、断开;只能手动断开，如果输出断路器过流，输出断路器会发生脱扣。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3157"/>
        <source>The output contactor has two states: On, Off. The output contactor closes after the soft start on the inv. side is completed. The output contactor opens when the converter is shut down.</source>
        <translation>输出接触器有两种状态:闭合、断开;当逆变侧软启完成后，输出接触器闭合;当变流器关机时，输出接触器断开。</translation>
    </message>
    <message>
        <source>The power grid circuit breaker has two states: On, Off; The power grid circuit breaker can only be manually disconnected. If the power grid circuit breaker overflows, the power grid circuit breaker may trip.</source>
        <translation type="vanished">电网断路器有两种状态:闭合、断开;只能手动断开，如果电网断路器过流，电网断路器会发生脱扣。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3241"/>
        <source>Off</source>
        <translation>断开</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3242"/>
        <source>DC module high voltage contactor has two states: On, Off; When there is voltage on the high voltage side, close the high voltage contactor; Otherwise, the high voltage contactor is disconnected.</source>
        <translation>DC模块高压侧接触器有两种状态：闭合、断开；当高压侧有电压时，闭合高压侧接触器；否则高压侧接触器断开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3246"/>
        <source>DC module low voltage contactor has two states: On, Off; When there is voltage on the low voltage side, close the contactor on the low voltage side; Otherwise, the low pressure contactor is disconnected.</source>
        <translation>DC模块低压侧接触器有两种状态：闭合、断开；当低压侧有电压时，闭合低压侧接触器；否则低压侧接触器断开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3592"/>
        <source>The function that will perform this function during business hours, there are six to choose from, They are System for self-use, battery Batter priority, Peak shaving, Output PV power,Economic model.</source>
        <translation>功能，将在工作时间执行此功能，有六种可供选择，分别是自发自用、电池优先、削峰填谷、跟随PV功率、经济模式。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3597"/>
        <source>Peak price</source>
        <translation>峰价</translation>
    </message>
    <message>
        <source>In the peak shaving and valley filling mode, select &apos;Peak&apos; periods and &apos;Valley&apos; periods based on electricity prices.</source>
        <translation type="vanished">在削峰填谷模式下，根据电价选择‘峰价’时段、‘谷价’时段。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5068"/>
        <source>Battery Types: Lithium, Lead-Acid.</source>
        <translation>电池类型：锂电、铅酸。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5075"/>
        <source>Battery Communication Modes: None, RS485, CAN, Ethernet. (Note: Due to the fact that CAN and Ethernet both have only one port, the battery communication mode and EMS communication mode cannot be selected as &quot;CAN&quot; or &quot;Ethernet&quot; simultaneously.)</source>
        <translation>电池通信方式：无、RS485、CAN、以太网。(备注:由于CAN端口和以太网都只有一个端口，因此电池通讯方式和EMS通讯方式不可同时选&quot;CAN&quot;或“以太网&quot;)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5082"/>
        <source>Constant Voltage (CV) mode: The converter will operate in constant voltage mode on the DC side.
Constant Current (CC) mode: The converter will operate in constant current mode on the DC side.
Constant Power AC (CP_AC) mode: The power level can be set at &quot;constant power.&quot; The value represents the power level, positive for discharge and negative for charge. For example, setting it to -5 means that the AC side will charge the battery with a power of 5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Conversely, setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.
Reserved.</source>
        <translation>恒压(CV)模式：变流器直流侧将以恒压模式运行。
恒流(CC)模式，变流器直流侧将以恒流模式运行。
交流恒功率(CP_AC)模式:可以在“恒功率”处设置功率大小，数值为大小为功率大小，正值为放电，负值为充电。比如设置-5，表示交流侧将以-5kW的功率给电池充电，由于逆变器的损耗，此时直流侧的功率将小于交流侧的功率;比如设置5，表示交流侧将以5kW的功率输出，由于逆变器的损耗，此时直流侧的功率将大于交流侧的功率。
预留。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5088"/>
        <source>EMS communication methods: RS485, CAN, Ethernet.
The setting communication methods are readable and writable in remote mode, and only readable in local mode. The unselected communication methods are only readable in both remote and local mode.</source>
        <translation>EMS通信方式：RS485、CAN、以太网。
设定的通信方式在远程模式下可读可写，在本地模式下只可读，未选中的通信方式远程和本地仅可读。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5095"/>
        <source>Output Power Limit: Restricts the upper limit of the set value for the power on the AC side of the converter.</source>
        <translation>输出功率上限：限制变流器交流侧功率设置值的上限。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5101"/>
        <source>Battery Protocol: Parse the messages sent by BMS based on the selected battery protocol.                                             
Currently supported battery manufacturer protocols include:MEGA, LISHEN, GREATPOWER, GOLD, BMSER, LANLI, SLANPOWER, PYLON, CATL, SUOYING, XINGWANGDA, KUBO, GOLD_V2, TOGOOD, GROUP_STANDARD, WOBOYUAN, KGOOER, LD, PYLON_L, VILION, TUOPU,JDI.                                            
Select AUTO to automatically detect the battery manufacturer protocol.</source>
        <translation>6.电池协议:根据选择的电池协议解析BMS发送的报文。目前支持选择的电池厂家协议为:迈格, 力神, 鹏辉, 高特, 协能, 蓝锂, 深澜, 派能, 宁德时代, 索英, 欣旺达, 库博, 高特V2, 拓高, 团标, 沃博源, 科工, 里德, 派能L, 未蓝, 拓普,金锂动。
选择AUTO时将自动判断电池厂家协议。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5110"/>
        <source>Charging SOC:                                             
 (1) At the self-use mode, when the battery SOC is lower than the charging SOC, the converter maintains the battery SOC at this value.                                             
 (2) At the battery priority mode, the ECP or FCP state is determined based on the current SOC.                                             
 (3) At the optimal mode, when the battery SOC is lower than the charging SOC, the converter enters the FCP state and starts charging the battery. When the current SOC is greater than or equal to the discharge SOC, the converter exits the FCP state and enters the ECP state.</source>
        <translation>充电SOC：
(1)自发自用模式下，电池SOC小于充电SOC时，变流器维持电池SOC在此值；
(2)电池优先模式下，从根据当前SOC判断进入ECP或FCP状态；
(3)最优模式下，电池SOC低于充电SOC，进入FCP状态，电池启动充电，当前SOC大于等于放电SOC时，退出FCP状态，进入ECP状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5120"/>
        <source>Discharge SOC: When the SOC is greater than the discharge SOC, the FCP state is released.</source>
        <translation>放电SOC：当SOC大于放电SOC时，解除FCP状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5127"/>
        <source>Diesel Generator: Rated Power of the Diesel Generator.</source>
        <translation>柴油发电机：柴发的额定功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5133"/>
        <source>Energy Priority: In the self-use mode,                                        when selecting battery priority over the grid, the load is powered by the battery as a priority.                                        When selecting the grid priority over the battery, the load is powered by the grid as a priority.</source>
        <translation>能量优先级：自发自用模式下，选择电池&gt;电网时，优先使用电池给负载供电；选择电网&gt;电池时，优先使用电网给负载供电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5142"/>
        <source>Serial Communication Address: The default value is 1, adjustable range is between 1 and 255, used for matching address during serial communication.</source>
        <translation>串口通信地址：默认值为1，可调范围在1~255之间，用于串口通信时匹配地址。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5148"/>
        <source>Serial Port 2 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400.                                         The default baud rate for Serial Port 2 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation>串口2，波特率有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口2默认波特率是9600 bps,八个数据位，无校验，一个停止位(8，N, 1).</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5155"/>
        <source>Serial Port 3 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 3 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation>串口3，波特率有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口3默认波特率是9600 bps,八个数据位，无校验，一个停止位(8，N, 1).</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5161"/>
        <source>Serial Port 4 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 4 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation>串口4，波特率有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口4默认波特率是9600 bps,八个数据位，无校验，一个停止位(8，N, 1).</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5167"/>
        <source>Serial Port 5 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 5 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation>串口5，波特率有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口5默认波特率是9600 bps,八个数据位，无校验，一个停止位(8，N, 1).</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5173"/>
        <source>Serial Port 6 has six selectable baud rates: 1200, 2400, 4800, 9600, 19200, and 38400. The default baud rate for Serial Port 6 is 9600 bps, with eight data bits, no parity, and one stop bit (8-N-1).</source>
        <translation>串口6，波特率有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口6默认波特率是9600 bps,八个数据位，无校验，一个停止位(8，N, 1).</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5179"/>
        <source>CAN1 Port: The baud rate for internal communication is 500 kbps by default and cannot be modified.</source>
        <translation>CAN1端口：内部通讯的波特率，默认波特率500 kbps,不可修改。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5185"/>
        <source>CAN2 Port: Optional baud rates for the CAN2 port include 100, 125, 250, 500, and 800 kbps, with a default baud rate of 500 kbps.</source>
        <translation>CAN2端口：可选波特率100、125、250、500、800 kbps，默认波特率500kbps。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5272"/>
        <source>Power change rate: the rate at which power changes within a second .</source>
        <translation>功率变化率：单位时间内功率变化的速率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5277"/>
        <source>Upper limit of power grid frequency variation range</source>
        <translation>电网频率变化范围上限</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5278"/>
        <source>Upper limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as 0.2, 0.5, 1, 5.</source>
        <translation>电网频率变化范围上限：交流侧所允许的频率变化最大范围，可供选择为0.2、0.5、1、5。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5283"/>
        <source>Lower limit of power grid frequency variation range</source>
        <translation>电网频率变化范围下限</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5284"/>
        <source>Lower limit of power grid frequency variation range: The maximum range of frequency variation allowed on the AC side, which can be selected as-0.5, -1, -2, -5.</source>
        <translation>电网频率变化范围下限：交流侧所允许的频率变化最大范围，可供选择为-0.5、-1、-2、-5。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5290"/>
        <source>Upper limit of voltage protection range: The maximum range of voltage variation allowed on the AC side, which can be selected as 10, 15, 20.</source>
        <translation>电压保护范围上限：交流侧所允许的电压变化范围的上限，可供选择为10、15、20。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5296"/>
        <source>Lower limit of voltage protection range: The minimum range of voltage variation allowed on the AC side, which can be selected as -10, -15, -20.</source>
        <translation>电压保护范围下限：交流侧所允许的电压变化范围的下限，可供选择为-10、-15、-20。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5302"/>
        <source>High voltage ride through(HVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation>高压穿越使能：使能、禁止。(注:此项一般在大型并网电站使用。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5308"/>
        <source>Low voltage ride through(LVRT) enablement: Enable, Disable. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation>低压穿越使能：使能、禁止。(注:此项一般在大型并网电站使用。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5314"/>
        <source>Prevent islanding effect. When islanding effect is detected (in a photovoltaic grid-on system, when a power outage occurs in the main grid, and the PV grid-connected converter generates power that matches the local load on the low-voltage side of the grid, it can easily sustain power generation independently, resulting in an &apos;island&apos; phenomenon, which endangers the safety of maintenance personnel), the converter automatically shuts down. The options for this feature can be set as &apos;Enable&apos; or &apos;prohibited&apos;.(Note: This option is generally used in large grid-on power stations.)</source>
        <translation>防止孤岛效应，当检测出现孤岛效应(在光伏并网系统中,当大电网出现停电事故时,光伏并网逆变器发电与电网低压侧本地负载如果刚好出现功率相匹配时,容易出现自给自足的维持发电状态,从而出现&quot;孤岛&quot;现象,从而危及检修人员安全)时,让逆变器自动停机,可供选择为允许、禁止。(注:此项一般在大型并网电站使用。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5321"/>
        <source>Insulation detection enable, the insulation resistance should be greater than 33KΩ for normal start-up and operation. If it is less than 33KΩ, it should not start, and an alarm should be triggered. By default, it is disabled, but can be set as &apos;Enable&apos; or &apos;prohibited&apos;.</source>
        <translation>绝缘检测使能，绝缘电阻大于33KΩ要能正常起机运行，小于33KΩ不能起机，并且要告警，默认禁止,可供选择为允许、禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5327"/>
        <source>Primary frequency control enable: When the grid frequency deviates from the rated value, the active power is controlled to increase or decrease in order to maintain the grid frequency at the rated value. It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation>一次调频使能,电网的频率偏离额定值时，通过控制有功功率的增减使电网频率维持额定值，可供选择为允许、禁止。(注:此项一般在大型并网电站使用。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5333"/>
        <source>Rotational inertia enable: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation>转动惯量使能，可供选择为使能、禁止。(注:此项一般在大型并网电站使用。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5345"/>
        <source>Converter Model: As per factory settings, generally not modifiable.</source>
        <translation>机器型号：以出厂设置为准，一般不可修改。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5351"/>
        <source>The rated capacity of the converter shall be based on the factory value and cannot be changed.</source>
        <translation>机器的额定容量，以出厂值为准，不可更改。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5357"/>
        <source>Output Frequency Level: Default 50Hz, typically 50Hz or 60Hz.</source>
        <translation>输出频率等级，默认50Hz，一般为50Hz或60Hz。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5363"/>
        <source>Output Voltage Level: As per factory settings, generally not modifiable.</source>
        <translation>输出电压等级：以出厂为准，一般不可修改。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5369"/>
        <source>Transformer Voltage Ratio: To be determined by the factory nameplate, not modifiable.</source>
        <translation>变压器变比:以出厂铭牌标识为准,不可修改。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5375"/>
        <source>Reactive Power Output Mode: Default non-adjustable, options include Power Factor, Reactive Power, non-adjustable.</source>
        <translation>输出无功方式：默认不可调节，可供选择为功率因数、无功功率、不可调节。</translation>
    </message>
    <message>
        <source>The power grid recovery scheduling startup Settings, there are two options: Allow (Allow), Not allow (Not Allow), the setting is invalid.</source>
        <translation type="vanished">电网恢复调度开机设置，有两项可选：允许、不允许,设置无效。</translation>
    </message>
    <message>
        <source>Grid Restoration and Grid-on Time: When grid restoration scheduling allows for startup, it can be set according to actual requirements.</source>
        <translation type="vanished">电网恢复并网时间：电网恢复调度开机允许时，根据实际需求设置即可。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5393"/>
        <source>Converter Anti-Reverse Flow: Enable, Disable;
Enabling prevents converter current from flowing into the grid, while Disabling allows converter current to flow into the grid.</source>
        <translation>变流器防逆流：使能、禁止
使能即变流器电流禁止流向电网，禁止即变流器电流允许流向电网。</translation>
    </message>
    <message>
        <source>System Anti-Reverse Flow: Enable, Disable;
Enabling prevents system current from flowing into the grid, while Disabling allows system current to flow into the grid.</source>
        <translation type="vanished">系统防逆流：使能、禁止
使能即系统电流禁止流向电网，禁止即系统电流允许流向电网。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5401"/>
        <source>Over-frequency load shedding: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation>过频降载：可供选择为使能、禁止。(注:此项一般在大型并网电站使用。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5407"/>
        <source>QP curve: It can be selected as enabled or disabled. (Note: This option is generally used in large grid-on power stations.)</source>
        <translation>QP曲线：可供选择为使能、禁止。(注:此项一般在大型并网电站使用。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5413"/>
        <source>Constant voltage parallel operation enable: It can be selected as enabled or disabled.  (Note: This option is generally used in large grid-on power stations.)</source>
        <translation>恒压并机使能,可供选择为使能、禁止。(注:此项设置在恒压并机模式下使用。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5419"/>
        <source>Number of modules, default 1(invalid setting).</source>
        <translation>模块数量，默认1（设置无效）。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5446"/>
        <source>When you select DCDC, the DCAC interface freezes, and the maximum module ID and minimum module ID take effect.You can only modify the database to restore the DCAC interface.(Note:As per factory settings, generally not modifiable.)</source>
        <translation>选择DCDC时界面冻结，最大模块号和最小模块号生效，只能修改数据库以恢复DCAC界面。（注：以出厂设置为准，一般不可修改。）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5453"/>
        <source>Maximum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation>机架的最大模块数。(备注:仅在机架设置中选择DCDC模式时生效。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5459"/>
        <source>Minimum Module Count for Current Chassis. (Note: Only effective when selecting DCDC mode in chassis settings.)</source>
        <translation>机架的最小模块数。(备注:仅在机架设置中选择DCDC模式时生效。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5465"/>
        <source>DCDC Isolation Monitoring Enable: Enable, Disable. (Note: Default is Disable)</source>
        <translation>DCDC绝缘监测使能:使能、禁止。(注:默认禁止)</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="345"/>
        <location filename="../mywidget.cpp" line="5200"/>
        <source>User password</source>
        <translation>用户密码</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="393"/>
        <location filename="../mywidget.cpp" line="5206"/>
        <source>Admin password</source>
        <translation>高级设置密码</translation>
    </message>
    <message>
        <source>The upper limit of charging current uploaded by BMS.</source>
        <translation type="obsolete">BMS上传的充电电流上限。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2361"/>
        <source>The allowable charging power uploaded by BMS.</source>
        <translation>BMS上传的允许充电功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2365"/>
        <source>The allowable discharging power uploaded by BMS.</source>
        <translation>BMS上传的允许放电功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2369"/>
        <source>The allowable charging capacity uploaded by BMS.</source>
        <translation>BMS上传的允许充电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2373"/>
        <source>The allowable discharging capacity uploaded by BMS.</source>
        <translation>BMS上传的允许放电量。</translation>
    </message>
    <message>
        <source>Alarm levels uploaded from BMS, level one alarm is yellow, level two alarm is orange, and level three alarm is red; By default, the converter does not respond to level one and level two alarms, but shuts down in response to level three alarms.</source>
        <translation type="obsolete">BMS上传的告警等级，一级告警为黄色、二级告警为橙色、三级告警为红色；
默认一级告警、二级告警变流器不做响应，三级告警变流器关机</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2380"/>
        <source>Charging enable</source>
        <translation>充电使能</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2381"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to charge, Disable indicates the battery is not allowed to charge.</source>
        <translation>BMS上传的电池状态：使能表示电池允许充电，禁止表示电池不允许充电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2384"/>
        <source>Discharging enable</source>
        <translation>放电使能</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2385"/>
        <source>Battery Status Uploaded by BMS: Enable indicates the battery is allowed to discharge, Disable indicates the battery is not allowed to discharge.</source>
        <translation>BMS上传的电池状态：使能表示电池允许放电，禁止表示电池不允许放电。</translation>
    </message>
    <message>
        <source>This is the allowable charging power obtained by PCS from BMS through CAN/485/TCP communication protocol, or obtained by multiplying the current charging limit value uploaded from BMS through CAN/485/TCP communication protocol with the current voltage value. The battery&apos;s charging power should not exceed this limitation value.</source>
        <translation type="vanished">这是PCS通过CAN/485/TCP通讯协议从BMS上传得到允许充电功率或通过CAN/485/TCP通讯协议从BMS上传的当前充电限流值乘以当前电压值得到允许充电功率，电池的充电功率不可超过这个限制数值。</translation>
    </message>
    <message>
        <source>This is the allowable discharge power obtained by PCS from BMS through CAN/485/TCP communication protocol, or obtained by multiplying the current discharge limit value uploaded from BMS through CAN/485/TCP communication protocol with the current voltage value. The battery&apos;s discharge power should not exceed this limitation value.</source>
        <translation type="vanished">这是PCS通过CAN/485/TCP通讯协议从BMS上传得到允许放电功率或通过CAN/485/TCP通讯协议从BMS上传的当前放电限流值乘以当前电压值得到允许放电功率，电池的放电功率不可超过这个限制数值。</translation>
    </message>
    <message>
        <source>This is the allowable charging capacity uploaded from BMS through CAN/485/TCP communication protocol. It represents the current battery pack&apos;s capacity for charging. This value is not displayed when it does not exist (Note: Only certain BMSs provide this value).</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的允许充电量，当前电池组允许充电的容量，当不存在该值时，此项不显示(注:仅部分BMS会提供这个值。</translation>
    </message>
    <message>
        <source>This is the allowable discharge capacity uploaded from BMS through CAN/485/TCP communication protocol. It represents the current battery pack&apos;s capacity for discharging. This value is not displayed when it does not exist (Note: Only certain BMSs provide this value).</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的允许放电量，当前电池组允许放电的容量，当不存在该值时，此项不显示(注:仅部分BMS会提供这个值）。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2398"/>
        <source>Interface</source>
        <translation>接口号</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2399"/>
        <source>This is the interface number, which defaults to eth0</source>
        <translation>这是接口号，默认eth0</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2402"/>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2403"/>
        <source>This is the port number, default 502</source>
        <translation>这是端口号，默认502</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2406"/>
        <source>Ip</source>
        <translation>Ip</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2407"/>
        <source>This is the IP address. The default is 192.168.1.100</source>
        <translation>这是IP地址，默认192.168.1.100</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2410"/>
        <source>Netmask</source>
        <translation>子网掩码</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2411"/>
        <source>This is the subnet mask, 255.255.255.0</source>
        <translation>这是子网掩码，255.255.255.0</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2414"/>
        <source>Gateway</source>
        <translation>网关</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2415"/>
        <source>This is the gateway. The default is 192.168.1.1</source>
        <translation>这是网关，默认192.168.1.1</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2418"/>
        <source>Serber ip</source>
        <translation>服务器IP</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2419"/>
        <source>This is the server IP address. The default is 192.168.1.200</source>
        <translation>这是服务器IP，默认192.168.1.200</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2422"/>
        <source>Apply and Restart system</source>
        <translation>应用并重启系统</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2423"/>
        <source>This is the application and restart the system, click will restart the system, if there is an upgrade, will use the new program.</source>
        <translation>这是应用并重启系统，点击后将重启系统，如有升级，将会使用新的程序。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2598"/>
        <source>Alarm icon</source>
        <translation>告警图标</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2598"/>
        <source>Alarm icon: It is not displayed when there is no alarm. When there is a minor alarm, a yellow icon is displayed. When there is a fault alarm, a red icon is displayed.</source>
        <translation>告警图标：无告警时不显示，轻微告警时显示黄色图表，故障告警时显示红色图标。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3153"/>
        <source>The output circuit breaker has two states: On, Off.The Output breaker can only be manually disconnected.</source>
        <translation>输出断路器有两种状态:闭合、断开;只能手动断开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3161"/>
        <source>The power grid circuit breaker has two states: On, Off;The power grid circuit breaker can only be manually disconnected.</source>
        <translation>电网断路器有两种状态:闭合、断开;只能手动断开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3196"/>
        <source>LVRT states : Enable , Disabled.</source>
        <translation>低电压穿越状态;使能、禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3233"/>
        <location filename="../mywidget.cpp" line="3237"/>
        <source>Not
starting</source>
        <translation>未软启</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3234"/>
        <source>High-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation>高压侧软启动状态：未启动、软启中、软启完成。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3238"/>
        <source>Low-voltage side soft start states: Not started, Soft start in progress, Soft start completed.</source>
        <translation>低压侧软启动状态：未启动、软启中、软启完成。</translation>
    </message>
    <message>
        <source>DCDC module operation modes states: OFF, Standby, Constant Voltage, Constant Current, Maximum Power Point Tracking.</source>
        <translation type="vanished">DCDC模块工作模式状态:关闭、待机、恒压、恒流、追踪最大功率点。</translation>
    </message>
    <message>
        <source>The current IGBT temperature of the MPS must not exceed 105 ° C. Otherwise, the MPS will derate and can resume full power operation at 73 ° C after derating.</source>
        <translation type="vanished">当前MPS的IGBT温度，IGBT温度不得超过105℃，否则MPS将降额运行，降额后73℃恢复可满功率运行。</translation>
    </message>
    <message>
        <source>Leakage current: the current to the ground of the grounding wire. Leakage current below 30mA is normal. Leakage current above 30mA indicates that there is leakage.</source>
        <translation type="vanished">漏电流，接地线的对地电流，漏电流30mA以下正常，超过30mA表示存在漏电现象。</translation>
    </message>
    <message>
        <source>The positive insulation impedance of the DCDC module is normal when the positive insulation impedance is greater than 1 Mω. When the positive insulation impedance is lower than 1 Mω, the insulation fault or potential security risks exist.</source>
        <translation type="vanished">DCDC模块的正绝缘阻抗，正绝缘阻抗大于1MΩ时正常，低于1MΩ时存在绝缘故障或潜在的安全隐患。</translation>
    </message>
    <message>
        <source>The negative insulation impedance of the DCDC module is normal when the negative insulation impedance is greater than 1 Mω. When the negative insulation impedance is lower than 1 Mω, the insulation fault or potential security risks exist.</source>
        <translation type="vanished">DCDC模块的负绝缘阻抗，负绝缘阻抗大于1MΩ时正常，低于1MΩ时存在绝缘故障或潜在的安全隐患。</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="vanished">闭合</translation>
    </message>
    <message>
        <source>DC contactor has two states: Break, Close; When the DC side is soft Break, the DC contactor is closed. When the DC side of the battery is disconnected, the DC bus voltage drops to a certain voltage, and the DC contactor is disconnected.</source>
        <translation type="vanished">直流接触器有两种状态： 断开、闭合；当直流侧软启完成后，直流接触器闭合；当电池直流侧断开，直流母线电压下降到一定电压，直流接触器断开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3147"/>
        <source>Maintenance Bypass Breaker</source>
        <translation>维修旁路断路器</translation>
    </message>
    <message>
        <source>Maintenance bypass circuit breaker has two states: Break, Close; This circuit breaker is only used for machine maintenance, if necessary, please contact the maintenance personnel.</source>
        <translation type="vanished">维修旁路断路器有两种状态：断开、闭合；此断路器仅用于机器维护，如有需要，请联系维护人员。</translation>
    </message>
    <message>
        <source>The output circuit breaker has three states: open, closed, trip; If the output circuit breaker overcurrent, the output circuit breaker will trip.</source>
        <translation type="vanished">输出断路器有三种状态： 断开、闭合、脱扣；只能手动断开，如果输出断路器过流，输出断路器会发生脱扣。</translation>
    </message>
    <message>
        <source>The output contactor has two states: Break, Close; When the DC side soft opening is completed, the output contactor is closed; When the converter is turned off, the output contactor is disconnected.</source>
        <translation type="vanished">输出接触器有两种状态： 断开、闭合；当直流侧软启完成后，输出接触器闭合；当变流器关机时，输出接触器断开。</translation>
    </message>
    <message>
        <source>The power grid circuit breaker has three states: Break, Close, Trip; The power grid circuit breaker can only be manually disconnected. If the power grid circuit breaker overflows, the power grid circuit breaker may trip.</source>
        <translation type="vanished">电网断路器有三种状态： 断开、闭合、脱扣；只能手动断开，如果电网断路器过流，电网断路器会发生脱扣。</translation>
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
        <translation>禁止</translation>
    </message>
    <message>
        <source>This is the status of the output dry contact 1, which can be enabled or disabled.</source>
        <translation type="vanished">这是输出干接点1的状态，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <source>This is the status of the output dry contact 2, which can be enabled or disabled.</source>
        <translation type="vanished">这是输出干接点2的状态，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <source>This is the status of the output dry contact 3, which can be enabled or disabled.</source>
        <translation type="vanished">这是输出干接点3的状态，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <source>The converter can be enabled in two states: enable and disable; If the internal self-test of the machine is no problem, the converter is enabled; Otherwise the converter is prohibited.</source>
        <translation type="vanished">变流器使能有两种状态：使能、禁止；机器内部自检没有问题时，变流器使能；否则变流器禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3183"/>
        <source>Not starting</source>
        <translation>未启动</translation>
    </message>
    <message>
        <source>The DC Soft boot has three states: Soft starting, complete, and Not starting. Soft start means that when the converter is started, it gradually accelerates or decelerates the device to the normal operating state by controlling the change of current or voltage, so as to reduce the current shock and voltage peak in the circuit, protect the circuit components and reduce the mechanical damage of the device. Soft start can increase device life, reduce energy consumption, and improve system efficiency.</source>
        <translation type="vanished">直流软启动有三种状态:软启中(Soft starting)，软启完成(complete)，未启动(Not starting);软启动是指变流器在启动时，通过控制电流或电压的变化使设备逐渐加速或减速到正常运行状态，以减少电路中的电流冲击和电压峰值，保护电路元器件并减少设备的机械损伤。软启动可以增加设备的寿命，减少能耗，提高系统效率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3187"/>
        <source>OFF</source>
        <translation>关闭</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3187"/>
        <location filename="../mywidget.cpp" line="3249"/>
        <source>Converter Status</source>
        <translation>变流器状态</translation>
    </message>
    <message>
        <source>There are eight converter states:Shut down, Soft start, Grid-ON Charge, Grid-ON Discharge, Grid-OFF Discharge, Drop and Connected,Standby, Grid-OFF Charge.</source>
        <translation type="vanished">这是当前变流器的状态，有关闭(OFF)、软启动(Softstart)、并网充电(Grid-ON Charge)、并网放电(Grid-ON Discharge)、离网放电(Grid-OFF
Discharge)、降额并网(Drop and Connected)、待机(Standby)、离网充电(Grid-OFF Charge)这八种状态。</translation>
    </message>
    <message>
        <source>This is the status of the input dry contact 4. The status can be Enable or Disable.</source>
        <translation type="vanished">这是输入干接点4的状态，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3260"/>
        <source>automatic</source>
        <translation>自动</translation>
    </message>
    <message>
        <source>    When automatic and off-grid is selected, it will automatically identify and switch and off-grid. When the voltage on the grid side is normal, the contactor on the grid side will close, and the machine is in grid-connected mode (PQ).When the grid is out of power, the grid side contactor will be disconnected, and the machine is in off-grid mode (VF).
   When the grid-connected mode is selected, and the grid side voltage is normal, the grid side contactor will close, and the machine is in grid-connected mode (PQ);If the power grid loses power, the machine will give an alarm warning of the power grid low voltage.
    When off-grid mode is selected, the machine will disconnect the grid side contactor, and the machine is in off-grid mode (VF).</source>
        <translation type="vanished">    选择自动并离网时，自动识别并切换并离网，当电网侧电压正常时，电网侧接触器将闭合，此时机器处于并网模式（PQ）；当电网失电时，电网侧接触器将断开，此时机器处于离网模式（VF）。
    选择并网模式时，且电网侧电压正常时，电网侧接触器将闭合，此时机器处于并网模式（PQ）；如果电网失电，机器将给出“电网电压低”告警提示。
    选择离网模式时，机器将断开电网侧接触器，此时机器处于离网模式（VF）。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3265"/>
        <source>Constant power(AC)</source>
        <translation>恒功率(AC)</translation>
    </message>
    <message>
        <source>    This is the power setting of the AC side. The charging and discharging power of the AC side can be controlled by modifying the value of this item.When advanced Settings control power mode select constant power mode (CP_N&amp;P), positive value indicates discharge, negative value indicates charging.
    For example, set -5, indicating that the AC side will charge the battery with a power of -5kW, due to the loss of the inverter, the power on the DC side will be less than the power on the AC side.
    For example, set 5, indicating that the AC side will be 5kW power output, due to the loss of the inverter, the DC side of the power will be greater than the AC side of the power.</source>
        <translation type="vanished">    这是交流侧功率设置，可通过修改该项的值来控制交流侧对电池的充放功率；当高级设置控制功率方式选择恒功率模式(CP_N&amp;P)时，正值表示放电，负值表示充电。比如设置-5，表示交流侧将以 -5kW 的功率给电池充电，由于逆变器的损耗，此时直流侧的功率将小于交流侧的功率；比如设置 5 ，表示交流侧将以 5kW 的功率输出，由于逆变器的损耗，此时直流侧的功率将大于交流侧的功率。</translation>
    </message>
    <message>
        <source>Charge</source>
        <translation type="vanished">充电</translation>
    </message>
    <message>
        <source>Reserve.</source>
        <translation type="vanished">保留。</translation>
    </message>
    <message>
        <source>Manual</source>
        <translation type="vanished">手动</translation>
    </message>
    <message>
        <source>    The power factor Pf can be modified. The power factor is equal to the ratio of active power and reactive power. Positive value indicates reactive power lead and negative value indicates reactive power lag.
    The power factor is a coefficient used to measure the output efficiency of electrical equipment, and the power factor is equal to the ratio of active power to reactive power. When the output reactive power factor is selected in the advanced settings &apos;system Settings&apos; page, this output power factor can be modified to control the output of active power and reactive power.</source>
        <translation type="vanished">    此项可以修改功率因素Pf，功率因素等于有功功率和无功功率的比值，正值代表无功超前，负值代表无功滞后。
    功率因数是用来衡量电气设备输出效率高低的一个系数，功率因素等于有功功率和无功功率的比值，当高级设置“系统设置”页面的输出无功方式选择功率因素时，可修改此项输出功率因素，控制有功功率和无功功率的输出。</translation>
    </message>
    <message>
        <source>    This parameter can change the reactive power Q, positive value indicates reactive power lead, negative value indicates reactive power lag.</source>
        <translation type="vanished">    此项可以修改无功功率Q，正值代表无功超前，负值代表无功滞后。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3284"/>
        <source>100</source>
        <translation>100</translation>
    </message>
    <message>
        <source>    When the control power mode of the advanced Settings page is set to constant current (CC), modify the constant current value, then the machine will charge and discharge the battery with the current value, positive value represents discharge, negative value represents charging.</source>
        <translation type="vanished">    当高级设置“功能设置”页面的控制功率方式选择恒流(CC)时，修改恒流值，此时机器将以该电流值给电池充放电，正值代表放电，负值代表充电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3289"/>
        <source>600</source>
        <translation>600</translation>
    </message>
    <message>
        <source>    When the control power mode of the Advanced Settings &apos;Function Settings&apos; page is set to constant voltage (CV), modify the constant voltage value, the machine will operate at a constant voltage value, and the machine will be used as a constant voltage source.</source>
        <translation type="vanished">    当高级设置“功能设置”页面的控制功率方式选择恒压(CV)时，修改恒压值，机器将以恒压值进行运行，此时机器将作为一个恒压源。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3296"/>
        <source>Local</source>
        <translation>本地</translation>
    </message>
    <message>
        <source>    This is the control mode;If the local mode is selected, the dispatcher (EMS, RS485) can only monitor data but cannot control PCS. If the remote mode is selected,PCS parameter setting is disabled and the dispatcher (EMS,  RS485) can read and write data.</source>
        <translation type="vanished">    这是控制模式；选择本地模式时，调度机（EMS、RS485等）只能监听数据，不能控制PCS，选择远程模式时，PCS禁止参数设置，调度机（EMS、RS485等）可进行读写。</translation>
    </message>
    <message>
        <source>Master_00</source>
        <translation type="vanished">Master_00</translation>
    </message>
    <message>
        <source>    This is the device number, and you can choose host(Master) or slave(Slave), where master is Master_00 and Slave_01 to Slave_08 are slaves.</source>
        <translation type="vanished">    这是设备号，可以选择主机(Master)或者从机(Slave)，其中主机为Master_00，其余八项Slave_01 ~Slave_08均为从机。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3306"/>
        <source>Parallel</source>
        <translation>并机</translation>
    </message>
    <message>
        <source>    This is to Enable the run time function. Two options are available: Enable and Disable.</source>
        <translation type="vanished">    这是运行时段使能，有两项可选：使能(Enable)，禁止(Disable)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3322"/>
        <source>MPPT</source>
        <translation>MPPT</translation>
    </message>
    <message>
        <source>This is the working mode of &apos;DC&apos; module, which has four states: Rest (Rest), constant voltage (CV), constant current (CC) and tracking optimal power point (MPPT).</source>
        <translation type="vanished">这是&apos;DC&apos;模块的工作模式，有休息(Rest)、恒压(CV)、恒流(CC)、追踪最佳功率点(MPPT)四种状态。</translation>
    </message>
    <message>
        <source>This is the operation mode of &apos;DC&apos; module, which has three modes: Rest, Buck and Boost. It can be modified into Rest, Buck or Boost mode according to project requirements.</source>
        <translation type="vanished">这是&apos;DC&apos;模块的运行模式，有休息(Rest)、降压(Buck)、升压(Boost)三种模式，可根据项目需求，修改成休息(Rest)、降压(Buck)或者升压(Boost)模式。</translation>
    </message>
    <message>
        <source>Discharging</source>
        <translation type="vanished">放电</translation>
    </message>
    <message>
        <source>This is the battery Charging and Discharging mode. There are two charging and discharging modes.</source>
        <translation type="vanished">这是电池充放电模式，有充电(Charging)，放电(Discharging)两种模式。</translation>
    </message>
    <message>
        <source>50</source>
        <translation type="vanished">50</translation>
    </message>
    <message>
        <source>This is the capacity of the &apos;DC&apos; module.</source>
        <translation type="vanished">这是&apos;DC&apos;模块的容量。</translation>
    </message>
    <message>
        <source>LowSide</source>
        <translation type="vanished">低压侧</translation>
    </message>
    <message>
        <source>This is the position of the current battery, which needs to be selected according to the operation mode of the &apos;DC&apos; module currently selected. If Buck is selected, select the LowSide. If Boost is selected, select HightSide. If Rest is selected, please select NON.</source>
        <translation type="vanished">这是当前电池所处位置，需要根据当前选择的&apos;DC&apos;模块运行模式来进行选择；如果选择了降压(Buck)，请选择低压侧(LowSide)；如果选择了升压(Boost)，请选择高压侧(HightSide)；如果选择了休息(Rest)，请选择无(NON)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3352"/>
        <source>300</source>
        <translation>300</translation>
    </message>
    <message>
        <source>This is the voltage level of the &apos;DC&apos; module.</source>
        <translation type="vanished">这是&apos;DC&apos;模块的电压等级。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3358"/>
        <source>60</source>
        <translation>60</translation>
    </message>
    <message>
        <source>This is the current value of the &apos;DC&apos; module.</source>
        <translation type="vanished">这是&apos;DC&apos;模块的电流值。</translation>
    </message>
    <message>
        <source>DOD_OnGrid</source>
        <translation type="vanished">并网DOD</translation>
    </message>
    <message>
        <source>Grid-connected DOD, the depth of discharge allowed in grid-connected mode.</source>
        <translation type="vanished">并网DOD，并网模式下允许的放电深度。</translation>
    </message>
    <message>
        <source>DOD_OffGrid</source>
        <translation type="vanished">离网DOD</translation>
    </message>
    <message>
        <source>Off-network DOD: Discharge depth allowed in off-network mode.</source>
        <translation type="vanished">离网DOD，离网模式下允许的放电深度。</translation>
    </message>
    <message>
        <source>Charge_Vol_Up_Limit</source>
        <translation type="vanished">充电电压上限</translation>
    </message>
    <message>
        <source>This is the upper limit of the charging voltage. When the total battery voltage reaches this value during charging, the PCS will enter the constant voltage mode to prevent the battery from overcharging.</source>
        <translation type="vanished">充电电压上限，当充电时电池总电压达到这个值时，PCS将会进入到恒压模式，防止电池过充。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3393"/>
        <source>Charge Volt upper Limit delta</source>
        <translation>充电电压上限回差</translation>
    </message>
    <message>
        <source>Upper return difference of charging voltage: When the total battery voltage reaches the upper limit of charging voltage during battery charging, the constant voltage mode is removed when the total battery voltage is lower than the upper limit of charging voltage minus the return difference.</source>
        <translation type="vanished">充电电压上限回差，当电池充电时，电池总压达到充电电压上限时，进入恒压模式后，如果电池总压低于充电电压上限减去该回差值时，解除恒压模式。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3400"/>
        <source>Disc_Vol_lower_Limit</source>
        <translation>放电电压下限</translation>
    </message>
    <message>
        <source>Lower limit of discharge voltage. When the total battery voltage reaches this value during discharge, MPS will enter the constant voltage mode to prevent battery overdischarge.</source>
        <translation type="vanished">放电电压下限，当放电时电池总电压达到这个值时，PCS将会触发电池电压低告警，PCS关机，防止电池过放。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3407"/>
        <source>Discharge Volt upper Limit delta</source>
        <translation>放电电压下限回差</translation>
    </message>
    <message>
        <source>When the battery is discharging and the total voltage of the battery reaches the lower limit of the discharge voltage, MPS enters the constant voltage mode. When the total voltage of the battery rises to the lower limit of the discharge voltage and the return difference value is added, the constant voltage mode is removed.</source>
        <translation type="vanished">放电电压下限回差，当电池放电时，电池总压达到放电电压下限时，MPS进入恒压模式后，如果电池总压回升到放电电压下限加上该回差值时，解除恒压模式。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3414"/>
        <source>Charge Current Limit</source>
        <translation>充电电流限制</translation>
    </message>
    <message>
        <source>Upper limit of charging current, which is the maximum current allowed on the DC side of PCS to prevent charging overcurrent.</source>
        <translation type="vanished">充电电流上限，这是PCS直流侧允许的最大电流，防止充电过流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3421"/>
        <source>Discharge Current Limit</source>
        <translation>放电电流限制</translation>
    </message>
    <message>
        <source>The upper limit of discharge current, which is the maximum current allowed to discharge on the DC side of PCS to prevent discharge from overcurrent.</source>
        <translation type="vanished">放电电流上限，这是PCS直流侧允许放电的最大电流，防止放电过流。</translation>
    </message>
    <message>
        <source>Gen_turn_off_SOC</source>
        <translation type="vanished">柴发关闭SOC</translation>
    </message>
    <message>
        <source>When the specified SCO value is reached, the diesel generator shuts down.</source>
        <translation type="vanished">达到指定SOC时，柴油发电机关闭。</translation>
    </message>
    <message>
        <source>Gen_turn_on_SOC</source>
        <translation type="vanished">柴发开启SOC</translation>
    </message>
    <message>
        <source>When the specified SOC value is reached, the diesel generator starts.</source>
        <translation type="vanished">达到指定SOC时，柴油发电机开启。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3496"/>
        <source>Capacity, the capacity of the lead-acid battery.</source>
        <translation>容量，铅酸电池的容量大小。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3500"/>
        <source>Cell_number_2V</source>
        <translation>电池节数（2V）</translation>
    </message>
    <message>
        <source>Generator shutdown voltage.</source>
        <translation type="vanished">发电机关闭电压。</translation>
    </message>
    <message>
        <source>Generator opening voltage.</source>
        <translation type="vanished">发电机开启电压。</translation>
    </message>
    <message>
        <source>Off-grid discharge cut-off voltage.</source>
        <translation type="vanished">离网放电截止电压。</translation>
    </message>
    <message>
        <source>Grid-connected discharge cut-off voltage.</source>
        <translation type="vanished">并网放电截止电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3591"/>
        <source>End time: The system stops automatically running when the system reaches this time.</source>
        <translation>结束时间：系统到达此时间后停止自动运行。</translation>
    </message>
    <message>
        <source>This is the function that will perform this function during business hours, there are six to choose from, They are System for self-use, battery Batter priority, Peak shaving, Output PV power,Economic model.</source>
        <translation type="vanished">这是功能，将在工作时间执行此功能，有六种可供选择，分别是自发自用、电池优先、削峰填谷、跟随PV功率、经济模式。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3598"/>
        <source>In the peak shaving and valley filling mode, select &apos;Peak price&apos; periods,&apos;Flat price&apos; periods and &apos;Valley price&apos; periods based on electricity prices.</source>
        <translation>在削峰填谷模式下，根据电价选择‘峰’时段、‘平’时段‘谷’时段。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4507"/>
        <source>Today&apos;s photovoltaic power generation.</source>
        <translation>光伏今日的发电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4511"/>
        <source>Monthly photovoltaic power generation.</source>
        <translation>光伏今月的发电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4515"/>
        <source>Annual photovoltaic power generation.</source>
        <translation>光伏今年的发电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4519"/>
        <source>Total photovoltaic power generation.</source>
        <translation>光伏总发电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4525"/>
        <source>Daily load electricity consumption </source>
        <translation>负载日用电量 </translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4526"/>
        <source>Today&apos;s electricity consumption of the load.</source>
        <translation>负载今月的用电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4529"/>
        <source>Monthly load electricity consumption</source>
        <translation>负载月用电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4530"/>
        <source>Monthly electricity consumption of the load.</source>
        <translation>负载今月的用电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4533"/>
        <source>Annual load electricity consumption</source>
        <translation>负载年用电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4534"/>
        <source>Annual electricity consumption of the load.</source>
        <translation>负载今年的用电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4537"/>
        <source>Total load electricity consumption</source>
        <translation>负载总用电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4538"/>
        <source>Total electricity consumption of the load.</source>
        <translation>负载总用电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4545"/>
        <source>Today&apos;s battery charging.</source>
        <translation>电池今日的充电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4549"/>
        <source>Monthly battery charging.</source>
        <translation>电池今月的充电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4553"/>
        <source>Annual battery charging.</source>
        <translation>电池今年的充电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4557"/>
        <source>Total battery charging.</source>
        <translation>电池总充电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4564"/>
        <source>Today&apos;s battery discharging.</source>
        <translation>电池今日的放电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4568"/>
        <source>Monthly battery discharging.</source>
        <translation>电池今月的放电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4572"/>
        <source>Annual battery discharging.</source>
        <translation>电池今年的放电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4576"/>
        <source>Total battery discharging.</source>
        <translation>电池总放电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4582"/>
        <source>Grid buy Day</source>
        <translation>电网日购电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4586"/>
        <source>Grid buy Month</source>
        <translation>电网月购电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4590"/>
        <source>Grid buy Year</source>
        <translation>电网年购电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4594"/>
        <source>Grid buy Total</source>
        <translation>电网总购电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4601"/>
        <source>Grid sell Day</source>
        <translation>电网日卖电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4605"/>
        <source>Grid sell Month</source>
        <translation>电网月卖电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4609"/>
        <source>Grid sell Year</source>
        <translation>电网年卖电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4613"/>
        <source>Grid sell Total</source>
        <translation>电网总卖电量</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4623"/>
        <source>0 represents an alarm event, and this item will turn red. 1 represents a status event.</source>
        <translation>0表示告警事件，且此项会变红，1表示状态事件。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4625"/>
        <source>Event start time.</source>
        <translation>事件开始时间。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4627"/>
        <source>Event end time: &apos;... &apos;indicates that there is no end time,&apos;-&apos; indicates that the event is in progress.</source>
        <translation>事件结束时间：表示这条记录的结束时间，&apos;...&apos;表示无结束时间,&apos;-&apos;表示事件正在进行。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4629"/>
        <source>event description</source>
        <translation>事件描述</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4630"/>
        <source>event description.</source>
        <translation>事件描述。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4633"/>
        <source>Converter Standby.</source>
        <translation>变换器待机</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4634"/>
        <source>The grid contactor connected</source>
        <translation>电网接触器闭合</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4635"/>
        <source>The grid breaker connected</source>
        <translation>电网断路器闭合</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4636"/>
        <source>The output breaker connected</source>
        <translation>输出断路器闭合</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4637"/>
        <source>Buck not softened</source>
        <translation>低压侧未软起</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4638"/>
        <source>Contactor off buck</source>
        <translation>低压侧接触器断开</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4640"/>
        <source>The grid breaker disconnected</source>
        <translation>电网断路器断开</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5238"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation>柴发模式下，饱和区和均衡区的交流侧功率参考值。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5243"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation>柴发模式下，放空区的交流侧功率参考值。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5248"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation>电网模式下，饱和区和均衡区的交流侧功率参考值。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5253"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation>电网模式下，放空区的交流侧功率参考值。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5258"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation>均衡区限制系统对电网侧的放电功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5263"/>
        <source>The discharge zone limits the discharge power of the system to the power grid side.</source>
        <translation>放空区限制系统对电网侧的放电功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5387"/>
        <source>Grid restoration time: reserved function, setting invalid.</source>
        <translation>电网恢复并网：预留功能，设置无效。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6102"/>
        <source>Rotate to display the status of each online DCDC module.</source>
        <translation>轮流显示每个在线DCDC模块状态。</translation>
    </message>
    <message>
        <source>When you select DCDC, the DCAC interface freezes, and the maximum module ID and minimum module ID take effect.(Note: You can only modify the database to restore the DCAC interface.)As per factory settings, generally not modifiable.</source>
        <translation type="vanished">选择DCDC时界面冻结，最大模块号和最小模块号生效，只能修改数据库以恢复DCAC界面。（注：以出厂设置为准，一般不可修改）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1789"/>
        <location filename="../mywidget.cpp" line="4943"/>
        <source>Record Event</source>
        <translation>事件记录</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1789"/>
        <location filename="../mywidget.cpp" line="4941"/>
        <source>Modification Time</source>
        <translation>修改时间</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8378"/>
        <location filename="../mywidget.cpp" line="3260"/>
        <source>Grid conected mode of the converter </source>
        <translation>变流器并网方式 </translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3261"/>
        <source>When &quot;Auto&quot; is selected, the converter will automatically switch between grid-on and grid-off. When the grid side is normal, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter operates in grid-off mode (VF).
When &quot;Grid-on&quot; is selected, the converter operates in grid-on mode (PQ).When the grid side is abnormal, the converter will shut down.
When &quot;Grid-off&quot; is selected, the converter operates in grid-off mode (VF).</source>
        <translation>选择“自动”时，自动切换并离网，当电网侧电压正常时，变流器处于并网模式(PQ);电网失电时，变流器处于离网模式(VF).
选择“并网”时，变流器处于并网模式(PQ);如果电网失电，变流器将关机。
选择“离网”时，变流器处于离网模式(VF).</translation>
    </message>
    <message>
        <source>AC Side Power: You can control the charging and discharging power of the battery from the AC side by modifying this value. When the advanced setting for power control mode is set to Constant Power mode (CP_N&amp;P), a positive value indicates discharging, and a negative value indicates charging.
For example, setting it to -5 means that the AC side will charge the battery at a power of -5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.</source>
        <translation type="vanished">交流侧功率：可通过修改该项的值来控制交流侧对电池的充放功率;当高级设置控制功率方式选择恒功率模式(CP_N&amp;P)时，正值表示放电，负值表示充电。
例如，设置-5，表示交流侧将以-5kW的功率给电池充电，由于逆变器的损耗，此时直流侧的功率将小于交流侧的功率;比如设置5，表示交流侧将以5kW的功率输出，由于逆变器的损耗，此时直流侧的功率将大于交流侧的功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3269"/>
        <source>Batter
priority</source>
        <translation>电池优先</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3275"/>
        <source>This item can modify the power factor, where the power factor is equal to the ratio of active power to apparent power. A positive value indicates leading reactive power, while a negative value indicates lagging reactive power.</source>
        <translation>此项可以修改功率因素Pf，功率因素等于有功功率和视在功率的比值，正值代表无功超前，负值代表无功滞后。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3280"/>
        <source>This parameter can change the reactive power Q, positive value indicates leading reactive power, negative value indicates lagging reactive power.</source>
        <translation>此项可以修改无功功率Q，正值代表无功超前，负值代表无功滞后。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3285"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant current and modify the current value. Converter will charge or discharge the battery with this current value. Positive values represent discharging, while negative values represent charging.</source>
        <translation>进入高级设置的功能设置界面，在控制功率方式选择：恒流(CC)，修改恒流值，此时机器将以该电流值给电池充放电，正值代表放电，负值代表充电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3290"/>
        <source>Enter the advanced settings interface and select the control power mode. Choose constant voltage and modify the voltage value. Converter will operate at the constant voltage value and function as a constant voltage source.</source>
        <translation>进入高级设置的功能设置界面的控制功率方式选择：恒压(CV)，修改恒压值，机器将以恒压值进行运行，此时机器将作为一个恒压源。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3297"/>
        <source>Local: Converter control through HMI, In this mode, the EMS can only read and cannot write.
Remote: In remote mode, the EMS can perform both read and write control.</source>
        <translation>本地:通过HMI控制变流器，EMS在该模式下只能读不能写;
远程:EMS可以进行读写控制。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3301"/>
        <source>M_01</source>
        <translation>M_01</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3302"/>
        <source>Device number: You can set ID number, which can be set within the range of M_01 to M_12.</source>
        <translation>设备号：可以设置设备标识号，可设置范围为M_01~M_12。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3307"/>
        <source>Parallel operation: When converter operates at grid-off mode in parallel, this item needs to be enabled.</source>
        <translation>并机:多台设备离网并机时，此项需设为使能。</translation>
    </message>
    <message>
        <source>Hybrid Mode Enable</source>
        <translation type="vanished">混合模式使能</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6017"/>
        <source>Hybrid mode: When the function of running according to the schedule is enabled, this option is enabled.</source>
        <translation>混合模式:按时段运行表的功能运行时，此项使能。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4944"/>
        <source>System settings operation records.</source>
        <translation>系统设置的操作记录。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1563"/>
        <location filename="../mywidget.cpp" line="3352"/>
        <source>DC CV Value</source>
        <translation>DC恒压值</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1563"/>
        <location filename="../mywidget.cpp" line="3358"/>
        <source>DC CC Value</source>
        <translation>DC恒流值</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <location filename="../mywidget.cpp" line="3599"/>
        <source>Peak-Flat-Valley</source>
        <translation>峰-平-谷</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1653"/>
        <source>Power(kW)</source>
        <translation>功率（kW）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3250"/>
        <source>DCDC module operation modes states: OFF, Standby, Constant Voltage, Constant Current, MPPT.</source>
        <translation>DCDC模块工作模式状态:关闭、待机、恒压、恒流、MPPT。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3266"/>
        <source>AC Side Power: You can control the charging and discharging power of the battery from the AC side by modifying this value. When the advanced setting for power control mode is set to Constant Power mode (CP_AC), a positive value indicates discharging, and a negative value indicates charging.
For example, setting it to -5 means that the AC side will charge the battery at a power of -5 kW. Due to converter losses, the DC side power will be lower than the AC side power in this case. Setting it to 5 means that the AC side will output power at 5 kW. Due to converter losses, the DC side power will be higher than the AC side power in this case.</source>
        <translation>交流侧功率：可通过修改该项的值来控制交流侧对电池的充放功率;当高级设置控制功率方式选择恒功率模式(CP_AC)时，正值表示放电，负值表示充电。
例如，设置-5，表示交流侧将以-5kW的功率给电池充电，由于逆变器的损耗，此时直流侧的功率将小于交流侧的功率;比如设置5，表示交流侧将以5kW的功率输出，由于逆变器的损耗，此时直流侧的功率将大于交流侧的功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3323"/>
        <source>DCDC module working modes include standby, constant voltage (CV), constant current (CC), and maximum power point tracking (MPPT).</source>
        <translation>DCDC模块工作模式，有待机、恒压、恒流、追踪最佳功率点四种状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3328"/>
        <source>DCDC module operating modes: Buck, Boost.</source>
        <translation>DCDC模块运行模式：降压(Buck)、升压(Boost)。</translation>
    </message>
    <message>
        <source>DC CV value</source>
        <translation type="vanished">DC恒压值</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3353"/>
        <source>DC Constant Voltage Value: Constant voltage target, range 200V-850V.</source>
        <translation>DC恒压值：恒压目标电压，范围200V-850V。</translation>
    </message>
    <message>
        <source>DC CC value</source>
        <translation type="vanished">DC恒流值</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3359"/>
        <source>DC Constant Current Value: Constant current target, range (0A - 120A) * n (n is the number of online modules).</source>
        <translation>DC恒流值：恒流目标电流，范围（0A - 120A）*n（n为在线模块数）。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3369"/>
        <source>Grid-on DOD</source>
        <translation>并网DOD</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3370"/>
        <source>Grid-on DOD, allowable depth of discharge in grid-on mode.</source>
        <translation>并网DOD，并网模式下允许的放电深度。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3375"/>
        <source>Grid-off DOD</source>
        <translation>离网DOD</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3376"/>
        <source>Grid-off DOD, allowable depth of discharge in grid-off mode.</source>
        <translation>离网DOD，离网模式下允许的放电深度。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3380"/>
        <source>DOD Protection Release SOC</source>
        <translation>DOD保护解除SOC</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3381"/>
        <source>DOD Protection Release SOC: When the DOD protection is activated, the current SOC reaches the set SOC value, and the DOD protection is released, allowing the battery to continue discharging.</source>
        <translation>DOD保护解除SOC：DOD保护时，当前SOC达到该设定SOC后解除DOD保护，允许电池继续放电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3386"/>
        <source>Charging voltage upper limit</source>
        <translation>充电电压上限</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3387"/>
        <source>Charging voltage upper limit: When the battery total voltage reaches this value during charging, the converter will shut down.</source>
        <translation>充电电压上限：充电时电池总电压达到这个值，变流器将关机。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3394"/>
        <source>Charging voltage upper limit hysteresis: When the battery is charging, if the battery total voltage reaches the charging voltage upper limit, the converter will shut down. When the battery total voltage drops below the charging voltage upper limit minus the hysteresis value, the converter will automatically turn on.</source>
        <translation>充电电压上限回差：电池充电时，电池总压达到充电电压上限后，变流器将关机。电池总压低于充电电压上限减去回差值时，变流器自动开机。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3401"/>
        <source>Discharge voltage lower limit: When the battery total voltage reaches this value during discharge, the converter will shut down.</source>
        <translation>放电电压下限：放电时电池总电压低于这个值，变流器将关机。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3408"/>
        <source>Discharge voltage lower limit hysteresis: When the battery is discharging, if the battery total voltage drops below the discharge voltage lower limit, the converter will shut down. When the battery total voltage exceeds the discharge voltage lower limit plus the hysteresis value, the converter will automatically turn on.</source>
        <translation>放电电压下限回差：电池放电时，电池总压低于放电电压下限后，变流器将关机。电池总压高于放电电压下限加上回差值时，变流器自动开机。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3415"/>
        <source>Charging current limit: The maximum allowable current on the battery side to prevent overcurrent during charging.</source>
        <translation>充电电流限制：电池侧允许的最大电流，防止充电过流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3422"/>
        <source>Discharging current limit: The maximum allowable current on the battery side to prevent overcurrent during discharging.</source>
        <translation>放电电流限制：电池侧允许的最大电流，防止放电过流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3437"/>
        <source>Generator turn off SOC</source>
        <translation>柴发停止SOC</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3438"/>
        <source>When the specified SOC is reached, the diesel generator shuts down.</source>
        <translation>达到指定SOC时，柴油发电机关闭。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3443"/>
        <source>Generator turn on SOC</source>
        <translation>柴发启动SOC</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3444"/>
        <source>When the specified SOC is reached, the diesel generator starts.</source>
        <translation>达到指定SOC时，柴油发电机开启。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3448"/>
        <source>Cell Voltage max</source>
        <translation>单体最高电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3449"/>
        <source>Charging is prohibited when the highest single cell voltage reaches this value to prevent overcharging.</source>
        <translation>最高单体电压达到该值时禁止充电，以防止过充。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3453"/>
        <source>Cell Voltage max delta</source>
        <translation>最高单体电压回差</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3454"/>
        <source>After triggering the protection for the highest single cell voltage, charging is resumed when the current highest single cell voltage falls below this value.</source>
        <translation>触发最高单体电压保护后，当前最高单体电压低于该值时解除禁充。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3458"/>
        <source>Cell Voltage min</source>
        <translation>单体最低电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3459"/>
        <source>Discharging is prohibited when the lowest single cell voltage reaches this value to prevent over-discharging..</source>
        <translation>最低单体电压达到该值时禁止放电，以防止过放。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3463"/>
        <source>Cell Voltage min delta</source>
        <translation>最低单体电压回差</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3464"/>
        <source>After triggering the protection for the lowest single cell voltage, discharging is resumed when the current lowest single cell voltage exceeds this value.</source>
        <translation>触发最低单体电压保护后，当前最低单体电压高于该值时解除禁放。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3469"/>
        <source>Force Charge On</source>
        <translation>强充开启</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3470"/>
        <source>Forced Charging On: When the cell voltage drops below this value, the converter switches to Battery Priority Mode, and the AC side charges the battery with a power of 10kW.</source>
        <translation>强充开启：单体电池最低电压低于该值时，先切换成电池优先模式，交流侧将以10kw功率给电池充电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3475"/>
        <source>ForceCharge Off</source>
        <translation>强充结束</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3476"/>
        <source>Forced Charging Off: When the cell voltage exceeds this value, the converter exits Battery Priority Mode and returns to the mode before Forced Charging was enabled.</source>
        <translation>强充结束：单体电池最高电压高于该值时，退出电池优先模式，回到强充前的模式.</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3480"/>
        <source>DCAC cell protect</source>
        <translation>DCAC单体保护电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3481"/>
        <location filename="../mywidget.cpp" line="3485"/>
        <source>Reserved function, settings are invalid.</source>
        <translation>预留功能，设置无效。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3484"/>
        <source>DCAC cell delta</source>
        <translation>DCAC单体保护电压回差</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3501"/>
        <source>The number of battery cells connected in series in the battery stack (based on a 2V unit).</source>
        <translation>电池堆串联单体的的数量（以2V为基准）。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3516"/>
        <source>Charging Current Limit: The maximum allowable current on the battery side to prevent overcurrent during charging. (Upper limit: 0.25C)</source>
        <translation>充电电流限制：电池侧允许的最大电流，防止充电过流。（上限0.25C）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3521"/>
        <source>Discharge Current Limit: The maximum allowable current on the battery side to prevent overcurrent during discharge. (Upper limit: 0.5C)</source>
        <translation>放电电流限制：电池侧允许的最大电流，防止放电过流。（上限0.5C）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3526"/>
        <source>Generator Shutdown Voltage: When the specified voltage is reached, the diesel generator will shut down.</source>
        <translation>发电机关闭电压：达到指定电压时，柴油发电机关闭。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3531"/>
        <source>Generator Start Voltage: When the specified voltage is reached, the diesel generator will start up.</source>
        <translation>发电机开启电压：达到指定电压时，柴油发电机开启。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3535"/>
        <source>Grid-off EOD</source>
        <translation>离网EOD</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3536"/>
        <source>Grid-off discharge cut-off voltage.</source>
        <translation>离网放电截止电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3540"/>
        <source>Grid-on EOD</source>
        <translation>并网EOD</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3541"/>
        <source>Grid-on discharge cut-off voltage.</source>
        <translation>并网放电截止电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3571"/>
        <source>Uniform charging to flushing current: Upper limit of 0.025C.</source>
        <translation>均充转浮充：上限为0.025C。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3576"/>
        <source>Float turn to uniform charging current: Upper limit of 0.15C.</source>
        <translation>浮充转均充：上限为0.15C。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3593"/>
        <source>Working Power: Only effective in peak shaving mode. Positive values indicate discharging, while negative values indicate charging.</source>
        <translation>工作功率：只在削峰填谷模式下生效，正数为放电，负数为充电。</translation>
    </message>
    <message>
        <source>Set the communication mode between the battery, RS485 or CAN communication or Ethernet can be selected according to the situation.
(Note: Since there is only one port for both CAN port and Ethernet port, battery communication mode and EMS communication mode cannot be selected as &quot;CAN&quot; or &quot;Ethernet&quot; at the same time)</source>
        <translation type="vanished">设置与电池之间的通信方式，可根据情况选择RS485(RS485)或CAN通信(CAN)或以太网(Ethernet)。
（备注：由于CAN端口和以太网都只有一个端口，因此电池通讯方式和EMS通讯方式不可同时选“CAN”或“以太网”）</translation>
    </message>
    <message>
        <source>Set the control power mode, including constant voltage (CV), constant current (CC), constant power (CP_P), and positive and negative power (CP_N&amp;P).
If constant voltage (CV) mode is selected, the converter will operate in constant voltage mode.
If constant current (CC) mode is selected, the converter will operate in constant current mode.
If you choosepositive and negative power (CP_N&amp;P) mode: you can set the power size at &apos;constant power&apos;, the value is the size of the power size, positive for discharge, negative for charging.
Constant power (CP_P) : This function is reserved and the selection is invalid.</source>
        <translation type="vanished">如果选择恒压(CV)模式，变流器将以恒压模式运行。
如果选择恒流(CC)模式，变流器将以恒流模式运行。
如果选择正负功率(CP_N&amp;P)模式:可以在′恒功率&apos;处设置功率大小，数值为大小为功率大小，正值为放电，负值为充电。
恒功率（CP_P）：该功能保留，选择无效。</translation>
    </message>
    <message>
        <source>Battery Protocol: This is the battery protocol that parses the packets sent by the BMS according to the selected battery protocol.
Currently, the following battery manufacturer protocols are supported: MEGA, LISHEN, PENGHUI, GOLD, BMSER, LANLI, SHENLAN, PAINENG, NINGDESHIDAI, SUOYING, XINGWANGDA, KUBO, GAOTE_V2, TOGOOD,PGS, WOBO, KGOOER, LIDE, PAINENG_L, WEILAN, ALPHA, TUOPU, JIEHUI, JDI, ECUBE, FARO, BGS, JDITEC, HUASU, LIGAO.
When you select AUTO, the system automatically determines the battery manufacturer.</source>
        <translation type="vanished">    电池协议：这是电池协议，根据选择的电池协议解析BMS发送的报文。
    目前支持选择的电池厂家协议为：MEGA、LISHEN、PENGHUI、GOLD、BMSER、LANLI、SHENLAN、PAINENG、NINGDESHIDAI、SUOYING、XINGWANGDA、KUBO、GAOTE_V2、TOGOOD、PGS、WOBO 、KGOOER 、LIDE、 PAINENG_L 、WEILAN 、ALPHA 、TUOPU、 JIEHUI、 JDI 、ECUBE、FARO、 BGS 、JDITEC 、HUASU、 LIGAO。
    选择AUTO时将自动判断电池厂家协议。</translation>
    </message>
    <message>
        <source>This is the device address. The default value is 1 and the adjustable range is 1 to 255. It is used to match the host address during EMS communication, and use 485 to change the slave address.</source>
        <translation type="vanished">这是设备地址，默认值为1，可调范围在1~255之间，用于EMS通信时匹配主机地址，使用485改从机地址。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3428"/>
        <source>Follow
battery</source>
        <translation>跟随电池</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3429"/>
        <source>When the battery SOC is below the selected value, there are four options: Follow battery, 95%, 90%, 85%.</source>
        <translation>电池SOC低于选择值时解除禁充，有四项可选：跟随电池、95%、90%、85%.</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5195"/>
        <source>Protocol version: View the current protocol version. The default protocol version number is V1.0.</source>
        <translation>协议版本：查看当前协议版本,协议版本号默认为V1.0.</translation>
    </message>
    <message>
        <source>User PassPort</source>
        <translation type="vanished">用户密码</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5201"/>
        <source>User password: Available for resetting the user password. The default user password is 123456. (Note: The user password must be six digits.)</source>
        <translation>用户密码：可供重新设置用户密码，默认用户密码123456。(注：用户密码必须为六位数。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5207"/>
        <source>Admin password: Available for resetting the admin password. The default admin password is 888888. (Note: The admin password must be six digits.)</source>
        <translation>高级设置密码：可供重新设置高级设置密码，默认高级设置密码888888。(注：高级设置密码必须为六位数。)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5227"/>
        <source>Bms Com. Fault Time</source>
        <translation>BMS通信故障判定时间</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5228"/>
        <source>BMS communication fault determination time: The BMS communication fault determination time refers to the BMS communication fault when the BMS communication is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation>BMS通信故障判定时间：BMS通信故障判定时间是指当BMS通信断开，并经过预设的一段时间后仍未恢复正常通信时，将判定为BMS通信故障。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5232"/>
        <source>120</source>
        <translation>120</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5232"/>
        <source>EMS Com. Fault Model</source>
        <translation>EMS通信故障判定时间</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5233"/>
        <source>EMS communication fault determination time: The EMS communication fault determination time refers to the time when the communication between the EMS is disconnected and the communication is not recovered after a preset period of time.</source>
        <translation>EMS通信故障判定时间：EMS通信故障判定时间是指当EMS通信断开，并经过预设的一段时间后仍未恢复正常通信时，将判定为EMS通信故障。</translation>
    </message>
    <message>
        <source>Insulation detection Enable, insulation resistance greater than 33KΩ to be able to operate normally, less than 33KΩ can not start, and to alarm, the default prohibition, the choice is to Enable, prohibit.</source>
        <translation type="vanished">绝缘检测使能，绝缘电阻大于33KQ要能正常起机运行，小于33KQ不能起机，并且要告警，默认禁止,可供选择为允许(Enable)、禁止(prohibit)。</translation>
    </message>
    <message>
        <source>Set according to the machine model on site, the factory value prevails.</source>
        <translation type="vanished">根据现场机器型号设置，以出厂值为准。</translation>
    </message>
    <message>
        <source>Transformer Turns Ratio: Please refer to the factory nameplate for the turns ratio setting based on the built-in transformer. If any changes are required, please contact customer service for confirmation.</source>
        <translation type="vanished">变压器变比：根据内置变压器的变比设置，以出厂铭牌标识为准,如需更改，请联系客服确认。</translation>
    </message>
    <message>
        <source>Backup
Settings</source>
        <translation type="vanished">设置备份</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5429"/>
        <source>Backup Set Parameters</source>
        <translation>备份设置参数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5429"/>
        <source>Backup</source>
        <translation>备份</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5430"/>
        <source>Backup setting parameters: Backup setting parameters refers to backing up the parameters set on the current device so that the backup parameter Settings can be restored when needed.</source>
        <translation>备份设置参数：备份设置参数是指将当前设备设置的参数进行备份，以便在需要时可以恢复到这些备份的参数设置。 </translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5434"/>
        <source>Restore
Backup</source>
        <translation>恢复备份</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5434"/>
        <source>Restore Backup Set Parameters</source>
        <translation>恢复备份设置参数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5435"/>
        <source>Restore backup setting parameters: Restore backup setting parameters means to restore the device to the last backup setting parameters and restart the device.</source>
        <translation>恢复备份设置参数：恢复备份设置参数是指将设备恢复到上一次备份好的设置参数，并重新启动设备。</translation>
    </message>
    <message>
        <source>When you select DCDC, the DCAC interface freezes, and the maximum module ID and minimum module ID take effect. You can only modify the database to restore the DCAC interface.</source>
        <translation type="vanished">选择DCDC时界面冻结，最大模块号和最小模块号生效，只能修改数据库以恢复DCAC界面。</translation>
    </message>
    <message>
        <source>This is the maximum number of modules in the current system(Note: This takes effect only when DCDC mode is selected in rack Settings.).</source>
        <translation type="vanished">这是当前系统的最大模块数（备注：仅在机架设置中选择DCDC模式时生效）。</translation>
    </message>
    <message>
        <source>This is the minimum number of modules in the current system(Note: This takes effect only when DCDC mode is selected in rack Settings.).</source>
        <translation type="vanished">这是当前系统的最小模块数（备注：仅在机架设置中选择DCDC模式时生效）。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5930"/>
        <source>To view the data for the previous year.</source>
        <translation>查看上一年的数据。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5936"/>
        <source>To view the data for the next year.</source>
        <translation>查看下一年的数据。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5942"/>
        <source>To view the data of the previous month.</source>
        <translation>查看上个月的数据。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5948"/>
        <source>To view the data for the next month.</source>
        <translation>查看下一个月的数据。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5954"/>
        <source>To view the data of the previous day.</source>
        <translation>查看上一日的数据。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5960"/>
        <source>To view the data of the next day.</source>
        <translation>查看下一日的数据。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5966"/>
        <source>Export History Records, click here to export the history records to a U disk. The exported file will be named Record.csv, and it needs to be opened with Excel.</source>
        <translation>导出历史记录，点击此处将会导出历史记录到U盘里,导出到U盘的文件为Record.csv，此文件需要用Excel打开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5978"/>
        <source>Export the battery statistics. Click here to export the battery statistics to the U disk.
The accuracy is 0.1, which means that the obtained data multiplied by 0.1 gives the actual value.</source>
        <translation>导出电量统计表，点击此处将会导出电量统计表到U盘里。精度为0.1,即所得数据*0.1为实际的数值。</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8171"/>
        <location filename="../mywidget.cpp" line="5983"/>
        <source>Eject U disk</source>
        <translation>退出U盘</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5984"/>
        <source>Eject U disk.</source>
        <translation>退出U盘。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6067"/>
        <source>The switch to turn on the DCDC converter, click to activate the DCDC converter.</source>
        <translation>打开DCDC变流器的开关，单击后开启DCDC变流器。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6072"/>
        <source>The switch to turn off the DCDC converter, click to deactivate the DCDC converter.</source>
        <translation>关闭DCDC变流器的开关，单击后停用DCDC变流器。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6077"/>
        <source>The switch to turn on the DCAC converter, click to activate the DCAC converter.</source>
        <translation>打开DCAC变流器的开关，单击后开启DCAC变流器。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6082"/>
        <source>The switch to turn off the DCAC converter, click to deactivate the DCAC converter.</source>
        <translation>关闭DCAC变流器的开关，单击后停用DCAC变流器。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6097"/>
        <source>Display the current status of the DCAC converter.</source>
        <translation>显示当前DCAC变流器状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6102"/>
        <source>DCDC Module State</source>
        <translation>DCDC模块状态</translation>
    </message>
    <message>
        <source>Sequentially display the status of each DCDC module.</source>
        <translation type="vanished">轮流显示每个DCDC模块状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6150"/>
        <source>Time</source>
        <translation>时间</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6150"/>
        <source>Click here to modify the time displayed on the HMI.</source>
        <translation>点击此处，可以对HMI显示的时间进行修改。</translation>
    </message>
    <message>
        <source>Number of batteries, the number of lead-acid batteries.</source>
        <translation type="vanished">电池节数，一块铅酸电池的节数。</translation>
    </message>
    <message>
        <source>Charge_limiting_value</source>
        <translation type="vanished">充电限流值</translation>
    </message>
    <message>
        <source>Discharge_limiting_value</source>
        <translation type="vanished">放电限流值</translation>
    </message>
    <message>
        <source>Generator_turn_off_SOC_B1</source>
        <translation type="vanished">发电机关闭SOC</translation>
    </message>
    <message>
        <source>Generator_turn_on_SOC_A1</source>
        <translation type="vanished">发电机开启SOC</translation>
    </message>
    <message>
        <source>Grid_off_EOD</source>
        <translation type="vanished">离网EOD</translation>
    </message>
    <message>
        <source>Off-grid discharge terminal voltage, the voltage when the battery power is used up in the off-grid state, and the discharge stops when the battery voltage reaches this value.</source>
        <translation type="vanished">离网放电终点电压，离网状态下电池的电量用完时的电压，电池电压达到该值时停止放电。</translation>
    </message>
    <message>
        <source>Grid_on_EOD</source>
        <translation type="vanished">并网EOD</translation>
    </message>
    <message>
        <source>The terminal voltage of grid-connected discharge, the voltage when the battery power is used up in the grid-connected state, and the discharge stops when the battery voltage reaches this value.</source>
        <translation type="vanished">并网放电终点电压，并网状态下电池的电量用完时的电压，电池电压达到该值时停止放电。</translation>
    </message>
    <message>
        <source>Shutdown_voltage_point</source>
        <translation type="vanished">关机电压点</translation>
    </message>
    <message>
        <source>Shutdown voltage point. When the voltage is lower than this value, the device will shut down.</source>
        <translation type="vanished">关机电压点，电压低于该电压值时设备将会关机。</translation>
    </message>
    <message>
        <source>Mending_center_point</source>
        <translation type="vanished">温补中心</translation>
    </message>
    <message>
        <source>Temperature compensation center point, the battery in the state of floating charge, floating charge voltage can be compensated according to the temperature.</source>
        <translation type="vanished">温度补偿中心点，电池在浮充状态下，浮充电压可以根据温度进行补偿。</translation>
    </message>
    <message>
        <source>Temperature_filling_coefficient</source>
        <translation type="vanished">温补系数</translation>
    </message>
    <message>
        <source>Temperature compensation coefficient, the coefficient when temperature compensation is performed.</source>
        <translation type="vanished">温度补偿系数，进行温度补偿时的系数。</translation>
    </message>
    <message>
        <source>Mending_allowable_setting</source>
        <translation type="vanished">温补允许设置</translation>
    </message>
    <message>
        <source>Temperature compensation Allow setting, you can set whether to allow temperature compensation.</source>
        <translation type="vanished">温补允许设置，可设置是否允许进行温度补偿。</translation>
    </message>
    <message>
        <source>Temperature_alarm_upper_limit</source>
        <translation type="vanished">温度告警上限</translation>
    </message>
    <message>
        <source>Temperature Alarm upper limit. An alarm is generated when the battery temperature reaches this threshold.</source>
        <translation type="vanished">温度告警上限，电池温度达到该值时将会告警。</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8945"/>
        <source>Lead</source>
        <translation>铅酸</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3585"/>
        <source>Start_Time</source>
        <translation>开始时间</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3586"/>
        <source>End_Time</source>
        <translation>结束时间</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3589"/>
        <source>9:00</source>
        <translation>9:00</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3590"/>
        <source>10:00</source>
        <translation>10:00</translation>
    </message>
    <message>
        <source>This is the function that will perform this function during business hours, there are six to choose from, They are System for self-use, battery Batter priority, Peak shaving, Output PV power, Generator Trun on and Generator Trun off.</source>
        <translation type="vanished">这是功能，将在工作时间执行此功能，有六种可供选择，分别是自发自用（System for self-use）、电池优先（battery Batter priority）、削峰填谷（ Peak shaving）、跟随PV功率（Output PV power）、柴发开启（Generator Trun on）、柴发关闭（Generator Trun off）。</translation>
    </message>
    <message>
        <source>This is&apos; Enable &apos;, which will enable the specified state at the specified time with the specified power, and end at the specified time.</source>
        <translation type="vanished">这是&apos;使能&apos;，选择后将在指定的时间以指定的功率开启指定的状态，并在指定的时间结束。</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="8624"/>
        <location filename="../mywidget.cpp" line="5067"/>
        <source>Lithium</source>
        <translation>锂电</translation>
    </message>
    <message>
        <source>This is the function that will perform this function during business hours, there are six to choose from, They are System for self-use, battery Batter priority, Peak shaving, Output PV power.</source>
        <translation type="vanished">这是功能，将在工作时间执行此功能，有六种可供选择，分别是自发自用(System for self-use)、电池优先(battery Batter priority)、削峰填谷（Peak shaving).跟随PV功率(Output PV power).</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4583"/>
        <source>Today&apos;s electricity buy from the grid.</source>
        <translation>电网今日的购电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4587"/>
        <source>Monthly electricity buy from the grid.</source>
        <translation>电网今月的购电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4591"/>
        <source>Annual electricity buy from the grid.</source>
        <translation>电网今年的购电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4595"/>
        <source>Total electricity buy from the grid.</source>
        <translation>电网总购电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4602"/>
        <source>Today&apos;s electricity sell to the grid.</source>
        <translation>电网今日的卖电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4606"/>
        <source>Monthly electricity sell to the grid.</source>
        <translation>电网今月的卖电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4610"/>
        <source>Annual electricity sell to the grid.</source>
        <translation>电网今年的卖电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4614"/>
        <source>Total electricity sell to the grid.</source>
        <translation>电网总卖电量。</translation>
    </message>
    <message>
        <source>Choose the battery type according to the actual situation, there are two types of Lithium and LeadAcid to choose from.</source>
        <translation type="vanished">根据实际情况选择电池类型，有锂电(Lithium)和铅酸(LeadAcid)两种类型可供选择。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5074"/>
        <source>BMS Comm type</source>
        <translation>电池通信方式</translation>
    </message>
    <message>
        <source>Set the communication mode between the battery, RS485 or CAN communication or Ethernet can be selected according to the situation.</source>
        <translation type="vanished">设置与电池之间的通信方式，可根据情况选择RS485(RS485)或CAN通信(CAN)或以太网(Ethernet)。</translation>
    </message>
    <message>
        <source>Set the control power mode, including constant voltage (CV), constant current (CC), constant power (CP_P), and positive and negative power (CP_N&amp;P).
If constant voltage (CV) mode is selected, the converter will operate in constant voltage mode.
If constant current (CC) mode is selected, the converter will operate in constant current mode.
If you choose constant power (CP_P) or positive and negative power (CP_N&amp;P) mode: you can set the power size at &apos;constant power&apos;, the value is the size of the power size, positive for discharge, negative for charging.</source>
        <translation type="vanished">设置控制功率的方式，有恒压(CV)、恒流(CC)、恒功率(CP_P)、正负功率(CP_N&amp;P)。
如果选择恒压(CV)模式，变流器将以恒压模式运行。如果选择恒流(CC)模式，变流器将以恒流模式运行。如果选择恒功率(CP_P)或者正负功率(CP_N&amp;P)模式:可以在&apos;恒功率&apos;处设置功率大小，数值为大小为功率大小，正值为放电，负值为充电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5087"/>
        <source>EMS Comm type</source>
        <translation>EMS通讯方式</translation>
    </message>
    <message>
        <source>You CAN set the communication mode of the EMS, including RS485,CAN, and Ethernet. Select one communication mode that can be read and written remotely, and the other two communication modes can be read only.</source>
        <translation type="vanished">设置EMS的通信方式，有RS485(RS485),CAN通信(CAN)和以太网(Ethernet)三种方式，选中其中一种通信方式，该通信方式远程可读可写，其他两种通信方式仅可读。</translation>
    </message>
    <message>
        <source>HMI Limits the range of power Settings on the AC side.</source>
        <translation type="vanished">HMI限制交流侧功率设置值的范围。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5100"/>
        <source>Auto</source>
        <translation>自动</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5100"/>
        <source>BAT protocol</source>
        <translation>电池协议</translation>
    </message>
    <message>
        <source>This is the battery protocol that parses the packets sent by the BMS according to the selected battery protocol.</source>
        <translation type="vanished">这是电池协议，根据选择的电池协议解析BMS发送的报文。</translation>
    </message>
    <message>
        <source>This is the charging SOC. When the battery SOC is below 20%, the battery will start charging until the charging reaches the discharging SOC before allowing the battery to discharge again.</source>
        <translation type="vanished">这是充电SOC，当电池SOC低于20%时，电池将启动充电，直到充电达到放电SOC，才允许电池再次放电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5119"/>
        <source>Disharge SOC</source>
        <translation>充电SOC</translation>
    </message>
    <message>
        <source>This is the discharge SOC. When the battery SOC is lower than the charging SOC, after the battery starts charging, it will be charged to the discharge SOC (50%) before allowing the battery to discharge again.</source>
        <translation type="vanished">这是放电SOC，当电池SOC低于充电SOC，电池启动充电后，电池将充电至放电SOC(50%)时，才允许电池再次放电。</translation>
    </message>
    <message>
        <source>This is the maximum allowable input power of diesel generator, which shall not exceed the model capacity.</source>
        <translation type="vanished">这是柴油发电机的允许输入最大功率，不得超过机型容量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5132"/>
        <source>Bat&gt;Grid</source>
        <translation>电池&gt;电网</translation>
    </message>
    <message>
        <source>Energy priority: In automatic self-use mode, if you choose Battery &gt; power grid, the battery is preferred to power the load. If you choose Grid &gt; Battery, power is supplied to the power grid first.</source>
        <translation type="vanished">能量优先级：自发自用模式下，如果选择电池&gt;电网，则优先使用电池给负载供电；如果选择电网&gt;电池，则优先对电网给负载供电。</translation>
    </message>
    <message>
        <source>This is the device address, which defaults to 1 and can be adjusted from 1 to 255 to match the host address during EMS communication.</source>
        <translation type="vanished">这是设备地址，默认值为1，可调范围在1~255之间，用于EMS通信时匹配主机地址。</translation>
    </message>
    <message>
        <source>This is serial port 1, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 1 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1).</source>
        <translation type="vanished">这是串口1，有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口1默认波特率是9600bps,八个数据位，无校验，一个停止位（8，N，1）。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6004"/>
        <source>Battery power-on</source>
        <translation>电池上电</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6005"/>
        <source>Battery power-on: This function allows the BMS to send a command to close the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation>电池上电：该项可以给BMS下发闭合接触器的指令(注:仅部分BMS厂家支持该功能)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6010"/>
        <source>Battery power-off</source>
        <translation>电池下电</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6011"/>
        <source>Battery power-off: This function allows the BMS to send a command to open the contactor (Note: this feature is only supported by some BMS manufacturers).</source>
        <translation>电池下电：该项可以给BMS下发断开接触器的指令(注:仅部分BMS厂家支持该功能)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6016"/>
        <source>Hybrid mode Enable</source>
        <translation>混合模式使能</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6067"/>
        <location filename="../mywidget.cpp" line="6077"/>
        <source>Turn on</source>
        <translation>开启</translation>
    </message>
    <message>
        <source>This is the DCDC converter turn on the switch, click to turn on the DCDC converter.</source>
        <translation type="vanished">这是DCDC变流器打开开关,点击后开启DCDC变流器。</translation>
    </message>
    <message>
        <source>This is the DCDC converter off switch. Click to turn off the DCDC converter.</source>
        <translation type="vanished">这是DCDC变流器关闭开关,点击后关闭DCDC变流器。</translation>
    </message>
    <message>
        <source>This is the DCAC converter turn on the switch, click to turn on the DCAC converter.</source>
        <translation type="vanished">这是DCDC变流器打开开关,点击后开启DCDC变流器。</translation>
    </message>
    <message>
        <source>This is the DCAC converter off switch. Click to turn off the DCAC converter.</source>
        <translation type="vanished">这是DCDC变流器打开开关,点击后开启DCDC变流器。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6087"/>
        <source>Date +</source>
        <translation>日期+</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6087"/>
        <source>Clicking will move the monthly deep discharge date back one day.</source>
        <translation>点击会将每月深度放电日期往后调整一天。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6092"/>
        <source>Date -</source>
        <translation>日期-</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6092"/>
        <source>Clicking will move the monthly deep discharge date forward by one day.</source>
        <translation>点击会将每月深度放电日期往前调整一天。</translation>
    </message>
    <message>
        <source>This is serial port 2, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 1 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1).</source>
        <translation type="obsolete">这是串口，有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口1默认波特率是9600bps,八个数据位，无校验，一个停止位（8，N，1）</translation>
    </message>
    <message>
        <source>This is the CAN1 port, the baud rate of PCS internal communication, the default baud rate is 500kbps, eight data bits, no check, one stop bit(8, N, 1).</source>
        <translation type="vanished">这是CAN1端口，PCS内部通讯的波特率，默认波特率500kbps,八个数据位，无校验，一个停止位（8，N，1）。</translation>
    </message>
    <message>
        <source>This is the CAN2 port, the baud rate of communication between PCS and BMS, the default baud rate is 125, eight data bits, no check, one stop bit (8, N, 1).</source>
        <translation type="vanished">这是CAN1端口，PCS内部通讯的波特率，默认波特率500kbps,八个数据位，无校验，一个停止位（8，N，1）。</translation>
    </message>
    <message>
        <source>Release Charging Ban Sign</source>
        <translation type="vanished">释放禁充标志</translation>
    </message>
    <message>
        <source>This is the release of the forbidden charge flag, when the battery SOC is below the selected value, there are four options: Follow battery, 95%, 90%, 85%.</source>
        <translation type="obsolete">This is the release of the forbidden</translation>
    </message>
    <message>
        <source>When the minimum battery voltage is lower than this value, switch to the battery priority mode first, and the AC side will charge the battery with 10kw power.</source>
        <translation type="vanished">单体电池最低电压低于该值时，先切换成电池优先模式，交流侧将以10kw功率给电池充电。</translation>
    </message>
    <message>
        <source>When the maximum battery voltage is higher than this value, exit the battery priority mode and return to the pre-strong charge mode.</source>
        <translation type="vanished">单体电池最高电压高于该值时，退出电池优先模式，回到强充前的模式。</translation>
    </message>
    <message>
        <source>This is the protocol version number, which is used to view the current protocol version. The protocol version number defaults to V1.0.</source>
        <translation type="vanished">这是协议版本号，用于查看当前协议版本,协议版本号默认为V1.0。</translation>
    </message>
    <message>
        <source>This is the user password, you can reset the user password, the default user password 123456, (note: User password must be six digits).</source>
        <translation type="vanished">这是用户密码，可供重新设置用户密码，默认用户密码123456,(注：用户密码必须为六位数)。</translation>
    </message>
    <message>
        <source>This is the super permission password, you can reset the super permission password, the default super permission password 888888, (Note: super permission password must be six digits).</source>
        <translation type="vanished">这是超级权限密码，可供重新设置超级权限密码，默认超级权限密码888888,(注超级权限密码必须为六位数）。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5212"/>
        <source>English</source>
        <translation>英语</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5213"/>
        <source>You can set the display language of the screen to Chinese or English. The system needs to restart before switching the language.</source>
        <translation>设置显示屏的显示语言，可供选择为中文与英文，切换语言时系统需重启。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5217"/>
        <source>upgrade</source>
        <translation>升级</translation>
    </message>
    <message>
        <source>System_upgrade</source>
        <translation type="vanished">系统升级</translation>
    </message>
    <message>
        <source>Click to enter the system upgrade application and upgrade the system according to the upgrade document.</source>
        <translation type="vanished">点击即可进入系统升级应用程序，根据升级文档进行系统升级。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5222"/>
        <source>Allow</source>
        <translation>允许</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5223"/>
        <source>Set whether the display is enabled sound, which can be allowed(Allow) or prohibited(forbid).</source>
        <translation>设置显示屏是否开启声音，可供选择为允许(Allow)、禁止(forbid)。</translation>
    </message>
    <message>
        <source>Power On</source>
        <translation type="vanished">上电</translation>
    </message>
    <message>
        <source>When the battery is powered on, this item can give the BMS instructions to close the contactor (Note: only some BMS manufacturers support this function).</source>
        <translation type="vanished">电池上电，该项可以给BMS下发闭合接触器的指令(注：仅部分BMS厂家支持该功能)。</translation>
    </message>
    <message>
        <source>Power Off</source>
        <translation type="vanished">下电</translation>
    </message>
    <message>
        <source>Battery power off, this item can give the BMS to disconnect the contactor command (note: only some BMS manufacturers support this function).</source>
        <translation type="vanished">电池下电，该项可以给BMS下发断开接触器的指令(注：仅部分BMS厂家支持该功能)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6037"/>
        <source>If this parameter is selected, static IP addresses are used</source>
        <translation>如果选择此项，表示使用静态的IP地址</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="6059"/>
        <source>If this parameter is selected, the automatically assigned IP address is used</source>
        <translation>如果选择此项，表示使用自动分配的IP地址</translation>
    </message>
    <message>
        <source>This is the start time at which the specified state will begin to be entered with the specified power.</source>
        <translation type="vanished">这是开始时间，将在此时间开始以指定的功率进入指定的状态。</translation>
    </message>
    <message>
        <source>The output circuit breaker has three states: open, closed, and tripped. It can only be manually opened and closed. If there is an overcurrent in the output circuit breaker, it will trip.</source>
        <translation type="vanished">输出断路器有三种状态： 断开、闭合、脱扣；只能手动断开和闭合，如果输出断路器过流，输出断路器会发生脱扣。</translation>
    </message>
    <message>
        <source>Diesel generator output signal</source>
        <translation type="vanished">柴发输出信号</translation>
    </message>
    <message>
        <source>This is the status of the current chai signal, output dry contact 1, there are Enable and Disable two states, here is the most real physical hardware status.</source>
        <translation type="vanished">这是当前柴发信号的状态，输出干接点1，有使能(Enable)、禁止(Disable)两种状态,此处获取的是最真实的物理硬件状态。</translation>
    </message>
    <message>
        <source>This bit is reserved and has no effect. Dry contact 1 is output. The status of dry contact 2 is Enable(Enable) or Disable(Disable).</source>
        <translation type="vanished">这是保留位，无作用，输出干接点1，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <source>This bit is reserved and has no effect. Dry contact 2 is output. The status of dry contact 2 is Enable(Enable) or Disable(Disable).</source>
        <translation type="vanished">这是保留位，无作用，输出干接点2，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <source>This is the status of input contactor 1, which has two states: enabled and disabled. Whether to enable it or not depends on the actual requirements set in the advanced settings.</source>
        <translation type="vanished">这是输入干接点1的状态，有使能(Enable)、禁止(Disable)两种状态，根据高级设置的实际需求决定是否使能。</translation>
    </message>
    <message>
        <source>This is the status of input contactor 2, which has two states: enabled and disabled. Whether to enable it or not depends on the actual requirements set in the advanced settings.</source>
        <translation type="vanished">这是输入干接点2的状态，有使能(Enable)、禁止(Disable)两种状态，根据高级设置的实际需求决定是否使能。</translation>
    </message>
    <message>
        <source>This is the status of input contactor 3, which has two states: enabled and disabled. Whether to enable it or not depends on the actual requirements set in the advanced settings.</source>
        <translation type="vanished">这是输入干接点3的状态，有使能(Enable)、禁止(Disable)两种状态，根据高级设置的实际需求决定是否使能。</translation>
    </message>
    <message>
        <source>This is the status of input contactor 4, which has two states: enabled and disabled. Whether to enable it or not depends on the actual requirements set in the advanced settings.</source>
        <translation type="vanished">这是输入干接点4的状态，有使能(Enable)、禁止(Disable)两种状态，根据高级设置的实际需求决定是否使能。</translation>
    </message>
    <message>
        <source>This is the status of input contactor 5, which has two states: enabled and disabled. Whether to enable it or not depends on the actual requirements set in the advanced settings.</source>
        <translation type="vanished">这是输入干接点5的状态，有使能(Enable)、禁止(Disable)两种状态，根据高级设置的实际需求决定是否使能。</translation>
    </message>
    <message>
        <source>This is the status of input contactor 6, which has two states: enabled and disabled. Whether to enable it or not depends on the actual requirements set in the advanced settings.</source>
        <translation type="vanished">这是输入干接点6的状态，有使能(Enable)、禁止(Disable)两种状态，根据高级设置的实际需求决定是否使能。</translation>
    </message>
    <message>
        <source>This is the current operating mode status of the &apos;DC&apos; module, which has five states: Turnoff, Standby, Constant VOL (Constant Voltage), Constant CUR (Constant Current), and Maximum Power Point Tracking (MPPT).</source>
        <translation type="vanished">这是当前&apos;DC&apos;模块的工作模式状态，有关闭(Turnoff)、待机(Standby)、恒压(Constant VOL)、恒流(Constant CUR)、追踪最佳功率点(MPPT)五种状态。</translation>
    </message>
    <message>
        <source>    This is the control mode: the dispatching machine can only monitor data through Ethernet cable, RS485 tool, and CAN tool, but cannot control the PCS.
The remote mode: the dispatching machine can only read and write data through Ethernet cable, RS485 tool, and CAN tool.</source>
        <translation type="vanished">这是控制模式：调度机只能通过网线、RS485工具、CAN工具来监听数据，不能控制PCS；
远程模式：调度机只能通过网线、RS485工具、CAN工具进行读写。</translation>
    </message>
    <message>
        <source>Parallel Operation: When multiple devices are operating off-grid in parallel, this setting needs to be enabled.</source>
        <translation type="vanished">并机：多台设备，离网并机时，此项需设为使能。</translation>
    </message>
    <message>
        <source>    Runtime Period Enable: This option is used to enable the operation based on the time period and functionality specified in the automatic runtime schedule on the runtime page.</source>
        <translation type="vanished">运行时段使能：用于在自动运行页中，按时段运行表的时段和功能运行时，此项使能。</translation>
    </message>
    <message>
        <source>Voltage level: Reference voltage in constant voltage mode.</source>
        <translation type="vanished">电压等级：恒压模式下的参考电压。</translation>
    </message>
    <message>
        <source>Current value: reference current in constant current mode.</source>
        <translation type="vanished">电流值：恒流模式下的参考电流。</translation>
    </message>
    <message>
        <source>The number of cells connected in a battery stack.</source>
        <translation type="vanished">电池堆串联单体的的数量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3506"/>
        <source>This is the floating charge voltage.</source>
        <translation>这是浮充电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3511"/>
        <source>This is the filling voltage.</source>
        <translation>这是均充电压。</translation>
    </message>
    <message>
        <source>This is uniform charging and flushing current.</source>
        <translation type="vanished">这是浮充转均充电流。</translation>
    </message>
    <message>
        <source>This is float turn uniform charging current.</source>
        <translation type="vanished">这是均充转浮充电流。</translation>
    </message>
    <message>
        <source>This is the end time at which the state started with the &apos;start time&apos; will end.</source>
        <translation type="vanished">这是结束时间，将在此时间结束由&apos;开始时间&apos;开始的状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3596"/>
        <source>System for self-use</source>
        <translation>自发自用</translation>
    </message>
    <message>
        <source>.</source>
        <translation type="vanished">。</translation>
    </message>
    <message>
        <source>This is the working power, which is executed according to the working state when working in this state, the positive number is discharging, and the negative number is charging.</source>
        <translation type="vanished">这是工作功率，此状态下工作时根据工作状态执行此功率，正数为放电，负数为充电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3594"/>
        <source>Start time: When the system reaches this time, it starts to run automatically.</source>
        <translation>开始时间：系统到达此时间后开始自动运行。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3595"/>
        <source>Select: After this function is enabled, the system automatically runs the selected function mode within the specified period.</source>
        <translation>选择：使能后，系统将按照设置的时间段自动运行选择的功能模式。</translation>
    </message>
    <message>
        <source>In the peak shaving and valley filling mode, select &apos;Peak price&apos; periods and &apos;Valley price&apos; periods based on electricity prices.</source>
        <translation type="vanished">在削峰填谷模式下，根据电价选择‘峰价’时段、‘谷价’时段。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4469"/>
        <source>This is the monitor screen version number.</source>
        <translation>这是监控屏版本号。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4473"/>
        <source>This is the DCAC protocol version number.</source>
        <translation>这是DCAC协议版本号。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4477"/>
        <source>This is the DCAC converter software version.</source>
        <translation>这是DCAC变流器软件版本。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4481"/>
        <source>This is the DCAC CPLD software version.</source>
        <translation>这是DCAC CPLD软件版本。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4485"/>
        <source>This is the DCDC protocol version number.</source>
        <translation>这是DCDC协议版本号。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4489"/>
        <source>This is the DCDC converter software version.</source>
        <translation>这是DCDC变流器软件版本。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4493"/>
        <source>This is the DCDC CPLD software version.</source>
        <translation>这是DCDC CPLD软件版本。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4496"/>
        <source>SN</source>
        <translation>SN</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4497"/>
        <source>This is SN, the serial number of the product.</source>
        <translation>这是SN，即产品序列号。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4506"/>
        <source>PV power generation Day</source>
        <translation>光伏日发电量</translation>
    </message>
    <message>
        <source>This is the electricity generation of photovoltaic today.</source>
        <translation type="vanished">这是光伏今日的发电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4510"/>
        <source>PV power generation Month</source>
        <translation>光伏月发电量</translation>
    </message>
    <message>
        <source>This is the amount of photovoltaic power generated this month.</source>
        <translation type="vanished">这是光伏这个月的发电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4514"/>
        <source>PV power generation Year</source>
        <translation>光伏年发电量</translation>
    </message>
    <message>
        <source>This is how much photovoltaic will produce this year.</source>
        <translation type="vanished">这是光伏今年的发电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4518"/>
        <source>PV power generation Total</source>
        <translation>光伏总发电量</translation>
    </message>
    <message>
        <source>This is the total amount of photovoltaic power produced.</source>
        <translation type="vanished">这是光伏的总发电量。</translation>
    </message>
    <message>
        <source>Load Discharge Day</source>
        <translation type="vanished">负载日用电量</translation>
    </message>
    <message>
        <source>This is the electricity consumption of the load today.</source>
        <translation type="vanished">这是负载今日的用电量。</translation>
    </message>
    <message>
        <source>Load Discharge Month</source>
        <translation type="vanished">负载月用电量</translation>
    </message>
    <message>
        <source>This is the electricity consumption of the load this month.</source>
        <translation type="vanished">这是负载这个月的用电量。</translation>
    </message>
    <message>
        <source>Load Discharge Year</source>
        <translation type="vanished">负载年用电量</translation>
    </message>
    <message>
        <source>This is how much electricity the load is using this year.</source>
        <translation type="vanished">这是负载今年的用电量。</translation>
    </message>
    <message>
        <source>Load Discharge Total</source>
        <translation type="vanished">负载总用电量</translation>
    </message>
    <message>
        <source>This is the total power consumption of the load.</source>
        <translation type="vanished">这是负载的总用电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4544"/>
        <location filename="../mywidget.cpp" line="4563"/>
        <source>Battery Charge Day</source>
        <translation>电池日充电量</translation>
    </message>
    <message>
        <source>This is the charging capacity of the battery today.</source>
        <translation type="vanished">这是电池今日的充电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4548"/>
        <location filename="../mywidget.cpp" line="4567"/>
        <source>Battery Discharge Month</source>
        <translation>电池月放电量</translation>
    </message>
    <message>
        <source>This is how much the battery has been charged for the month.</source>
        <translation type="vanished">这是电池这个月的充电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4552"/>
        <location filename="../mywidget.cpp" line="4571"/>
        <source>Battery Discharge Year</source>
        <translation>电池年放电量</translation>
    </message>
    <message>
        <source>This is how much the battery has been charged this year.</source>
        <translation type="vanished">这是电池今年的充电量。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4556"/>
        <location filename="../mywidget.cpp" line="4575"/>
        <source>Battery Discharge Total</source>
        <translation>电池总放电量</translation>
    </message>
    <message>
        <source>This is the total charge of the battery.</source>
        <translation type="vanished">这是电池的总充电量。</translation>
    </message>
    <message>
        <source>This is the discharging capacity of the battery today.</source>
        <translation type="vanished">这是电池今日的放电量。</translation>
    </message>
    <message>
        <source>This is how much the battery has been discharged for the month.</source>
        <translation type="vanished">这是电池这个月的放电量。</translation>
    </message>
    <message>
        <source>This is how much the battery has been discharged this year.</source>
        <translation type="vanished">这是电池今年的放电量。</translation>
    </message>
    <message>
        <source>This is the total discharge of the battery.</source>
        <translation type="vanished">这是电池的总放电量。</translation>
    </message>
    <message>
        <source>Grid Charge Day</source>
        <translation type="vanished">电网日充电量</translation>
    </message>
    <message>
        <source>This is the amount of charging from the grid today.</source>
        <translation type="vanished">这是今日从电网充电的充电量。</translation>
    </message>
    <message>
        <source>Grid Charge Month</source>
        <translation type="vanished">电网月充电量</translation>
    </message>
    <message>
        <source>This is the amount of charging from the grid for the month.</source>
        <translation type="vanished">这是这个月从电网充电的充电量。</translation>
    </message>
    <message>
        <source>Grid Charge Year</source>
        <translation type="vanished">电网年充电量</translation>
    </message>
    <message>
        <source>This is the amount of charging from the grid this year.</source>
        <translation type="vanished">这是今年从电网充电的充电量。</translation>
    </message>
    <message>
        <source>Grid Charge Total</source>
        <translation type="vanished">电网总充电量</translation>
    </message>
    <message>
        <source>This is the total amount of charge from the grid.</source>
        <translation type="vanished">这是从电网充电的总充电量。</translation>
    </message>
    <message>
        <source>This is the amount of energy being discharged into the grid today.</source>
        <translation type="vanished">这是今日给电网放电的放电量。</translation>
    </message>
    <message>
        <source>This is the amount of electricity discharged into the grid this month.</source>
        <translation type="vanished">这是这个月给电网放电的放电量。</translation>
    </message>
    <message>
        <source>This is the amount of energy that has been discharged into the grid this year.</source>
        <translation type="vanished">这是今年给电网放电的放电量。</translation>
    </message>
    <message>
        <source>This is the total amount of discharge to the grid.</source>
        <translation type="vanished">这是给电网放电的总放电量。</translation>
    </message>
    <message>
        <source>This is the event alarm level. When the event alarm level is 0, it is marked red, indicating that this is the fault information.</source>
        <translation type="vanished">这是事件告警等级，当事件告警等级为0时标红，表示这是故障信息。</translation>
    </message>
    <message>
        <source>This is the event start time, which means that the record started appearing at this time.</source>
        <translation type="vanished">这是事件开始时间，表示这条记录从这个时间开始出现。</translation>
    </message>
    <message>
        <source>This is the event end time, which means the end time of this record,&apos;... &apos;means no end time.</source>
        <translation type="vanished">这是事件结束时间，表示这条记录的结束时间,...&apos;表示无结束时间。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4628"/>
        <source>CAN communication failure</source>
        <translation>Can通讯故障</translation>
    </message>
    <message>
        <source>This is the event description, when there is an alarm information, the alarm information will be recorded here.</source>
        <translation type="vanished">这是事件描述，当有告警信息时，会将告警信息记录在这里。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4631"/>
        <source>Fire alarm (High temp. alarm)</source>
        <translation>消防告警(高温告警)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4632"/>
        <source>Power Meter Comm fualttLead-acid abnormal</source>
        <translation>电能表通讯故障</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="4942"/>
        <source>Time when the system Settings are modified.</source>
        <translation>系统设置修改时的时间。</translation>
    </message>
    <message>
        <source>Here is a record of the operation when a change is made to the system Settings.</source>
        <translation type="vanished">这里是对系统设置进行修改时的操作记录。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5026"/>
        <source>Power control type：CP_P-&gt;CP_N&amp;&amp;P</source>
        <translation>功率控制类型：CP_P-&gt;CP_N&amp;&amp;P</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5030"/>
        <source>Power control type：CP_N&amp;&amp;P-&gt;CP_P</source>
        <translation>功率控制类型：CP_N&amp;&amp;P-&gt;CP_P</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5034"/>
        <source>Grid Fre Upper limit：0.2-&gt;3</source>
        <translation>电网频率变化范围上限：0.2-&gt;3</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5038"/>
        <source>Grid Fre Upper limit：3-&gt;0.2</source>
        <translation>电网频率变化范围上限：3-&gt;0.2</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5042"/>
        <source>Voltage protection Lower limit：-10-&gt;-15</source>
        <translation>电压保护范围下限：-10-&gt;-15</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5046"/>
        <source>Voltage protection Lower limit：-15-&gt;-10</source>
        <translation>电压保护范围下限：-15-&gt;-10</translation>
    </message>
    <message>
        <source>Operation mode：Prevent countercurrnet-&gt;Peak valley</source>
        <translation type="vanished">操作模式：系统防逆流-&gt;削峰填谷</translation>
    </message>
    <message>
        <source>Operation mode：UPS-&gt;Prevent countercurrnet</source>
        <translation type="vanished">操作模式：UPS(备电模式)-&gt;系统防逆流</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5050"/>
        <source>Operation mode：Manual-&gt;UPS</source>
        <translation>操作模式：手动-&gt;UPS(备电模式)</translation>
    </message>
    <message>
        <source>Operation mode：Peak valley-&gt;Manual</source>
        <translation type="vanished">操作模式：削峰填谷-&gt;手动</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5054"/>
        <source>Inv ON/Off-Grid：Off-&gt;automatic</source>
        <translation>并离网：关闭-&gt;自动</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5058"/>
        <source>Inv ON/Off-Grid：automatic-&gt;Off</source>
        <translation>并离网：自动-&gt;关闭</translation>
    </message>
    <message>
        <source>This is serial port 2, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 2 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1).</source>
        <translation type="vanished">这是串口2，有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口2默认波特率是9600bps,八个数据位，无校验，一个停止位（8，N，1）。</translation>
    </message>
    <message>
        <source>This is serial port 3, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 3 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1).</source>
        <translation type="vanished">这是串口3，有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口3默认波特率是9600bps,八个数据位，无校验，一个停止位（8，N，1）。</translation>
    </message>
    <message>
        <source>This is serial port 4, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 4 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1).</source>
        <translation type="vanished">这是串口4，有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口4默认波特率是9600bps,八个数据位，无校验，一个停止位（8，N，1）。</translation>
    </message>
    <message>
        <source>This is serial port 5, there are six options, namely 1200, 2400, 4800, 9600, 19200, 38400, serial port 5 default baud rate is 9600 BPS, eight data bits, no check, one stop bit(8, N, 1).</source>
        <translation type="vanished">这是串口5，有六项可供选择，分别是1200、2400、4800、9600、19200、38400，串口5默认波特率是9600bps,八个数据位，无校验，一个停止位（8，N，1）。</translation>
    </message>
    <message>
        <source>Follow battery</source>
        <translation type="vanished">跟随电池</translation>
    </message>
    <message>
        <source>How fast the power changes per unit time.</source>
        <translation type="vanished">单位时间内功率变化的快慢。</translation>
    </message>
    <message>
        <source>The upper limit of the frequency range allowed on the AC side is 0.2, 0.5, 1, and 3.</source>
        <translation type="vanished">交流侧所允许的频率变化最大范围，可供选择为0.2、0.5、1、3。</translation>
    </message>
    <message>
        <source>The lower limit of the frequency range allowed on the AC side can be selected as -0.2, -0.5, -1, or -3.</source>
        <translation type="vanished">交流侧所允许的频率变化最小范围，可供选择为-0.2、-0.5、-1、-3。</translation>
    </message>
    <message>
        <source>The upper limit of the voltage range allowed on the AC side can be +10, +15, +20, or +30.</source>
        <translation type="vanished">交流侧所允许的电压变化范围的上限，可供选择为+10、+15、+20、+30。</translation>
    </message>
    <message>
        <source>The lower limit of the voltage variation range allowed on the AC side can be -10, -15, -20, or -30.</source>
        <translation type="vanished">交流侧所允许的电压变化范围的下限，可供选择为-10、-15、-20、-30。</translation>
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
        <translation>禁止</translation>
    </message>
    <message>
        <source>This is the high voltage crossing (HVRT) Enable, enable the device will not stop because of a short period of high voltage, the option is to Enable, prohibit, (note: this is generally used in large grid-connected power stations).</source>
        <translation type="vanished">这是高压穿越(HVRT)使能,使能后该设备不会因为短时间的高电压而停机,可供选择为允许(Enable)、禁止(prohibit)，(注:此项一般在大型并网电站使用)。</translation>
    </message>
    <message>
        <source>This is the low voltage crossing (LVRT) Enable, enable the device will not stop because of a short period of low voltage, the option is to Enable, prohibit, (note: this is generally used in large grid-connected power stations).</source>
        <translation type="vanished">这是低压穿越(LVRT)使能，使能后该设备不会因为短时间的低电压而停机,可供选择为允许(Enable)、禁止(prohibit)，(注:此项一般在大型并网电站使用)。</translation>
    </message>
    <message>
        <source>Prevent islanding effect, When the detection of the island effect (in the photovoltaic grid-connected system, when the power failure occurs in the large power grid, the photovoltaic grid-connected inverter power generation and the local load on the low-voltage side of the grid if the power is just matched, it is easy to appear self-sufficient maintenance power state, resulting in the &apos;island&apos; phenomenon, thereby endangering the safety of maintenance personnel), the inverter automatically shut down, and the option is allowed Enable, prohibit, (Note: this is generally used in large grid-connected power stations).</source>
        <translation type="vanished">防止孤岛效应，当检测出现孤岛效应(在光伏并网系统中,当大电网出现停电事故时,光伏并网逆变器发电与电网低压侧本地负载如果刚好出现功率相匹配时,容易出现自给自足的维持发电状态,从而出现&quot;&quot;孤岛&quot;&quot;现象,从而危及检修人员安全)时,让逆变器自动停机,可供选择为允许(Enable)、禁止(prohibit)，(注:此项一般在大型并网电站使用)。</translation>
    </message>
    <message>
        <source>Insulation detection Enable, insulation resistance greater than 33KΩ to be able to operate normally, less than 33KΩ can not start, and to alarm, the default prohibition, the choice is to Enable, prohibit, (Note: this is generally used in large grid-connected power stations).</source>
        <translation type="vanished">绝缘检测使能，绝缘电阻大于33KQ要能正常起机运行，小于33KQ不能起机，并且要告警，默认禁止,可供选择为允许(Enable)、禁止(prohibit)，(注:此项一般在大型并网电站使用)。</translation>
    </message>
    <message>
        <source>When the frequency of the power grid deviates from the rated value, the power grid frequency is maintained stable by controlling the increase or decrease of the active power, which can be selected to Enable, prohibit, (Note: this is generally used in large grid-connected power stations).</source>
        <translation type="vanished">一次调频使能,电网的频率偏离额定值时，通过控制有功功率的增减使电网频率维持稳定，可供选择为允许(Enable)、禁止(prohibit)，(注:此项一般在大型并网电站使用)。</translation>
    </message>
    <message>
        <source>Moment of inertia Enable, can be selected to Enable, prohibit, (Note: this is generally used in large grid-connected power stations).</source>
        <translation type="vanished">转动惯量使能，可供选择为允许(Enable)、禁止(prohibit)，(注:此项一般在大型并网电站使用)。</translation>
    </message>
    <message>
        <source>Set according to the machine model on site, the factory value prevails, the default MPS-TS, but MPS and MPS-T are not optional.if you need to change, please contact customer service.</source>
        <translation type="vanished">根据现场机器型号设置，以出厂值为准，默认为MPS-TS,但MPS和MPS-T不可选，如需更改，请联系客服。</translation>
    </message>
    <message>
        <source>The rated capacity of PCS is subject to the ex-factory value and cannot be changed.</source>
        <translation type="vanished">PCS的额定容量，以出厂值为准，不可更改。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5356"/>
        <source>Output Fre grade</source>
        <translation>输出频率等级</translation>
    </message>
    <message>
        <source>Set the output frequency level, the default is 50Hz, generally 50Hz or 60Hz, can be fine-tuned according to the project.</source>
        <translation type="vanished">输出频率等级，默认50Hz，一般为50Hz或60Hz，可根据项目地微调。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5362"/>
        <source>Output vol level</source>
        <translation>输出电压等级</translation>
    </message>
    <message>
        <source>The voltage level is changed according to the actual local power grid voltage. The voltage level is subject to delivery. If you need to change it, contact customer service for confirmation.</source>
        <translation type="vanished">电压等级根据当地实际电网电压更改，以出厂为准，如需更改，请联系客服确认。</translation>
    </message>
    <message>
        <source>Converter side vol level</source>
        <translation type="vanished">逆变电压等级</translation>
    </message>
    <message>
        <source>The inverter voltage level is the voltage level of the inverter, which should be set according to the transformer nameplate, subject to the factory default value, and cannot be changed at will. If you need to change, please contact customer service to confirm.</source>
        <translation type="vanished">逆变电压等级是逆变器逆变出来的电压等级，要根据变压器铭牌来设置，以出厂默认值为准，不可随意更改，如需更改，请联系客服确认。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5374"/>
        <source>Non adjustable</source>
        <translation>不可调节</translation>
    </message>
    <message>
        <source>Output reactive mode, the default is not adjustable, can be selected as power factor (Pf), reactive power (Q), Non adjustable.</source>
        <translation type="vanished">输出无功方式，默认不可调节，可供选择为功率因数(Pf)、无功功率(Q)、不可调节(Non adjustable)。</translation>
    </message>
    <message>
        <source>Not Allow</source>
        <translation type="vanished">不允许</translation>
    </message>
    <message>
        <source>This is the power grid recovery scheduling startup Settings, there are two options: Allow (Allow), Not allow (Not Allow), the setting is invalid.</source>
        <translation type="vanished">这是电网恢复调度开机设置，有两项可选：允许(Allow)、不允许(Not Allow),设置无效。</translation>
    </message>
    <message>
        <source>This is the grid restoration and grid connection time, when the grid restoration and dispatching start-up allows, according to the actual demand can be set.</source>
        <translation type="vanished">这是电网恢复并网时间，当电网恢复调度开机允许时，根据实际需求设置即可。</translation>
    </message>
    <message>
        <source>Non
countercurrent</source>
        <translation type="vanished">不可逆流</translation>
    </message>
    <message>
        <source>Set the grid-connected mode of the inverter, which can be countercurrent, that is, DC can be converted into AC power and then incorporated into the power grid; Irreversible means that the current on the DC side does not flow to the grid. The default value can be Countercurrent. The options can be countercurrent or Non countercurrent. With the local grid qualification, it can be changed to &apos;countercurrent&apos;; When using Prevent countercurrent mode, you can change to &apos;countercurrent&apos;.</source>
        <translation type="vanished">设置逆变器的并网方式，可逆流即直流转换成交流电后可以并入电网;不可逆则是直流侧的电流不会流向电网。默认可逆流，可供选择为可逆流(Countercurrent)、不可逆流(Non countercurrent);
具备当地并网资质时，可改为′可逆流&apos;;使用系统防逆流模式时，可改为&apos;逆流&apos;。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5400"/>
        <source>Pshedding Freq</source>
        <translation>过频降载</translation>
    </message>
    <message>
        <source>This is the overfrequency load reduction setting, there are two options: allow (Enable), do not allow (prohibit),(note: used in large grid-connected power stations).</source>
        <translation type="vanished">这是过频降载设置，有两项可选：允许(Enable)、不允许(prohibit),(注：在大型并网电站使用）。</translation>
    </message>
    <message>
        <source>This is the QP curve setting, with two options: Enable (Enable), prohibit (prohibit),(note: used in large grid-connected power stations).</source>
        <translation type="vanished">这是QP曲线设置，有两项可选：允许(Enable)、不允许(prohibit),(注：在大型并网电站使用）。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5412"/>
        <source>CV parallel</source>
        <translation>恒压并机</translation>
    </message>
    <message>
        <source>Constant voltage parallel Enable, you can choose to Enable, prohibit, (Note: this setting is used in constant voltage parallel mode).</source>
        <translation type="vanished">恒压并机使能,可供选择为允许(Enable)、禁止(prohibit)，(注:此项设置在恒压并机模式下使用)。</translation>
    </message>
    <message>
        <source>Number of modules for PCS, default 1(invalid setting).</source>
        <translation type="vanished">PCS的模块数量，默认值1(无效设置)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5424"/>
        <source>restore</source>
        <translation>恢复出厂</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5425"/>
        <source>Restore the factory default Settings.</source>
        <translation>恢复出厂时的默认设置。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5439"/>
        <source>Clear</source>
        <translation>清除</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5440"/>
        <source>Clear previous recorded data and operation data of the system.</source>
        <translation>清除系统此前的记录数据及操作数据。</translation>
    </message>
    <message>
        <source>Select single when the MPS power is less than 250kw, select more when the MPS power is greater than or equal to 250, and change the maximum and minimum number of modules.</source>
        <translation type="vanished">当MPS功率小于250kw时选择single，大于等于250时选择more，同时需要更改最大模块数和最小模块数。</translation>
    </message>
    <message>
        <source>This is the maximum number of modules in the current system.</source>
        <translation type="vanished">这是当前系统的最大模块数。</translation>
    </message>
    <message>
        <source>This is the minimum number of modules in the current system.</source>
        <translation type="vanished">这是当前系统的最小模块数。</translation>
    </message>
    <message>
        <source>This is the DCDC insulation monitoring Enable setting, with two options: enable (Enable), Disable (Disable),(Note: The default disable).</source>
        <translation type="vanished">这是DCDC绝缘监测使能设置，有两项可选：允许(Enable)、禁止(Disable),(注：默认禁止)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5472"/>
        <source>Normally closed circuit (NC) or normally open circuit (NO) according to field Settings.</source>
        <translation>根据现场设置为常闭电路(N_C)或常开电路(N_O)。</translation>
    </message>
    <message>
        <source>When the dry contact is enabled and an abnormal signal is received, the device performs the selected action.</source>
        <translation type="vanished">当干接点使能后，收到异常信号时，设备将会执行此项所选的动作。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5473"/>
        <source>When the dry contact is enabled, the device will perform the selected action when there is a change in the signal.</source>
        <translation>当干接点使能后，信号变化时，设备将会执行此项所选的动作。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5474"/>
        <source>Input Dry Contact:                       
Enabled: Triggers the Action when the dry contact detects a state other than the specified NO/NC.                      
Disabled: No action is taken when the dry contact detects a state other than the specified NO/NC.</source>
        <translation>输入干接点：
使能：当干接点检测到与指定的常开/常闭状态不一致时，触发动作。
禁止：当干接点检测到与指定的常开/常闭状态不一致时，不执行任何动作。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5479"/>
        <source>DI_1_Enable</source>
        <translation>输入干接点1使能项</translation>
    </message>
    <message>
        <source>Enter dry contact 1. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set.</source>
        <translation type="vanished">输入干接点1，如果选择使能，当干接点检测到不是设置的NO/NC时，会触发Action的动作;如果选择禁止，当干接点检测到不是设置的NO/NC时，不做任何动作。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5483"/>
        <source>DI_2_Enable</source>
        <translation>输入干接点2使能项</translation>
    </message>
    <message>
        <source>Enter dry contact 2. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set.</source>
        <translation type="vanished">输入干接点2，如果选择使能，当干接点检测到不是设置的NO/NC时，会触发Action的动作;如果选择禁止，当干接点检测到不是设置的NO/NC时，不做任何动作。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5487"/>
        <source>DI_3_Enable</source>
        <translation>输入干接点3使能项</translation>
    </message>
    <message>
        <source>Enter dry contact 3. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set.</source>
        <translation type="vanished">输入干接点3，如果选择使能，当干接点检测到不是设置的NO/NC时，会触发Action的动作;如果选择禁止，当干接点检测到不是设置的NO/NC时，不做任何动作。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5491"/>
        <source>DI_4_Enable</source>
        <translation>输入干接点4使能项</translation>
    </message>
    <message>
        <source>Enter dry contact 4. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set.</source>
        <translation type="vanished">输入干接点4，如果选择使能，当干接点检测到不是设置的NO/NC时，会触发Action的动作;如果选择禁止，当干接点检测到不是设置的NO/NC时，不做任何动作。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5495"/>
        <source>DI_5_Enable</source>
        <translation>输入干接点5使能项</translation>
    </message>
    <message>
        <source>Enter dry contact 5. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set.</source>
        <translation type="vanished">输入干接点5，如果选择使能，当干接点检测到不是设置的NO/NC时，会触发Action的动作;如果选择禁止，当干接点检测到不是设置的NO/NC时，不做任何动作。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5499"/>
        <source>DI_6_Enable</source>
        <translation>输入干接点6使能项</translation>
    </message>
    <message>
        <source>Enter dry contact 6. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set.</source>
        <translation type="vanished">输入干接点6，如果选择使能，当干接点检测到不是设置的NO/NC时，会触发Action的动作;如果选择禁止，当干接点检测到不是设置的NO/NC时，不做任何动作。</translation>
    </message>
    <message>
        <source>DO_1_Enable</source>
        <translation type="vanished">输出干接点1使能项</translation>
    </message>
    <message>
        <source>Output dry contact 1. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set.</source>
        <translation type="vanished">输出干接点1，如果选择使能，当干接点检测到不是设置的NO/NC时，会触发Action的动作;如果选择禁止，当干接点检测到不是设置的NO/NC时，不做任何动作。</translation>
    </message>
    <message>
        <source>DO_2_Enable</source>
        <translation type="vanished">输出干接点2使能项</translation>
    </message>
    <message>
        <source>Output dry contact 2. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set.</source>
        <translation type="vanished">输出干接点2，如果选择使能，当干接点检测到不是设置的NO/NC时，会触发Action的动作;如果选择禁止，当干接点检测到不是设置的NO/NC时，不做任何动作。</translation>
    </message>
    <message>
        <source>DO_3_Enable</source>
        <translation type="vanished">输出干接点3使能项</translation>
    </message>
    <message>
        <source>Output dry contact 3. If Enable is selected, the Action is triggered when the dry contact detects that NO/NC is not set. If Disable is selected, the dry contact does not take any action when it detects that NO/NC is not set.</source>
        <translation type="vanished">输出干接点3，如果选择使能，当干接点检测到不是设置的NO/NC时，会触发Action的动作;如果选择禁止，当干接点检测到不是设置的NO/NC时，不做任何动作。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5516"/>
        <source>DI_1_NC_O</source>
        <translation>输入干接点1常闭/常开项</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5519"/>
        <source>DI_2_NC_O</source>
        <translation>输入干接点2常闭/常开项</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5522"/>
        <source>DI_3_NC_O</source>
        <translation>输入干接点3常闭/常开项</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5525"/>
        <source>DI_4_NC_O</source>
        <translation>输入干接点4常闭/常开项</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5528"/>
        <source>DI_5_NC_O</source>
        <translation>输入干接点5常闭/常开项</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5531"/>
        <source>DI_6_NC_O</source>
        <translation>输入干接点6常闭/常开项</translation>
    </message>
    <message>
        <source>DO_1_NC_O</source>
        <translation type="vanished">输出干接点1常闭/常开项</translation>
    </message>
    <message>
        <source>DO_2_NC_O</source>
        <translation type="vanished">输出干接点2常闭/常开项</translation>
    </message>
    <message>
        <source>DO_3_NC_O</source>
        <translation type="vanished">输出干接点3常闭/常开项</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5544"/>
        <location filename="../mywidget.cpp" line="5556"/>
        <location filename="../mywidget.cpp" line="5559"/>
        <source>Shut down</source>
        <translation>关机</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5544"/>
        <source>DI_1_Action</source>
        <translation>输入干接点1响应动作</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1614"/>
        <location filename="../mywidget.ui" line="1658"/>
        <location filename="../mywidget.ui" line="1702"/>
        <location filename="../mywidget.cpp" line="5547"/>
        <location filename="../mywidget.cpp" line="5550"/>
        <location filename="../mywidget.cpp" line="5553"/>
        <source>Prompt</source>
        <translation>提示</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5547"/>
        <source>DI_2_Action</source>
        <translation>输入干接点2响应动作</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5550"/>
        <source>DI_3_Action</source>
        <translation>输入干接点3响应动作</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5553"/>
        <source>DI_4_Action</source>
        <translation>输入干接点4响应动作</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5556"/>
        <source>DI_5_Action</source>
        <translation>输入干接点5响应动作</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5559"/>
        <source>DI_6_Action</source>
        <translation>输入干接点6响应动作</translation>
    </message>
    <message>
        <source>DO_1_Action</source>
        <translation type="vanished">输出干接点1响应动作</translation>
    </message>
    <message>
        <source>DO_2_Action</source>
        <translation type="vanished">输出干接点2响应动作</translation>
    </message>
    <message>
        <source>DO_3_Action</source>
        <translation type="vanished">输出干接点3响应动作</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5575"/>
        <location filename="../mywidget.cpp" line="5801"/>
        <source>It is used for internal debugging only.</source>
        <translation>仅提供内部调试使用。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5596"/>
        <location filename="../mywidget.cpp" line="5846"/>
        <source>Debug variable 1 addr</source>
        <translation>调试地址变量1</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5602"/>
        <location filename="../mywidget.cpp" line="5852"/>
        <source>Debug variable 2 addr</source>
        <translation>调试地址变量2</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5608"/>
        <location filename="../mywidget.cpp" line="5858"/>
        <source>Debug variable 3 addr</source>
        <translation>调试地址变量3</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5614"/>
        <location filename="../mywidget.cpp" line="5882"/>
        <source>Debug memery var 1</source>
        <translation>调试内存变量1</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5620"/>
        <location filename="../mywidget.cpp" line="5888"/>
        <source>Debug memery var 2</source>
        <translation>调试内存变量2</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5626"/>
        <location filename="../mywidget.cpp" line="5894"/>
        <source>Debug memery var 3</source>
        <translation>调试内存变量3</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5632"/>
        <source>Input Vol revise</source>
        <translation>输入电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5638"/>
        <source>Input Cur revise</source>
        <translation>输入电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5644"/>
        <source>Voltage 1.5 revise</source>
        <translation>1.5V电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5650"/>
        <source>Bus Vol revise</source>
        <translation>母线电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5656"/>
        <source>Grid A AB Vol revise</source>
        <translation>电网A相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5662"/>
        <source>Grid B BC Vol revise</source>
        <translation>电网B相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5668"/>
        <source>Grid C CA Vol revise</source>
        <translation>电网C相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5674"/>
        <source>Output A Cur revise</source>
        <translation>输出A相电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5680"/>
        <source>Output B Cur revise</source>
        <translation>输出B相电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5686"/>
        <source>Output C Cur revise</source>
        <translation>输出C相电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5692"/>
        <source>INV A Vol revise</source>
        <translation>逆变A相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5698"/>
        <source>INV B Vol revise</source>
        <translation>逆变B相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5704"/>
        <source>INV C Vol revise</source>
        <translation>逆变C相电压系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5710"/>
        <source>INV A inductance Cur revise</source>
        <translation>逆变A相电感电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5716"/>
        <source>INV B inductance Cur revise</source>
        <translation>逆变B相电感电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5722"/>
        <source>INV C inductance Cur revise</source>
        <translation>逆变C相电感电流系数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5728"/>
        <location filename="../mywidget.cpp" line="5864"/>
        <source>INV On off flag</source>
        <translation>开关机状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5740"/>
        <source>INV flag</source>
        <translation>逆变状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5776"/>
        <location filename="../mywidget.cpp" line="5876"/>
        <source>parallel signal</source>
        <translation>并机状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5788"/>
        <location filename="../mywidget.cpp" line="5906"/>
        <source>Bat Infor</source>
        <translation>电池信息字</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5794"/>
        <location filename="../mywidget.cpp" line="5912"/>
        <source>Bat State</source>
        <translation>电池状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5870"/>
        <source>DCONV logic</source>
        <translation>逻辑状态字</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5919"/>
        <source>Choose the first module to view the real-time data of the first module</source>
        <translation>选中第一个模块，查看第一个模块的实时数据</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5924"/>
        <source>Choose the second module to view the real-time data of the second module</source>
        <translation>选中第二个模块，查看第二个模块的实时数据</translation>
    </message>
    <message>
        <source>To view the previous year&apos;s data, click on it to display the previous year&apos;s data for the current displayed year.</source>
        <translation type="vanished">查看上一年的数据，点击后将显示当前显示年份的上一年的数据。</translation>
    </message>
    <message>
        <source>To view the data for the next year, click on it to display the data for the next year of the current displayed year.</source>
        <translation type="vanished">查看下一年的数据，点击后将显示当前显示年份的下一年的数据。</translation>
    </message>
    <message>
        <source>To view the data of the previous month, click on it to display the data of the previous month of the current displayed month.</source>
        <translation type="vanished">查看上一个月的数据，点击后将显示当前显示年当前月份的上一个月的数据。</translation>
    </message>
    <message>
        <source>To view the data for the next month, click to display the data for the next month of the current displayed month.</source>
        <translation type="vanished">查看下一个月的数据，点击后将显示当前显示月份的下一个月的数据。</translation>
    </message>
    <message>
        <source>To view the data of the previous day. Click to display the data of the previous day of the current day.</source>
        <translation type="vanished">查看上一日的数据，点击后将显示当前日的上一日的数据。</translation>
    </message>
    <message>
        <source>To view the data of the next day. Click to display the data of the next day of the current day.</source>
        <translation type="vanished">查看下一日的数据，点击后将显示当前日的下一日的数据。</translation>
    </message>
    <message>
        <source>To export history records, click here to export history records to the USB flash drive. The file exported to the USB flash drive is HistoryRecord.csv, which needs to be opened with Excel.</source>
        <translation type="vanished">导出历史记录，点击此处将会导出历史记录到U盘里,导出到U盘的文件为HistoryRecord.csv，此文件需要用Excel打开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5972"/>
        <source>Export operation log. Click here to export operation log to U disk.</source>
        <translation>导出操作日志，点击此处将会导出操作日志到U盘里。</translation>
    </message>
    <message>
        <source>Export the battery statistics. Click here to export the battery statistics to the U disk.</source>
        <translation type="vanished">导出电量统计表，点击此处将会导出电量统计表到U盘里。</translation>
    </message>
    <message>
        <source>Exit the U disk and unmount the U disk mounted to the display control to ensure that the data in the U disk will not be damaged.</source>
        <translation type="vanished">退出U盘，将挂载到显控的U盘取消挂载，以保证U盘数据不会损坏。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5989"/>
        <source>Choose the first module to view the real-time status of the first module</source>
        <translation>选中第一个模块，查看第一个模块的实时状态</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="5994"/>
        <source>Choose the second module to view the real-time status of the second module</source>
        <translation>选中第二个模块，查看第二个模块的实时状态</translation>
    </message>
    <message>
        <source>There are three types of reactive power regulation: Disable, Pf regulation, and Q regulation.</source>
        <translation type="vanished">无功调节有三种:禁止(Disable)、功率因数调节(P fregulation)、无功功率调节(Q regulation)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2628"/>
        <source>Inv. voltage(CA)</source>
        <translation>逆变电压（CA）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2851"/>
        <source>Positive bus voltage on the high voltage side of the DCDC module.</source>
        <translation>DCDC模块高压侧正母线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2860"/>
        <source>Negative bus voltage on the high voltage side of the DCDC module.</source>
        <translation>DCDC模块高压侧负母线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2869"/>
        <source>Positive bus voltage on the low voltage side of the DCDC module.</source>
        <translation>DCDC模块低压侧正母线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2878"/>
        <source>Negative bus voltage on the low voltage side of the DCDC module.</source>
        <translation>DCDC模块低压侧负母线电压。</translation>
    </message>
    <message>
        <source>This is the current state of low voltage crossing (LVRT). Low voltage crossing refers to the ability to withstand a certain limit of low voltage of the grid within a certain period of time without exiting the operation. There are two states here, namely Non and LVRT.</source>
        <translation type="vanished">这是当前低电压穿越(LVRT)的状态，低电压穿越是在确定的时间内承受一定限值的电网低电压而不退出运行的能力，这里有两种状态，分别为无(Non)、有(LVRT)。</translation>
    </message>
    <message>
        <source>This is the status of the input dry contact 1. The status can be Enable or Disable.</source>
        <translation type="vanished">这是输入干接点1的状态，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <source>This is the status of the input dry contact 2. The status can be Enable or Disable.</source>
        <translation type="vanished">这是输入干接点2的状态，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <source>This is the status of the input dry contact 3. The status can be Enable or Disable.</source>
        <translation type="vanished">这是输入干接点3的状态，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <source>DI4)</source>
        <translation type="obsolete">DI4)</translation>
    </message>
    <message>
        <source>This is the status of the input dry contact 5. The status can be Enable or Disable.</source>
        <translation type="vanished">这是输入干接点5的状态，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <source>This is the status of the input dry contact 6. The status can be Enable or Disable.</source>
        <translation type="vanished">这是输入干接点6的状态，有使能(Enable)、禁止(Disable)两种状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3241"/>
        <source>Contator Status Boost</source>
        <translation>高压侧接触器</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="vanished">断开</translation>
    </message>
    <message>
        <source>DC module high voltage contactor has two states: open, closed; When there is voltage on the high voltage side, close the high voltage contactor; Otherwise, the high voltage contactor is disconnected.</source>
        <translation type="vanished">DC模块高压侧接触器有两种状态：断开、闭合；当高压侧有电压时，闭合高压侧接触器；否则高压侧接触器断开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3245"/>
        <source>Contator Status Buck</source>
        <translation>低压侧接触器</translation>
    </message>
    <message>
        <source>DC module low voltage contactor has two states: open, closed; When there is voltage on the low voltage side, close the contactor on the low voltage side; Otherwise, the low pressure contactor is disconnected.</source>
        <translation type="vanished">DC模块低压侧接触器有两种状态：断开、闭合；当低压侧有电压时，闭合低压侧接触器；否则低压侧接触器断开。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3229"/>
        <location filename="../mywidget.cpp" line="3327"/>
        <source>Buck</source>
        <translation>降压</translation>
    </message>
    <message>
        <source>This is the current &apos;DC&apos; module operation mode, there are Buck (Buck), Boost (Boost) two states.</source>
        <translation type="vanished">这就是目前&apos;DC&apos;模块的工作方式，有Buck(降压)、Boost(升压)两种状态。</translation>
    </message>
    <message>
        <source>The DC converter can be enabled in two states: Enable and disable. If the internal self-test of the machine is no problem, the DC converter is enabled. Otherwise, the DC converter is prohibited.</source>
        <translation type="vanished">DC变流器使能有两种状态：使能、禁止；机器内部自检没有问题时，DC变流器使能；否则DC变流器禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1285"/>
        <source>Inv. Voltage(AB)</source>
        <translation>逆变电压（AB）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1285"/>
        <source>Inv. Voltage(BC)</source>
        <translation>逆变电压（BC）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1285"/>
        <source>Inv. Voltage(CA)</source>
        <translation>逆变电压（CA）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1286"/>
        <source>Inv. Current(A)</source>
        <translation>逆变电流（A）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1286"/>
        <source>Inv. Current(B)</source>
        <translation>逆变电流（B）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1286"/>
        <source>Inv. Current(C)</source>
        <translation>逆变电流（C）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1334"/>
        <source>PV Voltage H</source>
        <translation>PV高压侧电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1334"/>
        <source>PV Current H</source>
        <translation>PV高压侧电流</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1334"/>
        <source>PV Power H</source>
        <translation>PV高压侧功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>PV Voltage L</source>
        <translation>PV低压侧电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>PV Current L</source>
        <translation>PV低压侧电流</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1335"/>
        <source>PV Power L</source>
        <translation>PV低压侧功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1378"/>
        <location filename="../mywidget.cpp" line="2918"/>
        <source>Grid Voltage(AB)</source>
        <translation>电网电压（AB）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1378"/>
        <location filename="../mywidget.cpp" line="2927"/>
        <source>Grid Voltage(BC)</source>
        <translation>电网电压（BC）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1378"/>
        <location filename="../mywidget.cpp" line="2936"/>
        <source>Grid Voltage(CA)</source>
        <translation>电网电压（CA）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1379"/>
        <location filename="../mywidget.cpp" line="2945"/>
        <source>Grid Current(A)</source>
        <translation>电网电流（A）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1379"/>
        <location filename="../mywidget.cpp" line="2954"/>
        <source>Grid Current(B)</source>
        <translation>电网电流（B）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1379"/>
        <location filename="../mywidget.cpp" line="2963"/>
        <source>Grid Current(C)</source>
        <translation>电网电流（C）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1381"/>
        <location filename="../mywidget.cpp" line="2975"/>
        <source>Grid active power</source>
        <translation>电网有功功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1381"/>
        <location filename="../mywidget.cpp" line="2984"/>
        <source>Grid reactive power</source>
        <translation>电网无功功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1381"/>
        <location filename="../mywidget.cpp" line="2993"/>
        <source>Grid apparent power</source>
        <translation>电网视在功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1381"/>
        <location filename="../mywidget.cpp" line="3002"/>
        <source>Grid power factor</source>
        <translation>电网功率因数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1382"/>
        <location filename="../mywidget.cpp" line="3010"/>
        <source>Grid frequency</source>
        <translation>电网频率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1423"/>
        <location filename="../mywidget.cpp" line="3024"/>
        <source>Load Voltage(AB)</source>
        <translation>负载电压（AB）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1423"/>
        <location filename="../mywidget.cpp" line="3033"/>
        <source>Load Voltage(BC)</source>
        <translation>负载电压（BC）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1423"/>
        <location filename="../mywidget.cpp" line="3042"/>
        <source>Load Voltage(CA)</source>
        <translation>负载电压（CA）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1424"/>
        <location filename="../mywidget.cpp" line="3051"/>
        <source>Load Current(A)</source>
        <translation>负载电流（A）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1424"/>
        <location filename="../mywidget.cpp" line="3060"/>
        <source>Load Current(B)</source>
        <translation>负载电流（B）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1424"/>
        <location filename="../mywidget.cpp" line="3069"/>
        <source>Load Current(C)</source>
        <translation>负载电流（C）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3081"/>
        <source>Load active power</source>
        <translation>负载有功功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3090"/>
        <source>Load reactive power</source>
        <translation>负载无功功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3099"/>
        <source>Load apparent power</source>
        <translation>负载视在功率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1426"/>
        <location filename="../mywidget.cpp" line="3108"/>
        <source>Load power factor</source>
        <translation>负载功率因数</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1427"/>
        <location filename="../mywidget.cpp" line="3117"/>
        <source>Load frequency</source>
        <translation>负载频率</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1478"/>
        <location filename="../mywidget.cpp" line="3164"/>
        <source>Start Diesel Generator Signal</source>
        <translation>启动柴发信号</translation>
    </message>
    <message>
        <location filename="../mywidget.ui" line="1669"/>
        <location filename="../mywidget.ui" line="1713"/>
        <source>Reserved</source>
        <translation>预留</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2610"/>
        <source>Inv. voltage(AB)</source>
        <translation>逆变电压（AB）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2611"/>
        <source>Inv. side AB line voltage.</source>
        <translation>逆变侧AB线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2619"/>
        <source>Inv. voltage(BC)</source>
        <translation>逆变电压（BC）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2620"/>
        <source>Inv. side BC line voltage.</source>
        <translation>逆变侧BC线电压。</translation>
    </message>
    <message>
        <source>Inv. voltage(AC)</source>
        <translation type="vanished">逆变电压（AC）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2629"/>
        <source>Inv. side CA line voltage.</source>
        <translation>逆变侧CA线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2637"/>
        <source>Inv. current(A)</source>
        <translation>逆变电流（A）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2638"/>
        <source>Inv. side A phase current.</source>
        <translation>逆变侧A相电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2646"/>
        <source>Inv. current(B)</source>
        <translation>逆变电流（B）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2647"/>
        <source>Inv. side B phase current.</source>
        <translation>逆变侧B相电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2655"/>
        <source>Inv. current(C)</source>
        <translation>逆变电流（C）</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2656"/>
        <source>Inv. side C phase current.</source>
        <translation>逆变侧C相电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2665"/>
        <location filename="../mywidget.cpp" line="2887"/>
        <source>The IGBT temperature of the converter: The IGBT temperature must not exceed 102°C. Otherwise, the converter will operate at a reduced capacity. It will resume full power operation when the temperature drops to 73°C.</source>
        <translation>变流器IGBT温度：IGBT温度不得超过102℃，否则变流器将降额运行，降额后73℃恢复可满功率运行。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2674"/>
        <source>The ambient temperature.</source>
        <translation>环境温度。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2838"/>
        <source>Leakage current: The leakage current should not exceed 300mA (≤30kVA power converter), or 10mA/kVA (&gt;30kVA power converter).</source>
        <translation>漏电流：漏电流应不大于300mA (≤30kVA 变流器)，或10mA/kVA(＞30kVA变流器)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2694"/>
        <source>Display the voltage of each PV in turn.</source>
        <translation>轮流显示每路PV电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1188"/>
        <source>NEXT</source>
        <translation>下一步</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1188"/>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2703"/>
        <source>Total current on the PV side of the converter.</source>
        <translation>变流器PV侧总电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2712"/>
        <source>Total power on the PV side of the converter.</source>
        <translation>变流器PV侧总功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2721"/>
        <source>converter battery side voltage.</source>
        <translation>变流器电池侧电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2730"/>
        <source>converter battery side current.</source>
        <translation>变流器电池侧电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2739"/>
        <source>converter battery side power.</source>
        <translation>变流器电池侧功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2748"/>
        <source>converter bus voltage.</source>
        <translation>变流器母线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2757"/>
        <source>converter bus current.</source>
        <translation>变流器母线电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2783"/>
        <source>Voltage on the high voltage side of the DCDC module.</source>
        <translation>DCDC模块高压侧电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2792"/>
        <source>Current on the high voltage side of the DCDC module.</source>
        <translation>DCDC模块高压侧电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2801"/>
        <source>Power on the high voltage side of the DCDC module.</source>
        <translation>DCDC模块高压侧功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2810"/>
        <source>Voltage on the low voltage side of the DCDC module.</source>
        <translation>DCDC模块低压侧电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2819"/>
        <source>Current on the low-voltage side of the DCDC module.</source>
        <translation>DCDC模块低压侧电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2828"/>
        <source>Power on the low voltage side of the DCDC module.</source>
        <translation>DCDC模块低压侧功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2837"/>
        <source>Leakage cur</source>
        <translation>漏电流</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2850"/>
        <source>Bus H vol(+)</source>
        <translation>高压侧正母线电压</translation>
    </message>
    <message>
        <source>Positive bus voltage on the high voltage side of the DC module.</source>
        <translation type="obsolete">直流高压侧正母线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2859"/>
        <source>Bus H vol(-)</source>
        <translation>高压侧负母线电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2868"/>
        <source>Bus L vol(+)</source>
        <translation>低压侧正母线电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2877"/>
        <source>Bus L vol(-)</source>
        <translation>低压侧负母线电压</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2894"/>
        <source>Positive Inuslation</source>
        <translation>正绝缘阻抗</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2895"/>
        <source>The positive insulation impedance of the DCDC module is normal when the positive insulation impedance is greater than 33kΩ. When the positive insulation impedance is lower than 33kΩ, the insulation fault or potential security risks exist.</source>
        <translation>DCDC模块的正绝缘阻抗，正绝缘阻抗大于33kΩ时正常，低于33kΩ时存在绝缘故障或潜在的安全隐患。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2902"/>
        <source>Negative Inuslation</source>
        <translation>负绝缘阻抗</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2903"/>
        <source>The negative insulation impedance of the DCDC module is normal when the negative insulation impedance is greater than 33kΩ. When the negative insulation impedance is lower than 33kΩ, the insulation fault or negative security risks exist.</source>
        <translation>DCDC模块的负绝缘阻抗，负绝缘阻抗大于33kΩ时正常，低于33kΩ时存在绝缘故障或潜在的安全隐患。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2919"/>
        <source>Grid side AB line voltage.</source>
        <translation>电网侧AB线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2928"/>
        <source>Grid side BC line voltage.</source>
        <translation>电网侧BC线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2937"/>
        <source>Grid side CA line voltage.</source>
        <translation>电网侧CA线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2946"/>
        <source>Grid side A phase current.</source>
        <translation>电网侧A相电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2955"/>
        <source>Grid side B phase current.</source>
        <translation>电网侧B相电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2964"/>
        <source>Grid side C phase current.</source>
        <translation>电网侧C相电流。</translation>
    </message>
    <message>
        <source>Grid side active power (P).</source>
        <translation type="vanished">电网侧有功功率。</translation>
    </message>
    <message>
        <source>Grid side reactive power (Q).</source>
        <translation type="vanished">电网侧无功功率。</translation>
    </message>
    <message>
        <source>Grid side view power (S).</source>
        <translation type="vanished">电网侧视在功率。</translation>
    </message>
    <message>
        <source>Grid side power factor (Pf).</source>
        <translation type="vanished">电网侧功率因数。</translation>
    </message>
    <message>
        <source>Grid side frequency.</source>
        <translation type="vanished">电网侧频率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3025"/>
        <source>Load side AB line voltage.</source>
        <translation>负载侧AB线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3034"/>
        <source>Load side BC line voltage.</source>
        <translation>负载侧BC线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3043"/>
        <source>Load side CA line voltage.</source>
        <translation>负载侧CA线电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3052"/>
        <source>Load side A phase current.</source>
        <translation>负载侧A相电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3061"/>
        <source>Load side B phase current.</source>
        <translation>负载侧B相电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3070"/>
        <source>Load side C phase current.</source>
        <translation>负载侧C相电流。</translation>
    </message>
    <message>
        <source>Load side active power (P).</source>
        <translation type="vanished">负载侧有功功率。</translation>
    </message>
    <message>
        <source>Load side reactive power (Q).</source>
        <translation type="vanished">负载侧无功功率。</translation>
    </message>
    <message>
        <source>Load side view power (S).</source>
        <translation type="vanished">负载侧视在功率。</translation>
    </message>
    <message>
        <source>Load side power factor (Pf).</source>
        <translation type="vanished">负载侧功率因数。</translation>
    </message>
    <message>
        <source>Load side frequency.</source>
        <translation type="vanished">负载侧频率。</translation>
    </message>
    <message>
        <source>Closed</source>
        <translation type="vanished">闭合</translation>
    </message>
    <message>
        <source>There are two states for a DC circuit breaker: open, closed.</source>
        <translation type="vanished">直流断路器有两种状态:断开、闭合。</translation>
    </message>
    <message>
        <source>The DC contactor has two states: open and closed. After the soft start of the DC side is completed, the DC contactor closes. When the DC side of the battery is disconnected and the voltage of the DC bus drops to a certain level, the DC contactor opens.</source>
        <translation type="vanished">直流接触器有两种状态:断开、闭合。当直流侧软启完成后，直流接触器闭合;当电池直流侧断开，直流母线电压下降到一定电压，直流接触器断开。</translation>
    </message>
    <message>
        <source>There are two states for the maintenance bypass circuit breaker: Open, Closed. This circuit breaker is only used for machine maintenance. If maintenance is required, please contact the maintenance personnel.</source>
        <translation type="vanished">维修旁路断路器有两种状态:断开、闭合;此断路器仅用于机器维护，如需维护，请联系维护人员。</translation>
    </message>
    <message>
        <source>The output circuit breaker has two states: open, closed. It can only be manually opened and closed. If there is an overcurrent in the output circuit breaker, it will trip.</source>
        <translation type="vanished">输出断路器有两种状态： 断开、闭合；只能手动断开，如果输出断路器过流，输出断路器会发生脱扣。</translation>
    </message>
    <message>
        <source>The output contactor has two states: Open, Closed. The output contactor closes after the soft start on the inv. side is completed. The output contactor opens when the converter is shut down.</source>
        <translation type="vanished">输出接触器有两种状态:断开、闭合;当逆变侧软启完成后，输出接触器闭合;当变流器关机时，输出接触器断开。</translation>
    </message>
    <message>
        <source>The power grid circuit breaker has two states: Break, Close; The power grid circuit breaker can only be manually disconnected. If the power grid circuit breaker overflows, the power grid circuit breaker may trip.</source>
        <translation type="vanished">电网断路器有两种状态： 断开、闭合；只能手动断开，如果电网断路器过流，电网断路器会发生脱扣。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3165"/>
        <source>Signal to start the diesel generator, start the diesel generator when enabled, stop the diesel generator when disabled.</source>
        <translation>启动柴发的信号，使能时启动柴发，禁止是停止柴发。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3169"/>
        <source>Dry contact 2 is output.</source>
        <translation>输出干接点2。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3173"/>
        <source>Dry contact 3 is output.</source>
        <translation>输出干接点3.</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3180"/>
        <location filename="../mywidget.cpp" line="3226"/>
        <source>The converter has two states: enabled,disabled. The converter is enabled when the self-check is successful. Otherwise, the converter is disabled.</source>
        <translation>变流器有两种状态:使能、禁止;机器自检正常时，变流器使能;否则变流器禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3184"/>
        <source>There are three states for DC soft start: Not starting, Soft starting, and Complete. Soft start refers to the process in which the converter charges the busbar with the battery during startup, causing the busbar voltage to rise close to the battery voltage.</source>
        <translation>直流软启动有三种状态:未启动，软启中，软启完成;软启动是指变流器在启动时，通过控制电池给母线充电使母线的电压上升到接近电池电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3188"/>
        <source>Converter states include: OFF, AC Soft start, Grid-ON Charge, Grid-ON Discharge, Grid-OFF Discharge, Derating grid-on, Standby and Grid-OFF Charge.</source>
        <translation>变流器状态包括：关闭、交流软启动、并网充电、并网放电、离网放电、降额并网、待机、离网充电。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3192"/>
        <source>There are three types of reactive power regulation: Disable,PF regulation, and  regulation.</source>
        <translation>无功调节有三种:禁止、功率因数调节、无功功率调节。</translation>
    </message>
    <message>
        <source>LVRT states : enabled , disabled.</source>
        <translation type="vanished">低电压穿越状态:使能、禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3200"/>
        <source>Input dry contact 1 status: Enabled, Disabled.</source>
        <translation>输入干接点1的状态：使能、禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3204"/>
        <source>Input dry contact 2 status: Enabled, Disabled.</source>
        <translation>输入干接点2的状态：使能、禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3208"/>
        <source>Input dry contact 3 status: Enabled, Disabled.</source>
        <translation>输入干接点3的状态：使能、禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3212"/>
        <source>Input dry contact 4 status: Enabled, Disabled.</source>
        <translation>输入干接点4的状态：使能、禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3216"/>
        <source>Input dry contact 5 status: Enabled, Disabled.</source>
        <translation>输入干接点5的状态：使能、禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3220"/>
        <source>Input dry contact 6 status: Enabled, Disabled.</source>
        <translation>输入干接点6的状态：使能、禁止。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3230"/>
        <source>DCDC module operating modes: Boost, Buck.</source>
        <translation>DCDC模块工作方式：升压、降压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3233"/>
        <source>Soft Start Status Boost</source>
        <translation>高压侧软启动</translation>
    </message>
    <message>
        <source>This is the current high voltage side soft start state of the &apos;DC&apos; module. There are three states: Not starting, Soft start, and Soft Start completion.</source>
        <translation type="vanished">这是当前&apos;DC&apos;模块的高压侧软启动状态，有未启动(Not starting)、软启中(Soft start)、软启完成(Softstart completion)三种状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3237"/>
        <source>Soft Start Status Buck</source>
        <translation>低压侧软启动</translation>
    </message>
    <message>
        <source>This is the soft start state of the low voltage side of the current &apos;DC&apos; module. There are three states: Not starting, Soft start, and Soft Start completion.</source>
        <translation type="vanished">这是当前&apos;DC&apos;模块的低压侧软启动状态，有未启动(Not starting)、软启中(Soft start)、软启完成(Softstart completion)三种状态。</translation>
    </message>
    <message>
        <source>open</source>
        <translation type="vanished">断开</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="3249"/>
        <location filename="../mywidget.cpp" line="6072"/>
        <location filename="../mywidget.cpp" line="6082"/>
        <source>Turn off</source>
        <translation>关闭</translation>
    </message>
    <message>
        <source>This is the working mode state of the current &apos;DC&apos; module, including six states: Turn off, Standby, Constant VOL, Constant CUR, optimal power point tracking and Fault Recovery.</source>
        <translation type="vanished">这是当前&apos;DC&apos;模块的工作模式状态，有关闭(Turnoff)、待机(Standby)、恒压(Constant VOL)、恒流(Constant CUR)、追踪最佳功率点(MPPT)、故障修复(Fault Recovery)六种状态。</translation>
    </message>
    <message>
        <source>This is the lock status of the current &apos;DC&apos; module, with two states: ON and OFF.</source>
        <translation type="vanished">这是当前&apos;DC&apos;模块的模块锁状态，有闭合(ON)、断开(OFF)两种状态。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="1871"/>
        <source>Advance setting</source>
        <translation>高级设置</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2320"/>
        <source>Bat volage</source>
        <translation>电池电压</translation>
    </message>
    <message>
        <source>This is the total battery pressure of the battery pack uploaded from the BMS via the CAN/485/TCP communication protocol.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的电池组的电池总压。</translation>
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
        <translation>确定</translation>
    </message>
    <message>
        <source>Diesel generator output signal.</source>
        <translation type="vanished">柴发输出信号</translation>
    </message>
    <message>
        <source>This is the total current of the battery pack uploaded from the BMS via the CAN/485/TCP communication protocol.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的电池组的总电流。</translation>
    </message>
    <message>
        <source>This is the SOC of the battery pack uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the percentage of the current battery remaining.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的电池组SOC，即当前电池剩余电量百分比。</translation>
    </message>
    <message>
        <source>This is the SOH of the battery pack uploaded from the BMS through the CAN/485/TCP communication protocol, the percentage of the current capacity of the battery pack to the factory capacity, that is, the health of the battery.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的电池组SOH，电池组当前的容量与出厂容量的百分比，即电池的健康度。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2336"/>
        <source>Cell voltage(max)</source>
        <translation>单体最高电压</translation>
    </message>
    <message>
        <source>This is the maximum voltage of the cell uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the maximum voltage of all cell cells at present.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的单体最高电压,即当前所有电池单体的最高电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2340"/>
        <source>Cell voltage(min)</source>
        <translation>单体最低电压</translation>
    </message>
    <message>
        <source>This is the lowest voltage of the cell uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the lowest voltage of all battery cells at present.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的单体最低电压,即当前所有电池单体的最低电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2344"/>
        <source>Cell temp.(max)</source>
        <translation>单体最高温度</translation>
    </message>
    <message>
        <source>This is the highest temperature of the cell uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the highest temperature of all battery cells at present.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的单体最高温度,即当前所有电池单体的最高温度。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2348"/>
        <source>Cell temp.(min)</source>
        <translation>单体最低温度</translation>
    </message>
    <message>
        <source>This is the lowest temperature of the cell uploaded from the BMS via the CAN/485/TCP communication protocol, that is, the lowest temperature of all battery cells at present.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的单体最低温度,即当前所有电池单体的最低温度。</translation>
    </message>
    <message>
        <source>This is the upper limit of the charging current uploaded from the BMS via the CAN/485/TCP communication protocol, the maximum charging current allowed by the current battery pack (Note: when charging the end, PCS will limit the current according to the actual current).</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的充电电流上限，当前电池组所允许通过的最大充电电流(注:充电末端时，PCS会根据实际电流来进行限流)。</translation>
    </message>
    <message>
        <source>This is the upper limit of the discharge current uploaded from the BMS via the CAN/485/TCP communication protocol, the maximum discharge current allowed by the current battery pack.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的放电电流上限，当前电池组所允许通过的最大放电电流。</translation>
    </message>
    <message>
        <source>Allow charge power</source>
        <translation type="vanished">可充电功率</translation>
    </message>
    <message>
        <source>This is the rechargeable power uploaded from the BMS through the CAN/485 communication protocol. The charging power of the battery cannot exceed this limit value.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的可充电功率，电池的充电功率不可超过这个限制数值。</translation>
    </message>
    <message>
        <source>Allow discharge power</source>
        <translation type="vanished">可放电功率</translation>
    </message>
    <message>
        <source>This is the discharge power uploaded from the BMS using the CAN/485 communication protocol. The discharge power of the battery cannot exceed this limit.</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的可放电功率，电池的放电功率不可超过这个限制数值。</translation>
    </message>
    <message>
        <source>Allow charge energy</source>
        <translation type="vanished">可充电电量</translation>
    </message>
    <message>
        <source>This is the allowable charge amount uploaded from the BMS via the CAN/485/TCP communication protocol, the capacity of the current battery pack allowed to charge (Note: only some BMS will provide this value).</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的允许充电量，当前电池组允许充电的容量(注:仅部分BMS会提供这个值)。</translation>
    </message>
    <message>
        <source>Allow discharge energy</source>
        <translation type="vanished">可放电电量</translation>
    </message>
    <message>
        <source>This is the allowable discharge from the BMS via the CAN/485/TCP communication protocol, the current capacity of the battery pack allowed to discharge (Note: only some BMS will provide this value).</source>
        <translation type="vanished">这是通过CAN/485/TCP通讯协议从BMS上传的允许放电量，当前电池组允许放电的容量(注:仅部分BMS会提供这个值)。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2376"/>
        <source>Alarm level</source>
        <translation>告警等级</translation>
    </message>
    <message>
        <source>This is the alarm level icon. The color is changed according to the alarm level uploaded by the BMS. The alarm level is green for normal alarms, yellow for primary alarms, orange for secondary alarms, and red for tertiary alarms.If the alarm is Level 1 or Level 2, PCS does not respond.If the alarm is Level 3, the PCS shuts down.</source>
        <translation type="vanished">这是告警等级图示，根据BMS上传的告警等级改变颜色，此处可以通过颜色判断告警等级，正常为绿色、—级告警为黄色、二级告警为橙色、三级告警为红色;如果是一级告警或者二级告警，PCS不做响应;如果是三级告警，PCS关机。</translation>
    </message>
    <message>
        <source>Charge enable</source>
        <translation type="vanished">充电使能</translation>
    </message>
    <message>
        <source>This is the current battery status uploaded by BMS via CAN/485/TCP. Enable indicates that the battery can be charged. Disable indicates that the battery cannot be charged.</source>
        <translation type="vanished">这是充电使能，由BMS通过CAN/485/TCP通讯协议上传的当前电池的状态;使能表示目前电池允许充电，禁止表示目前电池不允许充电。</translation>
    </message>
    <message>
        <source>Discharge enable</source>
        <translation type="vanished">放电使能</translation>
    </message>
    <message>
        <source>This is the current state of the battery uploaded by the BMS via the CAN/485/TCP protocol. Enable indicates that the battery can be discharged. Disable indicates that the battery cannot be discharged.</source>
        <translation type="vanished">这是放电使能，由BMS通过CAN/485/TCP通讯协议上传的当前电池的状态;使能表示目前电池允许放电，禁止表示目前电池不允许放电。</translation>
    </message>
    <message>
        <source>voltage(AB)</source>
        <translation type="vanished">电压(AB)</translation>
    </message>
    <message>
        <source>The inverter side voltage of the current MPS is the phase voltage between phase A and phase B.</source>
        <translation type="vanished">当前MPS的逆变侧电压，此项为A相 和B相 之间的相电压。</translation>
    </message>
    <message>
        <source>The inverter side voltage of the current MPS is the phase voltage between phase B and phase C.</source>
        <translation type="vanished">当前MPS的逆变侧电压，此项为B相 和C相 之间的相电压。</translation>
    </message>
    <message>
        <source>The inverter side voltage of the current MPS is the phase voltage between phase A and phase C.</source>
        <translation type="vanished">当前MPS的逆变侧电压，此项为A相 和C相 之间的相电压。</translation>
    </message>
    <message>
        <source>The current of the inverter side of the current MPS is the current of phase A.</source>
        <translation type="vanished">当前MPS的逆变侧电流，此项为A相的电流。</translation>
    </message>
    <message>
        <source>The current of the inverter side of the current MPS is the current of phase B.</source>
        <translation type="vanished">当前MPS的逆变侧电流，此项为B相的电流。</translation>
    </message>
    <message>
        <source>The current of the inverter side of the current MPS is the current of phase C.</source>
        <translation type="vanished">当前MPS的逆变侧电流，此项为C相的电流。</translation>
    </message>
    <message>
        <source>The current IGBT temperature of MPS shall not exceed 105℃, otherwise PCS will run derated.</source>
        <translation type="vanished">当前MPS 的IGBT温度，IGBT温度不得超过105℃，否则MPS将降额运行。</translation>
    </message>
    <message>
        <source>The ambient temperature of the current MPS.</source>
        <translation type="vanished">当前MPS 所处的环境温度。</translation>
    </message>
    <message>
        <source>Leakage current: the current to the ground of the grounding wire. If the value is larger, it indicates that there is leakage.</source>
        <translation type="vanished">漏电流，接地线的对地电流，如果此项较大，说明此处有漏电现象。</translation>
    </message>
    <message>
        <source>Total voltage on the PV side collected by the current MPS.</source>
        <translation type="vanished">当前MPS 采集的PV侧的总电压。</translation>
    </message>
    <message>
        <source>Total current on the PV side collected by MPS.</source>
        <translation type="vanished">当前MPS 采集的PV侧的总电流。</translation>
    </message>
    <message>
        <source>The PV side power is obtained by multiplying the total voltage and total current calculated in the current MPS.</source>
        <translation type="vanished">当前MPS 内部计算的总电压与总电流的乘积，得到PV侧功率。</translation>
    </message>
    <message>
        <source>The current MPS samples the battery voltage from the connected battery.</source>
        <translation type="vanished">当前MPS 从接入的电池侧采样的电池电压。</translation>
    </message>
    <message>
        <source>Battery current sampled by the MPS from the connected battery.</source>
        <translation type="vanished">当前MPS 从接入的电池侧采样的电池电流。</translation>
    </message>
    <message>
        <source>At present, MPS calculates the product of battery voltage and battery current to obtain battery power.</source>
        <translation type="vanished">当前MPS 内部计算电池电压与电池电流的乘积，得到电池功率。</translation>
    </message>
    <message>
        <source>The current bus voltage sampled by MPS from the bus side.</source>
        <translation type="vanished">当前MPS 从母线侧采样的母线电压。</translation>
    </message>
    <message>
        <source>Current bus current sampled by MPS from the bus side.</source>
        <translation type="vanished">当前MPS从母线侧采样的母线电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2782"/>
        <source>Voltage H</source>
        <translation>高压侧电压</translation>
    </message>
    <message>
        <source>Current voltage of the high voltage side of the DCDC module.</source>
        <translation type="vanished">当前DCDC模块高压侧的电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2791"/>
        <source>Current H</source>
        <translation>高压侧电流</translation>
    </message>
    <message>
        <source>Current of the high voltage side of the DCDC module.</source>
        <translation type="vanished">当前DCDC模块高压侧的电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2800"/>
        <source>Power H</source>
        <translation>高压侧功率</translation>
    </message>
    <message>
        <source>Power of the high voltage side of the DCDC module.</source>
        <translation type="vanished">当前DCDC模块高压侧的功率。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2809"/>
        <source>Voltage L</source>
        <translation>低压侧电压</translation>
    </message>
    <message>
        <source>Voltage of the low voltage side of the DCDC module.</source>
        <translation type="vanished">当前DCDC模块低压侧的电压。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2818"/>
        <source>Current L</source>
        <translation>低压侧电流</translation>
    </message>
    <message>
        <source>Current of the low-voltage side of the DCDC module.</source>
        <translation type="vanished">当前DCDC模块低压侧的电流。</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2827"/>
        <source>Power L</source>
        <translation>低压侧功率</translation>
    </message>
    <message>
        <source>Power of the low voltage side of the DCDC module.</source>
        <translation type="vanished">当前DCDC模块低压侧的功率。</translation>
    </message>
    <message>
        <source>Positive insulation impedance of the current DCDC module.</source>
        <translation type="vanished">当前DCDC模块的正绝缘阻抗。</translation>
    </message>
    <message>
        <source>Bus_H_vol(+)</source>
        <translation type="vanished">高压侧正母线电压</translation>
    </message>
    <message>
        <source>Positive bus voltage of the high voltage side of the DC module.</source>
        <translation type="vanished">当前DCDC模块的高压侧正母线电压。</translation>
    </message>
    <message>
        <source>Bus_H_vol(-)</source>
        <translation type="vanished">高压侧负母线电压</translation>
    </message>
    <message>
        <source>The current high voltage side of the DC module is negative for the bus voltage.</source>
        <translation type="vanished">当前DCDC模块的高压侧负母线电压。</translation>
    </message>
    <message>
        <source>Bus_L_vol(+)</source>
        <translation type="vanished">低压侧正母线电压</translation>
    </message>
    <message>
        <source>Positive bus voltage of the low voltage side of the DC module.</source>
        <translation type="vanished">当前DCDC模块的低压侧正母线电压。</translation>
    </message>
    <message>
        <source>Bus_L_vol(-)</source>
        <translation type="vanished">低压侧负母线电压</translation>
    </message>
    <message>
        <source>The low voltage side of the DC module is negative for the bus voltage.</source>
        <translation type="vanished">当前DCDC模块的低压侧负母线电压。</translation>
    </message>
    <message>
        <source>Negative insulation impedance of the current DCDC module.</source>
        <translation type="vanished">当前DCDC模块的负绝缘阻抗。</translation>
    </message>
    <message>
        <source>Leakage_cur</source>
        <translation type="vanished">漏电流</translation>
    </message>
    <message>
        <source>Current leakage current of the DCDC module.</source>
        <translation type="vanished">当前DCDC模块的漏电流。</translation>
    </message>
    <message>
        <source>The grid side voltage of the current MPS, this item is the phase voltage between phase A and phase B.</source>
        <translation type="vanished">当前MPS的电网侧电压，此项为A相 和B相 之间的相电压。</translation>
    </message>
    <message>
        <source>The grid side voltage of the current MPS, this item is the phase voltage between phase B and phase C.</source>
        <translation type="vanished">当前MPS的电网侧电压，此项为B相 和C相 之间的相电压。</translation>
    </message>
    <message>
        <source>The grid side voltage of the current MPS, this item is the phase voltage between phase A and phase C.</source>
        <translation type="vanished">当前MPS的电网侧电压，此项为A相 和C相 之间的相电压。</translation>
    </message>
    <message>
        <source>The current on the grid side of MPS, this item is the current of phase A.</source>
        <translation type="vanished">当前MPS的电网侧电流，此项为A相的电流。</translation>
    </message>
    <message>
        <source>The current on the grid side of MPS, this item is the current of phase B.</source>
        <translation type="vanished">当前MPS的电网侧电流，此项为B相的电流。</translation>
    </message>
    <message>
        <source>The current on the grid side of MPS, this item is the current of phase C.</source>
        <translation type="vanished">当前MPS的电网侧电流，此项为C相的电流。</translation>
    </message>
    <message>
        <source>Current active power (P) on the grid side of MPS.</source>
        <translation type="vanished">当前MPS的电网侧有功功率P。</translation>
    </message>
    <message>
        <source>Current reactive power (Q) on the grid side of MPS.</source>
        <translation type="vanished">当前MPS的电网侧无功功率Q。</translation>
    </message>
    <message>
        <source>Current MPS grid side view power (S), S= √((P^2+Q^2)).</source>
        <translation type="vanished">当前MPS的电网侧视在功率S，S= √((P^2+Q^2))。</translation>
    </message>
    <message>
        <source>Grid side power factor (Pf) of the current MPS, Pf = P/S.</source>
        <translation type="vanished">当前MPS的电网侧功率因素Pf， Pf = P / S。</translation>
    </message>
    <message>
        <source>Current MPS collection of power grid frequency.</source>
        <translation type="vanished">当前MPS的采集的电网频率。</translation>
    </message>
    <message>
        <source>The load side voltage of the current MPS, this item is the phase voltage between phase A and phase B.</source>
        <translation type="vanished">当前MPS的负载侧电压，此项为A相 和B相 之间的相电压。</translation>
    </message>
    <message>
        <source>The load side voltage of the current MPS, this item is the phase voltage between phase B and phase C.</source>
        <translation type="vanished">当前MPS的负载侧电压，此项为B相 和C相 之间的相电压。</translation>
    </message>
    <message>
        <source>The load side voltage of the current MPS, this item is the phase voltage between phase A and phase C.</source>
        <translation type="vanished">当前MPS的负载侧电压，此项为A相 和C相 之间的相电压。</translation>
    </message>
    <message>
        <source>The current on the load side of MPS, this item is the current of phase A.</source>
        <translation type="vanished">当前MPS的负载侧电流，此项为A相的电流。</translation>
    </message>
    <message>
        <source>The current at the load side of MPS is the current of phase B.</source>
        <translation type="vanished">当前MPS的负载侧电流，此项为B相的电流。</translation>
    </message>
    <message>
        <source>The current at the load side of MPS is the current of phase C.</source>
        <translation type="vanished">当前MPS的负载侧电流，此项为C相的电流。</translation>
    </message>
    <message>
        <source>Current MPS active power (P) on load side.</source>
        <translation type="vanished">当前MPS的负载侧有功功率P。</translation>
    </message>
    <message>
        <source>Reactive power (Q) on the load side of current MPS.</source>
        <translation type="vanished">当前MPS的负载侧无功功率Q。</translation>
    </message>
    <message>
        <source>Current MPS load side view at power (S), S= √((P^2+Q^2)).</source>
        <translation type="vanished">当前MPS的负载侧视在功率S，S= √((P^2+Q^2))。</translation>
    </message>
    <message>
        <source>The load side power factor (Pf) of the current MPS, Pf = P/S.</source>
        <translation type="vanished">当前MPS的负载侧功率因素Pf， Pf = P / S。</translation>
    </message>
    <message>
        <source>Current MPS collection of power load frequency.</source>
        <translation type="vanished">当前MPS的采集的负载频率。</translation>
    </message>
    <message>
        <source>Current bus current sampled by MPS from the bus side</source>
        <translation type="vanished">当前MPS从母线侧采样的母线电流。</translation>
    </message>
    <message>
        <source>voltage(AC)</source>
        <translation type="vanished">电压(AC)</translation>
    </message>
    <message>
        <source>current(A)</source>
        <translation type="vanished">电流(A)</translation>
    </message>
    <message>
        <source>current(B)</source>
        <translation type="vanished">电流(B)</translation>
    </message>
    <message>
        <source>current(C)</source>
        <translation type="vanished">电流(C)</translation>
    </message>
    <message>
        <location filename="../mywidget.cpp" line="2673"/>
        <source>Environment temperature</source>
        <translation>环境温度</translation>
    </message>
</context>
<context>
    <name>OperMode</name>
    <message>
        <location filename="../OperMode/opermode.ui" line="23"/>
        <source>Working mode</source>
        <translation>工作模式</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="98"/>
        <source>System for self-use:
When PV, battery, photovoltaic available.</source>
        <translation>自发自用：
当PV、电池、光伏可用。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="146"/>
        <source>A. PV gives priority to the load power supply, if the PV power is large enough, the remaining energy is provided to the battery charge, if the PV has remaining energy, the energy is returned to the grid.</source>
        <translation>A、PV优先给负载供电，如果PV功率足够大，剩余的能量提供给电池充电，如果PV还有剩余的能量，则将能量回馈到电网。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="192"/>
        <source>B, PV priority to supply the load, if the PV is not enough to power the load, the battery and PV at the same time to power the load.</source>
        <translation>B、PV优先共给负载，如果PV不足以为负载供电，则电池和PV同时为负载供电。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="238"/>
        <source>C, PV priority to supply the load, if the PV and battery are not enough to supply power to the load, the grid, PV, battery at the same time to supply power to the load.</source>
        <translation>C、PV优先供给负载，如果PV和电池不足以为负载供电，则电网，PV，电池同时为负载供电。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="257"/>
        <location filename="../OperMode/opermode.ui" line="1247"/>
        <location filename="../OperMode/opermode.ui" line="2368"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="262"/>
        <location filename="../OperMode/opermode.ui" line="1252"/>
        <location filename="../OperMode/opermode.ui" line="2373"/>
        <source>2</source>
        <translation>2</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="267"/>
        <location filename="../OperMode/opermode.ui" line="1257"/>
        <location filename="../OperMode/opermode.ui" line="2378"/>
        <source>3</source>
        <translation>3</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="272"/>
        <location filename="../OperMode/opermode.ui" line="1262"/>
        <location filename="../OperMode/opermode.ui" line="2383"/>
        <source>4</source>
        <translation>4</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="277"/>
        <location filename="../OperMode/opermode.ui" line="1267"/>
        <location filename="../OperMode/opermode.ui" line="2388"/>
        <source>5</source>
        <translation>5</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="282"/>
        <location filename="../OperMode/opermode.ui" line="1272"/>
        <location filename="../OperMode/opermode.ui" line="2393"/>
        <source>6</source>
        <translation>6</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="287"/>
        <location filename="../OperMode/opermode.ui" line="1277"/>
        <location filename="../OperMode/opermode.ui" line="2398"/>
        <source>7</source>
        <translation>7</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="292"/>
        <location filename="../OperMode/opermode.ui" line="1282"/>
        <location filename="../OperMode/opermode.ui" line="2403"/>
        <source>8</source>
        <translation>8</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="297"/>
        <location filename="../OperMode/opermode.ui" line="1287"/>
        <location filename="../OperMode/opermode.ui" line="2408"/>
        <source>9</source>
        <translation>9</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="302"/>
        <location filename="../OperMode/opermode.ui" line="802"/>
        <location filename="../OperMode/opermode.ui" line="1292"/>
        <location filename="../OperMode/opermode.ui" line="1792"/>
        <location filename="../OperMode/opermode.ui" line="2413"/>
        <location filename="../OperMode/opermode.ui" line="2913"/>
        <source>10</source>
        <translation>10</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="307"/>
        <location filename="../OperMode/opermode.ui" line="1297"/>
        <location filename="../OperMode/opermode.ui" line="2418"/>
        <source>11</source>
        <translation>11</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="312"/>
        <location filename="../OperMode/opermode.ui" line="1302"/>
        <location filename="../OperMode/opermode.ui" line="2423"/>
        <source>12</source>
        <translation>12</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="317"/>
        <location filename="../OperMode/opermode.ui" line="1307"/>
        <location filename="../OperMode/opermode.ui" line="2428"/>
        <source>13</source>
        <translation>13</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="322"/>
        <location filename="../OperMode/opermode.ui" line="1312"/>
        <location filename="../OperMode/opermode.ui" line="2433"/>
        <source>14</source>
        <translation>14</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="327"/>
        <location filename="../OperMode/opermode.ui" line="1317"/>
        <location filename="../OperMode/opermode.ui" line="2438"/>
        <source>15</source>
        <translation>15</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="332"/>
        <location filename="../OperMode/opermode.ui" line="1322"/>
        <location filename="../OperMode/opermode.ui" line="2443"/>
        <source>16</source>
        <translation>16</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="337"/>
        <location filename="../OperMode/opermode.ui" line="1327"/>
        <location filename="../OperMode/opermode.ui" line="2448"/>
        <source>17</source>
        <translation>17</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="342"/>
        <location filename="../OperMode/opermode.ui" line="1332"/>
        <location filename="../OperMode/opermode.ui" line="2453"/>
        <source>18</source>
        <translation>18</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="347"/>
        <location filename="../OperMode/opermode.ui" line="1337"/>
        <location filename="../OperMode/opermode.ui" line="2458"/>
        <source>19</source>
        <translation>19</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="352"/>
        <location filename="../OperMode/opermode.ui" line="490"/>
        <location filename="../OperMode/opermode.ui" line="1342"/>
        <location filename="../OperMode/opermode.ui" line="1480"/>
        <location filename="../OperMode/opermode.ui" line="2463"/>
        <location filename="../OperMode/opermode.ui" line="2601"/>
        <source>20</source>
        <translation>20</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="357"/>
        <location filename="../OperMode/opermode.ui" line="1347"/>
        <location filename="../OperMode/opermode.ui" line="2468"/>
        <source>21</source>
        <translation>21</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="362"/>
        <location filename="../OperMode/opermode.ui" line="1352"/>
        <location filename="../OperMode/opermode.ui" line="2473"/>
        <source>22</source>
        <translation>22</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="367"/>
        <location filename="../OperMode/opermode.ui" line="1357"/>
        <location filename="../OperMode/opermode.ui" line="2478"/>
        <source>23</source>
        <translation>23</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="372"/>
        <location filename="../OperMode/opermode.ui" line="1362"/>
        <location filename="../OperMode/opermode.ui" line="2483"/>
        <source>24</source>
        <translation>24</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="377"/>
        <location filename="../OperMode/opermode.ui" line="1367"/>
        <location filename="../OperMode/opermode.ui" line="2488"/>
        <source>25</source>
        <translation>25</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="382"/>
        <location filename="../OperMode/opermode.ui" line="1372"/>
        <location filename="../OperMode/opermode.ui" line="2493"/>
        <source>Parameter name</source>
        <translation>参数名称</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="387"/>
        <location filename="../OperMode/opermode.ui" line="1377"/>
        <location filename="../OperMode/opermode.ui" line="2498"/>
        <source>Parameter description</source>
        <translation>参数说明</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="392"/>
        <location filename="../OperMode/opermode.ui" line="1382"/>
        <location filename="../OperMode/opermode.ui" line="2503"/>
        <source>Radius</source>
        <translation>范围</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="397"/>
        <location filename="../OperMode/opermode.ui" line="1387"/>
        <location filename="../OperMode/opermode.ui" line="2508"/>
        <source>Default value</source>
        <translation>默认值</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="402"/>
        <location filename="../OperMode/opermode.ui" line="1392"/>
        <location filename="../OperMode/opermode.ui" line="2513"/>
        <location filename="../OperMode/opermode.cpp" line="110"/>
        <source>Battery type</source>
        <translation>电池类型</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="410"/>
        <location filename="../OperMode/opermode.ui" line="418"/>
        <location filename="../OperMode/opermode.ui" line="1400"/>
        <location filename="../OperMode/opermode.ui" line="1408"/>
        <location filename="../OperMode/opermode.ui" line="2521"/>
        <location filename="../OperMode/opermode.ui" line="2529"/>
        <source>Lithium</source>
        <translation>锂电</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="426"/>
        <location filename="../OperMode/opermode.ui" line="1416"/>
        <location filename="../OperMode/opermode.ui" line="2537"/>
        <location filename="../OperMode/opermode.cpp" line="111"/>
        <source>BMS Comm.type</source>
        <translation>电池通信方式</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="434"/>
        <location filename="../OperMode/opermode.ui" line="1424"/>
        <location filename="../OperMode/opermode.ui" line="2545"/>
        <source>CAN/485</source>
        <translation>CAN/485</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="442"/>
        <location filename="../OperMode/opermode.ui" line="1432"/>
        <location filename="../OperMode/opermode.ui" line="2553"/>
        <source>CAN</source>
        <translation>CAN</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="450"/>
        <location filename="../OperMode/opermode.ui" line="1440"/>
        <location filename="../OperMode/opermode.ui" line="2561"/>
        <location filename="../OperMode/opermode.cpp" line="112"/>
        <source>EMS Comm.type</source>
        <translation>EMS通信方式</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="458"/>
        <location filename="../OperMode/opermode.ui" line="1448"/>
        <location filename="../OperMode/opermode.ui" line="2569"/>
        <source>485/TCP</source>
        <translation>485/TCP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="466"/>
        <location filename="../OperMode/opermode.ui" line="1456"/>
        <location filename="../OperMode/opermode.ui" line="2577"/>
        <source>485</source>
        <translation>485485</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="474"/>
        <location filename="../OperMode/opermode.ui" line="1464"/>
        <location filename="../OperMode/opermode.ui" line="2585"/>
        <location filename="../OperMode/opermode.cpp" line="113"/>
        <source>Charge SOC</source>
        <translation>充电SOC</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="482"/>
        <location filename="../OperMode/opermode.ui" line="506"/>
        <location filename="../OperMode/opermode.ui" line="1472"/>
        <location filename="../OperMode/opermode.ui" line="1496"/>
        <location filename="../OperMode/opermode.ui" line="2593"/>
        <location filename="../OperMode/opermode.ui" line="2617"/>
        <source>1~100</source>
        <translation>1~100</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="498"/>
        <location filename="../OperMode/opermode.ui" line="1488"/>
        <location filename="../OperMode/opermode.ui" line="2609"/>
        <location filename="../OperMode/opermode.cpp" line="114"/>
        <source>Discharge SOC</source>
        <translation>放电SOC</translation>
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
        <translation>-</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="522"/>
        <location filename="../OperMode/opermode.ui" line="1512"/>
        <location filename="../OperMode/opermode.ui" line="2633"/>
        <location filename="../OperMode/opermode.cpp" line="115"/>
        <source>Energy priority</source>
        <translation>能量优先级</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="530"/>
        <location filename="../OperMode/opermode.ui" line="1520"/>
        <location filename="../OperMode/opermode.ui" line="2641"/>
        <source>Bat&gt;Grid、Grid&gt;Bat</source>
        <translation>电池&gt;电网、电网&gt;电池</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="538"/>
        <location filename="../OperMode/opermode.ui" line="1528"/>
        <location filename="../OperMode/opermode.ui" line="2649"/>
        <source>Bat&gt;Grid</source>
        <translation>电池&gt;电网</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="546"/>
        <location filename="../OperMode/opermode.ui" line="1536"/>
        <location filename="../OperMode/opermode.ui" line="2657"/>
        <location filename="../OperMode/opermode.cpp" line="116"/>
        <source>Grid connected mode of lnv</source>
        <translation>防逆流</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="554"/>
        <location filename="../OperMode/opermode.ui" line="1544"/>
        <location filename="../OperMode/opermode.ui" line="2665"/>
        <source>Countercurret、Non Countercurret</source>
        <translation>可逆流/不可逆流</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="562"/>
        <location filename="../OperMode/opermode.ui" line="1552"/>
        <location filename="../OperMode/opermode.ui" line="2673"/>
        <source>Non Countercurret</source>
        <translation>不可逆流</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="570"/>
        <location filename="../OperMode/opermode.ui" line="1560"/>
        <location filename="../OperMode/opermode.ui" line="2681"/>
        <location filename="../OperMode/opermode.cpp" line="117"/>
        <source>Constant power(AC)</source>
        <translation>恒功率(AC)</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="578"/>
        <location filename="../OperMode/opermode.ui" line="1568"/>
        <location filename="../OperMode/opermode.ui" line="2689"/>
        <source>-Rated power~Rated power</source>
        <translation>-额定功率~额定功率</translation>
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
        <translation>0</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="594"/>
        <location filename="../OperMode/opermode.ui" line="1584"/>
        <location filename="../OperMode/opermode.ui" line="2705"/>
        <location filename="../OperMode/opermode.cpp" line="118"/>
        <source>Charge Volt. upper Limit(V)</source>
        <translation>充电电压上限(V)</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="602"/>
        <location filename="../OperMode/opermode.ui" line="650"/>
        <location filename="../OperMode/opermode.ui" line="1592"/>
        <location filename="../OperMode/opermode.ui" line="1640"/>
        <location filename="../OperMode/opermode.ui" line="2713"/>
        <location filename="../OperMode/opermode.ui" line="2761"/>
        <source>400~850</source>
        <translation>400~850</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="610"/>
        <location filename="../OperMode/opermode.ui" line="1600"/>
        <location filename="../OperMode/opermode.ui" line="2721"/>
        <source>Battery charging cut-off voltage</source>
        <translation>电池充电截止电压</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="618"/>
        <location filename="../OperMode/opermode.ui" line="1608"/>
        <location filename="../OperMode/opermode.ui" line="2729"/>
        <location filename="../OperMode/opermode.cpp" line="119"/>
        <source>Charge Volt. upper Limit delta(V)</source>
        <translation>充电电压上限回差(V)</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="634"/>
        <location filename="../OperMode/opermode.ui" line="682"/>
        <location filename="../OperMode/opermode.ui" line="1624"/>
        <location filename="../OperMode/opermode.ui" line="1672"/>
        <location filename="../OperMode/opermode.ui" line="2745"/>
        <location filename="../OperMode/opermode.ui" line="2793"/>
        <source>10mV</source>
        <translation>10mV</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="642"/>
        <location filename="../OperMode/opermode.ui" line="1632"/>
        <location filename="../OperMode/opermode.ui" line="2753"/>
        <location filename="../OperMode/opermode.cpp" line="120"/>
        <source>Discharge Volt. lower Limit(V)</source>
        <translation>放电电压下限(V)</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="658"/>
        <location filename="../OperMode/opermode.ui" line="1648"/>
        <location filename="../OperMode/opermode.ui" line="2769"/>
        <source>Battery discharge cut-off voltage</source>
        <translation>电池放电截止电压</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="666"/>
        <location filename="../OperMode/opermode.ui" line="1656"/>
        <location filename="../OperMode/opermode.ui" line="2777"/>
        <location filename="../OperMode/opermode.cpp" line="121"/>
        <source>Discharge Volt. lower Limit delta(V)</source>
        <translation>放电电压下限回差(V)</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="690"/>
        <location filename="../OperMode/opermode.ui" line="1680"/>
        <location filename="../OperMode/opermode.ui" line="2801"/>
        <location filename="../OperMode/opermode.cpp" line="122"/>
        <source>Charge Current Limit(A)</source>
        <translation>充电电流限制(A)</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="698"/>
        <location filename="../OperMode/opermode.ui" line="722"/>
        <location filename="../OperMode/opermode.ui" line="1688"/>
        <location filename="../OperMode/opermode.ui" line="1712"/>
        <location filename="../OperMode/opermode.ui" line="2809"/>
        <location filename="../OperMode/opermode.ui" line="2833"/>
        <source>0 ~ 1000</source>
        <translation>0 ~ 1000</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="706"/>
        <location filename="../OperMode/opermode.ui" line="730"/>
        <location filename="../OperMode/opermode.ui" line="1696"/>
        <location filename="../OperMode/opermode.ui" line="1720"/>
        <location filename="../OperMode/opermode.ui" line="2817"/>
        <location filename="../OperMode/opermode.ui" line="2841"/>
        <source>By battery limit</source>
        <translation>根据电池限制</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="714"/>
        <location filename="../OperMode/opermode.ui" line="1704"/>
        <location filename="../OperMode/opermode.ui" line="2825"/>
        <location filename="../OperMode/opermode.cpp" line="123"/>
        <source>Discharge Current Limit(A)</source>
        <translation>放电电流限制(A)</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="738"/>
        <location filename="../OperMode/opermode.ui" line="1728"/>
        <location filename="../OperMode/opermode.ui" line="2849"/>
        <source>DOD_OnGrid(%)</source>
        <translation>并网DOD</translation>
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
        <translation>1~100</translation>
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
        <translation>100</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="762"/>
        <location filename="../OperMode/opermode.ui" line="1752"/>
        <location filename="../OperMode/opermode.ui" line="2873"/>
        <source>DOD_OffGrid(%)</source>
        <translation>离网DOD</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="778"/>
        <location filename="../OperMode/opermode.ui" line="1768"/>
        <location filename="../OperMode/opermode.ui" line="2889"/>
        <source>90</source>
        <translation>90</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="786"/>
        <location filename="../OperMode/opermode.ui" line="1776"/>
        <location filename="../OperMode/opermode.ui" line="2897"/>
        <source>Generator turn on SOC</source>
        <translation>柴发启动SOC</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="810"/>
        <location filename="../OperMode/opermode.ui" line="1800"/>
        <location filename="../OperMode/opermode.ui" line="2921"/>
        <source>Generator turn off SOC</source>
        <translation>柴发停止SOC</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1057"/>
        <source>Battery priority: 
	When PV, battery, photovoltaic is available.</source>
        <translation>电池优先：
    当PV、电池、光伏可用。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="126"/>
        <source>Generator turn on SOC(A1)</source>
        <translation>发电机开启SOC(A1)</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="127"/>
        <source>Generator turn off SOC(B1)</source>
        <translation>发电机关闭SOC(B1)</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="826"/>
        <location filename="../OperMode/opermode.ui" line="1816"/>
        <location filename="../OperMode/opermode.ui" line="2937"/>
        <source>95</source>
        <translation>95</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="834"/>
        <location filename="../OperMode/opermode.ui" line="1824"/>
        <location filename="../OperMode/opermode.ui" line="2945"/>
        <location filename="../OperMode/opermode.cpp" line="128"/>
        <source>Maximum battery protection value(V)</source>
        <translation>电池最高单体保护值</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="842"/>
        <location filename="../OperMode/opermode.ui" line="1832"/>
        <location filename="../OperMode/opermode.ui" line="2953"/>
        <source>3550 ~ 3650</source>
        <translation>3550~3650</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="850"/>
        <location filename="../OperMode/opermode.ui" line="1840"/>
        <location filename="../OperMode/opermode.ui" line="2961"/>
        <source>3650</source>
        <translation>3650</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="858"/>
        <location filename="../OperMode/opermode.ui" line="1848"/>
        <location filename="../OperMode/opermode.ui" line="2969"/>
        <source>DG_ECP</source>
        <translation>DG_ECP</translation>
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
        <translation>0 ~ 100</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="882"/>
        <location filename="../OperMode/opermode.ui" line="1872"/>
        <location filename="../OperMode/opermode.ui" line="2993"/>
        <source>DG_FCP</source>
        <translation>DG_FCP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="906"/>
        <location filename="../OperMode/opermode.ui" line="1896"/>
        <location filename="../OperMode/opermode.ui" line="3017"/>
        <source>Grid_ECP</source>
        <translation>Grid_ECP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="930"/>
        <location filename="../OperMode/opermode.ui" line="1920"/>
        <location filename="../OperMode/opermode.ui" line="3041"/>
        <source>Grid_FCP</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="954"/>
        <location filename="../OperMode/opermode.ui" line="1944"/>
        <location filename="../OperMode/opermode.ui" line="3065"/>
        <source>Grid_EDP</source>
        <translation>Grid_EDP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="978"/>
        <location filename="../OperMode/opermode.ui" line="1968"/>
        <location filename="../OperMode/opermode.ui" line="3089"/>
        <source>Grid_FDP</source>
        <translation>Grid_FDP</translation>
    </message>
    <message>
        <source>Battery priority: When PV, battery, photovoltaic is available.</source>
        <translation type="vanished">电池优先：
    当PV、电池、光伏可用。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1098"/>
        <source>(1)A, PV priority to charge the battery, excess energy to the load, if there is excess energy back to the grid.</source>
        <translation>（1）A、PV优先给电池充电，多余的能量给负载，如果还有多余的能量就回馈给电网。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1144"/>
        <source>B, PV energy is given priority to battery charging, excess energy to the load.</source>
        <translation>B、PV能量优先给电池充电，多余的能量给负载。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1190"/>
        <source>B, when PV is not enough to supply the battery and load, the grid provides the load with surplus energy.</source>
        <translation>当PV不足以供给电池和负载时，电网给负载提供剩余能量。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1230"/>
        <source>(2) When the grid battery is available: A, the grid charges the battery and provides energy to the load.</source>
        <translation>（2）当电网电池可用时：电网给电池充电，同时给负载提供能量。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2049"/>
        <source>1, when the battery, PV, grid is available</source>
        <translation>1.当电池、PV、电网可用时</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2095"/>
        <source>A. When the PV is large enough, the PV charges the battery and supplies the load at the same time, and if there is any surplus, it is returned to the grid.</source>
        <translation>A、PV足够大时， PV给电池充电，同时供给负载，如果还有剩余，则回馈给电网。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2141"/>
        <source>B. When PV is insufficient, PV charges the battery and supplies power to the load at the same time, and the grid supplements the remaining energy.</source>
        <translation>B、当PV不足时，PV给电池充电，同时给负载供电，电网补充剩余的能量。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2187"/>
        <source>C. When PV is insufficient and the load power is less than the power set value on the AC side, the AC side supplies the load, the remaining available power on the AC side will charge the battery, and the PV will charge the battery.</source>
        <translation>C、当PV不足时，负载功率小于交流侧功率设定值时，交流侧供给负载，交流侧剩余可用功率将会给电池充电，同时PV给电池充电。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2233"/>
        <source>D, when the PV is insufficient, the load power is greater than the AC power, the AC power is available to power the load, and the PV makes up the remaining power to the load, if the PV is insufficient, the battery adds the remaining energy.</source>
        <translation>D、当PV不足时，负载功率大于交流侧功率时，交流侧可用功率将负载供电，同时PV给负载补足剩余的功率，如果PV不足，则电池补充剩余能量。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2257"/>
        <source>2, when the battery, the grid is available</source>
        <translation>2.当电池、电网可用时</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2303"/>
        <source>A. When the load power is less than the power set value on the AC side, the AC side supplies the load, and the remaining available power on the AC side will charge the battery.</source>
        <translation>A、负载功率小于交流侧功率设定值时，交流侧供给负载，交流侧剩余可用功率将会给电池充电。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2349"/>
        <source>B. When the load power is greater than the AC power, the available power on the AC side will supply power to the load and supplement the remaining energy with the battery.</source>
        <translation>B、负载功率大于交流侧功率时，交流侧可用功率将给负载供电，同电池补充剩余能量。</translation>
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
        <translation>电池区域划分：
ECP作用区域：
    饱和区 + 均衡区（SOC由高到低衰减到充电SOC时）。
FCP作用区域：
    放空区+均衡区域（SOC小于充电SOC，由低到高增加，到放电SOC截止）。
EDP作用区域：
    饱和区 + 均衡区（SOC由高到低衰减到充电SOC时）。
FDP作用区域：
    放空区+均衡区域（SOC小于充电SOC，由低到高增加，到放电SOC截止）。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3204"/>
        <source>Chaifa startup logic (for all modes) :
    The display starts to enter the firewood control logic 4 minutes after the start of the display screen. 
    If the DCAC is not running, the diesel generator will be started if the power grid fails, and the diesel generator will be shut down when the power grid recovers. 
    If the DCAC is running, the SOC will be started/SOC will be stopped to control the diesel power.</source>
        <translation>柴发启动逻辑(用于所有模式)：
    显示屏启动后4分钟后开始进入柴发控制逻辑，
    DCAC没运行的情况下，如果电网掉电，则开启柴发，电网恢复则关闭柴发，
    如果DCAC处于运行状态则按照柴发启动SOC/柴发停止SOC来控制柴发。</translation>
    </message>
    <message>
        <source>Batter priority</source>
        <translation type="vanished">电池优先</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="1504"/>
        <location filename="../OperMode/opermode.ui" line="2625"/>
        <source>50</source>
        <translation>50</translation>
    </message>
    <message>
        <source>Optimal mode</source>
        <translation type="vanished">最优模式</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="2985"/>
        <location filename="../OperMode/opermode.ui" line="3009"/>
        <location filename="../OperMode/opermode.ui" line="3033"/>
        <location filename="../OperMode/opermode.ui" line="3057"/>
        <location filename="../OperMode/opermode.ui" line="3081"/>
        <location filename="../OperMode/opermode.ui" line="3105"/>
        <source>Set according to customer requirements</source>
        <translation>根据客户要求设置</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3255"/>
        <source>Return</source>
        <translation>返回</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3301"/>
        <source>Battery
AreaDivision</source>
        <translation>电池区域划分</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3342"/>
        <source>System
for self-use</source>
        <translation>自发自用</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3433"/>
        <source>Optimal</source>
        <translation>最优模式</translation>
    </message>
    <message>
        <source>System
for self use</source>
        <translation type="vanished">自发自用</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.ui" line="3383"/>
        <source>Batter
priority</source>
        <translation>电池优先</translation>
    </message>
    <message>
        <source>Peak shaving</source>
        <translation type="vanished">削峰填谷</translation>
    </message>
    <message>
        <source>System for self-use mode:
PV first provides energy to the user&apos;s load, and if there is more energy left, it will charge the battery.

System for self-use Running logic:
1.1 When the grid is operating, the system is under on-grid operating mode. Grid side of the ATS is closed.
① PPV≥PLOAD+PBAT 
PV provides energy to user`s load as first priority, if there is more energy left, it will charge up the batteries. After the batteries are fully charged, if PPV＞PLOAD, the MPS will run at power limited operation.

② PPV＜PLOAD＜PPV+PBAT
PV and batteries provide energy to the load together, when the battery SOC &lt; 20%(set point resettable), the battery will stop discharging. The load will be supplied from PV and grid.

③ When PV and batteries are unavailable, the grid will provide energy to the load.

1.2 When the grid has faults or cut off from electricity, ATS will switch from grid side to diesel power generator side automatically. The MPS is under off-grid mode during the progress of switching. PV and batteries will provide energy to the load under this circumstance. When MPS detects that ATS has switched to the diesel power generator side already, and MPS detects battery SOC &lt;20%, then MPS will send Dry Contact signal to start the diesel generator. After the diesel generator started successfully, if the real-time detection is the consistent to the grid voltage magnitude, frequency and phase, the MPS will be at on-grid mode.

① PPV≥PLOAD+PBAT
PV will provide energy to user`s loads as first priority, if there is more energy from PV, the energy will be used to charge up batteries. After the batteries are fully charged, if PPV &gt; PLOAD, the MPS will run at power limited operation.

② PPV＜PLOAD＜PPV+PBAT
PV and batteries provide energy to the load together, when the batteries SOC &lt; 20%(set point resettable), MPS will send the starting signal to DG controller so that the diesel generator is started. The load will be supplied from PV and DG.

③ PPV＜PLOAD＜PPV+PBAT
When the battery SOC &gt; 80% (this set point resettable), MPS will send Dry Contact signals to shut down the diesel generator, PV and batteries provide energy to user`s load all together.

1.3 When the grid is recovered, ATS will switch from diesel generator side to grid side automatically. During the switching progress, the MPS turns into off-grid operating mode, when the MPS detects ATS is switched to grid side, the MPS will recover grid operating mode again.

After MPS switched to on-grid mode, the control strategies follow the settings of normal grid circumstances.</source>
        <translation type="vanished">自发自用模式:
光伏首先为用户的负载提供能量，如果剩下更多的能量，它将为电池充电。

自发自用模式运行逻辑：
1.1电网运行时，系统处于并网运行模式。ATS的电网侧关闭。

① PPV≥PLOAD+PBAT 
光伏首先为用户的负载提供能量，如果剩下更多的能量，它将为电池充电。电池充满电后，如果PPV＞PLOAD，MPS将以功率限制运行。

② PPV＜PLOAD＜PPV+PBAT
PV和电池一起向负载提供能量，当电池SOC&lt;20%（可重置设定值）时，电池将停止放电。负载将由光伏和电网提供。

③ 当光伏和电池不可用时，电网将为负载提供能量。

1.2当电网出现故障或停电时，ATS将自动从电网侧切换到柴油发电机侧。在切换过程中，MPS处于离网模式。在这种情况下，光伏和电池将为负载提供能量。
当MPS检测到ATS已经切换到柴油发电机侧，并且MPS检测到电池SOC&lt;20%时，MPS将发送干触点信号以启动柴油发电机。
柴油发电机成功启动后，如果实时检测与电网电压幅值、频率和相位一致，MPS将处于并网模式。

① PPV≥PLOAD+PBAT
光伏将首先为用户的负载提供能量，如果光伏有更多的能量，这些能量将用于为电池充电。电池充满电后，如果PPV&gt;PLOAD，MPS将以功率限制运行。

② PPV＜PLOAD＜PPV+PBAT
PV和电池一起向负载提供能量，当电池SOC&lt;20%（设定值可重置）时，MPS将向DG控制器发送启动信号，从而启动柴油发电机。负载将由PV和DG提供。

③ PPV＜PLOAD＜PPV+PBAT
当电池SOC&gt;80%（该设定值可重置）时，MPS将发送干触点信号以关闭柴油发电机，PV和电池一起为用户的负载提供能量。

1.3电网恢复后，ATS将自动从柴油发电机侧切换到电网侧。在切换过程中，MPS进入离网运行模式，当MPS检测到ATS切换到电网侧时，MPS将再次恢复电网运行模式。

MPS切换到并网模式后，控制策略遵循正常电网环境的设置。</translation>
    </message>
    <message>
        <source>Battery priority mode:
PV prioritizes charging the battery, and if more energy is available, it will be used to power the user&apos;s load.

Battery priority mode running logic:
1.1 When the grid is operating, the system is under on-grid operating mode. Grid side of the ATS is closed.
① PPV≥PLOAD+PBAT(charging)
PV charges battery up as first priority, if there is more energy, it will be used to provide energy to user`s load. After the battery is fully charged, if PPV &gt; PLOAD, then MPS will work under power limited operation.

② PPV＞PBAT(charging) and PPV ＜ PLOAD+PBAT(charging)
PV will charge the batteries up as first priority, PV and the grid will provide energy to user`s load all together. That is PLOAD =PPV －PBAT(charging)＋PGRID.

③ PPV＜PBAT(charging) 
PV and the grid charge the batteries up all together, the load&apos;s energy will be provided totally by the grid. That is PBAT（charging）= Pset（charging）＋ PPV ，PGRID =Pset＋ PLOAD.

④ When PV is unavailable, the grid will provide energy to the load, and charge the batteries simultaneously. That is PGRID = PLOAD ＋ PBAT（charging）.

⑤ PPV &lt; PLOAD and the battery SOC=100%

PV and the grid provide energy to the load all together. MPS collects real time load power and PV generated power. By calculating PV generated power and load power, the remaining energy required by the load is provided by the grid, that is PLOAD = PPV ＋PGRID.

1.2 When the grid has faults or cut off from electricity, ATS switches from grid side to diesel power generator side automatically, the MPS is under off-grid operation mode while switching, PV and batteries will provide energy to the load. When MPS detects ATS has switched to diesel generators side, MPS will send Dry Contact signals to start the diesel power generator. After the diesel generator started successfully, if the real-time detection is the consistent to the grid voltage magnitude, frequency and phase, the MPS will be at on-grid mode. 

① PPV≥PLOAD+PBAT(charging)
PV will charge the batteries up as first priority, if there is more energy left, it will be provided to the load. When the battery is fully charged, if PPV &gt; PLOAD, then MPS will work under power limited operation.

② PPV＞PBAT(charging) and PPV ＜ PLOAD+PBAT(charging)
PV will charge the batteries up as first priority, PV and diesel generator will provide energy to user`s load all together. That is PLOAD =PPV －PBAT（charging）＋PDG.

③ PPV＜PBAT(charging) 
PV and diesel generator combine to charge the batteries up, the load’s energy will be provided totally by the diesel generator. PBAT（charging）=PDG － PLOAD ＋PPV. 

④ When PV is unavailable, diesel generator will provide energy to the load and charge the batteries simultaneously. That is PDG= PLOAD ＋ PBAT（charging）.

⑤ PPV &lt; PLOAD and the battery SOC=100%
PV and diesel generator provide energy to the load all together. MPS collects real time load power and PV generated power. By calculating PV generated power and load power, diesel generator will provide the remaining energy, that is PLOAD = PPV ＋PDG.

1.3 When the grid is recovered, ATS will switch from diesel generator side to grid side automatically. During the switching progress, the MPS turns into off-grid operating mode, when the MPS detects ATS is switched to grid side, the MPS will recover grid operating mode again.

After MPS switched to on-grid mode, the control strategies follow the settings of normal grid circumstances.</source>
        <translation type="vanished">电池优先模式:
光伏优先给电池充电，如果有更多的能量，它将被用于为用户的负载提供能量。

电池优先模式运行逻辑：
1.1电网运行时，系统处于并网运行模式。ATS的电网侧关闭。

①PPV≥PLOAD+PBAT（充电）
光伏电池充电是第一要务，如果有更多的能量，它将被用于为用户的负载提供能量。电池充满电后，如果PPV&gt;PLOAD，则MPS将在功率限制操作下工作。

② PPV＞PBAT（充电）和PPV＜PLOAD+PBAT（充电）
光伏将首先为电池充电，光伏和电网将一起为用户的负载提供能量。即PLOAD=PPV－PBAT（充电）＋PGRID

③ PPV＜PBAT（充电）
光伏和电网一起为电池充电，负载的能量将完全由电网提供。即PBAT（充电）=Pset（充电）＋PPV，PGRID=Pset＋PLOAD。

④ 当光伏不可用时，电网将向负载提供能量，同时为电池充电。即PGRID=PLOAD+PBAT（充电）。

⑤ PPV&lt;PLOAD且电池SOC=100%
PV和电网一起向负载提供能量。MPS收集实时负载功率和光伏发电功率。通过计算光伏发电功率和负载功率，负载所需的剩余能量由电网提供，即PLOAD=PPV+PGRID。

1.2当电网出现故障或断电时，ATS自动从电网侧切换到柴油发电机侧，MPS处于离网运行模式，同时切换，PV和电池将为负载提供能量。
当MPS检测到ATS已切换到柴油发电机侧时，MPS将发送干触点信号以启动柴油发电机。柴油发电机成功启动后，如果实时检测与电网电压幅值、频率和相位一致，MPS将处于并网模式。

① PPV≥PLOAD+PBAT（充电）\n\
光伏将作为第一要务为电池充电，如果剩余的能量更多，将提供给负载。当电池充满电时，如果PPV&gt;PLOAD，则MPS将在功率限制操作下工作。

② PPV＞PBAT（充电）和PPV＜PLOAD+PBAT（充电）\n\
光伏将首先为电池充电，光伏和柴油发电机将一起为用户的负载提供能量。即PLOAD=PPV－PBAT（充电）＋PDG。

③ PPV＜PBAT（充电）\n\
光伏和柴油发电机结合为电池充电，负载的能量将全部由柴油发电机提供。PBAT（充电）=PDG－PLOAD＋PPV。

④ 当光伏不可用时，柴油发电机将向负载提供能量并同时为电池充电。即PDG=PLOAD+PBAT（充电）。

⑤ PPV&lt;PLOAD且电池SOC=100%
光伏和柴油发电机一起为负载提供能量。MPS收集实时负载功率和光伏发电功率。通过计算光伏发电功率和负载功率，柴油发电机将提供剩余能量，即PLOAD=PPV+PDG。

1.3电网恢复后，ATS将自动从柴油发电机侧切换到电网侧。在切换过程中，MPS进入离网运行模式，当MPS检测到ATS切换到电网侧时，MPS将再次恢复电网运行模式。

MPS切换到并网模式后，控制策略遵循正常电网环境的设置。</translation>
    </message>
    <message>
        <source>Peak shaving mode:
The peak-valley filling mode is used for peak-valley arbitrage.PCS can operate according tothe local peak-valley electricity price period, andcan go to the automatic operation page to setthe charging and discharging mode chargingand discharging power and other informationduring the operation period.</source>
        <translation type="vanished">削峰填谷模式：
削峰填谷模式用于峰谷套利，PCS可根据当地的峰谷电价时段运行，可前往“自动运行”页面设置运行时间段、充放电模式、充放电功率等信息。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="101"/>
        <source>Click to view</source>
        <translation>点击查看</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="102"/>
        <location filename="../OperMode/opermode.cpp" line="140"/>
        <location filename="../OperMode/opermode.cpp" line="143"/>
        <source>Invalid in this mode.</source>
        <translation>该模式下无效。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="103"/>
        <source>In this mode, the charging power of the AC side is limited.</source>
        <translation>该模式下，限制交流侧的充电功率。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="104"/>
        <source>Protection is not triggered in this mode.</source>
        <translation>该模式下不会触发保护。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="105"/>
        <source>If the SOC is lower than this value, it is in the empty zone and FCP is executed.</source>
        <translation>SOC低于该值，处于放空区，执行FCP。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="106"/>
        <source>Disarm FCP point.</source>
        <translation>解除FCP点。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="107"/>
        <source>Control battery does not discharge.</source>
        <translation>控制电池不放电。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="108"/>
        <source>After DOD is triggered in this mode, it is not triggered in grid-connected mode and is shut down in off-network mode.</source>
        <translation>该模式下触发DOD后，并网模式下，不会触发，离网情况下关机。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="124"/>
        <source>DOD OnGrid(%)</source>
        <translation>并网DOD（%）</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="125"/>
        <source>DOD OffGrid(%)</source>
        <translation>离网DOD（%）</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="129"/>
        <source>DG ECP</source>
        <translation>DG ECP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="130"/>
        <source>DG FCP</source>
        <translation>DG FCP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="131"/>
        <source>Grid ECP</source>
        <translation>Grid ECP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="132"/>
        <source>Grid FCP</source>
        <translation>Grid FCP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="133"/>
        <source>Grid EDP</source>
        <translation>Grid EDP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="134"/>
        <source>Grid FDP</source>
        <translation>Grid FDP</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="136"/>
        <source>Currently, only lithium batteries are supported.</source>
        <translation>目前仅支持锂电池。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="137"/>
        <source>Set the communication mode with the battery.</source>
        <translation>设置与电池的通信方式。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="138"/>
        <source>This section describes how to set the communication mode with the EMS.</source>
        <translation>设置与EMS的通信方式。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="139"/>
        <source>In this mode, if the SOC is smaller than the charging SOC, the AC test provides a small power to maintain the charging SOC.</source>
        <translation>该模式下，如果SOC小于充电SOC，交流测提供小功率维持在充电SOC。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="141"/>
        <source>In this mode, you can choose whether to preferentially use electricity from the grid or battery.</source>
        <translation>该模式下可选择优先用电网还是优先用电池的电。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="142"/>
        <source>In this mode, you can choose whether to reverse the flow.</source>
        <translation>该模式下可选择是否可逆流。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="144"/>
        <source>Battery charging voltage cut-off point.</source>
        <translation>电池充电电压截止点。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="145"/>
        <source>Battery charge voltage back almost.</source>
        <translation>电池充电电压回差点。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="146"/>
        <source>Battery discharge voltage cut-off point.</source>
        <translation>电池放电电压截止点。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="147"/>
        <source>Battery discharge voltage back to almost.</source>
        <translation>电池放电电压回差点。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="148"/>
        <source>Limit the battery charging current point.</source>
        <translation>限制电池充电电流点。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="149"/>
        <source>Limit the battery discharge current point.</source>
        <translation>限制电池放电电流点。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="150"/>
        <source>In this mode, when the SOC is less than (100 - DOD), the battery does not discharge and does not draw power from the grid.</source>
        <translation>该模式下SOC小于（100 – DOD）时，电池不放电，也不从电网取电。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="151"/>
        <source>After DOD is triggered in this mode, no charge or shutdown is performed in grid-connected mode, and the device is shut down in off-network condition.</source>
        <translation>该模式下触发DOD后，并网模式下，不充电，不关机，离网情况下关机。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="152"/>
        <source>When SOC is less than or equal to Chaifa, start Chaifa.</source>
        <translation>SOC小于等于柴发启动SOC时，启动柴发。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="153"/>
        <source>When SOC is greater than or equal to Chaifa, turn off Chaifa.</source>
        <translation>SOC大于等于柴发启动SOC时，关闭柴发。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="154"/>
        <source>Limit the maximum voltage of the battery charging cell.</source>
        <translation>限制电池充电单体最高电压。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="155"/>
        <source>In chai-hair mode, the AC power reference value of the saturation zone and the equalization zone.</source>
        <translation>柴发模式下，饱和区和均衡区的交流侧功率参考值。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="156"/>
        <source>Power reference value of AC side of the discharge area in Chai hair mode.</source>
        <translation>柴发模式下，放空区的交流侧功率参考值。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="157"/>
        <source>In the power grid mode, the AC power reference value in the saturation zone and the equilibrium zone.</source>
        <translation>电网模式下，饱和区和均衡区的交流侧功率参考值。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="158"/>
        <source>In power grid mode, this parameter specifies the power reference value on the AC side of the vent area.</source>
        <translation>电网模式下，放空区的交流侧功率参考值。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="159"/>
        <source>The equalization zone limits the discharge power of the system to the grid side.</source>
        <translation>均衡区限制系统对电网侧的放电功率。</translation>
    </message>
    <message>
        <location filename="../OperMode/opermode.cpp" line="160"/>
        <source>The discharge zone limits the discharge power of the system to the power grid side.</source>
        <translation>放空区限制系统对电网侧的放电功率。</translation>
    </message>
</context>
<context>
    <name>Specification</name>
    <message>
        <location filename="../Specification/Specification.cpp" line="51"/>
        <source>OK</source>
        <translation>确定</translation>
    </message>
</context>
<context>
    <name>UpgradeTools</name>
    <message>
        <source>MainWindow</source>
        <translation type="vanished">MainWindow</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="46"/>
        <source>MPS</source>
        <translation>MPS</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="69"/>
        <source>MPS Upgrade app V2.0</source>
        <translation>MPS 升级软件 V2.0</translation>
    </message>
    <message>
        <source>Message:</source>
        <translation type="vanished">消息:</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="105"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="508"/>
        <source> Message:</source>
        <translation>消息：</translation>
    </message>
    <message>
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
 BLOCK HEAD OK 
</source>
        <translation type="obsolete"> 挂载完成 
 文件检查通过 
 监视器更新文件不存在 
 DCAC更新文件准备就绪 
 DCDC更新文件不存在 
 开始复制...

 DCAC_Update.hex
 更新开始
 接收到未知信号
 接收到未知信号
 接收到未知信号
 擦除中
 擦除中
 特定块的数据传输已结束
 特定块的校验和验证通过
 特定块的校验和验证通过
 特定块的头部验证通过
 特定块的校验和验证通过
 特定块的数据传输已结束
 特定块的头部验证通过
</translation>
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
        <translation> 挂载完成 
 文件检查通过 
 监控更新文件不存在 
 DCAC更新文件准备就绪 
 DCDC更新文件不存在 
 开始复制... 
 
 DCAC_Update.hex 
 更新开始 
 收到未知信号 
 收到未知信号 
 收到未知信号 
 擦除进行中 
 擦除进行中 
 特定块的数据传输已结束 
 特定块校验和验证通过 
 特定块校验和验证通过 
 特定块头部验证通过 
 特定块校验和验证通过 
 特定块的数据传输已结束 
 特定块头部验证通过
</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="177"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="444"/>
        <source>Module number</source>
        <translation>模块号</translation>
    </message>
    <message>
        <source>DCDC</source>
        <translation type="vanished">DCDC</translation>
    </message>
    <message>
        <source>DCAC</source>
        <translation type="vanished">DCAC</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="277"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="667"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="69"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="91"/>
        <source>Monitor</source>
        <translation>监控</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="298"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="688"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="73"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="95"/>
        <source>Backup</source>
        <translation>备份</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="319"/>
        <location filename="../UpgradeTools/upgradetools.ui" line="709"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="77"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="99"/>
        <source>Restore</source>
        <translation>恢复</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="342"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="82"/>
        <source>Apply and restart</source>
        <translation>应用并重启</translation>
    </message>
    <message>
        <source>MEGA</source>
        <translation type="vanished">MEGA</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="420"/>
        <source>PCS Upgrade Tools V2.0</source>
        <translation>PCS升级工具V2.0</translation>
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
        <translation> 挂载完成 
 文件检查通过 
 Monitor.hex不存在 
 DSP更新程序准备就绪 
 开始复制... 
 
 DSPUpdate.hex
 更新开始</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="572"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="118"/>
        <source>Monitor.hex</source>
        <translation>Monitor.hex</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="593"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="122"/>
        <source>DSPUpdate.hex</source>
        <translation>DSPUpdate.hex</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="618"/>
        <source>Baud rate</source>
        <translation>波特率</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="642"/>
        <source>500k</source>
        <translation>500k</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="397"/>
        <source>PCS</source>
        <translation>PCS</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="14"/>
        <source>UpgradeTools</source>
        <translation>升级工具</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="753"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="109"/>
        <source>Restart</source>
        <translation>重启</translation>
    </message>
    <message>
        <source>.</source>
        <translation type="vanished">。</translation>
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
        <translation>确定</translation>
    </message>
    <message>
        <source>After inserting the USB flash drive and detecting the DCDC upgrade program DCDC_Update.hex,click to upgrade the corresponding DCDC module based on the displayed module number.</source>
        <translation type="vanished">在插入U盘并检查到有DCDC升级程序DCDC_Update.hex后，点击将按照上面显示的模块号升级对应的DCDC模块。</translation>
    </message>
    <message>
        <source>After inserting the USB flash drive and detecting the DCAC upgrade program DCAC_Update.hex,click to upgrade DCAC.
You need to press the EPO during the upgrade.</source>
        <translation type="vanished">在插入U盘并检查到有DCAC升级程序DCAC_Update.hex后，点击将升级DCAC。
升级过程中需要按下EPO。</translation>
    </message>
    <message>
        <source>After inserting the USB flash drive and checking that there is a Monitor upgrade program monitor.hex, click to upgrade the monitor program.</source>
        <translation type="vanished">在插入U盘并检查到有监控升级程序Monitor.hex后，点击将升级监控程序。</translation>
    </message>
    <message>
        <source>Click to back up the upgrade program.</source>
        <translation type="vanished">点击将对升级程序进行备份。</translation>
    </message>
    <message>
        <source>Click to restore to the already backed up program.</source>
        <translation type="vanished">点击将恢复到已经备份好程序。</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="233"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="59"/>
        <source>DCDC Upgrade</source>
        <translation>DCDC升级</translation>
    </message>
    <message>
        <source>DCDC Upgrade: Insert a USB drive and check for the presence of the DCDC upgrade program &apos;DCDC_Update.hex&apos;. Click on DCDC, and then upgrade the corresponding DCDC module according to the selected module number above.                                
(Note: Before upgrading the DCDC, ensure that the ship mode switch on the DCDC module is set to the OFF position.)</source>
        <translation type="vanished">DCDC升级：插入U盘并检查是否有DCDC升级程序&apos;DCDC_Update.hex&apos;，点击‘DCDC升级’后，将按照上面选择的模块号升级对应的DCDC模块。
（注：升级DCDC前，需要把DCDC模块的船型开关拨到OFF位置）</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="254"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="64"/>
        <source>DCAC Upgrade</source>
        <translation>DCAC升级</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="65"/>
        <source>DCAC Upgrade: Insert the u disk and check if there is a DCAC upgrade program called &apos;DCAC_Update.hex&apos;. Click to upgrade the DCAC.                                
(Note: Press the EPO button before upgrading.)</source>
        <translation>DCAC升级：插入U盘并检查到有DCAC升级程序&apos;DCAC_Update.hex&apos;后，点击‘DCAC升级’后，将升级DCAC软件.
(注：升级前需要按下EPO.）</translation>
    </message>
    <message>
        <source>After inserting the USB flash drive and checking that there is a Monitor upgrade program &apos;Monitor.hex&apos;, click to upgrade the monitor program.</source>
        <translation type="obsolete">在插入U盘并检查到有监控升级程序Monitor.hex后，点击将升级监控程序。</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="60"/>
        <source>DCDC Upgrade: Insert a u disk and check for the presence of the DCDC upgrade program &apos;DCDC_Update.hex&apos;. Click on DCDC, and then upgrade the corresponding DCDC module according to the selected module number above.                                
(Note: Before upgrading the DCDC, ensure that the ship mode switch on the DCDC module is set to the OFF position.)</source>
        <translation>DCDC升级：插入U盘并检查是否有DCDC升级程序&apos;DCDC_Update.hex&apos;，点击‘DCDC升级’后，将按照上面选择的模块号升级对应的DCDC模块。
（注：升级DCDC前，需要把DCDC模块的船型开关拨到OFF位置）</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="70"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="92"/>
        <source>After inserting the u disk and checking that there is a Monitor upgrade program &apos;Monitor.hex&apos;, click to upgrade the monitor program.</source>
        <translation>在插入U盘并检查到有监控升级程序Monitor.hex后，点击将升级监控程序。</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="74"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="96"/>
        <source>Backup: Click to backup the current program files.</source>
        <translation>备份：点击将对当前程序文件进行备份。</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="78"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="100"/>
        <source>Restore: Restore to the most recent backup program files.</source>
        <translation>恢复：恢复到最近一次备份的程序文件。</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="83"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="110"/>
        <source>Click to restart.</source>
        <translation>点击后将进行重启。</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="110"/>
        <source>Previous Page</source>
        <translation>上一页</translation>
    </message>
    <message>
        <source>Go back</source>
        <translation type="vanished">返回</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="87"/>
        <source>Baud Rate</source>
        <translation>波特率</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="88"/>
        <source>Baud Rate: Default is 500k and cannot be modified.</source>
        <translation>波特率：默认500k，不可修改。</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.ui" line="732"/>
        <location filename="../UpgradeTools/upgradetools.cpp" line="103"/>
        <source>DSP Upgrade</source>
        <translation>DSP升级</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="104"/>
        <source>DSP Upgrade: Insert the u disk and check if there is a DSP upgrade program called &apos;DSPUpdate.hex&apos;. Click to upgrade the DSP.                                
(Note: Press the EPO button before upgrading.))</source>
        <translation>DSP升级：插入U盘并检查到有DSP升级程序&apos;DSPUpdate.hex&apos;后，点击DSP后，将升级DSP软件.(注：升级前需要按下EPO.）</translation>
    </message>
    <message>
        <source>This is the baud rate setting, there are 125k and 500k two baud rate options, the default 500k.</source>
        <translation type="vanished">这是波特率设置，有125k后500k两种波特率选择，默认500k。</translation>
    </message>
    <message>
        <source>After inserting the USB flash drive and checking that there is DCAC update program DSPUpdate.hex, click to upgrade DSP.
You need to press the EPO during the upgrade.</source>
        <translation type="vanished">在插入U盘并检查到有DCAC升级程序DSPUpdate.hex后，点击将升级DSP。
升级过程中需要按下EPO。</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="119"/>
        <source>This is the name of the monitoring upgrade program.</source>
        <translation>这是监控升级程序名称。</translation>
    </message>
    <message>
        <location filename="../UpgradeTools/upgradetools.cpp" line="123"/>
        <source>This is the DSP upgrade program name.</source>
        <translation>这是DSP升级程序名称。</translation>
    </message>
</context>
</TS>
