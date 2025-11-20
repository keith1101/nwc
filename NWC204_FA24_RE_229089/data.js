const examData = [
    // ========== CÂU HỎI 1 ==========
    {
        id: 1,
        question: "A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?",
        options: [
            "A. 1 segment",
            "B. 10 segments",
            "C. 100 segments",
            "D. 1000 segments"
        ],
        correct: 1,
        type: "single",
        explanation: "TCP window size là 1000 bytes, mỗi segment 100 bytes. Số segment = 1000 / 100 = 10 segments trước khi cần ACK."
    },

    // ========== CÂU HỎI 2 ==========
    {
        id: 2,
        question: "A client packet is received by a server. The packet has a destination port number of 22. What service is the client requesting?",
        options: [
            "A. SSH",
            "B. DHCP",
            "C. DNS",
            "D. TFTP"
        ],
        correct: 0,
        type: "single",
        explanation: "Port 22 được sử dụng cho SSH (Secure Shell)."
    },

    // ========== CÂU HỎI 3 ==========
    {
        id: 3,
        question: "Which two fields are the same in a TCP and UDP header? (Choose two.)",
        options: [
            "A. Control bits",
            "B. Destination port number",
            "C. Sequence number",
            "D. Source port number",
            "E. Well-known port number"
        ],
        correct: [1, 3],
        type: "multiple",
        explanation: "Cả TCP và UDP header đều có source port number và destination port number."
    },

    // ========== CÂU HỎI 4 ==========
    {
        id: 4,
        question: "How are port numbers used in the TCP/IP encapsulation process?",
        options: [
            "A. Source port numbers and destination port numbers are not necessary when UDP is the transport layer protocol being used for the communication.",
            "B. Source port and destination port numbers are randomly generated.",
            "C. If multiple conversations occur that are using the same service, the source port number is used to track the separate conversations.",
            "D. Destination port numbers are assigned automatically and cannot be changed."
        ],
        correct: 2,
        type: "single",
        explanation: "Số cổng nguồn được sử dụng để theo dõi các cuộc hội thoại riêng biệt khi nhiều cuộc hội thoại sử dụng cùng một dịch vụ."
    },

    // ========== CÂU HỎI 5 ==========
    {
        id: 5,
        question: "Which topology displays networking device layer IP addresses?",
        options: [
            "A. Aerial topology",
            "B. IP address topology",
            "C. Logical topology",
            "D. Physical topology"
        ],
        correct: 2,
        type: "single",
        explanation: "Logical topology hiển thị địa chỉ IP và cách các thiết bị kết nối logic với nhau."
    },

    // ========== CÂU HỎI 6 ==========
    {
        id: 6,
        question: "Which statement describes a characteristic of the frame header fields of the data link layer?",
        options: [
            "A. They all include the flow control and logical connection fields.",
            "B. Ethernet frame header fields contain Layer 3 source and destination addresses.",
            "C. They vary depending on protocols.",
            "D. They include information on user applications."
        ],
        correct: 2,
        type: "single",
        explanation: "Các trường header của frame thay đổi tùy thuộc vào giao thức được sử dụng."
    },

    // ========== CÂU HỎI 7 ==========
    {
        id: 7,
        question: "Which statement describes the half-duplex mode of data transmission?",
        options: [
            "A. Data that is transmitted over the network can only flow in one direction.",
            "B. Data that is transmitted over the network flows in both directions at the same time.",
            "C. Data that is transmitted over the network flows in one direction to many different destinations simultaneously.",
            "D. Data that is transmitted over the network flows in one direction at a time."
        ],
        correct: 3,
        type: "single",
        explanation: "Half-duplex cho phép dữ liệu truyền theo một hướng tại một thời điểm."
    },

    // ========== CÂU HỎI 8 ==========
    {
        id: 8,
        question: "A web client is receiving a response for a web page from a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to decode the received transmission?",
        options: [
            "A. Ethernet, IP, TCP, HTTP",
            "B. HTTP, TCP, IP, Ethernet",
            "C. Ethernet, TCP, IP, HTTP",
            "D. HTTP, Ethernet, IP, TCP"
        ],
        correct: 0,
        type: "single",
        explanation: "Client nhận frame từ tầng vật lý lên: Ethernet (Data Link) → IP (Network) → TCP (Transport) → HTTP (Application)."
    },

    // ========== CÂU HỎI 9 ==========
    {
        id: 9,
        question: "What is the process of dividing a large data stream into smaller pieces prior to transmission?",
        options: [
            "A. Sequencing",
            "B. Duplexing",
            "C. Multiplexing",
            "D. segmentation"
        ],
        correct: 3,
        type: "single",
        explanation: "Segmentation là quá trình chia nhỏ luồng dữ liệu lớn thành các phần nhỏ hơn trước khi truyền."
    },

    // ========== CÂU HỎI 10 ==========
    {
        id: 10,
        question: "UDP and TCP belong to which layer of the TCP/IP protocol?",
        options: [
            "A. Application",
            "B. Transport",
            "C. Internet",
            "D. Network access"
        ],
        correct: 1,
        type: "single",
        explanation: "UDP và TCP thuộc tầng Transport trong mô hình TCP/IP."
    },

    // ========== CÂU HỎI 11 ==========
    {
        id: 11,
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

    // ========== CÂU HỎI 12 ==========
    {
        id: 12,
        question: "Which protocol is used by an FTP client to establish a control connection with the FTP server?",
        options: [
            "A. TCP port 20",
            "B. TCP port 21",
            "C. UDP port 53",
            "D. TCP port 25"
        ],
        correct: 1,
        type: "single",
        explanation: "FTP sử dụng TCP port 21 cho kết nối điều khiển."
    },

    // ========== CÂU HỎI 13 ==========
    {
        id: 13,
        question: "What process does a device use to verify that its IPv6 address is unique on the network?",
        options: [
            "A. DHCPv6",
            "B. SLAAC",
            "C. Neighbor Discovery Protocol (NDP)",
            "D. Duplicate Address Detection (DAD)"
        ],
        correct: 3,
        type: "single",
        explanation: "Duplicate Address Detection (DAD) được sử dụng để xác minh địa chỉ IPv6 là duy nhất trên mạng."
    },

    // ========== CÂU HỎI 14 ==========
    {
        id: 14,
        question: "What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?",
        options: [
            "A. Loopback",
            "B. Global unicast",
            "C. Link-local",
            "D. Unique local"
        ],
        correct: 2,
        type: "single",
        explanation: "Địa chỉ link-local được tự động gán khi IPv6 được kích hoạt trên interface."
    },

    // ========== CÂU HỎI 15 ==========
    {
        id: 15,
        question: "Which of the following techniques use native IPv6 connectivity?",
        options: [
            "A. Dual stack",
            "B. Tunelling",
            "C. Translation",
            "D. All of the above"
        ],
        correct: 0,
        type: "single",
        explanation: "Dual stack sử dụng kết nối IPv6 gốc, trong khi tunneling và translation là các kỹ thuật chuyển tiếp."
    },

    // ========== CÂU HỎI 16 ==========
    {
        id: 16,
        question: "Which address type is not supported in IPv6?",
        options: [
            "A. Multicast",
            "B. Private",
            "C. Unicast",
            "D. Broadcast"
        ],
        correct: 3,
        type: "single",
        explanation: "IPv6 không hỗ trợ broadcast, thay vào đó sử dụng multicast."
    },

    // ========== CÂU HỎI 17 ==========
    {
        id: 17,
        question: "What is the aim of an ARP spoofing attack?",
        options: [
            "A. to flood the network with ARP reply broadcasts",
            "B. to fill switch MAC address tables with bogus addresses",
            "C. to associate IP addresses to the wrong MAC address",
            "D. to overwhelm network hosts with ARP requests"
        ],
        correct: 2,
        type: "single",
        explanation: "ARP spoofing nhằm liên kết địa chỉ IP với địa chỉ MAC sai để chặn lưu lượng mạng."
    },

    // ========== CÂU HỎI 18 ==========
    {
        id: 18,
        question: "Which two types of IPv6 messages are used in place of ARP for address resolution?",
        options: [
            "A. Anycast",
            "B. Broadcast",
            "C. echo reply",
            "D. echo request",
            "E. neighbor solicitation",
            "F. neighbor advertisement"
        ],
        correct: [4, 5],
        type: "multiple",
        explanation: "Trong IPv6, Neighbor Solicitation và Neighbor Advertisement thay thế ARP để phân giải địa chỉ."
    },

    // ========== CÂU HỎI 19 ==========
    {
        id: 19,
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
        explanation: "Trong IPv6, Neighbor Solicitation và Neighbor Advertisement thay thế ARP để phân giải địa chỉ."
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
        explanation: "Ánh xạ địa chỉ IPv4 sang địa chỉ Ethernet được duy trì trong ARP cache."
    },

    // ========== CÂU HỎI 21 ==========
    {
        id: 21,
        question: "What type of network traffic requires QoS?",
        options: [
            "A. email",
            "B. on-line purchasing",
            "C. video conferencing",
            "D. wiki"
        ],
        correct: 2,
        type: "single",
        explanation: "Video conferencing yêu cầu QoS vì cần băng thông ổn định và độ trễ thấp."
    },

    // ========== CÂU HỎI 22 ==========
    {
        id: 22,
        question: "Which type of network topology lets you see the actual location of intermediary devices and cable installation?",
        options: [
            "A. Physical topology",
            "B. Logical topology"
        ],
        correct: 0,
        type: "single",
        explanation: "Physical topology hiển thị vị trí thực tế của các thiết bị và cài đặt cáp."
    },

    // ========== CÂU HỎI 23 ==========
    {
        id: 23,
        question: "Which two devices are intermediary devices? (Choose two)",
        options: [
            "A. Hosts",
            "B. Routers",
            "C. Servers",
            "D. Switches"
        ],
        correct: [1, 3],
        type: "multiple",
        explanation: "Router và Switch là các thiết bị trung gian trong mạng."
    },

    // ========== CÂU HỎI 24 ==========
    {
        id: 24,
        question: "Which part of an Ethernet frame detects errors in the frame?",
        options: [
            "A. Preamble",
            "B. Start of Frame Delimiter",
            "C. Frame Check Sequence"
        ],
        correct: 2,
        type: "single",
        explanation: "Frame Check Sequence (FCS) được sử dụng để phát hiện lỗi trong frame."
    },

    // ========== CÂU HỎI 25 ==========
    {
        id: 25,
        question: "What is the auto-MDIX feature on a switch?",
        options: [
            "A. the automatic configuration of an interface for 10/100/1000 Mb/s operation",
            "B. the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection",
            "C. the automatic configuration of full-duplex operation over a single Ethernet copper or optical cable",
            "D. the ability to turn a switch interface on or off accordingly if an active connection is detected"
        ],
        correct: 1,
        type: "single",
        explanation: "Auto-MDIX tự động phát hiện và điều chỉnh cho straight-through hoặc crossover cable."
    },

    // ========== CÂU HỎI 26 ==========
    {
        id: 26,
        question: "What is the special value assigned to the first 24 bits of a multicast MAC address transporting an IPv4 packet?",
        options: [
            "A. 01-00-5E",
            "B. FF-00-5E",
            "C. 01-5E-00",
            "D. FF-FF-FF"
        ],
        correct: 0,
        type: "single",
        explanation: "24 bit đầu của địa chỉ multicast MAC cho IPv4 là 01-00-5E."
    },

    // ========== CÂU HỎI 27 ==========
    {
        id: 27,
        question: "Which network device has the primary function to send data to a specific destination based on the information found in the MAC address table?",
        options: [
            "A. Hub",
            "B. Router",
            "C. Switch",
            "D. Modem"
        ],
        correct: 2,
        type: "single",
        explanation: "Switch sử dụng bảng MAC address để chuyển tiếp frame đến đích cụ thể."
    },

    // ========== CÂU HỎI 28 ==========
    {
        id: 28,
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
        explanation: "Ping 127.0.0.1 kiểm tra TCP/IP stack trên máy chủ mạng."
    },

    // ========== CÂU HỎI 29 ==========
    {
        id: 29,
        question: "What does the 'Time Exceeded' ICMP message indicate?",
        options: [
            "A. The destination host is down",
            "B. The packet's TTL has reached zero",
            "C. The source address is unreachable",
            "D. The network is congested"
        ],
        correct: 1,
        type: "single",
        explanation: "ICMP 'Time Exceeded' cho biết TTL của gói tin đã đạt đến 0."
    },

    // ========== CÂU HỎI 30 ==========
    {
        id: 30,
        question: "A user executes a traceroute over IPv6. At what point would a router in the path to the destination device drop the packet?",
        options: [
            "A. when the value of the Hop Limit field reaches 255",
            "B. when the value of the Hop Limit field reaches zero",
            "C. when the router receives an ICMP time exceeded message",
            "D. when the target host responds with an ICMP echo reply message"
        ],
        correct: 1,
        type: "single",
        explanation: "Router sẽ drop packet khi Hop Limit field trong IPv6 đạt đến 0."
    },

    // ========== CÂU HỎI 31 ==========
    {
        id: 31,
        question: "Which two statements describe the characteristics of fiber-optic cabling? (Choose two.)",
        options: [
            "A. Fiber-optic cabling does not conduct electricity.",
            "B. Fiber-optic cabling has high signal loss.",
            "C. Fiber-optic cabling is primarily used as backbone cabling.",
            "D. Multimode fiber-optic cabling carries signals from multiple sending devices.",
            "E. Fiber-optic cabling uses LEDs for single-mode cables and laser technology for multimode cables."
        ],
        correct: [0, 2],
        type: "multiple",
        explanation: "Cáp quang không dẫn điện và chủ yếu được sử dụng làm cáp backbone."
    },

    // ========== CÂU HỎI 32 ==========
    {
        id: 32,
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
        explanation: "Lượng lưu lượng, loại lưu lượng và độ trễ đều ảnh hưởng đến throughput."
    },

    // ========== CÂU HỎI 33 ==========
    {
        id: 33,
        question: "Which of these is the name for the capacity of a medium to carry data?",
        options: [
            "A. Bandwidth",
            "B. Throughput",
            "C. Goodput"
        ],
        correct: 0,
        type: "single",
        explanation: "Bandwidth là khả năng của phương tiện truyền dẫn để mang dữ liệu."
    },

    // ========== CÂU HỎI 34 ==========
    {
        id: 34,
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

    // ========== CÂU HỎI 35 ==========
    {
        id: 35,
        question: "What are two functions of NVRAM? (Choose two.)",
        options: [
            "A. to store the routing table",
            "B. to retain contents when power is removed",
            "C. to store the startup configuration file",
            "D. to contain the running configuration file",
            "E. to store the ARP table"
        ],
        correct: [1, 2],
        type: "multiple",
        explanation: "NVRAM giữ lại nội dung khi mất điện và lưu trữ file cấu hình khởi động."
    },

    // ========== CÂU HỎI 36 ==========
    {
        id: 36,
        question: "What is stored in the NVRAM of a Cisco router?",
        options: [
            "A. The Cisco IOS",
            "B. The running configuration",
            "C. The bootup instructions",
            "D. The startup configuration"
        ],
        correct: 3,
        type: "single",
        explanation: "NVRAM lưu trữ startup configuration của router."
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
            "E. Exit privileged EXEC mode and press Enter."
        ],
        correct: 4,
        type: "single",
        explanation: "Thoát khỏi privileged EXEC mode và nhấn Enter là cách nhanh nhất để kiểm tra banner."
    },

    // ========== CÂU HỎI 38 ==========
    {
        id: 38,
        question: "What is the loopback address used for in IPv4 networking?",
        options: [
            "A. To route packets to a different network",
            "B. To test if the TCP/IP stack is functioning correctly",
            "C. To identify the default gateway",
            "D. To assign a dynamic IP address"
        ],
        correct: 1,
        type: "single",
        explanation: "Địa chỉ loopback (127.0.0.1) được sử dụng để kiểm tra TCP/IP stack."
    },

    // ========== CÂU HỎI 39 ==========
    {
        id: 39,
        question: "What is the prefix length notation for the subnet mask 255.255.255.224?",
        options: [
            "A. /28",
            "B. /27",
            "C. /26",
            "D. /25"
        ],
        correct: 1,
        type: "single",
        explanation: "255.255.255.224 có 27 bit network, tương đương với /27."
    },

    // ========== CÂU HỎI 40 ==========
    {
        id: 40,
        question: "What is the main purpose of a subnet mask in IPv4 addressing?",
        options: [
            "A. To identify the gateway of the network",
            "B. To determine the network and host portions of an IP address",
            "C. To provide security by masking IP addresses",
            "D. To route packets between networks"
        ],
        correct: 1,
        type: "single",
        explanation: "Subnet mask xác định phần network và host của địa chỉ IP."
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
        explanation: "Để tạo 4 subnet từ /24, cần 2 bit subnet. Subnet mask /26 (255.255.255.192). Subnet thứ hai: 192.168.1.64/26."
    },

    // ========== CÂU HỎI 42 ==========
    {
        id: 42,
        question: "Which access method would be the most appropriate in-band access to the IOS over a network connection?",
        options: [
            "A. Console",
            "B. Telnet/SSH",
            "C. Aux"
        ],
        correct: 1,
        type: "single",
        explanation: "Telnet/SSH là phương thức in-band để truy cập IOS qua kết nối mạng."
    },

    // ========== CÂU HỎI 43 ==========
    {
        id: 43,
        question: "An administrator is configuring a switch console port with a password. In what order will the administrator travel through the IOS modes of operation in order to reach the mode in which the configuration commands will be entered?",
        options: [
            "A. A5-B2-C4-D3",
            "B. A1-B2-C3-D4",
            "C. A2-B1-C4-D3",
            "D. A5-B1-C2-D3"
        ],
        correct: 0,
        type: "single",
        explanation: "User EXEC (A5) → Privileged EXEC (B2) → Global config (C4) → Line config (D3)."
    },

    // ========== CÂU HỎI 44 ==========
    {
        id: 44,
        question: "Why would a Layer 2 switch need an IP address?",
        options: [
            "A. to enable the switch to send broadcast frames to attached PCs",
            "B. to enable the switch to function as a default gateway",
            "C. to enable the switch to be managed remotely",
            "D. to enable the switch to receive frames from attached PCs"
        ],
        correct: 2,
        type: "single",
        explanation: "Switch Layer 2 cần địa chỉ IP để được quản lý từ xa."
    },

    // ========== CÂU HỎI 45 ==========
    {
        id: 45,
        question: "How is the privileged EXEC mode access secured on a switch?",
        options: [
            "A. enable class",
            "B. secret class",
            "C. enable secret cisco@12345",
            "D. service password-encryption"
        ],
        correct: 2,
        type: "single",
        explanation: "Lệnh 'enable secret' được sử dụng để bảo mật truy cập privileged EXEC mode."
    },

    // ========== CÂU HỎI 46 ==========
    {
        id: 46,
        question: "What are the two most commonly referenced fields in an IPv4 packet header that indicate where the packet is coming from and where it is going? (Choose two.)",
        options: [
            "A. Destination IP address",
            "B. Protocol",
            "C. Time to live",
            "D. Differentiated Service (DS)",
            "E. Source IP address"
        ],
        correct: [0, 4],
        type: "multiple",
        explanation: "Source IP address và Destination IP address chỉ ra nguồn và đích của gói tin."
    },

    // ========== CÂU HỎI 47 ==========
    {
        id: 47,
        question: "What destination MAC address would be included in a frame sent from a source device to a destination device on a remote local network?",
        options: [
            "A. A broadcast MAC address of FF-FF-FF-FF-FF-FF.",
            "B. The MAC address of the destination device.",
            "C. The MAC address of the local router interface."
        ],
        correct: 2,
        type: "single",
        explanation: "Khi gửi đến mạng từ xa, frame sẽ có địa chỉ MAC của interface router cục bộ."
    },

    // ========== CÂU HỎI 48 ==========
    {
        id: 48,
        question: "When transporting data from real-time applications, such as streaming audio and video, which field in the IPv6 header can be used to inform the routers and switches to maintain the same path for the packets in the same conversation?",
        options: [
            "A. Next Header",
            "B. Flow Label",
            "C. Traffic Class",
            "D. Differentiated Services"
        ],
        correct: 1,
        type: "single",
        explanation: "Flow Label trong IPv6 header được sử dụng để duy trì cùng một đường đi cho các gói trong cùng cuộc hội thoại."
    },

    // ========== CÂU HỎI 49 ==========
    {
        id: 49,
        question: "Within a production network, what is the purpose of configuring a switch with a default gateway address?",
        options: [
            "A. Hosts that are connected to the switch can use the switch default gateway address to forward packets to a remote destination.",
            "B. A switch must have a default gateway to be accessible by Telnet and SSH.",
            "C. The default gateway address is used to forward packets originating from the switch to remote networks.",
            "D. It provides a next-hop address for all traffic that flows through the switch."
        ],
        correct: 2,
        type: "single",
        explanation: "Default gateway trên switch được sử dụng để chuyển tiếp các gói tin bắt nguồn từ switch đến các mạng từ xa."
    },

    // ========== CÂU HỎI 50 ==========
    {
        id: 50,
        question: "What is the primary purpose of the ICMP protocol?",
        options: [
            "A. To route packets across different networks",
            "B. To provide feedback about issues related to IP packet processing",
            "C. To encrypt data before transmission",
            "D. To assign IP addresses to devices"
        ],
        correct: 1,
        type: "single",
        explanation: "ICMP cung cấp phản hồi về các vấn đề liên quan đến xử lý gói tin IP."
    }
];