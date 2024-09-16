<script>
    import { onMount } from 'svelte';
  
    // Path to your PDF file in the static folder
    if (window && typeof window !== undefined){
        const pdfUrl = `${window.location.origin}/assets/files/Portfolio-Page.pdf`;
    }

    function downloadPDF() {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Resume.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  
    onMount(() => {
        if (window && typeof window !== undefined){
            downloadPDF();
        }
    });
</script>