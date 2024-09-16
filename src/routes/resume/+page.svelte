<script>
    import { onMount } from 'svelte';
  
    // Path to your PDF file in the static folder
    const pdfUrl = 'static/assets/files/Portfolio-Page.pdf';
  
    function downloadPDF() {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Resume.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  
    onMount(() => {
      downloadPDF();
    });
</script>