import { Question } from '../types';

export const NISM_CH2_DATA: Question[] = [
  // Section 2.1 – Securities & Securities Market (Q1 - Q15)
  {
    id: 2001,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "Securities are best described as:",
    opts: [
      "Transferable financial claims evidencing indebtedness or ownership interest in an incorporated entity",
      "Deposits held with banks",
      "Only shares issued by listed companies",
      "Non-transferable contracts between two firms"
    ],
    ans: 0, // A
    exp: "Securities are transferable financial claims/contracts evidencing indebtedness or ownership interest."
  },
  {
    id: 2002,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "The term 'securities' is defined in which provision?",
    opts: [
      "Section 2(h), Companies Act 2013",
      "Section 12, SEBI Act 1992",
      "Section 2(1), Depositories Act 1996",
      "Section 2(h), SCRA 1956"
    ],
    ans: 3, // D
    exp: "SCRA 1956, Section 2(h) defines securities."
  },
  {
    id: 2003,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "Which of the following is EXCLUDED from the definition of securities?",
    opts: [
      "Government securities",
      "Unit Linked Insurance Policy (ULIP)",
      "Mutual fund units",
      "Derivatives"
    ],
    ans: 1, // B
    exp: "ULIPs giving combined risk-on-life and investment benefit issued by an insurer are specifically excluded."
  },
  {
    id: 2004,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "From the investor's perspective, ownership of securities allows:",
    opts: [
      "Avoiding all taxes",
      "Direct control over regulators",
      "Conversion of savings into financial assets that provide a return",
      "Guaranteed capital without risk"
    ],
    ans: 2, // C
    exp: "Investors convert savings into financial assets giving returns; issuers raise money at a cost."
  },
  {
    id: 2005,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "Security issuance allows borrowers to:",
    opts: [
      "Raise money at a cost",
      "Avoid repaying investors",
      "Raise money free of cost",
      "Avoid regulation"
    ],
    ans: 0, // A
    exp: "Raising funds through securities has a cost (interest/dividend/dilution)."
  },
  {
    id: 2006,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "A long-term security effectively becomes a short-term security because of:",
    opts: [
      "Credit rating",
      "Active secondary market",
      "Government guarantee",
      "Higher coupon"
    ],
    ans: 1, // B
    exp: "Investors can exit any time in the secondary market, so liquidity converts long-term into short-term."
  },
  {
    id: 2007,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "'Liquidity' in a securities market means:",
    opts: [
      "High returns on every trade",
      "Compulsory holding for a year",
      "Availability of loans",
      "Ease of buying and selling at close to market prices"
    ],
    ans: 3, // D
    exp: "Liquidity = ease of buy/sell near market price."
  },
  {
    id: 2008,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "The core function of the securities market is to:",
    opts: [
      "Print currency",
      "Collect income tax",
      "Convert savings into investments / channel surplus funds to productive use",
      "Fix interest rates"
    ],
    ans: 2, // C
    exp: "Markets move idle surplus resources from savers to those needing funds for productive use."
  },
  {
    id: 2009,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "Which of the following is NOT a component of the financial market as described in the chapter?",
    opts: [
      "Intermediaries",
      "Seekers of funds",
      "Tax consultants",
      "Providers of funds"
    ],
    ans: 2, // C
    exp: "Components of the financial market: investors (providers of funds), borrowers (seekers of funds), intermediaries and regulatory bodies."
  },
  {
    id: 2010,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "In the flow-of-funds diagram, 'Indirect Finance' passes through:",
    opts: [
      "Stock exchanges only",
      "Financial intermediaries",
      "Financial markets directly",
      "Foreign governments only"
    ],
    ans: 1, // B
    exp: "Direct finance = financial markets directly; indirect finance = financial intermediaries."
  },
  {
    id: 2011,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "Which of these is a surplus-income unit in the chapter's diagram?",
    opts: [
      "Only government",
      "Only foreigners",
      "None of these",
      "Households"
    ],
    ans: 3, // D
    exp: "Households appear predominantly as surplus-income units (savers), as well as business firms and government."
  },
  {
    id: 2012,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "A 'security receipt' included in securities is defined in which Act?",
    opts: [
      "Insurance Act 1938",
      "SARFAESI Act 2002",
      "Companies Act 2013",
      "Banking Regulation Act 1949"
    ],
    ans: 1, // B
    exp: "Clause (zg) of Section 2 of the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002."
  },
  {
    id: 2013,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "Electronic Gold Receipts were declared as securities by gazette notification dated:",
    opts: [
      "1 April 2019",
      "24 December 2021",
      "21 June 2018",
      "9 June 2020"
    ],
    ans: 1, // B
    exp: "The chapter states gazette notification dated 24 December 2021 declared EGRs as securities."
  },
  {
    id: 2014,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "As per SCRA, the term securities include which of the following?",
    opts: [
      "Government securities",
      "Derivatives",
      "Shares, scrips or bonds",
      "All of the above"
    ],
    ans: 3, // D
    exp: "SCRA Section 2(h) includes shares, scrips, bonds, debentures, government securities, and derivatives."
  },
  {
    id: 2015,
    sec: "Section 2.1 - Securities & Securities Market",
    q: "Broadly, financial securities in the Indian market are categorised as:",
    opts: [
      "Equity, debt and derivative",
      "Primary and secondary",
      "Cash, gold and land",
      "Only equity and debt"
    ],
    ans: 0, // A
    exp: "Financial securities are broadly classified into equity, debt and derivative securities."
  },

  // Section 2.2 (Part 1) – Equity, Debentures, Bonds (Q16 - Q38)
  {
    id: 2016,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Equity shares represent:",
    opts: [
      "Debt owed by company",
      "Fractional ownership in a business",
      "A pooled fund unit",
      "A right to buy at fixed price"
    ],
    ans: 1, // B
    exp: "Equity = fractional ownership; equity holders bear business risk and enjoy profits/rewards."
  },
  {
    id: 2017,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "FPI stands for:",
    opts: [
      "Financial Primary Intermediary",
      "Fixed Portfolio Instrument",
      "Foreign Portfolio Investor",
      "Foreign Private Investor"
    ],
    ans: 2, // C
    exp: "FPI stands for Foreign Portfolio Investor."
  },
  {
    id: 2018,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "HNI stands for:",
    opts: [
      "Highly Neutral Investors",
      "High Notional Instruments",
      "Heavy National Investors",
      "High Networth Individuals"
    ],
    ans: 3, // D
    exp: "HNI = High Net-worth Individuals."
  },
  {
    id: 2019,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "A secured debenture is one that is:",
    opts: [
      "Backed by collateral",
      "Issued only by government",
      "Convertible into shares",
      "Issued only abroad"
    ],
    ans: 0, // A
    exp: "Secured debentures are backed by collateral support / mortgage on company assets."
  },
  {
    id: 2020,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Non-Convertible Debentures (NCDs) are:",
    opts: [
      "Pure debt, redeemable on maturity",
      "Partly converted to shares",
      "Equity-linked",
      "Convertible at holder's option"
    ],
    ans: 0, // A
    exp: "NCDs are pure debt instruments redeemable on maturity with no conversion feature."
  },
  {
    id: 2021,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "'Bonds' is an umbrella term in the ______, while 'Debentures' is an umbrella term in the ______.",
    opts: [
      "UK; US",
      "US; UK",
      "US; India",
      "India; US"
    ],
    ans: 1, // B
    exp: "'Bonds' is the overarching umbrella term in the US; 'Debentures' is the umbrella term in the UK."
  },
  {
    id: 2022,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Government bonds with long maturities are called ______ in the UK.",
    opts: [
      "Notes",
      "Warrants",
      "GILTs",
      "Debentures"
    ],
    ans: 2, // C
    exp: "In the UK, long-term government bonds are referred to as GILTs (Gilt-edged securities)."
  },
  {
    id: 2023,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Short-term debt instruments are used to raise debt for a period:",
    opts: [
      "Of exactly five years",
      "Exceeding ten years",
      "Of three to seven years",
      "Not exceeding one year"
    ],
    ans: 3, // D
    exp: "Short-term debt instruments (Treasury Bills, Commercial Paper, CDs) are issued for tenors up to one year."
  },
  {
    id: 2024,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Commercial Papers are issued by:",
    opts: [
      "Government",
      "Companies with high credit rating",
      "Banks",
      "Mutual funds"
    ],
    ans: 1, // B
    exp: "Commercial Papers (CPs) are short-term unsecured promissory notes issued by highly rated corporate borrowers."
  },
  {
    id: 2025,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Certificates of Deposit are issued by:",
    opts: [
      "Banks",
      "Companies",
      "SEBI",
      "Stock exchanges"
    ],
    ans: 0, // A
    exp: "Certificates of Deposit (CDs) are negotiable money market instruments issued by scheduled commercial banks."
  },
  {
    id: 2026,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Where the entire face value of the debenture is converted into equity shares, it is known as:",
    opts: [
      "Fully Convertible Debenture",
      "Party Convertible Debenture",
      "Optionally Convertible Debenture",
      "None of the above"
    ],
    ans: 0, // A
    exp: "Fully Convertible Debenture (FCD) converts 100% of its face value into ordinary equity shares."
  },
  {
    id: 2027,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "In a Partly Convertible Debenture, the non-convertible portion:",
    opts: [
      "Converts to preference shares",
      "Lapses",
      "Is repaid on redemption like a plain debenture",
      "Converts later automatically"
    ],
    ans: 2, // C
    exp: "In a PCD, the non-convertible portion continues as a regular debt instrument, earning interest and redeemed at maturity."
  },
  {
    id: 2028,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "A bond issued by a foreign-country entity in that country's local currency is a:",
    opts: [
      "Masala bond",
      "Domestic bond",
      "Euro bond",
      "Foreign bond"
    ],
    ans: 3, // D
    exp: "A foreign bond is issued by an overseas borrower in the host country's domestic market in that country's currency (e.g. Yankee, Samurai)."
  },
  {
    id: 2029,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "An Indian company issues a Yen-denominated bond in Germany. It is called a:",
    opts: [
      "Masala bond",
      "Domestic bond",
      "Foreign bond",
      "Euro bond (Euro Yen bond)"
    ],
    ans: 3, // D
    exp: "Since Yen is not Germany's local currency, issuing Yen bonds in Germany constitutes a Euro bond (Euro Yen bond)."
  },
  {
    id: 2030,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "A 'Euro bond' means:",
    opts: [
      "Bond issued in Europe only",
      "Bond denominated in Euro only",
      "Bond in a currency different from local currency of the country where it is issued",
      "Bond issued by European Union"
    ],
    ans: 2, // C
    exp: "Euro bond does not mean issued in Europe or denominated in Euro; it means denominated in a currency other than the domestic currency of the issuing jurisdiction."
  },
  {
    id: 2031,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "A company issuing USD bonds in Kuwait has issued a:",
    opts: [
      "Foreign bond",
      "Euro bond",
      "Domestic bond",
      "Masala bond"
    ],
    ans: 1, // B
    exp: "USD is not the local currency of Kuwait (Kuwaiti Dinar), so a USD issue in Kuwait is a Euro bond."
  },
  {
    id: 2032,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Delhi International Airport Ltd (SPV of GMR Infrastructure) issued USD bonds in the US in:",
    opts: [
      "February 2020",
      "November 2014",
      "December 2021",
      "April 2019"
    ],
    ans: 0, // A
    exp: "The chapter cites DIAL issuing USD bonds in the US market in February 2020 as an example of a foreign bond."
  },
  {
    id: 2033,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Foreign-currency bonds create significant currency risk for:",
    opts: [
      "The issuer",
      "The foreign investor",
      "The regulator",
      "The depository"
    ],
    ans: 0, // A
    exp: "If foreign currency appreciates against INR, the Indian issuer needs more domestic currency to service/repay the debt."
  },
  {
    id: 2034,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Euro bonds denominated in Indian Rupees are known as:",
    opts: [
      "Gilt bonds",
      "Masala bonds",
      "Rupee futures",
      "Sovereign bonds"
    ],
    ans: 1, // B
    exp: "Rupee-denominated bonds issued in overseas markets are known as Masala bonds."
  },
  {
    id: 2035,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Masala bonds were first issued in November 2014 by:",
    opts: [
      "Asian Development Bank",
      "RBI",
      "World Bank",
      "International Finance Corporation"
    ],
    ans: 3, // D
    exp: "International Finance Corporation (IFC) issued the maiden Masala bonds in November 2014, listed on the London Stock Exchange."
  },
  {
    id: 2036,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "In Masala bonds, the currency risk is borne by:",
    opts: [
      "Indian government",
      "SEBI",
      "Foreign investor",
      "Indian issuer"
    ],
    ans: 2, // C
    exp: "Because Masala bonds are denominated in INR, any INR depreciation hurts the overseas investor upon conversion."
  },
  {
    id: 2037,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Domestic bonds are:",
    opts: [
      "Issued in home country market in home currency",
      "Issued in foreign market in foreign currency",
      "Always government bonds",
      "Always convertible"
    ],
    ans: 0, // A
    exp: "By definition, domestic bonds are issued in the issuer's home country and in its domestic currency."
  },
  {
    id: 2038,
    sec: "Section 2.2 (Part 1) - Equity, Debentures, Bonds",
    q: "Which is the most appropriate statement about the words 'Debentures/Bonds/Notes'?",
    opts: [
      "They are regulated by FEMA only",
      "They are always identical",
      "They are used interchangeably but structure, collateral, country and maturity may differ",
      "They differ only in colour"
    ],
    ans: 2, // C
    exp: "They are broadly used interchangeably, but exact features regarding collateral, maturity, legal jurisdiction, and geography differ."
  },

  // Section 2.2 (Part 2) – Warrants, Indices, MF, ETF (Q39 - Q54)
  {
    id: 2039,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "Warrants give the holder the right, but not the obligation, to:",
    opts: [
      "Sell shares at any price",
      "Vote in AGM",
      "Receive guaranteed dividend",
      "Buy equity shares after a specified period at a pre-determined price"
    ],
    ans: 3, // D
    exp: "A warrant gives the holder the right to purchase underlying equity shares at a pre-determined price over a set period."
  },
  {
    id: 2040,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "The regulator mentioned for warrants in the chapter is:",
    opts: [
      "PFRDA",
      "SEBI",
      "RBI",
      "IRDAI"
    ],
    ans: 1, // B
    exp: "SEBI regulates issuance and terms of equity warrants in the securities market."
  },
  {
    id: 2041,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "The S&P BSE Sensex comprises:",
    opts: [
      "20 stocks",
      "30 stocks",
      "40 stocks",
      "50 stocks"
    ],
    ans: 1, // B
    exp: "BSE Sensex comprises 30 large, liquid, representative stocks weighted by free-float market capitalisation."
  },
  {
    id: 2042,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "SX40 is an index of:",
    opts: [
      "MSEI",
      "NSE",
      "MCX",
      "BSE"
    ],
    ans: 0, // A
    exp: "SX40 is the flagship 40-stock index of the Metropolitan Stock Exchange of India (MSEI)."
  },
  {
    id: 2043,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "Nifty 50 comprises 50 stocks listed on:",
    opts: [
      "NCDEX",
      "BSE",
      "MSEI",
      "NSE"
    ],
    ans: 3, // D
    exp: "Nifty 50 is the benchmark index of the National Stock Exchange of India (NSE)."
  },
  {
    id: 2044,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "Most leading indices are weighted by:",
    opts: [
      "Dividend yield",
      "Number of employees",
      "Market capitalisation",
      "Face value"
    ],
    ans: 2, // C
    exp: "Leading stock indices are constructed using market capitalisation (specifically free-float market cap) weighting."
  },
  {
    id: 2045,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "Which is NOT a use of indices?",
    opts: [
      "Benchmark for active equity funds",
      "Guarantee of fixed returns",
      "Underlying for index futures/options",
      "Barometer of economy"
    ],
    ans: 1, // B
    exp: "Stock indices do not guarantee returns; they serve as benchmarks, economic barometers, and derivative underlyings."
  },
  {
    id: 2046,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "Stocks are chosen for an index based on:",
    opts: [
      "Liquidity, floating stock availability, market cap",
      "Age of company",
      "Face value only",
      "Alphabetical order"
    ],
    ans: 0, // A
    exp: "Constituents are selected based on high liquidity, trading frequency, free-float size, and market representation."
  },
  {
    id: 2047,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "The value of a mutual fund unit is called:",
    opts: [
      "Net Asset Value (NAV)",
      "Face value",
      "Premium",
      "Strike price"
    ],
    ans: 0, // A
    exp: "Net Asset Value (NAV) represents the per-unit market value of mutual fund securities."
  },
  {
    id: 2048,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "An open-ended mutual fund scheme:",
    opts: [
      "Has fixed maturity",
      "Is mandatorily listed",
      "Has fixed unit capital",
      "Allows buy/sell of units any time at NAV-linked prices"
    ],
    ans: 3, // D
    exp: "Open-ended funds have perpetual lives and issue/redeem units on demand at prevailing NAV-based prices."
  },
  {
    id: 2049,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "Closed-ended fund units are:",
    opts: [
      "Sold only to the fund",
      "Fixed in number and mandatorily listed on stock exchange",
      "Unlimited",
      "Not tradable"
    ],
    ans: 1, // B
    exp: "Closed-ended schemes have fixed unit capital and must be mandatorily listed on stock exchanges for secondary liquidity."
  },
  {
    id: 2050,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "ETF units are traded:",
    opts: [
      "Only through the fund house",
      "Only OTC",
      "In demat form on a stock exchange at real-time prices",
      "Only at NAV after market hours"
    ],
    ans: 2, // C
    exp: "Exchange Traded Funds (ETFs) trade continuously like shares on the exchange order book in demat form."
  },
  {
    id: 2051,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "Authorised Participants in an ETF:",
    opts: [
      "Regulate the fund",
      "Deliver bundle of assets to sponsor and receive ETF units",
      "Audit the fund",
      "Declare dividends"
    ],
    ans: 1, // B
    exp: "Authorised Participants (APs) create and redeem units in creation units by delivering the underlying basket of securities."
  },
  {
    id: 2052,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "ETFs have features of both:",
    opts: [
      "Open-ended and closed-ended funds",
      "Futures and options",
      "Equity and debt",
      "Bonds and warrants"
    ],
    ans: 0, // A
    exp: "ETFs combine open-ended creation/redemption mechanisms with closed-ended exchange trading."
  },
  {
    id: 2053,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "Why are ETF expense ratios typically lower than MF schemes?",
    opts: [
      "They invest only in gold",
      "They are government funds",
      "They are passively managed",
      "They are unlisted"
    ],
    ans: 2, // C
    exp: "ETFs mirror an underlying index passively without expensive active research and portfolio management overheads."
  },
  {
    id: 2054,
    sec: "Section 2.2 (Part 2) - Warrants, Indices, MF, ETF",
    q: "The most common commodity ETF product is:",
    opts: [
      "Crude ETF",
      "Wheat ETF",
      "Copper ETF",
      "Gold ETF"
    ],
    ans: 3, // D
    exp: "Gold ETFs are the most prevalent commodity ETF products, holding standard physical gold bars in secure vaults."
  },

  // Section 2.2 (Part 3) – Hybrids & Structured Products (Q55 - Q80)
  {
    id: 2055,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Preference shareholders have preference over equity holders in:",
    opts: [
      "Board nomination",
      "Bonus issue only",
      "Dividend and repayment of capital on winding up",
      "Voting rights"
    ],
    ans: 2, // C
    exp: "Preference shares carry preferential rights to fixed dividend and return of capital during company liquidation."
  },
  {
    id: 2056,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Which is NOT true of preference shares?",
    opts: [
      "Dividend payment is not an obligation",
      "Dividend is paid from profit after tax",
      "They have pre-determined dividend rate",
      "They usually carry voting rights"
    ],
    ans: 3, // D
    exp: "Preference shares generally do NOT carry voting rights (except on resolutions directly affecting their rights)."
  },
  {
    id: 2057,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "In cumulative preference shares, unpaid dividend:",
    opts: [
      "Converts to debt",
      "Is carried forward",
      "Lapses",
      "Converts to equity"
    ],
    ans: 1, // B
    exp: "In cumulative preference shares, omitted dividends accumulate and are carried forward to future profitable years."
  },
  {
    id: 2058,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Optionally Convertible Debentures are converted:",
    opts: [
      "At the discretion of the debenture holder",
      "Never",
      "Automatically on maturity",
      "By the regulator"
    ],
    ans: 0, // A
    exp: "Optionally Convertible Debentures (OCDs) allow the investor the discretion/option whether to convert into equity or redeem as debt."
  },
  {
    id: 2059,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "The main advantage to the issuer of a convertible debenture is:",
    opts: [
      "Lower coupon rate and no repayment at maturity if converted",
      "Higher coupon",
      "No dilution",
      "No disclosure"
    ],
    ans: 0, // A
    exp: "Convertible feature lowers required interest rate, and if converted, the firm avoids cash outflow for principal repayment."
  },
  {
    id: 2060,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "The main disadvantage of convertible debentures to the issuer is:",
    opts: [
      "Credit rating",
      "Dilution of existing shareholders' stake",
      "Tax",
      "Higher coupon"
    ],
    ans: 1, // B
    exp: "Conversion expands share capital, diluting ownership and EPS of existing equity shareholders."
  },
  {
    id: 2061,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Conversion terms of a convertible debenture are specified:",
    opts: [
      "At the time of conversion",
      "By SEBI later",
      "By the exchange daily",
      "At the time of issue"
    ],
    ans: 3, // D
    exp: "Conversion price, conversion ratio, and time windows are contractually fixed at the time of issue."
  },
  {
    id: 2062,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Depository Receipts represent shares of:",
    opts: [
      "Mutual funds",
      "Only Indian companies",
      "A foreign company",
      "Government"
    ],
    ans: 2, // C
    exp: "A Depository Receipt (DR) is a negotiable certificate issued by a domestic depository representing shares of a foreign corporation."
  },
  {
    id: 2063,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Holders of DRs generally do NOT have:",
    opts: [
      "Capital appreciation",
      "Dividend rights",
      "Right to sell",
      "Voting rights"
    ],
    ans: 3, // D
    exp: "DR holders enjoy economic benefits (dividends, capital appreciation) but typically lack direct voting rights."
  },
  {
    id: 2064,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Sponsored DRs are those where:",
    opts: [
      "Issuing company delivers shares and can list them",
      "Exchange delivers shares",
      "Investor delivers shares",
      "Government delivers shares"
    ],
    ans: 0, // A
    exp: "Sponsored DRs are issued through formal agreement between the issuer company and depository bank, allowing listing on major exchanges."
  },
  {
    id: 2065,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Unsponsored DRs are typically traded:",
    opts: [
      "Only by FPIs",
      "Not traded",
      "Only in OTC markets",
      "On stock exchanges"
    ],
    ans: 2, // C
    exp: "Unsponsored DRs are created without issuer participation and trade over-the-counter (OTC) with lighter reporting rules."
  },
  {
    id: 2066,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "A DR issued and traded in India by a non-Indian company is an:",
    opts: [
      "ADR",
      "IDR",
      "GDR",
      "HKDR"
    ],
    ans: 1, // B
    exp: "Indian Depository Receipt (IDR) allows foreign companies (e.g. Standard Chartered) to raise funds in India."
  },
  {
    id: 2067,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Which Indian companies have issued ADRs per the chapter?",
    opts: [
      "Only SBI",
      "Only TCS",
      "Only Reliance",
      "Infosys, Wipro, ICICI Bank, HDFC Bank"
    ],
    ans: 3, // D
    exp: "The chapter lists prominent ADR issuers including Infosys, Wipro, ICICI Bank, and HDFC Bank."
  },
  {
    id: 2068,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "GDRs are typically preferred to be issued in:",
    opts: [
      "Only USA",
      "European Union member states",
      "Hong Kong",
      "Only India"
    ],
    ans: 1, // B
    exp: "Global Depository Receipts (GDRs) are predominantly issued and traded in European financial centers (London, Luxembourg)."
  },
  {
    id: 2069,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "SEBI guidelines for IDRs include:",
    opts: [
      "Zero regulation",
      "Availability to NRIs only",
      "One-year lock-in on conversion into shares",
      "No limit on money raised"
    ],
    ans: 2, // C
    exp: "SEBI guidelines include a one-year lock-in on converting IDRs into underlying equity shares."
  },
  {
    id: 2070,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Two-way fungibility of DRs means:",
    opts: [
      "Shares can be converted into DRs and DRs back into shares, subject to regulation",
      "Shares convert to warrants",
      "DRs cannot be converted",
      "DRs convert to bonds"
    ],
    ans: 0, // A
    exp: "Two-way fungibility permits both converting shares into DRs and canceling DRs back into underlying domestic shares."
  },
  {
    id: 2071,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "FCCBs are regulated by:",
    opts: [
      "IRDAI",
      "PFRDA",
      "SEBI under SCRA only",
      "RBI under FEMA"
    ],
    ans: 3, // D
    exp: "Foreign Currency Convertible Bonds (FCCBs) are regulated by the Reserve Bank of India under FEMA guidelines."
  },
  {
    id: 2072,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "In FCCBs, interest and principal are paid in:",
    opts: [
      "Shares",
      "INR",
      "Foreign currency",
      "Gold"
    ],
    ans: 2, // C
    exp: "Until conversion, coupons and principal repayments are made in foreign currency."
  },
  {
    id: 2073,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Equity Linked Debentures (ELDs) are:",
    opts: [
      "Preference shares",
      "Floating-rate debt whose interest is based on returns of underlying equity",
      "Fixed-rate bonds",
      "Warrants"
    ],
    ans: 1, // B
    exp: "ELDs are structured debt products whose coupon/yield is linked to index or equity benchmark performance."
  },
  {
    id: 2074,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "The capital protection in an ELD means:",
    opts: [
      "Principal is protected via fixed income part but credit risk remains",
      "No credit risk exists",
      "Equity returns are guaranteed",
      "The issuer cannot default"
    ],
    ans: 0, // A
    exp: "Capital protection ensures principal repayment via fixed-income structuring, but issuer credit default risk remains."
  },
  {
    id: 2075,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Commodity Linked Debentures (CLDs) are mostly linked to:",
    opts: [
      "Wheat only",
      "Gold and silver",
      "Cotton",
      "Crude oil only"
    ],
    ans: 1, // B
    exp: "Commodity Linked Debentures in India are predominantly structured around precious metals (gold and silver)."
  },
  {
    id: 2076,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Mortgage Backed Securities (MBS) are backed by:",
    opts: [
      "Home loans",
      "Gold",
      "Auto loans",
      "Credit card receivables"
    ],
    ans: 0, // A
    exp: "MBS are securitised debt pools backed by cash flows from residential or commercial mortgage/home loans."
  },
  {
    id: 2077,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "Securitisation helps the issuer to:",
    opts: [
      "Issue shares",
      "Avoid ratings",
      "Create liquidity in otherwise illiquid assets",
      "Avoid listing"
    ],
    ans: 2, // C
    exp: "Securitisation transforms illiquid contractual receivables (loans, leases) into liquid marketable debt securities."
  },
  {
    id: 2078,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "In the case of a REIT, the minimum share of assets to be held in real estate is:",
    opts: [
      "60%",
      "70%",
      "80%",
      "90%"
    ],
    ans: 2, // C
    exp: "Under SEBI REIT Regulations, at least 80% of assets must be in rent-generating completed commercial real estate."
  },
  {
    id: 2079,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "For InvITs, the minimum share of unit capital to be invested in revenue-generating infrastructure is:",
    opts: [
      "70%",
      "80%",
      "90%",
      "100%"
    ],
    ans: 2, // C
    exp: "InvITs must hold at least 80% to 90% in revenue-generating completed infrastructure assets."
  },
  {
    id: 2080,
    sec: "Section 2.2 (Part 3) - Hybrids & Structured Products",
    q: "REITs and InvITs must distribute at least ______ of distributable surplus cash flow.",
    opts: [
      "50%",
      "75%",
      "80%",
      "90%"
    ],
    ans: 3, // D
    exp: "SEBI mandates that both REITs and InvITs distribute at least 90% of net distributable cash flows to unitholders."
  },

  // Section 2.2.8 – Commodities (Q81 - Q87)
  {
    id: 2081,
    sec: "Section 2.2.8 - Commodities",
    q: "Which of the following is a commodity as per the chapter?",
    opts: [
      "Branded watch",
      "Designer saree",
      "Gold jewellery",
      "A bar of gold"
    ],
    ans: 3, // D
    exp: "Commodities are standardised and homogeneous. A bar of gold is fungible; jewellery differs by design and artistry."
  },
  {
    id: 2082,
    sec: "Section 2.2.8 - Commodities",
    q: "Hard commodities are:",
    opts: [
      "Grains and pulses",
      "Mined or extracted resources like metals and crude oil",
      "Agricultural products",
      "Livestock"
    ],
    ans: 1, // B
    exp: "Hard commodities are mined or extracted (metals, oil, gas); soft commodities are grown (grains, cotton, sugar)."
  },
  {
    id: 2083,
    sec: "Section 2.2.8 - Commodities",
    q: "Why are most commodities unsuitable for direct investment?",
    opts: [
      "No price movement",
      "No inflation link",
      "High storage cost",
      "Government ban"
    ],
    ans: 2, // C
    exp: "High carrying costs, physical degradation, warehousing fees, and insurance make direct hoarding unfeasible."
  },
  {
    id: 2084,
    sec: "Section 2.2.8 - Commodities",
    q: "Why are precious metals viable investments?",
    opts: [
      "Very long life and low storage cost relative to value",
      "They pay dividends",
      "They have no price risk",
      "They are tax free"
    ],
    ans: 0, // A
    exp: "Gold and silver do not spoil, have high value per unit volume, and preserve real purchasing power."
  },
  {
    id: 2085,
    sec: "Section 2.2.8 - Commodities",
    q: "In a commodity ETF, storage is handled by:",
    opts: [
      "SEBI",
      "The exchange",
      "The investor",
      "The fund"
    ],
    ans: 3, // D
    exp: "The mutual fund trustee/custodian stores and insures the physical bullion on behalf of unitholders."
  },
  {
    id: 2086,
    sec: "Section 2.2.8 - Commodities",
    q: "A managed futures contract is:",
    opts: [
      "A warrant",
      "A single OTC forward",
      "A portfolio of futures contracts actively managed by professionals",
      "A bond"
    ],
    ans: 2, // C
    exp: "Managed futures are pooled investment funds actively traded across commodities and financial futures by professional CTAs."
  },
  {
    id: 2087,
    sec: "Section 2.2.8 - Commodities",
    q: "A warehouse receipt:",
    opts: [
      "Is proof of ownership of goods stored in a warehouse and mostly negotiable",
      "Is a bond",
      "Is a derivative of equity",
      "Cannot be transferred"
    ],
    ans: 0, // A
    exp: "Warehouse receipts serve as transferable negotiable title documents evidencing stored physical commodity deposits."
  },

  // Section 2.3 – Structure of Securities Market (Primary & Secondary) (Q88 - Q117)
  {
    id: 2088,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "The primary market is also called:",
    opts: [
      "Aftermarket",
      "New issue market",
      "Spot market",
      "OTC market"
    ],
    ans: 1, // B
    exp: "The primary market is also known as the New Issue Market where fresh capital is mobilised."
  },
  {
    id: 2089,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Which statement about the secondary market is correct?",
    opts: [
      "It is only for government securities",
      "Issuers raise fresh capital there",
      "It has no role in liquidity",
      "Dealings are between investors; issuers are not involved"
    ],
    ans: 3, // D
    exp: "In the secondary market, existing securities are traded between investors; the corporate issuer receives no proceeds."
  },
  {
    id: 2090,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "An 'offer for sale' (OFS) results in:",
    opts: [
      "Increase in share capital of the company",
      "Rights shares",
      "Bonus shares",
      "No fresh issuance; proceeds go to selling shareholders"
    ],
    ans: 3, // D
    exp: "In an OFS, existing shareholders (promoters, PE investors) sell their holdings; company capital remains unchanged."
  },
  {
    id: 2091,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Disinvestment of PSU shares by Government is an example of:",
    opts: [
      "OFS",
      "Bonus issue",
      "ESOP",
      "Rights issue"
    ],
    ans: 0, // A
    exp: "Government disinvestment of existing public sector shares uses the Offer For Sale (OFS) mechanism."
  },
  {
    id: 2092,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "IPO is:",
    opts: [
      "Issue to employees only",
      "First sale of a corporate's common shares to the public",
      "A private placement",
      "Sale by an already listed company only"
    ],
    ans: 1, // B
    exp: "Initial Public Offering (IPO) is the maiden public issuance and listing of shares by an unlisted company."
  },
  {
    id: 2093,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Which is true of IPOs as per SEBI regulations?",
    opts: [
      "No eligibility criteria",
      "Only physical shares allowed",
      "Shares must be listed on nationwide stock exchange and offered in demat form",
      "Listing is optional"
    ],
    ans: 2, // C
    exp: "SEBI requires mandatory listing on nationwide exchanges and dematerialised allocation."
  },
  {
    id: 2094,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "At least what percentage of shares in an eligible issue should be allocated to retail investors?",
    opts: [
      "25%",
      "30%",
      "35%",
      "50%"
    ],
    ans: 2, // C
    exp: "Under profitability-route IPOs, at least 35% of the net public offer is allocated to retail individual investors."
  },
  {
    id: 2095,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "A retail investor is one investing up to:",
    opts: [
      "Rs 50,000",
      "Rs 1,00,000",
      "Rs 2,00,000",
      "Rs 5,00,000"
    ],
    ans: 2, // C
    exp: "A retail individual investor (RII) applies for securities up to Rs 2,00,000 in a public issue."
  },
  {
    id: 2096,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "At most what percentage can be allocated to QIBs in an IPO?",
    opts: [
      "35%",
      "50%",
      "60%",
      "75%"
    ],
    ans: 1, // B
    exp: "In a standard eligibility-route IPO, allocation to QIBs is capped at 50% of the net offer."
  },
  {
    id: 2097,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "An anchor investor is a QIB who applies for a value of at least:",
    opts: [
      "Rs 1 crore",
      "Rs 5 crore",
      "Rs 10 crore",
      "Rs 50 crore"
    ],
    ans: 2, // C
    exp: "Anchor investors must apply for a minimum value of Rs 10 crore in public issues."
  },
  {
    id: 2098,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Anchor investors can be allocated up to ______ of the QIB portion.",
    opts: [
      "30%",
      "40%",
      "50%",
      "60%"
    ],
    ans: 3, // D
    exp: "Up to 60% of the QIB portion may be allocated to anchor investors."
  },
  {
    id: 2099,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Bidding for anchor investors opens:",
    opts: [
      "On the IPO open date",
      "One week before",
      "After closing",
      "One day before IPO opens for public subscription"
    ],
    ans: 3, // D
    exp: "Anchor bidding opens one day before the IPO opens for general public subscription."
  },
  {
    id: 2100,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "The allocation price for anchor investors:",
    opts: [
      "Is zero",
      "Is always equal",
      "Can be lower than the final issue price",
      "Must exceed issue price"
    ],
    ans: 2, // C
    exp: "If final price determined by book building is higher, anchor investors must pay the differential."
  },
  {
    id: 2101,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "A Follow-on Public Offer (FPO) is made by:",
    opts: [
      "An already listed company",
      "Only banks",
      "Only government",
      "An unlisted company"
    ],
    ans: 0, // A
    exp: "An FPO is made by a company that is already listed on a stock exchange."
  },
  {
    id: 2102,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Under the Companies Act 2013, private placement can be made to not more than:",
    opts: [
      "20 persons",
      "50 persons",
      "100 persons",
      "200 persons"
    ],
    ans: 1, // B
    exp: "The chapter text highlights the general limit of fifty (50) persons per statutory offer."
  },
  {
    id: 2103,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "A Qualified Institutional Placement (QIP) is made by a ______ to ______.",
    opts: [
      "Government; banks",
      "Listed company; Qualified Institutional Buyers",
      "Unlisted company; retail investors",
      "Mutual fund; retail"
    ],
    ans: 1, // B
    exp: "QIP is an allotment of securities by an existing listed company exclusively to QIBs."
  },
  {
    id: 2104,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "A preferential issue is an issue of specified securities by a listed issuer to:",
    opts: [
      "Employees only",
      "Any select person or group on a private placement basis",
      "Existing shareholders only",
      "Public at large"
    ],
    ans: 1, // B
    exp: "Preferential allotment is an issue to selected strategic individuals or entities on a private placement basis."
  },
  {
    id: 2105,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "In a rights issue, an investor has how many options?",
    opts: [
      "Two",
      "Four",
      "Three",
      "One"
    ],
    ans: 2, // C
    exp: "Three options: (1) Subscribe to rights, (2) Renounce/sell rights entitlements, or (3) Let rights lapse."
  },
  {
    id: 2106,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Bonus shares are issued:",
    opts: [
      "Only to employees",
      "At a discount to market price",
      "Only to FPIs",
      "Without any consideration, out of retained earnings"
    ],
    ans: 3, // D
    exp: "Bonus shares are capitalised from free reserves and distributed free of cost to existing shareholders."
  },
  {
    id: 2107,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Capital raised from investors outside the country is called:",
    opts: [
      "Offshore offering",
      "Preferential issue",
      "Private placement",
      "Onshore offering"
    ],
    ans: 0, // A
    exp: "Fund-raising from international investors outside the domestic country is called an offshore offering."
  },
  {
    id: 2108,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Sweat equity shares are issued under which section of the Companies Act, 2013?",
    opts: [
      "Section 54",
      "Section 62",
      "Section 2(h)",
      "Section 31"
    ],
    ans: 0, // A
    exp: "Section 54 of the Companies Act 2013 governs issuance of sweat equity shares."
  },
  {
    id: 2109,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Sweat equity helps to reduce:",
    opts: [
      "Liquidity",
      "Agency risk",
      "Currency risk",
      "Credit risk"
    ],
    ans: 1, // B
    exp: "Aligning employee and promoter incentives with company value creation mitigates agency conflict/risk."
  },
  {
    id: 2110,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "ESOPs give employees:",
    opts: [
      "An option to buy shares at a pre-determined price after vesting period",
      "Debentures",
      "Free shares",
      "Fixed salary"
    ],
    ans: 0, // A
    exp: "ESOPs grant eligible employees the option to purchase shares at a fixed exercise price after completing the vesting period."
  },
  {
    id: 2111,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Employees gain from ESOPs only if:",
    opts: [
      "Company issues bonus",
      "Share price falls",
      "Share price rises above the exercise price",
      "Company liquidates"
    ],
    ans: 2, // C
    exp: "Employees earn a profit when the market price exceeds the exercise grant price."
  },
  {
    id: 2112,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "In OTC markets, trades are:",
    opts: [
      "Executed on stock exchange order book",
      "Guaranteed by clearing corporation",
      "Not allowed in India",
      "Directly negotiated between counterparties and settled directly"
    ],
    ans: 3, // D
    exp: "Over-the-counter trades are bilateral, privately negotiated transactions between two counterparties."
  },
  {
    id: 2113,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "For trades on exchanges, settlement guarantee is provided by:",
    opts: [
      "Merchant banker",
      "Broker",
      "Clearing corporation",
      "Depository participant"
    ],
    ans: 2, // C
    exp: "The Clearing Corporation acts as central counterparty and legally guarantees financial settlement."
  },
  {
    id: 2114,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "'Novation' by the clearing corporation means:",
    opts: [
      "It sets prices",
      "It acts as buyer to every seller and seller to every buyer",
      "It lends to the broker",
      "It issues shares"
    ],
    ans: 1, // B
    exp: "Legal novation interposes the clearing house as the buyer to every seller and seller to every buyer."
  },
  {
    id: 2115,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Clearing is:",
    opts: [
      "Ascertaining net obligations of buyers and sellers",
      "Listing of shares",
      "Opening demat accounts",
      "Delivery of shares and money"
    ],
    ans: 0, // A
    exp: "Clearing determines the net funds and securities obligations across trading members."
  },
  {
    id: 2116,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Which is NOT a margin collected by clearing corporation?",
    opts: [
      "Initial margin",
      "Mark-to-Market margin",
      "Peak margin",
      "Brokerage margin"
    ],
    ans: 3, // D
    exp: "Clearing corporations levy Initial, Peak, and Mark-to-Market margins. Brokerage is a broker fee."
  },
  {
    id: 2117,
    sec: "Section 2.3 - Structure of Securities Market",
    q: "Initial margin is arrived at based on which philosophy?",
    opts: [
      "Value at Risk",
      "Net worth",
      "Time value",
      "Book value"
    ],
    ans: 0, // A
    exp: "Initial margin is calculated using Value at Risk (VaR) to cover worst-case 1-day market movements."
  },

  // Section 2.4 – Market Participants (Q118 - Q149)
  {
    id: 2118,
    sec: "Section 2.4 - Market Participants",
    q: "Depositories in India registered with SEBI are:",
    opts: [
      "RBI and SEBI",
      "MCX and NCDEX",
      "NSE and BSE",
      "CDSL and NSDL"
    ],
    ans: 3, // D
    exp: "NSDL (National Securities Depository Ltd) and CDSL (Central Depository Services Ltd)."
  },
  {
    id: 2119,
    sec: "Section 2.4 - Market Participants",
    q: "A Depository Participant (DP) is:",
    opts: [
      "A clearing bank",
      "A rating agency",
      "An agent of the depository that interfaces with investors",
      "An agent of SEBI"
    ],
    ans: 2, // C
    exp: "A DP is an intermediary appointed by the depository to open and maintain investor-level demat accounts."
  },
  {
    id: 2120,
    sec: "Section 2.4 - Market Participants",
    q: "Company-level accounts of securities issued are held by:",
    opts: [
      "DP",
      "Depository",
      "Broker",
      "Clearing bank"
    ],
    ans: 1, // B
    exp: "The depository maintains the corporate-level register of dematerialised securities."
  },
  {
    id: 2121,
    sec: "Section 2.4 - Market Participants",
    q: "DPs are appointed by:",
    opts: [
      "Depository with SEBI approval",
      "RBI",
      "Companies",
      "Stock exchange"
    ],
    ans: 0, // A
    exp: "Depository appoints DPs subject to SEBI registration and prudential criteria."
  },
  {
    id: 2122,
    sec: "Section 2.4 - Market Participants",
    q: "Trading members can be:",
    opts: [
      "Only corporates",
      "Sole proprietors, partnership firms or corporate bodies",
      "Only individuals",
      "Only banks"
    ],
    ans: 1, // B
    exp: "Stockbrokers / trading members can be sole proprietors, partnerships, LLPs, or corporate entities."
  },
  {
    id: 2123,
    sec: "Section 2.4 - Market Participants",
    q: "Sub-brokers as an intermediary ceased to exist from:",
    opts: [
      "1 April 2019",
      "21 June 2018",
      "1 January 2020",
      "31 March 2017"
    ],
    ans: 0, // A
    exp: "SEBI discontinued the category of sub-brokers with effect from 1 April 2019."
  },
  {
    id: 2124,
    sec: "Section 2.4 - Market Participants",
    q: "An Authorised Person is appointed by:",
    opts: [
      "SEBI directly",
      "Depository",
      "A stockbroker/trading member",
      "RBI"
    ],
    ans: 2, // C
    exp: "An Authorised Person (AP) is appointed by a trading member with stock exchange approval."
  },
  {
    id: 2125,
    sec: "Section 2.4 - Market Participants",
    q: "A custodian primarily serves:",
    opts: [
      "Exchanges only",
      "Retail investors only",
      "Companies only",
      "Large institutional clients like banks, insurers, FPIs"
    ],
    ans: 3, // D
    exp: "Custodians provide safekeeping, settlements, and corporate action monitoring for institutional investors."
  },
  {
    id: 2126,
    sec: "Section 2.4 - Market Participants",
    q: "The clearing bank acts as an intermediary between:",
    opts: [
      "Investor and company",
      "Broker and investor",
      "Clearing members and clearing corporation",
      "SEBI and exchange"
    ],
    ans: 2, // C
    exp: "Clearing banks handle funds pay-in and pay-out between clearing members and the clearing house."
  },
  {
    id: 2127,
    sec: "Section 2.4 - Market Participants",
    q: "Merchant bankers in an issue act as:",
    opts: [
      "Underwriters only",
      "Issue managers/lead managers and single point contact for issuer",
      "Depositories",
      "Clearing banks"
    ],
    ans: 1, // B
    exp: "Merchant bankers manage issues, structure offers, ensure due diligence, and coordinate marketing."
  },
  {
    id: 2128,
    sec: "Section 2.4 - Market Participants",
    q: "Underwriters undertake to:",
    opts: [
      "Set the price",
      "Maintain demat accounts",
      "Audit the issuer",
      "Subscribe to unsubscribed portion of a public offer"
    ],
    ans: 3, // D
    exp: "Underwriters contractually commit to subscribe to any shares left unsubscribed by the public."
  },
  {
    id: 2129,
    sec: "Section 2.4 - Market Participants",
    q: "Hard underwriting is when commitment is given:",
    opts: [
      "At the initial stages of the IPO",
      "Never",
      "After listing",
      "After pricing is determined"
    ],
    ans: 0, // A
    exp: "Hard underwriting guarantees subscription at the initial stage itself, taking full placement risk."
  },
  {
    id: 2130,
    sec: "Section 2.4 - Market Participants",
    q: "A Farmer Producer Organization (FPO) is:",
    opts: [
      "A follow-on offer",
      "A foreign portfolio org",
      "A collective of farmers improving bargaining power and market access",
      "A foreign private offering"
    ],
    ans: 2, // C
    exp: "Farmer Producer Organizations aggregate farmers to enhance bargaining strength and commodity market access."
  },
  {
    id: 2131,
    sec: "Section 2.4 - Market Participants",
    q: "Warehouse Service Providers issue:",
    opts: [
      "Debentures",
      "Warrants",
      "ADRs",
      "Negotiable Warehouse Receipts (NWRs)"
    ],
    ans: 3, // D
    exp: "Warehouse Service Providers (WSPs) issue electronic Negotiable Warehouse Receipts (e-NWRs)."
  },
  {
    id: 2132,
    sec: "Section 2.4 - Market Participants",
    q: "Quality Assayers are required for issuing NWRs and are accredited by:",
    opts: [
      "WDRA",
      "NSE",
      "RBI",
      "IRDAI"
    ],
    ans: 0, // A
    exp: "Warehousing Development and Regulatory Authority (WDRA) regulates warehousing and assayers."
  },
  {
    id: 2133,
    sec: "Section 2.4 - Market Participants",
    q: "An FPI must register with:",
    opts: [
      "RBI only",
      "SEBI",
      "IRDAI",
      "MCA"
    ],
    ans: 1, // B
    exp: "Foreign Portfolio Investors must obtain registration from SEBI through designated DDPs."
  },
  {
    id: 2134,
    sec: "Section 2.4 - Market Participants",
    q: "Participatory Notes (P-Notes) are issued by:",
    opts: [
      "SEBI-registered FPIs to overseas investors",
      "Companies to employees",
      "Banks to depositors",
      "RBI to NRIs"
    ],
    ans: 0, // A
    exp: "Offshore Derivative Instruments (ODIs / P-Notes) are issued by registered FPIs to overseas investors wanting exposure to Indian securities."
  },
  {
    id: 2135,
    sec: "Section 2.4 - Market Participants",
    q: "Which investor typically has a designated person responsible for investment decisions and is a big investor in G-Secs?",
    opts: [
      "FPOs",
      "Authorised Persons",
      "Retail investors",
      "Insurance companies"
    ],
    ans: 3, // D
    exp: "Insurance companies manage large institutional pools mandated to invest heavily in G-Secs."
  },
  {
    id: 2136,
    sec: "Section 2.4 - Market Participants",
    q: "Venture capital funds invest in:",
    opts: [
      "Gold",
      "Government securities",
      "Early-stage enterprises with long-term growth potential",
      "Only listed blue chips"
    ],
    ans: 2, // C
    exp: "Venture Capital Funds (VCFs) provide seed and early-stage capital to high-growth startups."
  },
  {
    id: 2137,
    sec: "Section 2.4 - Market Participants",
    q: "In a private equity fund, the money is contributed by ______ and managed by ______.",
    opts: [
      "General partner; limited partners",
      "Limited partners; general partner(s)",
      "Banks; SEBI",
      "Government; investors"
    ],
    ans: 1, // B
    exp: "Limited Partners (LPs) provide investment capital; the General Partner (GP) manages portfolio investments."
  },
  {
    id: 2138,
    sec: "Section 2.4 - Market Participants",
    q: "The term 'hedge fund' is a misnomer because:",
    opts: [
      "They are regulated by RBI",
      "They may not necessarily be hedged",
      "They invest only in hedges",
      "They only hedge"
    ],
    ans: 1, // B
    exp: "Hedge funds pursue aggressive risk-adjusted alpha strategies that often take leveraged speculative directional bets."
  },
  {
    id: 2139,
    sec: "Section 2.4 - Market Participants",
    q: "AIFs are defined in which regulation?",
    opts: [
      "Section 2(h) SCRA",
      "SEBI (MF) Regulations 1996",
      "Section 54 Companies Act",
      "Regulation 2(1)(b), SEBI (AIF) Regulations 2012"
    ],
    ans: 3, // D
    exp: "Alternative Investment Funds are defined under Regulation 2(1)(b) of SEBI (AIF) Regulations 2012."
  },
  {
    id: 2140,
    sec: "Section 2.4 - Market Participants",
    q: "Hedge funds and PIPE funds are registered as:",
    opts: [
      "Not AIFs",
      "Category II AIF",
      "Category III AIF",
      "Category I AIF"
    ],
    ans: 2, // C
    exp: "Category III AIFs employ diverse or complex trading strategies and may use leverage (hedge funds, PIPE funds)."
  },
  {
    id: 2141,
    sec: "Section 2.4 - Market Participants",
    q: "Venture capital funds including angel funds fall in:",
    opts: [
      "Category I AIF",
      "Category III AIF",
      "Category II AIF",
      "None"
    ],
    ans: 0, // A
    exp: "Category I AIFs invest in start-ups, early stage ventures, social ventures, and SMEs."
  },
  {
    id: 2142,
    sec: "Section 2.4 - Market Participants",
    q: "Real estate funds and private equity funds are generally registered as:",
    opts: [
      "Category II AIF",
      "Category III AIF",
      "Hedge funds",
      "Category I AIF"
    ],
    ans: 0, // A
    exp: "Category II AIFs do not undertake leverage other than day-to-day operational requirements (PE funds, debt funds)."
  },
  {
    id: 2143,
    sec: "Section 2.4 - Market Participants",
    q: "Employer's contribution to EPF is:",
    opts: [
      "12% of basic salary",
      "8% of basic",
      "15% of gross",
      "10% of CTC"
    ],
    ans: 0, // A
    exp: "The employer contributes 12% of basic salary (matched by an equal 12% deduction from employee)."
  },
  {
    id: 2144,
    sec: "Section 2.4 - Market Participants",
    q: "EPF is administered by:",
    opts: [
      "IRDAI",
      "PFRDA",
      "EPFO",
      "SEBI"
    ],
    ans: 2, // C
    exp: "Employees' Provident Fund Organisation (EPFO)."
  },
  {
    id: 2145,
    sec: "Section 2.4 - Market Participants",
    q: "In NPS, accumulated funds on maturity can be used to buy:",
    opts: [
      "Gold only",
      "Annuity products",
      "Futures",
      "Shares only"
    ],
    ans: 1, // B
    exp: "Upon superannuation under NPS, a minimum portion must be used to purchase a pension annuity product."
  },
  {
    id: 2146,
    sec: "Section 2.4 - Market Participants",
    q: "A multi-family office handles finances of:",
    opts: [
      "Only trusts",
      "Only companies",
      "One family",
      "Multiple families"
    ],
    ans: 3, // D
    exp: "Multi-family offices manage the wealth, tax, and estate planning of multiple affluent families."
  },
  {
    id: 2147,
    sec: "Section 2.4 - Market Participants",
    q: "Smaller businesses park surplus funds mostly through:",
    opts: [
      "Warrants",
      "IPOs",
      "FCCBs",
      "Mutual funds"
    ],
    ans: 3, // D
    exp: "Corporate treasuries and small businesses park operational liquidity in liquid/overnight mutual fund schemes."
  },
  {
    id: 2148,
    sec: "Section 2.4 - Market Participants",
    q: "Which investors has RBI permitted to make direct investments in Indian companies under the Automatic Route?",
    opts: [
      "Only DIIs",
      "NRIs, PIOs and QFIs",
      "Only HNIs",
      "Only FPIs"
    ],
    ans: 1, // B
    exp: "NRIs, PIOs, and QFIs have general permission under FDI automatic routes subject to sectoral caps."
  },
  {
    id: 2149,
    sec: "Section 2.4 - Market Participants",
    q: "Proxy advisors mainly:",
    opts: [
      "Clear trades",
      "Hold securities",
      "Give voting recommendations to institutional investors",
      "Underwrite IPOs"
    ],
    ans: 2, // C
    exp: "Proxy advisors analyse shareholder resolutions and provide independent voting guidance to institutional investors."
  },

  // Section 2.5 – Kinds of Transactions (Q150 - Q174)
  {
    id: 2150,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "A cash trade is settled:",
    opts: [
      "On the same trading day (T+0)",
      "T+1",
      "T+2",
      "T+5"
    ],
    ans: 0, // A
    exp: "In market terminology, a 'cash' transaction is settled on the same trade date (T+0)."
  },
  {
    id: 2151,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "A 'Tom' trade settles on:",
    opts: [
      "T+0",
      "T+1",
      "T+2",
      "T+3"
    ],
    ans: 1, // B
    exp: "'Tom' (Tomorrow) trades settle on the next business day (T+1)."
  },
  {
    id: 2152,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "Spot trades normally settle on:",
    opts: [
      "Two business days after trade date",
      "Same day",
      "Ten days",
      "Next day"
    ],
    ans: 0, // A
    exp: "Historically and conventionally, spot settlements take place on T+2 (second business day following trade)."
  },
  {
    id: 2153,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "A forward contract is:",
    opts: [
      "Guaranteed by clearing corporation",
      "Standardised and exchange-traded",
      "Customised OTC contract with counterparty risk",
      "A bond"
    ],
    ans: 2, // C
    exp: "Forward contracts are privately negotiated over-the-counter contracts carrying bilateral default/counterparty risk."
  },
  {
    id: 2154,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "A farmer agrees to sell wheat to a miller in 6 months at a price agreed today. This is a:",
    opts: [
      "Swap",
      "Futures contract",
      "Call option",
      "OTC forward contract"
    ],
    ans: 3, // D
    exp: "A private bilateral agreement between two commercial parties for future delivery is an OTC forward contract."
  },
  {
    id: 2155,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "Futures contracts differ from forwards because futures are:",
    opts: [
      "OTC",
      "Standardised and exchange-traded with clearing guarantee",
      "Without margins",
      "Customised"
    ],
    ans: 1, // B
    exp: "Futures are exchange-traded, highly standardised contracts with novation and daily MTM clearing guarantees."
  },
  {
    id: 2156,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "MCX wheat futures trading unit per the chapter is:",
    opts: [
      "5 MT",
      "10 MT",
      "50 MT",
      "500 MT"
    ],
    ans: 1, // B
    exp: "The chapter references the MCX wheat futures contract trading lot size as 10 Metric Tonnes (MT)."
  },
  {
    id: 2157,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "MCX wheat futures delivery date is:",
    opts: [
      "21st of the month",
      "1st of the month",
      "20th of the month",
      "Last day"
    ],
    ans: 2, // C
    exp: "Per contract specifications cited in the text, contract settlement/delivery occurs on the 20th of the delivery month."
  },
  {
    id: 2158,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "An option buyer pays a ______ to the writer.",
    opts: [
      "Premium",
      "Coupon",
      "Margin",
      "Dividend"
    ],
    ans: 0, // A
    exp: "The buyer purchases the right by paying an upfront, non-refundable option premium to the writer (seller)."
  },
  {
    id: 2159,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "A 'Put' option gives the buyer the right to:",
    opts: [
      "Buy",
      "Sell",
      "Redeem",
      "Hold"
    ],
    ans: 1, // B
    exp: "A Call option gives the right to buy; a Put option gives the right to sell."
  },
  {
    id: 2160,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "Arvind buys a Nifty 50 call (strike 11000) paying premium Rs 100. On expiry Nifty is 11200. His net gain is:",
    opts: [
      "Rs 100",
      "Rs 200",
      "Rs 300",
      "Rs 0"
    ],
    ans: 0, // A
    exp: "Gross payoff = 11,200 - 11,000 = Rs 200. Net gain = Rs 200 - Rs 100 premium = Rs 100."
  },
  {
    id: 2161,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "In the above case, Salim (the writer) has a net:",
    opts: [
      "Gain of Rs 100",
      "No gain no loss",
      "Gain of Rs 200",
      "Loss of Rs 100"
    ],
    ans: 3, // D
    exp: "Options are zero-sum: Arvind's +Rs 100 net gain equals Salim's -Rs 100 net loss."
  },
  {
    id: 2162,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "If Nifty is 10800 at expiry (strike 11000), the call option is:",
    opts: [
      "In the money",
      "Exercised",
      "Out of the money and expires worthless",
      "Converted to futures"
    ],
    ans: 2, // C
    exp: "Since market price (10,800) < strike price (11,000), the call option is Out-of-the-Money and expires worthless."
  },
  {
    id: 2163,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "The maximum loss for a call option buyer is:",
    opts: [
      "The premium paid",
      "Unlimited",
      "Strike price",
      "Zero"
    ],
    ans: 0, // A
    exp: "An option buyer cannot lose more than the initial premium paid to acquire the contract."
  },
  {
    id: 2164,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "The break-even point at expiry for the call buyer (strike 11000, premium Rs 100) is:",
    opts: [
      "10,900",
      "11,000",
      "11,100",
      "11,200"
    ],
    ans: 2, // C
    exp: "Break-even = Strike Price + Premium Paid = 11,000 + 100 = 11,100."
  },
  {
    id: 2165,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "A swap is:",
    opts: [
      "A warrant",
      "An equity share",
      "A bond",
      "Contract to exchange cash flows per a pre-arranged formula"
    ],
    ans: 3, // D
    exp: "A swap is an agreement between two parties to exchange specified future cash-flow streams."
  },
  {
    id: 2166,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "In the interest-rate swap example, the borrower pays ______ and receives ______ from the swap dealer.",
    opts: [
      "Floating; floating",
      "Fixed; T-bill plus spread",
      "Fixed; fixed",
      "Floating; fixed"
    ],
    ans: 1, // B
    exp: "The borrower transforms variable liabilities by paying a fixed rate and receiving the floating rate (T-bill plus spread)."
  },
  {
    id: 2167,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "In a swap, the principal amount on which interest is computed is called:",
    opts: [
      "Notional",
      "Strike",
      "Premium",
      "Margin"
    ],
    ans: 0, // A
    exp: "The notional principal is never physically exchanged; it only serves as the base for calculating periodic interest differentials."
  },
  {
    id: 2168,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "Trading, as distinguished from speculating, is usually based on:",
    opts: [
      "Arbitrage",
      "Hedging",
      "Technical analysis and historical price patterns",
      "Insider information"
    ],
    ans: 2, // C
    exp: "Trading strategies typically rely on short-term technical indicators, support/resistance, and chart patterns."
  },
  {
    id: 2169,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "Which is true of both traders and speculators?",
    opts: [
      "They never use borrowed funds",
      "They only hold long term",
      "They avoid risk",
      "They increase liquidity and often use leverage"
    ],
    ans: 3, // D
    exp: "Both active traders and speculators deploy margin leverage and enhance market depth/liquidity."
  },
  {
    id: 2170,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "The primary motivation of a hedger is:",
    opts: [
      "Insider trading",
      "Avoiding losses",
      "Arbitrage",
      "Profit maximisation"
    ],
    ans: 1, // B
    exp: "Hedgers enter derivative contracts to insulate existing cash assets against adverse price movements."
  },
  {
    id: 2171,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "Arbitrage is:",
    opts: [
      "Pledging of shares",
      "Short selling only",
      "Simultaneous purchase and sale of an asset in two markets to profit from price differences",
      "Long-term investing"
    ],
    ans: 2, // C
    exp: "Arbitrage exploits temporary price discrepancies by buying in the cheaper market and selling in the dearer market simultaneously."
  },
  {
    id: 2172,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "The existence of an arbitrage opportunity tends to:",
    opts: [
      "Widen price gap",
      "Raise taxes",
      "Stop trading",
      "Close the price differential"
    ],
    ans: 3, // D
    exp: "Arbitrage buying lifts lower prices while selling depresses higher prices, eliminating the spread and restoring equilibrium."
  },
  {
    id: 2173,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "In pledging of shares, the investor is called the:",
    opts: [
      "Pledgor",
      "Hedger",
      "Pledgee",
      "Writer"
    ],
    ans: 0, // A
    exp: "The borrower pledging the securities is the Pledgor; the lending entity is the Pledgee."
  },
  {
    id: 2174,
    sec: "Section 2.5 - Kinds of Transactions",
    q: "When demat shares are pledged, they:",
    opts: [
      "Are cancelled",
      "Remain in pledgor's demat account but are blocked",
      "Are transferred to pledgee's account",
      "Are sold immediately"
    ],
    ans: 1, // B
    exp: "Under current SEBI margin pledge mechanisms, shares stay in the client's own demat account with a lien/block marked."
  },

  // Section 2.6 – Demat & Remat (Q175 - Q179)
  {
    id: 2175,
    sec: "Section 2.6 - Demat & Remat",
    q: "Dematerialization is the process of:",
    opts: [
      "Cancelling shares",
      "Merging companies",
      "Converting electronic into physical",
      "Converting physical securities into electronic book-entry form"
    ],
    ans: 3, // D
    exp: "Dematerialization converts physical paper share certificates into electronic book-entry balances."
  },
  {
    id: 2176,
    sec: "Section 2.6 - Demat & Remat",
    q: "Rematerialization is:",
    opts: [
      "Listing",
      "Reverse of dematerialization – converting electronic holding into physical form",
      "Conversion of debt into equity",
      "Share split"
    ],
    ans: 1, // B
    exp: "Rematerialization is the reverse process of converting electronic holdings back into physical certificates."
  },
  {
    id: 2177,
    sec: "Section 2.6 - Demat & Remat",
    q: "In demat form, securities:",
    opts: [
      "Are always bearer",
      "Carry distinctive certificate numbers",
      "Do not have distinctive, folio or certificate numbers",
      "Cannot be pledged"
    ],
    ans: 2, // C
    exp: "Demat securities are fungible and have no distinctive certificate, folio, or individual serial numbers."
  },
  {
    id: 2178,
    sec: "Section 2.6 - Demat & Remat",
    q: "A company making a public issue must enter into an agreement with ______ to dematerialize its shares.",
    opts: [
      "All the depositories",
      "Only the exchange",
      "Only NSDL",
      "RBI"
    ],
    ans: 0, // A
    exp: "Issuers must establish tripartite connectivity with all registered depositories (both NSDL and CDSL)."
  },
  {
    id: 2179,
    sec: "Section 2.6 - Demat & Remat",
    q: "Who gives investors the option of holding shares in demat form in a public issue?",
    opts: [
      "The broker",
      "Merchant banker",
      "SEBI regulations through agreement with depositories",
      "Clearing bank"
    ],
    ans: 2, // C
    exp: "SEBI regulations mandate offering shares in dematerialised form through agreement with depositories."
  },

  // Mixed Challenge – Match, Assertion–Reason, Scenarios (Q180 - Q191)
  {
    id: 2180,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "Match: (1) Sensex (2) Nifty 50 (3) SX40 with (a) MSEI (b) BSE (c) NSE",
    opts: [
      "1-b, 2-c, 3-a",
      "1-c, 2-b, 3-a",
      "1-a, 2-b, 3-c",
      "1-b, 2-a, 3-c"
    ],
    ans: 0, // A
    exp: "Sensex belongs to BSE (1-b), Nifty 50 belongs to NSE (2-c), SX40 belongs to MSEI (3-a)."
  },
  {
    id: 2181,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "Match: (1) ADR (2) IDR (3) HKDR with (a) Hong Kong (b) USA (c) India",
    opts: [
      "1-b, 2-c, 3-a",
      "1-c, 2-b, 3-a",
      "1-a, 2-c, 3-b",
      "1-b, 2-a, 3-c"
    ],
    ans: 0, // A
    exp: "ADR is in USA (1-b), IDR is in India (2-c), HKDR is in Hong Kong (3-a)."
  },
  {
    id: 2182,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "Assertion (A): Euro bonds are always issued in Europe. Reason (R): 'Euro' denotes the currency of the issue.",
    opts: [
      "Both true, R explains A",
      "A true, R false",
      "Both false",
      "A false, R true"
    ],
    ans: 2, // C
    exp: "Both statements are false: Euro bonds need not be issued in Europe, nor are they denominated in Euros."
  },
  {
    id: 2183,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "Assertion (A): Hedgers aim at no gain/no loss. Reason (R): Gain on existing asset is offset by loss on hedge position.",
    opts: [
      "Both true, R explains A",
      "Both true, R does not explain A",
      "A true, R false",
      "A false, R true"
    ],
    ans: 0, // A
    exp: "Both are true and R explains A: perfect hedges eliminate price volatility by offsetting gains/losses."
  },
  {
    id: 2184,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "Assertion (A): An OFS does not increase share capital. Reason (R): Existing shareholders sell already-allotted shares.",
    opts: [
      "Both true, R explains A",
      "Both true, R does not explain A",
      "A true, R false",
      "Both false"
    ],
    ans: 0, // A
    exp: "Both are true and R explains A: in an Offer For Sale, existing shareholders sell their shares; no new equity is created."
  },
  {
    id: 2185,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "An Indian firm issues a USD bond in New York. If USD appreciates against INR, the firm will:",
    opts: [
      "Need more rupees to repay",
      "Be unaffected",
      "Receive gains",
      "Need fewer rupees to repay"
    ],
    ans: 0, // A
    exp: "When USD appreciates, the Indian issuer must spend more INR to acquire the dollars needed for debt service."
  },
  {
    id: 2186,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "An institution holds securities for its clients, collects benefits accruing and informs clients of corporate actions. It is a:",
    opts: [
      "Depository participant",
      "Custodian",
      "Trading member",
      "Merchant banker"
    ],
    ans: 1, // B
    exp: "These safekeeping and corporate entitlement management duties define a professional Custodian."
  },
  {
    id: 2187,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "A company wants to raise equity by selling shares to 40 identified investors on private basis. This is a:",
    opts: [
      "Public issue",
      "Bonus issue",
      "Rights issue",
      "Private placement"
    ],
    ans: 3, // D
    exp: "Allotment to selected investors (under the statutory threshold) without a public prospectus is a Private Placement."
  },
  {
    id: 2188,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "Which of the following instruments gives investors both coupon income initially and potential equity gains later?",
    opts: [
      "Convertible debenture",
      "Warrant only",
      "Plain NCD",
      "Treasury bill"
    ],
    ans: 0, // A
    exp: "Convertible debentures pay regular coupon interest and offer future capital growth upon equity conversion."
  },
  {
    id: 2189,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "Which of the following is a sample of 'Category III AIF' strategy?",
    opts: [
      "Social ventures",
      "Funding start-ups only",
      "No borrowing at all",
      "Use of leverage and derivatives"
    ],
    ans: 3, // D
    exp: "Category III AIFs (such as hedge funds) actively deploy leverage, short selling, and complex derivative strategies."
  },
  {
    id: 2190,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "An investor delivers shares to a foreign depository and DRs are issued. These DRs are:",
    opts: [
      "Euro bonds",
      "Unsponsored",
      "Warrants",
      "Sponsored"
    ],
    ans: 1, // B
    exp: "DRs created at the behest of existing investors/brokerages without company participation are unsponsored DRs."
  },
  {
    id: 2191,
    sec: "Mixed Challenge - Match, Assertion-Reason, Scenarios",
    q: "For an exchange-traded transaction, who gives the obligation report to brokers and custodians?",
    opts: [
      "Depository",
      "RBI",
      "Clearing house",
      "SEBI"
    ],
    ans: 2, // C
    exp: "The Clearing House / Clearing Corporation generates and disseminates net obligation statements."
  }
];
