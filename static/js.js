function showSchedule() {
    const day = document.getElementById("daySelect").value;
    const scheduleDisplay = document.getElementById("scheduleDisplay");
    let scheduleText = "";

    switch (day) {
        case "1":
            scheduleText = `
                    <p>ຊ/ມ 1: Ex ພາສາອັງກິດ ຫ້ອງ: (FNS210)</p>
                    <p>ຊ/ມ 2: lab Mis Access jan ສົມມະນີ້: (CS003)</p>
                    <p>ຊ/ມ 3: Lect ລະບົບຄອມພິວເຕີ: (MA201)</p>
                    <p>ຊ/ມ 4: ວ່າງ</p>
                `;
            break;
        case "2":
            scheduleText = `
                    <p>ຊ/ມ 1: EX ພາສາອັງກິດ ຫ້ອງ: (FNS312)</p>
                    <p>ຊ/ມ 2: Led ການນຳໃຊ້ຊອບພື້ນຖານ: (CS003)</p>
                    <p>ຊ/ມ 3: Lect ຄວາມຮູ້ພື້ນຖານກ່ຽວກັບຖານຂໍ້ມູນ: (FNS401)</p>
                    <p>ຊ/ມ 4: Lect java: (FNS402)</p>
                `;
            break;
        case "3":
            scheduleText = `
                    <p>ຊ/ມ 1: ວ່າງ</p>
                    <p>ຊ/ມ 2: Lect ຄະນິດສາດສຳຮັບຄອມພິວເຕີ: (MA201)</p>
                    <p>ຊ/ມ 3: Lad java: (CS005)</p>
                    <p>ຊ/ມ 4: ວ່າງ</p>
                `;
            break;
        case "4":
            scheduleText = `
                    <p>ຊ/ມ 1: Lect ລາວສຶກສາ1
                    <p>ຊ/ມ 2: EX ຄະນິດສາດສຳລັບຄອມພິວເຕີ: (FNS403)</p>
                    <p>ຊ/ມ 3: ວ່າງ</p>
                    <p>ຊ/ມ 4: ວ່າງ</p>
                `;
            break;
        case "5":
            scheduleText = `
                    <p>ຊ/ມ 1: ວ່າງ</p>
                    <p>ຊ/ມ 2: Lect ຈິດວິທະຍາທົ່ວໄປ: (MA205)</p>
                    <p>ຊ/ມ 3: Lad ການນຳໃຊ້ຊອບພື້ນຖານ: (CS003)</p>
                    <p> 4:ຊ/ມ ວ່າງ</p>
                `;
            break;
        default:
            scheduleText = "<p>ไม่มีวันนี้</p>";
            break;
    }

    scheduleDisplay.innerHTML = scheduleText;
}