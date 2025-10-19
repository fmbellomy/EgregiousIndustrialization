ServerEvents.recipes((event) => {
    // BASIC, ADVANCED, TURBO, HIGHLY_ADVANCED, QUANTUM
    const MI = (str) => {
        return `modern_industrialization:${str}`;
    };
    event.replaceInput(
        { output: MI("advanced_machine_casing") },
        MI("basic_machine_hull"),
        MI("steel_machine_casing")
    );
    event.replaceInput(
        { output: MI("turbo_machine_casing") },
        MI("advanced_machine_hull"),
        MI("advanced_machine_casing")
    );
    event.replaceInput(
        { output: MI("highly_advanced_machine_casing") },
        MI("turbo_machine_hull"),
        MI("turbo_machine_casing")
    );
    event.replaceInput(
        { output: MI("quantum_machine_casing") },
        MI("highly_advanced_machine_hull"),
        MI("highly_advanced_machine_casing")
    );
});
