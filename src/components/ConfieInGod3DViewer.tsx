import { Component, Suspense, useMemo, useState, type ReactNode } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Center, OrbitControls, Text3D } from "@react-three/drei";
import { ThreeMFLoader } from "three/addons/loaders/3MFLoader.js";
import { waLink } from "../config";
import "../styles/ConfieInGod3DViewer.css";

const BACK_FONT = "/fonts/helvetiker_bold.typeface.json";
const FRONT_FONT = "/fonts/gentilis_regular.typeface.json";
const COLORS = [
  { name: "Branco", value: "#F5F1E8" },
  { name: "Preto", value: "#1A1A1A" },
  { name: "Laranja", value: "#FF5500" },
  { name: "Ciano", value: "#35D6C4" },
  { name: "Vermelho", value: "#D0342C" },
];

function colorName(value: string) {
  return (
    COLORS.find((color) => color.value.toLowerCase() === value.toLowerCase())
      ?.name ?? value.toUpperCase()
  );
}

class ViewerErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="confie-viewer-fallback">
          Não foi possível carregar a prévia 3D agora. Você ainda pode
          personalizar e solicitar seu letreiro.
        </div>
      );
    }
    return this.props.children;
  }
}

function SignModel({
  backText,
  frontText,
  backColor,
  frontColor,
}: {
  backText: string;
  frontText: string;
  backColor: string;
  frontColor: string;
}) {
  return (
    <group rotation={[-0.15, 0, 0]}>
      <Center position={[0, 0.2, 0]}>
        <Text3D
          font={BACK_FONT}
          size={1.15}
          height={0.42}
          curveSegments={8}
          bevelEnabled
          bevelSize={0.025}
          bevelThickness={0.025}
        >
          {backText || "Confie"}
          <meshStandardMaterial
            color={backColor}
            roughness={0.4}
            metalness={0.05}
          />
        </Text3D>
      </Center>
      <Center position={[0, -0.62, 0.5]}>
        <Text3D
          font={FRONT_FONT}
          size={0.7}
          height={0.18}
          curveSegments={8}
          bevelEnabled
          bevelSize={0.015}
          bevelThickness={0.015}
        >
          {frontText || "em Deus"}
          <meshStandardMaterial
            color={frontColor}
            roughness={0.32}
            metalness={0.08}
          />
        </Text3D>
      </Center>
    </group>
  );
}

function PhysicalSign({
  modelPath,
  scale,
}: {
  modelPath: string;
  scale: number;
}) {
  const model = useLoader(ThreeMFLoader, modelPath);
  return (
    <Center>
      <primitive object={model} rotation={[-Math.PI / 2, 0, 0]} scale={scale} />
    </Center>
  );
}

function ColorControl({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="confie-control">
      <span>{label}</span>
      <div className="confie-colors">
        {COLORS.map((color) => (
          <button
            aria-label={color.name}
            aria-pressed={value.toLowerCase() === color.value.toLowerCase()}
            className={
              value.toLowerCase() === color.value.toLowerCase()
                ? "selected"
                : ""
            }
            key={color.value}
            onClick={() => onChange(color.value)}
            style={{ backgroundColor: color.value }}
            type="button"
          />
        ))}
        <input
          aria-label={`Escolher ${label.toLowerCase()}`}
          onChange={(event) => onChange(event.target.value)}
          type="color"
          value={value}
        />
      </div>
    </div>
  );
}

export default function ConfieInGod3DViewer({
  modelPath,
  scale = 0.01,
}: {
  modelPath: string;
  scale?: number;
}) {
  const [backText, setBackText] = useState("Confie");
  const [frontText, setFrontText] = useState("em Deus");
  const [backColor, setBackColor] = useState("#F5F1E8");
  const [frontColor, setFrontColor] = useState("#1A1A1A");
  const [viewMode, setViewMode] = useState<"custom" | "physical">("custom");
  const whatsappLink = useMemo(
    () =>
      waLink(
        `Olá Bruchez! Quero encomendar o Letreiro Personalizado:\n- Texto de fundo: ${backText || "Confie"} (Cor: ${colorName(backColor)})\n- Texto da frente: ${frontText || "em Deus"} (Cor: ${colorName(frontColor)})\nComo faço para fechar o pedido?`,
      ),
    [backColor, backText, frontColor, frontText],
  );

  return (
    <section className="confie-viewer" aria-labelledby="confie-viewer-title">
      <div className="confie-viewer-heading">
        <span className="eyebrow">Visualizador interativo</span>
        <h2 id="confie-viewer-title">Veja seu letreiro em duas camadas</h2>
        <p>Personalize os textos e as cores antes de enviar sua encomenda.</p>
      </div>
      <div className="confie-viewer-grid">
        <div className="confie-canvas">
          <ViewerErrorBoundary key={viewMode}>
            <Canvas camera={{ position: [0, 0.15, 7.5], fov: 42 }} dpr={[1, 2]}>
              <color attach="background" args={["#121316"]} />
              <ambientLight intensity={1.15} />
              <directionalLight position={[4, 5, 6]} intensity={2.2} />
              <directionalLight position={[-4, -2, 3]} intensity={0.7} />
              <Suspense fallback={null}>
                {viewMode === "custom" ? (
                  <SignModel
                    backColor={backColor}
                    backText={backText}
                    frontColor={frontColor}
                    frontText={frontText}
                  />
                ) : (
                  <PhysicalSign modelPath={modelPath} scale={scale} />
                )}
              </Suspense>
              <OrbitControls
                enablePan={false}
                maxDistance={11}
                minDistance={4.5}
              />
            </Canvas>
          </ViewerErrorBoundary>
          <span className="confie-canvas-hint">
            Arraste para girar · use o scroll para aproximar
          </span>
        </div>
        <div className="confie-panel">
          <div
            className="confie-view-toggle"
            role="group"
            aria-label="Modo de visualização"
          >
            <button
              className={viewMode === "custom" ? "active" : ""}
              onClick={() => setViewMode("custom")}
              type="button"
            >
              Prévia personalizada
            </button>
            <button
              className={viewMode === "physical" ? "active" : ""}
              onClick={() => setViewMode("physical")}
              type="button"
            >
              Ver modelo físico original
            </button>
          </div>
          {viewMode === "physical" && (
            <p className="confie-reference-note">
              Modelo físico original em 3MF. As escolhas abaixo continuam sendo
              enviadas como referência para sua encomenda.
            </p>
          )}
          <label className="confie-control">
            <span>Texto de fundo</span>
            <input
              maxLength={18}
              onChange={(event) => setBackText(event.target.value)}
              value={backText}
            />
          </label>
          <ColorControl
            label="Cor da camada de fundo"
            onChange={setBackColor}
            value={backColor}
          />
          <label className="confie-control">
            <span>Texto da frente</span>
            <input
              maxLength={22}
              onChange={(event) => setFrontText(event.target.value)}
              value={frontText}
            />
          </label>
          <ColorControl
            label="Cor da camada da frente"
            onChange={setFrontColor}
            value={frontColor}
          />
          <a
            className="confie-order-button"
            href={whatsappLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Encomendar com Estas Cores
          </a>
        </div>
      </div>
    </section>
  );
}
