export const chunkFramework = (framework) => {
  const chunks = [];

  if (!framework.controls || framework.controls.length === 0) {
    // we will make our own text
    const text = `Framework : ${framework.name} (${framework.shortCode})
    Description : ${framework.description} || "No Description provided"
    Authority : ${framework.authority} || "N/A"
    `;

    chunks.push({
      text,
      metadata: {
        frameworkId: framework._id.toString(),
        frameworkuuid: framework.uuid,
        frameworkName: framework.name,
        shortCode: framework.shortCode,
        isGeneralDescription: true,
      },
    });

    return chunks;
  }

  framework.controls.forEach((control) => {
    const text = `Framework : ${framework.name} (${framework.shortCode})
    controlId : ${control.controlId} - ${control.title}
    requirementText: ${control.requirementText} || "N/A"
    description: ${control.description} || "N/A"
    riskLevel: ${control.riskLevel}
    mandatory: ${control.mandatory ? "Yes" : "No"}
    tags : ${control.tags && control.tag.length > 0 ? control.tag.join(", ") : "None"}
    `;

    chunks.push({
      text,
      metadata: {
        frameworkcontrolId: control.controlId,
        frameworkId: framework._id.toString(),
        frameworkuuid: framework.uuid,
        frameworkName: framework.name,
        shortCode: framework.shortCode,
      },
    });
  });

  return chunks;
};
