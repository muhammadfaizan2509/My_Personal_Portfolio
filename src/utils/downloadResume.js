import resumePdfFile from '../assets/Muhammad_Faizan_Resume.pdf';

export { resumePdfFile };

export function triggerResumeDownload() {
  fetch(resumePdfFile)
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch PDF');
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Muhammad_Faizan_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        a.remove();
      }, 100);
    })
    .catch(() => {
      // Fallback
      const a = document.createElement('a');
      a.href = resumePdfFile || '/Muhammad_Faizan_Resume.pdf';
      a.download = 'Muhammad_Faizan_Resume.pdf';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
}
