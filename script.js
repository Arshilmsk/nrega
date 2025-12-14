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
    marginTop: "2rem",
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
            <a href="#" target="_blank">Program Officer</a>
            <a href="#" target="_blank">Block Administration</a>
            <a href="#" target="_blank">Gram Panchayat</a>
            <p style="color:red;font-weight:bold">FTO Signatory</p>
            <a href="https://mnregaweb5.nic.in/Netnrega/FTO/Login.aspx?&level=HomeAC&state_code=31" target="_blank">1st Signatory (Accountant)</a>
            <a href="https://mnregaweb5.nic.in/Netnrega/FTO/Login.aspx?&level=HomeWL&state_code=31" target="_blank">2nd Signatory (BDO)</a>
            <p style="color:red;font-weight:bold">E-MB</p>
            <a href="https://nregade2.nic.in/netnrega/Login.aspx?&level=HomeGPMB&state_code=31" target="_blank">eMB Fill (TA/JE)</a>
            <a href="https://nregade2.nic.in/netnrega/Login.aspx?&level=HomePOMB&state_code=31" target="_blank">eMB Approval (JE/AE)</a>
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
