const examData = [
    // ========== CÂU HỎI 1 ==========
    {
        id: 1,
        question: "Which three statements characterize UDP? (Choose three.)",
        options: [
            "A. UDP provides basic connectionless transport layer functions.",
            "B. UDP provides connection-oriented, fast transport of data at Layer 3.",
            "C. UDP relies on application layer protocols for error detection.",
            "D. UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms.",
            "E. UDP relies on IP for error detection and recovery.",
            "F. UDP provides sophisticated flow control mechanisms."
        ],
        correct: [0, 2, 3],
        type: "multiple",
        explanation: "UDP là giao thức không kết nối, ít overhead, không cung cấp cơ chế sequencing hoặc flow control, và dựa vào tầng ứng dụng để phát hiện lỗi."
    },

    // ========== CÂU HỎI 2 ==========
    {
        id: 2,
        question: "What are three responsibilities of the transport layer? (Choose three.)",
        options: [
            "A. meeting the reliability requirements of applications, if any",
            "B. multiplexing multiple communication streams from many users or applications on the same network",
            "C. identifying the applications and services on the client and server that should handle transmitted data",
            "D. directing packets towards the destination network",
            "E. formatting data into a compatible form for receipt by the destination devices",
            "F. conducting error detection of the contents in frames"
        ],
        correct: [0, 1, 2],
        type: "multiple",
        explanation: "Tầng giao vận có trách nhiệm: đáp ứng yêu cầu độ tin cậy, ghép kênh nhiều luồng truyền thông, và xác định ứng dụng/dịch vụ xử lý dữ liệu."
    },

    // ========== CÂU HỎI 3 ==========
    {
        id: 3,
        question: "What does a client do when it has UDP datagrams to send?",
        options: [
            "A. It just sends the datagrams.",
            "B. It queries the server to see if it is ready to receive data.",
            "C. It sends a simplified three-way handshake to the server.",
            "D. It sends to the server a segment with the SYN flag set to synchronize the conversation."
        ],
        correct: 0,
        type: "single",
        explanation: "UDP là giao thức không kết nối, không có bắt tay, nên client chỉ đơn giản gửi các datagram mà không cần thiết lập kết nối trước."
    },

    // ========== CÂU HỎI 4 ==========
    {
        id: 4,
        question: "Which three application layer protocols use TCP? (Choose three.)",
        options: [
            "A. SMTP",
            "B. FTP",
            "C. SNMP",
            "D. HTTP",
            "E. TFTP",
            "F. DHCP"
        ],
        correct: [0, 1, 3],
        type: "multiple",
        explanation: "SMTP, FTP, và HTTP sử dụng TCP vì chúng yêu cầu độ tin cậy. TFTP và DHCP sử dụng UDP, SNMP có thể sử dụng cả hai."
    },

    // ========== CÂU HỎI 5 ==========
    {
        id: 5,
        question: "Which three basic parts are common to all frame types supported by the data link layer? (Choose three.)",
        options: [
            "A. header",
            "B. type field",
            "C. MTU size",
            "D. data",
            "E. trailer",
            "F. CRC value"
        ],
        correct: [0, 3, 4],
        type: "multiple",
        explanation: "Tất cả các frame types đều có header, data, và trailer. CRC value là một phần của trailer."
    },

    // ========== CÂU HỎI 6 ==========
    {
        id: 6,
        question: "Which statement is true about the CSMA/CD access method that is used in Ethernet?",
        options: [
            "A. When a device hears a carrier signal and transmits, a collision cannot occur.",
            "B. A jamming signal causes only devices that caused the collision to execute a backoff algorithm.",
            "C. All network devices must listen before transmitting.",
            "D. Devices involved in a collision get priority to transmit after the backoff period."
        ],
        correct: 2,
        type: "single",
        explanation: "CSMA/CD yêu cầu tất cả thiết bị mạng phải lắng nghe trước khi truyền để tránh xung đột."
    },

    // ========== CÂU HỎI 7 ==========
    {
        id: 7,
        question: "Which two statements describe the services provided by the data link layer? (Choose two.)",
        options: [
            "A. It defines the end-to-end delivery addressing scheme.",
            "B. It maintains the path between the source and destination devices during the data transmission.",
            "C. It manages the access of frames to the network media.",
            "D. It provides reliable delivery through link establishment and flow control.",
            "E. It ensures that application data will be transmitted according to the prioritization.",
            "F. It packages various Layer 3 PDUs into a frame format that is compatible with the network interface."
        ],
        correct: [2, 5],
        type: "multiple",
        explanation: "Tầng liên kết dữ liệu quản lý truy cập frame vào phương tiện mạng và đóng gói các PDU của Layer 3 vào định dạng frame tương thích."
    },

    // ========== CÂU HỎI 8 ==========
    {
        id: 8,
        question: "Refer to the exhibit. ServerB is attempting to contact HostA. Which two statements correctly identify the addressing that ServerB will generate in the process? (Choose two.)",
        options: [
            "A. ServerB will generate a packet with the destination IP address of RouterB.",
            "B. ServerB will generate a frame with the destination MAC address of SwitchB.",
            "C. ServerB will generate a packet with the destination IP address of RouterA.",
            "D. ServerB will generate a frame with the destination MAC address of RouterB.",
            "E. ServerB will generate a packet with the destination IP address of HostA.",
            "F. ServerB will generate a frame with the destination MAC address of RouterA."
        ],
        correct: [3, 4],
        type: "multiple",
        explanation: "ServerB sẽ tạo packet với địa chỉ IP đích là HostA và frame với địa chỉ MAC đích là RouterB (gateway)."
    },

    // ========== CÂU HỎI 9 ==========
    {
        id: 9,
        question: "Which statement is correct about network protocols?",
        options: [
            "A. Network protocols define the type of hardware that is used and how it is mounted in racks.",
            "B. They define how messages are exchanged between the source and the destination.",
            "C. They all function in the network access layer of TCP/IP.",
            "D. They are only required for exchange of messages between devices on remote networks."
        ],
        correct: 1,
        type: "single",
        explanation: "Giao thức mạng định nghĩa cách thức trao đổi thông điệp giữa nguồn và đích."
    },

    // ========== CÂU HỎI 10 ==========
    {
        id: 10,
        question: "Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?",
        options: [
            "A. Data is sent from the internet layer to the network access layer.",
            "B. Packets are sent from the network access layer to the transport layer.",
            "C. Segments are sent from the transport layer to the internet layer.",
            "D. Frames are sent from the network access layer to the internet layer."
        ],
        correct: 2,
        type: "single",
        explanation: "Trong quá trình đóng gói TCP/IP, các segment được gửi từ tầng giao vận xuống tầng mạng (internet)."
    },

    // ========== CÂU HỎI 11 ==========
    {
        id: 11,
        question: "Which name is assigned to the transport layer PDU?",
        options: [
            "A. bits",
            "B. data",
            "C. frame",
            "D. packet",
            "E. segment"
        ],
        correct: 4,
        type: "single",
        explanation: "PDU (Protocol Data Unit) của tầng giao vận được gọi là segment."
    },

    // ========== CÂU HỎI 12 ==========
    {
        id: 12,
        question: "Which two protocols may devices use in the application process that sends email? (Choose two.)",
        options: [
            "A. HTTP",
            "B. SMTP",
            "C. POP",
            "D. IMAP",
            "E. DNS",
            "F. POP3"
        ],
        correct: [1, 4],
        type: "multiple",
        explanation: "SMTP được sử dụng để gửi email, DNS được sử dụng để phân giải tên miền của máy chủ email."
    },

    // ========== CÂU HỎI 13 ==========
    {
        id: 13,
        question: "Which address is a valid IPv6 link-local unicast address?",
        options: [
            "A. FEC8::1::FFFF",
            "B. FD80::1:1234",
            "C. FE80::1:4545:6578:ABC1",
            "D. FEOA::100:7788:998F",
            "E. FC90:5678:4251:FFFF"
        ],
        correct: 2,
        type: "single",
        explanation: "Địa chỉ link-local IPv6 bắt đầu với prefix FE80::/10. FE80::1:4545:6578:ABC1 là địa chỉ link-local hợp lệ."
    },

    // ========== CÂU HỎI 14 ==========
    {
        id: 14,
        question: "Match the IPv6 address with the IPv6 address type.",
        options: [
            "A. link-local",
            "B. solicited node multicast", 
            "C. global unicast",
            "D. all node multicast",
            "E. loopback",
            "F. unique local"
        ],
        correct: [2, 3, 4, 1],
        type: "matching",
        explanation: "2001:DB8::BAF:3F57:FE94 - global unicast, FF02::1 - all node multicast, ::1 - loopback, FF02::1:FFAE:F85F - solicited node multicast."
    },

    // ========== CÂU HỎI 15 ==========
    {
        id: 15,
        question: "Three methods allow IPv6 and IPv4 to co-exist. Match each method with its description.",
        options: [
            "A. The IPv4 packets and IPv6 packets coexist in the same network.",
            "B. The IPv6 packet is transported inside an IPv4 packet.",
            "C. IPv6 packets are converted into IPv4 packets, and vice versa."
        ],
        correct: [3, 2, 1],
        type: "matching",
        explanation: "Dual-stack (A), Translation (C), Tunneling (B)."
    },

    // ========== CÂU HỎI 16 ==========
    {
        id: 16,
        question: "Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?",
        options: [
            "A. 2001:db8:0:f00::/52",
            "B. 2001:db8:0:8000::/52",
            "C. 2001:db8:0:f::/52",
            "D. 2001:db8:0:f000::/52"
        ],
        correct: 3,
        type: "single",
        explanation: "Với prefix /52, có 4 bit subnet (52-48=4). Subnet cuối cùng sẽ có giá trị 15 (hex F) ở vị trí nibble thứ 4: 2001:db8:0:f000::/52."
    },

    // ========== CÂU HỎI 17 ==========
    {
        id: 17,
        question: "What type of IPv6 address is FE80::1?",
        options: [
            "A. loopback",
            "B. link-local",
            "C. multicast",
            "D. global unicast"
        ],
        correct: 1,
        type: "single",
        explanation: "FE80::1 là địa chỉ link-local, được sử dụng cho giao tiếp trên cùng một link mạng."
    },

    // ========== CÂU HỎI 18 ==========
    {
        id: 18,
        question: "Which two types of IPv6 messages are used in place of ARP for address resolution?",
        options: [
            "A. anycast",
            "B. broadcast",
            "C. echo reply",
            "D. echo request",
            "E. neighbor solicitation",
            "F. neighbor advertisement"
        ],
        correct: [4, 5],
        type: "multiple",
        explanation: "Trong IPv6, Neighbor Solicitation và Neighbor Advertisement được sử dụng thay cho ARP để phân giải địa chỉ."
    },

    // ========== CÂU HỎI 19 ==========
    {
        id: 19,
        question: "What property of ARP causes cached IP-to-MAC mappings to remain in memory longer?",
        options: [
            "A. Entries in an ARP table are time-stamped and are purged after the timeout expires.",
            "B. A static IP-to-MAC address entry can be entered manually into an ARP table.",
            "C. The type field 0x806 appears in the header of the Ethernet frame.",
            "D. The port-to-MAC address table on a switch has the same entries as the ARP table on the switch."
        ],
        correct: 1,
        type: "single",
        explanation: "Các mục nhập ARP tĩnh được nhập thủ công vào bảng ARP sẽ tồn tại lâu hơn trong bộ nhớ vì chúng không bị xóa sau khi hết timeout."
    },

    // ========== CÂU HỎI 20 ==========
    {
        id: 20,
        question: "Where are IPv4 address to Layer 2 Ethernet address mappings maintained on a host computer?",
        options: [
            "A. neighbor table",
            "B. ARP cache",
            "C. routing table",
            "D. MAC address table"
        ],
        correct: 1,
        type: "single",
        explanation: "Ánh xạ địa chỉ IPv4 sang địa chỉ Ethernet (Layer 2) được duy trì trong ARP cache trên máy tính chủ."
    },

    // ========== CÂU HỎI 21 ==========
    {
        id: 21,
        question: "Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)",
        options: [
            "A. The frame has the broadcast address as the destination address.",
            "B. The destination address is unknown to the switch.",
            "C. The source address in the frame header is the broadcast address.",
            "D. The source address in the frame is a multicast address.",
            "E. The destination address in the frame is a known unicast address."
        ],
        correct: [0, 1],
        type: "multiple",
        explanation: "Switch sẽ flood frame khi: frame có địa chỉ đích là broadcast, hoặc địa chỉ đích chưa được biết trong bảng MAC."
    },

    // ========== CÂU HỎI 22 ==========
    {
        id: 22,
        question: "Which device performs the function of determining the path that messages should take through internetworks?",
        options: [
            "A. a router",
            "B. a firewall",
            "C. a web server",
            "D. a DSL modem"
        ],
        correct: 0,
        type: "single",
        explanation: "Router thực hiện chức năng xác định đường đi mà các thông điệp nên đi qua các internetworks."
    },

    // ========== CÂU HỎI 23 ==========
    {
        id: 23,
        question: "What term describes a type of network used by people who work from home or from a small remote office?",
        options: [
            "A. SOHO network",
            "B. BYOD",
            "C. quality of service",
            "D. converged network"
        ],
        correct: 0,
        type: "single",
        explanation: "Mạng SOHO (Small Office/Home Office) mô tả loại mạng được sử dụng bởi những người làm việc tại nhà hoặc từ văn phòng nhỏ từ xa."
    },

    // ========== CÂU HỎI 24 ==========
    {
        id: 24,
        question: "A networking technician is working on the wireless network at a medical clinic. The technician accidentally sets up the wireless network so that patients can see the medical records data of other patients. Which of the four network characteristics has been violated in this situation?",
        options: [
            "A. fault tolerance",
            "B. scalability",
            "C. security",
            "D. Quality of Service (QoS)",
            "E. reliability"
        ],
        correct: 2,
        type: "single",
        explanation: "Tính bảo mật (security) đã bị vi phạm vì bệnh nhân có thể xem dữ liệu hồ sơ y tế của bệnh nhân khác."
    },

    // ========== CÂU HỎI 25 ==========
    {
        id: 25,
        question: "A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)",
        options: [
            "A. The link between the switches will work at the fastest speed that is supported by both switches.",
            "B. The link between switches will work as full-duplex.",
            "C. If both switches support different speeds, they will each work at their own fastest speed.",
            "D. The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable.",
            "E. The connection will not be possible unless the administrator changes the cable to a crossover cable.",
            "F. The duplex capability has to be manually configured because it cannot be negotiated."
        ],
        correct: [0, 1, 3],
        type: "multiple",
        explanation: "Các switch hiện đại có auto-MDIX tự động phát hiện và điều chỉnh cable, tự động đàm phán tốc độ và chế độ full-duplex."
    },

    // ========== CÂU HỎI 26 ==========
    {
        id: 26,
        question: "A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?",
        options: [
            "A. port-based buffering",
            "B. level 1 cache buffering",
            "C. shared memory buffering",
            "D. fixed configuration buffering"
        ],
        correct: 2,
        type: "single",
        explanation: "Shared memory buffering hoạt động tốt nhất khi chuyển đổi giữa các cổng có tốc độ khác nhau vì nó cho phép chia sẻ bộ nhớ đệm giữa tất cả các cổng."
    },

    // ========== CÂU HỎI 27 ==========
    {
        id: 27,
        question: "Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?",
        options: [
            "A. cut-through switching",
            "B. store-and-forward switching",
            "C. fragment-free switching",
            "D. fast-forward switching"
        ],
        correct: 1,
        type: "single",
        explanation: "Store-and-forward switching nhận toàn bộ frame và thực hiện kiểm tra CRC để phát hiện lỗi trước khi chuyển tiếp frame."
    },

    // ========== CÂU HỎI 28 ==========
    {
        id: 28,
        question: "Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?",
        options: [
            "A. 1 - rollover, 2 - crossover, 3 - straight-through",
            "B. 1 - rollover, 2 - straight-through, 3 - crossover",
            "C. 1 - crossover, 2 - straight-through, 3 - rollover",
            "D. 1 - crossover, 2 - rollover, 3 - straight-through"
        ],
        correct: 1,
        type: "single",
        explanation: "PC đến console port cần rollover cable, switch đến switch cần crossover cable, switch đến router cần straight-through cable."
    },

    // ========== CÂU HỎI 29 ==========
    {
        id: 29,
        question: "What source IP address does a router use by default when the traceroute command is issued?",
        options: [
            "A. the highest configured IP address on the router",
            "B. a loopback IP address",
            "C. the IP address of the outbound interface",
            "D. the lowest configured IP address on the router"
        ],
        correct: 2,
        type: "single",
        explanation: "Router sử dụng địa chỉ IP của interface outbound làm địa chỉ nguồn mặc định khi thực hiện lệnh traceroute."
    },

    // ========== CÂU HỎI 30 ==========
    {
        id: 30,
        question: "What is the purpose of ICMP messages?",
        options: [
            "A. to inform routers about network topology changes",
            "B. to ensure the delivery of an IP packet",
            "C. to provide feedback of IP packet transmissions",
            "D. to monitor the process of a domain name to IP address resolution"
        ],
        correct: 2,
        type: "single",
        explanation: "Mục đích của các thông báo ICMP là cung cấp phản hồi về việc truyền gói tin IP, chẳng hạn như thông báo lỗi hoặc thông tin trạng thái."
    },

    // ========== CÂU HỎI 31 ==========
    {
        id: 31,
        question: "A technician uses the ping 127.0.0.1 command. What is the technician testing?",
        options: [
            "A. the TCP/IP stack on a network host",
            "B. connectivity between two adjacent Cisco devices",
            "C. connectivity between a PC and the default gateway",
            "D. connectivity between two PCs on the same network",
            "E. physical connectivity of a particular PC and the network"
        ],
        correct: 0,
        type: "single",
        explanation: "Ping 127.0.0.1 kiểm tra TCP/IP stack trên máy chủ mạng (loopback address)."
    },

    // ========== CÂU HỎI 32 ==========
    {
        id: 32,
        question: "What are two characteristics of fiber-optic cable? (Choose two.)",
        options: [
            "A. It is not affected by EMI or RFI.",
            "B. Each pair of cables is wrapped in metallic foil.",
            "C. It combines the technique of cancellation, shielding, and twisting to protect data.",
            "D. It typically contains 4 pairs of fiber-optic wires.",
            "E. It is more expensive than UTP cabling is."
        ],
        correct: [0, 4],
        type: "multiple",
        explanation: "Cáp quang không bị ảnh hưởng bởi EMI hoặc RFI và đắt tiền hơn cáp UTP."
    },

    // ========== CÂU HỎI 33 ==========
    {
        id: 33,
        question: "With the use of unshielded twisted-pair copper wire in a network, what causes crosstalk within the cable pairs?",
        options: [
            "A. the magnetic field around the adjacent pairs of wire",
            "B. the use of braided wire to shield the adjacent wire pairs",
            "C. the reflection of the electrical wave back from the far end of the cable",
            "D. the collision caused by two nodes trying to use the media simultaneously"
        ],
        correct: 0,
        type: "single",
        explanation: "Xuyên âm (crosstalk) trong các cặp cáp xoắn đôi không bọc kim xảy ra do từ trường xung quanh các cặp dây liền kề."
    },

    // ========== CÂU HỎI 34 ==========
    {
        id: 34,
        question: "A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)",
        options: [
            "A. the amount of traffic that is currently crossing the network",
            "B. the sophistication of the encapsulation method applied to the data",
            "C. the type of traffic that is crossing the network",
            "D. the latency that is created by the number of network devices that the data is crossing",
            "E. the bandwidth of the WAN connection to the Internet",
            "F. the reliability of the gigabit Ethernet infrastructure of the backbone"
        ],
        correct: [0, 2, 3],
        type: "multiple",
        explanation: "Lượng lưu lượng mạng, loại lưu lượng và độ trễ do số lượng thiết bị mạng đều ảnh hưởng đến throughput."
    },

    // ========== CÂU HỎI 35 ==========
    {
        id: 35,
        question: "Which two functions are primary functions of a router? (Choose two.)",
        options: [
            "A. packet forwarding",
            "B. microsegmentation",
            "C. domain name resolution",
            "D. path selection",
            "E. flow control"
        ],
        correct: [0, 3],
        type: "multiple",
        explanation: "Hai chức năng chính của router là chuyển tiếp gói tin và lựa chọn đường đi."
    },

    // ========== CÂU HỎI 36 ==========
    {
        id: 36,
        question: "Match the command with the device mode at which the command is entered.",
        options: [
            "A. login",
            "B. service password-encryption",
            "C. ip address 192.168.4.4 255.255.255.0",
            "D. copy running-config startup-config",
            "E. enable"
        ],
        correct: [4, 0, 2, 3, 1],
        type: "matching",
        explanation: "enable - user exec mode, login - line configuration mode, ip address - interface configuration mode, copy running-config startup-config - privileged exec mode, service password-encryption - global configuration mode."
    },

    // ========== CÂU HỎI 37 ==========
    {
        id: 37,
        question: "A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?",
        options: [
            "A. Reboot the device.",
            "B. Enter CTRL-Z at the privileged mode prompt.",
            "C. Exit global configuration mode.",
            "D. Power cycle the device.",
            "E. Exit privileged EXEC mode and press Enter"
        ],
        correct: 4,
        type: "single",
        explanation: "Thoát khỏi privileged EXEC mode và nhấn Enter là cách nhanh nhất để kiểm tra banner message đã được cấu hình đúng chưa."
    },

    // ========== CÂU HỎI 38 ==========
    {
        id: 38,
        question: "Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?",
        options: [
            "A. It is the IP address of the Router1 interface that connects the company to the Internet.",
            "B. It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.",
            "C. It is the IP address of Switch1 that connects PC1 to other devices on the same LAN.",
            "D. It is the IP address of the ISP network device located in the cloud."
        ],
        correct: 1,
        type: "single",
        explanation: "Default gateway là địa chỉ IP của interface router kết nối với mạng cục bộ của PC1."
    },

    // ========== CÂU HỎI 39 ==========
    {
        id: 39,
        question: "How many host addresses are available on the 192.168.10.128/26 network?",
        options: [
            "A. 30",
            "B. 32",
            "C. 60",
            "D. 62",
            "E. 64"
        ],
        correct: 3,
        type: "single",
        explanation: "/26 có 6 bit cho host (32-26=6). Số địa chỉ host khả dụng là 2^6 - 2 = 64 - 2 = 62."
    },

    // ========== CÂU HỎI 40 ==========
    {
        id: 40,
        question: "An administrator must send a message to everyone on the router A network. What is the broadcast address for network 172.16.16.0/22?",
        options: [
            "A. 172.16.16.255",
            "B. 172.16.20.255",
            "C. 172.16.19.255",
            "D. 172.16.23.255",
            "E. 172.16.255.255"
        ],
        correct: 2,
        type: "single",
        explanation: "Với mạng 172.16.16.0/22, subnet mask 255.255.252.0, block size 4, broadcast address là 172.16.19.255."
    },

    // ========== CÂU HỎI 41 ==========
    {
        id: 41,
        question: "An administrator wants to create four subnetworks from the network address 192.168.1.0/24. What is the network address and subnet mask of the second useable subnet?",
        options: [
            "A. subnetwork 192.168.1.64 subnet mask 255.255.255.192",
            "B. subnetwork 192.168.1.32 subnet mask 255.255.255.240",
            "C. subnetwork 192.168.1.64 subnet mask 255.255.255.240",
            "D. subnetwork 192.168.1.128 subnet mask 255.255.255.192",
            "E. subnetwork 192.168.1.8 subnet mask 255.255.255.224"
        ],
        correct: 0,
        type: "single",
        explanation: "Để tạo 4 subnet từ /24, cần 2 bit subnet (2^2=4). Subnet mask mới là /26 (255.255.255.192). Subnet thứ hai: 192.168.1.64/26."
    },

    // ========== CÂU HỎI 42 ==========
    {
        id: 42,
        question: "Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?",
        options: [
            "A. 10.16.10.160/26",
            "B. 10.16.10.128/28",
            "C. 10.16.10.64/27",
            "D. 10.16.10.224/26",
            "E. 10.16.10.240/27"
        ],
        correct: 2,
        type: "single",
        explanation: "Với 25 hosts, cần ít nhất 5 bit host (2^5-2=30). /27 có 5 bit host. 10.16.10.64/27 là subnet hợp lệ."
    },

    // ========== CÂU HỎI 43 ==========
    {
        id: 43,
        question: "Why would a Layer 2 switch need an IP address?",
        options: [
            "A. to enable the switch to send broadcast frames to attached PCs",
            "B. to enable the switch to function as a default gateway",
            "C. to enable the switch to be managed remotely",
            "D. to enable the switch to receive frames from attached PCs"
        ],
        correct: 2,
        type: "single",
        explanation: "Switch Layer 2 cần địa chỉ IP để được quản lý từ xa thông qua Telnet, SSH, hoặc web interface."
    },

    // ========== CÂU HỎI 44 ==========
    {
        id: 44,
        question: "Which interface allows remote management of a Layer 2 switch?",
        options: [
            "A. the AUX interface",
            "B. the console port interface",
            "C. the switch virtual interface",
            "D. the first Ethernet port interface"
        ],
        correct: 2,
        type: "single",
        explanation: "Switch virtual interface (SVI) cho phép quản lý từ xa switch Layer 2."
    },

    // ========== CÂU HỎI 45 ==========
    {
        id: 45,
        question: "A network administrator enters the service password-encryption command into the configuration mode of a router. What does this command accomplish?",
        options: [
            "A. This command encrypts passwords as they are transmitted across serial WAN links.",
            "B. This command prevents someone from viewing the running configuration passwords.",
            "C. This command enables a strong encryption algorithm for the enable secret password command.",
            "D. This command automatically encrypts passwords in configuration files that are currently stored in NVRAM.",
            "E. This command provides an exclusive encrypted password for external service personnel who are required to do router maintenance."
        ],
        correct: 1,
        type: "single",
        explanation: "Lệnh service password-encryption mã hóa các mật khẩu trong file cấu hình đang chạy, ngăn không cho ai đó xem các mật khẩu này."
    },

    // ========== CÂU HỎI 46 ==========
    {
        id: 46,
        question: "Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)",
        options: [
            "A. VTY interface",
            "B. console interface",
            "C. Ethernet interface",
            "D. boot IOS mode",
            "E. privileged EXEC mode",
            "F. router configuration mode"
        ],
        correct: [0, 1, 4],
        type: "multiple",
        explanation: "Các mode và interface có thể được bảo vệ bằng mật khẩu: VTY interface, console interface, và privileged EXEC mode."
    },

    // ========== CÂU HỎI 47 ==========
    {
        id: 47,
        question: "Within a production network, what is the purpose of configuring a switch with a default gateway address?",
        options: [
            "A. Hosts that are connected to the switch can use the switch default gateway address to forward packets to a remote destination.",
            "B. A switch must have a default gateway to be accessible by Telnet and SSH.",
            "C. The default gateway address is used to forward packets originating from the switch to remote networks.",
            "D. It provides a next-hop address for all traffic that flows through the switch."
        ],
        correct: 2,
        type: "single",
        explanation: "Trong mạng sản xuất, mục đích của việc cấu hình địa chỉ cổng mặc định trên switch là để chuyển tiếp các gói tin bắt nguồn từ switch đến các mạng từ xa."
    },

    // ========== CÂU HỎI 48 ==========
    {
        id: 48,
        question: "Which statement describes a feature of the IP protocol?",
        options: [
            "A. IP encapsulation is modified based on network media.",
            "B. IP relies on Layer 2 protocols for transmission error control.",
            "C. MAC addresses are used during the IP packet encapsulation.",
            "D. IP relies on upper layer services to handle situations of missing or out-of-order packets."
        ],
        correct: 3,
        type: "single",
        explanation: "IP dựa vào các dịch vụ tầng trên để xử lý các tình huống mất gói tin hoặc gói tin không theo thứ tự."
    },

    // ========== CÂU HỎI 49 ==========
    {
        id: 49,
        question: "What are two services provided by the OSI network layer? (Choose two.)",
        options: [
            "A. performing error detection",
            "B. routing packets toward the destination",
            "C. encapsulating PDUs from the transport layer",
            "D. placement of frames on the media",
            "E. collision detection"
        ],
        correct: [1, 2],
        type: "multiple",
        explanation: "Tầng mạng OSI cung cấp: định tuyến gói tin đến đích và đóng gói PDU từ tầng giao vận."
    },

    // ========== CÂU HỎI 50 ==========
    {
        id: 50,
        question: "Why is NAT not needed in IPv6?",
        options: [
            "A. Because IPv6 has integrated security, there is no need to hide the IPv6 addresses of internal networks.",
            "B. Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.",
            "C. The problems that are induced by NAT applications are solved because the IPv6 header improves packet handling by intermediate routers.",
            "D. The end-to-end connectivity problems that are caused by NAT are solved because the number of routes increases with the number of nodes that are connected to the Internet."
        ],
        correct: 1,
        type: "single",
        explanation: "NAT không cần thiết trong IPv6 vì số lượng địa chỉ IPv6 cực kỳ lớn, cho phép mọi host hoặc user có địa chỉ public."
    }
];