// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"TkoolMV_PluginCommandBook","status":true,"description":"プラグインコマンド集","parameters":{"制御文字の拡張":"はい","スクリプトに制御文字適用":"いいえ"}},
{"name":"MadeWithMv","status":false,"description":"メイン画面へ進む前に、\"Made with MV\"のスプラッシュ画面もしくはカスタマイズされたスプラッシュ画面を表示します。","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_BattleEngineCore","status":false,"description":"Ver 1.34 戦闘システムをカスタムし、様々な要素を変更することができます","parameters":{"---一般---":"","Action Speed":"agi","Default System":"dtb","---逃走---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---アニメーション---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---フロントビュー---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---サイドビュー---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---スプライト---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---ダメージポップアップ---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---ティックセッティング---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---ウィンドウセッティング---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---選択ヘルプ---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"ユーザー","Ally Help Text":"味方","Allies Help Text":"味方","Enemy Help Text":"敵","Enemies Help Text":"敵","All Help Text":"全ての %1","Random Help Text":"%2 ランダムな %1","---エネミーセレクト---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---アクターセレクト---":"","Visual Actor Select":"true","---バトルログ---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"HzInputCommand","status":true,"description":"方向キーとボタンでのコマンド入力を実行します。","parameters":{"success SE":"Decision2","miss SE":"Buzzer1","penalty":"10"}},
{"name":"AdjustPictureGraphical","status":true,"description":"ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"グリッドサイズ":"48","テストマップID":"-1"}},
{"name":"HzCustomTimer","status":true,"description":"タイマーの表示を変更します。","parameters":{}},
{"name":"YEP_SkillCore","status":true,"description":"スキルシステムにより多くの機能を実装し、\r\nコストの設定などができるようになります。","parameters":{"---一般---":"","Cost Padding":"4","Command Alignment":"center","---HP消費---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"0","---MP消費---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"0","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"0"}},
{"name":"YEP_X_SkillCostItems","status":true,"description":"v1.04 (Requires YEP_SkillCore.js) Skills can now have an\nitem cost attached to them.","parameters":{"---General---":"","Cost Style":"1","Font Size":"20","Amount Format":"×%1","Amount Y Buffer":"4","---Gauges---":"","Gauge Color 1":"13","Gauge Color 2":"5","Display Name":"true","Text Color":"16"}},
{"name":"IZ_ElementRate","status":true,"description":"データベースの属性有効度関係の挙動を変更します。\nまた、特定の属性の攻撃を吸収するステートや装備などが作れるようになります。","parameters":{"absorptionNumber":"1000","noEffectNumber":"0","neutralizationNumber":"1","recGuard":"false"}},
{"name":"FTKR_SkillTreeSystem","status":true,"description":"v1.11.4 ツリー型スキル習得システム","parameters":{"--必須設定(Required)--":"","Skill Tree Id":"3","--基本設定(Basic)--":"","Show Skill Command":"1","Command Name":"スキル習得","Skill Menu Switch ID":"0","Enable Confirmation":"1","Reset When Forgotten Skill":"1","Learned Actor Var ID":"0","Learned Skill Var ID":"0","--習得回数の設定(Learned Count)--":"","Enabled Skill Count":"0","Default Max Count":"1","Skill Learned Icon":"87","--スキルポイントの設定(Skill Point)--":"","SP Display Name":"SP","Default Required SP":"1","Get Level Up Sp":"1","Cost Sp Icon":"296","Hide Sp Cost 0":"0","Display Get Sp":"%1 の%2を獲得！","--スキル枠の設定(Skill Frame)--":"","Enabled Skill Frame":"1","Skill Frame Width":"40","Skill Frame Height":"40","Skill Icon Offset X":"4","Skill Icon Offset Y":"4","--スキルテキスト(Skill Text)--":"","Skill Name Format":"","Skill Text Offset X":"38","Skill Text Offset Y":"2","--スキル枠の色の設定(Skill Frame Color)--":"","Frame Color isLearned":"0","Frame Color isLearn OK":"17","Frame Color isReqSkill NG":"15","Frame Color isRequired NG":"16","--習得回数の表示設定(Skill Count Frame)--":"","Draw Count Frame":"0","Count Frame Width":"20","Count Frame Height":"20","Count Frame Thick":"2","Count Frame Offset X":"-10","Count Frame Offset Y":"25","Count Frame Format":"\\}\\c[0]%1\\{","Skill Count Offset X":"5","Skill Count Offset Y":"-10","--ツリーの表示設定(Skill Tree Layout)--":"","Draw Line Type":"1","Tree Line Thick":"2","Add Frame To Line":"0","Fit Line Color To Frame":"1","--スキルツリーウィンドウの設定(Skill Tree Window)--":"","Skill Tree Max Cols":"6","Skill Tree Height Space":"24","--スキル説明ウィンドウの設定(Skill Status Window)--":"","Skill Status Title Format":"\\c[16][%2]のスキル情報","Adjust Skill Desc Width":"1","--コストウィンドウの設定(Cost Window)--":"","Cost Title Format":"\\c[16]習得コスト：","Cost Item Format":"%1","Cost Number Format":"17,%1(%2)","Cost Number Width":"0","--前提スキルウィンドウの設定(Pre Skill Window)--":"","Preskill Title Format":"\\c[16]前提スキル：","Preskill Item Format":"%1","--確認ウィンドウの設定(Confirmation Window)--":"","Conf Title Format":"スキル習得の確認","Confirmation Ok Format":"実行する","Confirmation Cancel Format":"実行しない","--習得時のSEの設定(Learned SE)--":"","Learn SE Name":"Sound2","Learn SE Volume":"90","Learn SE Pitch":"100","Learn SE Pan":"0","--コストアイコンの設定(Cost Icon)--":"","Cost Gold Icon":"297","Cost Variables Icon":"294","--ステータスの表示設定(Actor Status Layout)--":"","Actor Status Text1":"face","Actor Status Text2":"name,level,sp","Actor Status Text3":"","Actor Status Space":"0,0,0,0","Actor Status Space In Text":"0","Actor Status Width Rate":"3,2,0","--枠の表示設定(Frame Setting)--":"","Skill Frame Type":"1","Count Frame Type":"1","Default Frame Image Index":"","Display Tree Type Frame":"0"}},
{"name":"TMPassiveSkill","status":true,"description":"使用せずとも常に効果が発動しつづけるスキルを追加します。","parameters":{"passiveCommands":"7"}},
{"name":"AltMenuScreen2","status":true,"description":"レイアウトの異なるメニュー画面","parameters":{"backGroundBitmap":"元メニューウインドウ","maxColsMenu":"2","commandRows":"3","isDisplayStatus":"1"}},
{"name":"TMEventItemEx","status":true,"description":"アイテム選択の処理にヘルプウィンドウを追加し、\n個数表示の有無と表示行数をアイテムタイプごとに設定できます。","parameters":{"helpWindowEnabledItem":"1","helpWindowEnabledKey":"1","helpWindowEnabledA":"1","helpWindowEnabledB":"1","showItemNumberItem":"1","showItemNumberKey":"0","showItemNumberA":"0","showItemNumberB":"0","numVisibleRowsItem":"4","numVisibleRowsKey":"4","numVisibleRowsA":"4","numVisibleRowsB":"4","fixPlacement":"top"}},
{"name":"SealActorCommand","status":true,"description":"アクターコマンド封印プラグイン","parameters":{}},
{"name":"RestrictionTargetSkill","status":true,"description":"対象限定スキルプラグイン","parameters":{}},
{"name":"YEP_BaseTroopEvents","status":true,"description":"v1.01 Enabling this plugin will cause all troops to have\r\nevents occur in every fight.","parameters":{"Base Troop ID":"1"}},
{"name":"StateHelp","status":true,"description":"ver1.03/ステートにヘルプを付け、ステートの詳細を見るための仕組みを追加します。","parameters":{"State Help Text":"ステート詳細","Call State Window Key":"","Use Touch Call":"false","Add Menu State Help":"false","Touch Call Rect":"0,0,128,444","Debuff Help HP1":"最大HPが25%減少します。","Debuff Help HP2":"最大MPが50%減少します。","Debuff Help MP1":"最大HPが25%減少します。","Debuff Help ATK1":"攻撃力が25%減少します。","Debuff Help ATK2":"攻撃力がが50%減少します。","Debuff Help DEF1":"防御力が25%減少します。","Debuff Help DEF2":"防御力が50%減少します。","Debuff Help MAT1":"魔法力が25%減少します。","Debuff Help MAT2":"魔法力が50%減少します。","Debuff Help MDF1":"魔法防御が25%減少します。","Debuff Help MDF2":"魔法防御が50%減少します。","Debuff Help AGI1":"敏捷性が25%減少します。","Debuff Help AGI2":"敏捷性が50%減少します。","Debuff Help LUK1":"運が25%減少します。","Debuff Help LUK2":"運が50%減少します。","Buff Help HP1":"最大HPが25%上昇します。","Buff Help HP2":"最大MPが50%上昇します。","Buff Help MP1":"最大HPが25%上昇します。","Buff Help ATK1":"攻撃力が25%上昇します。","Buff Help ATK2":"攻撃力がが50%上昇します。","Buff Help DEF1":"防御力が25%上昇します。","Buff Help DEF2":"防御力が50%上昇します。","Buff Help MAT1":"魔法力が25%上昇します。","Buff Help MAT2":"魔法力が50%上昇します。","Buff Help MDF1":"魔法防御が25%上昇します。","Buff Help MDF2":"魔法防御が50%上昇します。","Buff Help AGI1":"敏捷性が25%上昇します。","Buff Help AGI2":"敏捷性が50%上昇します。","Buff Help LUK1":"運が25%上昇します。","Buff Help LUK2":"運が50%上昇します。"}},
{"name":"SRD_TPUpgrade","status":true,"description":"(v3.02) This Plugin allows you to have more control over your TP system and have a dynamic Max TP stat.","parameters":{"Minimum Max TP":"1","Maximum Max TP":"99999","Preserve TP?":"false","Max TP in Status?":"false","Restrict Damage Gain?":"true","= Default Values =":"","Default Actor MTP":"100","Default Actor ITP":"Math.randomInt(25)","Default Enemy MTP":"100","Default Enemy ITP":"Math.randomInt(100)","= Battle TP Gains =":"","TP Bonus Crit Use":"0","TP Bonus Super Use":"0","TP Bonus Crit Take":"0","TP Bonus Super Take":"0"}},
{"name":"AB_EnemyBook","status":true,"description":"戦闘中も確認できるモンスター図鑑です。属性、ステートの耐性の確認もできます。","parameters":{"ShowCommandInBattle":"1","ResisterTiming":"1","ShowCurrentStatus":"0","---用語、アイコン---":"","EnemyBookCommandName":"敵の情報","Achievement":"達成率","UnknownEnemy":"？？？？？？","UnknownData":"？？？","WeakElementName":"弱点属性","ResistElementName":"耐性属性","WeakStateName":"弱点ステート","ResistStateName":"耐性ステート","NoEffectStateName":"無効ステート","UnknownDropItemIcon":"16","AddEnemySkillMessage":"%1を図鑑に登録した！","FailToAddEnemySkillMessage":"%1は図鑑には載せられない！","FailToCheckEnemySkillMessage":"%1の情報はわからなかった！","---表示項目---":"","DispNo":"1","DispHP":"1","DispMP":"1","DispATK":"1","DispDEF":"1","DispMAT":"1","DispMDF":"0","DispAGI":"1","DispLUK":"0","DispDropItems":"1","DispWeakElement":"1","DispResistElement":"1","DispWeakState":"1","DispResistState":"1","DispNoEffectState":"0","DispDescribe":"1","---属性アイコン---":"","UseElementIconInPluginParameter":"1","ElementIcons":"76 64 65 66 70 71 297"}},
{"name":"XPStyleBattleMV","status":true,"description":"XPStyleBattle for MV Build171029","parameters":{"(string)hud.themeFileName":"bd_boundary","(string)battlerGraphic.rootPath":"undefined","(boolean)battlerGraphic.enableAnimation":"true","(boolean)battlerGraphic.enablePopup":"true","(integer)battlerGraphic.damageDuration":"24","(integer)animation.playRate":"undefined","(string)targetCursor.fileName":"undefined","(integer)targetCursor.width":"undefined","(integer)targetCursor.animationSpeed":"undefined","(integer)targetCursor.moveSpeed":"undefined","(integer)targetCursor.minY":"undefined","(integer)targetInformation.gaugeWidth":"undefined","(string)targetInformation.scopeNotation.forParty":"undefined","(string)targetInformation.scopeNotation.forTroop":"undefined","(string)targetInformation.scopeNotation.forTroopRandom":"undefined","(boolean)targetInformation.actor.states":"undefined","(boolean)targetInformation.actor.hp":"undefined","(boolean)targetInformation.actor.mp":"undefined","(boolean)targetInformation.actor.tp":"undefined","(boolean)targetInformation.enemy.states":"undefined","(boolean)targetInformation.enemy.hp":"true","(boolean)targetInformation.enemy.mp":"true","(boolean)targetInformation.enemy.tp":"false","(boolean)battleMessage.enemyEmergeMessage":"false","(boolean)battleMessage.simpleBattleLog.useSimpleBattleLog":"false","(boolean)battleMessage.simpleBattleLog.displayAttack":"true","(boolean)battleMessage.simpleBattleLog.displayGuard":"true","(boolean)battleMessage.simpleBattleLog.drawIcon":"true","(integer)battleMessage.simpleBattleLog.align":"undefined","(string)battleMessage.simpleBattleLog.descriptionDelimiter":"undefined","(integer)battleMessage.simpleBattleLog.descriptionFontSize":"undefined\r","(boolean)windowLayout.itemSkill.fitting":"undefined","(boolean)windowLayout.itemSkill.maxHeight":"undefined","(integer)windowLayout.actorCommand.absolutePosition.x":"undefined","(integer)windowLayout.actorCommand.absolutePosition.y":"undefined","(integer)windowLayout.actorCommand.adjustPosition.x":"undefined","(integer)windowLayout.actorCommand.adjustPosition.y":"undefined","(integer)windowLayout.actorCommand.width":"undefined","(boolean)windowLayout.actorCommand.heightFitting":"undefined","(integer)windowLayout.actorCommand.visibleRows":"undefined","(boolean)windowLayout.actorCommand.isHorizontal":"undefined","(integer)windowLayout.actorCommand.maxCols":"undefined","(string)windowLayout.actorCommand.itemAlign":"undefined","(integer)windowLayout.partyCommand.position.x":"undefined","(integer)windowLayout.partyCommand.position.y":"undefined","(integer)windowLayout.partyCommand.width":"undefined","(boolean)windowLayout.partyCommand.heightFitting":"undefined","(integer)windowLayout.partyCommand.visibleRows":"undefined","(boolean)windowLayout.partyCommand.isHorizontal":"undefined","(integer)windowLayout.partyCommand.maxCols":"undefined","(string)windowLayout.partyCommand.itemAlign":"undefined\r","(integer)battleSpeed.basicSpeed":"12","(boolean)battleSpeed.animationFastForward":"true","(boolean)battleSpeed.animationDelayFastForward":"true","(integer)battleSpeed.actorStepDuration":"undefined","(integer)battleSpeed.animationSkipDuration":"undefined","(boolean)battleSpeed.skipBlinkEffect":"","(boolean)minorFixes.enableSelectionEffect":"true"}},
{"name":"HitandEvaFormula","status":true,"description":"ver1.00/命中や回避に計算式が使用できるようにします。","parameters":{"HitFormula":"hit - eva","EvaFormula":"0"}},
{"name":"SpecialExhaustSkill","status":true,"description":"すべてのHPまたはMPを使って強力な攻撃を行うスキルが作成可能","parameters":{"After HP Exhausted Log":"%1は力尽きて倒れた。","After MP Exhausted Log":"%1は魔力を使い果たした。","Include to default AI":"0"}},
{"name":"PictureAnimation","status":true,"description":"ピクチャのアニメーションプラグイン","parameters":{}},
{"name":"BattleParallelEvent","status":true,"description":"戦闘中でも「並列処理」のコモンイベントを実行する為のプラグインです。","parameters":{}},
{"name":"BattleOptions","status":true,"description":"バトル画面オプション追加プラグイン","parameters":{"コマンド名称":"オプション"}},
{"name":"CustomizeConfigDefault","status":true,"description":"オプションデフォルト値設定プラグイン","parameters":{"常時ダッシュ":"ON","コマンド記憶":"OFF","BGM音量":"100","BGS音量":"100","ME音量":"100","SE音量":"100","常時ダッシュ消去":"OFF","コマンド記憶消去":"OFF","BGM音量消去":"ON","BGS音量消去":"ON","ME音量消去":"ON","SE音量消去":"ON"}},
{"name":"CustomizeConfigItem","status":true,"description":"オプション任意項目作成プラグイン","parameters":{"スイッチ項目1":"QTE前演出:OFF:50","数値項目1":"","音量項目1":"","文字項目1":"戦闘くすぐり:0:30:OFF:ロング, カットイン, 初回のみロング:","スイッチ項目2":"","数値項目2":"","音量項目2":"","文字項目2":""}},
{"name":"Torigoya_QuickSkill","status":true,"description":"選択するとターンを消費せずに即発動するスキルを追加します。","parameters":{}},
{"name":"AcceptAllKeys","status":true,"description":"使えるキーを拡張します","parameters":{"key_a":"a","key_b":"b","key_c":"c","key_d":"d","key_e":"e","key_f":"f","key_g":"g","key_h":"h","key_i":"i","key_j":"j","key_k":"k","key_l":"l","key_m":"m","key_n":"n","key_o":"o","key_p":"p","key_q":"pageup","key_r":"r","key_s":"s","key_t":"t","key_u":"u","key_v":"v","key_w":"pagedown","key_x":"escape","key_y":"y","key_z":"ok","key_backspace":"backspace","key_tab":"tab","key_enter":"ok","key_shift":"shift","key_control":"control","key_alt":"control","key_escape":"escape","key_space":"ok","key_pageup":"pageup","key_pagedown":"pagedown","key_left":"left","key_right":"right","key_up":"up","key_down":"down","key_insert":"escape","numpad_0":"escape","numpad_2":"down","numpad_4":"left","numpad_6":"right","numpad_8":"up","F9":"debug"}},
{"name":"MessageWindowHidden","status":true,"description":"メッセージウィンドウ一時消去プラグイン","parameters":{"ボタン名称":"右クリック","連動ピクチャ番号":""}},
{"name":"UTA_MessageSkip","status":true,"description":"特定キーを押す事でメッセージをスキップできるようにします。","parameters":{"Skip Key":"s","Show Trace":"false"}},
{"name":"Arty_PostBattleCommonEvent","status":true,"description":"[v.1.0] This plugin allows you to run a common event after the battle ended.","parameters":{"Common Event Victory":"0","Common Event Defeat":"0","Common Event Abort":"0","Common Event Always":"44"}},
{"name":"MKR_PlayerSensor","status":true,"description":"(v2.3.4) プレイヤー探索プラグイン","parameters":{"探索設定":"====================================","Sensor_Switch":"D","Lost_Sensor_Switch":"","Both_Sensor":"OFF","Terrain_Decision":"ON","Auto_Sensor":"true","Event_Decision":"OFF","Region_Decision":"[]","Real_Range_X":"0.000","Real_Range_Y":"0.000","視界設定":"====================================","Range_Visible":"OFF","Range_Color":"white","Range_Opacity":"80","Player_Found":"{\"Ballon\":\"0\",\"Se\":\"{\\\"Name\\\":\\\"\\\",\\\"Volume\\\":\\\"90\\\",\\\"Pitch\\\":\\\"100\\\",\\\"Pan\\\":\\\"0\\\"}\",\"Common_Event\":\"0\",\"Delay\":\"0\"}","Player_Lost":"{\"Ballon\":\"0\",\"Se\":\"{\\\"Name\\\":\\\"\\\",\\\"Volume\\\":\\\"90\\\",\\\"Pitch\\\":\\\"100\\\",\\\"Pan\\\":\\\"0\\\"}\",\"Common_Event\":\"0\",\"Delay\":\"0\"}"}},
{"name":"Torigoya_SameEquipType","status":true,"description":"装備タイプ名が同じならば、同じ種別のアイテムを装備できるようにします","parameters":{}},
{"name":"TMGreedShop","status":true,"description":"お金以外にアイテムも要求されるショップ機能を追加します。","parameters":{"materialWindowWidth":"408","materialMax":"7","greedCommand":"購入する","useKeyMaterial":"0","omitSellCommand":"1","hideMaterialWindow":"0","hideMaterialFromNumberWindow":"0","hidePrice":"0","greedBuySe":"Shop1","greedBuySeParam":"{\"volume\":90, \"pitch\":100, \"pan\":0}"}},
{"name":"KGN_DelEquipCommand","status":true,"description":"最強装備とかのコマンドを無くします。","parameters":{}},
{"name":"ExcludeStatus","status":true,"description":"指定したステータス項目を、ステータス画面と装備画面に表示しないようにします。","parameters":{"Exclude Status":"4"}},
{"name":"DP_FixEscapeRatio","status":true,"description":"逃走の成功確率を設定できます。v1.00","parameters":{"Use Param":"false","Ratio":"100"}},
{"name":"MPP_ChoiceEX","status":true,"description":"【ver.3.6】選択肢の機能拡張","parameters":{"maxPageRow":"8","=== Command ===":"","Plugin Commands":"{\"ChoicePos\":\"ChoicePos\",\"ChoiceVariableId\":\"ChoiceVariableId\",\"ChoiceRect\":\"ChoiceRect\"}","Event Comment":"{\"ChoiceHelp\":\"選択肢ヘルプ\"}"}},
{"name":"DevToolsManage","status":true,"description":"総合開発支援プラグイン","parameters":{"開始時に起動":"OFF","デベロッパツール表示位置":"{\"x\":\"\",\"y\":\"\",\"width\":\"\",\"height\":\"\"}","最小化切替キー":"F8","リロードキー":"F5","最前面に表示キー":"none","高速化切替キー":"F11","強制戦闘勝利キー":"F12","スクリプト実行キー":"","フリーズキー":"F10","FPS表示":"OFF","タイトルカット":"false","高速開始":"false","高速スピード":"16","モバイル偽装":"false","メニューバー表示":"true","クリックメニュー":"1","JSON形式セーブ":"false","起動時情報出力":"true","最前面で起動":"false","リロード機能を使う":"false"}},
{"name":"ItemNameEscape","status":true,"description":"項目名の制御文字適用プラグイン","parameters":{}},
{"name":"TMCommonEventKey","status":true,"description":"任意のキーにコモンイベントを設定し、マップシーンで\nショートカットキーとして利用できるようにします。","parameters":{"commonKey0":"0","commonKey1":"0","commonKey2":"0","commonKey3":"0","commonKey4":"0","commonKey5":"0","commonKey6":"0","commonKey7":"0","commonKey8":"0","commonKey9":"0","commonKeyA":"0","commonKeyB":"0","commonKeyC":"63","commonKeyD":"0","commonKeyE":"0","commonKeyF":"0","commonKeyG":"0","commonKeyH":"0","commonKeyI":"0","commonKeyJ":"0","commonKeyK":"0","commonKeyL":"0","commonKeyM":"0","commonKeyN":"0","commonKeyO":"0","commonKeyP":"0","commonKeyQ":"3","commonKeyR":"0","commonKeyS":"0","commonKeyT":"0","commonKeyU":"0","commonKeyV":"0","commonKeyW":"49","commonKeyX":"0","commonKeyY":"0","commonKeyZ":"0","commonKeyF1":"0","commonKeyF2":"0","commonKeyF3":"0","commonKeyF4":"0","commonKeyF5":"0","commonKeyF6":"0","commonKeyF7":"0","commonKeyF8":"0","commonKeyF9":"0","commonKeyF10":"0","commonKeyF11":"0","commonKeyF12":"0","freeMove":"false"}},
{"name":"BattleKnowledge","status":true,"description":"ver1.02/ダメージに補正を与える色々な機能を追加します。","parameters":{}},
{"name":"NumbState","status":true,"description":"一定確率で行動できないステート","parameters":{"NumbMsg":"は身体がしびれて動けない！"}},
{"name":"SideEffectSkill","status":true,"description":"スキルの副作用プラグイン","parameters":{}},
{"name":"MPP_EquipStatusEX","status":true,"description":"【ver.2.0】装備ステータスの拡張","parameters":{"Status Window Row":"7","Gauge Height":"8","Gauge Color":"232,255,255","=== Gauge Max ===":"","param Gauge Max":"{\"mhp\":\"10000\",\"mmp\":\"2000\",\"atk\":\"200\",\"def\":\"200\",\"mat\":\"200\",\"mdf\":\"200\",\"agi\":\"400\",\"luk\":\"400\"}","xparam Gauge Max":"3.00","sparam Gauge Max":"3.00","rate Gauge Max":"3.00","=== Status ===":"","Default Status":"2,3,4,6","Fixing Status":"","Item Status":"0-23,26,27","Flow Status":"0-23,26,27","=== Traits ===":"","Draw Elements":"1-9","Element Rate Reverse?":"true","Element Rate Type":"4","Debuff Rate Reverse?":"true","Debuff Rate Type":"4","Draw States":"4,5,6,8,9,10,13","State Rate Reverse?":"true","State Rate Type":"4","State Resist Type":"3","Equip Feature Type":"3","=== Terms ===":"","xparams":"{\"hit\":\"命中率\",\"eva\":\"回避率\",\"cri\":\"会心率\",\"cev\":\"会心回避率\",\"mev\":\"魔法回避率\",\"mrf\":\"魔法反射率\",\"cnt\":\"反撃率\",\"hrg\":\"ＨＰ再生率\",\"mrg\":\"ＭＰ再生率\",\"trg\":\"ＴＰ再生率\"}","sparams":"{\"tgr\":\"狙われ率\",\"grd\":\"防御効果率\",\"rev\":\"回復効果率\",\"pha\":\"薬の知識\",\"mcr\":\"ＭＰ消費率\",\"tcr\":\"ＴＰチャージ率\",\"pdr\":\"物理ダメージ率\",\"mdr\":\"魔法ダメージ率\",\"fdr\":\"床ダメージ率\",\"exr\":\"経験獲得率\"}","Element Rate":"%1耐性","Debuff Rate":"%1ダウン耐性","State Rate":"%1耐性","State Resist":"%1無効化"}},
{"name":"Mano_EquipTag","status":true,"description":"装備品にタグを指定し、同じタグの装備品がある場合、装備を禁止します。","parameters":{}},
{"name":"ConditionallyCore","status":false,"description":"ver1.07/条件付き○○のプラグインを使用するのに、必要となる条件をまとめたベースプラグインです。","parameters":{}},
{"name":"TermsOfSkillUse","status":false,"description":"ver1.03/スキルやアイテムに詳細な使用条件を設定できます。\r\nCoditionallyCoreのプラグインが必要です。","parameters":{"Unselectable Target Color":"5","Unselectable Usable":"true"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"ON","ピクチャ番号の変数番号":"0","ポインタX座標の変数番号":"0","ポインタY座標の変数番号":"0","タッチ操作抑制":"OFF","戦闘中常にコモン実行":"ON"}},
{"name":"YEP_BattleAICore","status":true,"description":"v1.13 This plugin allows you to structure battle A.I.\npatterns with more control.","parameters":{"Dynamic Actions":"true","Dynamic Turn Count":"false","Element Testing":"false","Default AI Level":"100"}},
{"name":"CustomizeAttackGuard","status":true,"description":"攻撃防御カスタマイズプラグイン","parameters":{}},
{"name":"TKM_ChoiceList","status":true,"description":"ツキミ式選択肢","parameters":{"use":"true","-- Choice settings --":"","image":"Window","tone":"100, -40, 40","fontSize":"28","okFlashDuration":"5","okFlashFrequency":"1","-- Advanced settings --":"","backOpacity":"255","fontOLWidth":"3","fontOLColor":"rgba(0, 0, 0, 0.5)","vertiPadding":"8","choiceHoriPadding":"32","choiceVertiPadding":"5","maxRows":"6","maxRowsC":"3","mineLineWidth":"96"}},
{"name":"StopSelfMovementWithPlayer","status":true,"description":"イベント起動中にイベントの自律移動を停止します。","parameters":{"Varidate Switch ID":"47"}},
{"name":"CriticalFomula","status":true,"description":"ver1.00/クリティカル時の計算式を変更します。","parameters":{"Critical Fomula":"d * 1.5"}},
{"name":"CounterExtend","status":true,"description":"反撃拡張プラグイン","parameters":{"反撃コスト消費":"false","コスト不足で失敗":"false"}},
{"name":"HzExState","status":true,"description":"ステートの拡張（ステート解除時に別のステートを自動付与など）を行います。","parameters":{}},
{"name":"TitleCommandPosition","status":true,"description":"タイトルコマンドウィンドウの位置を変更します。","parameters":{"Offset X":"-80","Offset Y":"80","Width":"240","Background":"0"}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"200","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"Vitsuno_Difficulty","status":true,"description":"難易度により能力値や報酬倍率を変更できるようになります。","parameters":{"Init Difficulty ID":"2","Use Option":"1","Option Name":"難易度","--(Difficulty ID:1)--":"","1 : Name":"イージー","1 : Param Rate":"0.5,0.5,0.5,0.5,0.5,1.0,0.7,0.5","1 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:2)-------------":"","2 : Name":"ノーマル","2 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","2 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:3)-------------":"","3 : Name":"ハード","3 : Param Rate":"1.5,1.0,1.2,1.2,1.2,1.0,1.2,1.2","3 : Drop Rate":"1.2,1.2,1.2,1.2,1.2","--(ID:4)-------------":"","4 : Name":"デストロイ","4 : Param Rate":"2.0,1.0,1.5,1.5,1.5,1.0,1.5,1.5","4 : Drop Rate":"1.5,1.5,1.5,1.5,1.5","--(ID:5)-------------":"","5 : Name":"","5 : Param Rate":"1.9,1.9,1.9,1.9,1.9,1.9,1.9,1.9","5 : Drop Rate":"1.6,1.6,1.6,1.6,1.6","--(ID:6)-------------":"","6 : Name":"","6 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","6 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:7)-------------":"","7 : Name":"","7 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","7 : Drop Rate":"1.0,1.0,1.0,1.0,1.0","--(ID:8)-------------":"","8 : Name":"","8 : Param Rate":"1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0","8 : Drop Rate":"1.0,1.0,1.0,1.0,1.0"}},
{"name":"MOG_MenuCursor","status":true,"description":"(v1.6) Adiciona um cursor animado no menu.","parameters":{"Slide Animation":"true","Cursor X-axis":"10","Cursor Y-axis":"0","Frames Animation":"false","Max Frames":"4","Animation Speed":"7"}},
{"name":"VersionSpecified","status":true,"description":"【MMP ver.1.0】タイトル画面にバージョンを明記します。","parameters":{"version":"Version 1.01","fontSize":"20","fontColor":"rgb(255, 255, 255)","windowX":"540","windowY":"20"}}
];
