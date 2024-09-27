System.register("chunks:///_virtual/AdBridge.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "16347imxQBHprrwOWOikkdl", "AdBridge", undefined);
      /**
       * 广告桥接
       */
      var AdBridge = exports('AdBridge', function AdBridge() {});
      /**
       * 预加载激励广告
       * @param posId 广告位 id
       */
      AdBridge.PRELOAD_REWARD_AD = 'ccams_s2n_preload_reward_ad';
      /**
       * 展示激励广告
       * @param posId 广告位 id
       */
      AdBridge.SHOW_REWARD_AD = 'ccams_s2n_show_reward_ad';
      /**
       * 激励广告加载中
       */
      AdBridge.REWARD_AD_LOADING = 'ccams_n2s_reward_ad_loading';
      /**
       * 激励广告加载完成
       */
      AdBridge.REWARD_AD_LOAD_SUCCESS = 'ccams_n2s_reward_ad_load_success';
      /**
       * 激励广告加载失败
       */
      AdBridge.REWARD_AD_LOAD_FAILED = 'ccams_n2s_reward_ad_load_failed';
      /**
       * 激励广告关闭
       * @param isEnded 广告是否结束
       */
      AdBridge.REWARD_AD_CLOSED = 'ccams_n2s_reward_ad_closed';
      /**
       * 预加载插屏广告
       * @param posId 广告位 id
       */
      AdBridge.PRELOAD_INTERSTITIAL_AD = 'ccams_s2n_preload_interstitial_ad';
      /**
       * 展示插屏广告
       * @param posId 广告位 id
       */
      AdBridge.SHOW_INTERSTITIAL_AD = 'ccams_s2n_show_interstitial_ad';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppStoreUtils.ts", ['cc'], function (exports) {
  var cclegacy, native;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      native = module.native;
    }],
    execute: function () {
      cclegacy._RF.push({}, "08efe7lgTNKZr2zjKdEMKqY", "AppStoreUtils", undefined);
      var AppStoreUtils = exports('AppStoreUtils', /*#__PURE__*/function () {
        function AppStoreUtils() {}
        AppStoreUtils.goToAppStore = function goToAppStore() {
          return native.reflection.callStaticMethod('com/ihg/common/AppStoreUtils', 'goToAppStore', '()I') === 0;
        };
        return AppStoreUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseMiniGameAd.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eaac2lf0yVMd5BDBS/Tonap", "BaseMiniGameAd", undefined);
      var BaseMiniGameAd = exports('BaseMiniGameAd', function BaseMiniGameAd() {});
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CellState.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e4f40f500tBEoPZkg1cFPmF", "CellState", undefined);
      var CellState = exports('CellState', /*#__PURE__*/function (CellState) {
        CellState[CellState["EMPTY"] = 0] = "EMPTY";
        CellState[CellState["FILLED"] = 1] = "FILLED";
        CellState[CellState["NOT_DECIDED"] = 2] = "NOT_DECIDED";
        return CellState;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DialogCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a92e0u9FqBFuLI1Q8/4b0Ds", "DialogCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DialogCtrl = exports('DialogCtrl', (_dec = ccclass('DialogCtrl'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DialogCtrl, _Component);
        function DialogCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._data = null;
          _this._callback = null;
          _this._dismissWhenClickedMask = false;
          return _this;
        }
        var _proto = DialogCtrl.prototype;
        _proto.setData = function setData(data) {
          this._data = data;
        };
        _proto.setCallback = function setCallback(callback) {
          this._callback = callback;
        };
        _proto.close = function close() {
          this.node.destroy();
        };
        _createClass(DialogCtrl, [{
          key: "dismissWhenClickedMask",
          get: function get() {
            return this._dismissWhenClickedMask;
          },
          set: function set(val) {
            this._dismissWhenClickedMask = val;
          }
        }]);
        return DialogCtrl;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DialogMgr.ts", ['cc'], function (exports) {
  var cclegacy, director, Node, assetManager, log, instantiate, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Node = module.Node;
      assetManager = module.assetManager;
      log = module.log;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "95859mz8WlG14qOClbQ/dwp", "DialogMgr", undefined);
      var DialogMgr = exports('DialogMgr', /*#__PURE__*/function () {
        function DialogMgr() {}
        DialogMgr.show = function show(bundle, dialogPrefab, componentType, data, callback) {
          if (data === void 0) {
            data = null;
          }
          if (callback === void 0) {
            callback = null;
          }
          // 限制了 Canvas 命名
          var canvasNode = director.getScene().getChildByName('Canvas');
          var diaglogMgrNode = canvasNode.getChildByName('DialogMgr');
          if (diaglogMgrNode == null) {
            diaglogMgrNode = new Node('DialogMgr');
            diaglogMgrNode.setParent(canvasNode);
          }
          assetManager.getBundle(bundle).load(dialogPrefab, function (err, prefab) {
            if (err) {
              log(err);
              return;
            }
            var dialog = instantiate(prefab);
            diaglogMgrNode.addChild(dialog);
            dialog.setPosition(Vec3.ZERO);
            var dialogCtrl = dialog.getComponent(componentType);
            dialogCtrl.setData(data);
            dialogCtrl.setCallback(callback);
          });
        };
        return DialogMgr;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DouYinMiniGameAd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseMiniGameAd.ts'], function (exports) {
  var _inheritsLoose, cclegacy, log, BaseMiniGameAd;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      BaseMiniGameAd = module.BaseMiniGameAd;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9550eTu+SRLEYPFPKrG5w/z", "DouYinMiniGameAd", undefined);
      var DouYinMiniGameAd = exports('DouYinMiniGameAd', /*#__PURE__*/function (_BaseMiniGameAd) {
        _inheritsLoose(DouYinMiniGameAd, _BaseMiniGameAd);
        function DouYinMiniGameAd() {
          return _BaseMiniGameAd.apply(this, arguments) || this;
        }
        var _proto = DouYinMiniGameAd.prototype;
        _proto.showRewardAd = function showRewardAd(adUnitId, loadCallback, closeCallback) {
          var rewardAd = tt.createRewardedVideoAd({
            adUnitId: adUnitId
          });
          rewardAd.load().then(function () {
            log('Reward ad loaded success.');
            loadCallback(null);
            rewardAd.onClose(function (result) {
              log('Reward ad loaded closed.');
              closeCallback(null, {
                isEnded: result == null ? void 0 : result.isEnded
              });
              rewardAd.destroy();
            });
            rewardAd.show().then(function () {
              log('Reward ad show success.');
            })["catch"](function (err) {
              log('Reward ad show failed.', JSON.stringify(err));
              closeCallback(err, null);
            });
          })["catch"](function (err) {
            log('Reward ad loaded fail.', JSON.stringify(err));
            loadCallback(err);
          });
        };
        _proto.showInterstitialAd = function showInterstitialAd(adUnitId) {
          var interstitialAd = tt.createInterstitialAd({
            adUnitId: adUnitId
          });
          interstitialAd.load().then(function () {
            log('Interstitial ad load success.');
            interstitialAd.onClose(function () {
              interstitialAd.destroy();
            });
            interstitialAd.show().then(function () {
              log('Interstitial ad show success.');
            })["catch"](function (err) {
              log('Interstitial ad show failed.', JSON.stringify(err));
            });
          })["catch"](function (err) {
            log("Interstitial ad load failed, catch err: ", JSON.stringify(err));
          });
        };
        return DouYinMiniGameAd;
      }(BaseMiniGameAd));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEvent.ts", ['cc'], function (exports) {
  var cclegacy, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0868edmlSxGK6fOGLYsM8NB", "GameEvent", undefined);
      var GameEvent = exports('GameEvent', function GameEvent() {});
      GameEvent.SELECT_COLOR = 'select_color';
      GameEvent.target = new EventTarget();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalBackListener.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SDKBridge.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, log, input, Input, KeyCode, native, Component, SDKBridge;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      log = module.log;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      native = module.native;
      Component = module.Component;
    }, function (module) {
      SDKBridge = module.SDKBridge;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "94798wF0OZHHp9kxO2oqrQQ", "GlobalBackListener", undefined);
      var ccclass = _decorator.ccclass;
      var GlobalBackListener = exports('GlobalBackListener', (_dec = ccclass('GlobalBackListener'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalBackListener, _Component);
        function GlobalBackListener() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = GlobalBackListener.prototype;
        _proto.onLoad = function onLoad() {
          director.addPersistRootNode(this.node);
          log('注册返回按键事件');
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        };
        _proto.onKeyDown = function onKeyDown(event) {
          if (event.keyCode === KeyCode.BACKSPACE) {
            log('按下返回键', event.keyCode);
            native.jsbBridgeWrapper.dispatchEventToNative(SDKBridge.EXIT_GAME);
          }
        };
        return GlobalBackListener;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalButtonAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, AudioClip, director, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      director = module.director;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0d1b0c8D3RE5bvs7gfDWkJs", "GlobalButtonAudio", undefined);
      var ccclass = _decorator.ccclass,
        requireComponent = _decorator.requireComponent,
        property = _decorator.property;
      var GlobalButtonAudio = exports('GlobalButtonAudio', (_dec = ccclass('GlobalButtonAudio'), _dec2 = requireComponent(AudioSource), _dec3 = property(AudioClip), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GlobalButtonAudio, _Component);
        function GlobalButtonAudio() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "buttonClickAudioClip", _descriptor, _assertThisInitialized(_this));
          _this.audioSource = null;
          return _this;
        }
        var _proto = GlobalButtonAudio.prototype;
        _proto.onLoad = function onLoad() {
          director.addPersistRootNode(this.node);
          this.audioSource = this.getComponent(AudioSource);
          this.audioSource.clip = this.buttonClickAudioClip;
          if (Button.prototype["touchBeganClone"]) return;
          Button.prototype["touchBeganClone"] = Button.prototype["_onTouchEnded"];
          var that = this;
          Button.prototype["_onTouchEnded"] = function (event) {
            if (this.interactable && this.enabledInHierarchy) {
              that.audioSource.play();
            }
            this.touchBeganClone(event);
          };
        };
        return GlobalButtonAudio;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonClickAudioClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HuaWeiMiniGameAd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseMiniGameAd.ts'], function (exports) {
  var _inheritsLoose, cclegacy, log, BaseMiniGameAd;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      BaseMiniGameAd = module.BaseMiniGameAd;
    }],
    execute: function () {
      cclegacy._RF.push({}, "036a85HSdZGlK+pfcecPuRg", "HuaWeiMiniGameAd", undefined);
      var HuaWeiMiniGameAd = exports('HuaWeiMiniGameAd', /*#__PURE__*/function (_BaseMiniGameAd) {
        _inheritsLoose(HuaWeiMiniGameAd, _BaseMiniGameAd);
        function HuaWeiMiniGameAd() {
          return _BaseMiniGameAd.apply(this, arguments) || this;
        }
        var _proto = HuaWeiMiniGameAd.prototype;
        _proto.showRewardAd = function showRewardAd(adUnitId, loadCallback, closeCallback) {
          var reward = qg.createRewardedVideoAd({
            adUnitId: adUnitId,
            success: function success(code) {
              log("Reward ad created success.", code);
              if (code === 0) {
                reward.load();
              } else {
                log("Reward ad created failed.", code);
                loadCallback(new Error("" + code));
              }
            },
            fail: function fail(data, code) {
              log("Reward ad created failed.", data, code);
              loadCallback(new Error("" + code));
              reward = null;
            }
          });
          var onLoad = function onLoad() {
            log('Reward ad loaded success.');
            loadCallback(null);
            reward.show();
          };
          reward.onLoad(onLoad);
          var onError = function onError(err) {
            log("Reward ad loaded fail.", JSON.stringify(err));
            loadCallback(err);
            reward.offLoad(onLoad);
            reward.offError(onError);
            reward.offClose(onClose);
          };
          reward.onError(onError);
          var onClose = function onClose(result) {
            log('Reward ad loaded closed.');
            closeCallback(null, {
              isEnded: result == null ? void 0 : result.isEnded
            });
            reward.offLoad(onLoad);
            reward.offError(onError);
            reward.offClose(onClose);
          };
          reward.onClose(onClose);
        };
        _proto.showInterstitialAd = function showInterstitialAd(adUnitId) {
          var interstitialAd = qg.createInterstitialAd({
            adUnitId: adUnitId
          });
          var onLoad = function onLoad() {
            log('Interstitial ad load success.');
            interstitialAd.show().then(function () {
              log('Interstitial ad show success.');
              interstitialAd.offLoad(onLoad);
              interstitialAd.offError(onError);
            })["catch"](function (err) {
              log('Interstitial ad show failed.', JSON.stringify(err));
              interstitialAd.offLoad(onLoad);
              interstitialAd.offError(onError);
            });
          };
          interstitialAd.onLoad(onLoad);
          var onError = function onError(err) {
            log("Interstitial ad load failed, catch err: ", JSON.stringify(err));
            interstitialAd.offLoad(onLoad);
            interstitialAd.offError(onError);
          };
          interstitialAd.onError(onError);
          interstitialAd.load();
        };
        return HuaWeiMiniGameAd;
      }(BaseMiniGameAd));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelChessBoardCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Node, Color, UITransform, Size, log, instantiate, Vec3, Vec2, Sprite, EventMouse, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Color = module.Color;
      UITransform = module.UITransform;
      Size = module.Size;
      log = module.log;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      Sprite = module.Sprite;
      EventMouse = module.EventMouse;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "64b86CSFQRGDqxoHUbPwz7Y", "LevelChessBoardCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CELL_PADDING = 4;
      var CELL_SPACE = 4;
      function formatDecimal(num, places) {
        var multiplier = Math.pow(10, places);
        var integer = Math.floor(num * multiplier);
        return integer / multiplier;
      }
      var LevelChessBoardCtrl = exports('LevelChessBoardCtrl', (_dec = ccclass('LevelChessBoardCtrl'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelChessBoardCtrl, _Component);
        function LevelChessBoardCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cellPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dividerPrefab", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cellsContainer", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dividersContainer", _descriptor4, _assertThisInitialized(_this));
          /**
           * 棋盘宽度（即几列）
           */
          _this._width = 0;
          /**
           * 棋盘高度（即几行）
           */
          _this._height = 0;
          /**
           * 格子大小
           */
          _this._cellSize = 1;
          /**
           * 格子节点
           */
          _this._cells = void 0;
          /**
           * 当前颜色
           */
          _this._currentColor = Color.WHITE;
          /**
           * 原图像素
           */
          _this._pixels = void 0;
          /**
           * 谜题像素
           */
          _this._puzzlePixels = void 0;
          _this._puzzleMode = false;
          return _this;
        }
        var _proto = LevelChessBoardCtrl.prototype;
        _proto.newLevel = function newLevel(width, height) {
          var _this2 = this;
          this._width = width;
          this._height = height;
          var uiTrans = this.cellsContainer.getComponent(UITransform);
          this._cellSize = formatDecimal((uiTrans.contentSize.width - (width - 1) * CELL_SPACE - 2 * CELL_PADDING) / width, 2) - 0.005;
          var chessboardSize = new Size(this._cellSize * this._width, this._cellSize * this._height);
          log(this._width, this._height, this._cellSize, chessboardSize);
          this.newCells(this._cellSize, this._width);
          setTimeout(function () {
            _this2._cells = Array.from({
              length: _this2._height
            }, function () {
              return Array(_this2._width);
            });
            _this2._pixels = Array.from({
              length: _this2._height
            }, function () {
              return Array(_this2._width).fill(Color.WHITE);
            });
            for (var i = 0; i < _this2.cellsContainer.children.length; i++) {
              var r = Math.floor(i / _this2._width);
              var c = Math.floor(i % _this2._width);
              _this2._cells[r][c] = _this2.cellsContainer.children[i];
            }
            _this2.updateCells(_this2._pixels);
          }, 100);
        }

        /**
         * 新建格子
         * @param chessboardSize 
         * @param cellSize 
         * @param cellCount 
         */;
        _proto.newCells = function newCells(cellSize, cellCountPerRow) {
          this.cellsContainer.destroyAllChildren();
          var cellCount = cellCountPerRow * cellCountPerRow;
          for (var i = 0; i < cellCount; i++) {
            var cell = instantiate(this.cellPrefab);
            var trans = cell.getComponent(UITransform);
            trans.setContentSize(new Size(cellSize, cellSize));
            cell.setParent(this.cellsContainer);
          }
        };
        _proto.setPuzzleMode = function setPuzzleMode(puzzleMode) {
          this._puzzleMode = puzzleMode;
          if (puzzleMode) {
            if (!this._puzzlePixels) {
              // 克隆原图像素
              this.syncPixels();
            }
            log(this._puzzlePixels);
            this.updateCells(this._puzzlePixels);
          } else {
            this.updateCells(this._pixels);
          }
        };
        _proto.syncPixels = function syncPixels() {
          var _this3 = this;
          if (!this._pixels) {
            return;
          }
          this._puzzlePixels = Array.from({
            length: this._height
          }, function () {
            return Array(_this3._width);
          });
          for (var r = 0; r < this._height; r++) {
            for (var c = 0; c < this._width; c++) {
              this._puzzlePixels[r][c] = this._pixels[r][c].equals(Color.WHITE) ? Color.WHITE : Color.BLACK;
            }
          }
          this.updateCells(this._puzzlePixels);
        };
        _proto.setColor = function setColor(color) {
          this._currentColor = color;
        };
        _proto.start = function start() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.onMouseEvent, this);
          this.node.on(Node.EventType.MOUSE_MOVE, this.onMouseEvent, this);
        };
        _proto.onDestroy = function onDestroy() {
          this.node.off(Node.EventType.MOUSE_DOWN, this.onMouseEvent, this);
          this.node.off(Node.EventType.MOUSE_MOVE, this.onMouseEvent, this);
        };
        _proto.onMouseEvent = function onMouseEvent(event) {
          var touchPoint = event.getUILocation();
          var transform = this.cellsContainer.getComponent(UITransform);
          var nodePos = transform.convertToNodeSpaceAR(new Vec3(touchPoint.x, touchPoint.y));
          var boardPos = new Vec2(nodePos.x + transform.contentSize.width / 2, nodePos.y - transform.contentSize.height / 2);
          var rIdx = Math.floor(Math.abs(boardPos.y) / this._cellSize);
          var cIdx = Math.floor(boardPos.x / this._cellSize);
          if (rIdx >= this._height || cIdx >= this._width) {
            return;
          }
          var cellSprite = this._cells[rIdx][cIdx].getComponent(Sprite);
          if (event.getButton() === EventMouse.BUTTON_LEFT || event.getButton() === EventMouse.BUTTON_RIGHT) {
            var color = Color.WHITE;
            if (event.getButton() === EventMouse.BUTTON_LEFT) {
              color = this._puzzleMode ? Color.BLACK : this._currentColor;
            }
            cellSprite.color = color;
            if (this._puzzleMode) {
              this._puzzlePixels[rIdx][cIdx] = color;
            } else {
              this._pixels[rIdx][cIdx] = color;
            }
          }
        };
        _proto.updateCells = function updateCells(pixels) {
          for (var r = 0; r < this._height; r++) {
            for (var c = 0; c < this._width; c++) {
              var cellSprite = this._cells[r][c].getComponent(Sprite);
              cellSprite.color = pixels[r][c];
            }
          }
        };
        _createClass(LevelChessBoardCtrl, [{
          key: "puzzlePixels",
          get: function get() {
            var _this4 = this;
            var pixels = Array.from({
              length: this._height
            }, function () {
              return Array(_this4._width);
            });
            for (var r = 0; r < this._height; r++) {
              for (var c = 0; c < this._width; c++) {
                var cellSprite = this._cells[r][c].getComponent(Sprite);
                pixels[r][c] = !cellSprite.color.equals(Color.WHITE);
              }
            }
            return pixels;
          }
        }]);
        return LevelChessBoardCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cellPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dividerPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cellsContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dividersContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelEditor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LevelChessBoardCtrl.ts', './PalletCtrl.ts', './GameEvent.ts', './NonogramSolution.ts', './NonogramDescription.ts', './Solver.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Toggle, EditBox, Sprite, Node, Color, log, Component, LevelChessBoardCtrl, PalletCtrl, GameEvent, NonogramSolution, NonogramDescription, Solver;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      EditBox = module.EditBox;
      Sprite = module.Sprite;
      Node = module.Node;
      Color = module.Color;
      log = module.log;
      Component = module.Component;
    }, function (module) {
      LevelChessBoardCtrl = module.LevelChessBoardCtrl;
    }, function (module) {
      PalletCtrl = module.PalletCtrl;
    }, function (module) {
      GameEvent = module.GameEvent;
    }, function (module) {
      NonogramSolution = module.NonogramSolution;
    }, function (module) {
      NonogramDescription = module.NonogramDescription;
    }, function (module) {
      Solver = module.Solver;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "bec3bkxFh9MCrGSSQaJO9wI", "LevelEditor", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelEditor = exports('LevelEditor', (_dec = ccclass('LevelEditor'), _dec2 = property(Toggle), _dec3 = property(Toggle), _dec4 = property(Toggle), _dec5 = property(EditBox), _dec6 = property(PalletCtrl), _dec7 = property(Sprite), _dec8 = property(Toggle), _dec9 = property(Node), _dec10 = property(LevelChessBoardCtrl), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LevelEditor, _Component);
        function LevelEditor() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "level5x5Toggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "level10x10Toggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "level15x15Toggle", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorEditBox", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "palletCtrl", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "currentColorSprite", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "puzzleModeToggle", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "operationContainer", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chessBoardCtrl", _descriptor9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LevelEditor.prototype;
        _proto.start = function start() {
          GameEvent.target.on(GameEvent.SELECT_COLOR, this.onSelectColor, this);
          this.updateMode();
        };
        _proto.onDestroy = function onDestroy() {
          GameEvent.target.off(GameEvent.SELECT_COLOR, this.onSelectColor, this);
        };
        _proto.new5x5 = function new5x5() {
          this.chessBoardCtrl.newLevel(5, 5);
        };
        _proto.new10x10 = function new10x10() {
          this.chessBoardCtrl.newLevel(10, 10);
        };
        _proto.new15x15 = function new15x15() {
          this.chessBoardCtrl.newLevel(15, 15);
        }

        //#region UI Events
        ;

        _proto.onNewLevelButtonClicked = function onNewLevelButtonClicked() {
          if (this.level5x5Toggle.isChecked) {
            this.new5x5();
          } else if (this.level10x10Toggle.isChecked) {
            this.new10x10();
          } else if (this.level15x15Toggle.isChecked) {
            this.new15x15();
          }
          this.puzzleModeToggle.isChecked = false;
          this.updateMode();
        };
        _proto.onAddColorButtonClicked = function onAddColorButtonClicked() {
          if (!this.colorEditBox.string) {
            return;
          }
          var color = new Color();
          Color.fromHEX(color, this.colorEditBox.string);
          this.palletCtrl.addColor(color);
        };
        _proto.onClearAllColorsButtonClicked = function onClearAllColorsButtonClicked() {}

        /**
         * 切换谜题模式
         * @param toggle 
         */;
        _proto.onPuzzleToggleChecked = function onPuzzleToggleChecked(toggle) {
          this.chessBoardCtrl.setPuzzleMode(toggle.isChecked);
          this.updateMode();
        }

        /**
         * 同步原图像素
         */;
        _proto.onSyncPixelsButtonClicked = function onSyncPixelsButtonClicked() {
          this.chessBoardCtrl.syncPixels();
        }

        /**
         * 生成谜题
         */;
        _proto.onGenerateButtonClicked = function onGenerateButtonClicked() {
          var pixels = transposeMatrix(this.chessBoardCtrl.puzzlePixels);
          log(pixels);
          var solution = NonogramSolution.createFromPixels(pixels);
          log(solution);
          var description = NonogramDescription.createWithSolution(solution);
          log(description);
          var solver = new Solver(description);
          solver.solve();
          if (!solver.hasUniqueSolution()) {
            log('当前谜题不符合要求：没有唯一解');
            return;
          }
          log('生成谜题完成！');
        }

        //#endregion
        ;

        _proto.onSelectColor = function onSelectColor(color) {
          this.currentColorSprite.color = color;
          this.chessBoardCtrl.setColor(color);
        };
        _proto.updateMode = function updateMode() {
          this.operationContainer.active = this.puzzleModeToggle.isChecked;
        };
        return LevelEditor;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "level5x5Toggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "level10x10Toggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "level15x15Toggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "colorEditBox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "palletCtrl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "currentColorSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "puzzleModeToggle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "operationContainer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "chessBoardCtrl", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      function transposeMatrix(matrix) {
        return matrix[0].map(function (_, colIndex) {
          return matrix.map(function (row) {
            return row[colIndex];
          });
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './BaseMiniGameAd.ts', './DouYinMiniGameAd.ts', './HuaWeiMiniGameAd.ts', './MiniGameAdMgr.ts', './OppoMiniGameAd.ts', './VivoMiniGameAd.ts', './XiaoMiMiniGameAd.ts', './GlobalButtonAudio.ts', './GlobalBackListener.ts', './SceneMgr.ts', './AdBridge.ts', './SDKBridge.ts', './DialogCtrl.ts', './DialogMgr.ts', './WebTextDialogCtrl.ts', './Toast.ts', './AppStoreUtils.ts', './PlatformUtils.ts', './GameEvent.ts', './LevelChessBoardCtrl.ts', './LevelEditor.ts', './PalletCtrl.ts', './CellState.ts', './NonogramDescription.ts', './NonogramSolution.ts', './SolutionScene.ts', './SolveResult.ts', './Solver.ts', './StartScene.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MiniGameAdMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DouYinMiniGameAd.ts', './VivoMiniGameAd.ts', './OppoMiniGameAd.ts', './HuaWeiMiniGameAd.ts', './XiaoMiMiniGameAd.ts'], function (exports) {
  var _createClass, cclegacy, random, sys, DouYinMiniGameAd, VivoMiniGameAd, OppoMiniGameAd, HuaWeiMiniGameAd, XiaoMiMiniGameAd;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      random = module.random;
      sys = module.sys;
    }, function (module) {
      DouYinMiniGameAd = module.DouYinMiniGameAd;
    }, function (module) {
      VivoMiniGameAd = module.VivoMiniGameAd;
    }, function (module) {
      OppoMiniGameAd = module.OppoMiniGameAd;
    }, function (module) {
      HuaWeiMiniGameAd = module.HuaWeiMiniGameAd;
    }, function (module) {
      XiaoMiMiniGameAd = module.XiaoMiMiniGameAd;
    }],
    execute: function () {
      cclegacy._RF.push({}, "05c1faTSLRHzrTF8CueP3Id", "MiniGameAdMgr", undefined);
      var MiniGameAdMgr = exports('MiniGameAdMgr', /*#__PURE__*/function () {
        function MiniGameAdMgr() {
          this._ad = null;
        }
        var _proto = MiniGameAdMgr.prototype;
        /**
         * 展示激励广告
         * @param adUnitId 
         */
        _proto.showRewardAd = function showRewardAd(adUnitId, loadCallback, closeCallback) {
          this._ad.showRewardAd(adUnitId, loadCallback, closeCallback);
        };
        _proto.showInterstitialAd = function showInterstitialAd(adUnitId, rate, delay) {
          if (rate === void 0) {
            rate = 1.0;
          }
          if (random() > rate) {
            return;
          }
          this._ad.showInterstitialAd(adUnitId);
        };
        _createClass(MiniGameAdMgr, null, [{
          key: "instance",
          get: function get() {
            if (this._instance == null) {
              this._instance = new MiniGameAdMgr();
              if (sys.platform === sys.Platform.BYTEDANCE_MINI_GAME) {
                this._instance._ad = new DouYinMiniGameAd();
              } else if (sys.platform === sys.Platform.HUAWEI_QUICK_GAME) {
                this._instance._ad = new HuaWeiMiniGameAd();
              } else if (sys.platform === sys.Platform.XIAOMI_QUICK_GAME) {
                this._instance._ad = new XiaoMiMiniGameAd();
              } else if (sys.platform === sys.Platform.OPPO_MINI_GAME) {
                this._instance._ad = new OppoMiniGameAd();
              } else if (sys.platform === sys.Platform.VIVO_MINI_GAME) {
                this._instance._ad = new VivoMiniGameAd();
              } else {
                throw new Error("Unsupported MiniGameAd platform: " + sys.platform);
              }
            }
            return this._instance;
          }
        }]);
        return MiniGameAdMgr;
      }());
      MiniGameAdMgr._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NonogramDescription.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, log, resources, TextAsset;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      resources = module.resources;
      TextAsset = module.TextAsset;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7b631nlKopCmLRL3eUb+SDX", "NonogramDescription", undefined);
      var NonogramDescription = exports('NonogramDescription', /*#__PURE__*/function () {
        function NonogramDescription(columnDescriptions, rowDescriptions) {
          this._width = void 0;
          this._height = void 0;
          this._columnDescriptions = void 0;
          this._rowDescriptions = void 0;
          this._width = columnDescriptions.length;
          this._height = rowDescriptions.length;
          this._columnDescriptions = columnDescriptions;
          this._rowDescriptions = rowDescriptions;
        }
        NonogramDescription.createWithSolution = function createWithSolution(solution) {
          var width = solution.width;
          var height = solution.height;
          log(width, height);
          var columnDescriptions = Array(width).fill(0).map(function () {
            return Array(height).fill(0);
          });
          var rowDescriptions = Array(height).fill(0).map(function () {
            return Array(width).fill(0);
          });
          for (var x = 0; x < width; x++) {
            columnDescriptions[x] = solution.getColumnDescription(x);
          }
          for (var y = 0; y < height; y++) {
            rowDescriptions[y] = solution.getRowDescription(y);
          }
          return new NonogramDescription(columnDescriptions, rowDescriptions);
        };
        NonogramDescription.fromFile = /*#__PURE__*/function () {
          var _fromFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    resources.load(file, TextAsset, function (err, data) {
                      if (err) {
                        reject(err);
                        return;
                      }
                      var lines = data.text.split(/\r?\n/).filter(function (line) {
                        return line.trim().length > 0;
                      });
                      var cols = [];
                      var rows = [];
                      var mode = '';
                      for (var _iterator = _createForOfIteratorHelperLoose(lines), _step; !(_step = _iterator()).done;) {
                        var line = _step.value;
                        var parts = line.split(' ');
                        if (parts[0] === 'width') {
                          mode = 'width';
                        } else if (parts[0] === 'height') {
                          mode = 'height';
                        } else if (parts[0] === 'rows') {
                          mode = 'rows';
                        } else if (parts[0] === 'columns') {
                          mode = 'columns';
                        } else if (parts[0] === 'goal') {
                          mode = 'goal';
                        } else if (mode === 'rows') {
                          rows.push(parseIntegerList(line));
                        } else if (mode === 'columns') {
                          cols.push(parseIntegerList(line));
                        }
                      }
                      resolve(new NonogramDescription(cols, rows));
                    });
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function fromFile(_x) {
            return _fromFile.apply(this, arguments);
          }
          return fromFile;
        }();
        var _proto = NonogramDescription.prototype;
        _proto.getRowDescription = function getRowDescription(y) {
          return this._rowDescriptions[y];
        };
        _proto.getColumnDescription = function getColumnDescription(x) {
          return this._columnDescriptions[x];
        };
        _proto.equals = function equals(other) {
          if (this._width !== other._width || this._height !== other._height) {
            return false;
          }
          return this._rowDescriptions.every(function (row, index) {
            return row.every(function (value, i) {
              return value === other._rowDescriptions[index][i];
            });
          }) && this._columnDescriptions.every(function (col, index) {
            return col.every(function (value, i) {
              return value === other._columnDescriptions[index][i];
            });
          });
        };
        _createClass(NonogramDescription, [{
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }, {
          key: "descriptionHeight",
          get: function get() {
            return Math.max.apply(Math, this._columnDescriptions.map(function (col) {
              return col.length;
            }));
          }
        }, {
          key: "descriptionWidth",
          get: function get() {
            return Math.max.apply(Math, this._rowDescriptions.map(function (row) {
              return row.length;
            }));
          }
        }]);
        return NonogramDescription;
      }());

      // Utility functions to parse and write integer lists from/to strings
      function parseIntegerList(line) {
        return line.split(',').map(function (s) {
          return parseInt(s.trim(), 10);
        }).filter(function (num) {
          return num !== 0;
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NonogramSolution.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CellState.ts'], function (exports) {
  var _createClass, cclegacy, CellState;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CellState = module.CellState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "708eaBDTXBPKb2PUjgrNQYS", "NonogramSolution", undefined);
      var NonogramSolution = exports('NonogramSolution', /*#__PURE__*/function () {
        function NonogramSolution(width, height, pixels) {
          this._width = void 0;
          this._height = void 0;
          this._pixels = void 0;
          this._width = width;
          this._height = height;
          this._pixels = pixels;
        }
        NonogramSolution.createFromCellStates = function createFromCellStates(cells) {
          var width = cells.length;
          var height = cells[0].length;
          var pixels = Array(width).fill(false).map(function () {
            return Array(height).fill(false);
          });
          for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
              pixels[x][y] = cells[x][y] === CellState.FILLED;
            }
          }
          return new NonogramSolution(width, height, pixels);
        };
        NonogramSolution.createFromPixels = function createFromPixels(pixels) {
          var width = pixels.length;
          var height = pixels[0].length;
          return new NonogramSolution(width, height, pixels);
        };
        NonogramSolution.random = function random(width, height, prob) {
          var pixels = Array(width).fill(false).map(function () {
            return Array(height).fill(false);
          });
          for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
              pixels[x][y] = Math.random() < prob;
            }
          }
          return new NonogramSolution(width, height, pixels);
        };
        var _proto = NonogramSolution.prototype;
        _proto.getPixel = function getPixel(x, y) {
          return this._pixels[x][y];
        };
        _proto.setPixel = function setPixel(x, y, value) {
          this._pixels[x][y] = value;
        };
        _proto.getRow = function getRow(y) {
          return this._pixels.map(function (x) {
            return x[y];
          });
        };
        _proto.getColumn = function getColumn(x) {
          return this._pixels[x];
        };
        _proto.getRowDescription = function getRowDescription(y) {
          var description = [];
          var count = 0;
          for (var x = 0; x < this._width; x++) {
            if (this._pixels[x][y]) {
              count++;
            } else if (count > 0) {
              description.push(count);
              count = 0;
            }
          }
          if (count > 0) {
            description.push(count);
          }
          return description;
        };
        _proto.getColumnDescription = function getColumnDescription(x) {
          var description = [];
          var count = 0;
          for (var y = 0; y < this._height; y++) {
            if (this._pixels[x][y]) {
              count++;
            } else if (count > 0) {
              description.push(count);
              count = 0;
            }
          }
          if (count > 0) {
            description.push(count);
          }
          return description;
        };
        _proto.toString = function toString() {
          var result = '';
          for (var y = 0; y < this._height; y++) {
            for (var x = 0; x < this._width; x++) {
              result += this._pixels[x][y] ? NonogramSolution.FILL_MARKER : NonogramSolution.EMPTY_MARKER;
            }
            result += '\n';
          }
          return result;
        };
        _proto.equals = function equals(other) {
          if (this._width !== other._width || this._height !== other._height) {
            return false;
          }
          for (var x = 0; x < this._width; x++) {
            for (var y = 0; y < this._height; y++) {
              if (this._pixels[x][y] !== other.getPixel(x, y)) {
                return false;
              }
            }
          }
          return true;
        };
        _createClass(NonogramSolution, [{
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }]);
        return NonogramSolution;
      }());
      NonogramSolution.EMPTY_MARKER = ' ';
      NonogramSolution.FILL_MARKER = 'X';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OppoMiniGameAd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseMiniGameAd.ts'], function (exports) {
  var _inheritsLoose, cclegacy, log, BaseMiniGameAd;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      BaseMiniGameAd = module.BaseMiniGameAd;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3076dQYDGZF2I6HDfKxcs4A", "OppoMiniGameAd", undefined);
      var OppoMiniGameAd = exports('OppoMiniGameAd', /*#__PURE__*/function (_BaseMiniGameAd) {
        _inheritsLoose(OppoMiniGameAd, _BaseMiniGameAd);
        function OppoMiniGameAd() {
          return _BaseMiniGameAd.apply(this, arguments) || this;
        }
        var _proto = OppoMiniGameAd.prototype;
        _proto.showRewardAd = function showRewardAd(adUnitId, loadCallback, closeCallback) {
          var rewardAd = qg.createRewardedVideoAd({
            adUnitId: adUnitId
          });
          rewardAd.load().then(function () {
            log('Reward ad loaded success.');
            loadCallback(null);
            var onClose = function onClose(result) {
              log('Reward ad loaded closed.');
              closeCallback(null, {
                isEnded: result == null ? void 0 : result.isEnded
              });
              rewardAd.offClose(onClose);
            };
            rewardAd.onClose(onClose);
            rewardAd.show().then(function () {
              log('Reward ad show success.');
            })["catch"](function (err) {
              log('Reward ad show failed.', JSON.stringify(err));
              closeCallback(err, null);
            });
          })["catch"](function (err) {
            log('Reward ad loaded fail.', JSON.stringify(err));
            loadCallback(err);
          });
        };
        _proto.showInterstitialAd = function showInterstitialAd(adUnitId) {
          var interstitialAd = qg.createInterstitialAd({
            adUnitId: adUnitId
          });
          interstitialAd.load().then(function () {
            log('Interstitial ad load success.');
            interstitialAd.show().then(function () {
              log('Interstitial ad show success.');
            })["catch"](function (err) {
              log('Interstitial ad show failed.', JSON.stringify(err));
            });
          })["catch"](function (err) {
            log("Interstitial ad load failed, catch err: ", JSON.stringify(err));
          });
        };
        return OppoMiniGameAd;
      }(BaseMiniGameAd));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PalletCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEvent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Color, instantiate, Sprite, Node, EventMouse, Component, GameEvent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Color = module.Color;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Node = module.Node;
      EventMouse = module.EventMouse;
      Component = module.Component;
    }, function (module) {
      GameEvent = module.GameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0e6107oOIpHWIPuiLDUB6Hz", "PalletCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PalletCtrl = exports('PalletCtrl', (_dec = ccclass('PalletCtrl'), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PalletCtrl, _Component);
        function PalletCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "colorPrefab", _descriptor, _assertThisInitialized(_this));
          _this._colors = [];
          return _this;
        }
        var _proto = PalletCtrl.prototype;
        _proto.start = function start() {
          var colorsJson = localStorage.getItem('colors');
          var colors = JSON.parse(colorsJson);
          if (colors) {
            for (var _iterator = _createForOfIteratorHelperLoose(colors), _step; !(_step = _iterator()).done;) {
              var c = _step.value;
              var color = new Color();
              this.addColor(Color.fromHEX(color, c));
            }
          }
        };
        _proto.addColor = function addColor(color) {
          this.addColorNode(color);
          this.save();
        };
        _proto.addColorNode = function addColorNode(color) {
          var _this2 = this;
          this._colors.push(color);
          var node = instantiate(this.colorPrefab);
          node.getComponent(Sprite).color = color;
          node.on(Node.EventType.MOUSE_DOWN, function (event) {
            if (event.getButton() === EventMouse.BUTTON_LEFT) {
              var _color = node.getComponent(Sprite).color;
              GameEvent.target.emit(GameEvent.SELECT_COLOR, _color);
            } else if (event.getButton() === EventMouse.BUTTON_RIGHT) {
              _this2._colors.splice(_this2.node.children.indexOf(node), 1);
              _this2.save();
              _this2.node.removeChild(node);
            }
          }, this);
          this.node.addChild(node);
        };
        _proto.save = function save() {
          localStorage.setItem('colors', JSON.stringify(this._colors.map(function (c) {
            return c.toHEX();
          })));
        };
        _proto.onColorCellClicked = function onColorCellClicked(event) {
          event.currentTarget;
        };
        return PalletCtrl;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "colorPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlatformUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, sys, native;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      native = module.native;
    }],
    execute: function () {
      cclegacy._RF.push({}, "29e7ekoFUhJhrjAjSn81VMn", "PlatformUtils", undefined);
      var PlatformUtils = exports('PlatformUtils', /*#__PURE__*/function () {
        function PlatformUtils() {}
        /**
         * 获取 Android 包名
         * @returns 
         */
        PlatformUtils.getPackageName = function getPackageName() {
          if (sys.platform === sys.Platform.ANDROID) {
            return native.reflection.callStaticMethod('com/ihg/common/PackageUtils', 'getPackageName', '()Ljava/lang/String;');
          }
          return null;
        };
        _createClass(PlatformUtils, null, [{
          key: "isMiniGame",
          get:
          /**
           * 是否是小游戏，用于避免冲突，包括：
           * - 游戏 UI 设计（右上角按钮）
           * - 不支持 openUrl
           */
          function get() {
            return sys.platform === sys.Platform.WECHAT_GAME || sys.platform === sys.Platform.BYTEDANCE_MINI_GAME || sys.platform === sys.Platform.HUAWEI_QUICK_GAME || sys.platform === sys.Platform.XIAOMI_QUICK_GAME || sys.platform === sys.Platform.OPPO_MINI_GAME || sys.platform === sys.Platform.VIVO_MINI_GAME;
          }

          /**
           * 是否是国内安卓快游戏，用于调用快游戏接口
           */
        }, {
          key: "isQuickGame",
          get: function get() {
            return sys.platform === sys.Platform.HUAWEI_QUICK_GAME || sys.platform === sys.Platform.XIAOMI_QUICK_GAME || sys.platform === sys.Platform.OPPO_MINI_GAME || sys.platform === sys.Platform.VIVO_MINI_GAME;
          }

          /**
           * 判断是否是华为原生平台
           */
        }, {
          key: "isHuaWeiApp",
          get: function get() {
            var _this$getPackageName;
            return (_this$getPackageName = this.getPackageName()) == null ? void 0 : _this$getPackageName.endsWith('huawei');
          }

          /**
           * 判断是否是小米原生平台
           */
        }, {
          key: "isXiaomiApp",
          get: function get() {
            var _this$getPackageName2;
            return (_this$getPackageName2 = this.getPackageName()) == null ? void 0 : _this$getPackageName2.endsWith('mi');
          }

          /**
           * 判断是否是 Oppo 原生平台
           */
        }, {
          key: "isOppoApp",
          get: function get() {
            var _this$getPackageName3;
            return (_this$getPackageName3 = this.getPackageName()) == null ? void 0 : _this$getPackageName3.endsWith('nearme.gamecenter');
          }

          /**
           * 判断是否是 Vivo 原生平台
           */
        }, {
          key: "isVivoApp",
          get: function get() {
            var _this$getPackageName4;
            return (_this$getPackageName4 = this.getPackageName()) == null ? void 0 : _this$getPackageName4.endsWith('vivo');
          }
        }]);
        return PlatformUtils;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, _decorator, director;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
    }],
    execute: function () {
      cclegacy._RF.push({}, "95b9crotKpPxbbWbuwWE1ib", "SceneMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SceneMgr = exports('SceneMgr', /*#__PURE__*/function () {
        function SceneMgr() {
          this._sceneStack = null;
          this._sceneToData = null;
        }
        var _proto = SceneMgr.prototype;
        _proto.init = function init() {};
        _proto.pushScene = function pushScene(scene, data) {
          if (data === void 0) {
            data = null;
          }
          this._sceneStack.push(scene);
          this._sceneToData.set(scene, data);
          director.loadScene(scene);
        };
        _proto.switchScene = function switchScene(scene, data) {
          if (data === void 0) {
            data = null;
          }
          this._sceneStack.pop();
          this._sceneStack.push(scene);
          this._sceneToData.set(scene, data);
          director.loadScene(scene);
        };
        _proto.popScene = function popScene(data) {
          if (data === void 0) {
            data = null;
          }
          this._sceneStack.pop();
          var scene = this._sceneStack[this._sceneStack.length - 1];
          this._sceneToData.set(scene, data);
          director.loadScene(scene);
        };
        _proto.popToScene = function popToScene(scene, data) {
          if (data === void 0) {
            data = null;
          }
          while (this._sceneStack.length > 0 && this._sceneStack[this._sceneStack.length - 1] !== scene) {
            this._sceneStack.pop();
          }
          this._sceneToData.set(scene, data);
          director.loadScene(scene);
        };
        _proto.getSceneData = function getSceneData(scene) {
          return this._sceneToData.get(scene);
        };
        _createClass(SceneMgr, null, [{
          key: "instance",
          get: function get() {
            if (this._instance == null) {
              this._instance = new SceneMgr();
              this._instance._sceneStack = [];
              this._instance._sceneToData = new Map();
            }
            return this._instance;
          }
        }]);
        return SceneMgr;
      }());
      SceneMgr._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SDKBridge.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3a329Ix3ndLOa0iaigmF/ex", "SDKBridge", undefined);
      var SDKBridge = exports('SDKBridge', function SDKBridge() {});
      // 退出游戏，在国内 Android 中需要回调 SDK
      SDKBridge.EXIT_GAME = 'ccams_exit_game';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SolutionScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NonogramDescription.ts', './Solver.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, Component, NonogramDescription, Solver;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      NonogramDescription = module.NonogramDescription;
    }, function (module) {
      Solver = module.Solver;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "d45a49Z9uFJwaroqjAAw7vI", "SolutionScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SolutionScene = exports('SolutionScene', (_dec = ccclass('SolutionScene'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SolutionScene, _Component);
        function SolutionScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SolutionScene.prototype;
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var desc, solver, solution;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return NonogramDescription.fromFile('test.non');
                case 2:
                  desc = _context.sent;
                  solver = new Solver(desc); // solver.setVerbose(true);
                  solution = solver.solve(); // console.log(solution);
                  // console.log(solution.toString());
                  // console.log(solver.hasUniqueSolution());
                  this.label.string = solution.toString();
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        return SolutionScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Solver.ts", ['cc', './CellState.ts', './NonogramSolution.ts', './SolveResult.ts'], function (exports) {
  var cclegacy, CellState, NonogramSolution, SolveResult;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CellState = module.CellState;
    }, function (module) {
      NonogramSolution = module.NonogramSolution;
    }, function (module) {
      SolveResult = module.SolveResult;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bd037H6JRJGkoieYu5rz91t", "Solver", undefined);
      var Solver = exports('Solver', /*#__PURE__*/function () {
        function Solver(descr) {
          var _this = this;
          this.width = void 0;
          this.height = void 0;
          this.cells = void 0;
          this.descr = void 0;
          this.solveResult = void 0;
          this.curRow = void 0;
          this.curRowBits = void 0;
          this.curRowFilled = void 0;
          // True if necessarily filled.
          this.curRowNotEmpty = void 0;
          // False if necessarily empty.
          this.curRowLength = void 0;
          this.curDescription = void 0;
          this.curRowImpossible = void 0;
          this.verbose = false;
          this.counterExample = null;
          this.width = descr.width;
          this.height = descr.height;
          this.descr = descr;
          this.cells = Array(this.width).fill(0).map(function () {
            return Array(_this.height).fill(CellState.NOT_DECIDED);
          });
          this.solveResult = SolveResult.NOT_ATTEMPTED;
        }
        var _proto = Solver.prototype;
        _proto.solveRow = function solveRow(row, descr) {
          if (this.verbose) {
            console.log("Solving row: " + descr.join(' ') + "   " + row.map(function (cs) {
              return cs;
            }).join('') + "\n");
          }
          this.curRow = row;
          this.curDescription = descr;
          this.curRowLength = row.length;
          this.curRowFilled = (1 << this.curRowLength) - 1;
          this.curRowNotEmpty = 0;
          this.curRowBits = 0;
          if (!this.solveRowRec(0, 0)) {
            this.curRowImpossible = true;
            return false;
          }
          var changed = false;
          for (var x = 0; x < this.curRowLength; x++) {
            if (row[x] === CellState.NOT_DECIDED) {
              if ((this.curRowFilled & 1 << x) !== 0) {
                row[x] = CellState.FILLED;
                changed = true;
              } else if ((this.curRowNotEmpty & 1 << x) === 0) {
                row[x] = CellState.EMPTY;
                changed = true;
              }
            }
          }
          if (changed && this.verbose) {
            console.log("Changed to: " + row.map(function (cs) {
              return cs;
            }).join(''));
          }
          return changed;
        };
        _proto.solveRowRec = function solveRowRec(pos, numsUsed) {
          if (numsUsed === this.curDescription.length) {
            for (var x = pos; x < this.curRowLength; x++) {
              if (this.curRow[x] === CellState.FILLED) return false;
            }
            this.curRowFilled &= this.curRowBits;
            this.curRowNotEmpty |= this.curRowBits;
            return true;
          }
          var curLen = this.curDescription[numsUsed];
          var feasible = false;
          for (var _x = pos; _x < this.curRowLength; _x++) {
            if (_x + curLen > this.curRowLength) break;
            var canBeFilled = true;
            for (var i = _x; i < _x + curLen; i++) {
              if (this.curRow[i] === CellState.EMPTY) {
                canBeFilled = false;
                break;
              }
            }
            if (canBeFilled && _x + curLen < this.curRowLength && this.curRow[_x + curLen] === CellState.FILLED) {
              canBeFilled = false;
            }
            if (canBeFilled) {
              for (var _i = _x; _i < _x + curLen; _i++) this.curRowBits |= 1 << _i;
              var emptyCell = _x + curLen === this.curRowLength ? 0 : 1;
              if (this.solveRowRec(_x + curLen + emptyCell, numsUsed + 1)) feasible = true;
              for (var _i2 = _x; _i2 < _x + curLen; _i2++) this.curRowBits &= ~(1 << _i2);
            }
            if (this.curRow[_x] === CellState.FILLED) break;
          }
          return feasible;
        };
        _proto.solveStep = function solveStep() {
          var changed = false;
          for (var x = 0; x < this.width; x++) {
            var col = this.cells[x];
            if (this.solveRow(col, this.descr.getColumnDescription(x))) {
              changed = true;
              for (var y = 0; y < this.height; y++) this.cells[x][y] = col[y];
            }
            if (this.curRowImpossible) return false;
          }
          for (var _y = 0; _y < this.height; _y++) {
            var row = [];
            for (var _x2 = 0; _x2 < this.width; _x2++) {
              row.push(this.cells[_x2][_y]);
            }
            if (this.solveRow(row, this.descr.getRowDescription(_y))) {
              changed = true;
              for (var _x3 = 0; _x3 < this.width; _x3++) this.cells[_x3][_y] = row[_x3];
            }
            if (this.curRowImpossible) return false;
          }
          return changed;
        };
        _proto.solveRec = function solveRec() {
          this.curRowImpossible = false;
          while (true) {
            var changed = this.solveStep();
            if (this.curRowImpossible) return SolveResult.IMPOSSIBLE;
            if (!changed) break;
          }
          var solved = true;
          var badX = 0,
            badY = 0;
          for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
              if (this.cells[x][y] === CellState.NOT_DECIDED) {
                solved = false;
                badX = x;
                badY = y;
                break;
              }
            }
          }
          if (solved) return SolveResult.SOLVED;
          var backupCells = this.cloneCells();
          this.cells[badX][badY] = CellState.EMPTY;
          if (this.solveRec() === SolveResult.SOLVED) {
            return SolveResult.SOLVED;
          } else {
            this.cells = backupCells;
            this.cells[badX][badY] = CellState.FILLED;
            return this.solveRec();
          }
        };
        _proto.solve = function solve() {
          if (this.solveRec() === SolveResult.IMPOSSIBLE) {
            this.solveResult = SolveResult.IMPOSSIBLE;
            return null;
          } else {
            this.solveResult = SolveResult.SOLVED;
            return NonogramSolution.createFromCellStates(this.cells);
          }
        };
        _proto.cloneCells = function cloneCells() {
          var _this2 = this;
          var ret = Array(this.width).fill(0).map(function () {
            return Array(_this2.height).fill(CellState.NOT_DECIDED);
          });
          for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
              ret[x][y] = this.cells[x][y];
            }
          }
          return ret;
        };
        _proto.flipState = function flipState(x) {
          if (x === CellState.FILLED) return CellState.EMPTY;else if (x === CellState.EMPTY) return CellState.FILLED;else return x;
        };
        _proto.setVerbose = function setVerbose(verbose) {
          this.verbose = verbose;
        };
        _proto.getCounterExample = function getCounterExample() {
          return this.counterExample;
        };
        _proto.hasUniqueSolution = function hasUniqueSolution() {
          if (this.solveResult === SolveResult.NOT_ATTEMPTED) {
            throw new Error("Solution haven't been performed.");
          }
          if (this.solveResult === SolveResult.IMPOSSIBLE) {
            return false;
          }
          if (this.solveResult === SolveResult.AMBIGUOUS) {
            return false;
          }
          var backupCells = this.cloneCells();
          var unique = true;
          for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
              for (var x1 = 0; x1 < this.width; x1++) {
                for (var y1 = 0; y1 < this.height; y1++) {
                  this.cells[x1][y1] = CellState.NOT_DECIDED;
                  this.cells[x][y] = this.flipState(backupCells[x][y]);
                  var res = this.solveRec();
                  if (res != SolveResult.IMPOSSIBLE) {
                    this.counterExample = NonogramSolution.createFromCellStates(this.cells);
                    unique = false;
                  }
                }
              }
            }
          }
          this.cells = backupCells;
          return unique;
        };
        return Solver;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SolveResult.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "004b11BuyVN6rGgEkmTks4s", "SolveResult", undefined);
      var SolveResult = exports('SolveResult', /*#__PURE__*/function (SolveResult) {
        SolveResult[SolveResult["SOLVED"] = 0] = "SOLVED";
        SolveResult[SolveResult["AMBIGUOUS"] = 1] = "AMBIGUOUS";
        SolveResult[SolveResult["IMPOSSIBLE"] = 2] = "IMPOSSIBLE";
        SolveResult[SolveResult["NOT_ATTEMPTED"] = 3] = "NOT_ATTEMPTED";
        return SolveResult;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StartScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "465f4p3ckZH56AiGj/RRZaA", "StartScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var StartScene = exports('StartScene', (_dec = ccclass('StartScene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StartScene, _Component);
        function StartScene() {
          return _Component.apply(this, arguments) || this;
        }
        return StartScene;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Toast.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Color, director, Canvas, UITransform, Node, Layers, Label, Graphics, Vec3, tween;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Color = module.Color;
      director = module.director;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      Node = module.Node;
      Layers = module.Layers;
      Label = module.Label;
      Graphics = module.Graphics;
      Vec3 = module.Vec3;
      tween = module.tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a1213+n6j1FvqIvhC6pOjZ+", "Toast", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Toast = exports('Toast', /*#__PURE__*/function () {
        function Toast() {}
        Toast.show = /*#__PURE__*/function () {
          var _show = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(text, gravity, duration, bgColor) {
            var canvas, canvasTransform, width, height, bgNode, textNode, textLabel, lineCount, ctx;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (gravity === void 0) {
                    gravity = Toast.DEFAULT_GRAVITY;
                  }
                  if (duration === void 0) {
                    duration = Toast.DEFAULT_DURATION;
                  }
                  if (bgColor === void 0) {
                    bgColor = Toast.DEFAULT_BG_COLOR;
                  }
                  canvas = director.getScene().getComponentInChildren(Canvas);
                  canvasTransform = canvas.getComponent(UITransform);
                  width = canvasTransform.width;
                  height = canvasTransform.height;
                  bgNode = new Node("Toast");
                  bgNode.layer = Layers.Enum.UI_2D;

                  // Lable文本格式设置
                  textNode = new Node("Text");
                  textNode.layer = Layers.Enum.UI_2D;
                  textLabel = textNode.addComponent(Label);
                  textLabel.horizontalAlign = Label.HorizontalAlign.CENTER;
                  textLabel.verticalAlign = Label.VerticalAlign.CENTER;
                  textLabel.fontSize = Toast.DEFAULT_FONT_SIZE;
                  textLabel.string = text;

                  // 当文本宽度过长时，设置为自动换行格式
                  if (text.length * textLabel.fontSize > width * 3 / 5) {
                    textNode.getComponent(UITransform).width = width * 3 / 5;
                    textLabel.overflow = Label.Overflow.RESIZE_HEIGHT;
                  } else {
                    textNode.getComponent(UITransform).width = text.length * textLabel.fontSize;
                  }
                  lineCount = ~~(text.length * textLabel.fontSize / (width * 3 / 5)) + 1;
                  textNode.getComponent(UITransform).height = textLabel.fontSize * lineCount;

                  // 背景设置
                  ctx = bgNode.addComponent(Graphics);
                  ctx.arc(-textNode.getComponent(UITransform).width / 2, 0, textNode.getComponent(UITransform).height / 2 + 20, 0.5 * Math.PI, 1.5 * Math.PI, true);
                  ctx.lineTo(textNode.getComponent(UITransform).width / 2, -(textNode.getComponent(UITransform).height / 2 + 20));
                  ctx.arc(textNode.getComponent(UITransform).width / 2, 0, textNode.getComponent(UITransform).height / 2 + 20, 1.5 * Math.PI, 0.5 * Math.PI, true);
                  ctx.lineTo(-textNode.getComponent(UITransform).width / 2, textNode.getComponent(UITransform).height / 2 + 20);
                  ctx.fillColor = bgColor;
                  ctx.fill();
                  canvas.node.addChild(bgNode);
                  bgNode.addChild(textNode);

                  // gravity 设置Toast显示的位置
                  if (gravity === "CENTER") {
                    bgNode.y = 0;
                    bgNode.x = 0;
                  } else if (gravity === "TOP") {
                    bgNode.position = new Vec3(0, bgNode.position.y + height / 5 * 2, 0);
                  } else if (gravity === "BOTTOM") {
                    bgNode.position = new Vec3(0, bgNode.position.y - height / 5 * 2, 0);
                  }
                  tween(bgNode).delay(duration).call(function () {
                    bgNode.destroy();
                  }).start();
                case 30:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function show(_x, _x2, _x3, _x4) {
            return _show.apply(this, arguments);
          }
          return show;
        }();
        return Toast;
      }());
      Toast.DEFAULT_DURATION = 2;
      Toast.DEFAULT_GRAVITY = "BOTTOM";
      Toast.DEFAULT_BG_COLOR = new Color(102, 102, 102, 200);
      Toast.DEFAULT_FONT_SIZE = 36;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VivoMiniGameAd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseMiniGameAd.ts'], function (exports) {
  var _inheritsLoose, cclegacy, log, BaseMiniGameAd;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      BaseMiniGameAd = module.BaseMiniGameAd;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e4f3dNp3n5EbLp1akdrP03J", "VivoMiniGameAd", undefined);
      var VivoMiniGameAd = exports('VivoMiniGameAd', /*#__PURE__*/function (_BaseMiniGameAd) {
        _inheritsLoose(VivoMiniGameAd, _BaseMiniGameAd);
        function VivoMiniGameAd() {
          return _BaseMiniGameAd.apply(this, arguments) || this;
        }
        var _proto = VivoMiniGameAd.prototype;
        _proto.showRewardAd = function showRewardAd(adUnitId, loadCallback, closeCallback) {
          var rewardAd = qg.createRewardedVideoAd({
            posId: adUnitId
          });
          rewardAd.load().then(function () {
            log('Reward ad loaded success.');
            loadCallback(null);
            var onClose = function onClose(result) {
              log('Reward ad loaded closed.');
              closeCallback(null, {
                isEnded: result == null ? void 0 : result.isEnded
              });
              rewardAd.offClose(onClose);
            };
            rewardAd.onClose(onClose);
            rewardAd.show().then(function () {
              log('Reward ad show success.');
            })["catch"](function (err) {
              log('Reward ad show failed.', JSON.stringify(err));
              closeCallback(err, null);
            });
          })["catch"](function (err) {
            log('Reward ad loaded fail.', JSON.stringify(err));
            loadCallback(err);
          });
        };
        _proto.showInterstitialAd = function showInterstitialAd(adUnitId) {
          var interstitialAd = qg.createInterstitialAd({
            posId: adUnitId
          });
          interstitialAd.show().then(function () {
            log('Interstitial ad show success.');
          })["catch"](function (err) {
            log('Interstitial ad show failed.', JSON.stringify(err));
          });
        };
        return VivoMiniGameAd;
      }(BaseMiniGameAd));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WebTextDialogCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DialogCtrl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, RichText, log, DialogCtrl;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      RichText = module.RichText;
      log = module.log;
    }, function (module) {
      DialogCtrl = module.DialogCtrl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ba4f1JSt7pPrLIOmpIpXlCR", "WebTextDialogCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var WebTextDialogCtrl = exports('WebTextDialogCtrl', (_dec = ccclass('WebTextDialogCtrl'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(RichText), _dec(_class = (_class2 = /*#__PURE__*/function (_DialogCtrl) {
        _inheritsLoose(WebTextDialogCtrl, _DialogCtrl);
        function WebTextDialogCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _DialogCtrl.call.apply(_DialogCtrl, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loading", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "titleLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentRichText", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = WebTextDialogCtrl.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.loading.active = true;
          var _this$_data = this._data,
            title = _this$_data.title,
            url = _this$_data.url;
          this.titleLabel.string = title;

          // 创建一个新的 XMLHttpRequest 对象
          var xhr = new XMLHttpRequest();

          // 配置请求类型、请求的 URL 以及是否异步处理请求
          xhr.open('GET', url, true);

          // 设置请求完成后的回调函数
          xhr.onreadystatechange = function () {
            _this2.loading.active = false;

            // 检查请求状态
            if (xhr.readyState === 4) {
              // 4 表示请求已完成，并且响应已就绪
              if (xhr.status === 200) {
                // 200 表示请求成功
                // 请求成功，处理返回的数据
                log(xhr.responseText); // 打印响应文本
                _this2.contentRichText.string = xhr.responseText;
              } else {
                // 请求失败，处理错误
                _this2.contentRichText.string = '请求失败，状态码：' + xhr.status;
              }
            }
          };

          // 发送请求
          xhr.send();
        };
        _proto.onBackButtonClicked = function onBackButtonClicked() {
          this.close();
        };
        return WebTextDialogCtrl;
      }(DialogCtrl), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentRichText", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/XiaoMiMiniGameAd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseMiniGameAd.ts'], function (exports) {
  var _inheritsLoose, cclegacy, log, BaseMiniGameAd;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      BaseMiniGameAd = module.BaseMiniGameAd;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c29038j/FCn6JQBDFrsxQb", "XiaoMiMiniGameAd", undefined);
      var XiaoMiMiniGameAd = exports('XiaoMiMiniGameAd', /*#__PURE__*/function (_BaseMiniGameAd) {
        _inheritsLoose(XiaoMiMiniGameAd, _BaseMiniGameAd);
        function XiaoMiMiniGameAd() {
          return _BaseMiniGameAd.apply(this, arguments) || this;
        }
        var _proto = XiaoMiMiniGameAd.prototype;
        _proto.showRewardAd = function showRewardAd(adUnitId, loadCallback, closeCallback) {
          var rewardAd = qg.createRewardedVideoAd({
            adUnitId: adUnitId
          });
          rewardAd.load().then(function () {
            log('Reward ad loaded success.');
            loadCallback(null);
            var onClose = function onClose(result) {
              log('Reward ad loaded closed.');
              closeCallback(null, {
                isEnded: result == null ? void 0 : result.isEnded
              });
              rewardAd.offClose(onClose);
            };
            rewardAd.onClose(onClose);
            rewardAd.show().then(function () {
              log('Reward ad show success.');
            })["catch"](function (err) {
              log('Reward ad show failed.', JSON.stringify(err));
              closeCallback(err, null);
            });
          })["catch"](function (err) {
            log('Reward ad loaded fail.', JSON.stringify(err));
            loadCallback(err);
          });
        };
        _proto.showInterstitialAd = function showInterstitialAd(adUnitId) {
          var interstitialAd = qg.createInterstitialAd({
            adUnitId: adUnitId
          });
          interstitialAd.show().then(function () {
            log('Interstitial ad show success.');
          })["catch"](function (err) {
            log('Interstitial ad show failed.', JSON.stringify(err));
          });
        };
        return XiaoMiMiniGameAd;
      }(BaseMiniGameAd));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map