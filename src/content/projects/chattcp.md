---
title: "ChatTCP — Custom Reliable Transport over UDP"
context: "ITB IF2230 Computer Networks Coursework (Team Project)"
description: "Implementation of a reliable connection-oriented transport protocol operating over UDP sockets in Python, featuring TCP connection handshake semantics, sliding-window flow control, and a multi-client CLI chat room."
problem: "Raw UDP sockets do not provide connection state, delivery guarantees, ordering, or flow control. The assignment required constructing reliable transport mechanisms from scratch at the application layer."
solution: "Engineered custom packet framing with header fields, three-way handshake (SYN, SYN-ACK, ACK), sliding window flow control with configurable window buffers, 16-bit Internet checksum calculation, and timeout-based packet retransmission."
stack: ["Python", "UDP Sockets", "Sliding Window", "Internet Checksum", "CLI Protocol"]
link: "https://github.com/labsister22/tugas-besar-if2230-jaringan-komputer-bangkasinapasdikitnapa"
order: 1
---
