import { useEffect, useState } from "react";

interface NeuralNode {
  id: number;
  top: string;
  left: string;
  delay: string;
}

interface NeuralConnection {
  id: number;
  top: string;
  left: string;
  width: string;
  rotation: string;
  delay: string;
}

export default function NeuralVisualization() {
  const [nodes, setNodes] = useState<NeuralNode[]>([]);
  const [connections, setConnections] = useState<NeuralConnection[]>([]);

  useEffect(() => {
    const nodeData: NeuralNode[] = [
      { id: 1, top: "20%", left: "30%", delay: "0s" },
      { id: 2, top: "35%", left: "15%", delay: "1s" },
      { id: 3, top: "45%", left: "45%", delay: "2s" },
      { id: 4, top: "25%", left: "70%", delay: "0.5s" },
      { id: 5, top: "60%", left: "25%", delay: "1.5s" },
      { id: 6, top: "75%", left: "55%", delay: "3s" },
      { id: 7, top: "55%", left: "80%", delay: "2.5s" },
      { id: 8, top: "80%", left: "35%", delay: "3.5s" }
    ];

    const connectionData: NeuralConnection[] = [
      { id: 1, top: "25%", left: "30%", width: "200px", rotation: "25deg", delay: "0s" },
      { id: 2, top: "50%", left: "20%", width: "150px", rotation: "-15deg", delay: "2s" },
      { id: 3, top: "70%", left: "40%", width: "180px", rotation: "45deg", delay: "1s" },
      { id: 4, top: "40%", left: "50%", width: "120px", rotation: "-30deg", delay: "3s" }
    ];

    setNodes(nodeData);
    setConnections(connectionData);
  }, []);

  return (
    <div className="relative w-96 h-96">
      {/* Neural connections */}
      {connections.map((connection) => (
        <div
          key={connection.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-astrian-teal to-transparent opacity-40 animate-float"
          style={{
            top: connection.top,
            left: connection.left,
            width: connection.width,
            transform: `rotate(${connection.rotation})`,
            animationDelay: connection.delay
          }}
        />
      ))}
      
      {/* Neural nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute w-2 h-2 gradient-bg rounded-full opacity-80 animate-pulse-soft"
          style={{
            top: node.top,
            left: node.left,
            animationDelay: node.delay
          }}
        />
      ))}
      
      {/* Central glowing node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 gradient-bg rounded-full opacity-80 animate-pulse-soft flex items-center justify-center">
        <div className="w-8 h-8 bg-white rounded-full opacity-90"></div>
      </div>
    </div>
  );
}
