const examData=[
    {
        "id": 1,
        "question": "(Choose 3 answers) Which three fields are used in a UDP segment header?",
        "options": [
            "A. Window Size",
            "B. Length",
            "C. Source Port",
            "D. Acknowledgment Number",
            "E. Checksum"
        ],
        "correct": [1, 2, 4],
        "type": "multiple",
        "explanation": "UDP header rất đơn giản, chỉ gồm 4 trường: Source Port, Destination Port, Length, và Checksum. Window Size và Acknowledgment Number thuộc về TCP header."
    },
    {
        "id": 2,
        "question": "(Choose 1 answer) Which factor determines TCP window size?",
        "options": [
            "A. the amount of data to be transmitted",
            "B. the number of services included in the TCP segment",
            "C. the amount of data the destination can process at one time",
            "D. the amount of data the source is capable of sending at one time"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Window size được xác định bởi phía nhận (destination) để báo cho phía gửi biết lượng dữ liệu nó có thể xử lý mà không bị tràn bộ đệm (Flow Control)."
    },
    {
        "id": 3,
        "question": "(Choose 3 answers) What are three responsibilities of the transport layer?",
        "options": [
            "A. meeting the reliability requirements of applications, if any",
            "B. multiplexing multiple communication streams from many users or applications on the same network",
            "C. identifying the applications and services on the client and server that should handle transmitted data",
            "D. directing packets towards the destination network",
            "E. formatting data into a compatible form for receipt by the destination devices"
        ],
        "correct": [0, 1, 2],
        "type": "multiple",
        "explanation": "Transport layer chịu trách nhiệm về độ tin cậy (TCP), ghép kênh (multiplexing) và xác định ứng dụng qua số hiệu cổng (Ports). Định tuyến (D) là Layer 3, Định dạng dữ liệu (E) là Presentation Layer."
    },
    {
        "id": 4,
        "question": "(Choose 1 answer) What does a client do when it has UDP datagrams to send?",
        "options": [
            "A. It just sends the datagrams.",
            "B. It queries the server to see if it is ready to receive data.",
            "C. It sends a simplified three-way handshake to the server.",
            "D. It sends to the server a segment with the SYN flag set to synchronize the conversation."
        ],
        "correct": 0,
        "type": "single",
        "explanation": "UDP là giao thức phi kết nối (connectionless), nó không thiết lập bắt tay (handshake) mà chỉ gửi dữ liệu ngay lập tức."
    },
    {
        "id": 5,
        "question": "(Choose 1 answer) When 2 or more bits in a data unit have been changed during the transmission, the error is called:",
        "options": [
            "A. random error",
            "B. burst error",
            "C. inverted error",
            "D. double error"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Single-bit error là sai 1 bit. Burst error là khi 2 hoặc nhiều bit bị lỗi trong một đơn vị dữ liệu."
    },
    {
        "id": 6,
        "question": "(Choose 1 answer) What is the function of the CRC value that is found in the FCS field of a frame?",
        "options": [
            "A. to verify the integrity of the received frame",
            "B. to verify the physical address in the frame",
            "C. to verify the logical address in the frame",
            "D. to compute the checksum header for the data field in the frame"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "CRC (Cyclic Redundancy Check) nằm trong trường FCS (Frame Check Sequence) dùng để kiểm tra tính toàn vẹn của frame, phát hiện lỗi xảy ra trong quá trình truyền."
    },
    {
        "id": 7,
        "question": "(Choose 1 answer) What is contained in the trailer of a data-link frame?",
        "options": [
            "A. logical address",
            "B. physical address",
            "C. data",
            "D. error detection"
        ],
        "correct": 3,
        "type": "single",
        "explanation": "Trailer (đuôi) của frame chứa FCS, phục vụ cho việc phát hiện lỗi (error detection)."
    },
    {
        "id": 8,
        "question": "(Choose 1 answer) Which statement accurately describes a TCP/IP encapsulation process when a PC is sending data to the network?",
        "options": [
            "A. Data is sent from the internet layer to the network access layer.",
            "B. Packets are sent from the network access layer to the transport layer.",
            "C. Segments are sent from the transport layer to the internet layer.",
            "D. Frames are sent from the network access layer to the internet layer."
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Quá trình đóng gói đi từ trên xuống: Transport (tạo Segment) gửi xuống Internet (tạo Packet)."
    },
    {
        "id": 9,
        "question": "(Choose 1 answer) What method can be used by two computers to ensure that packets are not dropped because too much data is being sent too quickly?",
        "options": [
            "A. encapsulation",
            "B. flow control",
            "C. access method",
            "D. response timeout"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Flow control (Điều khiển luồng) giúp điều chỉnh tốc độ truyền dữ liệu để bên nhận kịp xử lý."
    },
    {
        "id": 10,
        "question": "(Choose 1 answer) Which name is assigned to the transport layer PDU?",
        "options": [
            "A. bits",
            "B. data",
            "C. frame",
            "D. packet",
            "E. segments"
        ],
        "correct": 4,
        "type": "single",
        "explanation": "PDU của Transport layer là Segment (đối với TCP) hoặc Datagram (đối với UDP). Các lớp khác: Bits (Physical), Frame (Data Link), Packet (Network)."
    },
    {
        "id": 11,
        "question": "(Choose 2 answers) Which two protocols may devices use in the application process that sends email?",
        "options": [
            "A. HTTP",
            "B. SMTP",
            "C. POP",
            "D. IMAP",
            "E. DNS",
            "F. POP3"
        ],
        "correct": [1, 4],
        "type": "multiple",
        "explanation": "SMTP được dùng để GỬI email. DNS cần thiết để phân giải tên miền máy chủ mail (MX record). POP/IMAP dùng để NHẬN email."
    },
    {
        "id": 12,
        "question": "(Choose 1 answer) A network administrator has received the IPv6 prefix 2001:DB8::/48... how many subnets can the administrator create from the /48 prefix?",
        "options": [
            "A. 16",
            "B. 256",
            "C. 4096",
            "D. 65536"
        ],
        "correct": 3,
        "type": "single",
        "explanation": "IPv6 subnet chuẩn thường là /64. Từ /48 đến /64 có 16 bit dành cho Subnet ID. Số lượng subnet = 2^16 = 65,536."
    },
    {
        "id": 13,
        "question": "(Choose 2 answers) What are two types of IPv6 unicast addresses?",
        "options": [
            "A. multicast",
            "B. loopback",
            "C. link-local",
            "D. anycast",
            "E. broadcast"
        ],
        "correct": [1, 2],
        "type": "multiple",
        "explanation": "Các loại địa chỉ Unicast trong IPv6 bao gồm: Global Unicast, Link-local, Loopback, Unique Local... Multicast và Anycast là các loại địa chỉ riêng biệt."
    },
    {
        "id": 14,
        "question": "(Choose 1 answer) What is used in the EUI-64 process to create an IPv6 interface ID on an IPv6 enabled interface?",
        "options": [
            "A. the MAC address of the IPv6 enabled interface",
            "B. a randomly generated 64-bit hexadecimal address",
            "C. an IPv6 address that is provided by a DHCPv6 server",
            "D. an IPv4 address that is configured on the interface"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Quy trình EUI-64 lấy địa chỉ MAC (48-bit), chèn FF:FE vào giữa và đảo bit thứ 7 để tạo ra Interface ID 64-bit."
    },
    {
        "id": 15,
        "question": "(Choose 1 answer) Where are IPv4 address to Layer 2 Ethernet address mappings maintained on a host computer?",
        "options": [
            "A. neighbor table",
            "B. ARP cache",
            "C. routing table",
            "D. MAC address table"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Trên máy host (PC), bảng ánh xạ từ IP sang MAC được lưu trong ARP cache (hoặc ARP table)."
    },
    {
        "id": 16,
        "question": "(Choose 2 answers) Which two types of IPv6 messages are used in place of ARP for address resolution?",
        "options": [
            "A. anycast",
            "B. broadcast",
            "C. echo reply",
            "D. echo request",
            "E. neighbor solicitation",
            "F. neighbor advertisement"
        ],
        "correct": [4, 5],
        "type": "multiple",
        "explanation": "IPv6 không dùng ARP mà dùng giao thức Neighbor Discovery (ND) với 2 loại message ICMPv6 là Neighbor Solicitation (NS) và Neighbor Advertisement (NA)."
    },
    {
        "id": 17,
        "question": "(Choose 1 answer) What term describes a type of network used by people who work from home or from a small remote office?",
        "options": [
            "A. SOHO network",
            "B. BYOD",
            "C. quality of service",
            "D. converged network"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "SOHO viết tắt của Small Office Home Office."
    },
    {
        "id": 18,
        "question": "(Choose 1 answer) A networking technician... accidentally sets up the wireless network so that patients can see the medical records data of other patients. Which characteristic is violated?",
        "options": [
            "A. fault tolerance",
            "B. scalability",
            "C. security",
            "D. Quality of Service (QoS)",
            "E. reliability"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Việc dữ liệu nhạy cảm bị lộ cho người không được phép truy cập là vi phạm tính Bảo mật (Security/Confidentiality)."
    },
    {
        "id": 19,
        "question": "(Choose 2 answers) What are two examples of the cut-through switching method?",
        "options": [
            "A. store-and-forward switching",
            "B. fast-forward switching",
            "C. CRC switching",
            "D. fragment-free switching",
            "E. QOS switching"
        ],
        "correct": [1, 3],
        "type": "multiple",
        "explanation": "Cut-through switching có 2 biến thể chính: Fast-forward (chuyển ngay khi đọc xong MAC đích) và Fragment-free (đọc xong 64 bytes đầu rồi chuyển)."
    },
    {
        "id": 20,
        "question": "(Choose 1 answer) What is the purpose of the FCS field in a frame?",
        "options": [
            "A. to obtain the MAC address of the sending node",
            "B. to verify the logical address of the sending node",
            "C. to compute the CRC header for the data field",
            "D. to determine if errors occurred in the transmission and reception"
        ],
        "correct": 3,
        "type": "single",
        "explanation": "FCS chứa giá trị CRC dùng để xác định xem frame có bị lỗi trong quá trình truyền hay không."
    },
    {
        "id": 21,
        "question": "(Choose 2 answers) What are two actions performed by a Cisco switch?",
        "options": [
            "A. building a routing table that is based on the first IP address in the frame header",
            "B. using the source MAC addresses of frames to build and maintain a MAC address table",
            "C. forwarding frames with unknown destination IP addresses to the default gateway",
            "D. utilizing the MAC address table to forward frames via the destination MAC address",
            "E. examining the destination MAC address to add new entries to the MAC address table"
        ],
        "correct": [1, 3],
        "type": "multiple",
        "explanation": "Switch học địa chỉ MAC Nguồn (Source MAC) để xây dựng bảng MAC (B) và dùng bảng đó để chuyển frame đến đúng cổng dựa trên MAC Đích (Destination MAC) (D)."
    },
    {
        "id": 22,
        "question": "(Choose 1 answer) What is the purpose of ICMP messages?",
        "options": [
            "A. to inform routers about network topology changes",
            "B. to ensure the delivery of an IP packet",
            "C. to provide feedback of IP packet transmissions",
            "D. to monitor the process of a domain name to IP address resolution"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "ICMP được dùng để cung cấp phản hồi về các vấn đề liên quan đến việc truyền gói tin IP (ví dụ: Host Unreachable, Time Exceeded)."
    },
    {
        "id": 23,
        "question": "(Choose 1 answer) Which ICMPv6 message is sent when the IPv6 hop limit field of a packet is decremented to zero?",
        "options": [
            "A. network unreachable",
            "B. time exceeded",
            "C. protocol unreachable",
            "D. port unreachable"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Khi Hop Limit giảm về 0, router sẽ huỷ gói tin và gửi thông báo ICMPv6 Time Exceeded về cho nguồn."
    },
    {
        "id": 24,
        "question": "(Choose 1 answer) Which protocol is used by the traceroute command to send and receive echo-requests and echo-replies?",
        "options": [
            "A. SNMP",
            "B. ICMP",
            "C. Telnet",
            "D. TCP"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Traceroute (và Ping) sử dụng giao thức ICMP để gửi Echo Request và nhận Echo Reply (hoặc Time Exceeded)."
    },
    {
        "id": 25,
        "question": "(Choose 1 answer) What is a primary role of the Physical layer in transmitting data on the network?",
        "options": [
            "A. create the signals that represent the bits in each frame on to the media",
            "B. provide physical addressing to the devices",
            "C. determine the path packets take through the network",
            "D. control data access to the media"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Lớp Vật lý (Physical Layer) chịu trách nhiệm mã hóa các bit nhị phân thành các tín hiệu (điện, quang, sóng) để truyền trên môi trường truyền dẫn."
    },
    {
        "id": 26,
        "question": "(Choose 1 answer) The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect?",
        "options": [
            "A. The switch will have a management interface with the address 172.16.100.1.",
            "B. The switch can be remotely managed from a host on another network.",
            "C. The switch can communicate with other hosts on the 172.16.100.0 network.",
            "D. The switch is limited to sending and receiving frames to and from the gateway 172.16.100.1."
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Switch Layer 2 cần default gateway để có thể gửi phản hồi cho các gói tin quản trị (như SSH/Telnet/Ping) đến từ một mạng khác."
    },
    {
        "id": 27,
        "question": "(Choose 1 answer) What happens when the transport input ssh command is entered on the switch vty lines?",
        "options": [
            "A. The SSH client on the switch is enabled.",
            "B. Communication between the switch and remote users is encrypted.",
            "C. The switch requires a username/password combination for remote access.",
            "D. The switch requires remote connections via a proprietary client software."
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Lệnh này chỉ cho phép kết nối qua SSH (không cho Telnet). Do SSH mã hóa dữ liệu, nên kết quả là giao tiếp giữa switch và người dùng từ xa được mã hóa."
    },
    {
        "id": 28,
        "question": "(Choose 2 answers) What are two functions of NVRAM?",
        "options": [
            "A. to store the routing table",
            "B. to retain contents when power is removed",
            "C. to store the startup configuration file",
            "D. to contain the running configuration file",
            "E. to store the ARP table"
        ],
        "correct": [1, 2],
        "type": "multiple",
        "explanation": "NVRAM (Non-Volatile RAM) là bộ nhớ không mất dữ liệu khi mất điện, dùng để lưu file cấu hình khởi động (startup-config)."
    },
    {
        "id": 29,
        "question": "(Choose 1 answer) What is the broadcast address for network 172.16.16.0/22?",
        "options": [
            "A. 172.16.16.255",
            "B. 172.16.20.255",
            "C. 172.16.19.255",
            "D. 172.16.23.255",
            "E. 172.16.255.255"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "/22 tương ứng bước nhảy là 4 ở octet thứ 3. Mạng bắt đầu từ 16.0, mạng tiếp theo là 20.0. Vậy broadcast của mạng 16.0 là 172.16.19.255."
    },
    {
        "id": 30,
        "question": "(Choose 1 answer) How many host addresses are available on the network 172.16.128.0 with a subnet mask of 255.255.252.0?",
        "options": [
            "A. 510",
            "B. 512",
            "C. 1022",
            "D. 1024",
            "E. 2046",
            "F. 2048"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Mask 255.255.252.0 là /22. Số bit host = 32 - 22 = 10 bit. Số host = 2^10 - 2 = 1024 - 2 = 1022."
    },
    {
        "id": 31,
        "question": "(Choose 1 answer) What function does pressing the Tab key have when entering a command in IOS?",
        "options": [
            "A. It aborts the current command and returns to configuration mode.",
            "B. It exits configuration mode and returns to user EXEC mode.",
            "C. It moves the cursor to the beginning of the next line.",
            "D. It completes the remainder of a partially typed word in a command."
        ],
        "correct": 3,
        "type": "single",
        "explanation": "Phím Tab dùng để tự động hoàn thành lệnh (auto-complete) khi bạn đã gõ đủ số ký tự duy nhất."
    },
    {
        "id": 32,
        "question": "(Choose 1 answer) What command will prevent all unencrypted passwords from displaying in plain text in a configuration file?",
        "options": [
            "A. (config)# enable password secret",
            "B. (config)# enable secret Secret_Password",
            "C. (config-line)# password secret",
            "D. (config)# service password-encryption",
            "E. (config)# enable secret Encrypted_Password"
        ],
        "correct": 3,
        "type": "single",
        "explanation": "Lệnh `service password-encryption` sẽ mã hóa yếu (Type 7) tất cả các mật khẩu đang ở dạng văn bản rõ (plain text) trong file cấu hình."
    },
    {
        "id": 33,
        "question": "(Choose 1 answer) How is SSH different from Telnet?",
        "options": [
            "A. SSH makes connections over the network, whereas Telnet is for out-of-band access.",
            "B. SSH provides security to remote sessions by encrypting messages and using user authentication. Telnet is considered insecure...",
            "C. SSH requires the use of the PuTTY terminal emulation program...",
            "D. SSH must be configured over an active network connection, whereas Telnet..."
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Sự khác biệt chính là SSH mã hóa toàn bộ phiên làm việc, bảo mật hơn. Telnet truyền dữ liệu (bao gồm mật khẩu) dưới dạng văn bản rõ."
    },
    {
        "id": 34,
        "question": "(Choose 1 answer) What will happen if the default gateway address is incorrectly configured on a host?",
        "options": [
            "A. The host cannot communicate with other hosts in the local network.",
            "B. The switch will not forward packets initiated by the host.",
            "C. The host will have to use ARP to determine the correct address of the default gateway.",
            "D. The host cannot communicate with hosts in other networks.",
            "E. A ping from the host to 127.0.0.1 would not be successful."
        ],
        "correct": 3,
        "type": "single",
        "explanation": "Default gateway là lối ra internet hoặc mạng khác. Nếu sai, host vẫn giao tiếp được trong mạng LAN nhưng không thể ra mạng ngoài."
    },
    {
        "id": 35,
        "question": "(Choose 2 answers) What are two potential network problems that can result from ARP operation?",
        "options": [
            "A. Manually configuring static ARP associations could facilitate ARP poisoning or MAC address spoofing.",
            "B. On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.",
            "C. Network attackers could manipulate MAC address and IP address mappings in ARP messages...",
            "D. Large numbers of ARP request broadcasts could cause the host MAC address table to overflow...",
            "E. Multiple ARP replies result in the switch MAC address table containing entries..."
        ],
        "correct": [1, 2],
        "type": "multiple",
        "explanation": "Vấn đề của ARP: 1. Là giao thức Broadcast nên có thể gây nghẽn (B). 2. Không có xác thực nên dễ bị tấn công ARP Spoofing/Poisoning (C)."
    },
    {
        "id": 36,
        "question": "(Choose 1 answer) Within a production network, what is the purpose of configuring a switch with a default gateway address?",
        "options": [
            "A. Hosts that are connected to the switch can use the switch default gateway address to forward packets...",
            "B. A switch must have a default gateway to be accessible by Telnet and SSH.",
            "C. The default gateway address is used to forward packets originating from the switch to remote networks.",
            "D. It provides a next-hop address for all traffic that flows through the switch."
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Default gateway trên switch chỉ dùng cho các gói tin do chính switch tạo ra (quản trị) để gửi đến các mạng khác. Nó không dùng để định tuyến lưu lượng của người dùng."
    },
    {
        "id": 37,
        "question": "(Choose 1 answer) What is the effect of using the Router# copy running-config startup-config command on a router?",
        "options": [
            "A. The contents of ROM will change.",
            "B. The contents of RAM will change.",
            "C. The contents of NVRAM will change.",
            "D. The contents of flash will change."
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Lệnh này lưu cấu hình đang chạy (từ RAM) vào cấu hình khởi động (lưu trong NVRAM) để không bị mất khi khởi động lại."
    },
    {
        "id": 38,
        "question": "Which three statements characterize UDP? (Choose three.)",
        "options": [
            "A. UDP provides basic connectionless transport layer functions.",
            "B. UDP provides connection-oriented, fast transport of data at Layer 3.",
            "C. UDP relies on application layer protocols for error detection.",
            "D. UDP is a low overhead protocol that does not provide sequencing or flow control mechanisms.",
            "E. UDP relies on IP for error detection and recovery.",
            "F. UDP provides sophisticated flow control mechanisms."
        ],
        "correct": [0, 2, 3],
        "type": "multiple",
        "explanation": "UDP là giao thức không kết nối, ít overhead, không cung cấp cơ chế sequencing hoặc flow control, và dựa vào tầng ứng dụng để phát hiện lỗi."
    },
    {
        "id": 39,
        "question": "Which three application layer protocols use TCP? (Choose three.)",
        "options": [
            "A. SMTP",
            "B. FTP",
            "C. SNMP",
            "D. HTTP",
            "E. TFTP",
            "F. DHCP"
        ],
        "correct": [0, 1, 3],
        "type": "multiple",
        "explanation": "SMTP, FTP, và HTTP sử dụng TCP vì chúng yêu cầu độ tin cậy. TFTP và DHCP sử dụng UDP, SNMP có thể sử dụng cả hai."
    },
    {
        "id": 40,
        "question": "Which three basic parts are common to all frame types supported by the data link layer? (Choose three.)",
        "options": [
            "A. header",
            "B. type field",
            "C. MTU size",
            "D. data",
            "E. trailer",
            "F. CRC value"
        ],
        "correct": [0, 3, 4],
        "type": "multiple",
        "explanation": "Tất cả các frame types đều có header, data, và trailer. CRC value là một phần của trailer."
    },
    {
        "id": 41,
        "question": "Which statement is true about the CSMA/CD access method that is used in Ethernet?",
        "options": [
            "A. When a device hears a carrier signal and transmits, a collision cannot occur.",
            "B. A jamming signal causes only devices that caused the collision to execute a backoff algorithm.",
            "C. All network devices must listen before transmitting.",
            "D. Devices involved in a collision get priority to transmit after the backoff period."
        ],
        "correct": 2,
        "type": "single",
        "explanation": "CSMA/CD yêu cầu tất cả thiết bị mạng phải lắng nghe trước khi truyền để tránh xung đột."
    },
    {
        "id": 42,
        "question": "Which two statements describe the services provided by the data link layer? (Choose two.)",
        "options": [
            "A. It defines the end-to-end delivery addressing scheme.",
            "B. It maintains the path between the source and destination devices during the data transmission.",
            "C. It manages the access of frames to the network media.",
            "D. It provides reliable delivery through link establishment and flow control.",
            "E. It ensures that application data will be transmitted according to the prioritization.",
            "F. It packages various Layer 3 PDUs into a frame format that is compatible with the network interface."
        ],
        "correct": [2, 5],
        "type": "multiple",
        "explanation": "Tầng liên kết dữ liệu quản lý truy cập frame vào phương tiện mạng và đóng gói các PDU của Layer 3 vào định dạng frame tương thích."
    },
    {
        "id": 43,
        "question": "Refer to the exhibit. ServerB is attempting to contact HostA. Which two statements correctly identify the addressing that ServerB will generate in the process? (Choose two.)",
        "options": [
            "A. ServerB will generate a packet with the destination IP address of RouterB.",
            "B. ServerB will generate a frame with the destination MAC address of SwitchB.",
            "C. ServerB will generate a packet with the destination IP address of RouterA.",
            "D. ServerB will generate a frame with the destination MAC address of RouterB.",
            "E. ServerB will generate a packet with the destination IP address of HostA.",
            "F. ServerB will generate a frame with the destination MAC address of RouterA."
        ],
        "correct": [3, 4],
        "type": "multiple",
        "explanation": "ServerB sẽ tạo packet với địa chỉ IP đích là HostA và frame với địa chỉ MAC đích là RouterB (gateway)."
    },
    {
        "id": 44,
        "question": "Which statement is correct about network protocols?",
        "options": [
            "A. Network protocols define the type of hardware that is used and how it is mounted in racks.",
            "B. They define how messages are exchanged between the source and the destination.",
            "C. They all function in the network access layer of TCP/IP.",
            "D. They are only required for exchange of messages between devices on remote networks."
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Giao thức mạng định nghĩa cách thức trao đổi thông điệp giữa nguồn và đích."
    },
    {
        "id": 45,
        "question": "Which address is a valid IPv6 link-local unicast address?",
        "options": [
            "A. FEC8::1::FFFF",
            "B. FD80::1:1234",
            "C. FE80::1:4545:6578:ABC1",
            "D. FEOA::100:7788:998F",
            "E. FC90:5678:4251:FFFF"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Địa chỉ link-local IPv6 bắt đầu với prefix FE80::/10. FE80::1:4545:6578:ABC1 là địa chỉ link-local hợp lệ."
    },
    {
        "id": 46,
        "question": "Match the IPv6 address with the IPv6 address type.",
        "options": [
            "A. link-local",
            "B. solicited node multicast",
            "C. global unicast",
            "D. all node multicast",
            "E. loopback",
            "F. unique local"
        ],
        "correct": [2, 3, 4, 1],
        "type": "matching",
        "explanation": "2001:DB8::BAF:3F57:FE94 - global unicast, FF02::1 - all node multicast, ::1 - loopback, FF02::1:FFAE:F85F - solicited node multicast."
    },
    {
        "id": 47,
        "question": "Three methods allow IPv6 and IPv4 to co-exist. Match each method with its description.",
        "options": [
            "A. The IPv4 packets and IPv6 packets coexist in the same network.",
            "B. The IPv6 packet is transported inside an IPv4 packet.",
            "C. IPv6 packets are converted into IPv4 packets, and vice versa."
        ],
        "correct": [3, 2, 1],
        "type": "matching",
        "explanation": "Dual-stack (A), Translation (C), Tunneling (B)."
    },
    {
        "id": 48,
        "question": "Given IPv6 address prefix 2001:db8::/48, what will be the last subnet that is created if the subnet prefix is changed to /52?",
        "options": [
            "A. 2001:db8:0:f00::/52",
            "B. 2001:db8:0:8000::/52",
            "C. 2001:db8:0:f::/52",
            "D. 2001:db8:0:f000::/52"
        ],
        "correct": 3,
        "type": "single",
        "explanation": "Với prefix /52, có 4 bit subnet (52-48=4). Subnet cuối cùng sẽ có giá trị 15 (hex F) ở vị trí nibble thứ 4: 2001:db8:0:f000::/52."
    },
    {
        "id": 49,
        "question": "What type of IPv6 address is FE80::1?",
        "options": [
            "A. loopback",
            "B. link-local",
            "C. multicast",
            "D. global unicast"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "FE80::1 là địa chỉ link-local, được sử dụng cho giao tiếp trên cùng một link mạng."
    },
    {
        "id": 50,
        "question": "What property of ARP causes cached IP-to-MAC mappings to remain in memory longer?",
        "options": [
            "A. Entries in an ARP table are time-stamped and are purged after the timeout expires.",
            "B. A static IP-to-MAC address entry can be entered manually into an ARP table.",
            "C. The type field 0x806 appears in the header of the Ethernet frame.",
            "D. The port-to-MAC address table on a switch has the same entries as the ARP table on the switch."
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Các mục nhập ARP tĩnh được nhập thủ công vào bảng ARP sẽ tồn tại lâu hơn trong bộ nhớ vì chúng không bị xóa sau khi hết timeout."
    },
    {
        "id": 51,
        "question": "Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)",
        "options": [
            "A. The frame has the broadcast address as the destination address.",
            "B. The destination address is unknown to the switch.",
            "C. The source address in the frame header is the broadcast address.",
            "D. The source address in the frame is a multicast address.",
            "E. The destination address in the frame is a known unicast address."
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": "Switch sẽ flood frame khi: frame có địa chỉ đích là broadcast, hoặc địa chỉ đích chưa được biết trong bảng MAC."
    },
    {
        "id": 52,
        "question": "Which device performs the function of determining the path that messages should take through internetworks?",
        "options": [
            "A. a router",
            "B. a firewall",
            "C. a web server",
            "D. a DSL modem"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Router thực hiện chức năng xác định đường đi mà các thông điệp nên đi qua các internetworks."
    },
    {
        "id": 53,
        "question": "A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)",
        "options": [
            "A. The link between the switches will work at the fastest speed that is supported by both switches.",
            "B. The link between switches will work as full-duplex.",
            "C. If both switches support different speeds, they will each work at their own fastest speed.",
            "D. The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable.",
            "E. The connection will not be possible unless the administrator changes the cable to a crossover cable.",
            "F. The duplex capability has to be manually configured because it cannot be negotiated."
        ],
        "correct": [0, 1, 3],
        "type": "multiple",
        "explanation": "Các switch hiện đại có auto-MDIX tự động phát hiện và điều chỉnh cable, tự động đàm phán tốc độ và chế độ full-duplex."
    },
    {
        "id": 54,
        "question": "A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?",
        "options": [
            "A. port-based buffering",
            "B. level 1 cache buffering",
            "C. shared memory buffering",
            "D. fixed configuration buffering"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Shared memory buffering hoạt động tốt nhất khi chuyển đổi giữa các cổng có tốc độ khác nhau vì nó cho phép chia sẻ bộ nhớ đệm giữa tất cả các cổng."
    },
    {
        "id": 55,
        "question": "Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?",
        "options": [
            "A. cut-through switching",
            "B. store-and-forward switching",
            "C. fragment-free switching",
            "D. fast-forward switching"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Store-and-forward switching nhận toàn bộ frame và thực hiện kiểm tra CRC để phát hiện lỗi trước khi chuyển tiếp frame."
    },
    {
        "id": 56,
        "question": "Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices?",
        "options": [
            "A. 1 - rollover, 2 - crossover, 3 - straight-through",
            "B. 1 - rollover, 2 - straight-through, 3 - crossover",
            "C. 1 - crossover, 2 - straight-through, 3 - rollover",
            "D. 1 - crossover, 2 - rollover, 3 - straight-through"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "PC đến console port cần rollover cable, switch đến switch cần crossover cable, switch đến router cần straight-through cable."
    },
    {
        "id": 57,
        "question": "What source IP address does a router use by default when the traceroute command is issued?",
        "options": [
            "A. the highest configured IP address on the router",
            "B. a loopback IP address",
            "C. the IP address of the outbound interface",
            "D. the lowest configured IP address on the router"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Router sử dụng địa chỉ IP của interface outbound làm địa chỉ nguồn mặc định khi thực hiện lệnh traceroute."
    },
    {
        "id": 58,
        "question": "A technician uses the ping 127.0.0.1 command. What is the technician testing?",
        "options": [
            "A. the TCP/IP stack on a network host",
            "B. connectivity between two adjacent Cisco devices",
            "C. connectivity between a PC and the default gateway",
            "D. connectivity between two PCs on the same network",
            "E. physical connectivity of a particular PC and the network"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Ping 127.0.0.1 kiểm tra TCP/IP stack trên máy chủ mạng (loopback address)."
    },
    {
        "id": 59,
        "question": "What are two characteristics of fiber-optic cable? (Choose two.)",
        "options": [
            "A. It is not affected by EMI or RFI.",
            "B. Each pair of cables is wrapped in metallic foil.",
            "C. It combines the technique of cancellation, shielding, and twisting to protect data.",
            "D. It typically contains 4 pairs of fiber-optic wires.",
            "E. It is more expensive than UTP cabling is."
        ],
        "correct": [0, 4],
        "type": "multiple",
        "explanation": "Cáp quang không bị ảnh hưởng bởi EMI hoặc RFI và đắt tiền hơn cáp UTP."
    },
    {
        "id": 60,
        "question": "With the use of unshielded twisted-pair copper wire in a network, what causes crosstalk within the cable pairs?",
        "options": [
            "A. the magnetic field around the adjacent pairs of wire",
            "B. the use of braided wire to shield the adjacent wire pairs",
            "C. the reflection of the electrical wave back from the far end of the cable",
            "D. the collision caused by two nodes trying to use the media simultaneously"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Xuyên âm (crosstalk) trong các cặp cáp xoắn đôi không bọc kim xảy ra do từ trường xung quanh các cặp dây liền kề."
    },
    {
        "id": 61,
        "question": "A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)",
        "options": [
            "A. the amount of traffic that is currently crossing the network",
            "B. the sophistication of the encapsulation method applied to the data",
            "C. the type of traffic that is crossing the network",
            "D. the latency that is created by the number of network devices that the data is crossing",
            "E. the bandwidth of the WAN connection to the Internet",
            "F. the reliability of the gigabit Ethernet infrastructure of the backbone"
        ],
        "correct": [0, 2, 3],
        "type": "multiple",
        "explanation": "Lượng lưu lượng mạng, loại lưu lượng và độ trễ do số lượng thiết bị mạng đều ảnh hưởng đến throughput."
    },
    {
        "id": 62,
        "question": "Which two functions are primary functions of a router? (Choose two.)",
        "options": [
            "A. packet forwarding",
            "B. microsegmentation",
            "C. domain name resolution",
            "D. path selection",
            "E. flow control"
        ],
        "correct": [0, 3],
        "type": "multiple",
        "explanation": "Hai chức năng chính của router là chuyển tiếp gói tin và lựa chọn đường đi."
    },
    {
        "id": 63,
        "question": "Match the command with the device mode at which the command is entered.",
        "options": [
            "A. login",
            "B. service password-encryption",
            "C. ip address 192.168.4.4 255.255.255.0",
            "D. copy running-config startup-config",
            "E. enable"
        ],
        "correct": [4, 0, 2, 3, 1],
        "type": "matching",
        "explanation": "enable - user exec mode, login - line configuration mode, ip address - interface configuration mode, copy running-config startup-config - privileged exec mode, service password-encryption - global configuration mode."
    },
    {
        "id": 64,
        "question": "A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?",
        "options": [
            "A. Reboot the device.",
            "B. Enter CTRL-Z at the privileged mode prompt.",
            "C. Exit global configuration mode.",
            "D. Power cycle the device.",
            "E. Exit privileged EXEC mode and press Enter"
        ],
        "correct": 4,
        "type": "single",
        "explanation": "Thoát khỏi privileged EXEC mode và nhấn Enter là cách nhanh nhất để kiểm tra banner message đã được cấu hình đúng chưa."
    },
    {
        "id": 65,
        "question": "Refer to the exhibit. Consider the IP address configuration shown from PC1. What is a description of the default gateway address?",
        "options": [
            "A. It is the IP address of the Router1 interface that connects the company to the Internet.",
            "B. It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.",
            "C. It is the IP address of Switch1 that connects PC1 to other devices on the same LAN.",
            "D. It is the IP address of the ISP network device located in the cloud."
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Default gateway là địa chỉ IP của interface router kết nối với mạng cục bộ của PC1."
    },
    {
        "id": 66,
        "question": "How many host addresses are available on the 192.168.10.128/26 network?",
        "options": [
            "A. 30",
            "B. 32",
            "C. 60",
            "D. 62",
            "E. 64"
        ],
        "correct": 3,
        "type": "single",
        "explanation": "/26 có 6 bit cho host (32-26=6). Số địa chỉ host khả dụng là 2^6 - 2 = 64 - 2 = 62."
    },
    {
        "id": 67,
        "question": "An administrator wants to create four subnetworks from the network address 192.168.1.0/24. What is the network address and subnet mask of the second useable subnet?",
        "options": [
            "A. subnetwork 192.168.1.64 subnet mask 255.255.255.192",
            "B. subnetwork 192.168.1.32 subnet mask 255.255.255.240",
            "C. subnetwork 192.168.1.64 subnet mask 255.255.255.240",
            "D. subnetwork 192.168.1.128 subnet mask 255.255.255.192",
            "E. subnetwork 192.168.1.8 subnet mask 255.255.255.224"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Để tạo 4 subnet từ /24, cần 2 bit subnet (2^2=4). Subnet mask mới là /26 (255.255.255.192). Subnet thứ hai: 192.168.1.64/26."
    },
    {
        "id": 68,
        "question": "Considering the addresses already used and having to remain within the 10.16.10.0/24 network range, which subnet address could be assigned to the network containing 25 hosts?",
        "options": [
            "A. 10.16.10.160/26",
            "B. 10.16.10.128/28",
            "C. 10.16.10.64/27",
            "D. 10.16.10.224/26",
            "E. 10.16.10.240/27"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Với 25 hosts, cần ít nhất 5 bit host (2^5-2=30). /27 có 5 bit host. 10.16.10.64/27 là subnet hợp lệ."
    },
    {
        "id": 69,
        "question": "Why would a Layer 2 switch need an IP address?",
        "options": [
            "A. to enable the switch to send broadcast frames to attached PCs",
            "B. to enable the switch to function as a default gateway",
            "C. to enable the switch to be managed remotely",
            "D. to enable the switch to receive frames from attached PCs"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Switch Layer 2 cần địa chỉ IP để được quản lý từ xa thông qua Telnet, SSH, hoặc web interface."
    },
    {
        "id": 70,
        "question": "Which interface allows remote management of a Layer 2 switch?",
        "options": [
            "A. the AUX interface",
            "B. the console port interface",
            "C. the switch virtual interface",
            "D. the first Ethernet port interface"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Switch virtual interface (SVI) cho phép quản lý từ xa switch Layer 2."
    },
    {
        "id": 71,
        "question": "Passwords can be used to restrict access to all or parts of the Cisco IOS. Select the modes and interfaces that can be protected with passwords. (Choose three.)",
        "options": [
            "A. VTY interface",
            "B. console interface",
            "C. Ethernet interface",
            "D. boot IOS mode",
            "E. privileged EXEC mode",
            "F. router configuration mode"
        ],
        "correct": [0, 1, 4],
        "type": "multiple",
        "explanation": "Các mode và interface có thể được bảo vệ bằng mật khẩu: VTY interface, console interface, và privileged EXEC mode."
    },
    {
        "id": 72,
        "question": "Which statement describes a feature of the IP protocol?",
        "options": [
            "A. IP encapsulation is modified based on network media.",
            "B. IP relies on Layer 2 protocols for transmission error control.",
            "C. MAC addresses are used during the IP packet encapsulation.",
            "D. IP relies on upper layer services to handle situations of missing or out-of-order packets."
        ],
        "correct": 3,
        "type": "single",
        "explanation": "IP dựa vào các dịch vụ tầng trên để xử lý các tình huống mất gói tin hoặc gói tin không theo thứ tự."
    },
    {
        "id": 73,
        "question": "What are two services provided by the OSI network layer? (Choose two.)",
        "options": [
            "A. performing error detection",
            "B. routing packets toward the destination",
            "C. encapsulating PDUs from the transport layer",
            "D. placement of frames on the media",
            "E. collision detection"
        ],
        "correct": [1, 2],
        "type": "multiple",
        "explanation": "Tầng mạng OSI cung cấp: định tuyến gói tin đến đích và đóng gói PDU từ tầng giao vận."
    },
    {
        "id": 74,
        "question": "Why is NAT not needed in IPv6?",
        "options": [
            "A. Because IPv6 has integrated security, there is no need to hide the IPv6 addresses of internal networks.",
            "B. Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.",
            "C. The problems that are induced by NAT applications are solved because the IPv6 header improves packet handling by intermediate routers.",
            "D. The end-to-end connectivity problems that are caused by NAT are solved because the number of routes increases with the number of nodes that are connected to the Internet."
        ],
        "correct": 1,
        "type": "single",
        "explanation": "NAT không cần thiết trong IPv6 vì số lượng địa chỉ IPv6 cực kỳ lớn, cho phép mọi host hoặc user có địa chỉ public."
    },
    {
        "id": 75,
        "question": "A PC is downloading a large file from a server. The TCP window is 1000 bytes. The server is sending the file using 100-byte segments. How many segments will the server send before it requires an acknowledgment from the PC?",
        "options": [
            "A. 1 segment",
            "B. 10 segments",
            "C. 100 segments",
            "D. 1000 segments"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "TCP window size là 1000 bytes, mỗi segment 100 bytes. Số segment = 1000 / 100 = 10 segments trước khi cần ACK."
    },
    {
        "id": 76,
        "question": "A client packet is received by a server. The packet has a destination port number of 22. What service is the client requesting?",
        "options": [
            "A. SSH",
            "B. DHCP",
            "C. DNS",
            "D. TFTP"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Port 22 được sử dụng cho SSH (Secure Shell)."
    },
    {
        "id": 77,
        "question": "Which two fields are the same in a TCP and UDP header? (Choose two.)",
        "options": [
            "A. Control bits",
            "B. Destination port number",
            "C. Sequence number",
            "D. Source port number",
            "E. Well-known port number"
        ],
        "correct": [1, 3],
        "type": "multiple",
        "explanation": "Cả TCP và UDP header đều có source port number và destination port number."
    },
    {
        "id": 78,
        "question": "How are port numbers used in the TCP/IP encapsulation process?",
        "options": [
            "A. Source port numbers and destination port numbers are not necessary when UDP is the transport layer protocol being used for the communication.",
            "B. Source port and destination port numbers are randomly generated.",
            "C. If multiple conversations occur that are using the same service, the source port number is used to track the separate conversations.",
            "D. Destination port numbers are assigned automatically and cannot be changed."
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Số cổng nguồn được sử dụng để theo dõi các cuộc hội thoại riêng biệt khi nhiều cuộc hội thoại sử dụng cùng một dịch vụ."
    },
    {
        "id": 79,
        "question": "Which topology displays networking device layer IP addresses?",
        "options": [
            "A. Aerial topology",
            "B. IP address topology",
            "C. Logical topology",
            "D. Physical topology"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Logical topology hiển thị địa chỉ IP và cách các thiết bị kết nối logic với nhau."
    },
    {
        "id": 80,
        "question": "Which statement describes a characteristic of the frame header fields of the data link layer?",
        "options": [
            "A. They all include the flow control and logical connection fields.",
            "B. Ethernet frame header fields contain Layer 3 source and destination addresses.",
            "C. They vary depending on protocols.",
            "D. They include information on user applications."
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Các trường header của frame thay đổi tùy thuộc vào giao thức được sử dụng."
    },
    {
        "id": 81,
        "question": "Which statement describes the half-duplex mode of data transmission?",
        "options": [
            "A. Data that is transmitted over the network can only flow in one direction.",
            "B. Data that is transmitted over the network flows in both directions at the same time.",
            "C. Data that is transmitted over the network flows in one direction to many different destinations simultaneously.",
            "D. Data that is transmitted over the network flows in one direction at a time."
        ],
        "correct": 3,
        "type": "single",
        "explanation": "Half-duplex cho phép dữ liệu truyền theo một hướng tại một thời điểm."
    },
    {
        "id": 82,
        "question": "A web client is receiving a response for a web page from a web server. From the perspective of the client, what is the correct order of the protocol stack that is used to decode the received transmission?",
        "options": [
            "A. Ethernet, IP, TCP, HTTP",
            "B. HTTP, TCP, IP, Ethernet",
            "C. Ethernet, TCP, IP, HTTP",
            "D. HTTP, Ethernet, IP, TCP"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Client nhận frame từ tầng vật lý lên: Ethernet (Data Link) → IP (Network) → TCP (Transport) → HTTP (Application)."
    },
    {
        "id": 83,
        "question": "What is the process of dividing a large data stream into smaller pieces prior to transmission?",
        "options": [
            "A. Sequencing",
            "B. Duplexing",
            "C. Multiplexing",
            "D. segmentation"
        ],
        "correct": 3,
        "type": "single",
        "explanation": "Segmentation là quá trình chia nhỏ luồng dữ liệu lớn thành các phần nhỏ hơn trước khi truyền."
    },
    {
        "id": 84,
        "question": "UDP and TCP belong to which layer of the TCP/IP protocol?",
        "options": [
            "A. Application",
            "B. Transport",
            "C. Internet",
            "D. Network access"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "UDP và TCP thuộc tầng Transport trong mô hình TCP/IP."
    },
    {
        "id": 85,
        "question": "Which protocol is used by an FTP client to establish a control connection with the FTP server?",
        "options": [
            "A. TCP port 20",
            "B. TCP port 21",
            "C. UDP port 53",
            "D. TCP port 25"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "FTP sử dụng TCP port 21 cho kết nối điều khiển."
    },
    {
        "id": 86,
        "question": "What process does a device use to verify that its IPv6 address is unique on the network?",
        "options": [
            "A. DHCPv6",
            "B. SLAAC",
            "C. Neighbor Discovery Protocol (NDP)",
            "D. Duplicate Address Detection (DAD)"
        ],
        "correct": 3,
        "type": "single",
        "explanation": "Duplicate Address Detection (DAD) được sử dụng để xác minh địa chỉ IPv6 là duy nhất trên mạng."
    },
    {
        "id": 87,
        "question": "What type of address is automatically assigned to an interface when IPv6 is enabled on that interface?",
        "options": [
            "A. Loopback",
            "B. Global unicast",
            "C. Link-local",
            "D. Unique local"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Địa chỉ link-local được tự động gán khi IPv6 được kích hoạt trên interface."
    },
    {
        "id": 88,
        "question": "Which of the following techniques use native IPv6 connectivity?",
        "options": [
            "A. Dual stack",
            "B. Tunelling",
            "C. Translation",
            "D. All of the above"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Dual stack sử dụng kết nối IPv6 gốc, trong khi tunneling và translation là các kỹ thuật chuyển tiếp."
    },
    {
        "id": 89,
        "question": "Which address type is not supported in IPv6?",
        "options": [
            "A. Multicast",
            "B. Private",
            "C. Unicast",
            "D. Broadcast"
        ],
        "correct": 3,
        "type": "single",
        "explanation": "IPv6 không hỗ trợ broadcast, thay vào đó sử dụng multicast."
    },
    {
        "id": 90,
        "question": "What is the aim of an ARP spoofing attack?",
        "options": [
            "A. to flood the network with ARP reply broadcasts",
            "B. to fill switch MAC address tables with bogus addresses",
            "C. to associate IP addresses to the wrong MAC address",
            "D. to overwhelm network hosts with ARP requests"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "ARP spoofing nhằm liên kết địa chỉ IP với địa chỉ MAC sai để chặn lưu lượng mạng."
    },
    {
        "id": 91,
        "question": "What type of network traffic requires QoS?",
        "options": [
            "A. email",
            "B. on-line purchasing",
            "C. video conferencing",
            "D. wiki"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Video conferencing yêu cầu QoS vì cần băng thông ổn định và độ trễ thấp."
    },
    {
        "id": 92,
        "question": "Which type of network topology lets you see the actual location of intermediary devices and cable installation?",
        "options": [
            "A. Physical topology",
            "B. Logical topology"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Physical topology hiển thị vị trí thực tế của các thiết bị và cài đặt cáp."
    },
    {
        "id": 93,
        "question": "Which two devices are intermediary devices? (Choose two)",
        "options": [
            "A. Hosts",
            "B. Routers",
            "C. Servers",
            "D. Switches"
        ],
        "correct": [1, 3],
        "type": "multiple",
        "explanation": "Router và Switch là các thiết bị trung gian trong mạng."
    },
    {
        "id": 94,
        "question": "Which part of an Ethernet frame detects errors in the frame?",
        "options": [
            "A. Preamble",
            "B. Start of Frame Delimiter",
            "C. Frame Check Sequence"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Frame Check Sequence (FCS) được sử dụng để phát hiện lỗi trong frame."
    },
    {
        "id": 95,
        "question": "What is the auto-MDIX feature on a switch?",
        "options": [
            "A. the automatic configuration of an interface for 10/100/1000 Mb/s operation",
            "B. the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection",
            "C. the automatic configuration of full-duplex operation over a single Ethernet copper or optical cable",
            "D. the ability to turn a switch interface on or off accordingly if an active connection is detected"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Auto-MDIX tự động phát hiện và điều chỉnh cho straight-through hoặc crossover cable."
    },
    {
        "id": 96,
        "question": "What is the special value assigned to the first 24 bits of a multicast MAC address transporting an IPv4 packet?",
        "options": [
            "A. 01-00-5E",
            "B. FF-00-5E",
            "C. 01-5E-00",
            "D. FF-FF-FF"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "24 bit đầu của địa chỉ multicast MAC cho IPv4 là 01-00-5E."
    },
    {
        "id": 97,
        "question": "Which network device has the primary function to send data to a specific destination based on the information found in the MAC address table?",
        "options": [
            "A. Hub",
            "B. Router",
            "C. Switch",
            "D. Modem"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Switch sử dụng bảng MAC address để chuyển tiếp frame đến đích cụ thể."
    },
    {
        "id": 98,
        "question": "What does the 'Time Exceeded' ICMP message indicate?",
        "options": [
            "A. The destination host is down",
            "B. The packet's TTL has reached zero",
            "C. The source address is unreachable",
            "D. The network is congested"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "ICMP 'Time Exceeded' cho biết TTL của gói tin đã đạt đến 0."
    },
    {
        "id": 99,
        "question": "A user executes a traceroute over IPv6. At what point would a router in the path to the destination device drop the packet?",
        "options": [
            "A. when the value of the Hop Limit field reaches 255",
            "B. when the value of the Hop Limit field reaches zero",
            "C. when the router receives an ICMP time exceeded message",
            "D. when the target host responds with an ICMP echo reply message"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Router sẽ drop packet khi Hop Limit field trong IPv6 đạt đến 0."
    },
    {
        "id": 100,
        "question": "Which of these is the name for the capacity of a medium to carry data?",
        "options": [
            "A. Bandwidth",
            "B. Throughput",
            "C. Goodput"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "Bandwidth là khả năng của phương tiện truyền dẫn để mang dữ liệu."
    },
    {
        "id": 101,
        "question": "What is the loopback address used for in IPv4 networking?",
        "options": [
            "A. To route packets to a different network",
            "B. To test if the TCP/IP stack is functioning correctly",
            "C. To identify the default gateway",
            "D. To assign a dynamic IP address"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Địa chỉ loopback (127.0.0.1) được sử dụng để kiểm tra TCP/IP stack."
    },
    {
        "id": 102,
        "question": "What is the prefix length notation for the subnet mask 255.255.255.224?",
        "options": [
            "A. /28",
            "B. /27",
            "C. /26",
            "D. /25"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "255.255.255.224 có 27 bit network, tương đương với /27."
    },
    {
        "id": 103,
        "question": "What is the main purpose of a subnet mask in IPv4 addressing?",
        "options": [
            "A. To identify the gateway of the network",
            "B. To determine the network and host portions of an IP address",
            "C. To provide security by masking IP addresses",
            "D. To route packets between networks"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Subnet mask xác định phần network và host của địa chỉ IP."
    },
    {
        "id": 104,
        "question": "Which access method would be the most appropriate in-band access to the IOS over a network connection?",
        "options": [
            "A. Console",
            "B. Telnet/SSH",
            "C. Aux"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Telnet/SSH là phương thức in-band để truy cập IOS qua kết nối mạng."
    },
    {
        "id": 105,
        "question": "An administrator is configuring a switch console port with a password. In what order will the administrator travel through the IOS modes of operation in order to reach the mode in which the configuration commands will be entered?",
        "options": [
            "A. A5-B2-C4-D3",
            "B. A1-B2-C3-D4",
            "C. A2-B1-C4-D3",
            "D. A5-B1-C2-D3"
        ],
        "correct": 0,
        "type": "single",
        "explanation": "User EXEC (A5) → Privileged EXEC (B2) → Global config (C4) → Line config (D3)."
    },
    {
        "id": 106,
        "question": "How is the privileged EXEC mode access secured on a switch?",
        "options": [
            "A. enable class",
            "B. secret class",
            "C. enable secret cisco@12345",
            "D. service password-encryption"
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Lệnh 'enable secret' được sử dụng để bảo mật truy cập privileged EXEC mode."
    },
    {
        "id": 107,
        "question": "What are the two most commonly referenced fields in an IPv4 packet header that indicate where the packet is coming from and where it is going? (Choose two.)",
        "options": [
            "A. Destination IP address",
            "B. Protocol",
            "C. Time to live",
            "D. Differentiated Service (DS)",
            "E. Source IP address"
        ],
        "correct": [0, 4],
        "type": "multiple",
        "explanation": "Source IP address và Destination IP address chỉ ra nguồn và đích của gói tin."
    },
    {
        "id": 108,
        "question": "What destination MAC address would be included in a frame sent from a source device to a destination device on a remote local network?",
        "options": [
            "A. A broadcast MAC address of FF-FF-FF-FF-FF-FF.",
            "B. The MAC address of the destination device.",
            "C. The MAC address of the local router interface."
        ],
        "correct": 2,
        "type": "single",
        "explanation": "Khi gửi đến mạng từ xa, frame sẽ có địa chỉ MAC của interface router cục bộ."
    },
    {
        "id": 109,
        "question": "When transporting data from real-time applications, such as streaming audio and video, which field in the IPv6 header can be used to inform the routers and switches to maintain the same path for the packets in the same conversation?",
        "options": [
            "A. Next Header",
            "B. Flow Label",
            "C. Traffic Class",
            "D. Differentiated Services"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "Flow Label trong IPv6 header được sử dụng để duy trì cùng một đường đi cho các gói trong cùng cuộc hội thoại."
    },
    {
        "id": 110,
        "question": "What is the primary purpose of the ICMP protocol?",
        "options": [
            "A. To route packets across different networks",
            "B. To provide feedback about issues related to IP packet processing",
            "C. To encrypt data before transmission",
            "D. To assign IP addresses to devices"
        ],
        "correct": 1,
        "type": "single",
        "explanation": "ICMP cung cấp phản hồi về các vấn đề liên quan đến xử lý gói tin IP."
    }
]