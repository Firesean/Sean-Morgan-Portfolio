<script>
    export let size = 200;

    $: sizePx = `${size}px`;

    let black = "#000000";
    let maroon = "#B62109";
    let orange = "#B94C07";
    let gold = "#CF9822";
    let yellow = "#B98B07";
    let darker_orange = "#BB6601";
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 90 120" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color={black} />
            <stop offset="2%" stop-color={maroon} />
            <stop offset="5%" stop-color={orange} />
            <stop offset="10%" stop-color={gold} />
            <stop offset="12%" stop-color={yellow} />
            <stop offset="15%" stop-color={darker_orange} />

            <stop offset="25%" stop-color={darker_orange} />
            <stop offset="30%" stop-color={yellow} />
            <stop offset="28%" stop-color={gold} />
            <stop offset="25%" stop-color={orange} />

            <stop offset="50%" stop-color="#FFFFFF" />

            <stop offset="75%" stop-color={darker_orange} />
            <stop offset="80%" stop-color={yellow} />
            <stop offset="78%" stop-color={gold} />
            <stop offset="75%" stop-color={orange} />

            <stop offset="85%" stop-color={darker_orange} />
            <stop offset="90%" stop-color={yellow} />
            <stop offset="88%" stop-color={gold} />
            <stop offset="85%" stop-color={orange} />
            <stop offset="98%" stop-color={maroon} />
            <stop offset="100%" stop-color={black} />
        </linearGradient>
    </defs>
    <g fill="url(#grad)" stroke="#FFD700" stroke-width="4">
        <path d="M 40 0 C 51 23 48 26 53 30 C 58 35 57.3333 34.6667 59 42 C 61 48 61 48 62 56 C 58 52 61 55 55 54 C 50 59 56 63 59 63 C 56 69 51 80 32 75 C 11 65 29 45 31 35 C 36 23 40 14 40 0 M 67 37 C 74 55 76 49 87 72 C 90 89 80 114 58 109 C 44 103 40 86 55 78 C 59 78 74 71 67 37 M 43 85 C 44 93 51 112 32 109 C 16 113 -6 84 3 60 C 2 54 14 55 14 59 C 16 67 23 91 43 85"/>
    </g>
</svg>