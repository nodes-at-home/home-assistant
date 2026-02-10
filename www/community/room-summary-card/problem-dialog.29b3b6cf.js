
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  var parcelRequire = $parcel$global["parcelRequire01aa"];
var parcelRegister = parcelRequire.register;
parcelRegister("gIkwD", function(module, exports) {

$parcel$export(module.exports, "ProblemDialog", function () { return $703f229c45f73578$export$b0c698e1b0bd6e7b; });
// problem-entity-list is imported dynamically

var $evAes = parcelRequire("evAes");
parcelRequire("drneK");

var $1LdRn = parcelRequire("1LdRn");

var $fKMMF = parcelRequire("fKMMF");

var $fPVm8 = parcelRequire("fPVm8");

var $jcMWt = parcelRequire("jcMWt");

var $c0F4V = parcelRequire("c0F4V");
let $703f229c45f73578$var$_ = (t)=>t, $703f229c45f73578$var$t;
class $703f229c45f73578$export$b0c698e1b0bd6e7b extends (0, $1LdRn.HassUpdateMixin)((0, $fPVm8.LitElement)) {
    /**
   * Opens the dialog with the given entities
   * Supports both direct call (entities array) and dialog manager (params object)
   */ showDialog(params) {
        this.problemEntities = params.entities;
        this._opened = true;
    }
    closeDialog() {
        this._opened = false;
        return true;
    }
    /**
   * Handles dialog close event
   */ _dialogClosed() {
        this._opened = false;
        // Fire dialog-closed event for proper lifecycle management
        (0, $fKMMF.fireEvent)(this, 'dialog-closed', {
            dialog: this.localName
        });
    }
    /**
   * Renders the component
   */ render() {
        if (!this.hass || this.problemEntities.length === 0) return 0, $fPVm8.nothing;
        return (0, $fPVm8.html)($703f229c45f73578$var$t || ($703f229c45f73578$var$t = $703f229c45f73578$var$_`
      <ha-dialog
        ?open=${0}
        .scrimClickAction=${0}
        .escapeKeyAction=${0}
        .heading=${0}
        @closed=${0}
      >
        <problem-entity-list
          .entities=${0}
          .hass=${0}
        ></problem-entity-list>
      </ha-dialog>
    `), this._opened, 'close', 'close', (0, $c0F4V.createCloseHeading)(this.hass), this._dialogClosed, this.problemEntities, this.hass);
    }
    constructor(...args){
        super(...args), /**
   * Array of problem entity states
   */ this.problemEntities = [], /**
   * Whether the dialog is open
   */ this._opened = false;
    }
}
(0, $evAes.__decorate)([
    (0, $jcMWt.property)({
        type: Array
    })
], $703f229c45f73578$export$b0c698e1b0bd6e7b.prototype, "problemEntities", void 0);
(0, $evAes.__decorate)([
    (0, $jcMWt.state)()
], $703f229c45f73578$export$b0c698e1b0bd6e7b.prototype, "_opened", void 0);
$703f229c45f73578$export$b0c698e1b0bd6e7b = (0, $evAes.__decorate)([
    (0, $jcMWt.customElement)('problem-dialog')
], $703f229c45f73578$export$b0c698e1b0bd6e7b);

});
parcelRegister("drneK", function(module, exports) {
// problem-entity-row is imported dynamically

var $evAes = parcelRequire("evAes");
parcelRequire("38XTH");

var $1LdRn = parcelRequire("1LdRn");

var $cfP8R = parcelRequire("cfP8R");

var $fPVm8 = parcelRequire("fPVm8");

var $jcMWt = parcelRequire("jcMWt");

var $aAO52 = parcelRequire("aAO52");

var $7LJNM = parcelRequire("7LJNM");
let $631b8d8fbd28482c$var$_ = (t)=>t, $631b8d8fbd28482c$var$t, $631b8d8fbd28482c$var$t1, $631b8d8fbd28482c$var$t2;
class $631b8d8fbd28482c$export$6c1f79fd190a5adb extends (0, $1LdRn.HassUpdateMixin)((0, $fPVm8.LitElement)) {
    /**
   * Renders the component
   */ render() {
        if (!this.hass) return 0, $fPVm8.nothing;
        if (this.entities.length === 0) return (0, $fPVm8.html)($631b8d8fbd28482c$var$t || ($631b8d8fbd28482c$var$t = $631b8d8fbd28482c$var$_`
        <div class="empty-state">
          <p>${0}</p>
        </div>
      `), (0, $cfP8R.localize)(this.hass, 'card.component.problem.no_problems'));
        return (0, $fPVm8.html)($631b8d8fbd28482c$var$t2 || ($631b8d8fbd28482c$var$t2 = $631b8d8fbd28482c$var$_`
      <div class="problem-entity-list">
        ${0}
      </div>
    `), (0, $aAO52.repeat)(this.entities, (entity)=>entity.entity_id, (entity)=>(0, $fPVm8.html)($631b8d8fbd28482c$var$t1 || ($631b8d8fbd28482c$var$t1 = $631b8d8fbd28482c$var$_`
            <problem-entity-row
              .entity=${0}
              .hass=${0}
            ></problem-entity-row>
          `), entity, this.hass)));
    }
    static get styles() {
        return 0, $7LJNM.styles;
    }
    constructor(...args){
        super(...args), /**
   * Array of problem entity states
   */ this.entities = [];
    }
}
(0, $evAes.__decorate)([
    (0, $jcMWt.property)({
        type: Array
    })
], $631b8d8fbd28482c$export$6c1f79fd190a5adb.prototype, "entities", void 0);
$631b8d8fbd28482c$export$6c1f79fd190a5adb = (0, $evAes.__decorate)([
    (0, $jcMWt.customElement)('problem-entity-list')
], $631b8d8fbd28482c$export$6c1f79fd190a5adb);

});
parcelRegister("38XTH", function(module, exports) {

var $evAes = parcelRequire("evAes");

var $1LdRn = parcelRequire("1LdRn");

var $fKMMF = parcelRequire("fKMMF");

var $el4XD = parcelRequire("el4XD");

var $cmVfz = parcelRequire("cmVfz");
parcelRequire("aQs2Y");

var $8jUVR = parcelRequire("8jUVR");

var $cfP8R = parcelRequire("cfP8R");

var $fPVm8 = parcelRequire("fPVm8");

var $jcMWt = parcelRequire("jcMWt");

var $hxA0x = parcelRequire("hxA0x");
let $af67bf6c1cd47cdf$var$_ = (t)=>t, $af67bf6c1cd47cdf$var$t, $af67bf6c1cd47cdf$var$t1, $af67bf6c1cd47cdf$var$t2;
class $af67bf6c1cd47cdf$export$5ef45279fcb54955 extends (0, $1LdRn.HassUpdateMixin)((0, $fPVm8.LitElement)) {
    /**
   * Handles click on entity row to open more-info dialog
   */ _handleClick() {
        (0, $fKMMF.fireEvent)(this, 'hass-more-info', {
            entityId: this.entity.entity_id
        });
    }
    /**
   * Renders the component
   */ render() {
        if (!this.entity || !this.hass) return 0, $fPVm8.nothing;
        const isActive = (0, $cmVfz.stateActive)(this.entity);
        const displayName = (0, $el4XD.computeEntityName)(this.entity, this.hass) || this.entity.entity_id;
        return (0, $fPVm8.html)($af67bf6c1cd47cdf$var$t2 || ($af67bf6c1cd47cdf$var$t2 = $af67bf6c1cd47cdf$var$_`
      <div
        class="problem-entity-row ${0}"
        @click=${0}
      >
        <ha-state-icon
          .hass=${0}
          .stateObj=${0}
        ></ha-state-icon>
        <div class="entity-info">
          <div class="entity-name">${0}</div>
          <div class="entity-state">
            ${0}
          </div>
        </div>
        <div class="status-indicator">
          ${0}
        </div>
      </div>
    `), isActive ? 'active' : 'inactive', this._handleClick, this.hass, this.entity, displayName, (0, $8jUVR.stateDisplay)(this.hass, this.entity), isActive ? (0, $fPVm8.html)($af67bf6c1cd47cdf$var$t || ($af67bf6c1cd47cdf$var$t = $af67bf6c1cd47cdf$var$_`<span class="active-badge"
                >${0}</span
              >`), (0, $cfP8R.localize)(this.hass, 'card.component.problem.active')) : (0, $fPVm8.html)($af67bf6c1cd47cdf$var$t1 || ($af67bf6c1cd47cdf$var$t1 = $af67bf6c1cd47cdf$var$_`<span class="inactive-badge"
                >${0}</span
              >`), (0, $cfP8R.localize)(this.hass, 'card.component.problem.inactive')));
    }
    static get styles() {
        return 0, $hxA0x.styles;
    }
}
(0, $evAes.__decorate)([
    (0, $jcMWt.property)({
        type: Object
    })
], $af67bf6c1cd47cdf$export$5ef45279fcb54955.prototype, "entity", void 0);
$af67bf6c1cd47cdf$export$5ef45279fcb54955 = (0, $evAes.__decorate)([
    (0, $jcMWt.customElement)('problem-entity-row')
], $af67bf6c1cd47cdf$export$5ef45279fcb54955);

});
parcelRegister("aQs2Y", function(module, exports) {
/**
 * https://github.com/home-assistant/frontend/blob/dev/src/state/more-info-mixin.ts
 */ 
});

parcelRegister("hxA0x", function(module, exports) {

$parcel$export(module.exports, "styles", function () { return $2f1dd37468c61dcd$export$9dd6ff9ea0189349; });

var $fPVm8 = parcelRequire("fPVm8");
let $2f1dd37468c61dcd$var$_ = (t)=>t, $2f1dd37468c61dcd$var$t;
const $2f1dd37468c61dcd$export$9dd6ff9ea0189349 = (0, $fPVm8.css)($2f1dd37468c61dcd$var$t || ($2f1dd37468c61dcd$var$t = $2f1dd37468c61dcd$var$_`
  /* Problem entity row */
  .problem-entity-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  }

  .problem-entity-row:hover {
    background-color: var(--primary-color, #03a9f4);
    background-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
  }

  .problem-entity-row.active {
    border-left: 3px solid var(--error-color, #f44336);
  }

  .problem-entity-row.inactive {
    opacity: 0.7;
  }

  /* Entity icon */
  .problem-entity-row ha-state-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  /* Entity info */
  .entity-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .entity-name {
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-text-color, #212121);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .entity-state {
    font-size: 12px;
    color: var(--secondary-text-color, #757575);
  }

  /* Status indicator */
  .status-indicator {
    flex-shrink: 0;
  }

  .active-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    background-color: var(--error-color, red);
    color: white;
  }

  .inactive-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    background-color: var(--success-color, green);
    color: white;
  }

  /* Mobile responsive */
  @media (max-width: 600px) {
    .problem-entity-row {
      padding: 10px;
      gap: 10px;
    }

    .entity-name {
      font-size: 13px;
    }

    .entity-state {
      font-size: 11px;
    }
  }
`));

});


parcelRegister("7LJNM", function(module, exports) {

$parcel$export(module.exports, "styles", function () { return $30189c410a5e6f1a$export$9dd6ff9ea0189349; });

var $fPVm8 = parcelRequire("fPVm8");
let $30189c410a5e6f1a$var$_ = (t)=>t, $30189c410a5e6f1a$var$t;
const $30189c410a5e6f1a$export$9dd6ff9ea0189349 = (0, $fPVm8.css)($30189c410a5e6f1a$var$t || ($30189c410a5e6f1a$var$t = $30189c410a5e6f1a$var$_`
  /* Problem entity list */
  .problem-entity-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* Empty state */
  .empty-state {
    padding: 32px 16px;
    text-align: center;
    color: var(--secondary-text-color, #757575);
  }

  .empty-state p {
    margin: 0;
    font-size: 14px;
  }
`));

});


parcelRegister("c0F4V", function(module, exports) {

$parcel$export(module.exports, "createCloseHeading", function () { return $3101f2b47cb8fbc2$export$6f810c5d1018f852; });

var $cfP8R = parcelRequire("cfP8R");

var $fPVm8 = parcelRequire("fPVm8");
let $3101f2b47cb8fbc2$var$_ = (t)=>t, $3101f2b47cb8fbc2$var$t;
const $3101f2b47cb8fbc2$export$6f810c5d1018f852 = (hass)=>(0, $fPVm8.html)($3101f2b47cb8fbc2$var$t || ($3101f2b47cb8fbc2$var$t = $3101f2b47cb8fbc2$var$_`
  <div class="header_title">
    <ha-icon-button
      .label=${0}
      .path=${0}
      dialogAction="close"
      class="header_button"
    ></ha-icon-button>
    <span>${0}</span>
  </div>
`), hass === null || hass === void 0 ? void 0 : hass.localize('ui.common.close'), 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z', (0, $cfP8R.localize)(hass, 'card.component.problem.dialog_title'));

});



//# sourceMappingURL=problem-dialog.29b3b6cf.js.map
