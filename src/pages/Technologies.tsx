import StackCards from "@/features/technologies/components/StackCards"
import ArchitectureExplorer from "@/features/technologies/components/ArchitectureExplorer"
import GameSystems from "@/features/technologies/components/GameSystems";

export default function Technologies() {

    return (
        <main>
            <section id="stack" className="scroll-mt-24"><StackCards /></section>

            <section id="architecture" className="scroll-mt-24">
                <ArchitectureExplorer />
            </section>

            <section id="systems">
                <GameSystems />
            </section>
        </main>
    );
}