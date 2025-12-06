const arquivoInput = document.getElementById("arquivoInput");
const areaUpload = document.getElementById("areaUpload");
const previewContainer = document.getElementById("previewContainer");
const imagemPreview = document.getElementById("imagemPreview");
const nomeArquivo = document.getElementById("nomeArquivo");

const botaoSubstituir = document.getElementById("botaoSubstituir");
const botaoRemover = document.getElementById("botaoRemover");
const botaoRemoverPequeno = document.getElementById("botaoRemoverPequeno");

function exibirPreview(arquivo) {
    const url = URL.createObjectURL(arquivo);
    imagemPreview.src = url;
    nomeArquivo.textContent = arquivo.name;

    areaUpload.classList.add("oculto");
    previewContainer.classList.remove("oculto");
}

areaUpload.addEventListener("click", () => arquivoInput.click());

arquivoInput.addEventListener("change", (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) exibirPreview(arquivo);
});

areaUpload.addEventListener("dragover", (e) => {
    e.preventDefault();
    areaUpload.classList.add("arrastando");
});

areaUpload.addEventListener("dragleave", () => {
    areaUpload.classList.remove("arrastando");
});

areaUpload.addEventListener("drop", (e) => {
    e.preventDefault();
    areaUpload.classList.remove("arrastando");

    const arquivo = e.dataTransfer.files[0];
    if (arquivo && arquivo.type.startsWith("image/")) {
        exibirPreview(arquivo);
    }
});

function removerImagem() {
    previewContainer.classList.add("oculto");
    areaUpload.classList.remove("oculto");
    arquivoInput.value = "";
}

botaoSubstituir.addEventListener("click", () => arquivoInput.click());
botaoRemover.addEventListener("click", removerImagem);
botaoRemoverPequeno.addEventListener("click", removerImagem);
