const main = document.querySelector("main");

/* ---------- MAIN SECTION ---------- */
const section0 = document.createElement("div");
section0.id = "section0";
main.appendChild(section0);

Object.assign(section0.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5rem",
    marginTop: "2rem"
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
    marginTop: "2rem"
});

/* ---------- BOX CONTAINER ---------- */
const boxContainer = document.createElement("div");
section0.appendChild(boxContainer);

Object.assign(boxContainer.style, {
    display: "flex",
    gap: "2rem",
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "center"
});

/* ---------- COMMON BOX STYLE ---------- */
function boxStyle(box) {
    Object.assign(box.style, {
        backgroundColor: "rgba(111, 167, 195, 1)",
        color: "white",
        padding: "1rem",
        width: "auto",
        borderRadius: "5px",
        fontFamily: "Arial, sans-serif",
        cursor: "pointer"
        
    });
}

/* ---------- LINK STYLE FUNCTION ---------- */
function styleLinks(container) {
    const links = container.querySelectorAll("a");
    links.forEach(link => {
        Object.assign(link.style, {
            color: "black",
            textDecoration: "none",
            padding: "0.3rem 0.5rem",
            fontSize: "1rem"
        });

        link.addEventListener("mouseover", () => {
            link.style.backgroundColor = "yellow";
            link.style.borderRadius = "3px";
        });

        link.addEventListener("mouseout", () => {
            link.style.backgroundColor = "transparent";
        });
    });
}

/* ---------- SECTION 1 ---------- */
let section1 = document.createElement("div");
section1.textContent = "NREGA Logins";
boxStyle(section1);
boxContainer.appendChild(section1);

let open1 = false;

section1.addEventListener("click", () => {
    if (!open1) {
        const sec1 = document.createElement("div");
        sec1.className = "sec";
        sec1.innerHTML = `
            <a href="https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx">Official Site (MNREGA)</a>
            <p style="color:red">Admin Logins</p>
            <a href="https://nregade2.nic.in/netnrega/Login.aspx?&level=HomePO&state_code=31">Program Officer (Data Entry)</a>
            <a href="https://nregade2.nic.in/netnrega/login.aspx?&level=HomePODBA&state_code=31">Block Administration</a>
            <a href="https://nregade2.nic.in/Netnrega/Login.aspx?&level=HomeBP&state_code=31">Kshetra Panchyat</a>
            <a href="https://nregade2.nic.in/Netnrega/Login.aspx?&level=HomeGP&state_code=31">Gram Panchayat</a>
            <a href="https://mnregaweb5.nic.in/Netnrega/FTO/Login.aspx?&level=HomeAC&state_code=31">1st Signatory (Accountant)</a>
            <a href="https://mnregaweb5.nic.in/Netnrega/FTO/Login.aspx?&level=HomeWL&state_code=31">2nd Signatory (BDO)</a>

            <p style="color:red">E-MB</p>
            <a href="http://nregade2.nic.in/netnrega/Login.aspx?&level=HomeGPMB&state_code=31">eMB Fill (TA/JE)</a>
            <a href="http://nregade2.nic.in/netnrega/Login.aspx?&level=HomeMB&state_code=31">eMB Approval (AE/JE)</a>
        `;
        section1.appendChild(sec1);

        Object.assign(sec1.style, {
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            marginTop: "1rem"
        });

        styleLinks(sec1);
        open1 = true;
    } else {
        section1.querySelector(".sec").remove();
        open1 = false;
    }
});

/* ---------- SECTION 2 ---------- */
let section2 = document.createElement("div");
section2.textContent = "Important Links";
boxStyle(section2);
boxContainer.appendChild(section2);

let open2 = false;

section2.addEventListener("click", () => {
    if (!open2) {
        const sec2 = document.createElement("div");
        sec2.className = "sec";
        sec2.innerHTML = `
            <a href="#">NREGA Official Website</a>
            <a href="#">NREGA Dashboard</a>
            <a href="#">NREGA Guidelines</a>
            <a href="#">NREGA Reports</a>
        `;
        section2.appendChild(sec2);

        Object.assign(sec2.style, {
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            marginTop: "1rem"
        });

        styleLinks(sec2);
        open2 = true;
    } else {
        section2.querySelector(".sec").remove();
        open2 = false;
    }
});

/* ---------- SECTION 3 ---------- */
let section3 = document.createElement("div");
section3.textContent = "Help & Support";
boxStyle(section3);
boxContainer.appendChild(section3);

let open3 = false;

section3.addEventListener("click", () => {
    if (!open3) {
        const sec3 = document.createElement("div");
        sec3.className = "sec";
        sec3.innerHTML = `
            <a href="#">NREGA FAQ</a>
            <a href="#">Contact Support</a>
            <a href="#">Feedback</a>
        `;
        section3.appendChild(sec3);

        Object.assign(sec3.style, {
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            marginTop: "1rem"
        });

        styleLinks(sec3);
        open3 = true;
    } else {
        section3.querySelector(".sec").remove();
        open3 = false;
    }
});
