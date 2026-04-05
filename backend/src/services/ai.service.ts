export const analyzeFood = async (imageUrl: string): Promise<string | undefined> => {
  // Simulação de análise IA
  const feedbacks = [
    "Prato bem apresentado, cores vibrantes e textura adequada.",
    "Pode melhorar na apresentação; considere adicionar mais vegetais.",
    "Excelente execução! Corresponde perfeitamente à receita.",
    "Detecção de possível fraude: imagem não parece autêntica.",
    "Bom trabalho, mas a textura poderia ser mais crocante."
  ];
  return feedbacks[Math.floor(Math.random() * feedbacks.length)];
};