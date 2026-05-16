const main = document.querySelector("main");

/* ---------- MAIN SECTION ---------- */
const section0 = document.createElement("div");
section0.id = "section0";
main.appendChild(section0);

Object.assign(section0.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4rem",
    marginTop: "1rem",
    paddingBottom: '5rem'
});

/* ---------- TITLE ---------- */
const title = document.createElement("h1");
title.textContent = "Block Level Important Links";
section0.appendChild(title);

Object.assign(title.style, {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "rgb(22, 77, 105)",
    fontSize: "2.5rem",
});

/* ---------- BOX CONTAINER ---------- */
const boxContainer = document.createElement("div");
section0.appendChild(boxContainer);

Object.assign(boxContainer.style, {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
});

/* ---------- COMMON BOX STYLE ---------- */
function boxStyle(box) {
    Object.assign(box.style, {
        backgroundColor: "rgba(111, 167, 195, 1)",
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        cursor: "pointer",
        minWidth: "220px",
        textAlign: "center",
        transition: "transform 0.2s ease",
    });

    box.addEventListener("mouseover", () => {
        box.style.transform = "translateY(-4px)";
    });

    box.addEventListener("mouseout", () => {
        box.style.transform = "translateY(0)";
    });
}

/* ---------- LINK STYLE FUNCTION ---------- */
function styleLinks(container) {
    container.querySelectorAll("a").forEach(link => {
        Object.assign(link.style, {
            color: "#000",
            textDecoration: "none",
            padding: "0.3rem 0.5rem",
            fontSize: "0.95rem",
            borderRadius: "4px",
        });

        link.addEventListener("mouseover", () => {
            link.style.backgroundColor = "yellow";
        });

        link.addEventListener("mouseout", () => {
            link.style.backgroundColor = "transparent";
        });
    });
}

/* ---------- SEC CARD STYLE (YOUR CSS ADDED) ---------- */
function secCardStyle(card) {
    Object.assign(card.style, {
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
        marginTop: "1rem",
    });
}

/* ---------- SECTION 1 ---------- */
const section1 = document.createElement("div");
section1.textContent = "NREGA Logins";
boxStyle(section1);
boxContainer.appendChild(section1);

let open1 = false;

section1.addEventListener("click", () => {
    if (!open1) {
        const sec1 = document.createElement("div");
        sec1.className = "sec";
        sec1.innerHTML = `
            <a href="https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx" target="_blank">Official Site (MNREGA)</a>
            <p style="color:red;font-weight:bold">Admin Logins</p>
            <a href="https://nregade4.dord.gov.in/netnrega/Login.aspx?&level=HomePO&state_code=31" target="_blank">Program Officer</a>
            <a href="https://nregade4.dord.gov.in/netnrega/login.aspx?&level=HomePODBA&state_code=31" target="_blank">Block Administration</a>
            <a href="https://nregade4.dord.gov.in/Netnrega/Login.aspx?&level=HomeBP&state_code=31" target="_blank">Kshetra Panchayat</a>
            <a href="https://nregade4.dord.gov.in/Netnrega/Login.aspx?&level=HomeGP&state_code=31" target="_blank">Gram Panchayat</a>
            <a href="https://nregade4.dord.gov.in/netnrega/Login.aspx?district_name=HAMIRPUR&state_code=31&district_code=3141&fin_year=2026-2027&level=HomeDPC&Digest=Dc54/ofrzenI06d3VptO/w" target="_blank">DPC Login (District)</a>
            <p style="color:red;font-weight:bold">FTO Signatory</p>
            <a href="https://mnregaweb5.nic.in/Netnrega/FTO/Login.aspx?&level=HomeAC&state_code=31" target="_blank">1st Signatory (Accountant)</a>
            <a href="https://mnregaweb5.nic.in/Netnrega/FTO/Login.aspx?&level=HomeWL&state_code=31" target="_blank">2nd Signatory (BDO)</a>
            <p style="color:red;font-weight:bold">E-MB</p>
            <a href="https://nregade4.dord.gov.in/netnrega/Login.aspx?&level=HomeGPMB&state_code=31" target="_blank">eMB Fill (TA/JE)</a>
            <a href="https://nregade4.dord.gov.in/netnrega/Login.aspx?&level=HomePOMB&state_code=31" target="_blank">eMB Approval (JE/AE)</a>
            <p style="color:red;font-weight:bold">Bhuvan Login</p>
            <a href="https://bhuvan-app2.nrsc.gov.in/mgnrega/mgnrega_phase2.php" target="_blank"> Block Login/GP Login</a>
            <a href="https://bhuvan-cas1.nrsc.gov.in/cas/login?service=https%3A%2F%2Fbhuvan-app2.nrsc.gov.in%2Fplanner_v3%2Fnrega_mse%2Fmse_verify.php" target="_blank">GP Approval</a>
        `;
        section1.appendChild(sec1);

        secCardStyle(sec1);
        styleLinks(sec1);
        open1 = true;
    } else {
        section1.querySelector(".sec").remove();
        open1 = false;
    }
});

/* ---------- SECTION 2 ---------- */
const section2 = document.createElement("div");
section2.textContent = "Awas Plus Login";
boxStyle(section2);
boxContainer.appendChild(section2);

let open2 = false;

section2.addEventListener("click", () => {
    if (!open2) {
        const sec2 = document.createElement("div");
        sec2.className = "sec";
        sec2.innerHTML = `
            <a href="https://pmayg.dord.gov.in/netiayHome/home.aspx" target="_blank">Awas Official</a>
            <a href="https://pmayg.dord.gov.in/netiay/masterlogin.aspx" target="_blank">MIS Data Entry</a>
            <a href="https://dashboard.pmayg.dord.gov.in/netiay/masterlogin.aspx" target="_blank">Reports</a>
            <a href="https://rhfms.pmayg.dord.gov.in/netiay/masterlogin.aspx" target="_blank">1st/2nd FTO</a>
        `;
        section2.appendChild(sec2);

        secCardStyle(sec2);
        styleLinks(sec2);
        open2 = true;
    } else {
        section2.querySelector(".sec").remove();
        open2 = false;
    }
});

/* ---------- SECTION 3 ---------- */
const section3 = document.createElement("div");
section3.textContent = "Samaj Kalyan Login";
boxStyle(section3);
boxContainer.appendChild(section3);

let open3 = false;

section3.addEventListener("click", () => {
    if (!open3) {
        const sec3 = document.createElement("div");
        sec3.className = "sec";
        sec3.innerHTML = `
            <a href="https://mksy.up.gov.in/women_welfare/officer/officerlogin.php" target="_blank">Kanya Sumangla</a>
            <a href="https://sspybdosdm.upsdc.gov.in/" target="_blank">Pension</a>
            <a href="https://shadianudan.upsdc.gov.in/adminlogin.aspx" target="_blank">Shadi Anudan</a>
            <a href="https://cmsvy.upsdc.gov.in/" target="_blank">CM Samuhik Vivah</a>
        `;
        section3.appendChild(sec3);

        secCardStyle(sec3);
        styleLinks(sec3);
        open3 = true;
    } else {
        section3.querySelector(".sec").remove();
        open3 = false;
    }
});

//---------------------- END OF SCRIPT ---------- */

/* ---------- SECTION 4 ---------- */
const section4 = document.createElement("div");
section4.textContent = "Secure Portal";
boxStyle(section4);
boxContainer.appendChild(section4);
let open4 = false;
section4.addEventListener("click", () => {
    if (!open4) {
        const sec4 = document.createElement("div"); 
        sec4.className = "sec";
        sec4.innerHTML = `
            <a href="https://secure.dord.gov.in/securev2/" target="_blank">Secure UP Official</a>
        `;
        section4.appendChild(sec4); 
        secCardStyle(sec4);
        styleLinks(sec4);
        open4 = true;
    }
    else {
        section4.querySelector(".sec").remove(); 
        open4 = false;
    }
});
/* ---------- END OF SCRIPT ---------- */

/* ---------- SECTION 5 ---------- */
const section5 = document.createElement("div");
section5.textContent = "MNREGA Reports";
boxStyle(section5);
boxContainer.appendChild(section5);
let open5 = false;
section5.addEventListener("click", () => {
    if (!open5) {
        const sec5 = document.createElement("div"); 
        sec5.className = "sec";
        sec5.innerHTML = `
            <a href="https://nreganarep.nic.in/netnrega/MISreport4.aspx" target="_blank">National Report</a>
            <a href="https://mnregaweb2.dord.gov.in/netnrega/homestciti.aspx?state_code=31&state_name=UTTAR%20PRADESH&lflag=eng&labels=labels" target="_blank">State Report</a>
            <a href="https://mnregaweb4.dord.gov.in/netnrega/FTO/FTOReport.aspx?page=s&mode=B&flg=W&state_name=UTTAR%20PRADESH&state_code=31&fin_year=2026-2027&dstyp=B&source=national&Digest=0VOKNzYUpiAeELqHU+CbVQ" target="_blank">R8.1.1 - FTO 2026-2027</a>
            <a href="https://mnregaweb4.dord.gov.in/netnrega/writereaddata/citizen_out/fundstreportMtemp_Out31_2627_.html" target="_blank">R7.1.1- Financial Statement</a>
            <a href="https://mnregaweb4.dord.gov.in/netnrega/state_html/JC_Ver_report.aspx?page=S&lflag=eng&state_name=UTTAR%20PRADESH&state_code=31&fin_year=2025-2026&source=national&Digest=BYQz84B6FlB4PkhCTU0seQ" target="_blank">R26.4 Report on Verification of Job Cards</a>
            <a href="https://mnregaweb4.dord.gov.in/netnregarep/AdhaarStatus.aspx?page=S&short_name=&state_name=UTTAR%20PRADESH&state_code=31&fin_year=2026-2027&source=national&Digest=vQN2+yMtAgUa9dY2HoR/9g" target="_blank">R1.1.9- Aadhaar Authentication Status(KYC)</a>
            <a href="https://nreganarep.nic.in/netnrega/dpc_sms_new.aspx?lflag=eng&page=s&short_name=UP&state_name=UTTAR%20PRADESH&state_code=31&fin_year=2026-2027&source=national&Digest=awq9yFC9y44oQGD+LnyCQw" target="_blank">R6.9- MGNREGS daily status as <br> per e-muster issued</a>
            <a href="https://mnregaweb4.dord.gov.in/netnrega/Paymentstatus.aspx?page=S&lflag=eng&rb_mode=&state_name=UTTAR%20PRADESH&state_code=31&fin_year=2026-2027&source=national&Digest=o9nakMJcYLFRvLN2z+4WLA" target="_blank">R14.4 Status of Timely Payment Monitoring System</a>
            <a href="https://nreganarep.nic.in/netnrega/takenup_compwrk.aspx?page=s&lflag=eng&state_name=UTTAR%20PRADESH&state_code=31&fin_year=2026-2027&source=national&Digest=WGelDcsX1MD2kh1bHq7Z+Q" target="_blank">R6.2 Percentage of works completed since inception in MIS</a>
            <a href="https://nreganarep.nic.in/netnrega/dynamic_work_details.aspx?page=S&lflag=eng&state_name=UTTAR%20PRADESH&state_code=31&fin_year=2026-2027&source=national&Digest=hBKhW28yeNfGm7fhLU+8nw" target="_blank">R6.12 Dynamic Report for Monitoring and details of works</a>
            <a href="https://mnregaweb4.dord.gov.in/netnrega/Yuktdhara_rpt.aspx?page=S&short_name=UP&state_name=UTTAR%20PRADESH&state_code=31&fin_year=2026-2027&source=national&Digest=6RedZNz4fn/fIsX/ZUuC+A" target="_blank">R34.1 Yuktdhara Monitoring</a>
        `;
        section5.appendChild(sec5); 
        secCardStyle(sec5);
        styleLinks(sec5);
        open5 = true;
    }
    else {
        section5.querySelector(".sec").remove(); 
        open5 = false;
    }
});
/* ---------- END OF SCRIPT ---------- */
