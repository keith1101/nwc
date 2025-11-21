const examData = [
    // ========== CÂU 1 ==========
    {
        id: 1,
        question: "(Choose 3 answers) Which three fields are used in a UDP segment header?",
        options: [
            "A. Window Size",
            "B. Length",
            "C. Source Port",
            "D. Acknowledgment Number",
            "E. Checksum"
        ],
        correct: [1, 2, 4], // B, C, E
        type: "multiple",
        explanation: "UDP header rất đơn giản, chỉ gồm 4 trường: Source Port, Destination Port, Length, và Checksum. Window Size và Acknowledgment Number thuộc về TCP header."
    },
    // ========== CÂU 2 ==========
    {
        id: 2,
        question: "(Choose 1 answer) Which factor determines TCP window size?",
        options: [
            "A. the amount of data to be transmitted",
            "B. the number of services included in the TCP segment",
            "C. the amount of data the destination can process at one time",
            "D. the amount of data the source is capable of sending at one time"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Window size được xác định bởi phía nhận (destination) để báo cho phía gửi biết lượng dữ liệu nó có thể xử lý mà không bị tràn bộ đệm (Flow Control)."
    },
    // ========== CÂU 3 ==========
    {
        id: 3,
        question: "(Choose 3 answers) What are three responsibilities of the transport layer?",
        options: [
            "A. meeting the reliability requirements of applications, if any",
            "B. multiplexing multiple communication streams from many users or applications on the same network",
            "C. identifying the applications and services on the client and server that should handle transmitted data",
            "D. directing packets towards the destination network",
            "E. formatting data into a compatible form for receipt by the destination devices"
        ],
        correct: [0, 1, 2], // A, B, C
        type: "multiple",
        explanation: "Transport layer chịu trách nhiệm về độ tin cậy (TCP), ghép kênh (multiplexing) và xác định ứng dụng qua số hiệu cổng (Ports). Định tuyến (D) là Layer 3, Định dạng dữ liệu (E) là Presentation Layer."
    },
    // ========== CÂU 4 ==========
    {
        id: 4,
        question: "(Choose 1 answer) What does a client do when it has UDP datagrams to send?",
        options: [
            "A. It just sends the datagrams.",
            "B. It queries the server to see if it is ready to receive data.",
            "C. It sends a simplified three-way handshake to the server.",
            "D. It sends to the server a segment with the SYN flag set to synchronize the conversation."
        ],
        correct: 0, // A
        type: "single",
        explanation: "UDP là giao thức phi kết nối (connectionless), nó không thiết lập bắt tay (handshake) mà chỉ gửi dữ liệu ngay lập tức."
    },
    // ========== CÂU 5 ==========
    {
        id: 5,
        question: "(Choose 1 answer) When 2 or more bits in a data unit have been changed during the transmission, the error is called:",
        options: [
            "A. random error",
            "B. burst error",
            "C. inverted error",
            "D. double error"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Single-bit error là sai 1 bit. Burst error là khi 2 hoặc nhiều bit bị lỗi trong một đơn vị dữ liệu."
    },
    // ========== CÂU 6 ==========
    {
        id: 6,
        question: "(Choose 1 answer) What is the function of the CRC value that is found in the FCS field of a frame?",
        options: [
            "A. to verify the integrity of the received frame",
            "B. to verify the physical address in the frame",
            "C. to verify the logical address in the frame",
            "D. to compute the checksum header for the data field in the frame"
        ],
        correct: 0, // A
        type: "single",
        explanation: "CRC (Cyclic Redundancy Check) nằm trong trường FCS (Frame Check Sequence) dùng để kiểm tra tính toàn vẹn của frame, phát hiện lỗi xảy ra trong quá trình truyền."
    },
    // ========== CÂU 7 ==========
    {
        id: 7,
        question: "(Choose 1 answer) What is contained in the trailer of a data-link frame?",
        options: [
            "A. logical address",
            "B. physical address",
            "C. data",
            "D. error detection"
        ],
        correct: 3, // D
        type: "single",
        explanation: "Trailer (đuôi) của frame chứa FCS, phục vụ cho việc phát hiện lỗi (error detection)."
    },
    // ========== CÂU 9 ==========
    {
        id: 9,
        question: "(Choose 1 answer) Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?",
        options: [
            "A. Data is sent from the internet layer to the network access layer.",
            "B. Packets are sent from the network access layer to the transport layer.",
            "C. Segments are sent from the transport layer to the internet layer.",
            "D. Frames are sent from the network access layer to the internet layer."
        ],
        correct: 2, // C
        type: "single",
        explanation: "Quá trình đóng gói đi từ trên xuống: Transport (tạo Segment) gửi xuống Internet (tạo Packet)."
    },
    // ========== CÂU 10 ==========
    {
        id: 10,
        question: "(Choose 1 answer) What method can be used by two computers to ensure that packets are not dropped because too much data is being sent too quickly?",
        options: [
            "A. encapsulation",
            "B. flow control",
            "C. access method",
            "D. response timeout"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Flow control (Điều khiển luồng) giúp điều chỉnh tốc độ truyền dữ liệu để bên nhận kịp xử lý."
    },
    // ========== CÂU 11 ==========
    {
        id: 11,
        question: "(Choose 1 answer) Which name is assigned to the transport layer PDU?",
        options: [
            "A. bits",
            "B. data",
            "C. frame",
            "D. packet",
            "E. segments"
        ],
        correct: 4, // E
        type: "single",
        explanation: "PDU của Transport layer là Segment (đối với TCP) hoặc Datagram (đối với UDP). Các lớp khác: Bits (Physical), Frame (Data Link), Packet (Network)."
    },
    // ========== CÂU 12 ==========
    {
        id: 12,
        question: "(Choose 2 answers) Which two protocols may devices use in the application process that sends email?",
        options: [
            "A. HTTP",
            "B. SMTP",
            "C. POP",
            "D. IMAP",
            "E. DNS",
            "F. POP3"
        ],
        correct: [1, 4], // B, E
        type: "multiple",
        explanation: "SMTP được dùng để GỬI email. DNS cần thiết để phân giải tên miền máy chủ mail (MX record). POP/IMAP dùng để NHẬN email."
    },
    // ========== CÂU 13 ==========
    {
        id: 13,
        question: "(Choose 1 answer) A network administrator has received the IPv6 prefix 2001:DB8::/48... how many subnets can the administrator create from the /48 prefix?",
        options: [
            "A. 16",
            "B. 256",
            "C. 4096",
            "D. 65536"
        ],
        correct: 3, // D
        type: "single",
        explanation: "IPv6 subnet chuẩn thường là /64. Từ /48 đến /64 có 16 bit dành cho Subnet ID. Số lượng subnet = 2^16 = 65,536."
    },
    // ========== CÂU 15 ==========
    {
        id: 15,
        question: "(Choose 2 answers) What are two types of IPv6 unicast addresses?",
        options: [
            "A. multicast",
            "B. loopback",
            "C. link-local",
            "D. anycast",
            "E. broadcast"
        ],
        correct: [1, 2], // B, C
        type: "multiple",
        explanation: "Các loại địa chỉ Unicast trong IPv6 bao gồm: Global Unicast, Link-local, Loopback, Unique Local... Multicast và Anycast là các loại địa chỉ riêng biệt."
    },
    // ========== CÂU 16 ==========
    {
        id: 16,
        question: "(Choose 1 answer) What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?",
        options: [
            "A. the MAC address of the IPv6 enabled interface",
            "B. a randomly generated 64-bit hexadecimal address",
            "C. an IPv6 address that is provided by a DHCPv6 server",
            "D. an IPv4 address that is configured on the interface"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Quy trình EUI-64 lấy địa chỉ MAC (48-bit), chèn FF:FE vào giữa và đảo bit thứ 7 để tạo ra Interface ID 64-bit."
    },
    // ========== CÂU 19 ==========
    {
        id: 19,
        question: "(Choose 1 answer) Where are IPv4 address to Layer 2 Ethernet address mappings maintained on a host computer?",
        options: [
            "A. neighbor table",
            "B. ARP cache",
            "C. routing table",
            "D. MAC address table"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Trên máy host (PC), bảng ánh xạ từ IP sang MAC được lưu trong ARP cache (hoặc ARP table)."
    },
    // ========== CÂU 20 ==========
    {
        id: 20,
        question: "(Choose 2 answers) Which two types of IPv6 messages are used in place of ARP for address resolution?",
        options: [
            "A. anycast",
            "B. broadcast",
            "C. echo reply",
            "D. echo request",
            "E. neighbor solicitation",
            "F. neighbor advertisement"
        ],
        correct: [4, 5], // E, F
        type: "multiple",
        explanation: "IPv6 không dùng ARP mà dùng giao thức Neighbor Discovery (ND) với 2 loại message ICMPv6 là Neighbor Solicitation (NS) và Neighbor Advertisement (NA)."
    },
    // ========== CÂU 22 ==========
    {
        id: 22,
        question: "(Choose 1 answer) What term describes a type of network used by people who work from home or from a small remote office?",
        options: [
            "A. SOHO network",
            "B. BYOD",
            "C. quality of service",
            "D. converged network"
        ],
        correct: 0, // A
        type: "single",
        explanation: "SOHO viết tắt của Small Office Home Office."
    },
    // ========== CÂU 23 ==========
    {
        id: 23,
        question: "(Choose 1 answer) A networking technician... accidentally sets up the wireless network so that patients can see the medical records data of other patients. Which characteristic is violated?",
        options: [
            "A. fault tolerance",
            "B. scalability",
            "C. security",
            "D. Quality of Service (QoS)",
            "E. reliability"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Việc dữ liệu nhạy cảm bị lộ cho người không được phép truy cập là vi phạm tính Bảo mật (Security/Confidentiality)."
    },
    // ========== CÂU 25 ==========
    {
        id: 25,
        question: "(Choose 2 answers) What are two examples of the cut-through switching method?",
        options: [
            "A. store-and-forward switching",
            "B. fast-forward switching",
            "C. CRC switching",
            "D. fragment-free switching",
            "E. QOS switching"
        ],
        correct: [1, 3], // B, D
        type: "multiple",
        explanation: "Cut-through switching có 2 biến thể chính: Fast-forward (chuyển ngay khi đọc xong MAC đích) và Fragment-free (đọc xong 64 bytes đầu rồi chuyển)."
    },
    // ========== CÂU 27 ==========
    {
        id: 27,
        question: "(Choose 1 answer) What is the purpose of the FCS field in a frame?",
        options: [
            "A. to obtain the MAC address of the sending node",
            "B. to verify the logical address of the sending node",
            "C. to compute the CRC header for the data field",
            "D. to determine if errors occurred in the transmission and reception"
        ],
        correct: 3, // D
        type: "single",
        explanation: "FCS chứa giá trị CRC dùng để xác định xem frame có bị lỗi trong quá trình truyền hay không."
    },
    // ========== CÂU 28 ==========
    {
        id: 28,
        question: "(Choose 2 answers) What are two actions performed by a Cisco switch?",
        options: [
            "A. building a routing table that is based on the first IP address in the frame header",
            "B. using the source MAC addresses of frames to build and maintain a MAC address table",
            "C. forwarding frames with unknown destination IP addresses to the default gateway",
            "D. utilizing the MAC address table to forward frames via the destination MAC address",
            "E. examining the destination MAC address to add new entries to the MAC address table"
        ],
        correct: [1, 3], // B, D
        type: "multiple",
        explanation: "Switch học địa chỉ MAC Nguồn (Source MAC) để xây dựng bảng MAC (B) và dùng bảng đó để chuyển frame đến đúng cổng dựa trên MAC Đích (Destination MAC) (D)."
    },
    // ========== CÂU 29 ==========
    {
        id: 29,
        question: "(Choose 1 answer) What is the purpose of ICMP messages?",
        options: [
            "A. to inform routers about network topology changes",
            "B. to ensure the delivery of an IP packet",
            "C. to provide feedback of IP packet transmissions",
            "D. to monitor the process of a domain name to IP address resolution"
        ],
        correct: 2, // C
        type: "single",
        explanation: "ICMP được dùng để cung cấp phản hồi về các vấn đề liên quan đến việc truyền gói tin IP (ví dụ: Host Unreachable, Time Exceeded)."
    },
    // ========== CÂU 30 ==========
    {
        id: 30,
        question: "(Choose 1 answer) Which ICMPv6 message is sent when the IPv6 hop limit field of a packet is decremented to zero?",
        options: [
            "A. network unreachable",
            "B. time exceeded",
            "C. protocol unreachable",
            "D. port unreachable"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Khi Hop Limit giảm về 0, router sẽ huỷ gói tin và gửi thông báo ICMPv6 Time Exceeded về cho nguồn."
    },
    // ========== CÂU 31 ==========
    {
        id: 31,
        question: "(Choose 1 answer) Which protocol is used by the traceroute command to send and receive echo-requests and echo-replies?",
        options: [
            "A. SNMP",
            "B. ICMP",
            "C. Telnet",
            "D. TCP"
        ],
        correct: 1, // B
        type: "single",
        explanation: "Traceroute (và Ping) sử dụng giao thức ICMP để gửi Echo Request và nhận Echo Reply (hoặc Time Exceeded)."
    },
    // ========== CÂU 34 ==========
    {
        id: 34,
        question: "(Choose 1 answer) What is a primary role of the Physical layer in transmitting data on the network?",
        options: [
            "A. create the signals that represent the bits in each frame on to the media",
            "B. provide physical addressing to the devices",
            "C. determine the path packets take through the network",
            "D. control data access to the media"
        ],
        correct: 0, // A
        type: "single",
        explanation: "Lớp Vật lý (Physical Layer) chịu trách nhiệm mã hóa các bit nhị phân thành các tín hiệu (điện, quang, sóng) để truyền trên môi trường truyền dẫn."
    },
    // ========== CÂU 35 ==========
    {
        id: 35,
        question: "(Choose 1 answer) The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect?",
        options: [
            "A. The switch will have a management interface with the address 172.16.100.1.",
            "B. The switch can be remotely managed from a host on another network.",
            "C. The switch can communicate with other hosts on the 172.16.100.0 network.",
            "D. The switch is limited to sending and receiving frames to and from the gateway 172.16.100.1."
        ],
        correct: 1, // B
        type: "single",
        explanation: "Switch Layer 2 cần default gateway để có thể gửi phản hồi cho các gói tin quản trị (như SSH/Telnet/Ping) đến từ một mạng khác."
    },
    // ========== CÂU 36 ==========
    {
        id: 36,
        question: "(Choose 1 answer) What happens when the transport input ssh command is entered on the switch vty lines?",
        options: [
            "A. The SSH client on the switch is enabled.",
            "B. Communication between the switch and remote users is encrypted.",
            "C. The switch requires a username/password combination for remote access.",
            "D. The switch requires remote connections via a proprietary client software."
        ],
        correct: 1, // B
        type: "single",
        explanation: "Lệnh này chỉ cho phép kết nối qua SSH (không cho Telnet). Do SSH mã hóa dữ liệu, nên kết quả là giao tiếp giữa switch và người dùng từ xa được mã hóa."
    },
    // ========== CÂU 38 ==========
    {
        id: 38,
        question: "(Choose 2 answers) What are two functions of NVRAM?",
        options: [
            "A. to store the routing table",
            "B. to retain contents when power is removed",
            "C. to store the startup configuration file",
            "D. to contain the running configuration file",
            "E. to store the ARP table"
        ],
        correct: [1, 2], // B, C
        type: "multiple",
        explanation: "NVRAM (Non-Volatile RAM) là bộ nhớ không mất dữ liệu khi mất điện, dùng để lưu file cấu hình khởi động (startup-config)."
    },
    // ========== CÂU 39 ==========
    {
        id: 39,
        question: "(Choose 1 answer) What is the broadcast address for network 172.16.16.0/22?",
        options: [
            "A. 172.16.16.255",
            "B. 172.16.20.255",
            "C. 172.16.19.255",
            "D. 172.16.23.255",
            "E. 172.16.255.255"
        ],
        correct: 2, // C
        type: "single",
        explanation: "/22 tương ứng bước nhảy là 4 ở octet thứ 3. Mạng bắt đầu từ 16.0, mạng tiếp theo là 20.0. Vậy broadcast của mạng 16.0 là 172.16.19.255."
    },
    // ========== CÂU 40 ==========
    {
        id: 40,
        question: "(Choose 1 answer) How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?",
        options: [
            "A. 510",
            "B. 512",
            "C. 1022",
            "D. 1024",
            "E. 2046",
            "F. 2048"
        ],
        correct: 2, // C
        type: "single",
        explanation: "Mask 255.255.252.0 là /22. Số bit host = 32 - 22 = 10 bit. Số host = 2^10 - 2 = 1024 - 2 = 1022."
    },
    // ========== CÂU 43 ==========
    {
        id: 43,
        question: "(Choose 1 answer) What function does pressing the Tab key have when entering a command in IOS?",
        options: [
            "A. It aborts the current command and returns to configuration mode.",
            "B. It exits configuration mode and returns to user EXEC mode.",
            "C. It moves the cursor to the beginning of the next line.",
            "D. It completes the remainder of a partially typed word in a command."
        ],
        correct: 3, // D
        type: "single",
        explanation: "Phím Tab dùng để tự động hoàn thành lệnh (auto-complete) khi bạn đã gõ đủ số ký tự duy nhất."
    },
    // ========== CÂU 45 ==========
    {
        id: 45,
        question: "(Choose 1 answer) What command will prevent all unencrypted passwords from displaying in plain text in a configuration file?",
        options: [
            "A. (config)# enable password secret",
            "B. (config)# enable secret Secret_Password",
            "C. (config-line)# password secret",
            "D. (config)# service password-encryption",
            "E. (config)# enable secret Encrypted_Password"
        ],
        correct: 3, // D
        type: "single",
        explanation: "Lệnh `service password-encryption` sẽ mã hóa yếu (Type 7) tất cả các mật khẩu đang ở dạng văn bản rõ (plain text) trong file cấu hình."
    },
    // ========== CÂU 46 ==========
    {
        id: 46,
        question: "(Choose 1 answer) How is SSH different from Telnet?",
        options: [
            "A. SSH makes connections over the network, whereas Telnet is for out-of-band access.",
            "B. SSH provides security to remote sessions by encrypting messages and using user authentication. Telnet is considered insecure...",
            "C. SSH requires the use of the PuTTY terminal emulation program...",
            "D. SSH must be configured over an active network connection, whereas Telnet..."
        ],
        correct: 1, // B
        type: "single",
        explanation: "Sự khác biệt chính là SSH mã hóa toàn bộ phiên làm việc, bảo mật hơn. Telnet truyền dữ liệu (bao gồm mật khẩu) dưới dạng văn bản rõ."
    },
    // ========== CÂU 47 ==========
    {
        id: 47,
        question: "(Choose 1 answer) What will happen if the default gateway address is incorrectly configured on a host?",
        options: [
            "A. The host cannot communicate with other hosts in the local network.",
            "B. The switch will not forward packets initiated by the host.",
            "C. The host will have to use ARP to determine the correct address of the default gateway.",
            "D. The host cannot communicate with hosts in other networks.",
            "E. A ping from the host to 127.0.0.1 would not be successful."
        ],
        correct: 3, // D
        type: "single",
        explanation: "Default gateway là lối ra internet hoặc mạng khác. Nếu sai, host vẫn giao tiếp được trong mạng LAN nhưng không thể ra mạng ngoài."
    },
    // ========== CÂU 48 ==========
    {
        id: 48,
        question: "(Choose 2 answers) What are two potential network problems that can result from ARP operation?",
        options: [
            "A. Manually configuring static ARP associations could facilitate ARP poisoning or MAC address spoofing.",
            "B. On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.",
            "C. Network attackers could manipulate MAC address and IP address mappings in ARP messages...",
            "D. Large numbers of ARP request broadcasts could cause the host MAC address table to overflow...",
            "E. Multiple ARP replies result in the switch MAC address table containing entries..."
        ],
        correct: [1, 2], // B, C
        type: "multiple",
        explanation: "Vấn đề của ARP: 1. Là giao thức Broadcast nên có thể gây nghẽn (B). 2. Không có xác thực nên dễ bị tấn công ARP Spoofing/Poisoning (C)."
    },
    // ========== CÂU 49 ==========
    {
        id: 49,
        question: "(Choose 1 answer) Within a production network, what is the purpose of configuring a switch with a default gateway address?",
        options: [
            "A. Hosts that are connected to the switch can use the switch default gateway address to forward packets...",
            "B. A switch must have a default gateway to be accessible by Telnet and SSH.",
            "C. The default gateway address is used to forward packets originating from the switch to remote networks.",
            "D. It provides a next-hop address for all traffic that flows through the switch."
        ],
        correct: 2, // C
        type: "single",
        explanation: "Default gateway trên switch chỉ dùng cho các gói tin do chính switch tạo ra (quản trị) để gửi đến các mạng khác. Nó không dùng để định tuyến lưu lượng của người dùng."
    },
    // ========== CÂU 50 ==========
    {
        id: 50,
        question: "(Choose 1 answer) What is the effect of using the Router# copy running-config startup-config command on a router?",
        options: [
            "A. The contents of ROM will change.",
            "B. The contents of RAM will change.",
            "C. The contents of NVRAM will change.",
            "D. The contents of flash will change."
        ],
        correct: 2, // C
        type: "single",
        explanation: "Lệnh này lưu cấu hình đang chạy (từ RAM) vào cấu hình khởi động (lưu trong NVRAM) để không bị mất khi khởi động lại."
    }
];