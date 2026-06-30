/* @ds-bundle: {"format":3,"namespace":"TerraDesignSystem_e80b04","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"debf44d8fcce","components/core/Badge.jsx":"2b685b804b3d","components/core/Button.jsx":"7bdee61cda07","components/core/Card.jsx":"63724d784150","components/core/IconButton.jsx":"c01c96ccc6e4","components/feedback/Alert.jsx":"a6d9bdc3bb5e","components/forms/Checkbox.jsx":"32878386cb2a","components/forms/Input.jsx":"c1d0572f8700","components/forms/Select.jsx":"6f4237f0dd83","components/forms/Switch.jsx":"58abfc55e0c0","components/navigation/Tabs.jsx":"54b9c836724a","ui_kits/garden-app/AppShell.jsx":"47a2c68434ce","ui_kits/garden-app/Dashboard.jsx":"27c8fbdefd03","ui_kits/garden-app/Icons.jsx":"bcf16f9000b1","ui_kits/garden-app/PlantDetail.jsx":"e57aa203bf43","ui_kits/garden-app/Schedule.jsx":"b6b8ff72d769"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TerraDesignSystem_e80b04 = window.TerraDesignSystem_e80b04 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular avatar with warm fallback initials. */
function Avatar({
  src,
  name = "",
  size = 40,
  style,
  ...rest
}) {
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      background: "var(--amber-200)",
      color: "var(--amber-800)",
      fontFamily: "var(--font-label)",
      fontWeight: "var(--weight-bold)",
      fontSize: size * 0.4,
      overflow: "hidden",
      flexShrink: 0,
      userSelect: "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status pill. Soft tonal fills, never harsh. */
function Badge({
  tone = "neutral",
  variant = "soft",
  style,
  children,
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ["var(--neutral-100)", "var(--neutral-700)"],
      solid: ["var(--neutral-700)", "#fff"]
    },
    primary: {
      soft: ["var(--green-100)", "var(--green-700)"],
      solid: ["var(--color-primary)", "#fff"]
    },
    accent: {
      soft: ["var(--amber-100)", "var(--amber-700)"],
      solid: ["var(--amber-700)", "#fff"]
    },
    success: {
      soft: ["var(--green-100)", "var(--green-700)"],
      solid: ["var(--color-success)", "#fff"]
    },
    warning: {
      soft: ["var(--amber-100)", "var(--amber-800)"],
      solid: ["var(--color-warning)", "#fff"]
    },
    danger: {
      soft: ["var(--clay-100)", "var(--clay-700)"],
      solid: ["var(--color-danger)", "#fff"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant] || tones.neutral.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      background: bg,
      color: fg,
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.02em",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1.4,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terra Button — solid green primary, cream secondary, soft ghost.
 * Large 12px radius, roomy padding, gentle hover/press.
 */
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  style,
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "var(--text-sm)",
      gap: 8,
      minHeight: 38
    },
    md: {
      padding: "12px 22px",
      fontSize: "var(--text-base)",
      gap: 9,
      minHeight: 46
    },
    lg: {
      padding: "15px 28px",
      fontSize: "var(--text-md)",
      gap: 10,
      minHeight: 54
    }
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--color-primary-hover)",
      border: "1px solid var(--green-300)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary-hover)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverBg = {
    primary: "var(--color-primary-hover)",
    secondary: "var(--green-50)",
    ghost: "var(--green-50)",
    accent: "var(--amber-800)"
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      width: fullWidth ? "100%" : "auto",
      padding: s.padding,
      minHeight: s.minHeight,
      fontFamily: "var(--font-label)",
      fontSize: s.fontSize,
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background 160ms ease, transform 120ms ease, box-shadow 160ms ease",
      transform: press && !disabled ? "scale(0.98)" : "scale(1)",
      ...v,
      background: !disabled && hover ? hoverBg : v.background,
      ...style
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Warm cream card. Soft fill, generous padding, gentle elevation, no harsh borders. */
function Card({
  elevation = "sm",
  padding = "var(--pad-card)",
  interactive = false,
  style,
  children,
  ...rest
}) {
  const shadow = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  }[elevation] ?? "var(--shadow-sm)";
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--outline)",
      borderRadius: "var(--radius-md)",
      padding,
      boxShadow: hover ? "var(--shadow-md)" : shadow,
      transform: hover ? "translateY(-2px)" : "none",
      transition: "box-shadow 200ms ease, transform 200ms ease",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Same visual language as Button. */
function IconButton({
  variant = "ghost",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  style,
  children,
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--color-primary-hover)",
      border: "1px solid var(--green-300)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid transparent"
    }
  };
  const hoverBg = {
    primary: "var(--color-primary-hover)",
    secondary: "var(--green-50)",
    ghost: "var(--green-50)"
  }[variant];
  const v = variants[variant] || variants.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dims,
      height: dims,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background 160ms ease",
      ...v,
      background: !disabled && hover ? hoverBg : v.background,
      color: !disabled && hover && variant === "ghost" ? "var(--color-primary-hover)" : v.color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline message banner — soft tonal fill, gentle left accent via icon, not border. */
function Alert({
  tone = "info",
  title,
  icon,
  onClose,
  style,
  children,
  ...rest
}) {
  const tones = {
    info: {
      bg: "var(--color-info-soft)",
      fg: "var(--color-info)",
      text: "var(--text-body)"
    },
    success: {
      bg: "var(--color-success-soft)",
      fg: "var(--green-700)",
      text: "var(--text-body)"
    },
    warning: {
      bg: "var(--color-warning-soft)",
      fg: "var(--amber-800)",
      text: "var(--text-body)"
    },
    danger: {
      bg: "var(--color-danger-soft)",
      fg: "var(--clay-700)",
      text: "var(--text-body)"
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      padding: "14px 16px",
      background: t.bg,
      borderRadius: "var(--radius-md)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      flexShrink: 0,
      display: "inline-flex",
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-bold)",
      color: t.fg
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-normal)",
      color: t.text
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: t.fg,
      cursor: "pointer",
      padding: 2,
      lineHeight: 0,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with rounded box and soft green check. */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style,
  ...rest
}) {
  const cbId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: cbId,
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: "var(--radius-xs)",
      border: checked ? "1px solid var(--color-primary)" : "1px solid var(--outline-strong)",
      background: checked ? "var(--color-primary)" : "var(--surface-card)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 150ms ease, border-color 150ms ease",
      padding: 0
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input — cream fill, rounded, soft green focus ring. */
function Input({
  label,
  hint,
  error,
  leadingIcon,
  size = "md",
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const pad = {
    sm: "9px 12px",
    md: "12px 14px",
    lg: "14px 16px"
  }[size] || "12px 14px";
  const borderColor = error ? "var(--color-danger)" : focus ? "var(--color-primary)" : "var(--outline-variant)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: pad,
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color 150ms ease, box-shadow 150ms ease"
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-subtle)"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      width: "100%"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--color-danger)" : "var(--text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select dropdown — cream fill, rounded, soft chevron. Native select under the hood. */
function Select({
  label,
  hint,
  error,
  options = [],
  size = "md",
  id,
  style,
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  const pad = {
    sm: "9px 12px",
    md: "12px 14px",
    lg: "14px 16px"
  }[size] || "12px 14px";
  const borderColor = error ? "var(--color-danger)" : focus ? "var(--color-primary)" : "var(--outline-variant)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      appearance: "none",
      WebkitAppearance: "none",
      background: "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: pad,
      paddingRight: 40,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      outline: "none",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color 150ms ease, box-shadow 150ms ease",
      cursor: "pointer"
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-subtle)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 14,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--color-danger)" : "var(--text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch — soft, pill-shaped, green when on. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style,
  ...rest
}) {
  const switchId = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    id: switchId,
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      width: 46,
      height: 26,
      flexShrink: 0,
      borderRadius: "var(--radius-pill)",
      border: "none",
      background: checked ? "var(--color-primary)" : "var(--neutral-300)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 180ms ease",
      padding: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-xs)",
      transition: "left 180ms ease"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tabs — green active indicator, warm muted rest state. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--outline)",
      ...style
    }
  }, rest), tabs.map(t => {
    const v = t.value ?? t;
    const label = t.label ?? t;
    const isActive = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => select(v),
      style: {
        position: "relative",
        padding: "10px 16px",
        border: "none",
        background: "transparent",
        fontFamily: "var(--font-label)",
        fontSize: "var(--text-base)",
        fontWeight: isActive ? "var(--weight-bold)" : "var(--weight-semibold)",
        color: isActive ? "var(--color-primary-hover)" : "var(--text-muted)",
        cursor: "pointer",
        transition: "color 150ms ease",
        marginBottom: -1,
        borderBottom: isActive ? "2.5px solid var(--color-primary)" : "2.5px solid transparent"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/garden-app/AppShell.jsx
try { (() => {
// Terra app shell — sidebar nav + top bar. Cosmetic recreation.
const React = window.React;
function NavItem({
  icon,
  label,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      width: "100%",
      padding: "11px 14px",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      borderRadius: "var(--radius-md)",
      background: active ? "var(--green-100)" : hover ? "var(--green-50)" : "transparent",
      color: active ? "var(--green-700)" : "var(--text-muted)",
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-base)",
      fontWeight: active ? 700 : 600,
      transition: "background 150ms ease, color 150ms ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexShrink: 0
    }
  }, icon), label);
}
function AppShell({
  active,
  onNav,
  title,
  action,
  children
}) {
  const {
    Avatar,
    IconButton
  } = window.TerraDesignSystem_e80b04;
  const I = window.TerraIcons;
  const nav = [["home", "Garden", /*#__PURE__*/React.createElement(I.home, {
    size: 21
  })], ["plants", "My plants", /*#__PURE__*/React.createElement(I.leaf, {
    size: 21
  })], ["schedule", "Schedule", /*#__PURE__*/React.createElement(I.calendar, {
    size: 21
  })], ["weather", "Weather", /*#__PURE__*/React.createElement(I.sun, {
    size: 21
  })]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      background: "var(--surface-bg)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: "var(--cream-raised)",
      borderRight: "1px solid var(--outline)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "0 8px 22px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "34",
    height: "34",
    alt: "Terra"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      fontWeight: 600,
      color: "var(--green-700)",
      letterSpacing: "-0.02em"
    }
  }, "Terra")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, nav.map(([key, label, icon]) => /*#__PURE__*/React.createElement(NavItem, {
    key: key,
    icon: icon,
    label: label,
    active: active === key,
    onClick: () => onNav && onNav(key)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(I.settings, {
      size: 21
    }),
    label: "Settings",
    active: active === "settings",
    onClick: () => onNav && onNav("settings")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "12px 10px 4px",
      marginTop: 8,
      borderTop: "1px solid var(--outline)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Okonjo",
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "Maya Okonjo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-subtle)"
    }
  }, "Backyard plot \xB7 Zone 7"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "20px 32px",
      borderBottom: "1px solid var(--outline)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 600,
      color: "var(--text-strong)",
      letterSpacing: "-0.02em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement(I.search, {
    size: 21
  })), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(I.bell, {
    size: 21
  })), action)), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "28px 32px"
    }
  }, children)));
}
window.TerraAppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/garden-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/garden-app/Dashboard.jsx
try { (() => {
// Terra — Garden dashboard screen.
const React = window.React;
const PLANTS = [{
  id: "monstera",
  name: "Monstera",
  spot: "Living room",
  img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=70",
  moisture: 72,
  status: ["success", "Healthy"],
  due: "Water in 3 days"
}, {
  id: "basil",
  name: "Sweet basil",
  spot: "Kitchen sill",
  img: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400&q=70",
  moisture: 28,
  status: ["warning", "Thirsty"],
  due: "Water today"
}, {
  id: "fern",
  name: "Boston fern",
  spot: "Bathroom",
  img: "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=400&q=70",
  moisture: 61,
  status: ["success", "Healthy"],
  due: "Mist in 2 days"
}, {
  id: "tomato",
  name: "Cherry tomato",
  spot: "North bed",
  img: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&q=70",
  moisture: 45,
  status: ["accent", "Fruiting"],
  due: "Feed in 5 days"
}];
function Stat({
  icon,
  label,
  value,
  sub
}) {
  const {
    Card
  } = window.TerraDesignSystem_e80b04;
  return /*#__PURE__*/React.createElement(Card, {
    padding: "18px 20px",
    style: {
      flex: 1,
      minWidth: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "var(--green-600)"
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "var(--font-display)",
      fontSize: 32,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, sub));
}
function MoistureBar({
  value
}) {
  const color = value < 35 ? "var(--color-warning)" : "var(--color-primary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      color: "var(--text-muted)",
      marginBottom: 5,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "Soil moisture"), /*#__PURE__*/React.createElement("span", null, value, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 999,
      background: "var(--cream-sunk)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: value + "%",
      height: "100%",
      background: color,
      borderRadius: 999
    }
  })));
}
function Dashboard({
  onOpenPlant
}) {
  const {
    Card,
    Badge
  } = window.TerraDesignSystem_e80b04;
  const I = window.TerraIcons;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginBottom: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: /*#__PURE__*/React.createElement(I.leaf, {
      size: 20
    }),
    label: "Plants",
    value: "12",
    sub: "across 4 spots"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: /*#__PURE__*/React.createElement(I.droplet, {
      size: 20
    }),
    label: "Need water",
    value: "3",
    sub: "2 due today"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: /*#__PURE__*/React.createElement(I.sun, {
      size: 20
    }),
    label: "Light today",
    value: "6.4h",
    sub: "full sun"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: /*#__PURE__*/React.createElement(I.thermometer, {
      size: 20
    }),
    label: "Soil temp",
    value: "18\xB0C",
    sub: "ideal range"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 21,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, "Your plants"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-label)",
      fontSize: 14,
      fontWeight: 700,
      color: "var(--text-link)",
      textDecoration: "none"
    }
  }, "View all 12 \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 18
    }
  }, PLANTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    interactive: true,
    padding: "0",
    style: {
      overflow: "hidden"
    },
    onClick: () => onOpenPlant && onOpenPlant(p)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 132,
      background: `var(--cream-sunk) url(${p.img}) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-subtle)"
    }
  }, p.spot)), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status[0]
  }, p.status[1])), /*#__PURE__*/React.createElement(MoistureBar, {
    value: p.moisture
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      marginTop: 14,
      fontSize: 13,
      color: "var(--text-muted)",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(I.clock, {
    size: 16
  }), " ", p.due))))));
}
window.TerraDashboard = Dashboard;
window.TerraPlants = PLANTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/garden-app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/garden-app/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lightweight inline icon set for the Terra UI kit (Lucide-style, 1.8px stroke).
// Substitution note: Terra ships no proprietary icon set, so the kit uses
// Lucide-style line icons (https://lucide.dev) — rounded, 2px stroke — which
// match Terra's soft, organic feel. Swap for the official set if one is provided.
const React = window.React;
function Icon({
  size = 22,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), children);
}
const Icons = {
  sprout: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M7 20h10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20c5.5-2.5.8-6.4 3-10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-2-3-4.2 2.8-.5 4.4 0 5.5.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
  })),
  home: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 9.5 12 3l9 6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10v10h14V10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 20v-6h6v6"
  })),
  calendar: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 2v4M16 2v4"
  })),
  droplet: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.7 6.3 9a8 8 0 1 0 11.4 0z"
  })),
  sun: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })),
  leaf: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 9-4 16-9 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c4-7 8-9 13-10"
  })),
  bell: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  settings: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 8 19.7a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H2a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.3 8a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4.3 1.7 1.7 0 0 0 10 2.6V2a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1.2 1.6 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H22a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
  })),
  plus: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  search: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  thermometer: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"
  })),
  scissors: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4 8.1 15.9M14.5 12.5 20 20M8.1 8.1 12 12"
  })),
  chevronRight: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })),
  check: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  clock: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  }))
};
window.TerraIcons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/garden-app/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/garden-app/PlantDetail.jsx
try { (() => {
// Terra — Plant detail screen.
const React = window.React;
function CareRow({
  icon,
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "13px 0",
      borderBottom: "1px solid var(--outline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--green-600)"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-body)",
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, value));
}
function PlantDetail({
  plant,
  onBack
}) {
  const {
    Card,
    Badge,
    Button,
    Tabs,
    Switch,
    Alert
  } = window.TerraDesignSystem_e80b04;
  const I = window.TerraIcons;
  const [tab, setTab] = React.useState("care");
  const [reminder, setReminder] = React.useState(true);
  const p = plant || window.TerraPlants[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      border: "none",
      background: "transparent",
      color: "var(--text-muted)",
      fontFamily: "var(--font-label)",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      marginBottom: 18,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: "rotate(180deg)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(I.chevronRight, {
    size: 18
  })), " Back to garden"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "320px 1fr",
      gap: 28,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 280,
      background: `var(--cream-sunk) url(${p.img}) center/cover`
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 34,
      fontWeight: 600,
      color: "var(--text-strong)",
      letterSpacing: "-0.02em"
    }
  }, p.name), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status[0]
  }, p.status[1])), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: 16,
      color: "var(--text-muted)"
    }
  }, p.spot, " \xB7 added 3 months ago"), p.moisture < 35 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    icon: /*#__PURE__*/React.createElement(I.droplet, {
      size: 20
    })
  }, "Soil is dry. A good soak this morning will keep ", p.name.toLowerCase(), " happy.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: "care",
      label: "Care"
    }, {
      value: "history",
      label: "History"
    }, {
      value: "notes",
      label: "Notes"
    }],
    value: tab,
    onChange: setTab
  })), tab === "care" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(CareRow, {
    icon: /*#__PURE__*/React.createElement(I.droplet, {
      size: 20
    }),
    label: "Water",
    value: "Every 7 days \xB7 250ml"
  }), /*#__PURE__*/React.createElement(CareRow, {
    icon: /*#__PURE__*/React.createElement(I.sun, {
      size: 20
    }),
    label: "Light",
    value: "Bright, indirect"
  }), /*#__PURE__*/React.createElement(CareRow, {
    icon: /*#__PURE__*/React.createElement(I.thermometer, {
      size: 20
    }),
    label: "Temperature",
    value: "16\u201324\xB0C"
  }), /*#__PURE__*/React.createElement(CareRow, {
    icon: /*#__PURE__*/React.createElement(I.scissors, {
      size: 20
    }),
    label: "Pruning",
    value: "Monthly"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-body)"
    }
  }, "Watering reminders"), /*#__PURE__*/React.createElement(Switch, {
    checked: reminder,
    onChange: setReminder
  }))), tab === "history" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(CareRow, {
    icon: /*#__PURE__*/React.createElement(I.droplet, {
      size: 20
    }),
    label: "Watered",
    value: "2 days ago"
  }), /*#__PURE__*/React.createElement(CareRow, {
    icon: /*#__PURE__*/React.createElement(I.leaf, {
      size: 20
    }),
    label: "Fed (organic)",
    value: "2 weeks ago"
  }), /*#__PURE__*/React.createElement(CareRow, {
    icon: /*#__PURE__*/React.createElement(I.scissors, {
      size: 20
    }),
    label: "Pruned",
    value: "1 month ago"
  })), tab === "notes" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 15,
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)"
    }
  }, "New leaf unfurling on the north side. Rotated the pot a quarter-turn toward the window \u2014 it had been leaning toward the light."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: /*#__PURE__*/React.createElement(I.droplet, {
      size: 18
    })
  }, "Log watering"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Edit plant")))));
}
window.TerraPlantDetail = PlantDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/garden-app/PlantDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/garden-app/Schedule.jsx
try { (() => {
// Terra — Schedule screen. Upcoming care tasks grouped by day.
const React = window.React;
const DAYS = [{
  day: "Today",
  date: "Tue 30",
  tasks: [{
    id: 1,
    kind: "water",
    icon: "droplet",
    plant: "Sweet basil",
    spot: "Kitchen sill",
    tone: "warning"
  }, {
    id: 2,
    kind: "water",
    icon: "droplet",
    plant: "Pothos",
    spot: "Office shelf",
    tone: "primary"
  }, {
    id: 3,
    kind: "mist",
    icon: "leaf",
    plant: "Boston fern",
    spot: "Bathroom",
    tone: "primary"
  }]
}, {
  day: "Tomorrow",
  date: "Wed 01",
  tasks: [{
    id: 4,
    kind: "feed",
    icon: "leaf",
    plant: "Cherry tomato",
    spot: "North bed",
    tone: "accent"
  }, {
    id: 5,
    kind: "prune",
    icon: "scissors",
    plant: "Monstera",
    spot: "Living room",
    tone: "primary"
  }]
}, {
  day: "Friday",
  date: "Fri 03",
  tasks: [{
    id: 6,
    kind: "water",
    icon: "droplet",
    plant: "Snake plant",
    spot: "Bedroom",
    tone: "primary"
  }]
}];
function TaskRow({
  task,
  done,
  onToggle
}) {
  const {
    Checkbox,
    Badge
  } = window.TerraDesignSystem_e80b04;
  const I = window.TerraIcons;
  const Ic = I[task.icon];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 4px",
      opacity: done ? 0.5 : 1,
      transition: "opacity 200ms ease"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: done,
    onChange: onToggle
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 38,
      height: 38,
      borderRadius: "var(--radius-md)",
      background: "var(--green-50)",
      color: "var(--green-600)",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-strong)",
      textDecoration: done ? "line-through" : "none"
    }
  }, task.kind[0].toUpperCase() + task.kind.slice(1), " \xB7 ", task.plant), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-subtle)"
    }
  }, task.spot)), /*#__PURE__*/React.createElement(Badge, {
    tone: task.tone
  }, task.kind));
}
function Schedule() {
  const {
    Card,
    Badge
  } = window.TerraDesignSystem_e80b04;
  const I = window.TerraIcons;
  const [done, setDone] = React.useState({});
  const toggle = id => setDone(d => ({
    ...d,
    [id]: !d[id]
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, DAYS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.day
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, d.day), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-subtle)"
    }
  }, d.date), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: 13,
      color: "var(--text-subtle)",
      fontWeight: 600
    }
  }, d.tasks.length, " tasks")), /*#__PURE__*/React.createElement(Card, {
    padding: "6px 18px"
  }, d.tasks.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    style: {
      borderTop: i ? "1px solid var(--outline)" : "none"
    }
  }, /*#__PURE__*/React.createElement(TaskRow, {
    task: t,
    done: !!done[t.id],
    onToggle: () => toggle(t.id)
  }))))))));
}
window.TerraSchedule = Schedule;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/garden-app/Schedule.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
