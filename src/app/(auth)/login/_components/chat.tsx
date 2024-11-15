"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";

interface Message {
	id: number;
	text: string;
	sender: "user" | "support";
}

const LoginForm = () => {
	//  const [isOpen, setIsOpen] = React.useState(false);
	const [messages, setMessages] = React.useState<Message[]>([
		{ id: 1, text: "Hello! How can I assist you today?", sender: "support" },
	]);
	const [inputMessage, setInputMessage] = React.useState("");
	const scrollAreaRef = React.useRef<HTMLDivElement>(null);

	// const toggleChat = () => setIsOpen(!isOpen);

	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (inputMessage.trim()) {
			const newMessage: Message = {
				id: messages.length + 1,
				text: inputMessage,
				sender: "user",
			};
			setMessages([...messages, newMessage]);
			setInputMessage("");

			// Simulate support response
			setTimeout(() => {
				const supportResponse: Message = {
					id: messages.length + 2,
					text: "I've received your message. Our AI is processing your request.",
					sender: "support",
				};
				setMessages((prevMessages) => [...prevMessages, supportResponse]);
			}, 1000);
		}
	};

	// Auto-scroll to the last message
	React.useEffect(() => {
		if (scrollAreaRef.current) {
			const scrollElement = scrollAreaRef.current.querySelector(
				"[data-radix-scroll-area-viewport]"
			) as HTMLElement;
			if (scrollElement) {
				scrollElement.scrollTop = scrollElement.scrollHeight;
			}
		}
	}, [messages]);

	return (
		<div
			className={`
          absolute bottom-20 right-0 w-96 
          bg-gradient-to-br from-gray-900 to-gray-800
          rounded-2xl overflow-hidden
          shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.05)]
          transition-all duration-500 ease-in-out
        `}>
			<div className="p-4 border-b border-gray-700">
				<h2 className="text-xl font-semibold text-gray-100">AI Support</h2>
			</div>
			<ScrollArea className="h-80 p-4" ref={scrollAreaRef}>
				{messages.map((message) => (
					<div
						key={message.id}
						className={`
                  mb-4 p-3 rounded-2xl max-w-[80%]
                  ${
										message.sender === "user"
											? "ml-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white"
											: "mr-auto bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200"
									}
                  shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.05)]
                `}>
						{message.text}
					</div>
				))}
			</ScrollArea>
			<form
				onSubmit={handleSendMessage}
				className="p-4 border-t border-gray-700">
				<div className="flex space-x-2">
					<Input
						type="text"
						placeholder="Type your message..."
						value={inputMessage}
						onChange={(e) => setInputMessage(e.target.value)}
						className={`
                  flex-grow bg-gray-800 border-none
                  text-gray-200 placeholder-gray-500
                  shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]
                  focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.1)]
                  rounded-xl
                `}
					/>
					<Button
						type="submit"
						className={`
                  bg-gradient-to-r from-blue-600 to-blue-700
                  shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.05)]
                  hover:shadow-[1px_1px_2px_rgba(0,0,0,0.4),-1px_-1px_2px_rgba(255,255,255,0.1)]
                  active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]
                  rounded-xl transition-all duration-300
                `}>
						<Send className="h-5 w-5" />
					</Button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
