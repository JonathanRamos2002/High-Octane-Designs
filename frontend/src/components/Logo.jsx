const Logo = () => (
  <svg width="312" height="100"
    viewBox="0 0 300 100"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current text-neutral dark:text-white"
  >
    <defs>
      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#dc2626" stopOpacity="1" />
        <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
        <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
      </linearGradient>

      <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#dc2626" stopOpacity="0.1" />
      </linearGradient>

      <radialGradient id="octaneGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f3f4f6" stopOpacity="1" />
        <stop offset="70%" stopColor="#9ca3af" stopOpacity="1" />
        <stop offset="100%" stopColor="#6b7280" stopOpacity="1" />
      </radialGradient>
    </defs>

    <g opacity="0.6">
      <rect x="50" y="25" width="80" height="2" fill="url(#speedGradient)" rx="1">
        <animate
          attributeName="width"
          values="80;120;80"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="60" y="35" width="60" height="1.5" fill="url(#speedGradient)" rx="1">
        <animate
          attributeName="width"
          values="60;90;60"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="70" y="45" width="40" height="1" fill="url(#speedGradient)" rx="1">
        <animate
          attributeName="width"
          values="40;70;40"
          dur="3s"
          repeatCount="indefinite"
        />
      </rect>
    </g>

    <g transform="translate(20,30)">
      <circle cx="20" cy="20" r="18" fill="url(#octaneGradient)" stroke="#6b7280" strokeWidth="2" />
      <path d="M11,30 A12,12 0 0 1 27,10" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M 28.494308,11.517073 C 30.718606,13.628216 31.946375,17.213397 32,19.814634"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="2" fill="#6b7280" />
      <line x1="20" y1="20.06" x2="29" y2="11.06" stroke="#dc2626" strokeWidth="3" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="-45 20 20;25 20 20;-45 20 20"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
    </g>

    <text
      x="80"
      y="45"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="url(#textGradient)"
      letterSpacing="2px"
    >
      HIGH OCTANE
    </text>
    <text
      x="80"
      y="68"
      fontFamily="Arial, sans-serif"
      fontSize="16"
      fontWeight="normal"
      fill="#666"
      letterSpacing="4px"
    >
      DESIGNS
    </text>

    <rect x="80" y="75" width="200" height="2" fill="url(#textGradient)" rx="1" />
    <rect x="80" y="80" width="150" height="1" fill="#dc2626" opacity="0.5" rx="1" />
  </svg>
);

export default Logo;
