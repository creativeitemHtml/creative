<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ChangeInertiaUrl extends Command
{
    protected $signature = 'change:inertia-url';

    protected $description = 'Change the url routing pattern in Inertia Response';


    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        // Set the file path to the Response.php file in the vendor folder
        $filePath = base_path('vendor/inertiajs/inertia-laravel/src/Response.php');

        // Check if the file exists
        if (!file_exists($filePath)) {
            $this->error('File not found');
            return;
        }

        // The line that we want to replace
        $oldLine = "\$request->getBaseUrl().\$request->getRequestUri()";

        // The new line that will replace the old line
        $newLine = "\$request->fullUrl()";

        // Get the content of the file
        $fileContent = file_get_contents($filePath);

        // Replace the old line with the new line in the file
        $newFileContent = str_replace($oldLine, $newLine, $fileContent);

        // Write the updated content back to the file
        file_put_contents($filePath, $newFileContent);
        $this->info('Change Successfully Applied.');
    }
}
